// Every generated article. Hand-written articles from the original blog build
// are not listed here — they stay as they are, and content/registry-existing.json
// carries their metadata so cross-links and related cards resolve both ways.

import { agenciesAu } from './articles/agencies-au.mjs';
import { agenciesUs } from './articles/agencies-us.mjs';
import { parents } from './articles/parents.mjs';
import { portfolio } from './articles/portfolio.mjs';
import { jobs } from './articles/jobs.mjs';
import { gettingStarted } from './articles/getting-started.mjs';
import { commercial } from './articles/commercial.mjs';
import { typesOfWork } from './articles/types-of-work.mjs';

export const articles = [
  ...agenciesAu,
  ...agenciesUs,
  ...parents,
  ...portfolio,
  ...jobs,
  ...gettingStarted,
  ...commercial,
  ...typesOfWork,
];
