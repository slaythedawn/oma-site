# SEO content ledger

What each article targets, so the weekly routine can check for cannibalisation
before writing anything new. One row per live article. Volume and difficulty
are US Ahrefs figures at the date the article was picked, where known.

**The rule this table exists to enforce:** if an existing article already
targets the keyword, improve that article. Do not write a second one.

## Live (36 articles)

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

The homepage itself was revised 2026-08-18 for the commercial cluster
(`modeling course`, `online modeling`, `model academy` and neighbours) —
title, meta, hero, curriculum intro, pricing lede and Course schema. Not a
blog article, tracked separately.

## Shortlist for coming weeks

Verified uncovered against the table above. Ahrefs figures re-checked
2026-08-22 (`site-explorer-organic-keywords`, no top-100 ranking page for
any of these).

| Target keyword | US vol | KD | Note |
| --- | --- | --- | --- |
| what is commercial modeling | 2500 | 2 | Article 17 from the old chat routine. Drafted 16 August, delivered as a zip, never unpacked — the draft is gone with the old sandbox. Still uncovered and still worth 2500/mo. Needs writing from scratch, not recovering. |
| types of modeling | 1300 | 6 | Natural hub page that can link out to most of the table above. |
| how to get paid as a model | 800 | 0 | Adjacent to how-much-do-models-make; check for overlap before writing, this may be a section of that article rather than its own page. |
| how to find modeling jobs | 700 | 0 | Close to the offer. Check against modeling-jobs for overlap before writing — may already be covered. |
| modeling scams | 60 | 1 | Low volume but high relevance to the brand's anti-scam positioning; modeling-schools already carries some of this. Check for overlap first. |

## Known gaps

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
- **Live site is not fetchable from this environment.** Both raw `curl` and
  the `WebFetch` tool are blocked by network egress policy for
  `www.onlinemodelacademy.com`. The weekly health check (step 1) instead
  ran `npm run check` against the repo and cross-checked the Vercel MCP
  (`list_deployments`, `get_runtime_errors`) for production deploy state —
  as of 2026-08-22 the latest production deployment is READY on commit
  `1016417` (PR #4) with zero runtime errors in the last 7 days. This is a
  reasonable substitute but does not confirm what a browser actually
  renders; if this gap persists, add a scripted fetch step that runs in CI
  instead, where egress is not blocked.
- **Two article branches sat unmerged for 1-2 days before recovery.**
  `claude/charming-tesla-4r1qds` (runway-model + this ledger's first repo
  version) and `claude/charming-tesla-5x0qph` (how-much-do-models-make)
  were pushed by earlier sessions but neither opened a PR, so they were
  invisible to the session that shipped modeling-classes/modeling-schools
  (PR #4) a day later. Both are now merged into this branch's history. The
  two stale branches on GitHub are safe to delete once this PR merges.
- **Homepage still uses British "modelling"** in the low-30s count of
  places against low-20s "modeling". All the search volume is US. Left
  alone because it is brand copy, not a routine decision — flagged for
  Josh, not changed unasked.
