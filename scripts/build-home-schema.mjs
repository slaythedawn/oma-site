#!/usr/bin/env node
/**
 * Writes the homepage's derived JSON-LD: FAQPage and WebSite.
 *
 *   node scripts/build-home-schema.mjs           write
 *   node scripts/build-home-schema.mjs --verify  fail if stale
 *
 * The homepage FAQ is rendered into an empty div by JavaScript from
 * assets/data.js, so a crawler sees no questions at all. This emits the same
 * questions as static FAQPage markup, which is what makes them eligible for
 * rich results without changing the visual design.
 *
 * Both blocks live between marker comments so this can rewrite them safely.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SITE = 'https://www.onlinemodelacademy.com';
const verifyOnly = process.argv.includes('--verify');

const START = '<!-- BEGIN generated schema: scripts/build-home-schema.mjs -->';
const END = '<!-- END generated schema -->';

// assets/data.js is a browser script that assigns to window, so read the FAQ
// out of it rather than importing it.
const data = readFileSync(join(ROOT, 'assets/data.js'), 'utf8');

function faqs() {
  const block = data.match(/faqs:\s*\{([\s\S]*?)\n  \},/);
  if (!block) throw new Error('assets/data.js: could not find the faqs block.');

  const out = [];
  for (const [, q, a] of block[1].matchAll(/\{\s*q:\s*"((?:[^"\\]|\\.)*)"\s*,\s*a:\s*"((?:[^"\\]|\\.)*)"\s*\}/g)) {
    out.push({ q: JSON.parse(`"${q}"`), a: JSON.parse(`"${a}"`) });
  }
  if (!out.length) throw new Error('assets/data.js: parsed the faqs block but found no questions.');
  return out;
}

const questions = faqs();

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: questions.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const siteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Online Model Academy',
  alternateName: 'OMA',
  url: `${SITE}/`,
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: 'Online Model Academy', url: `${SITE}/` },
};

const block = [
  START,
  `<script type="application/ld+json">${JSON.stringify(siteSchema)}</script>`,
  `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`,
  END,
].join('\n');

const file = join(ROOT, 'index.html');
const html = readFileSync(file, 'utf8');

let updated;
if (html.includes(START)) {
  updated = html.replace(new RegExp(`${START}[\\s\\S]*?${END}`), block);
} else {
  // First run: insert just before the stylesheet link, alongside the other JSON-LD.
  const anchor = '<style>';
  const at = html.indexOf(anchor);
  if (at === -1) throw new Error('index.html: could not find where to insert the schema.');
  updated = html.slice(0, at) + block + '\n' + html.slice(at);
}

if (verifyOnly) {
  if (updated !== html) {
    console.error('build-home-schema: index.html schema is out of date — run `npm run build:schema`.');
    process.exit(1);
  }
  console.log(`build-home-schema: homepage schema is current (${questions.length} FAQ entries).`);
  process.exit(0);
}

writeFileSync(file, updated);
console.log(
  `build-home-schema: wrote WebSite + FAQPage schema (${questions.length} questions) into index.html.`,
);
