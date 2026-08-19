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

That rewrites all 18 pages. Commit the config and the HTML together. If the config
was already committed before you synced, tell the script what it is replacing:

```bash
node scripts/kajabi-links.mjs --sync --from=OLDID --to=NEWID
```

Then open the preview and actually click Enrol. A valid-looking URL that lands on
a Kajabi 404 passes every check in this repo.

## Adding a blog article

1. Copy an existing article directory — they share one layout.

   ```bash
   cp -r blog/how-to-become-a-model blog/<new-slug>
   ```

2. Update, in the new `index.html`:
   - `<title>`, `<meta name="description">`, `og:` tags
   - `<link rel="canonical">` → `https://www.onlinemodelacademy.com/blog/<new-slug>/`
   - the `Article` / `FAQPage` JSON-LD, including `datePublished`
   - every CTA's `utm_content` → `<new-slug>__nav`, `__inline`, `__end`, `__footer`, `__exit`
3. Add it to `blog/index.html` and to `sitemap.xml`.
4. `npm run check` — it will tell you if you missed the sitemap, the canonical or a UTM slug.

Article images go in `blog/images/`, exported at the width they are displayed and
saved as WebP or a compressed JPEG.

## Adding or replacing an image

- Export at roughly the displayed size. A 7 MB headshot rendered at 400 px wide
  costs every visitor 7 MB.
- Prefer WebP. Keep files well under 1 MB; CI rejects anything over 10 MB.
- **Give a replacement a new filename.** Caching is time-based, so overwriting a
  file in place can serve the old image for up to a week.
- Mentor headshots are wired up in `assets/data.js`, not in the HTML.

## Adding or replacing a video

Only web-optimised exports belong in the repo — see `assets/Reels/Jack-web.mp4`
for the target, around 6 MB. Master files are gitignored on purpose; keep them in
cloud storage. If a video will not fit comfortably, host it externally and embed it.

## Changing tracking

The GTM, GA4, Google Ads and Meta Pixel snippets are duplicated across all 18
pages. Change them in every page or in none — a partial rollout produces
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
