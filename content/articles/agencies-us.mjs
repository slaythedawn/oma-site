// US-facing agency cluster. US spelling ("modeling") throughout, because that is
// what the US market searches and these terms are US-volume dominated.

const DATE = '2026-08-19';

const feeWarning = `
<h2>The Only Money Rule That Matters</h2>
<p>A legitimate modeling agency earns a commission on work you book. That is the whole business model, and it is why a real agency has no reason to charge you anything to sign.</p>
<p>Anything that inverts that — an upfront fee, a mandatory shoot with their photographer at your expense, a paid "portfolio package", a fee to appear on their website, a charge for a "screen test" — is a business that makes money from aspiring models rather than from clients. Some of these are outright scams. Others are legal but useless. Neither is representation.</p>
<p>The test is simple: <b>does this company make money when I work, or does it make money whether or not I ever work?</b> We put real numbers to it in <a href="../how-much-does-it-cost-to-become-a-model/">what it actually costs to become a model</a>.</p>
`;

const digitalsBlock = `
<h2>What to Send: Digitals, Not a Photoshoot</h2>
<p>The most common mistake in a first submission is sending too much and sending it too polished. Agencies want to see what you look like, not what a photographer and a retoucher can make you look like.</p>
<ul>
<li><b>Four to six photos</b>, taken on a phone, in daylight, against a plain wall.</li>
<li><b>Front, side, back</b>, one smiling, one neutral. Full-length and a close-up of your face.</li>
<li><b>No makeup, no filters, no retouching.</b> Hair down and natural.</li>
<li><b>Fitted, plain clothing.</b> Jeans and a tank top is the standard. Heels for women if you have them.</li>
<li><b>Your stats:</b> height, bust or chest, waist, hips, dress or suit size, shoe size, hair and eye colour, age.</li>
</ul>
<p>Send precisely what the agency's submission page asks for. Nothing extra. Our guide to <a href="../how-to-make-a-modeling-portfolio/">building a modeling portfolio</a> covers what comes later, once you are signed and testing.</p>
`;

export const agenciesUs = [
  {
    slug: 'modeling-agencies-near-me',
    seoTitle: 'Modeling Agencies Near Me: How to Find a Real One',
    description:
      'How to find legitimate modeling agencies near you, verify they are real, and submit properly — explained by working agents and casting directors.',
    headline: 'Modeling Agencies Near Me: How to Find One That Is Actually Real',
    category: 'Agencies',
    image: 'how-to-choose-a-modeling-agency',
    imageAlt: 'A model researching agencies on a laptop before submitting',
    readTime: 11,
    date: DATE,
    related: [
      'what-do-modeling-agencies-look-for',
      'how-to-start-a-modeling-career',
      'how-to-choose-a-modeling-agency',
    ],
    faq: [
      {
        q: 'How do I find a legitimate modeling agency near me?',
        a: 'Search for agencies in the nearest major market rather than your immediate suburb, then verify each one: look for a real client list and campaigns you can trace, models on the board who visibly work, a commission-based business model, and a physical office. Confirm any scout approach through the agency\'s official website before responding.',
      },
      {
        q: 'Do I need to live in a big city to be signed by a modeling agency?',
        a: 'You need to be able to get to castings in that market reliably. Many models begin with an agency in their nearest major city and travel, and some relocate once they are booking consistently. Agencies care about your practical availability, not your postcode.',
      },
      {
        q: 'Should I pay a modeling agency to represent me?',
        a: 'No. Legitimate agencies make money by taking a commission on work you book. Any request for an upfront fee, a mandatory paid photoshoot, or a portfolio package means the company earns from aspiring models rather than from clients, and is not representation in the sense you want.',
      },
      {
        q: 'What is the difference between a modeling agency and a modeling school?',
        a: 'An agency represents you to paying clients and earns a commission on your bookings. A school sells you training. Both can be legitimate, but they are different products, and a company that sells you training while implying it will represent you is the most common structure behind modeling scams.',
      },
      {
        q: 'Can I submit to multiple modeling agencies at once?',
        a: 'Yes, and you should, as long as you are not yet under an exclusive contract. Submit to agencies whose boards genuinely match your category. Once you are offered representation, read the exclusivity and territory clauses carefully before signing.',
      },
    ],
    body: `
<p>"Modeling agencies near me" is the right instinct and slightly the wrong search. Modeling markets are concentrated in a handful of cities, and the agency that can actually book you may be a two-hour drive away rather than in your suburb. What matters is not proximity — it is whether an agency has clients who book your category, and whether you can get to a casting when they call.</p>
<p>At Online Model Academy our instructors are working agents, casting directors and producers. This is how they would tell you to run the search.</p>

<h2>Start With the Market, Not the Map</h2>
<p>In the US, the concentration of paid modeling work is heavily skewed toward a few markets. New York for fashion and editorial. Los Angeles for commercial, lifestyle and anything touching entertainment. Then a second tier that books serious volume: Miami for swim and resort, Chicago, Atlanta, Dallas, and a set of regional markets with real commercial and catalogue clients.</p>
<p>If you are not near one of those, your realistic route is representation in the nearest one, with the understanding that you will travel for castings. Agencies are entirely used to this. What they will not accept is signing someone who cannot show up.</p>

<h2>How to Verify an Agency Is Real</h2>
<p>This is the part worth being slow and deliberate about. Run every agency you find through the same checks.</p>
<h3>Check the business model</h3>
<p>Does it earn commission on bookings, or does it earn from you? This single question eliminates most bad actors.</p>
<h3>Check the board</h3>
<p>Look at the models they represent. Do those people visibly work? Can you find their campaigns, their editorials, their client credits? An agency whose board is full of people with no traceable bookings is not placing anyone.</p>
<h3>Check the clients</h3>
<p>A working agency can point to brands, campaigns and shows. Vague claims about "major national clients" without a single nameable one is a signal.</p>
<h3>Check the address</h3>
<p>A real agency has an office. A PO box, a residential address, or a company that only ever wants to meet at a hotel are all reasons to stop.</p>
<h3>Check the approach</h3>
<p>Scouts are real and do approach people, in the street and online. But a genuine scout will be happy for you to verify them through the agency's official website or main phone line. Anyone who resists that verification is telling you something.</p>

${feeWarning}

<h2>Which Board You Fit</h2>
<p>Agencies split talent into boards, and applying to the wrong one is the most common reason a perfectly viable person gets rejected everywhere.</p>
<ul>
<li><b>Fashion and runway</b> — women roughly 5'9" to 6'0", men roughly 6'0" to 6'3". The range exists because runway samples are cut to one size.</li>
<li><b>Commercial</b> — the largest board and where most US models earn most of their income. Retail, advertising, lifestyle, pharma. No meaningful height requirement.</li>
<li><b>Curve and plus</b> — a substantial and growing board with its own client base. See our <a href="../plus-size-modeling-agencies/">guide to plus size modeling agencies</a>.</li>
<li><b>Parts</b> — hands, feet, hair, skin. Specialist and lucrative per hour. See our <a href="../how-to-become-a-hand-model/">hand modeling guide</a>.</li>
<li><b>Kids and teens</b> — active nationally and the segment with the most predatory operators. Parents should start with our <a href="../child-modeling-agencies/">child modeling agencies guide</a>.</li>
<li><b>Classic</b> — models over roughly 35. Consistently in demand, consistently under-supplied.</li>
</ul>

<aside class="inline-cta">
  <div class="k">Free module</div>
  <h3>The runway masterclass, free</h3>
  <p>Six lessons from the course, taught by a working runway producer. The same material our paying students get, yours to keep.</p>
  <a class="go" data-cta="inline-free" href="https://www.onlinemodel.academy/offers/ZbJFXeGn?utm_source=blog&utm_medium=article&utm_campaign=free_runway_module&utm_content=modeling-agencies-near-me__inline" target="_blank" rel="noopener">Get the free module &rarr;</a>
</aside>

${digitalsBlock}

<h2>Open Calls Still Work</h2>
<p>Plenty of agencies run open calls, and they remain the most direct route into a room with a booker. Expect it to be short and slightly clinical: measurements, a photo against a wall, a few questions, and "we'll be in touch". That is the format, not a rejection.</p>
<p>Turn up with clean hair, minimal makeup, fitted plain clothes, your digitals and your stats. What decides the outcome is usually whether your look fills a gap on their board this season. Read our guide to <a href="../open-casting-call/">open casting calls</a> for how to handle the room itself.</p>

<h2>"Classes Near Me" Is a Different Search</h2>
<p>A lot of people looking for an agency nearby end up searching for classes nearby instead, and the two lead somewhere very different. An agency represents you and earns commission on your bookings. A local class or school sells you training and earns from your fee whether or not you ever work.</p>
<p>Both can be legitimate, but only one of them can put you in front of a client — and no class or certificate has ever caused an agency to sign anyone, because the industry has no accreditation. If a local business presents itself as both, read our guides to <a href="../modeling-schools/">modeling schools and how the scams work</a> and <a href="../modeling-classes/">judging a class before you pay</a> before handing over anything.</p>

<h2>If There Is Genuinely Nothing Near You</h2>
<p>Some legitimate paths do not require a local agency at all. Freelance commercial and catalogue work exists in most cities, and a lot of it is booked directly — our <a href="../how-to-become-a-freelance-model/">freelance modeling guide</a> covers how that works and where the risks are. Digital submissions to agencies in a target market are also normal now, and many agencies will request a video call before asking you to travel.</p>
<p>What does not work is signing with whoever is nearest regardless of whether they can book you. A bad agency is worse than no agency, because an exclusive contract with a company that never places you can lock up your career for its full term.</p>

<h2>Before You Submit Anywhere</h2>
<p>Get your digitals right, know your category, verify every agency on your list, and understand what happens in a casting room before you are standing in one. Our free runway masterclass — six lessons from a working fashion week producer — covers the last part, and costs nothing.</p>
`,
  },

  {
    slug: 'what-do-modeling-agencies-look-for',
    seoTitle: 'What Do Modeling Agencies Look For? Agents Explain',
    description:
      'What modeling agencies actually look for in new faces, explained by working agents: measurements, look, age, professionalism and what gets you rejected.',
    headline: 'What Do Modeling Agencies Look For? The Answer From Agents',
    category: 'Agencies',
    image: 'how-to-get-signed-by-a-modeling-agency',
    imageAlt: 'An agent assessing a new model at an agency open call',
    readTime: 10,
    date: DATE,
    related: [
      'how-to-get-signed-by-a-modeling-agency',
      'modeling-agencies-near-me',
      'runway-model',
    ],
    faq: [
      {
        q: 'What do modeling agencies look for in a new face?',
        a: 'A look that fills a gap on their current board, measurements that fit the category they would market you in, an age that suits that board, and evidence you will be professional to work with. Agencies are matching you against client demand they already have, not judging attractiveness in the abstract.',
      },
      {
        q: 'What measurements do modeling agencies want?',
        a: 'For fashion boards, women are generally around 5\'9" to 6\'0" with slim proportions and men around 6\'0" to 6\'3", because runway samples are cut to fixed sizes. Commercial, curve, parts and classic boards have no meaningful height requirement. Always send accurate measurements — height, bust or chest, waist, hips, dress or suit size and shoe size.',
      },
      {
        q: 'Why do modeling agencies reject people who look like models?',
        a: 'Usually because the agency already has that look on its board, or has no current client demand for it. Rejection is a statement about their roster and client list at that moment, which is why models are routinely turned down by an agency and signed by the same agency a year or two later.',
      },
      {
        q: 'Does personality matter to modeling agencies?',
        a: 'Substantially. Agents are staking their reputation with clients every time they send you to a job. Being on time, taking direction, handling long days without complaint and being straightforward to communicate with are the traits that get models rebooked, and agents screen for them from the first meeting.',
      },
      {
        q: 'Do I need experience to be signed by a modeling agency?',
        a: 'No. Development and new-face boards exist precisely for people with no experience. Agencies expect none and evaluate raw potential — look, measurements, age and professionalism. Experience is what they build with you after signing.',
      },
    ],
    body: `
<p>Every aspiring model asks a version of the same question: what are they looking for? The honest answer surprises people, because it has less to do with beauty than almost anyone expects.</p>
<p>Our instructors at Online Model Academy are the agents and casting directors who make these decisions. Here is what they are actually assessing when they look at a submission.</p>

<h2>They Are Not Asking "Is This Person Attractive"</h2>
<p>They are asking a commercial question: <b>can I sell this person to the clients I already have?</b></p>
<p>An agency's board is a product range. If it already has four tall blonde new faces and no curve models, the fifth tall blonde is a harder sell than a curve model of equal potential — regardless of who is more conventionally beautiful. This is why rejection so often feels arbitrary and so rarely is.</p>
<p>It also explains a pattern that confuses people: models get turned down by an agency, come back eighteen months later, and get signed. Nothing about them changed. The board did.</p>

<h2>The Four Things Being Assessed</h2>
<h3>1. Category fit</h3>
<p>Before anything else, an agent is working out which board you belong on. Fashion, commercial, curve, parts, kids, classic. If you do not clearly fit one, you are difficult to market, and difficult to market is the single most common reason for a no.</p>
<p>The practical implication: decide your category before you submit, and submit to agencies that run that board. Applying to a fashion-only agency with a commercial look is not ambition, it is a filing error.</p>

<h3>2. Measurements, against that category</h3>
<p>For fashion and runway, the ranges are narrow and not negotiable, because designers cut samples to one size and every model has to fit the same clothes:</p>
<ul>
<li>Women: roughly 5'9" to 6'0", slim proportions, typically scouted between 14 and 22</li>
<li>Men: roughly 6'0" to 6'3", slim to athletic, typically scouted between 16 and 25</li>
</ul>
<p>For every other board, this matters far less or not at all. Commercial clients are casting people who look like their customers. Parts models are cast on hands, not height. Classic boards are cast on age and character.</p>
<p>Send accurate numbers. Agencies remeasure, and a model who arrives three centimetres shorter than claimed has told the agent something about their reliability before anyone has taken a photo.</p>

<h3>3. What you look like unretouched</h3>
<p>This is why agencies ask for digitals rather than a portfolio. They need to see skin, proportion, bone structure and how you photograph without help. A heavily edited submission does not read as professional, it reads as an attempt to hide something — and it guarantees a wasted meeting if they call you in and you look different.</p>
<p>Our guide to <a href="../how-to-become-a-model-with-no-experience/">applying with no experience</a> walks through shooting digitals that actually help you.</p>

<h3>4. Whether you will be a problem</h3>
<p>Underrated, and often decisive. Every time an agent puts you forward, they are lending you their credibility with a client. A model who is late, difficult, or unreliable costs the agency the relationship, not just the booking.</p>
<p>So agents screen hard for it, from the first email. Do you reply promptly and clearly? Did you follow the submission instructions? At an open call, were you polite to the receptionist? None of this is a test in the formal sense, and all of it is being noticed.</p>

<aside class="inline-cta">
  <div class="k">Free module</div>
  <h3>The runway masterclass, free</h3>
  <p>Six lessons from the course, taught by a working runway producer. The same material our paying students get, yours to keep.</p>
  <a class="go" data-cta="inline-free" href="https://www.onlinemodel.academy/offers/ZbJFXeGn?utm_source=blog&utm_medium=article&utm_campaign=free_runway_module&utm_content=what-do-modeling-agencies-look-for__inline" target="_blank" rel="noopener">Get the free module &rarr;</a>
</aside>

<h2>What Gets People Rejected, In Order</h2>
<ol>
<li><b>Wrong agency for the category.</b> The most common and the most avoidable.</li>
<li><b>Submission in the wrong format.</b> Professional photos when digitals were requested, missing stats, files that will not open.</li>
<li><b>Board already covered.</b> Nothing you can do; try again later or elsewhere.</li>
<li><b>Measurements outside the range for the board applied to.</b> Fixable by applying to the right board.</li>
<li><b>Something in the interaction.</b> Slow replies, pushiness, arguing with feedback.</li>
</ol>
<p>Note how few of these are about your face.</p>

<h2>What Agencies Are Not Looking For</h2>
<ul>
<li><b>A professional portfolio.</b> Not at submission stage. They will build one with you.</li>
<li><b>Modeling school certificates.</b> No agency in the world signs on the basis of one.</li>
<li><b>A large Instagram following.</b> Helpful at the margins for commercial and influencer work, irrelevant to whether you can do the job.</li>
<li><b>Experience.</b> New-face boards exist for exactly this reason.</li>
</ul>

${feeWarning}

<h2>What You Can Actually Control</h2>
<p>You cannot control your height, your bone structure, or whether an agency's board happens to need your look this season. You can control your digitals, your accuracy, your targeting, and how you behave in the room.</p>
<p>That last one is where most of the difference lies between models who get booked once and models who build a career. It is learnable, and it is what our mentors teach. The free runway masterclass with Jack Bedwani — who produces Australian Fashion Week — is six lessons of exactly that, at no cost.</p>
`,
  },

  {
    slug: 'plus-size-modeling-agencies',
    seoTitle: 'Plus Size Modeling Agencies: How to Get Signed',
    description:
      'How plus size and curve modeling boards actually work: measurements agencies want, which agencies run curve boards, submissions, rates and red flags.',
    headline: 'Plus Size Modeling Agencies: What Curve Boards Actually Want',
    category: 'Niche',
    image: 'how-to-become-a-successful-model',
    imageAlt: 'A curve model being fitted before a commercial shoot',
    readTime: 10,
    date: DATE,
    related: [
      'what-do-modeling-agencies-look-for',
      'modeling-agencies-near-me',
      'model-portfolio-website',
    ],
    faq: [
      {
        q: 'What size do you have to be for plus size modeling?',
        a: 'Most curve and plus boards work with US sizes 8 to 18, with the heaviest client demand generally between 10 and 16, because that is where retail sample sizing sits. Height expectations are usually similar to the fashion board for high-end curve work and much looser for commercial curve work.',
      },
      {
        q: 'Do plus size models need to be tall?',
        a: 'For high fashion and editorial curve work, agencies generally look for similar height to straight-size fashion boards, around 5\'8" and above. For commercial curve work — retail, catalogue, advertising — height matters very little, and that is where most of the bookings and most of the income sit.',
      },
      {
        q: 'Which agencies have plus size or curve boards?',
        a: 'Most major agencies now run a curve or plus division alongside their straight-size boards, and there are also specialist agencies focused entirely on curve representation. Check each agency\'s site for a curve, plus or "C" board before submitting, since not every agency runs one.',
      },
      {
        q: 'Is plus size modeling well paid?',
        a: 'Rates are set by the client and the usage, not by the board, so a curve model on a national retail campaign is paid on the same structure as anyone else on that campaign. Commercial and retail curve work is steady and volume-driven, which for many models makes it more reliably lucrative than editorial.',
      },
      {
        q: 'Should my digitals be different as a plus size model?',
        a: 'The format is the same — phone photos, daylight, plain wall, no retouching — but fit matters more. Wear clothing that shows your actual shape rather than draping it, since agencies need to assess proportion honestly. Accurate measurements are especially important because curve sizing varies between brands.',
      },
    ],
    body: `
<p>Curve and plus is one of the few genuinely growing segments in modeling, driven by retail brands broadening their size ranges and by advertising that finally casts closer to the actual customer. It is also poorly explained, which leaves a lot of people who would be signable submitting to the wrong boards.</p>
<p>This is how it works from the agency side.</p>

<h2>Curve, Plus, or Neither: The Terminology</h2>
<p>Agencies use "curve" and "plus" fairly interchangeably, though many now prefer curve. What matters practically is that it is a separate board with its own client base, its own measurement expectations, and often its own bookers within the agency.</p>
<p>There is also a sizing gap worth knowing about: models between roughly US 6 and 10 sometimes fall between boards — too large for straight-size sample fittings, not large enough for a curve board built around 12 to 16. This is a real and frustrating gap, and the honest answer is that commercial work is usually the better target if you land in it.</p>

<h2>What Curve Boards Actually Want</h2>
<h3>Measurements</h3>
<p>Broadly, curve boards work from around US size 8 up to 18, with the densest client demand between 10 and 16. That range exists for the same reason the fashion range does: it tracks the sample sizes brands actually produce.</p>
<p>Height splits by the type of work:</p>
<ul>
<li><b>High fashion and editorial curve</b> — generally 5'8" and above, similar to straight-size fashion boards.</li>
<li><b>Commercial curve</b> — retail, catalogue, advertising. Height is largely irrelevant, and this is where the volume of paid work is.</li>
</ul>
<h3>Proportion over size</h3>
<p>Curve bookers pay close attention to proportion and how garments fall, because their clients are selling fit as much as style. Well-proportioned at size 16 is a far easier sell than a measurement set that garments hang awkwardly on at any size.</p>
<h3>Accurate numbers</h3>
<p>Send bust, waist, hips, dress size, and height, measured properly rather than estimated from what you buy. Curve sizing varies enormously between brands, so your actual measurements matter more than your label size.</p>

<aside class="inline-cta">
  <div class="k">Free module</div>
  <h3>The runway masterclass, free</h3>
  <p>Six lessons from the course, taught by a working runway producer. The same material our paying students get, yours to keep.</p>
  <a class="go" data-cta="inline-free" href="https://www.onlinemodel.academy/offers/ZbJFXeGn?utm_source=blog&utm_medium=article&utm_campaign=free_runway_module&utm_content=plus-size-modeling-agencies__inline" target="_blank" rel="noopener">Get the free module &rarr;</a>
</aside>

<h2>How to Submit</h2>
<p>The format is the same as any other board: four to six phone photos in daylight against a plain wall, front, side, back, one smiling, one neutral, no makeup or retouching, plus a close-up.</p>
<p>The one meaningful difference is clothing. Wear something fitted that shows your genuine shape — not oversized or draped. A curve booker cannot assess proportion through a loose dress, and a submission that obscures your shape reads as a submission from someone uncomfortable with it.</p>
<p>Everything else in our guide to <a href="../what-do-modeling-agencies-look-for/">what agencies look for</a> applies unchanged.</p>

<h2>Finding Agencies With a Curve Board</h2>
<p>Not every agency runs one. Before submitting, check the agency's site for a curve, plus, or sometimes "C" division. Most major agencies now have one, and there are specialist agencies representing curve models exclusively.</p>
<p>The verification rules do not change: commission-based, traceable clients, models on the board who visibly work, a real office. Our guide to <a href="../modeling-agencies-near-me/">finding a real agency near you</a> covers the full checklist, and it applies here exactly as it does anywhere else.</p>

${feeWarning}

<h2>The Work Itself</h2>
<p>Commercial and retail dominate: catalogue, e-commerce, national advertising, lifestyle brands, activewear and swim. Editorial curve work exists and is growing, but as with straight-size fashion, editorial pays less than commercial and functions largely as portfolio and profile building.</p>
<p>Fit modeling is a genuinely under-discussed adjacent path. Brands need models with consistent, specific measurements to fit garments during development, and it is steady, well-paid, repeat work that almost nobody outside the industry knows exists.</p>

<h2>Building Your Book</h2>
<p>Once signed, your agency will guide testing to build a portfolio that shows range: clean beauty, commercial lifestyle, something with movement, and at least one shot that shows your shape honestly rather than styled around it. Our guide to <a href="../how-to-make-a-modeling-portfolio/">building a modeling portfolio</a> covers the structure, and the principles are identical across boards.</p>

<h2>Start Here</h2>
<p>Measure yourself accurately, shoot honest digitals in fitted clothing, shortlist agencies that actually run a curve board, and learn how castings work before you are in one. Our free runway masterclass covers the casting-room craft in six lessons, taught by a working fashion week producer, at no cost.</p>
`,
  },
];
