#!/usr/bin/env node
/**
 * Static health check for the site. Catches the things that actually break this
 * repo: a moved image, a blog post that never made it into the sitemap, a
 * copy-pasted canonical pointing at the wrong page.
 *
 *   node scripts/check-site.mjs              structural checks only (no network)
 *   node scripts/check-site.mjs --external   also verify off-site links respond
 */

import { readFileSync, existsSync, statSync, globSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, normalize, relative } from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SITE = 'https://www.onlinemodelacademy.com';
const checkExternal = process.argv.includes('--external');

const problems = [];
const fail = (page, message) => problems.push(`${page}: ${message}`);

const pages = globSync('**/*.html', { cwd: ROOT })
  .filter((p) => !p.startsWith('node_modules/') && !p.startsWith('project/'))
  .sort();

if (pages.length === 0) {
  console.error('check-site: found no HTML pages — is the working directory right?');
  process.exit(1);
}

// Only attributes that genuinely carry a URL. `content="..."` is deliberately
// excluded: it is overwhelmingly meta-tag prose, and the URLs it does carry
// (og:image, og:url) are absolute and picked up by the absolute-URL sweep.
const attrRef = /(?:href|src|poster)="([^"]+)"/g;
const absoluteUrl = /(?:href|src|poster|content)="(https?:\/\/[^"]+)"/g;
const externalUrls = new Set();

/** Resolve a page-relative reference to a repo path, or null if it is off-site. */
function resolveLocal(page, ref) {
  if (/^(https?:)?\/\//.test(ref)) return null;
  if (/^(mailto:|tel:|data:|javascript:|#)/.test(ref)) return null;

  const [path] = ref.split(/[?#]/);
  if (!path) return null;

  const target = path.startsWith('/')
    ? join(ROOT, path.slice(1))
    : normalize(join(ROOT, dirname(page), path));

  return target;
}

for (const page of pages) {
  const html = readFileSync(join(ROOT, page), 'utf8');

  // --- head essentials -----------------------------------------------------
  if (!/<title>[^<]+<\/title>/.test(html)) fail(page, 'missing a <title>.');

  const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  if (!description || !description[1].trim()) fail(page, 'missing a meta description.');

  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  if (!canonical) {
    fail(page, 'missing a canonical link.');
  } else {
    const expected = page === 'index.html' ? `${SITE}/` : `${SITE}/${dirname(page)}/`;
    if (canonical[1] !== expected) {
      fail(page, `canonical is "${canonical[1]}", expected "${expected}".`);
    }
  }

  for (const [, url] of html.matchAll(absoluteUrl)) externalUrls.add(url.split('#')[0]);

  // --- every local reference points at a file that exists ------------------
  for (const [, ref] of html.matchAll(attrRef)) {
    // Built at runtime from assets/data.js — checked separately below.
    if (ref.includes('${')) continue;

    const target = resolveLocal(page, ref);
    if (!target) continue;

    // A directory reference (/blog/foo/) is served by its index.html.
    const candidates = existsSync(target) && statSync(target).isDirectory()
      ? [join(target, 'index.html')]
      : [target];

    if (!candidates.some(existsSync)) {
      fail(page, `broken reference "${ref}" -> ${relative(ROOT, target)} does not exist.`);
    }
  }
}

// --- assets referenced by the shared data file exist ------------------------
const dataPath = join(ROOT, 'assets/data.js');
if (!existsSync(dataPath)) {
  problems.push('assets/data.js: missing.');
} else {
  const data = readFileSync(dataPath, 'utf8');
  for (const [, ref] of data.matchAll(/(?:img|src|poster|video)\s*:\s*"([^"]+)"/g)) {
    if (/^https?:\/\//.test(ref)) continue;
    if (!existsSync(join(ROOT, ref.split(/[?#]/)[0]))) {
      problems.push(`assets/data.js: references "${ref}", which does not exist.`);
    }
  }
}

// --- sitemap covers exactly the pages that exist ---------------------------
const sitemapPath = join(ROOT, 'sitemap.xml');
if (!existsSync(sitemapPath)) {
  problems.push('sitemap.xml: missing.');
} else {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  const listed = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));

  const expected = new Set(
    pages.map((p) => (p === 'index.html' ? `${SITE}/` : `${SITE}/${dirname(p)}/`)),
  );

  for (const url of expected) {
    if (!listed.has(url)) problems.push(`sitemap.xml: ${url} exists on disk but is not listed.`);
  }
  for (const url of listed) {
    if (!expected.has(url)) problems.push(`sitemap.xml: ${url} is listed but has no page on disk.`);
  }

  if (!readFileSync(join(ROOT, 'robots.txt'), 'utf8').includes(`${SITE}/sitemap.xml`)) {
    problems.push('robots.txt: does not point at the sitemap.');
  }
}

// --- off-site links respond (CI only; needs network egress) ----------------
if (checkExternal) {
  const urls = [...externalUrls].filter((u) => !u.startsWith(SITE));
  console.log(`check-site: probing ${urls.length} external URLs…`);

  const results = await Promise.all(
    urls.map(async (url) => {
      for (const method of ['HEAD', 'GET']) {
        try {
          const res = await fetch(url, {
            method,
            redirect: 'follow',
            signal: AbortSignal.timeout(20_000),
            headers: { 'user-agent': 'oma-site-link-check' },
          });
          // Some CDNs reject HEAD; only treat a failing GET as a real failure.
          if (res.ok || res.status === 403) return null;
          if (method === 'GET') return `external link ${url} returned ${res.status}.`;
        } catch (err) {
          if (method === 'GET') return `external link ${url} failed: ${err.message}`;
        }
      }
      return null;
    }),
  );

  problems.push(...results.filter(Boolean));
}

if (problems.length) {
  console.error(`check-site: ${problems.length} problem(s) across ${pages.length} pages:\n`);
  for (const p of problems) console.error(`  ✗ ${p}`);
  process.exit(1);
}

console.log(
  `check-site: ${pages.length} pages checked — links, assets, canonicals and sitemap all consistent.`,
);
