#!/usr/bin/env node
/**
 * Rebuilds the two files that have to know about every article at once:
 * the blog listing grid and sitemap.xml.
 *
 *   node scripts/build-index-and-sitemap.mjs
 *
 * Ordering on the listing is deliberate rather than alphabetical: the head-term
 * feature first, then the rest by cluster, so a visitor landing on /blog/ sees
 * the entry-point guides before the specialist ones.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

import { articles } from '../content/articles.mjs';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SITE = 'https://www.onlinemodelacademy.com';

const existing = JSON.parse(readFileSync(join(ROOT, 'content/registry-existing.json'), 'utf8'));
const registry = { ...existing };
for (const a of articles) registry[a.slug] = a;

/** Listing order. The feature card leads; everything after is grouped by theme. */
const ORDER = [
  'how-to-become-a-model',
  'how-to-start-a-modeling-career',
  'how-to-become-a-model-in-australia',
  'how-to-become-a-model-with-no-experience',
  'what-do-modeling-agencies-look-for',
  'how-to-get-signed-by-a-modeling-agency',
  'how-to-choose-a-modeling-agency',
  'modeling-agencies-near-me',
  'modelling-agencies-australia',
  'modelling-agencies-sydney',
  'modelling-agencies-melbourne',
  'modelling-agencies-brisbane',
  'modelling-agencies-perth',
  'modeling-jobs',
  'open-casting-call',
  'model-casting-calls',
  'how-to-make-a-modeling-portfolio',
  'modeling-portfolio-examples',
  'model-comp-card',
  'model-portfolio-website',
  'how-much-does-it-cost-to-become-a-model',
  'child-modeling-agencies',
  'baby-modelling-agency',
  'how-to-become-a-child-model',
  'how-to-become-a-model-at-16',
  'plus-size-modeling-agencies',
  'how-to-become-a-male-model',
  'how-to-become-a-fitness-model',
  'how-to-become-a-hand-model',
  'how-to-become-a-freelance-model',
  'how-do-models-walk-in-runway-shows',
  'how-to-become-a-successful-model',
];

const known = Object.keys(registry);
const missing = known.filter((s) => !ORDER.includes(s));
const unknown = ORDER.filter((s) => !registry[s]);
if (missing.length) throw new Error(`ORDER is missing: ${missing.join(', ')}`);
if (unknown.length) throw new Error(`ORDER references unknown slugs: ${unknown.join(', ')}`);

// --- blog listing ----------------------------------------------------------
const card = (slug, i) => {
  const a = registry[slug];
  return `<a class="card${i === 0 ? ' feature' : ''}" href="${a.slug}/">
  <div class="thumb"><picture><source srcset="images/${a.image}.webp" type="image/webp"><img src="images/${a.image}.jpg" alt="${a.imageAlt}" loading="lazy" width="1600" height="900"></picture></div>
  <div class="body">
    <span class="tag">${a.category}</span>
    <h3>${a.headline}</h3>
    <p>${a.description}</p>
    <span class="meta">${a.readTime} min read</span>
  </div>
</a>`;
};

const indexPath = join(ROOT, 'blog/index.html');
let index = readFileSync(indexPath, 'utf8');
const cards = ORDER.map(card).join('');

const before = index;
index = index.replace(/(<div class="cards">)[\s\S]*?(<\/div>\s*<\/section>)/, `$1${cards}$2`);
if (index === before) throw new Error('blog/index.html: could not find the cards grid to replace.');
writeFileSync(indexPath, index);

// --- sitemap ---------------------------------------------------------------
const today = articles[0].date;
const lastmod = (slug) => registry[slug].date || today;

const urls = [
  { loc: `${SITE}/`, priority: '1.0', changefreq: 'weekly', lastmod: today },
  { loc: `${SITE}/blog/`, priority: '0.9', changefreq: 'weekly', lastmod: today },
  ...ORDER.map((slug) => ({
    loc: `${SITE}/blog/${slug}/`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: lastmod(slug),
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(ROOT, 'sitemap.xml'), sitemap);

console.log(
  `build-index-and-sitemap: ${ORDER.length} articles listed, ${urls.length} URLs in sitemap.xml.`,
);
