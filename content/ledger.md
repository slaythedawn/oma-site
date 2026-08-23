# SEO content ledger

What each article targets, so the weekly routine can check for cannibalisation
before writing anything new. One row per live article. Volume and difficulty are
US Ahrefs figures at the date the article was picked.

**The rule this table exists to enforce:** if an existing article already targets
the keyword, improve that article. Do not write a second one.

## Live

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
| runway-model | runway model / what is runway modeling | 3200 + 1200 | 2 / 0 | 2026-08-20 |
| modeling-classes | modeling classes | 900 | 20 | 2026-08-22 |
| modeling-schools | modeling schools | 300 | 0 | 2026-08-22 |

## Shortlist for coming weeks

Verified uncovered against the table above. Figures re-checked 2026-08-20.

| Target keyword | US vol | KD | Note |
| --- | --- | --- | --- |
| how much do models make | 2500 | 0 | About earning. Distinct from how-much-does-it-cost, which is about spending. |
| types of modeling | 1300 | 6 | Natural hub page that can link out to most of the table above. |
| how to get paid as a model | 800 | 0 | Pairs with "how much do models make". |
| how to find modeling jobs | 700 | 0 | Close to the offer. Check against modeling-jobs for overlap before writing. |
| what is commercial modeling | 2500 | 2 | Was drafted in the old chat routine but the source was lost with the sandbox. Needs rewriting from scratch. |

## Known gaps

- **Article 17 never shipped.** `what-is-commercial-modeling` was built in the
  chat routine on 16 August and delivered as a zip that was never unpacked into
  the repo. No trace of it here, so the draft is gone. The keyword is still
  uncovered and still worth 2500/mo, so it is on the shortlist as new work.
- **Generated articles have no inline CTA.** The 16 hand-written articles carry
  the mid-body `.inline-cta` block; 18 of the 19 generated ones do not, because
  the body content in `content/articles/` was written without it. The CSS is
  present on every page, so it is purely a content omission. `runway-model` is
  the only generated article that includes it. The other 18 are a backfill worth
  doing — measured 2026-08-23, so re-count before quoting this number.
- **Homepage uses British "modelling"** in 31 places against 21 US "modeling".
  All the search volume is US. Left alone because it is brand copy, not a
  routine decision.
