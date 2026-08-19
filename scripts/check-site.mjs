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

// --- the two prices agree everywhere they are declared ----------------------
// The pricing card shows a markdown: $299 current, $499 struck through, and a
// "Save $200" line derived from the two. Those numbers are repeated in the
// Course schema, in the Meta/GA4 conversion events and in assets/data.js, so a
// price change touches five places. Miss one and the site either misreports
// revenue or makes a savings claim that does not add up.
{
  const home = readFileSync(join(ROOT, 'index.html'), 'utf8');
  const data = existsSync(dataPath) ? readFileSync(dataPath, 'utf8') : '';

  /** The Offer block out of the Course JSON-LD, parsed rather than regexed. */
  let schemaOffer = null;
  for (const [, raw] of home.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed['@type'] === 'Course' && parsed.offers) schemaOffer = parsed.offers;
    } catch {
      problems.push('index.html: a JSON-LD block does not parse as JSON.');
    }
  }
  if (!schemaOffer) problems.push('index.html: no Offer found in the Course schema.');

  /** Collect "where it is declared" -> value, then complain if they disagree. */
  const compare = (label, sources) => {
    const found = new Map(sources.filter(([, value]) => value != null));
    if (new Set(found.values()).size > 1) {
      problems.push(
        `index.html: ${label} disagrees with itself — ` +
          [...found].map(([where, value]) => `${value} in ${where}`).join(', ') + '.',
      );
    }
    return [...found.values()][0];
  };

  const num = (match) => (match ? Number(match[1]) : null);

  // What a visitor is charged today.
  const current = compare('the current price', [
    ['the pricing card', num(home.match(/<span class="big">\$<em>(\d+)<\/em><\/span>/))],
    ['the Course schema', schemaOffer ? Number(schemaOffer.price) : null],
    ['the conversion tracking', num(home.match(/value:\s*(\d+(?:\.\d+)?)/))],
    ['assets/data.js', num(data.match(/priceCurrent:\s*(\d+(?:\.\d+)?)/))],
  ]);

  // The struck-through anchor. Deliberately a separate number from the above —
  // the two are meant to differ, and only each source of the same one must agree.
  const anchor = compare('the anchor price', [
    ['the pricing card', num(home.match(/<span class="old">\$(\d+)<\/span>/))],
    ['assets/data.js', num(data.match(/priceOld:\s*(\d+(?:\.\d+)?)/))],
  ]);

  // Every conversion event must carry the same value, not just the first.
  const trackedValues = [...home.matchAll(/value:\s*(\d+(?:\.\d+)?)/g)].map((m) => Number(m[1]));
  if (new Set(trackedValues).size > 1) {
    problems.push(
      `index.html: the conversion events report different values — ${[...new Set(trackedValues)].join(', ')}.`,
    );
  }

  // The currency, wherever it is stated.
  compare('the price currency', [
    ['the Course schema', schemaOffer?.priceCurrency ?? null],
    ...[...home.matchAll(/currency:\s*['"]([A-Z]{3})['"]/g)].map((m, i) => [
      `conversion event ${i + 1}`,
      m[1],
    ]),
  ]);

  // "Save $200 off launch pricing" has to be arithmetic, not a leftover.
  const claimed = num(home.match(/Save \$(\d+) off/));
  if (claimed != null && current != null && anchor != null && claimed !== anchor - current) {
    problems.push(
      `index.html: the savings claim says $${claimed}, but $${anchor} - $${current} is $${anchor - current}.`,
    );
  }
  if (anchor != null && current != null && anchor <= current) {
    problems.push(
      `index.html: the anchor price $${anchor} is not above the current price $${current}, ` +
        'so the struck-through price reads as a markup rather than a discount.',
    );
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
