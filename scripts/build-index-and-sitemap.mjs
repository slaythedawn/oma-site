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

/**
 * The listing, grouped into the topic clusters the content is actually built
 * around. Grouping gives a visitor 32 articles they can navigate rather than
 * scroll, and gives each cluster a heading that names what it covers.
 * The first article in the first group renders as the feature card.
 */
const CLUSTERS = [
  {
    heading: 'Start here',
    blurb: 'The fundamentals, whichever market you are in.',
    slugs: [
      'how-to-become-a-model',
      'how-to-start-a-modeling-career',
      'how-to-become-a-model-in-australia',
      'how-to-become-a-model-with-no-experience',
      'how-much-does-it-cost-to-become-a-model',
      'how-to-become-a-successful-model',
    ],
  },
  {
    heading: 'Agencies',
    blurb: 'How representation works, who to approach, and what to avoid.',
    slugs: [
      'what-do-modeling-agencies-look-for',
      'how-to-get-signed-by-a-modeling-agency',
      'how-to-choose-a-modeling-agency',
      'modeling-agencies-near-me',
      'modelling-agencies-australia',
      'modelling-agencies-sydney',
      'modelling-agencies-melbourne',
      'modelling-agencies-brisbane',
      'modelling-agencies-perth',
    ],
  },
  {
    heading: 'Castings & work',
    blurb: 'Where the bookings come from and how to handle the room.',
    slugs: ['modeling-jobs', 'open-casting-call', 'model-casting-calls', 'how-do-models-walk-in-runway-shows'],
  },
  {
    heading: 'Training',
    blurb: 'Whether to pay for classes, and how to avoid the schools that sell hope.',
    slugs: ['modeling-classes', 'modeling-schools'],
  },
  {
    heading: 'Portfolio',
    blurb: 'Digitals, books, comp cards and everything agencies ask to see.',
    slugs: [
      'how-to-make-a-modeling-portfolio',
      'modeling-portfolio-examples',
      'model-comp-card',
      'model-portfolio-website',
    ],
  },
  {
    heading: 'For parents',
    blurb: 'Child and teen modelling, and how to tell a real agency from a scam.',
    slugs: [
      'child-modeling-agencies',
      'baby-modelling-agency',
      'how-to-become-a-child-model',
      'how-to-become-a-model-at-16',
    ],
  },
  {
    heading: 'Specialisms',
    blurb: 'Boards with their own clients, requirements and rates.',
    slugs: [
      'plus-size-modeling-agencies',
      'how-to-become-a-male-model',
      'how-to-become-a-fitness-model',
      'how-to-become-a-hand-model',
      'how-to-become-a-freelance-model',
    ],
  },
];

/** Flat order, for the sitemap and for coverage checks. */
const ORDER = CLUSTERS.flatMap((c) => c.slugs);

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

let featureUsed = false;
const sections = CLUSTERS.map((c) => {
  const cards = c.slugs
    .map((slug) => {
      const isFeature = !featureUsed;
      featureUsed = true;
      return card(slug, isFeature ? 0 : 1);
    })
    .join('');
  return `<div class="cluster">
    <h2 class="cluster-h">${c.heading}</h2>
    <p class="cluster-b">${c.blurb}</p>
  </div>
  <div class="cards">${cards}</div>`;
}).join('\n  ');

const before = index;
index = index.replace(
  /<div class="cards">[\s\S]*?<\/div>(\s*<\/section>)/,
  `${sections}$1`,
);
if (index === before) throw new Error('blog/index.html: could not find the cards grid to replace.');

// Styles for the cluster headings, added once.
if (!index.includes('.cluster-h {')) {
  index = index.replace(
    '.bgrid {',
    `.cluster { max-width:1280px; margin:56px auto 20px; }
.cluster:first-of-type { margin-top:8px; }
.cluster-h { font-family:var(--serif); font-weight:600; font-size:clamp(24px,3vw,32px); line-height:1.15; letter-spacing:-0.01em; }
.cluster-b { font-size:15.5px; color:var(--ink-mute); margin-top:6px; }
.bgrid .cards + .cluster { margin-top:64px; }
.bgrid {`,
  );
}

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
