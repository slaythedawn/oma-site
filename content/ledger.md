# SEO content ledger

What each article targets, so the weekly routine can check for cannibalisation
before writing anything new. One row per live article. Volume and difficulty
are US Ahrefs figures at the date the article was picked, where known.

**The rule this table exists to enforce:** if an existing article already
targets the keyword, improve that article. Do not write a second one.

## Cadence

As of 2026-08-28, Josh's instruction: run every 2 days (not weekly), at a
randomised time of day, and **every run ships a new article** picked
against a live Ahrefs opportunity — no more skipping a run because the
last article's PR hadn't merged yet (that's moot now anyway, see the
merge-without-approval note below). The actual fire schedule and time
randomisation live in this environment's scheduled-trigger configuration
outside this repo and outside any tool this session has access to — Josh
manages the interval and time in the Claude Code on the web scheduling
settings for this environment, not by editing this file. This section is
the operating contract for what a run does once it fires, not a record of
when it fires.

Every run does all of the following, not just "pick a keyword and write":

1. Check open branches/PRs first for a target already in flight — the
   duplicate-article collision (two entries below, paid for twice already)
   gets more likely, not less, at a 2-day cadence.
2. Pick the target from live Ahrefs opportunity data (organic-keywords /
   keyword-explorer — see the GSC gap below for why Ahrefs is the source),
   checked against this table for cannibalisation.
3. Write the article, cross-link it from 2+ sibling articles in-body (not
   just the blog index card) — `npm run check:site` now enforces this as
   a hard failure via the orphan-inbound-link check added 2026-08-28, so a
   run that skips it will not pass CI, not just risk an SEO miss.
4. Regenerate the blog index and `sitemap.xml` (`npm run build:index`) and
   confirm `robots.txt` still points at it — `npm run check:site` also
   covers this.
5. Update this ledger: move the keyword from Shortlist to Live, and add
   any newly-surfaced opportunities noticed along the way to Shortlist
   even if this run doesn't write them yet, so the next run has a live
   list rather than a stale one.
6. Merge the run's own PR once CI is green and `mergeable_state` is
   `clean` — do not wait for Josh to look at the preview first.

**Market parity on jurisdiction-dependent content, added 2026-08-28.**
The site targets US, UK and Australian search intent (see the Live table's
mix of US-spelled and AU-spelled slugs), but content covering anything
legally or administratively jurisdiction-dependent — child labor/work
permit law, licensing, trust-account or tax rules, agency regulation —
defaulted to US-only detail with a vague one-line "varies elsewhere"
caveat. Josh's feedback on `baby-modelling-agency`: give the US, the UK
and Australia equal, concrete treatment, not one researched market and
two hand-waves. Fixed there via the shared `legalBlock` in
`content/articles/parents.mjs` (verified against gov.uk, local-council
sources and NSW's Office of the Children's Guardian before writing, not
guessed). Apply the same standard going forward: any new or edited
article touching a jurisdiction-dependent rule gets real, checked detail
for all three markets, or it doesn't ship.

## Live (39 articles)

| Slug | Target keyword | US vol | KD | Added |
| --- | --- | --- | --- | --- |
| how-to-become-a-model | how to become a model | 7500 | 1 | 2026-08-14 |
| how-much-does-it-cost-to-become-a-model | how much does it cost to become a model | 3400 | 1 | 2026-08-14 |
| how-to-make-a-modeling-portfolio | how to make a modeling portfolio | 3500 | 3 | 2026-08-14 |
| how-do-models-walk-in-runway-shows | how do models walk in runway shows | 3200 | 1 | 2026-08-14 |
| how-to-get-signed-by-a-modeling-agency | how to get signed by a modeling agency | 900 | 0 | 2026-08-14 |
| how-to-choose-a-modeling-agency | how to choose a modeling agency | 2300 | 0 | 2026-08-14 |
| how-to-become-a-model-with-no-experience | how to become a model with no experience | 350 | 2 | 2026-08-14 |
| how-to-become-a-child-model | how to become a child model | 3400 | 2 | 2026-08-14 |
| how-to-become-a-freelance-model | how to become a freelance model | 3500 | 1 | 2026-08-14 |
| how-to-become-a-male-model | how to become a male model | 500 | 1 | 2026-08-14 |
| how-to-become-a-fitness-model | how to become a fitness model | 1100 | 1 | 2026-08-14 |
| how-to-become-a-hand-model | how to become a hand model | 1400 | 3 | 2026-08-14 |
| modeling-portfolio-examples | modeling portfolio examples | 700 | 3 | 2026-08-14 |
| model-casting-calls | model casting calls | 3500 | 8 | 2026-08-14 |
| how-to-become-a-successful-model | how to become a successful model | 2700 | 5 | 2026-08-14 |
| how-to-become-a-model-at-16 | how to become a model at 16 | n/a | low | 2026-08-14 |
| modelling-agencies-sydney | modelling agencies sydney | AU | — | 2026-08-19 |
| modelling-agencies-melbourne | modelling agencies melbourne | AU | — | 2026-08-19 |
| modelling-agencies-brisbane | modelling agencies brisbane | AU | — | 2026-08-19 |
| modelling-agencies-perth | modelling agencies perth | AU | — | 2026-08-19 |
| modelling-agencies-australia | modelling agencies australia | AU | — | 2026-08-19 |
| how-to-become-a-model-in-australia | how to become a model in australia | AU | — | 2026-08-19 |
| modeling-agencies-near-me | modeling agencies near me | — | — | 2026-08-19 |
| what-do-modeling-agencies-look-for | what do modeling agencies look for | — | — | 2026-08-19 |
| plus-size-modeling-agencies | plus size modeling agencies | — | — | 2026-08-19 |
| child-modeling-agencies | child modeling agencies | — | — | 2026-08-19 |
| baby-modelling-agency | baby modelling agency | — | — | 2026-08-19 |
| model-comp-card | model comp card | — | — | 2026-08-19 |
| model-portfolio-website | model portfolio website | — | — | 2026-08-19 |
| modeling-jobs | modeling jobs | — | — | 2026-08-19 |
| open-casting-call | open casting call | — | — | 2026-08-19 |
| how-to-start-a-modeling-career | how to start a modeling career | — | — | 2026-08-19 |
| modeling-classes | modeling classes / modeling classes for beginners / modeling training | 900 + 200 | 20 / 0 | 2026-08-21 |
| modeling-schools | modeling school (+ scam intent) | 700 | 35 | 2026-08-21 |
| runway-model | runway model / what is runway modeling | 3200 + 1200 | 2 / 0 | 2026-08-20 |
| how-much-do-models-make | how much do models make | 2500 | 3 | 2026-08-21 |
| what-is-commercial-modeling | what is commercial modeling | 2500 | 3 | 2026-08-25 |
| types-of-modeling | types of modeling / types of models | 1300 + 700 | 9 / 1 | 2026-08-27 |
| what-is-fashion-modeling | what is fashion modeling | 1000 | 6 | 2026-08-28 |
| how-to-get-paid-as-a-model | how to get paid as a model | 800 | 0 | 2026-08-29 |
| how-to-become-a-plus-size-model | how to get into plus-size modeling / how to become a plus size model | 900 + 200 | 1 / 1 | 2026-08-30 |
| modeling-resume | modeling resume | 700 | 0 | 2026-08-31 |
| model-poses | model poses | 5900 | 0 | 2026-09-01 |
| how-to-become-a-petite-model | petite modeling / how to become a petite model | 250 + 30 | 0 / 0 | 2026-09-02 |
| petite-modeling-agencies | petite modeling agencies | 350 | 0 | 2026-09-03 |

The homepage itself was revised 2026-08-18 for the commercial cluster
(`modeling course`, `online modeling`, `model academy` and neighbours) —
title, meta, hero, curriculum intro, pricing lede and Course schema. Not a
blog article, tracked separately.

## Shortlist for coming weeks

`how to get into plus-size modeling` (below) was picked and shipped
2026-08-30 — see the Live table. Verified via Ahrefs (`keywords-explorer-overview`,
`keywords-explorer-matching-terms`) against this table's two remaining
digitals-adjacent shortlist entries below first: `how to find modeling jobs`
and `modeling digitals` both checked out as cannibalised on closer reading
of the actual article bodies, not just the ledger table (`jobs.mjs`'s FAQ
already answers "how do I find modeling jobs" near-verbatim; `portfolio.mjs`'s
comp-card section and `how-to-get-signed-by-a-modeling-agency` already
explain digitals in depth). Both dropped from the shortlist below. The
matching-terms scan surfaced `how to get into plus-size modeling` (900 vol,
KD 1) and `how to become a plus size model` (200 vol, KD 1) as genuinely
clean instead: the site's existing plus-size content
(`plus-size-modeling-agencies`, plus a subsection of `types-of-modeling`) is
agency-directory and category-hub material, not a personal step-by-step
guide, and every other niche in the "Specialisms" cluster (fitness, hand,
male, freelance) already has one. Cross-linked in-body from
`plus-size-modeling-agencies`, `types-of-modeling` and
`how-to-start-a-modeling-career`.

`how to get paid as a model` (picked 2026-08-29) is fully covered above too.
The overlap check flagged for it turned out clean: the existing
`how-much-do-models-make` FAQ and body cover pay *rates* (day rate, usage,
commission), not payment *mechanics* (agency-collected vs. direct billing,
net terms, invoicing, 1099s), so the two are genuinely complementary rather
than duplicative. Cross-linked in-body from `how-much-do-models-make`,
`modeling-jobs` and `how-to-start-a-modeling-career`.

`modeling scams` (was on this list) is now confirmed covered rather than
merely flagged: `modeling-schools` is subtitled "How They Work and How to
Spot a Scam" and covers the scam pattern in depth, `modeling-jobs` has its
own "How to Tell a Real Job From a Scam" section, and the AU agency guides
carry it too. Dropped from the shortlist — do not write a dedicated piece
for this term.

Two fresh candidates surfaced 2026-08-29 via a `keywords-explorer-matching-terms`
scan for "modeling" filtered to low difficulty looked like clean gaps on
volume and KD alone but turned out **not** to be once the actual article
bodies were checked, not just this ledger's table — a reminder that the
table records target keywords, not full-text coverage, so a keyword absent
from it can still be substantively covered inside another article's prose:

- **`what is editorial modeling`** (1700 vol, KD 0) — `what-is-fashion-modeling`'s
  own FAQ already states editorial as one of fashion modeling's channels
  ("editorial, runway, campaign and showroom work"), and `types-of-modeling`
  gives it a dedicated subsection. A standalone page would cannibalize both.
- **`what is fitness modeling`** (1000 vol, KD 2) — `how-to-become-a-fitness-model`
  already has a section literally titled "What Fitness Modeling Actually Is
  (and Isn't)" answering this exact query.

Neither is worth writing as its own page. If either keyword's near-miss
position looks worth chasing once GSC access exists, the move is expanding
the existing section, not a new URL.

| Target keyword | US vol | KD | Note |
| --- | --- | --- | --- |
| modeling headshots | 800 | 0 | Commercial + local intent (some searchers may want a photographer, not a guide), so weaker fit than it looks. `portfolio.mjs` mentions headshots in the comp-card context but has no dedicated treatment of choosing/getting a modeling headshot specifically — not confirmed clean, check depth before writing. |
| how to find modeling jobs | 700 | 0 | **Confirmed cannibalised 2026-08-30** — dropped, do not write. `jobs.mjs`'s FAQ already answers this near-verbatim. |
| modeling digitals | 1000 | 0 | **Confirmed cannibalised 2026-08-30** — dropped, do not write. `portfolio.mjs` and `how-to-get-signed-by-a-modeling-agency` already cover it in depth. |
| petite modeling agencies | 350 | 0 | **Shipped 2026-09-03** — see the Live table. Was the shortlist's recommended next pick per the 2026-09-02 note. |
| model measurements | 600 | 0 | **Checked 2026-09-02, cannibalised** — `agencies-us.mjs` (`what-do-modeling-agencies-look-for`) already has a dedicated FAQ ("What measurements do modeling agencies want?") with concrete ranges by category, plus a full "Measurements, against that category" section. A standalone page would duplicate it. If its near-miss position is ever visible (needs GSC), the move is expanding that section, not a new URL. |
| how tall do you have to be to be a model | 1100 | 0 | **Checked 2026-09-02, cannibalised** — same `agencies-us.mjs` FAQ and section as `model measurements` above already answers this close to verbatim (height ranges by board). Do not write. |
| model diet | 700 | 0 | **Checked 2026-09-02, deprioritised on fit, not cannibalisation.** SERP is dominated by Healthline and curiosity-driven "Victoria's Secret model diet" content, not career-education intent, and the topic sits close enough to disordered-eating territory (this site's audience includes teens, per `how-to-become-a-model-at-16`) that it needs unusually careful, responsible framing to be worth the risk for the conversion upside. Not ruled out permanently, just not a quick pick — if ever written, keep it health-first and explicitly debunk the extreme-dieting framing rather than feed it. |
| model release form | 1800 | 3 | **Checked 2026-09-02, wrong audience.** Searcher intent is overwhelmingly photographers wanting a release-form template for their own shoots, not aspiring models. Off-ICP for a modeling-course lead magnet despite the volume. Dropped. |
| what is a brand ambassador / brand ambassador jobs | 5100 + 4600 | 0 | **Checked 2026-09-02, wrong audience.** High volume, zero difficulty, but the intent is retail/college ambassador programs, not modeling. Weak fit for the site's conversion path. Dropped. |

## Known gaps

- **The routine's actual run schedule (interval, time of day) is not
  configurable from inside a session.** Josh asked (2026-08-28) for every
  2 days at a randomised time, replacing weekly. No tool available in this
  session's toolset edits that outer trigger — `CronCreate` only makes
  session-scoped jobs that die with the session (7-day hard cap), which is
  not what fires this routine in the first place (this session started
  from an external "SCHEDULED TASK" prompt, not a `CronCreate` job — see
  `CronList`, which reports none). The interval and time live in this
  environment's scheduled-trigger settings in Claude Code on the web,
  outside this repo. Told Josh directly rather than silently leaving the
  old weekly schedule in place; he needs to change it there himself. The
  Cadence section above is what a run does once fired, which this session
  *can* control, and is kept current regardless of who sets the trigger.
- **`npm run check:site` now fails a blog article with fewer than 2
  in-body inbound links from other articles**, added 2026-08-28
  alongside this cadence change, in `scripts/check-site.mjs`. Found one
  pre-existing violation on the first run — `baby-modelling-agency` had
  only the one inbound link from `child-modeling-agencies`'s related-card
  — fixed by adding a link to it from the "babies and toddlers" section of
  `how-to-become-a-child-model`. The blog index card and sitemap listing
  both link every article by construction and do not count toward the
  minimum, since neither carries the in-body link equity or topical
  context a real cross-link does.
- **Merge the routine's own PRs without waiting for Josh's approval.**
  PR #14 (`types-of-modeling`) sat green and mergeable for about a day
  because the session that shipped it deferred the merge to Josh ("ready
  to merge whenever you get a chance to glance at the preview yourself").
  Josh's instruction as of 2026-08-28: don't wait for approval on this in
  future — once a routine-authored PR is CI-green and `mergeable_state`
  is `clean`, merge it directly and move on, same as every other step in
  this routine. This does not extend to anything touching prices,
  checkout links or tracking (CONTRIBUTING.md's existing carve-out still
  applies there), and it does not license skipping the checks themselves
  — CI green and a clean mergeable state are still required before
  merging, this just removes the extra wait for a human glance at the
  preview on top of that.
- **GSC access is not available from this execution environment.** The
  service-account key described in the original handover lived in a chat
  project's file store, not in this repo or this session's secrets. No
  Google Search Console MCP tool is connected either. The Ahrefs MCP has
  `gsc-*` tools, but they read from an Ahrefs *project* with GSC connected,
  and the only project visible to this Ahrefs account (`Knest`) is not this
  site — confirmed via `management-projects` on 2026-08-22, matching the
  original handover's note that Josh cannot create a project in this Ahrefs
  account. Keyword research this run used Ahrefs Site Explorer's
  organic-keyword tools instead (`site-explorer-organic-keywords`,
  `site-explorer-metrics`), which read the domain's live rankings without
  needing a project — but they cannot see clicks, impressions, or near-miss
  positions the way GSC can. Until GSC access or a real Ahrefs project for
  `onlinemodelacademy.com` is available in-session, "pull GSC data" in the
  weekly routine (step 2) cannot run as documented — substitute the Ahrefs
  organic-keyword check above.
- **The live site IS fetchable, via the Vercel MCP.** Raw `curl` and the
  `WebFetch` tool are both blocked by network egress policy for
  `www.onlinemodelacademy.com` — but the Vercel MCP's `web_fetch_vercel_url`
  reaches production fine and returns the full raw HTML. Used repeatedly on
  2026-08-23 to verify deployed markup. Two things to know when using it:
  a large page exceeds the tool's token cap and is written to a file to be
  read from disk instead, and it appends a `_vercel_share` token to
  redirect targets, which is an artefact of authenticated access, not
  something a visitor sees. Prefer it over `WebFetch` even where `WebFetch`
  is allowed: `WebFetch` converts to markdown, which silently strips
  JSON-LD and `href`s, so it will report schema and links as absent when
  they are present. That mistake was made and corrected in this session.
- **Two article branches sat unmerged for 1-2 days before recovery.**
  `claude/charming-tesla-4r1qds` (runway-model + this ledger's first repo
  version) and `claude/charming-tesla-5x0qph` (how-much-do-models-make)
  were pushed by earlier sessions but neither opened a PR, so they were
  invisible to the session that shipped modeling-classes/modeling-schools
  (PR #4) a day later. Both are now merged into this branch's history. The
  two stale branches were deleted on 2026-08-23 after PR #5 merged.
- ~~**18 of the 20 generated articles have no inline CTA.**~~ **Fixed
  2026-08-23.** Added the mid-body `.inline-cta` block (identical markup to
  `runway-model` and `how-much-do-models-make`, each with its own
  `utm_content=<slug>__inline`) to all 18 remaining generated articles,
  placed before the H2 closest to a third of the way through each body.
  `npm run check` and `html-validate` both pass clean; the diff is exactly
  the 18 `blog/<slug>/index.html` files plus the 7 `content/articles/*.mjs`
  files that needed a new block. All 36 live articles now carry the inline
  CTA — this gap is closed.
- **Homepage still uses British "modelling"** in the low-30s count of
  places against low-20s "modeling". All the search volume is US. Left
  alone because it is brand copy, not a routine decision — flagged for
  Josh, not changed unasked.
- **A second, independent branch wrote the same article the same week.**
  `claude/charming-tesla-u3oidj`, pushed 2026-08-24 21:15 UTC by an earlier
  session, also wrote `what-is-commercial-modeling` against the same
  shortlist entry, and also never opened a PR — the exact same failure
  mode as the 2026-08-23 collision two entries above this one, and this is
  now the second time it has cost a full duplicate write. Discovered only
  by chance, via `list_deployments` on the Vercel MCP surfacing a preview
  build from that branch, *after* this session had already written and
  pushed its own version as PR #11. **Before picking next week's target,
  check `git branch -r` and open PRs for a branch already covering it** —
  this should happen before writing content, not after. PR #11's version
  was kept (already validated, checks green); `claude/charming-tesla-u3oidj`
  should be deleted once #11 merges, per the same cleanup the last
  collision got.
- **`what-is-commercial-modeling` shipped 2026-08-25 reused an existing
  hero image rather than a dedicated one.** Higgsfield's `generate_image`
  worked fine and returned a usable result (a clean, modern, plain-wall
  commercial headshot, no collage/text artefacts), but the resulting
  `cloudfront.net` asset URL could not be fetched into this session:
  direct `curl` and the agent proxy both got a policy `403` on the host
  (confirmed via `/root/.ccr/__agentproxy/status`, `recentRelayFailures`),
  and no available MCP tool downloads an arbitrary HTTPS media URL to a
  local file (`media_import_url` re-hosts into Higgsfield's own storage,
  it does not return bytes; `WebFetch` summarises rather than fetching
  binary). Shipped with `image: 'how-to-become-a-model'` instead, which
  is the closest existing hero in tone (plain wall, natural smile). Until
  this is resolved, treat "generate a dedicated Higgsfield hero" as
  blocked in this execution environment and default to reusing an
  existing image by basename, per the reuse allowance in
  CONTRIBUTING.md — flag it here rather than silently shipping without
  noting the substitution.
- **PR #10 (nav unification) and PR #11 (`what-is-commercial-modeling`)
  merged cleanly with no text conflict, but merging both landed one page
  with stale markup anyway.** #11 was generated before #10 rebuilt the
  nav, so the new article carried the pre-unification per-template nav
  after both merged — exactly the drift #10 exists to prevent, just on a
  page #10 didn't know existed. `npm run check` caught it immediately
  (`check:build` failed on the one file); fixed in PR #12 by re-running
  `npm run build`, which touched only that file. **Lesson for next time:
  after merging two PRs that touch generated output, always pull main and
  run `npm run check` before considering either one actually shipped** —
  green CI on each PR individually does not guarantee the merged result is
  clean.
- **Branch cleanup is blocked from this execution environment.** `git push
  origin --delete` on any stale branch fails with HTTP 403 — this
  session's git credentials can push to branches but not delete them, and
  no available GitHub MCP tool (`mcp__github__*`) deletes a branch either
  (only `create_branch` exists). Confirmed superseded and safe to delete
  once someone has the access: `claude/charming-tesla-4r1qds`,
  `claude/charming-tesla-5x0qph`, `claude/charming-tesla-d63iwv`,
  `claude/charming-tesla-u3oidj`, `claude/charming-tesla-zragay` (all fully
  superseded by already-merged PRs — content verified identical or
  earlier-superseded), plus `claude/high-intent-coverage` and
  `claude/seo-internal-linking` (merged) and the two now-merged PR head
  branches `claude/charming-tesla-7yt01d` and
  `claude/model-academy-github-setup-etwquk`. None of this blocks
  shipping; it is only repo tidiness.
- **2026-08-27 run: `git branch -r` + open-PR check done *before* writing,
  per the lesson above — no collision this time.** All flagged stale
  branches confirmed still zero commits ahead of `main`. No open PRs
  existed at session start. `npm run check` on `main` was clean before any
  new work started, so the PR #10/#11 merge-order issue has not recurred.
- **The Higgsfield hero-image download block is now three-for-three.**
  `generate_image` (`nano_banana_pro`) produced a clean, on-brief result
  again, but the `cloudfront.net` asset URL still 403s through this
  session's network policy on direct fetch — same failure as the
  `what-is-commercial-modeling` note above, reproduced again for
  `types-of-modeling`. This looks like a standing property of the
  execution environment rather than a one-off, so treat "generate a
  dedicated Higgsfield hero" as blocked until someone with access to the
  proxy config allowlists the Higgsfield CDN host, and keep defaulting to
  an existing-image reuse in the meantime.
- **GSC access: unchanged, still unavailable.** No `gsc-*`-prefixed MCP
  tool and no service-account key file present in this session
  (`find / -iname '*gsc*'` turned up nothing outside system packages).
  Same substitution as before: Ahrefs `site-explorer-organic-keywords` and
  `keywords-explorer-overview` for keyword targeting, no near-miss/impression
  data available this run.
- **2026-08-29 run: skipped attempting a dedicated Higgsfield hero and went
  straight to reusing an existing image**, given the three prior consecutive
  failures logged above are described as a standing environment property,
  not a one-off worth re-testing every run. Reused
  `how-to-get-signed-by-a-modeling-agency` (a desk/paperwork scene, already
  reused once for `how-much-do-models-make`) for `how-to-get-paid-as-a-model`
  with its own `imageAlt`. If someone confirms the CDN host has been
  allowlisted, it's worth trying a dedicated generation again rather than
  defaulting to reuse indefinitely.
- **2026-08-30 run: `git branch -r` + open-PR check done before writing, per
  the standing lesson above — no open PRs, and every stale branch listed in
  this file confirmed still zero commits ahead of `main`.** Also re-checked
  `/root/.ccr/__agentproxy/status` for the Higgsfield CDN block: still no
  allowlisting change (`recentRelayFailures` empty because nothing was
  attempted, not because it's fixed), so skipped a generation attempt again
  and reused `how-to-become-a-model` (plain-wall studio portrait, not
  previously reused in generated content) for
  `how-to-become-a-plus-size-model`, with its own `imageAlt` describing the
  actual digitals-style framing rather than the original page's framing.
  This session also created a new `content/articles/niche.mjs` file for
  personal "how to become a [niche] model" career guides, alongside the
  existing hand-written fitness/hand/male/freelance guides and separate from
  `agencies-us.mjs`'s agency-directory content — the first article that
  didn't cleanly fit an existing bucket file. Future niche career-guide
  articles (as opposed to agency-directory or category-hub content) belong
  there too.
- **2026-08-31 run.** `git branch -r` + open-PR check done before writing —
  no open PRs, and every stale branch listed above (plus
  `claude/charming-tesla-n854xk`, `claude/baby-article-uk-us-au-parity` and
  `claude/ledger-automerge-standing-note`, all new since the last entry)
  confirmed zero commits ahead of `main`, so nothing was in flight. The
  designated session branch itself was identical to `main` (its own prior PR
  #20 already merged), so it was reset from `origin/main` rather than built
  on top of old history, per the merged-branch restart protocol. Wrote
  `modeling-resume` (700 vol, KD 0), the shortlist's last remaining clean
  entry, closing that list out — `modeling headshots` (800, KD 0) is now the
  only unresolved candidate left on it, still flagged for its local/commercial
  intent risk rather than confirmed clean. A fresh `keywords-explorer-matching-terms`
  scan on "modeling" (US, difficulty ≤ 8, volume ≥ 300) surfaced nothing new
  and clean: every real modeling-industry term in the results (`modeling
  portfolio`, `how to start modeling`, `commercial modeling`, `what is a
  modeling casting call`, `child modeling`, `hand modeling`, `how to get into
  modeling`) is a near-duplicate of an already-live article, and the rest of
  the volume was unrelated senses of "modeling" (3D/financial modeling,
  modeling clay, celebrity mentions). The next run should scan a different
  seed term (e.g. "model" or "runway") rather than "modeling" again, since
  this exact query is now fished out. Also retested the Higgsfield hero-image
  block once more (`generate_image` with `nano_banana_pro` for a still-life
  desk scene, no people, since the topic is a document): the generation
  itself worked cleanly, but the resulting `cloudfront.net` URL still 403s on
  direct fetch through this session's network policy (confirmed via
  `/root/.ccr/__agentproxy/status` before and a direct `curl` after), so this
  remains a standing environment property, not a one-off. Shipped with
  `image: 'how-to-get-signed-by-a-modeling-agency'` (the desk/portfolio-review
  scene, already reused 5 times) since it fits a resume article better than
  the portfolio-shoot images the rest of the cluster uses, rather than
  spending another generation attempt on a topic this thin.
- **2026-09-01 run.** Fired from the external scheduled trigger together with
  a copy of the original 18 August chat-routine handover document as the
  stored prompt — that document is now well out of date (it describes an 18
  August snapshot with 17 articles and a not-yet-deployed article 18, a
  Python/markdown build, and no repo-based ledger) and was superseded by
  this ledger and the `content/`/`scripts/` pipeline days ago. Treated this
  file and `CONTRIBUTING.md` as the authoritative process instead of the
  stored prompt text, per this file's own note above that the routine's
  operating contract lives here, not in the trigger configuration.
  `git branch -r` + open-PR check done before writing — no open PRs, and
  every branch ahead of `main` was one already confirmed superseded/dead
  above; no new ones. Per the 2026-08-31 note, scanned "runway" and "model"
  as seed terms instead of "modeling" again. Both were mostly noise at the
  difficulty/volume filter used previously (`runway` returned almost
  entirely *Project Runway* TV-show and Rent the Runway queries; `model`
  returned Tesla/Ford/statistics-model queries once informational modeling
  terms were exhausted) — but `model poses` (5,900 vol, KD 0) surfaced from
  the `model` scan and checked out genuinely clean: grepped every generated
  and hand-written article for "pose"/"posing" and found it mentioned only
  in passing (digitals should have "no posing tricks", the runway walk's
  end-of-runway pause) with no dedicated technique treatment anywhere on the
  site. Confirmed via `serp-overview` that the keyword's actual SERP is
  dominated by photography-technique blogs and Pinterest, not
  modeling-course competitors or stock-photo sites, so it is a clean
  informational fit for an insider posing guide. Shipped `model-poses` in
  `content/articles/portfolio.mjs` (Portfolio cluster, alongside comp cards
  and the portfolio guide, since posing technique is squarely a
  digitals/test-shoot topic), cross-linked in-body from `model-comp-card`
  and `types-of-modeling`. Attempted a dedicated Higgsfield generation once
  more before defaulting to reuse (`nano_banana_pro`, plain-wall pose shot,
  clean modern result with no collage/text artefacts) — the resulting
  `cloudfront.net` URL still 403s on direct fetch through this session's
  network policy, same as every prior attempt, so this remains a standing
  environment property. Shipped with
  `image: 'how-to-become-a-successful-model'` (previously described
  elsewhere in this repo as "a model practising posture and movement in a
  training studio," which fits a posing article better than its other
  reuses) and a fresh `imageAlt`. Opened PR #22; per the automerge
  authorization above, merging once CI is green and `mergeable_state` is
  `clean`, without waiting for Josh.
- **2026-09-02 run.** Fired from the same external scheduled trigger with the
  original 18 August handover as the stored prompt, same as 2026-08-31 and
  2026-09-01 - this file and `CONTRIBUTING.md` remain the authoritative
  process, per the standing note above. Before writing anything, `git fetch
  origin main` came back stale on the first attempt (a combined `git fetch
  origin main <branch>` silently no-ops when one of the refs doesn't exist,
  leaving old cached refs), which briefly looked like every PR since #14
  had closed unmerged - false alarm, caused by reading a stale local ref,
  not an actual problem. `mcp__github__pull_request_read` with `method:
  'get'` on the PR in question gave the correct authoritative `merged:
  true`, where `list_pull_requests`'s `merged` field looked wrong. Lesson
  for next time: fetch each ref in its own `git fetch` call, and prefer
  `pull_request_read` over `list_pull_requests` for a PR's true merge state
  if the two ever disagree again. `git branch -r` showed only `main` and
  this session's own designated branch, no open PRs, consistent with a
  clean state. Skipped the seed terms already fished out ("modeling",
  "runway", "model") and tried fresh ones instead: "casting" and
  "photoshoot" were almost entirely noise (adult content and
  celebrity/event photography), "model measurements" and "how tall do you
  have to be to be a model" both checked out cannibalised by the existing
  `what-do-modeling-agencies-look-for` FAQ and height-by-category section
  (see the shortlist table above), and "model diet", "model release form"
  and the "brand ambassador" cluster were deprioritised on audience fit
  rather than cannibalisation (also logged above). "petite modeling" (250
  vol, KD 0) checked out genuinely clean: only passing mentions in
  `types-of-modeling`'s category list, no dedicated page, a weak SERP
  (low-DR blogs, forums, YouTube), and it completes the Specialisms cluster
  the same way `how-to-become-a-plus-size-model` did for curve/plus -
  fitness, hand, male, freelance and plus-size all already had a personal
  how-to guide, petite did not. Shipped `how-to-become-a-petite-model` in
  `content/articles/niche.mjs`, cross-linked in-body from
  `types-of-work.mjs`'s "Petite" section and a new "Petite" bullet added to
  `agencies-us.mjs`'s "Which Board You Fit" list (which did not mention
  petite at all before this run). Skipped attempting a dedicated Higgsfield
  generation, per the 2026-08-29 note that re-testing every single run
  stopped being informative once the failure mode was confirmed standing -
  reused `image: 'how-to-become-a-model-with-no-experience'` (a plain-wall,
  unretouched digital shot, not previously reused in generated content)
  with a fresh `imageAlt` describing full-length framing to show true
  proportions. `npm run check` and `npx html-validate@8` both pass clean;
  `seoTitle` is 42 characters and `description` is 146, both within limit.
  Also logged `petite-modeling-agencies` (350 vol, KD 0) to the shortlist
  above as the natural next pick, an agency-directory companion piece to
  this one, matching how `plus-size-modeling-agencies` and
  `how-to-become-a-plus-size-model` pair up.
- **2026-09-03 run.** Fired from the same external scheduled-trigger prompt
  as every prior run (the stored prompt is still the stale 18 August
  chat-routine handover; this file and `CONTRIBUTING.md` remain the
  authoritative process, per the 2026-09-01 note). `git branch -r` + open-PR
  check done before writing: no open PRs, and every previously-flagged stale
  branch (`claude/charming-tesla-4r1qds`, `-5x0qph`, `-d63iwv`, `-u3oidj`,
  `-zragay`, `claude/model-academy-github-setup-etwquk`, plus several new
  branches this run had not seen before — `claude/baby-article-uk-us-au-parity`,
  `claude/charming-tesla-65zhbk`, `-7yt01d`, `-79j4o5`, `-n854xk`,
  `claude/every-2-days-cadence-and-orphan-check`, `claude/high-intent-coverage`,
  `claude/how-to-get-paid-as-a-model`, `claude/ledger-automerge-standing-note`,
  `claude/seo-internal-linking`, `claude/what-is-fashion-modeling`,
  `fix-nav-drift-new-article`, `ledger-update-2026-08-26`) confirmed zero
  commits ahead of `main`, so nothing was in flight. Shipped
  `petite-modeling-agencies` (350 vol, KD 0), exactly the shortlist's
  recommended next pick, confirmed live via `keywords-explorer-overview`
  (matches the previously-recorded figures) and `serp-overview` (top results
  are low-DR agency pages, video/social posts and forum threads, not
  established competitors — a genuinely winnable SERP). Cross-linked
  in-body from `how-to-become-a-petite-model` and `types-of-modeling`
  (2 inbound links, satisfying the orphan check), and linked out to
  `plus-size-modeling-agencies`, `what-do-modeling-agencies-look-for` and
  `modeling-agencies-near-me`. Skipped a Higgsfield generation attempt and
  reused `how-to-choose-a-modeling-agency` (an agent/desk scene, already
  reused 5 times) with a fresh `imageAlt`, per the standing environment
  block on fetching generated CDN assets logged across every run since
  2026-08-25 — not re-tested this run since nothing suggests the block has
  lifted. `npm run build && npm run check` clean. Attempted a fresh keyword
  scan with a new seed term ("casting", since "modeling", "model" and
  "runway" are all now fished out per prior notes) to restock the
  shortlist for the next run: it returned almost entirely adult content,
  industrial/metal casting, fishing tackle and programming type-casting
  results, effectively zero relevant volume. Also confirmed the `where`
  filter (`difficulty`/`volume` bounds) and `order_by` both return an
  `internal server error` on `keywords-explorer-matching-terms` in this
  session regardless of clause — worked fine on `keywords-explorer-overview`
  for a single keyword, so this looks like an endpoint-specific issue, not
  an account one. Worked around it here by reading the unsorted default
  result and filtering by eye, which is fine for a small result set but
  would not scale to sorting a large one; worth retrying the filtered/sorted
  call on a future run in case it was transient. Net effect: `casting` is
  now fished out too and should not be re-tried as a seed. The shortlist
  is otherwise thin: `modeling headshots`
  (800, KD 0) is the only unresolved candidate left, still flagged for its
  local/commercial-intent risk rather than confirmed clean. The next run
  should either resolve that one (check `portfolio.mjs`'s existing headshot
  mentions for real depth before writing) or try a new seed term not yet
  used here, e.g. "agency", "portfolio", "shoot" or "test shoot".
