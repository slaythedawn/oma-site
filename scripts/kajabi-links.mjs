#!/usr/bin/env node
/**
 * Keeps every Kajabi link in the site in sync with config/kajabi.json.
 *
 *   node scripts/kajabi-links.mjs --check   audit only, non-zero exit on drift (used by CI)
 *   node scripts/kajabi-links.mjs --sync    rewrite the HTML to match the config
 *
 * Changing an offer is a one-line edit in config/kajabi.json followed by --sync.
 * The old offer id is read from the last committed version of the config, so the
 * script knows what it is replacing without any extra bookkeeping. Pass
 * --from=OLDID --to=NEWID to override that (e.g. when the config was already
 * committed, or edited twice before syncing).
 */

import { readFileSync, writeFileSync, globSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const CONFIG_PATH = 'config/kajabi.json';

const args = process.argv.slice(2);
const mode = args.includes('--sync') ? 'sync' : 'check';
const argValue = (name) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : null;
};

const config = JSON.parse(readFileSync(ROOT + CONFIG_PATH, 'utf8'));

/** Offer id -> offer, for the ids the config currently declares. */
const offersById = new Map(
  Object.entries(config.offers).map(([key, offer]) => [offer.id, { key, ...offer }]),
);

/** Any Kajabi link, whatever domain spelling or offer id it currently uses. */
const KAJABI_URL = /https?:\/\/(?:www\.)?onlinemodel\.academy(\/[^"'\s<>]*)?/g;
const OFFER_PATH = /^\/offers\/([A-Za-z0-9_-]+)$/;
/** A bare `offers/<id>` reference, e.g. inside the CTA tracking JavaScript. */
const BARE_OFFER = /(?<!\/)\boffers\/([A-Za-z0-9_-]+)/g;
/** The offer id repeated as an analytics label: `offer_slug: 'iJxLGaoD'`. */
const OFFER_SLUG = /(offer_slug\s*:\s*)(['"])([A-Za-z0-9_-]+)\2/g;

const pages = globSync('**/*.html', { cwd: ROOT })
  .filter((p) => !p.startsWith('node_modules/') && !p.startsWith('project/'))
  .sort();

/**
 * The slug a page's utm_content values must be prefixed with:
 * blog/how-to-become-a-model/index.html -> "how-to-become-a-model"
 * blog/index.html                       -> "blog-index"
 * Pages outside the blog do not tag their CTAs, so they have no expected slug.
 */
function expectedSlug(page) {
  if (page === 'blog/index.html') return 'blog-index';
  const m = page.match(/^blog\/([^/]+)\/index\.html$/);
  return m ? m[1] : null;
}

/** Split "a=1&b=2" into ordered pairs, leaving values exactly as authored. */
function parseQuery(query) {
  if (!query) return [];
  return query.split('&').map((pair) => {
    const i = pair.indexOf('=');
    return i === -1 ? [pair, null] : [pair.slice(0, i), pair.slice(i + 1)];
  });
}

const buildQuery = (pairs) =>
  pairs.length ? '?' + pairs.map(([k, v]) => (v === null ? k : `${k}=${v}`)).join('&') : '';

let previousConfigCache;
function previousConfig() {
  if (previousConfigCache !== undefined) return previousConfigCache;
  try {
    const raw = execFileSync('git', ['show', `HEAD:${CONFIG_PATH}`], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    previousConfigCache = JSON.parse(raw);
  } catch {
    previousConfigCache = null;
  }
  return previousConfigCache;
}

/** Deduped so one mistake repeated across a page is reported once. */
const problems = new Set();

/** Resolve which configured offer an id refers to, including a rename in flight. */
function resolveOffer(id, page) {
  if (offersById.has(id)) return offersById.get(id);

  const from = argValue('from');
  const to = argValue('to');
  if (from && id === from && offersById.has(to)) return offersById.get(to);

  // An id that used to be configured is one this sync is meant to replace.
  for (const [key, offer] of Object.entries(previousConfig()?.offers ?? {})) {
    if (offer.id === id && config.offers[key]) return { key, ...config.offers[key] };
  }

  problems.add(
    `${page}: offer id "${id}" is not declared in ${CONFIG_PATH}. ` +
      `Add it there, or re-run with --from=${id} --to=<current id>.`,
  );
  return null;
}

let rewrittenPages = 0;

for (const page of pages) {
  const file = ROOT + page;
  const original = readFileSync(file, 'utf8');
  const slug = expectedSlug(page);

  const updated = original.replace(KAJABI_URL, (match, path = '') => {
    const [rawPath, query] = path.split('?');
    const offerMatch = rawPath.match(OFFER_PATH);

    // A login / privacy / terms style link: check it is one the config declares.
    if (!offerMatch) {
      if (rawPath && rawPath !== '/' && !Object.values(config.paths).includes(rawPath)) {
        problems.add(`${page}: Kajabi path "${rawPath}" is not declared in ${CONFIG_PATH}.`);
        return match;
      }
      return config.backendDomain + rawPath + (query ? `?${query}` : '');
    }

    const offer = resolveOffer(offerMatch[1], page);
    if (!offer) return match;

    const pairs = parseQuery(query);

    for (const pair of pairs) {
      const [key, value] = pair;

      if (key === 'utm_campaign' && value !== offer.utmCampaign) {
        problems.add(
          `${page}: ${offer.key} offer link has utm_campaign="${value}", ` +
            `expected "${offer.utmCampaign}".`,
        );
        pair[1] = offer.utmCampaign;
      }

      if (key === 'utm_content' && slug && value && !value.startsWith(`${slug}__`)) {
        const placement = value.includes('__') ? value.split('__').pop() : value;
        problems.add(
          `${page}: utm_content="${value}" does not match the page slug; ` +
            `expected "${slug}__${placement}".`,
        );
        pair[1] = `${slug}__${placement}`;
      }
    }

    return `${config.backendDomain}/offers/${offer.id}${buildQuery(pairs)}`;
  });

  // Second pass: bare `offers/<id>` strings. The homepage gates its Meta and GA4
  // conversion events on `href.indexOf('offers/<id>')`, so an offer rename that
  // updated only the links would leave checkout tracking silently dead.
  const withBareIds = updated
    .replace(BARE_OFFER, (match, id) => {
      const offer = resolveOffer(id, page);
      return offer ? `offers/${offer.id}` : match;
    })
    .replace(OFFER_SLUG, (match, prefix, quote, id) => {
      const offer = resolveOffer(id, page);
      return offer ? `${prefix}${quote}${offer.id}${quote}` : match;
    });

  if (withBareIds !== original) {
    if (mode === 'sync') {
      writeFileSync(file, withBareIds);
      rewrittenPages += 1;
    } else {
      problems.add(`${page}: Kajabi links are out of sync with ${CONFIG_PATH}.`);
    }
  }
}

if (mode === 'sync') {
  console.log(`kajabi-links: rewrote ${rewrittenPages} of ${pages.length} pages.`);
  const unresolved = [...problems].filter((p) => p.includes('is not declared'));
  if (unresolved.length) {
    console.error('\nCould not resolve:\n  ' + unresolved.map((p) => `✗ ${p}`).join('\n  '));
    process.exit(1);
  }
  process.exit(0);
}

if (problems.size) {
  console.error(`kajabi-links: ${problems.size} problem(s) across ${pages.length} pages:\n`);
  for (const p of problems) console.error(`  ✗ ${p}`);
  console.error('\nRun `npm run kajabi:sync` to fix, then commit the result.');
  process.exit(1);
}

console.log(`kajabi-links: ${pages.length} pages checked, all Kajabi links match ${CONFIG_PATH}.`);
