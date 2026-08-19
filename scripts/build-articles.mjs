#!/usr/bin/env node
/**
 * Renders blog articles from content/ into blog/<slug>/index.html.
 *
 *   node scripts/build-articles.mjs           build every article marked generated
 *   node scripts/build-articles.mjs --verify  render to memory and diff against disk
 *
 * The template in content/article-template.html was lifted verbatim from the
 * original hand-written articles, so generated pages carry exactly the same
 * nav, CSS, tracking, CTAs and exit-intent behaviour. `--verify` re-renders the
 * donor article and fails if it no longer matches what is on disk, which is how
 * we know the template has not drifted from the pages it was extracted from.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

import { articles } from '../content/articles.mjs';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SITE = 'https://www.onlinemodelacademy.com';
const verifyOnly = process.argv.includes('--verify');

const template = readFileSync(join(ROOT, 'content/article-template.html'), 'utf8');
const existing = JSON.parse(readFileSync(join(ROOT, 'content/registry-existing.json'), 'utf8'));

/** Everything the site knows about, generated and hand-written alike. */
const registry = { ...existing };
for (const a of articles) registry[a.slug] = a;

const escAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const escJson = (s) => JSON.stringify(String(s)).slice(1, -1);

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

function faqSchema(faq) {
  if (!faq?.length) return '';
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
  return `<script type="application/ld+json">${JSON.stringify(payload)}</script>`;
}

/** The three "Keep reading" cards, built from the registry so links stay valid. */
function relatedCards(slugs) {
  return slugs
    .map((slug) => {
      const a = registry[slug];
      if (!a) throw new Error(`related: unknown slug "${slug}"`);
      return `<a class="card" href="../${a.slug}/">
      <div class="thumb"><picture><source srcset="../images/${a.image}.webp" type="image/webp"><img src="../images/${a.image}.jpg" alt="${escAttr(a.imageAlt)}" loading="lazy" width="1600" height="900"></picture></div>
      <div class="body">
        <span class="tag">${a.category}</span>
        <h3>${a.headline}</h3>
        <p>${a.description}</p>
        <span class="meta">${a.readTime} min read</span>
      </div>
    </a>`;
    })
    .join('');
}

function render(a) {
  const url = `${SITE}/blog/${a.slug}/`;
  const [y, m] = a.date.split('-');
  const values = {
    SEO_TITLE: escAttr(a.seoTitle),
    DESCRIPTION: escAttr(a.description),
    DESCRIPTION_J: escJson(a.description),
    URL: url,
    OG_IMAGE: `${SITE}/blog/images/${a.image}.jpg`,
    HEADLINE: a.headline,
    HEADLINE_J: escJson(a.headline.replace(/&#x27;/g, "'")),
    DATE: a.date,
    MONTH_YEAR: `${MONTHS[Number(m) - 1]} ${y}`,
    READ_TIME: String(a.readTime),
    CATEGORY: a.category,
    IMAGE: a.image,
    IMAGE_ALT: escAttr(a.imageAlt),
    FAQ_SCHEMA: faqSchema(a.faq),
    BODY: a.body.trim(),
    RELATED: `  <div class="cards">${relatedCards(a.related)}</div>`,
    SLUG: a.slug,
  };

  let out = template;
  for (const [token, value] of Object.entries(values)) {
    out = out.replaceAll(`{{${token}}}`, value);
  }

  const leftover = out.match(/\{\{[A-Z_]+\}\}/g);
  if (leftover) throw new Error(`${a.slug}: unfilled tokens ${[...new Set(leftover)].join(', ')}`);
  return out;
}

let built = 0;
const problems = [];

for (const a of articles) {
  const dir = join(ROOT, 'blog', a.slug);
  const file = join(dir, 'index.html');
  const html = render(a);

  if (verifyOnly) {
    if (!existsSync(file)) {
      problems.push(`${a.slug}: not built yet.`);
    } else if (readFileSync(file, 'utf8') !== html) {
      problems.push(`${a.slug}: on disk differs from content/articles.mjs — re-run the build.`);
    }
    continue;
  }

  mkdirSync(dir, { recursive: true });
  writeFileSync(file, html);
  built += 1;
}

if (verifyOnly) {
  if (problems.length) {
    console.error(`build-articles: ${problems.length} problem(s):\n`);
    for (const p of problems) console.error(`  ✗ ${p}`);
    process.exit(1);
  }
  console.log(`build-articles: ${articles.length} generated articles match content/articles.mjs.`);
  process.exit(0);
}

console.log(`build-articles: rendered ${built} articles.`);
