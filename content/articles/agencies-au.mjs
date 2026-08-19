// Australian agency-directory cluster. Targets `modelling agencies <city>` —
// AU spelling throughout, because that is what Australians search.
//
// The agency names below are long-established Australian agencies. Descriptions
// are deliberately limited to stable, general facts (which boards they run,
// which city they operate from). Verify current submission details on each
// agency's own site before publishing, and re-check annually.

const DATE = '2026-08-19';

const submissionSteps = `
<h2>How to Submit to an Agency Properly</h2>
<p>Most rejected submissions are not rejected on looks. They are rejected because they arrived in the wrong format, in the wrong place, or with the wrong information missing. Agents open dozens of these a day. Make yours easy.</p>
<h3>What to send</h3>
<ul>
<li><b>Digitals.</b> Four to six photos, taken on a phone, in daylight, against a plain wall. Front, side, back, one smiling, one straight-faced. No makeup, no filters, no retouching. Hair down and natural.</li>
<li><b>Full-length and close-up.</b> Agents need to see your face clearly and your proportions honestly. One without the other is an incomplete submission.</li>
<li><b>Your stats.</b> Height, bust or chest, waist, hips, dress or suit size, shoe size, hair colour, eye colour, and your age. In centimetres for Australian agencies.</li>
<li><b>Your location and availability.</b> Whether you can get to castings in that city on short notice matters more than most applicants realise.</li>
</ul>
<p>Send exactly what the agency's submission page asks for and nothing else. No cover letter essay, no professional shoot, no heavily edited Instagram grid. Our guide to <a href="../how-to-make-a-modeling-portfolio/">building a modelling portfolio</a> covers what comes after you are signed, and it is deliberately not what you send first.</p>
<h3>What never to send money for</h3>
<p>A legitimate agency earns a commission on work you book. That is the entire business model. If an agency, a scout or a "talent manager" asks you to pay for representation, a mandatory photoshoot with their photographer, a portfolio package, or a place on a website, that is not an agency in the sense you want. We break the economics down in <a href="../how-much-does-it-cost-to-become-a-model/">what it actually costs to become a model</a>.</p>
`;

const redFlags = `
<h2>Red Flags, Specifically in the Australian Market</h2>
<ul>
<li><b>Upfront fees of any kind.</b> Australian agencies deduct commission from what you earn. They do not invoice you to join.</li>
<li><b>A compulsory in-house photographer.</b> Being told you must shoot with one specific photographer, at your cost, before anything happens is the oldest pattern in the industry.</li>
<li><b>Scouted by DM only.</b> Real scouts exist and do approach people. Verify every approach through the agency's official website or phone number before you send anything or go anywhere.</li>
<li><b>"Guaranteed" work.</b> Nobody can guarantee bookings. Any agency implying they can is selling you something other than representation.</li>
<li><b>Vague client lists.</b> A working agency can point to campaigns, brands and shows. If nobody on the board seems to work, ask why.</li>
<li><b>Pressure to sign on the spot.</b> Take the contract home. Read it. Our <a href="../how-to-choose-a-modeling-agency/">guide to choosing an agency</a> covers the clauses that matter.</li>
</ul>
<p>Australian consumer law gives you real protection here, and reputable agencies have no problem with you taking your time.</p>
`;

const openCalls = `
<h2>Open Calls and How They Actually Work</h2>
<p>Many Australian agencies run an open call, sometimes weekly, sometimes monthly, sometimes only by appointment. It is the lowest-friction way into a room with a booker, and almost nobody uses it properly.</p>
<p>What to expect: it is short. You will likely be measured, photographed against a wall, asked a few questions, and told they will be in touch. That is not a brush-off, that is the format. Arrive with clean hair, minimal makeup, fitted plain clothes, and heels if you have them. Bring your digitals printed or on your phone.</p>
<p>What decides it is rarely the conversation. It is whether your look fills a gap on their board right now. A "no" often means "not this season", which is why models who get signed frequently got a no from the same agency a year earlier.</p>
`;

/** Shared FAQ answers that are genuinely the same in every Australian city. */
const auFaqCommon = (city) => [
  {
    q: `Do modelling agencies in ${city} charge a joining fee?`,
    a: 'No. Legitimate Australian agencies earn a commission on the work you book, typically deducted from your fee, and charge nothing to represent you. Any request for an upfront joining fee, a compulsory paid photoshoot, or a portfolio package should be treated as a reason to walk away.',
  },
  {
    q: `How tall do you need to be to sign with a ${city} modelling agency?`,
    a: 'For fashion and runway boards, agencies generally work with women from around 175cm and men from around 183cm, because sample garments are cut to fixed sizes. Commercial, plus, curve, parts and talent boards have no meaningful height requirement, and in Australia commercial work is where most models earn most of their income.',
  },
  {
    q: `Can I sign with a ${city} agency with no experience?`,
    a: 'Yes. New faces are the point of a development board. Agencies expect zero experience and evaluate your look, your measurements, your age, and how professional you are to deal with. Experience is what they build with you after signing, not a prerequisite for it.',
  },
  {
    q: 'Can I be signed with more than one Australian agency?',
    a: 'It depends on your contract. Many Australian models hold non-exclusive agreements across different states, or are represented by one agency in Australia and different agencies overseas. Exclusive contracts restrict this, so read the territory and exclusivity clauses before you sign anything.',
  },
];

export const agenciesAu = [
  {
    slug: 'modelling-agencies-sydney',
    seoTitle: 'Modelling Agencies Sydney: The 2026 Guide From Insiders',
    description:
      'A working guide to modelling agencies in Sydney: who runs which boards, how open calls work, what to submit, and the red flags to walk away from.',
    headline: 'Modelling Agencies in Sydney: How the Market Really Works',
    category: 'Agencies',
    image: 'how-to-choose-a-modeling-agency',
    imageAlt: 'A model meeting an agent across a desk in a Sydney agency office',
    readTime: 11,
    date: DATE,
    related: [
      'what-do-modeling-agencies-look-for',
      'modelling-agencies-melbourne',
      'modelling-agencies-australia',
    ],
    faq: [
      ...auFaqCommon('Sydney'),
      {
        q: 'Which modelling agency is best in Sydney?',
        a: 'There is no single best agency, only the best fit for your category. A fashion agency with a strong runway board is the wrong home for a commercial or parts model, and vice versa. Look at who is already on an agency\'s board, work out whether you fill a gap or duplicate someone, and target accordingly.',
      },
    ],
    body: `
<p>Sydney is the largest modelling market in Australia and the one most new models aim at first. It is also the market where the gap between how people think agencies work and how they actually work is widest.</p>
<p>At Online Model Academy our instructors sit on the other side of this process — casting directors, agents and runway producers who decide who gets signed and who gets booked. This is the version of the Sydney agency landscape they would give you over coffee.</p>

<h2>What a Sydney Agency Actually Does</h2>
<p>An agency is not a school and not a photographer. It is a representation business. It puts you forward for jobs, negotiates your rate, handles the contract, chases the invoice, and takes a commission from what you earn.</p>
<p>That single fact explains almost everything else. An agency only makes money when you make money, which is why a real one will not charge you to join, and why it will not sign you unless it believes it can sell you to its existing clients. Being told "no" usually means "we cannot currently sell your look to the brands we work with", not "you are not attractive".</p>

<h2>The Boards: Where You Actually Fit</h2>
<p>Sydney agencies divide their talent into boards, and the board decides everything about how you will be marketed.</p>
<h3>Fashion and runway</h3>
<p>The most restrictive board. Women generally from around 175cm, men from around 183cm, with the strict range driven by sample sizing rather than taste. This is the board that feeds Australian Fashion Week, editorial and designer campaigns.</p>
<h3>Commercial</h3>
<p>The largest board by volume and, for most models, the one that pays the bills. Retail catalogues, supermarket campaigns, banking and telco advertising, lifestyle brands. Height requirements are loose to non-existent. What matters is being relatable and castable as a real person.</p>
<h3>Curve and plus</h3>
<p>A genuinely growing board in Australia, driven by retail brands broadening their size ranges. Requirements differ from the fashion board and are worth confirming with each agency directly.</p>
<h3>Parts</h3>
<p>Hands, feet, hair, skin. Specialist, well-paid per hour, and largely invisible as a career path to people outside it. If this interests you, our <a href="../how-to-become-a-hand-model/">hand modelling guide</a> covers what the work involves.</p>
<h3>Talent and classic</h3>
<p>Actors, presenters, character faces, and models over roughly 35. Australian brands cast across every age bracket, and the classic board is chronically under-supplied relative to demand.</p>

<h2>Agencies That Operate in Sydney</h2>
<p>These are long-established agencies with a Sydney presence. This is a starting point for your research, not a ranking — check each agency's own site for current boards, submission requirements and open call times, because these change.</p>
<ul>
<li><b>Chadwick Models</b> — one of Australia's largest, with fashion and commercial boards and international placement.</li>
<li><b>IMG Models Sydney</b> — the Australian arm of a global network, fashion-led.</li>
<li><b>Priscillas Model Management</b> — long-running Sydney agency with women's, men's and youth boards.</li>
<li><b>Viviens Model Management</b> — national agency with offices across several Australian cities.</li>
<li><b>Kult Australia</b> — fashion-focused, with a strong editorial and campaign presence.</li>
<li><b>Chic Management</b> — Sydney fashion agency with a well-known women's board.</li>
<li><b>WINK Models</b> — commercial and talent-led, representing a broad range of ages and looks.</li>
<li><b>Bettina Management</b> — established Sydney agency across fashion and commercial.</li>
<li><b>Scoop Management</b> — Sydney agency with fashion and commercial representation.</li>
</ul>
<p>Working out which of these is right for you is the whole game, and it is worth reading our <a href="../how-to-choose-a-modeling-agency/">guide to choosing between agencies</a> before you submit to all of them at once.</p>

${openCalls}
${submissionSteps}
${redFlags}

<h2>What Sydney Models Actually Earn</h2>
<p>Rates vary enormously by category and client, and anyone quoting you a single number is guessing. What is more useful to understand is the structure: you are quoted a fee for the shoot day, plus a separate usage fee covering where and how long the images run. Usage is frequently worth more than the day rate, and it is the part inexperienced models forget to ask about.</p>
<p>Your agency takes a commission from the total, and in Australia the client is often also charged a separate agency fee on top. None of this comes out of your pocket upfront. If it does, something is wrong.</p>

<h2>Realistic Timelines</h2>
<p>From first submission to first paid booking is commonly months, not weeks. A development board model may spend a season testing and building a book before being put forward for anything. That is normal and not a sign of failure.</p>
<p>What shortens it is arriving prepared: correct digitals, correct stats, the right agencies for your category, and knowing how to behave in a casting. That last one is learnable, and it is most of what separates models who get rebooked from models who get booked once.</p>

<h2>Before You Submit Anywhere</h2>
<p>Get your digitals right, know your category, shortlist the agencies whose boards you genuinely fit, and understand what happens in a casting room before you are standing in one. Our free runway masterclass with Jack Bedwani, who produces Australian Fashion Week, covers the last part in six lessons and costs nothing.</p>
`,
  },

  {
    slug: 'modelling-agencies-melbourne',
    seoTitle: 'Modelling Agencies Melbourne: Insider Guide for 2026',
    description:
      'How modelling agencies in Melbourne actually work: the boards they run, open calls, what to submit, realistic rates, and the fees that signal a scam.',
    headline: 'Modelling Agencies in Melbourne: What Agents Look For',
    category: 'Agencies',
    image: 'how-to-get-signed-by-a-modeling-agency',
    imageAlt: 'A model portfolio open on a desk in a Melbourne agency office',
    readTime: 10,
    date: DATE,
    related: [
      'modelling-agencies-sydney',
      'modelling-agencies-brisbane',
      'modelling-agencies-australia',
    ],
    faq: [
      ...auFaqCommon('Melbourne'),
      {
        q: 'Is Melbourne a good city to start modelling in?',
        a: 'Yes. Melbourne has a substantial commercial and retail client base, a strong fashion culture, and several long-established agencies. It is a less crowded starting market than Sydney for new faces, and many Australian models are represented in both cities.',
      },
    ],
    body: `
<p>Melbourne runs a real modelling market with its own character. It is retail and commercial heavy, it has a genuine fashion culture of its own, and for a new face it is often a less crowded room than Sydney.</p>
<p>This guide is written from the agency side. Our instructors at Online Model Academy are working casting directors, agents and producers, and this is what they would tell you before you sent a single submission.</p>

<h2>How the Melbourne Market Differs</h2>
<p>Melbourne's client base leans commercial: national retail, department stores, lifestyle brands, catalogue and campaign work. That shapes what agencies sign for. A look that is too editorial for Melbourne's commercial clients may be exactly right in Sydney, and the reverse happens just as often.</p>
<p>It also means the commercial board is where most of the earning happens. If you are relatable, castable and can take direction, you can build a working career here without ever being 178cm.</p>

<h2>The Boards</h2>
<h3>Fashion</h3>
<p>Women generally from around 175cm, men from around 183cm. Feeds editorial, designer campaigns and runway including Melbourne Fashion Week and Melbourne Fashion Festival.</p>
<h3>Commercial</h3>
<p>The largest and busiest board. Retail, advertising, lifestyle. Height is largely irrelevant; being convincing as a real person is not.</p>
<h3>Curve and plus</h3>
<p>Driven by Australian retail brands expanding size ranges. Growing, and worth approaching directly.</p>
<h3>Kids and youth</h3>
<p>Melbourne has an active children's market. If you are a parent looking into this, read our <a href="../how-to-become-a-child-model/">parent's guide to child modelling</a> and our guide to <a href="../child-modeling-agencies/">child modelling agencies</a> before you contact anyone, because this is the corner of the industry with the most predatory operators.</p>
<h3>Classic and talent</h3>
<p>Models over roughly 35, plus actors and presenters. Consistently in demand and consistently under-supplied.</p>

<h2>Agencies That Operate in Melbourne</h2>
<p>Established agencies with a Melbourne presence. Treat this as a research list rather than a ranking, and confirm current boards and submission requirements on each agency's own site.</p>
<ul>
<li><b>Chadwick Models</b> — national agency with a Melbourne office, fashion and commercial.</li>
<li><b>Viviens Model Management</b> — long-established, multiple Australian cities.</li>
<li><b>Kult Australia</b> — fashion-led with a Melbourne presence.</li>
<li><b>Pride Models</b> — Melbourne agency with fashion, commercial and youth boards.</li>
<li><b>Scene Model Management</b> — represents across fashion and commercial.</li>
<li><b>London Management Group</b> — Melbourne-based talent and model representation.</li>
<li><b>FRM Model Management</b> — Melbourne agency with fashion and commercial boards.</li>
<li><b>Giant Management</b> — Melbourne agency representing models and talent.</li>
</ul>

${openCalls}
${submissionSteps}
${redFlags}

<h2>What to Do This Week</h2>
<p>Shoot your digitals properly, write down your measurements in centimetres, shortlist three or four Melbourne agencies whose boards you actually fit, and submit exactly what each one asks for. Then learn what happens in the casting room, because that is where signed models either get rebooked or quietly disappear. Our free runway module covers it, taught by the producer who casts Australian Fashion Week.</p>
`,
  },

  {
    slug: 'modelling-agencies-brisbane',
    seoTitle: 'Modelling Agencies Brisbane: The Honest 2026 Guide',
    description:
      'Modelling agencies in Brisbane explained by industry insiders: boards, open calls, submissions, what the Queensland market books, and scams to avoid.',
    headline: 'Modelling Agencies in Brisbane: An Insider Guide',
    category: 'Agencies',
    image: 'how-to-choose-a-modeling-agency',
    imageAlt: 'A model being measured and photographed at an agency open call',
    readTime: 10,
    date: DATE,
    related: [
      'modelling-agencies-australia',
      'modelling-agencies-perth',
      'modelling-agencies-sydney',
    ],
    faq: [
      ...auFaqCommon('Brisbane'),
      {
        q: 'Is there enough modelling work in Brisbane to build a career?',
        a: 'Brisbane supports a real commercial market — retail, tourism, lifestyle, swimwear and resort work in particular, helped by Queensland light and locations. Many Brisbane-based models also hold representation in Sydney or Melbourne and travel for larger campaigns, which is a common and workable arrangement.',
      },
    ],
    body: `
<p>Brisbane is smaller than Sydney and Melbourne, and that cuts both ways. There are fewer bookings, but there are also far fewer models chasing them, and Queensland has a client base the southern markets do not: tourism, resort, swimwear and outdoor lifestyle.</p>
<p>This guide comes from the people who cast and book. Here is what the Brisbane market actually looks like from the agency side.</p>

<h2>What Queensland Clients Book</h2>
<p>The Brisbane market skews commercial and lifestyle. Retail and catalogue, tourism campaigns for Queensland destinations, swimwear and resort, fitness and outdoor brands, plus a steady base of local advertising.</p>
<p>Practically, that means a healthy, outdoorsy, relatable look travels a long way here — and that fitness modelling is more viable in this market than in most. Our <a href="../how-to-become-a-fitness-model/">fitness modelling guide</a> covers what those clients actually want to see.</p>

<h2>The Boards</h2>
<ul>
<li><b>Fashion</b> — smaller than the southern markets. Women generally from around 175cm, men from around 183cm.</li>
<li><b>Commercial</b> — the main board and the main earner. Retail, advertising, tourism.</li>
<li><b>Swim and resort</b> — genuinely a Queensland speciality, with clients that southern agencies do not have.</li>
<li><b>Kids and family</b> — active, and requiring the same caution as anywhere. See our <a href="../child-modeling-agencies/">child modelling agency guide</a>.</li>
<li><b>Talent and classic</b> — presenters, actors, and models across older age brackets.</li>
</ul>

<h2>Agencies That Operate in Brisbane</h2>
<p>Established agencies with a Brisbane or South East Queensland presence. Confirm current details directly with each agency.</p>
<ul>
<li><b>Dallys Models</b> — long-running Brisbane agency across fashion and commercial.</li>
<li><b>Que Models</b> — Brisbane agency with fashion and commercial boards.</li>
<li><b>Viviens Model Management</b> — national agency with a Queensland presence.</li>
<li><b>Mystique Model Management</b> — Queensland-based representation.</li>
<li><b>Bond Models</b> — Gold Coast and South East Queensland.</li>
<li><b>Chadwick Models</b> — national agency, places Queensland talent nationally.</li>
</ul>
<p>Because the Brisbane market is smaller, dual representation is common: signed in Brisbane, also on a Sydney or Melbourne board for bigger campaigns. Check your contract's exclusivity and territory clauses before assuming you can do this — our <a href="../how-to-choose-a-modeling-agency/">agency selection guide</a> explains which clauses matter.</p>

${openCalls}
${submissionSteps}
${redFlags}

<h2>Start Here</h2>
<p>Get your digitals right, be honest about your category, and approach the agencies whose clients actually book your look. Then learn the casting-room craft — it is the difference between one booking and a career. Our free runway masterclass covers it, taught by a working fashion week producer, at no cost.</p>
`,
  },

  {
    slug: 'modelling-agencies-perth',
    seoTitle: 'Modelling Agencies Perth: What Agents Actually Want',
    description:
      'A practical guide to modelling agencies in Perth: which boards exist, how to submit, what WA clients book, realistic expectations, and red flags.',
    headline: 'Modelling Agencies in Perth: How to Get Signed in WA',
    category: 'Agencies',
    image: 'how-to-get-signed-by-a-modeling-agency',
    imageAlt: 'A model reviewing digitals with an agent before submitting to agencies',
    readTime: 9,
    date: DATE,
    related: [
      'modelling-agencies-australia',
      'modelling-agencies-melbourne',
      'modelling-agencies-brisbane',
    ],
    faq: [
      ...auFaqCommon('Perth'),
      {
        q: 'Can you build a modelling career based in Perth?',
        a: 'Yes, though most working Perth models combine local commercial bookings with representation on the east coast or overseas. Western Australia has a steady retail, mining-sector corporate and lifestyle client base, and Perth agencies are used to placing talent interstate for larger campaigns.',
      },
    ],
    body: `
<p>Perth is the most isolated major modelling market in Australia, and that shapes everything about how it works. The local client base is real but finite, competition is lighter than the east coast, and most working models here eventually hold representation in more than one city.</p>

<h2>What the WA Market Books</h2>
<p>Perth's bread and butter is commercial: retail and catalogue, corporate and resources-sector campaigns, lifestyle, tourism, and local advertising. Editorial and high fashion work exists but is thin compared with Sydney and Melbourne.</p>
<p>The practical consequence is that the commercial board is where a Perth career is built. Height matters far less than being castable, professional, and easy to work with on the day.</p>

<h2>The Boards</h2>
<ul>
<li><b>Commercial</b> — the core of the market. Retail, corporate, lifestyle, advertising.</li>
<li><b>Fashion</b> — smaller. Women generally from around 175cm, men from around 183cm.</li>
<li><b>Talent</b> — presenters, actors, corporate video and voice.</li>
<li><b>Kids and family</b> — present and active. Read our <a href="../how-to-become-a-child-model/">parent's guide</a> first if this applies to you.</li>
<li><b>Classic</b> — models over roughly 35, consistently in demand for corporate and retail.</li>
</ul>

<h2>Agencies That Operate in Perth</h2>
<p>Established agencies with a Perth presence. Verify current boards and submission requirements on each agency's own site.</p>
<ul>
<li><b>Viviens Model Management</b> — national agency with a Perth office.</li>
<li><b>Chadwick Models</b> — national representation, places WA talent interstate.</li>
<li><b>Scene Model Management</b> — representation across fashion and commercial.</li>
<li><b>Etoile Models</b> — Perth-based agency.</li>
<li><b>Pulse Management</b> — WA model and talent representation.</li>
<li><b>Vivid Talent</b> — Perth talent and model representation.</li>
</ul>

<h2>The Interstate Question</h2>
<p>Sooner or later a Perth-based model asks whether to move east. There is no universal answer, but there is a sensible sequence: build a book and a track record locally first, get comfortable in casting rooms, then approach east coast agencies with evidence rather than potential. Arriving in Sydney with a working portfolio and references is a completely different conversation from arriving with digitals.</p>

${openCalls}
${submissionSteps}
${redFlags}

<h2>Your Next Step</h2>
<p>Shoot clean digitals, get your measurements in centimetres, target the Perth agencies whose commercial clients match your look, and learn what actually happens in a casting before you walk into one. Our free runway module, taught by the producer behind Australian Fashion Week, is the fastest way to do the last part.</p>
`,
  },

  {
    slug: 'modelling-agencies-australia',
    seoTitle: 'Modelling Agencies Australia: The Complete 2026 Guide',
    description:
      'Every major modelling market in Australia explained by insiders: agencies by city, boards, submissions, rates, contracts and the scams to avoid.',
    headline: 'Modelling Agencies in Australia: The Complete Guide',
    category: 'Agencies',
    image: 'how-to-choose-a-modeling-agency',
    imageAlt: 'An agent reviewing model cards across a desk',
    readTime: 12,
    date: DATE,
    related: [
      'modelling-agencies-sydney',
      'modelling-agencies-melbourne',
      'how-to-become-a-model-in-australia',
    ],
    faq: [
      {
        q: 'How many modelling agencies are there in Australia?',
        a: 'There are dozens of legitimate agencies across Sydney, Melbourne, Brisbane, Perth, Adelaide and the Gold Coast, ranging from international networks with Australian offices to small specialist boards. The number matters less than fit: only a handful will represent your specific category in your specific city.',
      },
      {
        q: 'Do Australian modelling agencies charge fees?',
        a: 'No legitimate Australian agency charges you to be represented. They take a commission on work you book, and often charge the client a separate booking fee. Upfront joining fees, compulsory paid photoshoots and portfolio packages are the clearest signal that you are not dealing with a real agency.',
      },
      {
        q: 'What commission do Australian modelling agencies take?',
        a: 'Commission structures vary by agency and by contract, and are typically taken as a percentage of your fee, with a separate fee often charged to the client on top. Ask for the exact figures in writing before signing, and make sure you understand how usage fees are split as well as day rates.',
      },
      {
        q: 'Which Australian city is best for modelling?',
        a: 'Sydney has the largest market and the most fashion work. Melbourne is strong in commercial, retail and its own fashion culture. Brisbane and the Gold Coast are strong for swim, resort and tourism. Perth and Adelaide are smaller commercial markets. The best city is the one whose clients book your category.',
      },
      {
        q: 'Can I sign with an Australian agency if I live overseas?',
        a: 'Agencies do sign international models, usually where there is a clear plan for you to be in the country and available for castings. Some arrange placements through partner agencies abroad. Availability in-market is the practical constraint, not your passport.',
      },
    ],
    body: `
<p>Australia has a small industry by global standards and a surprisingly professional one. It also has a persistent problem with operators who take money from aspiring models and deliver nothing, which is why this guide spends as much time on how to spot those as on how to approach the real ones.</p>
<p>Our instructors at Online Model Academy are the agents, casting directors and runway producers who work in this industry. This is the national picture as they see it.</p>

<h2>How Australian Representation Works</h2>
<p>An agency represents you to clients, negotiates your fee, handles the contract and the invoice, and takes a commission. It does not train you, photograph you, or charge you for the privilege of being on its books. Every legitimate agency in the country works this way.</p>
<p>That model has a consequence worth internalising: an agency signs you because it believes it can sell you to clients it already has. A rejection is a statement about their current board and client list, not a verdict on you. Models are routinely turned down by an agency and signed by the same agency eighteen months later.</p>

<h2>The Markets, City by City</h2>
<h3>Sydney</h3>
<p>The largest market. Most fashion and editorial work, Australian Fashion Week, the biggest agency rosters, and the most competition. See our <a href="../modelling-agencies-sydney/">Sydney agency guide</a>.</p>
<h3>Melbourne</h3>
<p>Strong commercial and retail base with a distinct fashion culture. Often a less crowded entry point for new faces. See our <a href="../modelling-agencies-melbourne/">Melbourne agency guide</a>.</p>
<h3>Brisbane and the Gold Coast</h3>
<p>Commercial, tourism, swim and resort. Queensland clients that the southern markets simply do not have. See our <a href="../modelling-agencies-brisbane/">Brisbane agency guide</a>.</p>
<h3>Perth</h3>
<p>Commercial, corporate and resources-sector work. Isolated, less competitive, and most careers eventually involve east coast representation too. See our <a href="../modelling-agencies-perth/">Perth agency guide</a>.</p>
<h3>Adelaide</h3>
<p>The smallest of the mainland markets, primarily commercial and retail, with several small agencies and frequent interstate placement for larger jobs.</p>

<h2>Which Board You Belong On</h2>
<p>This is the single most useful thing to work out before you contact anyone.</p>
<ul>
<li><b>Fashion and runway</b> — women generally from around 175cm, men from around 183cm. Sample sizing drives the requirement.</li>
<li><b>Commercial</b> — the biggest board nationally and where most Australian models earn most of their money. No meaningful height requirement.</li>
<li><b>Curve and plus</b> — growing with Australian retail size ranges.</li>
<li><b>Parts</b> — hands, feet, hair, skin. Specialist and well paid per hour.</li>
<li><b>Kids and youth</b> — active nationally, and the segment where caution matters most.</li>
<li><b>Classic and talent</b> — over roughly 35, plus presenters and actors. Under-supplied.</li>
</ul>
<p>Applying to a fashion board with a commercial look wastes everyone's time, including yours. Our guide to <a href="../how-to-become-a-model/">becoming a model</a> works through how to identify your category honestly.</p>

<h2>How Money Actually Works Here</h2>
<p>Australian bookings are usually quoted as a day rate plus a separate usage fee covering where the images run and for how long. Usage is often the larger number and is the part new models forget to ask about. Your agency deducts commission, and generally charges the client a booking fee on top.</p>
<p>You should never be out of pocket to be represented. Your genuine early costs are casting travel, basic grooming, and any training you choose to do. We break the real numbers down in <a href="../how-much-does-it-cost-to-become-a-model/">what it costs to become a model</a>.</p>

${submissionSteps}
${redFlags}

<h2>Contracts: The Clauses That Matter</h2>
<ul>
<li><b>Term and exclusivity.</b> How long, and whether you can be represented elsewhere or in other states.</li>
<li><b>Territory.</b> Whether the agency's rights cover Australia only, or extend overseas.</li>
<li><b>Commission.</b> The exact percentage, and how it applies to usage as well as day rate.</li>
<li><b>Deductions.</b> What the agency can charge back to you, and whether you must approve it first.</li>
<li><b>Termination.</b> How either side ends the agreement, and the notice required.</li>
</ul>
<p>Take the contract away and read it. A real agency expects you to. Our <a href="../how-to-choose-a-modeling-agency/">guide to choosing an agency</a> goes deeper on each of these.</p>

<h2>What Actually Gets You Signed</h2>
<p>Clean digitals, accurate stats, the right agency for your category, and evidence that you will be easy to work with. Nothing on that list requires money.</p>
<p>What happens after you are signed is a different skill set: how you walk, how you take direction, how you behave when a casting runs three hours late. That is what our mentors teach, and the free runway masterclass with Jack Bedwani — who produces Australian Fashion Week — is six lessons of it at no cost.</p>
`,
  },
];
