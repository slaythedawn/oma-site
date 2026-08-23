# Working on the site

Recipes for the changes that actually come up. Read [README.md](README.md) first
for how the site and Kajabi fit together.

## The loop

```bash
git checkout -b short-description-of-change
npm run dev          # http://localhost:8080
# …edit…
npm run check        # same checks CI runs
git commit && git push -u origin short-description-of-change
```

Open a PR, wait for the Vercel preview comment, click through the preview, then
merge. Merging to `main` deploys to the live domain within a minute or two.

Never commit straight to `main` for anything touching prices, checkout links or
tracking. The preview deployment is the only place to catch a broken checkout
before customers do.

---

## Changing a price

There are **two** prices, and they are meant to differ:

| | Now | Where |
| --- | --- | --- |
| **Current** — what a visitor is charged | $299 | pricing card, `Course` schema, both conversion events, `data.js` `priceCurrent`, every CTA button label |
| **Anchor** — struck through above it | $499 | pricing card, `data.js` `priceOld` |

The `Save $200 off launch pricing` line is derived from the two, so a price change
touches five places plus that sentence. `npm run check:site` verifies each price
agrees with itself across its own sources, that the savings line is actually
`anchor − current`, and that the anchor stays above the current price.

Also update:

- every `blog/*/index.html` — the nav CTA button label
- **Kajabi** — the offer itself. The site is a shopfront; changing the number here
  does not change what anyone is charged.

```bash
grep -rn '299\|499' --include='*.html' --include='*.js' .
```

Getting the site and Kajabi out of step is the single most expensive mistake
available here. Change Kajabi first, then the site.

Everything is priced in **AUD**, in the schema and in the conversion events alike.

A struck-through price is a claim about what the course used to cost. Keep it one
you could stand behind — the ACL treats was/now pricing as a representation, not
decoration.

## Changing a Kajabi offer

Edit `config/kajabi.json`, then:

```bash
npm run kajabi:sync
```

That rewrites all 34 pages. Commit the config and the HTML together. If the config
was already committed before you synced, tell the script what it is replacing:

```bash
node scripts/kajabi-links.mjs --sync --from=OLDID --to=NEWID
```

Then open the preview and actually click Enrol. A valid-looking URL that lands on
a Kajabi 404 passes every check in this repo.

## Adding a blog article

Articles come in two kinds. The original sixteen are hand-written HTML in
`blog/<slug>/index.html`. Everything added since is **generated** from content in
`content/articles/` — do not hand-edit those files, your changes will be
overwritten by the next build.

To add a generated article:

1. Add an entry to the right file in `content/articles/` (or start a new one and
   import it from `content/articles.mjs`):

   ```js
   {
     slug: 'my-new-article',
     seoTitle: 'Under 60 characters',        // the <title> and og:title
     description: 'Under 160 characters.',   // meta description and og:description
     headline: 'The H1, which can be longer than the SEO title',
     category: 'Agencies',                   // shown as the eyebrow and card tag
     image: 'how-to-become-a-model',         // basename in blog/images/
     imageAlt: 'Describes the photo',
     readTime: 10,
     date: '2026-08-19',
     related: ['slug-a', 'slug-b', 'slug-c'],// three "Keep reading" cards
     faq: [{ q: '…', a: '…' }],              // becomes FAQPage schema
     body: `<p>…</p>`,                       // the article itself
   }
   ```

2. Add the slug to a cluster in `CLUSTERS` in `scripts/build-index-and-sitemap.mjs`,
   which sets both the blog listing and the sitemap. The build refuses to run if an
   article is in neither.
3. If it deserves a sitewide link, add it to `COLUMNS` in `scripts/build-footer.mjs`.
   Keep the footer to roughly five links per column — it is a navigation aid, not a
   dump of every URL. The "All N guides" label counts the articles on disk, so it
   does not need updating.
4. Build and check:

   ```bash
   npm run build && npm run check
   ```

That regenerates the page, the blog listing and `sitemap.xml`, and wires up the
canonical, the `Article` / `BreadcrumbList` / `FAQPage` schema, the tracking, the
CTAs and their `utm_content` slugs automatically. CI fails if the committed HTML
does not match the content it was generated from.

The template in `content/article-template.html` was lifted verbatim from the
hand-written articles, so both kinds render identically. If you change the shared
layout, change it there and re-run `npm run build`.

Article images go in `blog/images/`, exported at the width they are displayed and
saved as WebP or a compressed JPEG. A new article may reuse an existing image by
basename, but a dedicated one is better.

## Adding or replacing an image

- Export at roughly the displayed size. A 7 MB headshot rendered at 400 px wide
  costs every visitor 7 MB.
- Prefer WebP. Keep files well under 1 MB; CI rejects anything over 10 MB.
- **Give a replacement a new filename.** Caching is time-based, so overwriting a
  file in place can serve the old image for up to a week.
- Mentor headshots are wired up in `assets/data.js`, not in the HTML.
- **Every `<img>` needs an `alt`.** Describe what the image shows. If it is
  genuinely decorative — a tracking pixel, or a logo duplicated purely so a
  marquee can loop without a seam — write `alt="" aria-hidden="true"`. A bare
  `alt=""` fails `npm run check:site`, because it is indistinguishable from a
  field someone left blank. Bing reports both the same way.

## Adding or replacing a video

Only web-optimised exports belong in the repo — see `assets/Reels/Jack-web.mp4`
for the target, around 6 MB. Master files are gitignored on purpose; keep them in
cloud storage. If a video will not fit comfortably, host it externally and embed it.

## The footer and the homepage schema

Both are generated, because both are duplicated across all 35 files and drifted
the moment anyone edited one by hand.

- `scripts/build-footer.mjs` owns the footer everywhere, including its CSS. It is
  the site's only sitewide internal-linking surface, so the link groups mirror the
  blog's topic clusters. The free-module CTA keeps each page's own `utm_content`,
  so footer opt-ins stay attributable to the article that drove them.
- `scripts/build-home-schema.mjs` emits the homepage `WebSite` and `FAQPage`
  JSON-LD, reading the questions straight out of `assets/data.js`. The visible FAQ
  is rendered by JavaScript into an empty div, so without this a crawler sees no
  questions at all. Edit the FAQ in `data.js` and rebuild — never hand-edit the
  JSON-LD, it sits between generated markers.

- `scripts/build-index-and-sitemap.mjs` owns the blog listing grid and
  `sitemap.xml`. It rewrites the whole `<section class="bgrid">` body, so
  running it twice is a no-op.

`npm run check` fails if any of them is stale.

## Changing tracking

The GTM, GA4, Google Ads and Meta Pixel snippets are duplicated across all 34
pages. For generated articles they come from the shared template, so change them
there and rebuild rather than editing pages individually. Change them in every page or in none — a partial rollout produces
attribution data that is worse than no data.

Say in the PR what campaign reporting the change affects.

## The checks

| Command | What it catches |
| --- | --- |
| `npm run check:site` | Broken links and image/video references, a page missing from the sitemap, a copy-pasted canonical, a missing title or meta description, a price or currency that disagrees with itself, a savings claim that no longer adds up |
| `npm run check:kajabi` | A Kajabi link that drifted from `config/kajabi.json`, a wrong `utm_campaign`, a `utm_content` slug that does not match its page |
| `npm run check:site:external` | Off-site links that no longer respond. Runs in CI, and weekly on a schedule, so an archived Kajabi offer surfaces even in a quiet week. Advisory — it does not block a PR. |

CI also validates the HTML and fails any file over 10 MB that would reach visitors.

None of this checks that a page *looks* right, or that the checkout takes money.
Open the preview deployment.
