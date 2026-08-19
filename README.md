# Online Model Academy — marketing site

The public site at **[www.onlinemodelacademy.com](https://www.onlinemodelacademy.com)**.
Hand-written static HTML, deployed by Vercel on every push to `main`.

It sells the course. It does not run it: checkout, accounts, lessons and legal
pages all live in Kajabi on a **separate domain**, `www.onlinemodel.academy`.
Everything in this repo is the shopfront in front of that.

```
Visitor → onlinemodelacademy.com (this repo, Vercel)
             │
             ├── "Enrol — $299"        → onlinemodel.academy/offers/iJxLGaoD   (Kajabi checkout)
             ├── "Get the free module" → onlinemodel.academy/offers/ZbJFXeGn   (Kajabi free offer)
             ├── "Login"               → onlinemodel.academy/login             (Kajabi course)
             └── Privacy / Terms       → onlinemodel.academy/…                 (Kajabi pages)
```

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | The homepage. Everything — markup, CSS and JS — is in this one file. |
| `blog/<slug>/index.html` | One directory per article, 32 of them, plus `blog/index.html` as the listing. The first 16 are hand-written; the rest are generated — do not edit those by hand. |
| `content/articles/` | Source content for generated articles, plus the shared page template. |
| `assets/data.js` | Shared content data: mentor list, headline stats, pricing. Loaded by the homepage at runtime. |
| `assets/`, `header-assets/`, `blog/images/` | Images, logos and the one web-optimised video. |
| `config/kajabi.json` | **Single source of truth** for every link that leaves the site for Kajabi. |
| `scripts/` | Checks and the Kajabi link sync. Not deployed. |
| `project/` | Superseded Claude Design prototype. Kept for reference, excluded from the deploy. |

There is no framework and no bundler. What is in the repo is what is served — the
build step only renders article HTML from content, it does not transform anything
at deploy time.

Pricing is a markdown in AUD: $299 current, $499 struck through, and a savings line
derived from the two. Those numbers are repeated across the pricing card, the
`Course` schema, both conversion events and `assets/data.js`, so `npm run check`
verifies each price agrees with itself and that the savings line still adds up.
See [CONTRIBUTING.md](CONTRIBUTING.md#changing-a-price) before changing either.

## Working on it

```bash
npm run dev      # serve locally at http://localhost:8080
npm run build    # regenerate articles, the blog listing and sitemap.xml
npm run check    # build, link, asset, sitemap, canonical and Kajabi checks
```

`npm run check` is what CI runs on every pull request, so run it before you push.
Node 22 or newer; there are no dependencies to install.

Push a branch and open a PR — Vercel builds a preview deployment and comments the
URL on it. Check that preview before merging. Merging to `main` publishes.

## Changing a Kajabi link

Offer ids, the backend domain and the login/legal paths are all declared in
`config/kajabi.json`. They appear in 18 HTML files; never edit those by hand.

```bash
# 1. edit the id in config/kajabi.json
# 2.
npm run kajabi:sync
# 3. commit both the config and the HTML it rewrote
```

The sync reads the previous id from the last committed version of the config, so
one line in, one command, and all 18 pages follow. It also rewrites the offer id
where it is hardcoded in the homepage's conversion tracking — those handlers gate
on `href.indexOf('offers/<id>')`, so updating only the links would leave the Meta
and GA4 checkout events silently dead. CI fails the PR if the HTML and the config
ever disagree.

The blog CTAs carry UTM tags in a fixed shape — `utm_content=<page-slug>__<placement>`,
where placement is one of `nav`, `inline`, `end`, `footer`, `exit`. The check
enforces the slug, which is what stops a copy-pasted article reporting its
conversions under the article it was copied from.

## Tracking

Loaded on every page. IDs are public by design — they ship in the HTML.

| Tool | ID |
| --- | --- |
| Google Tag Manager | `GTM-K8BZ2TGG` |
| GA4 | `G-J2GQZGGLTW` |
| Google Ads | `AW-17266528210` |
| Meta Pixel | `1026127672836232` |

CTA clicks are tracked two different ways, which is worth knowing before you touch
either. The blog pages tag their buttons with `data-cta` attributes; the homepage
instead listens for clicks and matches on the offer id in the link, firing Meta
`InitiateCheckout` / `ViewContent` and GA4 `begin_checkout` / `generate_lead`.
The homepage quiz posts to a Zapier webhook. Changing any of this affects live
campaign reporting — say so explicitly in the PR.

## Hosting

Vercel, connected to this repo. `vercel.json` sets cache headers, security headers
and forces trailing slashes so `/blog/x` and `/blog/x/` do not both get indexed.
`.vercelignore` keeps repo tooling and the old prototype out of the deployment.

Image and video caching is time-based, not content-hashed. **Renaming a file is how
you bust the cache** — overwriting `assets/headshots/foo.png` in place can leave the
old image in front of visitors for up to a week.

## Assets

Master video and photo exports do not belong in git. Commit only a web-optimised
version, and keep the master in cloud storage. CI fails any file over 10 MB that
would ship to visitors.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the per-task recipes.
