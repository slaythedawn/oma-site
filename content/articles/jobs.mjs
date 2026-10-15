// Jobs and castings cluster. High traffic-potential US terms with heavy scam
// exposure, so the safety framing is doing real work here, not decoration.

const DATE = '2026-08-19';

const scamSection = `
<h2>How to Tell a Real Job From a Scam</h2>
<p>Modeling attracts a specific kind of fraud because the aspiration is strong and the industry looks opaque from outside. The patterns repeat.</p>
<ul>
<li><b>You are asked to pay.</b> For registration, for a portfolio, for a "screen test", for a place on a database. Real jobs pay you.</li>
<li><b>You are paid before you work</b>, especially by cheque or transfer with a request to forward part of it on. That is a laundering or overpayment scam and the money will be reversed.</li>
<li><b>The casting is at a private address or hotel room.</b> Legitimate castings happen at studios, agency offices or production spaces.</li>
<li><b>You are told to come alone.</b> You may always bring someone. Anyone who objects has disqualified themselves.</li>
<li><b>Nudity or lingerie appears late.</b> Any such requirement must be disclosed up front, in writing, with usage terms agreed before you arrive.</li>
<li><b>No written booking details.</b> A real job has a call sheet: date, times, location, rate, usage, client, contact.</li>
<li><b>Urgency and secrecy.</b> "Confirm within the hour" or "don't discuss this with your agent" are both control tactics.</li>
</ul>
<p>Tell someone where you are going and when you expect to be finished, every time. Experienced models do this routinely and it is not paranoia.</p>
`;

export const jobs = [
  {
    slug: 'modeling-jobs',
    seoTitle: 'Modeling Jobs: Where They Come From and What They Pay',
    description:
      'Where modeling jobs actually come from, the categories that book most often, how rates and usage work, and how to spot the scams. From working bookers.',
    headline: 'Modeling Jobs: Where the Work Actually Comes From',
    category: 'Castings',
    image: 'model-casting-calls',
    imageAlt: 'Models waiting to be seen at a commercial casting',
    readTime: 11,
    date: DATE,
    related: [
      'open-casting-call',
      'how-much-do-models-make',
      'what-is-commercial-modeling',
    ],
    faq: [
      {
        q: 'How do I find modeling jobs?',
        a: 'Most paid modeling work is booked through agencies rather than found directly. Get representation with an agency that serves your category, and they submit you to clients. Freelance and direct-booked work exists in commercial, fit and promotional modeling, but requires you to handle contracts, rates and safety yourself.',
      },
      {
        q: 'What modeling jobs pay the most?',
        a: 'National advertising campaigns with broad usage typically pay most, because the usage fee — covering where and how long images run — often exceeds the day rate. Fit modeling and parts modeling are also well paid per hour and far more consistent than editorial, which pays little and functions mainly as profile building.',
      },
      {
        q: 'Can you get modeling jobs without an agency?',
        a: 'Yes, particularly in commercial, catalogue, promotional and fit modeling. It means negotiating your own rates, checking your own contracts, chasing your own invoices and managing your own safety. Many freelance models eventually seek representation because those tasks scale badly.',
      },
      {
        q: 'How much do models get paid per job?',
        a: 'Rates vary widely by market, client and usage, so a single number is meaningless. What matters is the structure: a day or session rate for your time, plus a usage fee based on where the images run and for how long. Always confirm both before accepting.',
      },
      {
        q: 'Are online modeling job sites legitimate?',
        a: 'Some casting platforms are used by real productions, but the category attracts a lot of fraud. Never pay to apply for work, never accept a job with no written call sheet, and be wary of any listing where the client cannot be identified. If a platform charges you rather than the client, be sceptical.',
      },
    ],
    body: `
<p>The question behind "modeling jobs" is usually a practical one: where does the work actually come from, and how do I get some of it? The answer is less mysterious than it looks from outside, and it starts with an uncomfortable fact.</p>
<p><b>Most paid modeling work is never advertised.</b> A client briefs an agency, the agency submits models it already represents, the client picks from that. There is no job board involved at any point. That is why representation matters so much, and why the search for "modeling jobs" so often leads people to the least legitimate corners of the industry.</p>

<h2>The Categories That Actually Book</h2>
<h3>Commercial and advertising</h3>
<p>The biggest source of paid work by a wide margin. Retail, banking, telco, supermarkets, healthcare, travel. Clients are casting believable people, so height requirements are loose to non-existent and age range is wide. For most working models, this is where the income is.</p>
<h3>Catalogue and e-commerce</h3>
<p>High volume, repeat bookings, unglamorous and reliable. Brands shoot new ranges constantly. A model who is efficient, consistent and easy on set gets rebooked here indefinitely. Our <a href="../ecommerce-modeling/">guide to ecommerce modeling</a> covers this specific lane in more depth, including what separates it from a printed catalogue or a campaign shoot. A growing share of this work is booked with no agency at all, straight from the brand itself; our guide to <a href="../how-to-become-a-model-for-clothing-brands/">modeling for a clothing brand directly</a> covers that route and a real scam pattern to watch for.</p>
<h3>Fit modeling</h3>
<p>The most under-discussed well-paid work in the industry. Brands need someone with stable, specific measurements to fit garments during development. It is regular, hourly-paid, long-term, and almost invisible from outside because there are no published images. Our <a href="../how-to-become-a-fit-model/">fit modeling guide</a> covers what the job actually involves and how to get booked.</p>
<h3>Parts modeling</h3>
<p>Hands, feet, hair, skin. Specialist, well paid per hour, and a genuine career for people who would never be cast on a fashion board. Our <a href="../how-to-become-a-hand-model/">hand modeling guide</a> covers what those clients look for.</p>
<h3>Runway</h3>
<p>Prestigious, seasonal, and a smaller share of income than most people assume. Fashion week work builds profile that feeds campaign bookings — which is where the money is. Our guide to <a href="../how-do-models-walk-in-runway-shows/">how models walk in runway shows</a> covers the craft.</p>
<h3>Editorial</h3>
<p>Magazine work pays notably little. It exists to build your book and your standing, which then converts into commercial rates. Treat it as investment, not income.</p>
<h3>Promotional and event</h3>
<p>Brand ambassador work, trade shows, activations. Frequently booked direct, frequently the entry point for freelancers, and correspondingly the category where scam listings cluster. Our <a href="../promotional-modeling/">guide to promotional modeling</a> covers what trade show and convention bookings actually pay and how to tell a real one from a vague listing.</p>
<h3>Social and UGC content</h3>
<p>Content built for a brand's own feed or ad account rather than a set-based shoot, often filmed by the model alone on a phone. Paid per finished piece rather than a day rate, and open to models with no following at all. Our <a href="../how-to-become-a-ugc-model/">UGC modeling guide</a> covers what actually gets booked and how the pay works.</p>

<aside class="inline-cta">
  <div class="k">Free module</div>
  <h3>The runway masterclass, free</h3>
  <p>Five lessons from the course, taught by a working runway producer. The same material our paying students get, yours to keep.</p>
  <a class="go" data-cta="inline-free" href="https://www.onlinemodel.academy/offers/ZbJFXeGn?utm_source=blog&utm_medium=article&utm_campaign=free_runway_module&utm_content=modeling-jobs__inline" target="_blank" rel="noopener">Get the free module &rarr;</a>
</aside>

<h2>How the Money Works</h2>
<p>This is the part almost every new model gets wrong, and it costs them real money.</p>
<p>A booking has two components:</p>
<ul>
<li><b>The day or session rate</b> — payment for your time on set.</li>
<li><b>The usage fee</b> — payment for where the images are used, in which territories, on which media, and for how long.</li>
</ul>
<p>Usage is frequently the larger number. A single day's shoot licensed for a two-year national campaign is a completely different job from the same day licensed for one month of social media, even though you did identical work.</p>
<p>So the question to ask before accepting anything is never just "what does it pay". It is <b>"what's the rate, and what's the usage?"</b> A client offering a generous day rate with unlimited perpetual worldwide usage is not being generous.</p>
<p>Once the booking is confirmed, how the money actually reaches you, and when, is its own question. Our <a href="../how-to-get-paid-as-a-model/">guide to how models actually get paid</a> covers agency-collected versus direct billing, net terms, and what to do if a client goes quiet.</p>
<p>Your agency deducts commission from the total, and typically charges the client a separate booking fee. None of that comes out of your pocket in advance. Our guide to <a href="../how-much-does-it-cost-to-become-a-model/">what modeling actually costs</a> covers the money flow in full.</p>

<h2>How to Actually Get Booked</h2>
<h3>Through an agency (most work)</h3>
<p>Get signed with an agency that serves your category and market. They submit you; you attend castings; you book. Our guides to <a href="../how-to-get-signed-by-a-modeling-agency/">getting signed</a> and <a href="../what-do-modeling-agencies-look-for/">what agencies look for</a> cover the route in.</p>
<h3>Direct and freelance (some work)</h3>
<p>Commercial, promotional and fit work is often booked direct. It is legitimate and can pay well. It also means you negotiate, you check the contract, you invoice, you chase payment, and you manage your own safety. Our <a href="../how-to-become-a-freelance-model/">freelance modeling guide</a> covers doing that properly.</p>
<h3>Open calls</h3>
<p>Some productions and agencies run genuine open calls. Our <a href="../open-casting-call/">open casting call guide</a> covers how to work them, and <a href="../what-does-a-casting-director-do/">what a casting director does</a> explains who runs the room.</p>

${scamSection}

<h2>What Keeps You Booked</h2>
<p>Getting the first job is a matter of look and timing. Getting the tenth is a matter of behaviour, and this is what bookers actually talk about among themselves:</p>
<ul>
<li>Early, not on time.</li>
<li>Takes direction without argument, and adjusts fast.</li>
<li>Holds up through long days without visible complaint.</li>
<li>Comes prepared — nails clean, hair as briefed, own basics in the bag.</li>
<li>Pleasant to the whole crew, not just the client.</li>
</ul>
<p>None of that is glamorous, and all of it is why some models work constantly while equally photogenic ones do not. It is also learnable, which is the point of our course. The free runway masterclass with Jack Bedwani, who choreographs shows for Calvin Klein, Coach and Charlotte Tilbury, is five lessons of it at no cost.</p>
`,
  },

  {
    slug: 'open-casting-call',
    seoTitle: 'Open Casting Call: What to Expect and How to Prepare',
    description:
      'What happens at an open casting call, what to bring, what to wear, how you are actually assessed, and the safety rules that matter. From casting directors.',
    headline: 'Open Casting Calls: What Really Happens in the Room',
    category: 'Castings',
    image: 'model-casting-calls',
    imageAlt: 'Models lined up waiting at an open casting call',
    readTime: 10,
    date: DATE,
    related: [
      'model-casting-calls',
      'modeling-jobs',
      'what-do-modeling-agencies-look-for',
    ],
    faq: [
      {
        q: 'What is an open casting call?',
        a: 'An open casting call is a session where an agency or production sees people without appointments or prior representation. Agency open calls assess potential new faces for their board; production open calls cast a specific job. Both are legitimate routes in, and both are short and high-volume by design.',
      },
      {
        q: 'What should I bring to an open casting call?',
        a: 'Your digitals — four to six unretouched phone photos in daylight — your measurements written down, a comp card if you have one, heels if you are a woman on a fashion or commercial board, and a pen. Bring water and expect to wait.',
      },
      {
        q: 'What should I wear to an open casting call?',
        a: 'Fitted, plain clothing that shows your shape honestly: skinny jeans or leggings with a plain fitted top is the industry default. Minimal makeup, hair down and natural, clean nails. Casting directors need to see you, not your styling.',
      },
      {
        q: 'How long does an open casting call take?',
        a: 'Your time in front of the panel is usually two to five minutes. The waiting beforehand can be several hours, because open calls are deliberately high volume. Arrive early, bring something to occupy yourself, and do not treat the short interaction as a bad sign.',
      },
      {
        q: 'Are open casting calls legitimate?',
        a: 'Agency and production open calls are a normal part of the industry. What is not normal is being charged to attend, being asked to come to a private residence or hotel room, being told to come alone, or facing unannounced nudity or lingerie requirements. Any of those means leave.',
      },
    ],
    body: `
<p>Open casting calls are the most accessible route into modeling and the most widely misunderstood. People arrive expecting an audition and get something closer to a measurement queue, then read the brevity as rejection.</p>
<p>Here is what is actually happening, from the people running the room.</p>

<h2>Two Different Things Called the Same Name</h2>
<h3>Agency open calls</h3>
<p>An agency setting aside time — often weekly or monthly — to see unrepresented people who might belong on their board. They are assessing potential, not casting a specific job. A yes means they want to talk about representation.</p>
<h3>Production open calls</h3>
<p>A specific production casting a specific role, often when they want a face they will not find on existing agency boards. These are advertised, time-limited, and assessing you against a defined brief.</p>
<p>The preparation is nearly identical. The mindset differs slightly: at an agency call you are presenting yourself; at a production call you are presenting yourself against a brief you should have read.</p>

<h2>What Actually Happens</h2>
<p>You arrive. You wait, often for a long time. You fill in a form with your details and measurements. When called, you go in front of one to three people.</p>
<p>Then, typically: they look at you, they may measure you, they photograph you against a plain wall — front, side, sometimes full-length — they ask a few questions, and they say they will be in touch.</p>
<p><b>Two to five minutes.</b> That is the format working correctly. It is not a bad sign, and reading it as one is the single most common mistake people make.</p>

<h2>How You Are Actually Being Assessed</h2>
<p>Less on conversation than people assume, and more on things you may not realise are being observed.</p>
<ul>
<li><b>Do you match a gap?</b> The dominant factor and entirely outside your control. An agency with four similar new faces needs a fifth less than it needs something it lacks.</li>
<li><b>Do you photograph well unstyled?</b> The wall photo is the real test — no lighting, no makeup, no help.</li>
<li><b>Are your measurements what you said?</b> They will check. A discrepancy is a professionalism signal, not a measurement one.</li>
<li><b>How do you carry yourself?</b> Walking in, standing still, being looked at without fidgeting. It reads instantly on camera.</li>
<li><b>Are you easy?</b> Prompt, prepared, pleasant to the person on the door. Bookers ask that person afterwards more often than anyone expects.</li>
</ul>
<p>Our guide to <a href="../what-do-modeling-agencies-look-for/">what agencies look for</a> goes deeper on the criteria behind the decision, and <a href="../what-does-a-casting-director-do/">what a casting director does</a> explains who is on the other side of the table.</p>

<aside class="inline-cta">
  <div class="k">Free module</div>
  <h3>The runway masterclass, free</h3>
  <p>Five lessons from the course, taught by a working runway producer. The same material our paying students get, yours to keep.</p>
  <a class="go" data-cta="inline-free" href="https://www.onlinemodel.academy/offers/ZbJFXeGn?utm_source=blog&utm_medium=article&utm_campaign=free_runway_module&utm_content=open-casting-call__inline" target="_blank" rel="noopener">Get the free module &rarr;</a>
</aside>

<h2>What to Bring and Wear</h2>
<h3>Bring</h3>
<ul>
<li>Digitals — four to six unretouched phone photos, daylight, plain wall. Printed and on your phone.</li>
<li>Your measurements, written down, in the units of that market.</li>
<li>A <a href="../model-comp-card/">comp card</a> if you have one.</li>
<li>Heels, if you are a woman on a fashion or commercial board.</li>
<li>Water, a snack, a pen, and something to occupy a long wait.</li>
</ul>
<h3>Wear</h3>
<ul>
<li>Fitted, plain clothing — skinny jeans or leggings, plain fitted top. No busy patterns, no logos, no layers hiding your shape.</li>
<li>Minimal makeup. Hair down and natural.</li>
<li>Clean, natural nails.</li>
<li>Nothing you have to keep adjusting.</li>
</ul>
<p>The principle behind all of it: the room needs to see you accurately. Anything decorative gets in the way.</p>

<h2>The Waiting</h2>
<p>Open calls run long. Arriving early is worth it — panels are sharper in the first hours, and being seen before decision fatigue sets in is a genuine, if unfair, advantage.</p>
<p>How you behave in the queue is visible. Staff notice who is pleasant and who is not, and that reaches the panel more often than people realise.</p>

<h2>Safety: The Non-Negotiables</h2>
<p>Open calls are normal industry practice. Some things that get labelled open calls are not.</p>
<ul>
<li><b>Never pay to attend.</b> Not a registration fee, not an administration fee, not anything.</li>
<li><b>Never attend at a private residence or hotel room.</b> Studios, agency offices, production spaces only.</li>
<li><b>Always tell someone</b> where you are and when you expect to be done.</li>
<li><b>You may always bring someone.</b> Any objection ends it.</li>
<li><b>Nudity or lingerie must be disclosed in advance</b>, in writing, with usage agreed. Sprung on the day, leave.</li>
<li><b>Verify the caller.</b> If an approach came by DM, confirm through the agency's official published contact details before going anywhere.</li>
</ul>
<p>If you are a parent, everything in our <a href="../child-modeling-agencies/">child modeling agencies guide</a> applies here with more force, and you should be present throughout.</p>

<h2>Afterwards</h2>
<p>Most open calls end in silence, and silence is the normal outcome rather than a personal verdict. Boards fill, briefs are narrow, and timing decides more than anything you did in the room.</p>
<p>Do not chase. One polite follow-up is fine; repeated contact works against you. Go to the next one. Models who get signed are routinely people who attended several open calls over a year or more, including at agencies that had already passed on them.</p>
<p>What you can improve between now and the next one is how you present in the room. That is craft, it is learnable, and our free runway masterclass — five lessons from a working fashion week producer — is the fastest way to pick it up at no cost.</p>
`,
  },
  {
    slug: 'what-does-a-casting-director-do',
    seoTitle: 'What Does a Casting Director Do? A Model\'s Guide',
    description:
      'What a casting director actually does on a modeling job, how they choose who gets booked, and how to work with one. Written from the casting side of the room.',
    headline: 'What Does a Casting Director Do? The Model\'s Guide',
    category: 'Castings',
    image: 'model-casting-calls',
    imageAlt: 'Models waiting in line to be seen by a casting team',
    readTime: 9,
    date: '2026-10-15',
    related: [
      'open-casting-call',
      'model-casting-calls',
      'what-do-modeling-agencies-look-for',
    ],
    faq: [
      {
        q: 'What does a casting director do?',
        a: 'A casting director finds and shortlists the people who could fill the roles on a job, runs the casting, and presents the best options to the client or creative team who make the final call. For modeling, that means turning a brief into a pool of candidates, seeing them, and recommending.',
      },
      {
        q: 'Does the casting director make the final decision?',
        a: 'Usually not alone. The casting director narrows the field and gives a recommendation, and the client, designer, photographer or creative director chooses. On some jobs the casting director has real sway; on others they are mainly an organiser. Either way, they control who gets in front of the decision makers.',
      },
      {
        q: 'How is a casting director different from a booker?',
        a: 'A booker works for the agency and represents models, pitching them for jobs and handling the logistics. A casting director works for the client or production and is trying to fill a brief. Bookers submit models; casting directors choose who to see.',
      },
      {
        q: 'Can a model contact a casting director directly?',
        a: 'It is possible, but most casting directors take submissions through agencies because it saves time and filters out unsuitable candidates. If you are unrepresented, look for open calls and published submission instructions, and follow them exactly rather than sending unsolicited messages.',
      },
      {
        q: 'Do casting directors charge models a fee?',
        a: 'No. A casting director is paid by the production or client. Anyone asking you to pay to be seen, to be added to a database or to be considered for a job is not working in the way legitimate casting works.',
      },
    ],
    body: `
<p>Most models spend years walking into rooms run by casting directors without being quite sure what the job is. That gap costs them. If you understand what the person across the table is trying to do, you stop reading short appointments as rejection and start making their day easier.</p>
<p>This guide explains the role from the casting side of the room.</p>

<h2>The Short Answer</h2>
<p>A casting director turns a brief into a person. A client or creative team says what they need: a look, an age range, a feeling, a set of practical requirements. The casting director finds candidates who fit, sees them, and puts the strongest options in front of the people who decide.</p>
<p>They are not the person who owns the job, and they are not your agent. They sit in the middle, and their reputation depends on sending the client people who are right and reliable.</p>

<h2>What the Job Actually Involves</h2>
<h3>Reading the brief</h3>
<p>Everything starts with working out what the client really wants, which is often different from what the written brief says. "Natural and approachable" can mean four very different faces depending on the brand. A good casting director asks questions early so they are not guessing later.</p>
<h3>Building the pool</h3>
<p>They request submissions from agencies, search their own records of people they have seen before, and sometimes scout. Most of the pool comes from agencies, because agency models arrive vetted, with accurate measurements and an adult who will answer the phone.</p>
<h3>Running the casting</h3>
<p>They schedule appointments, manage the room, take photos or video, note measurements, and keep the day on time. For a large job this can mean seeing dozens or hundreds of people in a day, which is why each appointment is short.</p>
<h3>Presenting and recommending</h3>
<p>They assemble the shortlist, usually as photos, short clips and notes, and present it to the client. The client reacts, the list narrows, sometimes there is a callback, and eventually someone is booked.</p>
<h3>Handling the logistics</h3>
<p>Availability, holds, conflicts, fittings and booking confirmation often pass through the casting team too. A model who is hard to schedule or slow to reply makes this harder, and that is remembered.</p>

<h2>Casting Director, Booker, Agent: Who Is Who</h2>
<ul>
<li><b>Booker.</b> Works for your agency. Pitches you, negotiates rates, handles your calendar. Their loyalty is to you and the agency.</li>
<li><b>Casting director.</b> Works for the client or production. Fills a brief. Their loyalty is to the job.</li>
<li><b>Client or creative director.</b> Makes the final choice, usually after seeing the casting director's shortlist.</li>
</ul>
<p>When a booker sends you to a casting, the casting director has asked for people like you. Your booker has agreed you fit. The final yes is a third decision made by someone you may never meet. Our guide to <a href="../what-do-modeling-agencies-look-for/">what agencies look for</a> covers the booker's side of that chain.</p>

<aside class="inline-cta">
  <div class="k">Free module</div>
  <h3>The runway masterclass, free</h3>
  <p>Five lessons from the course, taught by a working runway producer. The same material our paying students get, yours to keep.</p>
  <a class="go" data-cta="inline-free" href="https://www.onlinemodel.academy/offers/ZbJFXeGn?utm_source=blog&utm_medium=article&utm_campaign=free_runway_module&utm_content=what-does-a-casting-director-do__inline" target="_blank" rel="noopener">Get the free module &rarr;</a>
</aside>

<h2>How They Decide Who to Pick</h2>
<p>The honest answer is that most of the decision is made before you walk in, and not by anything you control.</p>
<ul>
<li><b>Fit with the brief.</b> Does the person match what was asked for? This removes most candidates immediately and says nothing about their quality.</li>
<li><b>The unstyled photo.</b> Casting photos are plain on purpose. Casting directors need to see what the client will actually be working with.</li>
<li><b>Reliability signals.</b> On time, prepared, correct measurements, easy to speak to. Clients hate surprises, and the casting director takes the blame for them.</li>
<li><b>Room presence.</b> How you stand, how you handle being looked at, whether you can take direction in a sentence or two.</li>
<li><b>Variety in the shortlist.</b> A casting director often wants to show the client a range of options, so two very similar people can compete for one slot.</li>
</ul>
<p>Notice that very little of that is about being the most beautiful person in the room. It is mostly about being the right, easy and dependable choice.</p>

<h2>What a Casting Director Remembers</h2>
<p>Casting directors work with the same clients and agencies repeatedly, and they keep a mental record of who was good in the room. A professional appointment today can mean a call for a different job a year from now, even if you were not picked this time.</p>
<p>The reverse is true too. Lateness, a poor attitude with the person on the door, or arriving unprepared gets remembered and passed along. This is why the small habits matter more than they seem to.</p>

<h2>How to Work With One</h2>
<ul>
<li><b>Arrive on time with the basics.</b> Digitals, measurements, any requested items, and the right clothes for the brief.</li>
<li><b>Answer the question asked.</b> Short, pleasant, honest. Casting rooms run on tight schedules.</li>
<li><b>Take direction instantly.</b> If asked to turn, walk or change expression, do it without commentary.</li>
<li><b>Be gracious about the outcome.</b> A quiet thank you is plenty. Do not argue, explain or chase.</li>
<li><b>Go through your agency.</b> If you are represented, let your booker handle contact. Going around them causes problems.</li>
</ul>
<p>For the full picture of what happens at the open end of the process, read our guide to <a href="../open-casting-call/">open casting calls</a>, and for the wider map of where castings come from, see <a href="../model-casting-calls/">model casting calls</a>.</p>

<h2>Real Castings Never Charge You</h2>
<p>A casting director is paid by the production. If anyone tells you that you must pay to be seen, to be listed, or to be considered, you are not dealing with a casting in the way the industry works. The same goes for private addresses, being told to come alone, or unannounced requirements to remove clothing. Our <a href="../modeling-jobs/">modeling jobs guide</a> lists the warning signs in full.</p>

<h2>Where to Go From Here</h2>
<p>Once you understand the casting director's job, the short appointments make sense: they are choosing quickly between many fits to a brief, not judging your worth. What you can control is how professionally you present. That is craft, and it can be learned. Our course is taught by working casting directors, runway producers and agents, and the free runway masterclass is the easiest place to start. Start from the <a href="../../">Online Model Academy homepage</a> to see how it all fits together.</p>
`,
  },
];
