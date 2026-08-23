#!/usr/bin/env node
/**
 * Renders the sitewide footer into every page and into the article template.
 *
 *   node scripts/build-footer.mjs           write the footer everywhere
 *   node scripts/build-footer.mjs --verify  fail if any page is out of date
 *
 * The footer is the only sitewide internal-linking surface this site has, so it
 * is defined once here rather than hand-maintained in 19 files. Link groups
 * mirror the topic clusters the blog is organised around, which is what gives
 * the newer articles a route in from every page on the site.
 */

import { readFileSync, writeFileSync, globSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const verifyOnly = process.argv.includes('--verify');

/**
 * Four columns of guides, chosen to give every cluster a sitewide entry point
 * and to put a link on the newer articles, which otherwise depend entirely on
 * the blog index and related-post modules.
 */
const COLUMNS = [
  {
    heading: 'Course',
    links: [
      { href: '#curriculum', label: 'Curriculum', anchor: true },
      { href: '#mentors', label: 'Mentors', anchor: true },
      { href: '#pricing', label: 'Pricing', anchor: true },
      { href: '#faq', label: 'FAQ', anchor: true },
      { href: 'blog/', label: 'All 34 guides' },
    ],
  },
  {
    heading: 'Start here',
    links: [
      { href: 'blog/how-to-become-a-model/', label: 'How to become a model' },
      { href: 'blog/how-to-start-a-modeling-career/', label: 'Starting a career' },
      { href: 'blog/how-to-become-a-model-with-no-experience/', label: 'With no experience' },
      { href: 'blog/how-to-become-a-model-in-australia/', label: 'Modelling in Australia' },
      { href: 'blog/modeling-classes/', label: 'Are classes worth it?' },
      { href: 'blog/modeling-schools/', label: 'Schools & scams' },
    ],
  },
  {
    heading: 'Agencies & castings',
    links: [
      { href: 'blog/what-do-modeling-agencies-look-for/', label: 'What agencies look for' },
      { href: 'blog/how-to-get-signed-by-a-modeling-agency/', label: 'Getting signed' },
      { href: 'blog/modeling-agencies-near-me/', label: 'Finding an agency' },
      { href: 'blog/modelling-agencies-australia/', label: 'Australian agencies' },
      { href: 'blog/open-casting-call/', label: 'Open casting calls' },
    ],
  },
  {
    heading: 'Portfolio & work',
    links: [
      { href: 'blog/how-to-make-a-modeling-portfolio/', label: 'Building a portfolio' },
      { href: 'blog/model-comp-card/', label: 'Comp cards' },
      { href: 'blog/modeling-jobs/', label: 'Where the work is' },
      { href: 'blog/how-much-do-models-make/', label: 'What models earn' },
      { href: 'blog/child-modeling-agencies/', label: 'For parents' },
      { href: 'blog/plus-size-modeling-agencies/', label: 'Curve & plus' },
    ],
  },
];

const KAJABI = 'https://www.onlinemodel.academy';

// The "All N guides" label has to match reality, so derive it rather than
// hand-maintaining a number that goes stale every time an article ships.
const GUIDE_COUNT = globSync('blog/*/index.html', { cwd: ROOT }).length;
for (const c of COLUMNS) {
  for (const l of c.links) {
    if (l.href === 'blog/') l.label = `All ${GUIDE_COUNT} guides`;
  }
}

/**
 * @param prefix  path back to the site root from the page being rendered
 * @param home    path to the homepage, which differs from prefix at the root
 */
function footer(prefix, home, ctaHref) {
  const col = (c) => `
    <div>
      <h5>${c.heading}</h5>
      <ul>${c.links
        .map((l) => {
          // In-page anchors only work on the homepage; elsewhere they need to
          // travel there first.
          const href = l.anchor ? `${home}${l.href}` : `${prefix}${l.href}`;
          return `<li><a href="${href}">${l.label}</a></li>`;
        })
        .join('')}</ul>
    </div>`;

  return `<footer class="ft">
  <div class="ft-in">
    <div class="ft-brand">
      <div style="margin-bottom:16px"><img src="${prefix}assets/logo-white.svg" alt="Online Model Academy" style="height:26px"></div>
      <div class="tag">Learn how to become a model, from the people who book them. 12 industry professionals across 16 modules, taught by working casting directors, agents and runway producers.</div>
      <a class="ft-cta" data-cta="footer-free" href="${ctaHref}" target="_blank" rel="noopener">Get the free module →</a>
    </div>${COLUMNS.map(col).join('')}
  </div>
  <div class="ft-bot">
    <div>© 2026 Online Model Academy. Confidence is contagious.</div>
    <div class="ft-bot-links">
      <a href="https://instagram.com/onlinemodelacademy" target="_blank" rel="noopener">Instagram</a>
      <a href="https://tiktok.com/@onlinemodelacademy" target="_blank" rel="noopener">TikTok</a>
      <a href="${KAJABI}/Terms-&-Conditions" target="_blank" rel="noopener">Terms</a>
      <a href="${KAJABI}/privacy-policy" target="_blank" rel="noopener">Privacy</a>
      <a href="mailto:hello@onlinemodelacademy.com">Contact</a>
    </div>
  </div>
</footer>`;
}

/**
 * Footer CSS, delimited by markers so repeated builds replace it rather than
 * appending. The original `.ft-in` rule is consumed on the first run.
 */
const CSS_BEGIN = '/* footer:begin — generated by scripts/build-footer.mjs */';
const CSS_END = '/* footer:end */';

const CSS = `${CSS_BEGIN}
.ft-in { max-width:1280px; margin:0 auto; padding:64px 32px 40px; display:grid; grid-template-columns:1.6fr repeat(4, 1fr); gap:40px; font-size:14px; }
.ft-brand .tag { max-width:320px; line-height:1.6; }
.ft-cta { display:inline-block; margin-top:20px; font-size:13.5px; font-weight:600; color:#fff; border:1px solid rgba(251,248,242,0.3); padding:10px 18px; border-radius:100px; }
.ft-cta:hover { background:rgba(251,248,242,0.1); border-color:rgba(251,248,242,0.55); }
.ft-bot-links { display:flex; gap:18px; flex-wrap:wrap; }
@media (max-width:1100px){ .ft-in{grid-template-columns:1fr 1fr 1fr;} .ft-brand{grid-column:1/-1;} }
@media (max-width:640px){ .ft-in{grid-template-columns:1fr 1fr;} }
@media (max-width:860px){ .ft-bot{flex-direction:column; gap:8px;} }
${CSS_END}`;

/** Replace an existing generated block, or the original hand-written rules. */
function applyCss(html) {
  const existing = new RegExp(
    `${CSS_BEGIN.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${CSS_END.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`,
    'g',
  );
  if (existing.test(html)) {
    // Collapse any duplicates from earlier non-idempotent runs down to one.
    let first = true;
    return html.replace(existing, () => (first ? ((first = false), CSS) : ''));
  }
  let out = html.replace(/\.ft-in \{[^}]*\}/, CSS);
  out = out.replace(
    /@media \(max-width:860px\)\{ \.ft-in\{grid-template-columns:1fr 1fr;\} \.ft-bot\{flex-direction:column; gap:8px;\} \}/,
    '',
  );
  return out;
}

const targets = [
  ...globSync('**/*.html', { cwd: ROOT }).filter(
    (p) => !['node_modules/', 'project/'].some((d) => p.startsWith(d)),
  ),
];

const problems = [];
let written = 0;

for (const page of targets) {
  const file = join(ROOT, page);
  const original = readFileSync(file, 'utf8');

  // Depth back to the site root. content/article-template.html renders into
  // blog/<slug>/, so it uses the same depth as a real article.
  const depth = page === 'content/article-template.html' ? 2 : dirname(page).split('/').filter((s) => s !== '.').length;
  const prefix = '../'.repeat(depth);
  const home = depth === 0 ? '' : `${prefix}index.html`;

  // The footer CTA keeps the page's own utm_content so footer opt-ins stay
  // attributable to the article that drove them. The homepage deliberately
  // carries no UTMs, matching how its other CTAs are tagged.
  const slug =
    page === 'content/article-template.html'
      ? '{{SLUG}}'
      : page === 'blog/index.html'
        ? 'blog-index'
        : (page.match(/^blog\/([^/]+)\/index\.html$/)?.[1] ?? null);

  const ctaHref = slug
    ? `${KAJABI}/offers/ZbJFXeGn?utm_source=blog&utm_medium=article&utm_campaign=free_runway_module&utm_content=${slug}__footer`
    : `${KAJABI}/offers/ZbJFXeGn`;

  let updated = original.replace(/<footer class="ft">[\s\S]*?<\/footer>/, footer(prefix, home, ctaHref));

  updated = applyCss(updated);

  if (updated === original) continue;

  if (verifyOnly) {
    problems.push(`${page}: footer is out of date — run \`npm run build:footer\`.`);
  } else {
    writeFileSync(file, updated);
    written += 1;
  }
}

if (verifyOnly) {
  if (problems.length) {
    console.error(`build-footer: ${problems.length} problem(s):\n`);
    for (const p of problems) console.error(`  ✗ ${p}`);
    process.exit(1);
  }
  console.log(`build-footer: footer is current across ${targets.length} files.`);
  process.exit(0);
}

console.log(`build-footer: updated ${written} of ${targets.length} files.`);
