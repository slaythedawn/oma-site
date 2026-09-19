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

## Live (62 articles)

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
| modeling-headshots | modeling headshots | 800 | 0 | 2026-09-04 |
| how-to-become-a-foot-model | how to become a foot model | 250 | 1 | 2026-09-05 |
| how-to-become-a-hair-model | how to become a hair model | 250 | 0 | 2026-09-06 |
| kids-modelling-agency-australia | kids modelling agency australia | AU | — | 2026-09-03 |
| how-to-become-a-fit-model | how to become a fit model | 70 | 0 | 2026-09-07 |
| how-to-become-a-tattoo-model | how to become a tattoo model | 150 | 0 | 2026-09-08 |
| how-to-become-a-model-in-uk | how to become a model uk | 200 (GB) | 0 | 2026-09-09 |
| ecommerce-modeling | ecommerce modeling | 100 | 0 | 2026-09-10 |
| how-to-become-an-instagram-model | how to become an instagram model | 90 | 0 | 2026-09-11 |
| how-to-become-a-showroom-model | showroom model | 60 | 0 | 2026-09-12 |
| how-to-become-a-print-model | how to become a print model | 200 | 0 | 2026-09-13 |
| how-to-become-a-ugc-model | ugc model | 200 | 0 | 2026-09-14 |
| promotional-modeling | promotional model / trade show model | 200 + 100 | 1 / 6 | 2026-09-15 |
| how-to-become-a-beauty-model | beauty modeling / how to become a beauty model | 70 + 10 | 0 / 0 | 2026-09-16 |
| how-to-become-a-mature-model | mature models / middle age model jobs / how to become a senior model | 700 + 350 + 70 | 4 / 4 / 16 | 2026-09-17 |
| how-to-become-a-face-model | how to become a face model | 50 | 0 | 2026-09-18 |
| stock-photo-modeling | stock photo model | 90 | 0 | 2026-09-19 |

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
| how to find modeling jobs | 700 | 0 | **Confirmed cannibalised 2026-08-30** — dropped, do not write. `jobs.mjs`'s FAQ already answers this near-verbatim. |
| modeling digitals | 1000 | 0 | **Confirmed cannibalised 2026-08-30** — dropped, do not write. `portfolio.mjs` and `how-to-get-signed-by-a-modeling-agency` already cover it in depth. |
| petite modeling agencies | 350 | 0 | **Shipped 2026-09-03** — see the Live table. Was the shortlist's recommended next pick per the 2026-09-02 note. |
| model measurements | 600 | 0 | **Checked 2026-09-02, cannibalised** — `agencies-us.mjs` (`what-do-modeling-agencies-look-for`) already has a dedicated FAQ ("What measurements do modeling agencies want?") with concrete ranges by category, plus a full "Measurements, against that category" section. A standalone page would duplicate it. If its near-miss position is ever visible (needs GSC), the move is expanding that section, not a new URL. |
| how tall do you have to be to be a model | 1100 | 0 | **Checked 2026-09-02, cannibalised** — same `agencies-us.mjs` FAQ and section as `model measurements` above already answers this close to verbatim (height ranges by board). Do not write. |
| model diet | 700 | 0 | **Checked 2026-09-02, deprioritised on fit, not cannibalisation.** SERP is dominated by Healthline and curiosity-driven "Victoria's Secret model diet" content, not career-education intent, and the topic sits close enough to disordered-eating territory (this site's audience includes teens, per `how-to-become-a-model-at-16`) that it needs unusually careful, responsible framing to be worth the risk for the conversion upside. Not ruled out permanently, just not a quick pick — if ever written, keep it health-first and explicitly debunk the extreme-dieting framing rather than feed it. |
| model release form | 1800 | 3 | **Checked 2026-09-02, wrong audience.** Searcher intent is overwhelmingly photographers wanting a release-form template for their own shoots, not aspiring models. Off-ICP for a modeling-course lead magnet despite the volume. Dropped. |
| what is a brand ambassador / brand ambassador jobs | 5100 + 4600 | 0 | **Checked 2026-09-02, wrong audience.** High volume, zero difficulty, but the intent is retail/college ambassador programs, not modeling. Weak fit for the site's conversion path. Dropped. |
| how to become a foot model | 250 | 1 | **Shipped 2026-09-05** — see the Live table. |
| how to become a print model | 200 | 0 | **Shipped 2026-09-13** — see the Live table. Re-checked at 200 vol (up from the 80 recorded 2026-09-05). |
| how to become a swimsuit model | 70 | 0 | **Checked 2026-09-05, clean but thin.** Same call as print model above: uncovered, low volume, fine for a thin week. |
| how to become a lingerie model | 50 | 0 | **Checked 2026-09-05, clean but thin, and check brand fit before writing.** Uncovered and low-difficulty, but confirm the SERP and framing stay squarely career-education before committing, given the site's audience includes teens. |
| how to become a teen model | 100 | 0 | **Checked 2026-09-16, confirmed a deliberate brand exclusion, not a coverage gap.** `content/articles/parents.mjs`'s own file-header comment says the bare term "teen model" is deliberately not targeted because of the search intent it carries. Do not write, and do not re-check this as a cannibalisation question — it is a standing brand decision, not an overlap with `how-to-become-a-model-at-16`. |
| how to become an underwear model | 150 | 0 | **Checked 2026-09-16, clean but deprioritised on brand fit, not cannibalised.** Uncovered, low-difficulty and a genuine career-education SERP, but this site's audience includes teens per `how-to-become-a-model-at-16`, the same standing caution already logged for the unshipped lingerie and swimsuit terms below. Needs a deliberate decision to pursue, not a routine pick. |
| how to become an instagram model | 90 | 0 | **Shipped 2026-09-11** — see the Live table. |
| showroom model | 60 | 0 | **Shipped 2026-09-12** — see the Live table. |
| fitting model | 100 | 7 | **Checked 2026-09-12, cannibalised.** SERP (Wikipedia's "Fit model" page, StarNow's "How to Become a Fitting Model") confirms this is the exact same job as `how-to-become-a-fit-model`, just an alternate name for it, not a distinct one. Do not write a separate page. |
| curve model | 150 | 4 | **Checked 2026-09-12, cannibalised.** Parent topic is "plus size modeling agencies." Already the standard synonym used throughout the plus-size cluster (`how-to-become-a-plus-size-model`'s own FAQ, `agencies-us.mjs`, `plus-size-modeling-agencies`), not a passing mention. Do not write. |
| big and tall model / parts model / model networking / elite model / commercial modeling agency | 30 / 30 / 10 / 90 / 60 | 0-59 | **Checked 2026-09-12, too thin or wrong fit.** `elite model`'s SERP is dominated by Elite Model Management, a specific competing agency brand, not a generic career query — wrong target regardless of volume. The rest are all under this site's usual volume floor. |
| how to become a model scout / what is a model agent | 30 | 0 | **Checked 2026-09-05, clean but thin.** Different angle from every existing agency guide (becoming a scout, not being scouted). Low volume, worth a look on a thin week. |
| how old do you have to be to model | 70 | 0 | **Checked 2026-09-05, likely cannibalised, not confirmed.** Overlaps `how-to-become-a-model-at-16` and possibly the parents cluster's age-related FAQs — grep those bodies before writing rather than trusting volume alone. |
| commercial print model / how to get modeling gigs / how to become a promotional model / how to become a catalog model / how to become a mature model / how to become an older model / modeling for beginners / how to get scouted for modeling | all under 60 | 0-3 | **Checked 2026-09-05, too thin.** Real and clean but under the volume floor this site has been picking above (250+). Only worth combining into a broader piece, not writing individually. |
| single-word seeds "agency" and "modeling" cluster ("modeling", "model", "runway", "casting", "agency") | — | — | **All fished out as of 2026-09-05** — every broad single-word seed tried across this and prior runs returns mostly irrelevant noise once the real modeling-industry terms are exhausted. Do not repeat any of them; check specific candidate phrases on `keywords-explorer-overview` instead, which is both cheaper and confirmed working again after the 2026-09-04 outage. |
| how to become a hair model | 250 | 0 | **Shipped 2026-09-06** — see the Live table. |
| mother agency | 300 | 16 | **Checked 2026-09-06, cannibalised.** `how-to-choose-a-modeling-agency` already has a dedicated "Mother agencies" H3 and an FAQ entry ("Do I need a mother agency?") covering it in depth. Do not write. |
| modeling audition | 100 | 10 | **Checked 2026-09-06, cannibalised.** `model-casting-calls` and `open-casting-call` already treat "audition" as synonymous with "casting call" throughout, including in `model-casting-calls`'s own FAQ ("An audition where a brand..."). Do not write. |
| how to become a runway model | 200 | 0 | **Checked 2026-09-06, cannibalised.** `runway-model` already has a dedicated "How to Actually Get Started" H2 covering the personal path in. Do not write. |
| how to become a commercial model | 100 | 0 | **Checked 2026-09-06, cannibalised.** `what-is-commercial-modeling` already has a dedicated "How to Actually Get Into Commercial Modeling" H2. Do not write. |
| how to become an extra | 150 | 11 | **Checked 2026-09-06, wrong audience.** Clean and uncovered, but the intent is background/film-extra work, not modeling — the same off-ICP call as the dropped `brand ambassador` cluster. Dropped. |
| modeling agencies los angeles / new york / chicago / miami / atlanta | 700 / 200 / 200 / 100 / 100 | 49 / 45 / 38 / 28 / 45 | **Checked 2026-09-06, real opportunity but a bigger lift than a normal weekly pick.** Real volume, but KD sits well above this site's usual floor (most live articles are KD 0-10; `modeling-schools` at KD 35 is the current outlier), and a credible city agency-directory page needs verified, named local agencies researched per city, not the personal-narrative format this site otherwise uses. Worth a dedicated future project (start with LA, highest volume) rather than a same-run pick — flagging here so it isn't lost, not ruling it out. |
| how to become a hand model / foot model / male model / fitness model / plus-size model / petite model / freelance model / commercial model / fit model | — | — | **Specialisms cluster's personal how-to set is now complete three times over (adding fit 2026-09-07).** Before writing another niche "how to become a [X] model" entry, check this list and the SERP/volume notes above (print, swimsuit, lingerie under 100 vol; teen and "how old" likely cannibalised by `how-to-become-a-model-at-16`) — the remaining thin candidates are combine-into-a-broader-piece material, not individual articles, per the 2026-09-05 note. |
| how to become a fit model | 70 | 0 | **Shipped 2026-09-07** — see the Live table. |
| fit model (bare) | 800 | 0 | **Checked 2026-09-07, wrong sense — do not target.** High volume looks tempting, but the SERP is dominated by the IFBB bodybuilding/bikini competition "Fit Model" division (Wikipedia, NPC News, Instagram), a completely different meaning from garment-fitting fit modeling. `how to become a fit model` (70 vol) carries the correct sense and a clean, winnable SERP instead; that is the keyword this site targeted, not the bare term. |
| modeling contract | 150 | 0 | **Checked 2026-09-07 as clean, re-checked 2026-09-09 and confirmed cannibalised — correcting the earlier note.** The 2026-09-07 pass compared it only against the ledger table, not the actual article bodies. `how-to-choose-a-modeling-agency` has a dedicated H2, "Exclusivity and Contract Basics in Plain Language," covering exclusive vs. non-exclusive, term and renewal, commission, expenses and termination in depth, which already answers the SERP's actual People Also Ask questions ("What is a modeling contract?", "How long does a modeling contract last?", "Can you get out of a modeling contract?"). Do not write a standalone page; a reminder that a keyword's SERP shape looking like a good fit does not override a same-topic dedicated section elsewhere. |
| how to become a tattoo model | 150 | 0 | **Shipped 2026-09-08** — see the Live table. |
| how to become a bikini model | 40 | 1 | **Checked 2026-09-07, too thin.** Parent topic is `swimsuit model`, likely close to the already-checked swimsuit/lingerie cluster. Under this site's volume floor. |
| how to become a model uk | 200 (GB) | 0 | **Shipped 2026-09-09** — see the Live table. |
| ai model agency | 150 | 8 | **Checked 2026-09-09, wrong topic entirely.** `serp-overview` shows this term means businesses generating synthetic/AI-rendered models (Midjourney workflows, Maison Meta, Clueless.ai, "detail ai modeling agency"), not agencies that represent human models. Zero overlap with this site's actual course. Dropped, not a future-project candidate either. |
| spokesmodel / what is a spokesmodel / spokesmodel meaning | 300 + 40 + 50 | 7 / 0 / 0 | **Checked 2026-09-09, wrong audience, same shape as the dropped `brand ambassador` cluster.** Decent bare-term volume, but the SERP is dictionary definitions (Merriam-Webster, YourDictionary), businesses hiring spokesmodels for trade shows, and unrelated "senior spokesmodel" photo-contest content, not aspiring models searching for a path in. `how to become a spokesmodel` itself carries 0 volume, confirming the framing this site would use is not what anyone actually searches. Dropped. |
| catwalk model / how to become a catwalk model | 200 + 10 | 8 / — | **Checked 2026-09-09, cannibalised.** `runway-model`'s own FAQ already has a dedicated Q&A, "Is it a 'runway' or a 'catwalk'?", explaining catwalk as the UK/Australia synonym, and `types-of-work.mjs` repeats the same explanation. Do not write a separate page for the UK-terminology variant. |
| modelling agencies uk / modelling agency london | 350 / 150 | 71 / 72 | **Checked 2026-09-09, same bigger-lift call as the US/AU city-directory keywords.** Real volume, but KD is far above this site's floor and a credible version needs verified, named UK agencies researched properly, the same larger project noted for the US cities above. Not a quick pick. |
| how to become a stunt double | 450 | 1 | **Checked 2026-09-09, wrong audience.** Excellent volume and difficulty on paper, but stunt work is a distinct film-industry skill set (physical stunts, not modeling), the same off-ICP pattern as the dropped `how to become an extra`. Dropped. |
| ecommerce modeling | 100 | 0 | **Shipped 2026-09-10** — see the Live table. |
| tfp modeling / what does tfp mean in modeling | 50 + 30 | 0 / 0 | **Checked 2026-09-09, clean but thin.** "Time for prints/photos" explainer, uncovered on this site, real but low-volume search. Fine for a thin week, possibly better as an addition to the portfolio cluster than a standalone page given how short the honest answer is. |
| how to become a bridal model | 20 | — | **Checked 2026-09-09, too thin.** Clean but very low volume even by this site's thin-week standard. |
| modeling agency new york | 150 | 47 | **Checked 2026-09-09, same city-directory call as above.** Folded into the existing US-cities note; not a standalone opportunity. |
| how to find a modeling agent | 40 | 11 | **Checked 2026-09-09, too thin and likely overlapping.** Real but low volume, and the actual content (how to locate and vet an agent) is close to what `how-to-choose-a-modeling-agency` and `how-to-get-signed-by-a-modeling-agency` already cover; would need a full-body grep before ever writing, not just the volume check. |
| how to become a nude model / how to become an art model / figure model | 70 / 20 / 10 | 0 / 0 / 0 | **Checked 2026-09-09, deprioritised on brand fit, not cannibalisation.** Real, low-difficulty terms, but this is life-drawing/art-class nude modeling, a meaningfully different topic from fashion or commercial modeling, and this site's audience includes teens per `how-to-become-a-model-at-16`. Same caution class as the deprioritised `model diet` — not ruled out permanently, but needs a deliberate decision to pursue, not a routine pick. |
| ugc model | 200 | 0 | **Shipped 2026-09-14** — see the Live table. |
| test shoot / what is a test shoot in modeling / modeling test shoot | 20 | — | **Checked 2026-09-14, too thin.** Real but under this site's usual volume floor. |
| sample size model / how to become a sample size model | 10 | — | **Checked 2026-09-14, too thin.** Under the volume floor even by thin-week standards. |
| virtual model agency / how to become a virtual model | 10 | — | **Checked 2026-09-14, too thin, and likely wrong topic besides.** Adjacent to the already-dropped `ai model agency` (synthetic/AI-rendered models, not human talent) — not worth a fresh SERP check at this volume. |
| how much does a modeling portfolio cost | 10 | — | **Checked 2026-09-14, too thin.** Likely partially covered already by `how-much-does-it-cost-to-become-a-model` regardless; volume alone rules it out. |
| stock photo model | 90 | 0 | **Shipped 2026-09-19** — see the Live table. |
| glamour model | 900 | 1 | **Checked 2026-09-19, deprioritised on brand fit, not cannibalisation.** Real volume and low difficulty, but the SERP mixes career-advice content with glamour-photography stock imagery and Instagram/Behance galleries, the boudoir/pin-up-adjacent sense of the term. Same standing caution already logged for the deprioritised lingerie, swimsuit and underwear terms given this site's audience includes teens per `how-to-become-a-model-at-16`. Not ruled out permanently, but needs a deliberate decision to pursue, not a routine pick. |

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
- **2026-09-05 run.** Fired from the same external scheduled-trigger prompt
  (the stale 18 August handover, dated well before this repo-based pipeline
  existed); this file and `CONTRIBUTING.md` remain the authoritative
  process, per every prior run's note. The designated session branch had no
  matching remote ref at all (`git ls-remote` came back empty for it, though
  `git branch -r` listed a stale local tracking ref) and was 0 commits
  ahead/behind `origin/main` locally, so treated it the same as the
  merged-branch restart case: built directly on current `main` rather than
  resetting anything. `list_pull_requests` showed no open PRs, consistent
  with nothing in flight. Tried the shortlist-rebuild seed terms suggested
  by the last run first: a broad single-word `agency` fish on
  `keywords-explorer-matching-terms` (200 rows) came back almost entirely
  irrelevant non-modeling agency noise at real cost, confirming the
  standing lesson that generic single-word seeds waste budget — should not
  be repeated. Switched to checking specific candidate phrases directly on
  `keywords-explorer-overview` instead (cheaper, targeted, and it is
  confirmed working again after the 2026-09-04 outage): most niche
  variants tried (instagram/print/catalog/swimsuit/promotional/lingerie
  model, parts modeling, etc.) came back under 100 volume, but
  `how to become a foot model` checked out at 250 volume, KD 1, and
  `serp-overview` confirmed a genuinely winnable SERP (Backstage,
  Photogenics, BMA Hands, ModelsDirect, StarNow — real career-advice
  competitors mostly DR 25-50, no established modeling-course competitor,
  and the fetish-adjacent "feet pics" content that dominates casual
  searches for this topic sits well below the fold). Confirmed clean via
  `grep`: the only existing mention anywhere on the site is one passing
  paragraph in `how-to-become-a-hand-model` explaining that "parts
  modeling" covers hands, feet and legs together, no dedicated foot-model
  treatment. This completes the Specialisms cluster's personal how-to set
  the same way `how-to-become-a-petite-model` did: fitness, hand, male,
  freelance, plus-size, petite and now foot all have one. Wrote
  `how-to-become-a-foot-model` in `content/articles/niche.mjs`,
  cross-linked in-body from `how-to-become-a-hand-model` (the "parts
  modeling" paragraph, its natural pairing) and `types-of-work.mjs`'s
  "Hand and parts work" bullet, and linked out to `how-to-become-a-hand-model`,
  `types-of-modeling`, `how-to-make-a-modeling-portfolio` and
  `how-to-become-a-freelance-model`. Skipped a Higgsfield generation
  attempt, per the standing environment block on fetching generated CDN
  assets logged across every run since 2026-08-25 and not re-tested since
  2026-09-01 — reused `modeling-portfolio-examples` (a contact sheet under
  a loupe, not previously reused in generated content) with a fresh
  `imageAlt` framing it as the close inspection a parts board applies,
  since no existing image actually depicts feet and misdescribing one
  would be worse than an honest generic reuse. `npm run build && npm run
  check` and `npx html-validate@8` on the built page all pass clean,
  including the orphan-inbound-link check (2 in-body inbound links). Title
  is 40 characters, description 151, both within limit. Restocked the now-empty
  shortlist below with the clean-but-sub-300-volume candidates surfaced
  this run in case a future thin week wants a smaller pick, and logged the
  ones checked and dropped so they are not re-fished.
- **2026-09-04 run.** Fired from the same external scheduled-trigger prompt
  (the stale 18 August handover) as every prior run; this file and
  `CONTRIBUTING.md` remain the authoritative process. `git fetch origin main`
  and `git branch -r` done before writing: no open PRs, and the only two
  remote branches were `main` and this session's own designated branch,
  which was identical to `main` (its prior PR #25 already merged) — reset
  from `origin/main` per the merged-branch restart protocol rather than
  built on stale history. Resolved the shortlist's last remaining candidate,
  `modeling headshots` (800 vol, KD 0): confirmed via `serp-overview` that
  the SERP mixes three local-pack photographer listings at position 1 with
  genuinely beatable content competitors from position 3 onward (Reddit,
  Pinterest, a DR23 photographer blog, aragon.ai, backstage.com, portraitpal.ai
  — no established modeling-course competitor anywhere in the top 10), and
  confirmed via a direct grep of `portfolio.mjs` that the keyword gets only
  passing mentions (comp-card front image, portfolio opener) with no
  dedicated treatment. Judged this closer to the `runway-model`/`types-of-modeling`
  precedent (right audience, competitive SERP) than the `model release form`/
  `brand ambassador` precedent (wrong audience entirely), so shipped it rather
  than dropping it. Wrote `modeling-headshots` in `content/articles/portfolio.mjs`
  (Portfolio cluster), cross-linked in-body from `model-comp-card` and
  `modeling-resume` (both in `portfolio.mjs`) plus the hand-written
  `how-to-make-a-modeling-portfolio`, and linked out to `model-comp-card`,
  `how-to-make-a-modeling-portfolio` and `modeling-resume`. Trimmed the
  first-draft meta description from 157 to 128 characters to clear the
  155-character guideline in section 14 of the original handover, since
  `check:site` itself only checks presence, not length. Skipped a Higgsfield
  generation attempt per the standing environment block on fetching generated
  CDN assets (confirmed still unresolved via `/root/.ccr/__agentproxy/status`,
  empty `recentRelayFailures` because nothing was attempted, not because it's
  fixed) — reused `how-to-become-a-model-with-no-experience` (a close,
  plain-wall, unretouched portrait, its second reuse in generated content
  after `how-to-become-a-petite-model`) since it is a genuinely literal
  headshot-style image, a better visual fit here than for its first reuse.
  `npm run build && npm run check` and `npx html-validate@8` on the built
  page all pass clean. **New Ahrefs finding this run:** `keywords-explorer-overview`
  returned an `internal server error` on every input tried (single keyword,
  multi-keyword, with or without a target) — a full outage, not the
  filter/order_by-specific issue logged 2026-09-03. `keywords-explorer-matching-terms`
  also errored on every multi-word seed and on `match_mode: 'phrase'`,
  succeeding only with a single-word seed and default `match_mode` — a new
  and more restrictive failure mode than previously logged, so a future run
  needing precise volume on a specific multi-word candidate should expect to
  fall back to `serp-overview` (unaffected) rather than assume `overview` or
  `matching-terms` will take it. Burned real budget confirming this: single-word
  seeds tried against this restriction ("agent", "shoot", "swimwear") returned
  almost entirely irrelevant noise at real cost (rows are billed even on a
  near-total miss), so a future run should not repeat single-word fishing on
  a generic seed without first checking whether `overview`/`matching-terms`
  have recovered. **The shortlist above is now empty** — every candidate
  logged in it has shipped, been confirmed cannibalised, or been dropped on
  audience fit. The next run needs a fresh keyword-research pass from
  scratch, ideally once `keywords-explorer-overview` or the multi-word path
  on `matching-terms` is confirmed working again.
- **2026-09-06 run.** Fired from the same external scheduled-trigger prompt
  (the stale 18 August chat-routine handover, describing a pre-repo
  Python/zip workflow that no longer exists); this file and
  `CONTRIBUTING.md` remain the authoritative process, per every prior run's
  note — treated the stored prompt as superseded rather than followed
  literally. `git fetch origin main`, `git ls-remote` on the designated
  session branch (empty, no matching remote ref, same as the 2026-09-05
  run) and `list_pull_requests`/`list_branches` via the GitHub MCP done
  before writing: no open PRs, and every remote branch was one already
  confirmed superseded above, so built directly on `origin/main` rather
  than resetting anything. Per the last run's note, the shortlist was
  empty and `keywords-explorer-overview` needed a fresh pass from scratch:
  tried a batch of specific multi-word candidate phrases directly (agency
  process terms — mother agency, modeling contract, modeling audition,
  modeling open call, submission/application terms) rather than a generic
  single-word seed, since single-word fishing was flagged as the expensive,
  low-yield move in three of the last four runs. `mother agency` (300 vol,
  KD 16) looked promising on volume alone but checked out cannibalised on
  a full-text grep, not just the ledger table: `how-to-choose-a-modeling-agency`
  has a dedicated "Mother agencies" H3 and an FAQ entry ("Do I need a
  mother agency?") that already answers the query in depth. `modeling
  audition` (100 vol, KD 10) and `how to become a runway model` (200 vol,
  KD 0) both checked out cannibalised the same way: `model-casting-calls`
  and `open-casting-call` already treat "audition" as synonymous with
  "casting call" throughout their bodies and FAQs, and `runway-model` has
  its own "How to Actually Get Started" H2 covering the personal path in.
  `how to become a commercial model` (100 vol, KD 0) was cannibalised too —
  `what-is-commercial-modeling` has a dedicated "How to Actually Get Into
  Commercial Modeling" H2. US city agency-directory keywords (`modeling
  agencies los angeles` 700 vol/KD 49, `new york` 200/KD 45, `chicago`
  200/KD 38) had real volume but sit well above this site's established
  KD floor and would need verified, named local agencies researched per
  city, a bigger and riskier lift than a single run should take on
  speculatively — noted below as a possible future project, not picked
  now. `how to become an extra` (150 vol, KD 11) was clean but wrong
  audience: background/film-extra work, not modeling, the same
  off-ICP call as the dropped `brand ambassador` cluster. `how to become a
  hair model` (250 vol, KD 0) checked out genuinely clean and on-ICP:
  grepped the whole repo for "hair model" and found nothing, and a
  separate grep for bare "hair" turned up only the same one-word mention
  repeated across `getting-started.mjs`, `agencies-au.mjs`, `agencies-us.mjs`
  and `jobs.mjs` ("Parts — hands, feet, hair, skin"), never expanded on,
  the same passing-mention pattern that made foot modeling a clean pick
  the run before. `serp-overview` confirmed a winnable SERP: Indeed,
  Backstage, StarNow and ModelsDirect (DR 45-92 but general career-advice
  publishers, not modeling-course competitors) alongside Reddit and
  YouTube results, no established competitor in this exact niche. This
  completes the Specialisms cluster's personal how-to set a second time
  over: fitness, hand, male, freelance, plus-size, petite, foot and now
  hair all have one. Wrote `how-to-become-a-hair-model` in
  `content/articles/niche.mjs`, framed around the genuine two-senses mix-up
  in this search term (free/discounted salon-and-academy hair modeling vs.
  paid commercial hair modeling for haircare and styling brands) the same
  way the petite article cleared up the retail-sizing mix-up, since almost
  every organic result for this keyword is the salon sense and this site's
  paying audience wants the commercial one. Cross-linked in-body from a
  new "Hair modeling" H3 added to `types-of-work.mjs` (`types-of-modeling`,
  right after the existing "Hand and parts modeling" H3, which was also
  extended to link the foot-model guide it was missing) and from the
  "Which Board You Fit" list in `agencies-us.mjs`
  (`what-do-modeling-agencies-look-for`), satisfying the 2+ in-body-link
  orphan check. Added the slug to the Specialisms cluster in
  `scripts/build-index-and-sitemap.mjs`. Skipped a Higgsfield generation
  attempt: checked `/root/.ccr/__agentproxy/status` first (empty
  `recentRelayFailures`, meaning untested rather than fixed, consistent
  with every check since 2026-08-25) and reused `how-to-become-a-model`
  (a plain-wall studio portrait, already reused once before for
  `how-to-become-a-plus-size-model`) with a fresh `imageAlt` describing
  hair-focused framing, since it is the closest existing image that
  actually shows hair clearly against a plain background. `npm run build
  && npm run check` and `npx html-validate@8` on the built page all pass
  clean, including the orphan-inbound-link check. Title is 40 characters,
  description 150, both within limit. The shortlist below is restocked
  with the checked-and-dropped candidates from this run's scan so they are
  not re-fished, plus the US city agency-directory idea flagged as a
  possible larger future project rather than a quick weekly pick.
- **2026-09-07 run.** Fired from the same external scheduled-trigger prompt (the
  stale 18 August chat-routine handover, describing a pre-repo Python/zip
  workflow superseded by this ledger and the `content/`/`scripts/` pipeline
  weeks ago); this file and `CONTRIBUTING.md` remain the authoritative process,
  per every prior run's note. `git fetch origin main` (branch was 0 ahead/0
  behind `origin/main`, so built directly on current history rather than
  resetting) and `list_pull_requests` (none open) plus `list_branches` (every
  remote branch besides `main` and this session's own was already confirmed
  superseded above, no new ones) done before writing, per the standing
  collision lesson. The shortlist was empty per the 2026-09-06 note, so ran a
  fresh batch of specific candidate phrases on `keywords-explorer-overview`
  rather than a single-word seed (agency-process and niche-adjacent terms:
  modeling contract, modeling open call, agency fees/requirements, several
  under-explored "how to become a [niche] model" variants). Most were thin or
  zero volume (submit-to-an-agency, agency-fees, modeling-without-an-agency,
  swimwear, alt-model all at 0 vol) or dropped on content-shape grounds
  (`modeling contract`, 150 vol/KD 0, is genuinely clean but a legal-FAQ topic
  rather than a personal how-to narrative, logged to the shortlist for a
  future non-niche pick rather than written now). `fit model` (bare, 800 vol,
  KD 0) looked like the best find on volume alone but the SERP
  (`serp-overview`) turned out to be the wrong sense entirely: IFBB
  bodybuilding/bikini competition's "Fit Model" division (Wikipedia, NPC News,
  Instagram), not garment-fitting fit modeling — the same kind of volume trap
  the `brand ambassador` and `model release form` drops caught previously, just
  from SERP sense-drift rather than audience mismatch. `how to become a fit
  model` (70 vol, KD 0, parent topic `fit model jobs`) carries the correct
  sense and a clean, winnable SERP instead (Backstage, Indeed, ModelScouts, a
  couple of small agency pages, no modeling-course competitor), confirmed via
  a full-repo grep that no article treats fit modeling as more than a
  two-to-three-sentence aside (`jobs.mjs`'s "Fit modeling" H3, `money.mjs`'s
  "Parts and fit modeling" H3, plus shorter mentions in `agencies-us.mjs`,
  `types-of-work.mjs` and `niche.mjs`), the same passing-mention-is-not-full-
  coverage pattern that made foot, hair and petite clean picks despite
  existing adjacent mentions. Wrote `how-to-become-a-fit-model` in
  `content/articles/niche.mjs`, cross-linked in-body from the existing "Fit
  modeling" H3 in `jobs.mjs` and the "Parts and fit modeling" H3 in
  `money.mjs` (2 inbound links, satisfying the orphan check), and linked out
  to `how-to-make-a-modeling-portfolio`, `modeling-jobs`, `how-much-do-models-
  make` and `types-of-modeling`. Added the slug to the Specialisms cluster in
  `scripts/build-index-and-sitemap.mjs`. Also found and fixed a pre-existing
  ledger gap unrelated to this run's own article: `kids-modelling-agency-
  australia` (shipped 2026-09-03 per its git history) was live on disk and in
  the sitemap but had never been added to this table — added it now with its
  target keyword, discovered via `for d in blog/*; do grep -q "$d" ledger.md
  || echo missing; done`, worth another session repeating that check
  periodically since the table is hand-maintained and can silently drift from
  the actual article set. Skipped a Higgsfield generation attempt, per the
  standing environment block on fetching generated CDN assets logged across
  every run since 2026-08-25 and not re-tested since 2026-09-01 — reused
  `how-to-become-a-male-model` (a plain-wall, full-length standing portrait in
  fitted, unstyled clothes, not previously reused in generated content) with a
  fresh `imageAlt`, since a model standing still and square-on against a bare
  wall is a genuinely close visual match for what a fitting actually looks
  like. One escaping mistake worth flagging for next time: the first `Edit`
  pass on `content/articles/niche.mjs` used `\\'` (double-escaped) for
  apostrophes inside the new FAQ answers, intending a single `\'` to reach the
  file; it wrote a literal backslash-plus-apostrophe instead and broke
  `npm run build` with a `SyntaxError` on the very next FAQ answer's opening
  quote. Fixed with a plain string replace of `\\'` back to `\'` across the
  new block rather than retyping it. `npm run build && npm run check` and
  `npx html-validate@8` on the built page all pass clean, including the
  orphan-inbound-link check. Title is 39 characters, description 148, both
  within limit. Restocked the shortlist with this run's checked-and-dropped
  candidates (bare `fit model`, `modeling contract`, `how to become a bikini
  model`) plus `how to become a tattoo model` (150 vol, KD 0, clean but held
  for a future thin week since fit model's pay story was the stronger pick
  this run).
- **2026-09-08 run.** Fired from the same external scheduled-trigger prompt (the
  stale 18 August chat-routine handover, describing a pre-repo Python/zip
  workflow superseded weeks ago by this ledger and the `content/`/`scripts/`
  pipeline); this file and `CONTRIBUTING.md` remain the authoritative process,
  per every prior run's note. `git fetch origin main` (0 ahead/0 behind, built
  on current history) and `list_pull_requests` (none open) done before writing.
  `list_branches` via the GitHub MCP surfaced two branches not in this file's
  standing dead-branch list, `claude/charming-tesla-28bqy9` and
  `claude/charming-tesla-vlo5oo` — checked both with `git log origin/main..` and
  found zero commits ahead of `main` for either, so nothing was in flight; worth
  adding to the dead-branch list below the next time someone with delete access
  cleans them up. Picked `how to become a tattoo model` (150 vol, KD 0) straight
  from last run's held shortlist entry, re-verified current on
  `keywords-explorer-overview` (matches the previously recorded figures) and
  `serp-overview` (submission pages, Reddit, Backstage/Quora/ZipRecruiter
  career-advice content, no modeling-course competitor, a genuinely winnable
  SERP). Confirmed clean via grep: the only existing mention anywhere on the
  site was a single passing word, "tattooed models," in the hand-written
  `how-to-become-a-freelance-model` article's list of clients agencies
  historically overlooked. Wrote `how-to-become-a-tattoo-model` in
  `content/articles/niche.mjs`, built around a genuine two-senses split this
  keyword's SERP actually shows: sitting as a paid-in-kind "canvas" for a
  tattoo artist (a trade, not modeling work) versus commercial or lifestyle
  modeling that specifically wants existing tattoos on camera. Both senses get
  honest, separate treatment, including telling canvas-sense readers plainly
  that it is not a modeling credential and is typically a trade rather than
  cash pay, since conflating the two would have set the wrong expectation for
  a real share of this keyword's search intent. Cross-linked in-body from a
  new "Tattoo modeling" H3 added to `types-of-work.mjs` (`types-of-modeling`,
  placed between the existing "Hair modeling" and "Glamour and swim" H3s) and
  from the pre-existing "tattooed models" mention in
  `how-to-become-a-freelance-model`, turned into a link (2 inbound links,
  satisfying the orphan check). Linked out to `how-to-become-a-freelance-model`,
  `types-of-modeling`, `how-to-make-a-modeling-portfolio` and
  `how-much-do-models-make`. Added the slug to the Specialisms cluster in
  `scripts/build-index-and-sitemap.mjs`. Retried a dedicated Higgsfield
  generation for the first time since 2026-09-01, since a full week had passed
  since the standing CDN-fetch block was last re-tested: `generate_image`
  (`nano_banana_pro`) again produced a clean, on-brief, modern result with no
  collage or text artefacts, but the resulting `cloudfront.net` URL still 403s
  on direct fetch through this session's network policy (confirmed via
  `/root/.ccr/__agentproxy/status` showing `connect_rejected` on the CONNECT),
  identical to every attempt since 2026-08-25. This remains a standing
  environment property, not a one-off; reused `how-to-become-a-freelance-model`
  (its own hero, not previously reused elsewhere, a candid self-shot digital
  scene) with a fresh `imageAlt`, since no existing image actually shows
  tattoos and an honest generic reuse beats a misleading specific claim.
  `npm run build && npm run check` and `npx html-validate@8` on the new and
  edited pages all pass clean, including the orphan-inbound-link check. Title
  is 42 characters, description 145, both within limit. Also double-checked
  the new article body directly for em dashes (a repo-wide style rule) before
  committing, since `check:site` does not enforce it: zero found in the
  article's own content, the only five in the built page are in shared
  nav/footer boilerplate and the "Enrol — $299" button label common to every
  page on the site, not specific to this one.
- **2026-09-09 run.** Fired from the same external scheduled-trigger prompt (the
  stale 18 August chat-routine handover, describing a pre-repo Python/zip
  workflow superseded weeks ago by this ledger and the `content/`/`scripts/`
  pipeline); this file and `CONTRIBUTING.md` remain the authoritative process,
  per every prior run's note. `git fetch origin main` (0 ahead/0 behind, no
  reset needed) and `list_pull_requests` (none open) done before writing.
  `list_branches` surfaced several remote branches not yet in this file's dead
  list (`claude/charming-tesla-33dzj7`, `-66w08h`, `-c4qeku`, `-io1zy3`,
  `-lcpv3n`, `-vj69vm`, `-28bqy9`, `-vlo5oo`, `credential-reframe-and-lesson-count`);
  fetched each individually (fetching them combined with `main` in one call
  silently drops refs, per the 2026-09-02 lesson) and diffed each against
  `main`: every one was a fully-merged PR head branch with 0 commits ahead
  (`-33dzj7` was in fact PR #30, yesterday's tattoo-model merge), so nothing
  was in flight and none needed action beyond noting them here for future
  cleanup once delete access exists. The shortlist was restocked but thin
  after 2026-09-08, so ran a fresh batch of specific multi-word candidates on
  `keywords-explorer-overview` covering four different angles: legal/contract
  terms, an AI-modeling angle (new for this site, worth checking once given
  how much that space has grown through 2026), UK-market terms, and a batch
  of niche career variants. Two important corrections came out of this pass.
  First, `modeling contract` (150 vol, KD 0), carried on the shortlist since
  2026-09-07 as "clean but a different content shape," is actually
  cannibalised: a closer grep this run found `how-to-choose-a-modeling-agency`
  already has a dedicated H2, "Exclusivity and Contract Basics in Plain
  Language," covering exclusivity, term, commission, expenses and
  termination, which answers the SERP's own People Also Ask questions
  near-verbatim. The 2026-09-07 check only compared the term against this
  ledger's table, not the actual article body, the exact mistake this
  ledger repeatedly warns against. Corrected in the shortlist table above.
  Second, `ai model agency` (150 vol, KD 8) looked like a timely fresh angle
  but `serp-overview` showed it means something else entirely: businesses
  that generate synthetic AI-rendered models (Midjourney workflows, Maison
  Meta, Clueless.ai), not agencies representing real people. Zero overlap
  with this site's actual course; dropped as a wrong-topic match, not a
  volume or difficulty problem. `spokesmodel` (300 vol, KD 7) and
  `catwalk model` (200 vol, KD 8) were checked and dropped too (wrong
  audience and cannibalised by `runway-model`'s FAQ respectively, both
  logged above), along with `how to become a stunt double` (450 vol, KD 1,
  wrong industry entirely) and the nude/art/figure-modeling cluster
  (deprioritised on brand fit given this site's teen audience, not
  cannibalisation). The UK-market angle produced the actual pick:
  `how to become a model uk` (200 GB vol, KD 0), confirmed clean via a
  full-repo grep (only passing UK mentions exist, in the parents.mjs
  jurisdiction block, portfolio.mjs comp-card sizing, and the
  runway/catwalk FAQ synonym note, none of them a personal how-to guide)
  and via `serp-overview` (nationalcareers.service.gov.uk at position 3 is
  a strong DR92 competitor, but the rest of the field is agency apply pages
  and small blogs, the same winnable shape as the AU pillar's own SERP).
  This mirrors `how-to-become-a-model-in-australia` exactly: the site has a
  proven AU pillar for country-specific market-entry content but no UK
  equivalent, despite the cadence section's standing market-parity mandate
  and the UK being one of this site's three target markets. Unlike the
  city agency-directory keywords, this does not need verified named
  agencies (the AU pillar itself does not name any either; that is what
  the separate `modelling-agencies-<city>` pages are for), so it was not a
  bigger-lift deferral like the LA/NYC/Chicago cluster remains. Verified
  one materially important, genuinely UK-specific legal fact via `WebSearch`
  before writing rather than guessing it (`WebFetch` on gov.uk itself
  returned `EGRESS_BLOCKED`, a new finding logged below): under the Conduct
  of Employment Agencies and Employment Businesses Regulations 2003,
  photographic and fashion models are one of a short list of occupations
  specifically exempted from the general UK ban on agencies charging
  work-seekers upfront to find them work, provided any fee is for a
  separate, written, after-the-fact service rather than the act of
  representation itself. This meaningfully changes the "agencies never
  charge you, ever" framing this site uses for the US and Australia, so it
  gets its own section rather than being flattened into the usual scam
  checklist. Wrote `how-to-become-a-model-in-uk` in
  `content/articles/getting-started.mjs`, alongside its AU sibling, with
  its own `DATE_UK` constant. Cross-linked in-body from two places: extended
  the existing `how-to-start-a-modeling-career` sentence that already
  branched to the AU guide ("If you are in Australia...") to add a UK
  branch, and extended the AU pillar's own "Going Overseas" section to
  mention London as a common placement market for Australian models,
  linking to the new UK guide (2 inbound links, satisfying the orphan
  check). Also caught and fixed a style-consistency issue before shipping:
  the AU pillar's own bullet-list pattern I was mirroring
  (`<li><b>Label</b> — description</li>`) uses em dashes throughout, but a
  repo-wide grep showed the em-dash-heavy files are all from 2026-08-14
  through 2026-08-25, while every article shipped since `niche.mjs` started
  (2026-08-30 onward) uses a period after the bold label instead
  (`<li><b>Label.</b> Description</li>`) and has almost none. Rewrote the
  new article's board-list bullets to the newer, dash-free convention before
  committing, since the "no em dashes anywhere" writing rule is still
  binding even where an older template being mirrored does not follow it.
  Skipped a Higgsfield generation attempt, reused `how-to-become-a-model`
  (already used 4 times, including for the AU sibling itself) since it is
  the most literal fit for a general "how to become a model" market pillar
  and pairing the two country guides with the same portrait is an honest,
  deliberate choice, not a shortcut. `npm run build && npm run check` and
  `npx html-validate@8` on the new and edited pages all pass clean,
  including the orphan-inbound-link check. Title is 43 characters,
  description 146, both within limit. Opened PR #31; all four checks
  (Vercel Preview Comments, Deploy payload stays small, Off-site links
  respond, Links/assets/sitemap) came back green with `mergeable_state`
  `clean`, so merged it directly per the standing automerge authorisation
  above (squash-merged as `69df7c2`).
- **New finding: `WebFetch` is blocked for `gov.uk`, not just for this
  site's own domain.** The standing note above only documents
  `www.onlinemodelacademy.com` as blocked for `WebFetch`/`curl`. This run
  hit the same `EGRESS_BLOCKED` error fetching a `gov.uk` guidance page
  directly, so the network egress policy blocks at least some external
  government domains too, not only this site's own. `WebSearch` was
  unaffected and returned usable results (including gov.uk page titles and
  summarized content) for the same query, so it remains the fallback for
  verifying jurisdiction-specific legal claims when direct `WebFetch` is
  blocked on the source domain. Worth knowing before a future run assumes
  `WebFetch` will reach any given government or reference site directly.
- **2026-09-10 run: checked open branches/PRs first (none open, confirmed
  via `mcp__github__list_pull_requests`), then re-verified `ecommerce
  modeling` (100 vol, KD 0) live via `keywords-explorer-overview` and
  `serp-overview` before writing, since the 2026-09-09 shortlist note was
  a day old. Numbers held. Also checked `how to become an ecommerce
  model` (0 vol) and `e-commerce model` (60 vol, KD 11, but a different
  parent topic entirely, "ecommerce business models," not the modeling
  career sense) and `keywords-explorer-matching-terms` for nearby
  variants: nothing better surfaced, everything else in that space is
  SaaS/business-model terminology. `serp-overview` for the bare term
  showed genuine career/how-to-become-a-model content (agency pages, a
  Reddit thread, a competing explainer at mymodelreality.com, all DR
  29-48) rather than stock-photo or freelance-marketplace noise, and a
  full-repo grep confirmed "e-commerce" appears only as a passing mention
  inside the general commercial-modeling cluster (`what-is-commercial-modeling`,
  `types-of-modeling`, `modeling-jobs`, `how-much-do-models-make`, the
  niche pieces), never as its own dedicated page, so this is not
  cannibalised. Wrote `ecommerce-modeling` in `content/articles/types-of-work.mjs`
  alongside its `what-is-commercial-modeling` and `what-is-fashion-modeling`
  siblings, an explainer-plus-how-to hybrid matching that cluster's
  format rather than niche.mjs's personal-identity "how to become a X
  model" format, since the keyword itself is a bare category noun, not a
  personal-path phrase, the same call `types-of-modeling` and
  `what-is-commercial-modeling` made before it. Cross-linked in-body from
  three places, one more than the minimum: `jobs.mjs`'s "Catalogue and
  e-commerce" H3, `money.mjs`'s "Commercial and retail" pay section, and
  `types-of-work.mjs`'s own `what-is-commercial-modeling` bullet list, all
  three already mentioning e-commerce in passing and turned into real
  links rather than added cold. Added the slug to the "Castings & work"
  cluster in `scripts/build-index-and-sitemap.mjs`. Retried a dedicated
  Higgsfield hero on schedule (last retested 2026-09-08): `generate_image`
  (`nano_banana_pro`, resolved to `nano_banana_2`) again produced a clean
  2752x1536 result with no collage or text artefacts on inspection of the
  job metadata, but the resulting `cloudfront.net` URL still hit a hard
  `403`/`connect_rejected` on direct fetch through this session's agent
  proxy, identical to every attempt since 2026-08-25 and confirmed via
  `/__agentproxy/status`. This remains a standing environment property,
  not a one-off. Reused `how-to-become-a-male-model`'s hero (a plain-wall,
  squarely-posed shot in unstyled clothing) with a fresh `imageAlt`
  describing it as the plain product-listing framing this niche actually
  needs, rather than a misleading claim to a dedicated shoot. `npm run
  build && npm run check` and `npx html-validate@8` on the new and edited
  pages all pass clean, including the orphan-inbound-link check. Title is
  46 characters, description 149, both within limit; zero em dashes in
  the new article body (checked directly, since `check:site` does not
  enforce it). Word count landed at 1,274, in line with this site's other
  recent thin-keyword niche pieces (foot model 1,226, tattoo model 1,271)
  rather than the higher-volume articles' 1,500-2,500 range, a deliberate
  match to established practice rather than a shortfall.
- **GSC access still unavailable this run** (re-confirmed 2026-09-10, no
  new service-account key or MCP tool present in this session) — substituted
  the Ahrefs keyword-explorer/SERP checks above per the standing note.
  No open PRs or unmerged branches from prior runs existed to collide
  with (`list_pull_requests` returned none), and `git fetch origin main`
  showed the true remote `main` sat two merges ahead of this session's
  initial shallow-clone snapshot of the local `main` ref (a clone-time
  caching quirk, not a real divergence) — worth a fresh `git fetch
  origin main` before branching in any future run that sees local `main`
  and the environment's default checked-out branch disagree, rather than
  trusting the first `git log` on a freshly cloned `main`.
- **2026-09-11 run.** Fired from the same external scheduled-trigger prompt as
  every prior run (the stale 18 August chat-routine handover, describing a
  pre-repo Python/zip workflow superseded weeks ago); this file and
  `CONTRIBUTING.md` remain the authoritative process, per every prior run's
  note. `git fetch origin main` and `list_pull_requests` done before writing:
  no open PRs, and the designated session branch was identical to `origin/main`
  (no unmerged commits), so built directly on it rather than resetting
  anything. `git branch -r` surfaced two remote branches not previously logged
  here, `claude/charming-tesla-cjjm7a` and `claude/charming-tesla-psb5a8` —
  checked both with `git diff` against `origin/main` before writing anything,
  per the standing collision lesson, rather than assuming they were safe from
  the names alone. `psb5a8`'s tree is byte-identical to `main` (an already
  squash-merged branch whose head commit just isn't a graph ancestor), and
  `cjjm7a` is strictly behind `main` (missing `ecommerce-modeling` and the
  ledger entries after it, plus one unrelated trivial `.gitignore` commit on
  top) — both fully superseded, no unmerged work at risk, nothing to build on.
  Shortlist review: every specific candidate phrase batch-checked this run
  (print/swimsuit/lingerie model, modeling-agency-requirements, modeling
  shoot, TFP modeling, model-scout, hair-model-adjacent submission terms) came
  back at or below 90 volume — a genuinely thin week, not a research
  shortfall. Picked the shortlist's own highest-volume flagged-but-unshipped
  candidate instead of a fresh thin one: `how to become an instagram model`
  (90 vol, KD 0), flagged 2026-09-05 as "clean but thin, check fit." Resolved
  that flag via `serp-overview`: the actual SERP (Indeed, Backstage, a
  Reddit modeling-subreddit thread) is genuine career/agency advice on
  building a bookable presence, not influencer-growth content, so the fit
  concern is cleared. Confirmed clean via a full-repo grep for
  "instagram model" and "Instagram model" — only passing mentions existed
  (a scam-pattern bullet about DM scouting in the UK article, an aside in
  `runway-model`), no dedicated treatment anywhere. Shipped
  `how-to-become-an-instagram-model` in `content/articles/niche.mjs`,
  extending the Specialisms cluster's personal how-to set again. The
  differentiator from the influencer-advice content dominating the SERP is
  the article's central point, not just a line in it: an agency/brand books
  Instagram-native content for a fee and a usage license, the same
  commercial-modeling structure as everywhere else on this site, which is a
  different transaction from being paid for reach as an influencer — most
  competing content conflates the two. Cross-linked in-body from three
  places, one more than the minimum: the hand-written
  `how-to-become-a-freelance-model`'s existing "Social media as your
  storefront" section (edited the HTML directly, since it is one of the
  original 16 hand-written pages, not generated — per CONTRIBUTING.md, do not
  route this kind of edit through the generator), and `types-of-modeling`'s
  "Freelance" subsection in `content/articles/types-of-work.mjs`. Added the
  slug to the Specialisms cluster in `scripts/build-index-and-sitemap.mjs`.
  Reused `image: 'how-to-become-a-freelance-model'` (a model reviewing her own
  phone against a plain wall) rather than attempting a Higgsfield generation —
  the standing `cloudfront.net` 403 block logged on every run since
  2026-08-25 was last confirmed 2026-09-10 and nothing suggests it has
  lifted, so not re-tested this run. `npm run build && npm run check` and
  `npx html-validate@8` on the new and edited pages all pass clean, including
  the orphan-inbound-link check (2 in-body inbound links, plus the blog index
  and sitemap by construction). Title is 46 characters, description 149
  characters (trimmed from an initial 155 to leave margin), both within
  limit; word count landed at 1,114, in line with this site's other
  thin-keyword niche pieces (foot model 1,226, tattoo model 1,271) rather
  than the higher-volume 1,500-2,500 range, the same deliberate match to
  established practice logged for those. Zero em dashes in the new article
  body (the only em dashes `check-site.mjs`'s output would not catch are the
  shared nav/footer template's generated-marker comments and the "Enrol —
  $299" CTA label, identical across every page on the site, not new content).
  GSC access still unavailable this run (no service-account key or `gsc-*`
  MCP tool present); substituted Ahrefs `keywords-explorer-overview` and
  `serp-overview` per the standing note. Opening a PR next and merging once
  CI is green and `mergeable_state` is `clean`, per the standing automerge
  authorisation above, without waiting on Josh.
- **2026-09-12 run.** Fired from the same stale 18 August chat-routine
  handover as every prior run (a pre-repo Python/zip workflow superseded
  weeks ago); this file and `CONTRIBUTING.md` remain the authoritative
  process. `npm run check` on `main` was clean before any new work started.
  `git fetch origin main` confirmed local `main` matched `origin/main`
  exactly (PR #33, the Instagram-model article, already merged), and
  `list_pull_requests` returned no open PRs. `list_branches` surfaced
  several remote branches not previously logged here
  (`claude/charming-tesla-28bqy9`, `-79j4o5`, `-n854xk`,
  `claude/baby-article-uk-us-au-parity`,
  `claude/every-2-days-cadence-and-orphan-check`,
  `claude/how-to-become-an-instagram-model`,
  `claude/how-to-get-paid-as-a-model`, `claude/ledger-automerge-standing-note`,
  `claude/what-is-fashion-modeling`) — checked every one with
  `git log origin/main..origin/<branch>` per the standing collision lesson
  rather than assuming from the names: all are either fully merged (zero
  commits ahead) or, for `how-to-become-an-instagram-model`, a superseded
  pre-squash PR head branch for content already on `main`. No unmerged work
  at risk, nothing to build on, no collision.

  Ran a fresh `keywords-explorer-overview` batch on new seeds not yet tried
  by any prior run's shortlist scan (big and tall, showroom, fitting,
  curve, parts, elite model, commercial modeling agency, model networking)
  rather than only re-checking the existing shortlist's already-thin
  leftovers. `showroom model` (60 vol, KD 0) came back genuinely clean: a
  full-repo grep found it only as a two-word aside inside
  `what-is-fashion-modeling`'s channel list ("Showroom and fit work"), never
  a dedicated treatment, and `serp-overview` showed a real career-education
  SERP once the crossword/3D-model noise was filtered out (John Casablancas'
  own "What is showroom modeling" page, ZipRecruiter, cmmodels.com's
  "Become a model: Showroom", ukmodels and modelingportfoliosnyc.com's
  "Fitting and Showroom Modeling"). Two adjacent candidates from the same
  batch turned out cannibalised on closer reading, not just the volume
  check — see the two new Shortlist rows above (`fitting model`, a plain
  synonym for `how-to-become-a-fit-model`'s exact job per Wikipedia's own
  "Fit model" SERP entry; `curve model`, already the standard in-body term
  throughout the plus-size cluster, not a passing mention). `elite model`
  was dropped on brand-fit grounds: its SERP is dominated by Elite Model
  Management, a specific competing agency, not generic career intent.

  Shipped `how-to-become-a-showroom-model` in `content/articles/niche.mjs`,
  extending the Specialisms cluster again, same personal how-to shape as
  its fit/foot/hair/tattoo/Instagram siblings. Its central differentiator
  from runway, which most of the sparse existing coverage online blurs
  together with it, is the actual job distinction: showroom reuses the same
  samples and often the same proportion bar as runway, but replaces the
  performed walk for a full audience with a calm, repeated presentation for
  a handful of buyers, which is a different skill being cast for, not an
  easier version of the same one. Cross-linked in-body from three places,
  one more than the minimum: the hand-written `how-to-become-a-male-model`'s
  existing "Showroom and Fit Modeling" H3 and `how-to-become-a-successful-model`'s
  income-streams list (both original 16, edited the HTML directly per
  CONTRIBUTING.md rather than routing through the generator), plus
  `what-is-fashion-modeling`'s own "Showroom and fit work" bullet in
  `content/articles/types-of-work.mjs`. Added the slug to the Specialisms
  cluster in `scripts/build-index-and-sitemap.mjs`. Reused
  `image: 'how-to-become-a-model-at-16'` (a still-life garment rail,
  portfolio book and backpack against a plain wall, zero prior reuses in
  any generated article) with a fresh `imageAlt` describing the showroom
  presentation context, rather than the closer-fitting but already-twice-used
  `how-to-become-a-male-model` plain-wall portrait picked for its
  fit-modeling sibling — not attempting a fresh Higgsfield generation, since
  the standing `cloudfront.net` 403 block logged on every run since
  2026-08-25 was last reconfirmed 2026-09-10 and nothing suggests it has
  lifted. `npm run build && npm run check` and `npx html-validate@8` on the
  new and edited pages all pass clean, including the orphan-inbound-link
  check (3 in-body inbound links, plus the blog index and sitemap by
  construction) and a manual JSON-LD parse check confirming all three
  schema blocks (`Article`, `BreadcrumbList`, `FAQPage` with its full 6
  questions) parse correctly. Title is 44 characters, description 144
  characters, both within limit; word count landed at 1,163, in line with
  this site's other thin-keyword niche pieces rather than the higher-volume
  1,500-2,500 range, the same deliberate match to established practice
  logged for those. Zero em dashes in the new article body or FAQ answers.

  GSC access still unavailable this run (no service-account key or `gsc-*`
  MCP tool present); substituted Ahrefs per the standing note. Opening a PR
  next and merging once CI is green and `mergeable_state` is `clean`, per
  the standing automerge authorisation above, without waiting on Josh.
- **2026-09-13 run.** Fired from the same stale 18 August chat-routine
  handover as every prior run; this file and `CONTRIBUTING.md` remain the
  authoritative process. `git fetch origin main` confirmed local `main`
  matched `origin/main` exactly (PR #34, the showroom-model article, already
  merged), `npm run check` on `main` was clean before writing, and
  `list_pull_requests` returned no open PRs. `list_branches` showed no
  remote branches beyond `main` and ones already confirmed superseded in
  this file's prior entries, so nothing was in flight to collide with.
  Ran a fresh `keywords-explorer-overview` batch on specific candidate
  phrases not tried together before (model-agent/scout terms, TFP, a batch
  of thin niche variants already flagged on the shortlist, several new
  ones). Two findings worth recording. First, `what is a model agent`
  came back at 1,400 volume, KD 1, dramatically higher than anything else
  checked, but `serp-overview` showed the SERP dominated by Indeed
  ("How To Become a Modeling Agent") and onlinedegree.com career-guide
  content aimed at people who want to become a booking agent themselves,
  not models seeking representation, the same wrong-audience pattern
  already logged for `brand ambassador`, `ai model agency` and
  `spokesmodel`. Dropped, not shipped, despite the volume. Second,
  `how much do runway models make` (250 vol, KD 0) checked out cannibalised
  on a full-text grep: `runway-model`'s own FAQ already has a dedicated
  "How much does a runway model make?" Q&A. Also dropped.
  `how to become a print model` re-checked at 200 volume (up from the 80
  recorded 2026-09-05) and confirmed clean via a full-repo grep for "print
  model" (zero hits anywhere) and via `serp-overview`: a genuinely
  career-education SERP (Photogenics, Latitude Talent, The Mother Agents,
  Backstage DR85, Reddit, Quora), no established modeling-course
  competitor, the same winnable shape as the rest of the Specialisms
  cluster. Shipped `how-to-become-a-print-model` in
  `content/articles/niche.mjs`, extending that cluster again. Its central
  differentiator, since "print," "editorial" and "e-commerce" all get
  used loosely for similar-looking photos, is the actual distinction: the
  client and the physical medium (a printed, unchangeable run vs. a
  website that can be updated, vs. a magazine's own fashion-casting
  standard), which changes how usage gets priced, not just the styling.
  Cross-linked in-body from three places, one more than the minimum:
  `what-is-commercial-modeling`'s "Catalogue and e-commerce" bullet
  (turning its existing "printed catalogue" aside into a link),
  `types-of-modeling`'s "Editorial and print" H3, and
  `what-is-fashion-modeling`'s "Editorial" bullet, all in
  `content/articles/types-of-work.mjs`. Added the slug to the Specialisms
  cluster in `scripts/build-index-and-sitemap.mjs`. Skipped a Higgsfield
  generation attempt, per the standing `cloudfront.net` 403 block on this
  session's network policy logged on every run since 2026-08-25 and not
  re-tested since 2026-09-10 — reused `image: 'how-to-become-a-fitness-model'`
  (a full-length shot against a plain white studio cyclorama with natural
  window light, zero prior reuses in generated content) with a fresh
  `imageAlt`, since that exact clean, flat-lit, full-length setup is
  honestly the standard look a print/catalogue submission actually uses,
  not a fitness-specific framing. `npm run build && npm run check` and
  `npx html-validate@8` on the new and edited pages all pass clean,
  including the orphan-inbound-link check (3 in-body inbound links) and a
  manual JSON-LD parse check confirming all three schema blocks parse,
  with the `FAQPage` block carrying its full 6 questions. Title is 41
  characters, description 141 characters, both within limit; zero em
  dashes in the new article body or FAQ answers (the only em dashes
  anywhere in the built page are the shared nav/footer generated-marker
  comments and the "Enrol — $299" CTA label, identical across every page
  on the site). Word count landed at 1,124, in line with this site's other
  thin-keyword niche pieces (foot 1,226, tattoo 1,271, showroom 1,163,
  Instagram 1,114) rather than the higher-volume 1,500-2,500 range, the
  same deliberate match to established practice logged for those.

  GSC access still unavailable this run (no service-account key or
  `gsc-*` MCP tool present); substituted Ahrefs per the standing note.
  Opening a PR next and merging once CI is green and `mergeable_state` is
  `clean`, per the standing automerge authorisation above, without
  waiting on Josh.
- **2026-09-14 run.** Fired from the same stale 18 August chat-routine
  handover as every prior run; this file and `CONTRIBUTING.md` remain the
  authoritative process. `git fetch origin main` confirmed local `main`
  matched `origin/main` exactly (PR #35, the print-model article, already
  merged), `npm run check` on `main` was clean before writing, and
  `list_pull_requests` returned no open PRs. `list_branches` surfaced two
  previously-unlogged remote branches, `claude/charming-tesla-dpu2um` and
  `claude/charming-tesla-xs4alx`; fetched and diffed each against
  `origin/main` individually per the standing collision lesson rather than
  trusting the names, and both turned out to be superseded pre-squash PR
  head branches (showroom-model and print-model respectively, both already
  on `main`), so nothing was in flight to collide with.

  Ran a fresh `keywords-explorer-overview` batch on an angle not tried by
  any prior run, brand-facing content formats (UGC, sample-size, test-shoot,
  TFP, virtual-model terms), rather than another niche "how to become a [X]
  model" variant. Most were thin (test shoot, sample size model, virtual
  model agency, portfolio-cost queries all at or under 20 volume) or already
  logged as checked-and-thin (TFP, bridal, lingerie, swimsuit). `ugc model`
  (200 vol, KD 0) stood out and checked out genuinely clean and on-ICP:
  `serp-overview` showed real career-guide competitors in the mix
  (Photogenics Media's own "How to Become a UGC Creator Model" and "How to
  Get UGC Modeling Work" glossary pages, modelmanagement.com, Collabstr,
  alongside Indeed/YouTube/Reddit noise and some AI-avatar-tool chatter that
  sits below the fold), no modeling-course competitor anywhere in the top
  10. Checked for cannibalisation properly, not just against this table: a
  full-repo grep for "UGC" found it used only as a qualifier inside
  `how-to-become-an-instagram-model` ("a UGC-style ad that reads like a real
  post"), describing Instagram-specific branded content, never as its own
  dedicated treatment of the broader, platform-agnostic UGC-content category
  (which runs through a brand's own ad account rather than the model's
  feed, is priced per piece of content rather than day-rate-plus-usage, and
  needs no following at all) — the same passing-mention-is-not-full-coverage
  pattern that cleared foot, hair, petite, fit and several other Specialisms
  entries before it. Wrote `how-to-become-a-ugc-model` in
  `content/articles/niche.mjs`, built around that exact distinction from the
  Instagram-model guide (who owns and runs the finished content, not how it
  looks) since the two are close enough that blurring them would read as
  cannibalisation rather than a genuine sibling. Also flagged the pay
  structure explicitly as an exception to the site's usual
  day-rate-plus-usage framing, since UGC is priced per finished piece with
  usage as a separate add-on, not a day rate at all.

  Cross-linked in-body from three places, one more than the minimum: turned
  the existing "UGC-style ad" mention in `how-to-become-an-instagram-model`
  into a link, extended `types-of-modeling`'s "Freelance" section (which
  already linked the Instagram-model guide) with a new sentence
  distinguishing UGC modeling from it, and added both a new "UGC-style
  content" bullet to `what-is-commercial-modeling`'s work-types list and a
  new "Social and UGC content" H3 to `modeling-jobs`'s category list in
  `content/articles/jobs.mjs`. Added the slug to the Specialisms cluster in
  `scripts/build-index-and-sitemap.mjs`. Skipped a Higgsfield generation
  attempt, per the standing `cloudfront.net` 403 block logged on every run
  since 2026-08-25 and last reconfirmed 2026-09-10 — reused
  `image: 'how-to-become-a-model-with-no-experience'` (an honest,
  unpolished phone digital against a plain wall, already reused once for
  `how-to-become-a-petite-model` and once for `modeling-headshots`) with a
  fresh `imageAlt`, since that exact plain, unpolished look is honestly the
  actual UGC brief, not a compromise substitute for a dedicated shoot.
  `npm run build && npm run check` and `npx html-validate@8` on the new and
  edited pages all pass clean, including the orphan-inbound-link check (3
  in-body inbound links). Title is 39 characters, description 148
  characters, both within limit; zero em dashes in the new article body or
  FAQ answers. Word count landed at 1,167, in line with this site's other
  thin-keyword niche pieces (foot 1,226, tattoo 1,271, showroom 1,163,
  Instagram 1,114) rather than the higher-volume 1,500-2,500 range, the
  same deliberate match to established practice logged for those.

  GSC access still unavailable this run (no service-account key or
  `gsc-*` MCP tool present); substituted Ahrefs per the standing note.
  Opening a PR next and merging once CI is green and `mergeable_state` is
  `clean`, per the standing automerge authorisation above, without
  waiting on Josh.
- **2026-09-15 run.** Fired from the same stale 18 August chat-routine
  handover as every prior run; this file and `CONTRIBUTING.md` remain the
  authoritative process, and there is nothing left to check off from that
  handover itself: article 17 it flagged as undeployed is long since live,
  and the GSC/Ahrefs/build-pipeline gaps it assumed are already tracked
  here in their current state. `git fetch origin main` confirmed local
  `main` matched `origin/main` exactly (PR #36, the UGC-model article,
  already merged) and `npm run check` on `main` was clean before writing.
  `list_pull_requests` returned no open PRs, and `list_branches` surfaced
  no branches beyond `main` and ones already confirmed superseded in this
  file's prior entries, so nothing was in flight to collide with.

  Ran a fresh `keywords-explorer-overview` batch on an angle not tried by
  any prior run, live/event-staffing modeling formats (trade show,
  convention, in-house, glamour, lifestyle, stock photo, body double).
  `glamour model` (900 vol, KD 1) had by far the best numbers in the batch
  but was dropped on brand fit, not cannibalisation: `how-to-make-a-modeling-portfolio`
  and `how-to-become-a-model` both actively warn against "glamour-style"
  shoots and lighting as signalling "the wrong industry entirely for
  agency work," so a dedicated glamour-modeling guide would contradict the
  site's own established editorial stance elsewhere, not just risk a thin
  SERP. `live model` (100 vol) and `how to become a body double` (0 vol)
  were dropped too, the former for the same life-drawing/art-model
  brand-fit caution already logged for the nude/figure-model cluster.
  `trade show model` (100 vol, KD 6) and `promotional model` (200 vol,
  KD 1) checked out as the genuine opportunity: `serp-overview` for both
  showed real career-advice and staffing-agency competitors (Backstage,
  Indeed, ModelsDirect, mymodelreality.com, plus city-specific trade show
  staffing agencies), Wikipedia's "Promotional model" page with its own
  "Trade show model" section, and a real "How to become a promo model?"
  People Also Ask question, no modeling-course competitor anywhere in
  either top 10. Confirmed clean via a full-repo grep for "promotional"
  and "trade show": both terms appear only as passing mentions inside
  `modeling-jobs`' "Promotional and event" H3, `runway-model`'s
  "smaller shows" bullet and FAQ, and the petite-model guide's
  "Retail and regional runway" bullet, never as a dedicated treatment,
  the same passing-mention-is-not-full-coverage pattern that has cleared
  most of the Specialisms cluster's niche picks. Combined the two terms
  (plus `trade show modeling` and `tradeshow model`, ~400 vol total
  across the cluster) into one article rather than two, following the
  `ecommerce-modeling`/`what-is-commercial-modeling` explainer-plus-how-to
  format for a bare category noun rather than `niche.mjs`'s personal
  "how to become a [X] model" shape, since neither keyword is phrased as
  a personal path.

  Wrote `promotional-modeling` in `content/articles/types-of-work.mjs`,
  alongside its `ecommerce-modeling` and `what-is-commercial-modeling`
  siblings. Its central differentiator is the actual job shape: live,
  in-person representation at an event rather than a photograph, booked
  by the day or hour rather than for usage rights, casting far more on
  personality and stamina than on height or measurements. Also gave it a
  dedicated section distinguishing it from "brand ambassador" postings
  (retail/college programs, the audience-fit reason that keyword cluster
  was dropped entirely back on 2026-09-02), since the two terms are used
  near-interchangeably online but promotional/trade-show work is a
  specifically booked shift with a set rate, the same booking structure
  as everything else on this site. Cross-linked in-body from three
  places, one more than the minimum: turned the existing "trade shows"
  mentions in `jobs.mjs`'s "Promotional and event" section,
  `types-of-work.mjs`'s own `runway-model` "smaller shows" bullet, and
  `niche.mjs`'s petite-model "Retail and regional runway" bullet into
  links. Added the slug to the "Castings & work" cluster in
  `scripts/build-index-and-sitemap.mjs`.

  Retried a dedicated Higgsfield generation, last confirmed blocked
  2026-09-10 (five days prior, close to the roughly-weekly retest
  cadence): `generate_image` (`nano_banana_pro`, resolved to
  `nano_banana_2`) produced a clean 2752x1536 result with no collage or
  text artefacts on inspection, but a direct `curl` on the resulting
  `cloudfront.net` URL still failed with `CONNECT tunnel failed, response
  403` through this session's agent proxy, identical to every attempt
  since 2026-08-25. Standing environment block confirmed still not
  lifted. Reused `image: 'how-to-become-a-male-model'` (a plain-wall,
  full-length standing portrait in unstyled clothing, already reused
  twice) with a fresh `imageAlt` describing the camera-ready,
  approachable presence promotional and trade show work actually needs,
  since no existing image depicts an actual booth or convention setting
  and an honest generic reuse beats a misleading specific claim.

  `npm run build && npm run check` and `npx html-validate@8` on the new
  and edited pages all pass clean, including the orphan-inbound-link
  check (3 in-body inbound links) and a manual JSON-LD parse check
  confirming all three schema blocks parse, with the `FAQPage` block
  carrying its full 6 questions. Title is 49 characters, description 150
  characters, both within limit. Fixed one authoring mistake before
  building: a missing closing quotation mark in one of the "reasons
  people talk themselves out of submitting" bullets, caught on review of
  the diff rather than by any automated check, since `check:site` does
  not validate prose punctuation.

  GSC access still unavailable this run (no service-account key or
  `gsc-*` MCP tool present); substituted Ahrefs per the standing note.
  Opened PR #37; merging once CI is green and `mergeable_state` is
  `clean`, per the standing automerge authorisation above, without
  waiting on Josh.
- **2026-09-16 run.** Fired from the same stale 18 August chat-routine
  handover as every prior run; this file and `CONTRIBUTING.md` remain the
  authoritative process. `git fetch origin main` confirmed the designated
  session branch matched `origin/main` exactly (PR #37, the
  promotional-modeling article, already merged) and `npm run check` on
  `main` was clean before writing. `list_pull_requests` returned no open
  PRs, and `list_branches` surfaced no branches beyond `main` and ones
  already confirmed superseded in this file's prior entries (all the
  `charming-tesla-*` stale branches, `claude/model-academy-github-setup-etwquk`,
  `claude/how-to-become-an-instagram-model` and the rest), so nothing was
  in flight to collide with.

  Ran a fresh `keywords-explorer-overview` batch on an angle not tried by
  any prior run, close-up beauty/content-format terms not covered by the
  live/event-staffing or brand-content batches of the last two runs
  (teen model, beauty model variants, stock photo modeling, video model,
  catalog model, editorial model, underwear model, body double,
  modeling internship). Two findings worth recording. First,
  `how to become a teen model` (100 vol, KD 0), flagged on the shortlist
  since 2026-09-05 as "likely cannibalised, not confirmed," turned out to
  be a deliberate brand decision rather than a coverage gap:
  `content/articles/parents.mjs` carries its own file-header comment,
  "Deliberately NOT targeting the bare term 'teen model', which carries
  search intent this brand should not be competing for," written when
  that cluster was built. Not a content-overlap cannibalisation in the
  usual sense, but a standing decision that rules the term out
  permanently either way; corrected the shortlist note below and flagging
  it here as a new, durable dead end for future runs, since it would not
  have surfaced from a grep for existing coverage alone. Second,
  `how to become an underwear model` (150 vol, KD 0) looked clean on
  volume and a grep found no existing coverage, but was deprioritised on
  brand fit rather than picked, the same standing caution already logged
  for the checked-but-unshipped lingerie and swimsuit terms: this site's
  audience includes teens per `how-to-become-a-model-at-16`, and
  underwear modeling carries at least as much of that risk as lingerie
  did. Left on the shortlist for a deliberate future decision, not ruled
  out permanently.

  `beauty modeling` (70 vol, KD 0) and `how to become a beauty model`
  (10 vol, KD 0) checked out as the genuine opportunity. `serp-overview`
  for `beauty modeling` showed a real career-education SERP once the
  noise cleared (photogenicsmedia.com's own "What Is Beauty Modeling"
  glossary page, Indeed's makeup-model jobs listing, Backstage's beauty
  and makeup modeling castings, a couple of low-DR modeling-agency and
  photography sites, a TikTok how-to), no modeling-course competitor
  anywhere in the top 10. Checked cannibalisation properly, not just
  against this table: a full-repo grep for "beauty" turned up dozens of
  passing mentions (a "clean beauty" shot on nearly every portfolio
  shot-list, "beauty" as one board among several in agency and
  category-list content, "the beauty shot" as a headshot-expression
  name), but a second, narrower grep for the exact phrase "beauty model"
  found exactly one passing use anywhere on the site (a single sentence
  in `how-to-become-a-model` about height cutoffs), confirming no article
  gives the category itself a dedicated treatment, the same
  passing-mention-is-not-full-coverage pattern that has cleared most of
  the Specialisms cluster's niche picks before it.

  Wrote `how-to-become-a-beauty-model` in `content/articles/niche.mjs`,
  extending that cluster again. Its central differentiator, since this
  keyword's own search results default to a pageant-style framing, is the
  actual casting standard: skin condition and a calm, unperformed
  expression at close range, not a subjective beauty ranking, plus one
  genuinely insider detail that seemed worth a dedicated section rather
  than a passing line: doing nothing new to your skin, brows or hair in
  the days before a beauty casting or shoot, since a fresh facial, wax,
  thread or first-time product is the most common reason a booked beauty
  model gets recast, and a tight beauty crop shows redness and irritation
  in far more detail than any other category on this site would.

  Cross-linked in-body from three places, one more than the minimum: a
  new "Beauty" H3 added to `types-of-modeling`'s category list in
  `content/articles/types-of-work.mjs`, between the existing "Hand and
  parts modeling" and "Hair modeling" H3s; a new sentence added to
  `modeling-headshots`'s "Fashion or straight (the beauty shot)" section
  in `content/articles/portfolio.mjs`, connecting that headshot-expression
  explainer to the modeling category built on the same close crop; and the
  hand-written `how-to-become-a-hand-model`'s existing "Beauty." paragraph
  (nail polish, hand cream, skincare clients), edited directly per
  CONTRIBUTING.md since it is one of the original 16 hand-written pages,
  extended with a sentence distinguishing hand-focused beauty work from
  the face-focused version and linking to the new guide. Added the slug to
  the Specialisms cluster in `scripts/build-index-and-sitemap.mjs`. Did not
  add it to any footer column, since a 70-volume niche pick does not clear
  the sitewide-link bar the rest of the Specialisms cluster has not
  cleared either.

  Skipped a Higgsfield generation attempt, per the standing `cloudfront.net`
  403 block on this session's network policy logged on every run since
  2026-08-25 and most recently reconfirmed 2026-09-15 (yesterday) — not
  re-tested again this run per the task's own instruction not to re-burn
  time confirming a standing, repeatedly-reconfirmed block. Reused
  `image: 'how-to-become-a-model'` (a plain-wall, face-forward portrait
  with a natural smile, already the most-reused image in generated content
  at 5 prior reuses) with a fresh `imageAlt` describing it honestly as a
  close, evenly lit face crop rather than claiming a dedicated beauty
  shoot, since it is genuinely the only image on the site that puts the
  face this clearly in frame against a plain background, the same
  deliberate honest-fit-over-freshness call the 2026-09-09 UK-guide entry
  logged for its own most-reused image.

  `npm run build && npm run check` and `npx html-validate@8` on the new
  and edited pages all pass clean, including the orphan-inbound-link
  check (3 in-body inbound links) and a manual JSON-LD parse check
  confirming all three schema blocks parse, with the `FAQPage` block
  carrying its full 6 questions. Title is 42 characters, description 145
  characters, both within limit; word count landed at 1,136, in line with
  this site's other thin-keyword niche pieces (foot 1,226, tattoo 1,271,
  showroom 1,163, Instagram 1,114, UGC 1,167) rather than the
  higher-volume 1,500-2,500 range, the same deliberate match to
  established practice logged for those. Zero em dashes anywhere in the
  new article body or FAQ answers, confirmed directly; the only em dashes
  in the built page are the shared nav/footer generated-marker comments
  and the "Enrol — $299" CTA label common to every page on the site.
  Diffed every changed file for the hard-constraint strings (`299`, `499`,
  `offers/`, the GTM/GA4/Pixel IDs) before committing and found nothing
  beyond the expected, unrelated "All 58 guides" to "All 59 guides"
  footer-count bump on every page, confirming this run did not touch
  pricing, checkout links or tracking.

  GSC access still unavailable this run (no service-account key or
  `gsc-*` MCP tool present); substituted Ahrefs per the standing note.
  Opening a PR next and merging once CI is green and `mergeable_state` is
  `clean`, per the standing automerge authorisation above, without
  waiting on Josh.
- **Correction, 2026-09-17: `claude/model-academy-github-setup-etwquk` was
  never actually superseded.** This file logged it as "confirmed
  superseded" three separate times (2026-08-27, 2026-09-03, 2026-09-16),
  each time based on a commit-count/name check against the standing dead-
  branch list, not an actual content diff against `main`. A closer check
  this run (`git diff origin/main origin/claude/model-academy-github-setup-etwquk
  -- index.html`) shows real, unshipped content on that branch: its head
  commit, "Remove the lifetime access claim from the site" (2026-09-01),
  rewrites the homepage meta description, the `Course` JSON-LD and the
  homepage FAQ away from "lifetime access" and a "Seven days, no questions
  asked" refund to "one payment, no subscription" and a refund policy that
  excludes courses where any video has already been started. `main` today
  still carries the original "lifetime access" / no-questions-asked
  wording this branch was written to remove. The branch is not a clean,
  isolated fix, though: its 8 commits also bundle unrelated hero-copy and
  stats rewrites, CSS/reveal-animation changes, a removed mobile media
  query, a favicon change, and repo work unrelated to the homepage
  (`migration/` gitignore, removing "extracted course content" from the
  repo). Not merged this run: it touches the refund policy and an access
  claim, both outside the standing automerge authorisation (which covers
  routine blog-content PRs, not business/policy copy), and CONTRIBUTING.md's
  price/checkout/tracking carve-out is the closest existing guidance,
  which points the same way, toward a human decision rather than an
  autonomous merge. Flagged directly to Josh via push notification instead
  of silently re-logging it as superseded a fourth time. **Do not repeat
  the commit-count-only check that produced the original three false
  "superseded" entries** — verify branches with unusual, non-generic names
  (this one is not a `charming-tesla-*` auto-named session branch) with an
  actual content diff before recording a disposition here, the same
  standard `git log origin/main..` alone does not meet.
- **2026-09-17 run.** Fired from the same stale 18 August chat-routine
  handover as every prior run; this file and `CONTRIBUTING.md` remain the
  authoritative process. `git fetch origin main` confirmed the designated
  session branch matched `origin/main` exactly (PR #38, the beauty-model
  article, already merged) and `npm run check` on `main` was clean before
  writing. A subagent check of `list_pull_requests` (none open) and
  `list_branches` surfaced the `claude/model-academy-github-setup-etwquk`
  finding above; every other non-`main` branch was re-confirmed
  content-identical to already-merged history, so nothing else was in
  flight to collide with.

  Ran a fresh `keywords-explorer-overview` batch on an angle not tried by
  any prior run, older/non-youth demographic and pay-mechanics terms
  (livestream shopping, QVC, day rate, salary, mature/senior/older-model
  variants). `catalog modeling` (150 vol, KD 0) looked promising on volume
  alone but checked out cannibalised on a full-repo grep: "catalogue" and
  "catalog" already get dedicated, repeated treatment across `jobs.mjs`,
  `money.mjs`, `niche.mjs`'s print-model FAQ, and both agency-market files,
  including print-model's own FAQ answer distinguishing catalogue, print
  and e-commerce work directly. `mature models` (700 vol, KD 4, bare term)
  stood out as the real find: `serp-overview` for the bare term showed a
  genuine industry SERP (ModelsDirect, Classic Modeling Agency NYC,
  the-models.de's "best ager" agency page, sandrareynolds.co.uk's own "How
  To Become A Mature Model," winkmodels.com.au), no modeling-course
  competitor, once a handful of stock-photo and celebrity-gossip results
  were filtered out. Checked the adjacent bare term `senior models`
  (350 vol, KD 0) separately and dropped it: its SERP is dominated
  entirely by a completely different meaning, high-school "senior
  portrait" photography (Pinterest, local portrait studios, prom-season
  Instagram posts), the same kind of sense-trap that ruled out bare `fit
  model` and `elite model` in earlier runs. Confirmed clean via a
  full-repo grep for "senior model," "mature model," "middle age model"
  and "older model": zero hits anywhere except the two passing mentions
  used as cross-link sources below, no dedicated treatment.

  Wrote `how-to-become-a-mature-model` in `content/articles/niche.mjs`,
  extending the Specialisms cluster again, framed around the actual
  industry term ("classic board") rather than the search terms
  themselves, the same call the beauty and hair articles made for their
  own industry/search-term mismatches. Its central point is the opposite
  of most competing content's framing: clients casting this board
  specifically want an authentic, current, unretouched face, so trying to
  photograph younger is the most common way a submission gets passed
  over, not a way to improve one. Cross-linked in-body from three places,
  one more than the minimum: the existing "Mature" H3 in
  `content/articles/types-of-work.mjs` (`types-of-modeling`), the
  "Classic" board bullet in `content/articles/agencies-us.mjs` (which
  turned out to belong to `modeling-agencies-near-me`, not
  `what-do-modeling-agencies-look-for` as first assumed, corrected before
  finalizing the `related` field to match), and the hand-written
  `how-to-become-a-successful-model`'s "Categories are doors, not cages"
  section, edited directly per CONTRIBUTING.md since it is one of the
  original 16 pages. Added the slug to the Specialisms cluster in
  `scripts/build-index-and-sitemap.mjs`.

  Skipped a Higgsfield generation attempt, per the standing
  `cloudfront.net` 403 block on this session's network policy logged on
  every run since 2026-08-25 and most recently reconfirmed 2026-09-16 —
  reused `image: 'how-to-become-a-fitness-model'` (a full-length shot
  against a plain white studio cyclorama, only 1 prior reuse) with a
  fresh, deliberately age-neutral `imageAlt` describing the photo type
  rather than the subject, since no existing image can honestly support
  an age claim either way and the site's standing practice is an honest
  generic reuse over a misleading specific one.

  `npm run build && npm run check` and `npx html-validate@8` on the new
  and edited pages all pass clean, including the orphan-inbound-link
  check (3 in-body inbound links) and a manual JSON-LD parse check
  confirming all three schema blocks parse, with the `FAQPage` block
  carrying its full 6 questions. Title is 42 characters, description 137
  characters, both within limit; word count landed at 1,188. Zero em
  dashes anywhere in the new article body or FAQ answers, confirmed
  directly. Diffed every changed file for the hard-constraint strings
  (`299`, `499`, `offers/`, the GTM/GA4/Pixel IDs) before committing and
  found nothing beyond the expected "All 59 guides" to "All 60 guides"
  footer-count bump on every page.

  GSC access still unavailable this run (no service-account key or
  `gsc-*` MCP tool present); substituted Ahrefs per the standing note.
  Opened PR #39; merging once CI is green and `mergeable_state` is
  `clean`, per the standing automerge authorisation above, without
  waiting on Josh.
- **2026-09-18 run.** Fired from the same stale 18 August chat-routine
  handover as every prior run; this file and `CONTRIBUTING.md` remain the
  authoritative process. `git fetch origin main` confirmed the designated
  session branch matched `origin/main` exactly (PR #39, the mature-model
  article, already merged) and `npm run check` on `main` was clean before
  writing. `git ls-remote` on the designated session branch itself came back
  empty (same no-matching-remote-ref case logged on several prior runs), so
  built directly on `origin/main` rather than resetting anything.
  `list_pull_requests` returned no open PRs, and `list_branches` surfaced
  only branches already confirmed superseded in this file's prior entries
  (including `claude/model-academy-github-setup-etwquk`, whose real
  unmerged content was flagged to Josh directly on 2026-09-17 rather than
  merged, since it touches refund-policy and access-claim copy outside the
  automerge authorisation), so nothing was in flight to collide with.

  Ran a fresh `keywords-explorer-overview` batch on an angle not tried by
  any prior run, legal/financial and business-terminology adjacent phrases
  (child trust accounts, agency-application process terms, a Canada
  market-parity check). Two findings worth recording as durable dead ends.
  First, `coogan account` (3,300 vol, KD 9) looked like a major find on
  volume alone, but `serp-overview` showed a SERP dominated entirely by
  SAG-AFTRA, credit unions and entertainment-industry financial advisors,
  i.e. child *actors*, not child models — the same off-ICP pattern that
  ruled out `brand ambassador` and `how to become an extra` in earlier
  runs. A grep of `content/articles/parents.mjs` also found the underlying
  concept already covered: its `legalBlock`'s US section names the
  California/New York trust-account requirement and the "Coogan account"
  term directly. Dropped, not a future-project candidate either. Second,
  `product model` (200 vol, KD 0) checked out as the wrong sense entirely:
  `serp-overview` is 100% business/product-management content (Silicon
  Valley Product Group, Atlassian, Product School), nothing to do with
  modeling. Dropped. `how to become a model in canada` and a few adjacent
  Canada-market phrases came back at 0 volume, so a Canada market-parity
  push (the UK guide's equivalent) is not supported by search demand right
  now, unlike the UK and Australia expansions.

  `how to become a face model` (50 vol, KD 0) checked out as the genuine
  opportunity. `serp-overview` showed a clean career-education SERP
  (ZipRecruiter, Backstage, low-DR modeling-industry sites, forums, one
  TikTok how-to), no modeling-course competitor anywhere in the top 10.
  Confirmed clean via a full-repo grep for "face model" and "face
  modeling": zero existing hits anywhere on the site. This completes
  another entry in the Specialisms cluster's parts-adjacent set (hand,
  foot, hair, now face), each a single-feature booking judged on
  condition rather than a look.

  Wrote `how-to-become-a-face-model` in `content/articles/niche.mjs`. Its
  central differentiator, since this keyword's own SERP and casual
  understanding default to beauty-pageant framing, is the same
  "condition, not a beauty ideal" logic the hand and foot guides use:
  skincare, dermatology, dental, eyewear and haircare-packaging clients
  need a specific feature (the face) in clean, repeatable, camera-ready
  condition, not a fashion or beauty look. Took care to explicitly
  disambiguate this from `how-to-become-a-beauty-model` in its own FAQ and
  body, since both categories share the same tight close crop and are the
  most likely of any two articles on this site to get confused for one
  another going forward — a dedicated "Face Modeling vs. Beauty Modeling"
  H2 makes the distinction explicit rather than leaving it implied.

  Cross-linked in-body from three places, one more than the minimum: a
  new "Face" H3 added to `types-of-modeling`'s category list in
  `content/articles/types-of-work.mjs`, placed before the existing
  "Beauty" H3; a second sentence added to `modeling-headshots`'s "Fashion
  or straight (the beauty shot)" section in `content/articles/portfolio.mjs`,
  alongside the existing beauty-model link from that same close-crop
  discussion; and the hand-written `how-to-become-a-hand-model`'s existing
  "Parts Modeling" paragraph (`blog/how-to-become-a-hand-model/index.html`),
  edited directly per CONTRIBUTING.md since it is one of the original 16
  hand-written pages, extended with a sentence on face/features listings
  alongside the existing foot-model link that paragraph already carried.
  Added the slug to the Specialisms cluster in
  `scripts/build-index-and-sitemap.mjs`, after `how-to-become-a-mature-model`
  and before `how-to-become-a-freelance-model`. Did not add it to any
  footer column, the same call made for every other sub-100-volume niche
  pick in this cluster.

  Skipped a Higgsfield generation attempt, per the standing
  `cloudfront.net` 403 block on this session's network policy logged on
  every run since 2026-08-25 and most recently reconfirmed 2026-09-16 and
  2026-09-17 (one and two days prior) — not re-tested again this run per
  the same reasoning those two runs gave for not re-confirming a
  freshly-reconfirmed standing block. Reused `image: 'how-to-become-a-model'`
  (a close, plain-wall headshot with direct eye contact and a natural
  expression, already the site's most-reused generated-content image at 6
  prior reuses including for `how-to-become-a-beauty-model`) with a fresh
  `imageAlt` describing it honestly as the crop a face-modeling client
  books rather than a beauty shoot, the same deliberate honest-fit-over-
  freshness call logged for this image's own prior reuse.

  `npm run build && npm run check` and `npx html-validate@8` on the new
  and edited pages all pass clean, including the orphan-inbound-link
  check (3 in-body inbound links) and a manual JSON-LD parse check
  confirming all three schema blocks parse, with the `FAQPage` block
  carrying its full 6 questions. Title is 40 characters, description 140
  characters, both within limit; word count landed at 1,126, in line with
  this site's other thin-keyword niche pieces rather than the higher-volume
  1,500-2,500 range. Zero em dashes anywhere in the new article body or
  FAQ answers, confirmed directly. Diffed every changed file for the hard-
  constraint strings (`299`, `499`, `offers/`, the GTM/GA4/Pixel IDs)
  before committing and found nothing beyond the expected "All 60 guides"
  to "All 61 guides" footer-count bump on every page and the new article's
  own correctly-slugged inline-CTA UTM line.

  GSC access still unavailable this run (no service-account key or
  `gsc-*` MCP tool present); substituted Ahrefs per the standing note.
  Opening a PR next and merging once CI is green and `mergeable_state` is
  `clean`, per the standing automerge authorisation above, without
  waiting on Josh.
- **2026-09-19 run.** Fired from the same stale 18 August chat-routine
  handover as every prior run; this file and `CONTRIBUTING.md` remain the
  authoritative process. `git fetch origin main` confirmed the designated
  session branch matched `origin/main` exactly (PR #40, the face-model
  article, already merged) and `npm run check` on `main` was clean before
  writing. `git ls-remote` on the designated session branch itself came
  back empty (the same no-matching-remote-ref case logged on several
  prior runs), so built directly on `origin/main`. `list_pull_requests`
  returned no open PRs, and `list_branches` surfaced only branches already
  confirmed superseded in this file's prior entries, including
  `claude/model-academy-github-setup-etwquk` (still correctly left
  unmerged and flagged to Josh per the 2026-09-17 correction above, not
  re-touched this run), so nothing was in flight to collide with.

  Ran a fresh `keywords-explorer-overview` batch on an angle not tried by
  any prior run, niche photography-format terms (glamour, pin-up, body
  double, stock photo, lookbook, showcase, "live" modeling). `glamour
  model` (900 vol, KD 1) looked like the best find on volume and
  difficulty alone, but `serp-overview` showed a SERP that blends
  career-advice content (Backstage, StarNow, LiveAbout) with glamour
  photography stock-image galleries and Instagram/Behance portfolios,
  i.e. the boudoir/pin-up-adjacent sense of "glamour," the same
  audience-fit risk class already logged for the deprioritised lingerie,
  swimsuit and underwear terms given this site's audience includes teens
  per `how-to-become-a-model-at-16`. Deprioritised rather than picked,
  logged to the shortlist below for a deliberate future decision, not
  ruled out permanently.

  `stock photo model` (90 vol, KD 0) checked out as the clean, on-brand
  opportunity instead. `serp-overview` showed a genuine career-education
  SERP (Backstage, Shutterstock's own recruiting page, a Reddit thread,
  Business Insider), no modeling-course competitor anywhere in the top
  10, and no glamour/boudoir adjacency at all. Confirmed clean via a
  full-repo grep for "stock photo" and "stock photography": only passing
  mentions existed, in `how-to-become-a-face-model`'s and
  `how-to-become-a-fitness-model`'s own "where this work comes from"
  lists, the same passing-mention-is-not-full-coverage pattern that has
  cleared most of this site's recent niche picks.

  Wrote `stock-photo-modeling` in `content/articles/types-of-work.mjs`
  (the "Types of work" category-explainer cluster, alongside
  `ecommerce-modeling` and `promotional-modeling`, since this is a
  work-type explainer rather than a personal "how to become a..." guide
  and shares that cluster's exact structure and tone) rather than
  `niche.mjs`. Its central differentiator is the one thing every existing
  explainer for this term gets vague about: stock work is paid once, as a
  flat session rate, with no ongoing royalty in almost every arrangement,
  which is worth stating plainly rather than leaving implied, plus a
  dedicated section on why the casting standard rewards a wide, relatable
  range of genuine expressions over a distinctive look, the opposite of
  how most other categories on this site cast.

  Cross-linked in-body from three places, one more than the minimum: the
  existing "Stock photography and e-learning" bullet in
  `how-to-become-a-face-model` (`content/articles/niche.mjs`), the
  existing "Stock photography" bullet in the hand-written
  `how-to-become-a-fitness-model` (edited directly per CONTRIBUTING.md
  since it is one of the original 16 pages), and a new sentence added to
  `ecommerce-modeling`'s own "Where This Work Actually Comes From"
  section naming stock photo modeling as a close cousin, since the two
  categories are genuinely adjacent and readers of one are a natural
  audience for the other. Added the slug to the "Castings & work" cluster
  in `scripts/build-index-and-sitemap.mjs`, after `promotional-modeling`.
  Did not add it to any footer column, the same call made for every other
  sub-100-volume pick in this file's recent history.

  Skipped a Higgsfield generation attempt, per the standing
  `cloudfront.net` 403 block on this session's network policy logged on
  every run since 2026-08-25 and most recently reconfirmed 2026-09-18
  (yesterday) — not re-tested again this run per the same reasoning those
  runs gave for not re-confirming a freshly-reconfirmed standing block.
  Reused `image: 'how-to-become-a-model-with-no-experience'` (a plain
  white t-shirt against a plain wall, evenly lit, previously used twice
  for `how-to-become-a-petite-model` and `modeling-headshots`, now a
  third time) with a fresh `imageAlt` describing it honestly as the
  generic, versatile look stock casting actually wants, since it is the
  most literally fitting image on the site for this specific topic
  despite the reuse count, the same honest-fit-over-freshness call logged
  for this site's other most-reused images.

  `npm run build && npm run check` and `npx html-validate@8` on the new
  and edited pages all pass clean, including the orphan-inbound-link
  check (3 in-body inbound links) and a manual JSON-LD parse check
  confirming all three schema blocks parse, with the `FAQPage` block
  carrying its full 6 questions. Title is 50 characters, description 136
  characters, both within limit; word count landed at 1,128, in line with
  this site's other thin-keyword niche pieces. Zero em dashes anywhere in
  the new article body or FAQ answers, confirmed directly. Diffed every
  changed file for the hard-constraint strings (`299`, `499`, `offers/`,
  the GTM/GA4/Pixel IDs) before committing and found nothing beyond the
  expected "All 61 guides" to "All 62 guides" footer-count bump on every
  page and the new article's own correctly-slugged inline-CTA UTM line.

  GSC access still unavailable this run (no service-account key or
  `gsc-*` MCP tool present); substituted Ahrefs per the standing note.
  Opened PR next; merging once CI is green and `mergeable_state` is
  `clean`, per the standing automerge authorisation above, without
  waiting on Josh.
