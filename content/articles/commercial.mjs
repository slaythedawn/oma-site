// Commercial-intent cluster. These are the terms someone types when they are
// deciding whether to pay for training, and the site ranked nowhere in the top
// 100 for any of them despite ranking #1 for the much smaller "online" variants.
//
// Parent topics drove the page split: `modeling classes` and `modeling training`
// share a parent, so they are one page. `modeling school` is its own entity and
// carries the scam intent, which is this brand's strongest angle.
//
// US spelling and US-targeted throughout — the equivalent AU commercial demand
// is roughly 30 searches a month in total, so there is nothing to localise.

const DATE = '2026-08-20';

const whatAgenciesThink = `
<h2>What Agencies Actually Think of Training</h2>
<p>Worth being blunt, because it is the thing the industry is least honest about with beginners.</p>
<p><b>No agency has ever signed anyone because of a certificate.</b> There is no accreditation in modeling, no qualification an agent recognises, and no course — including ours — that changes whether your look fits a client's brief. Any school implying otherwise is misrepresenting what it sells.</p>
<p>What training can genuinely do is narrower and still valuable: teach you what happens in a casting so you are not learning it live, show you how to move on camera, explain contracts and usage before you sign one, and stop you making the beginner mistakes that get people quietly not rebooked. That is a real gap, and it is worth closing. It is just not a substitute for fitting a board.</p>
`;

export const commercial = [
  {
    slug: 'modeling-classes',
    seoTitle: 'Modeling Classes: What They Teach and What They Cost',
    description:
      'What modeling classes actually cover, what they cost, who genuinely benefits, and how to judge one — explained by working agents and casting directors.',
    headline: 'Modeling Classes: What They Teach, and Whether You Need Them',
    category: 'Training',
    image: 'how-to-become-a-successful-model',
    imageAlt: 'A model practising posture and movement in a training studio',
    readTime: 11,
    date: DATE,
    related: [
      'modeling-schools',
      'what-do-modeling-agencies-look-for',
      'how-to-start-a-modeling-career',
    ],
    faq: [
      {
        q: 'Are modeling classes worth it?',
        a: 'They are worth it for learning what happens in a casting, how to move on camera, and how contracts and usage work. They are not worth it as a route to representation — no agency signs anyone on the basis of a class or a certificate. Judge a class on what it teaches, never on what it implies about getting signed.',
      },
      {
        q: 'How much do modeling classes cost?',
        a: 'In-person classes and short courses typically run from a few hundred dollars into the low thousands, and packages bundled with a photoshoot cost considerably more. Online courses generally sit at the lower end. Any price is too high if the sales pitch is representation rather than instruction.',
      },
      {
        q: 'What do you learn in modeling classes?',
        a: 'A good class covers posing and how you read on camera, runway walking and timing, what a casting actually involves, how to prepare digitals, how contracts and usage fees work, and the professional conduct that gets models rebooked. A weak one covers grooming, deportment and confidence in the abstract.',
      },
      {
        q: 'Do modeling agencies require classes?',
        a: 'No. Agencies evaluate your look, your measurements, your age against the board they would market you on, and whether you seem professional to deal with. Development boards exist precisely to train the models they sign. Classes are something you choose for yourself, not a prerequisite anyone imposes.',
      },
      {
        q: 'Are online modeling classes as good as in-person?',
        a: 'For the knowledge — castings, contracts, portfolio, agency process — online is equivalent and usually far cheaper. For physical coaching such as runway walking, in-person feedback has a real advantage, though video review closes much of that gap. The bigger variable is who is teaching, not the format.',
      },
    ],
    body: `
<p>"Modeling classes" covers everything from a genuine two-day workshop run by working professionals to a nine-week programme that exists mainly to sell you a photoshoot. The difference is not obvious from the outside, and the industry does very little to help you tell them apart.</p>
<p>At Online Model Academy our instructors are casting directors, agents and runway producers — the people who decide who gets booked. Here is how they would tell you to think about paying for training.</p>

<h2>What a Class Should Actually Cover</h2>
<p>Judge any class by whether it teaches the things that decide bookings.</p>
<ul>
<li><b>Posing and how you read on camera.</b> The single most trainable skill. Most beginners have no idea what their body is doing under a lens.</li>
<li><b>Runway technique.</b> Walk, pace, turns, timing, and holding energy through a show. See our guide to <a href="../how-do-models-walk-in-runway-shows/">how models walk in runway shows</a>.</li>
<li><b>What a casting is really like.</b> The format, the brevity, the waiting, the two minutes you actually get. Our <a href="../open-casting-call/">open casting call guide</a> covers the room itself.</li>
<li><b>Digitals and portfolio.</b> What agencies ask for and why polished photos hurt you at submission stage.</li>
<li><b>Contracts, rates and usage.</b> The commercial literacy that stops you signing away perpetual worldwide usage for a day rate.</li>
<li><b>Professional conduct.</b> Unglamorous and decisive — the behaviour that separates models who get rebooked from models who get booked once.</li>
</ul>
<p>Notice what is missing from that list: deportment, etiquette, "confidence building", and anything resembling a graduation certificate. Those are what weak programmes sell because they are cheap to deliver and impossible to measure.</p>

${whatAgenciesThink}

<h2>The Three Kinds of Training, Honestly Compared</h2>
<h3>In-person classes and workshops</h3>
<p><b>Best for:</b> physical coaching — walking, posing, movement — where live correction genuinely beats video.</p>
<p><b>Watch for:</b> cost, which is the highest of the three, and the bundled-photoshoot structure. If the class is inseparable from a paid shoot with their photographer, you are buying photography with a lesson attached.</p>
<h3>Online courses</h3>
<p><b>Best for:</b> the knowledge half — castings, contracts, agencies, portfolio, industry process. Nothing about that requires being in a room.</p>
<p><b>Watch for:</b> who is teaching. A course taught by people who have never cast a job is repeating the same generic advice you can find free.</p>
<h3>Agency development</h3>
<p><b>Best for:</b> everything, and it is free — but only available after you are signed. Agencies train the models on their development boards because it is in their commercial interest that you perform.</p>
<p><b>Watch for:</b> nothing. This is the ideal. It is simply not available to you until an agency says yes, which is why the other two exist.</p>
<p>The practical sequence for most people: learn the knowledge cheaply, get your digitals right, get signed, then let your agency handle the rest. Our guide to <a href="../how-to-start-a-modeling-career/">starting a modeling career</a> lays out the whole order.</p>

<h2>What Classes Cost</h2>
<p>Ranges vary widely by market and format, but the shape is consistent:</p>
<ul>
<li><b>Single workshops</b> — usually the cheapest way to sample real instruction.</li>
<li><b>Multi-week in-person programmes</b> — the most expensive, frequently into the thousands once a photoshoot is bundled.</li>
<li><b>Online courses</b> — generally the lowest, with the trade-off being no live physical feedback.</li>
</ul>
<p>The number that matters is not the price, it is what the price is attached to. Paying for instruction from people who book models is reasonable. Paying for a portfolio you did not need, from a photographer you did not choose, as a condition of the course, is the oldest structure in this industry. We put real figures on the whole picture in <a href="../how-much-does-it-cost-to-become-a-model/">what it actually costs to become a model</a>.</p>

<h2>How to Judge a Class Before You Pay</h2>
<ol>
<li><b>Who teaches it?</b> Name them. Can you verify they work in the industry now — castings they run, shows they produce, agencies they book for?</li>
<li><b>What is the outcome claimed?</b> "You will learn X" is fine. "You will be signed" or "you will meet agents" is a claim nobody can make.</li>
<li><b>Is a photoshoot bundled or required?</b> If yes, price the course without it. If it cannot be separated, that tells you what is being sold.</li>
<li><b>Is representation implied?</b> A school that hints it will scout you from its own class is running the most common modeling scam there is. Our <a href="../modeling-schools/">modeling schools guide</a> covers exactly how that works.</li>
<li><b>What happens after?</b> A serious course leaves you able to do something. A weak one leaves you with a certificate.</li>
</ol>

<h2>Who Genuinely Should Not Pay for Classes</h2>
<p>Worth saying, because most articles on this topic will not.</p>
<p>If you have not yet shot digitals and submitted to agencies, do that first. It costs nothing, takes an afternoon, and the answer you get back changes what training is even useful to you. Our guide to <a href="../what-do-modeling-agencies-look-for/">what agencies look for</a> and our <a href="../how-to-become-a-model-with-no-experience/">no-experience guide</a> cover the whole free route in.</p>
<p>If you are already signed, ask your agency before paying anyone. They frequently provide the coaching themselves, and they will have opinions about where else to spend.</p>
<p>Classes make most sense for the person in between: not yet signed, digitals sent, and wanting to walk into the next casting knowing what actually happens in the room.</p>

<h2>What We Do</h2>
<p>Online Model Academy is an online course taught by working casting directors, agents, a fashion week producer and an industry lawyer. It covers the knowledge half thoroughly and makes no claim to get you signed, because no course can.</p>
<p>The free runway module with Jack Bedwani, who produces Australian Fashion Week, is six lessons at no cost — enough to judge whether the teaching is worth anything to you before you spend a dollar.</p>
`,
  },

  {
    slug: 'modeling-schools',
    seoTitle: 'Modeling Schools: How They Work and How to Spot a Scam',
    description:
      'What modeling schools do, how the classic modeling school scam is structured, what agencies think of them, and how to judge one before you pay.',
    headline: 'Modeling Schools: What They Do, and How the Scams Work',
    category: 'Training',
    image: 'how-to-choose-a-modeling-agency',
    imageAlt: 'A prospective model reading a training contract before signing',
    readTime: 11,
    date: DATE,
    related: [
      'modeling-classes',
      'modeling-agencies-near-me',
      'how-much-does-it-cost-to-become-a-model',
    ],
    faq: [
      {
        q: 'Are modeling schools legitimate?',
        a: 'Some are, and they sell instruction honestly. The category also contains the most common structure of modeling fraud: a business that sells training or photography while implying it will lead to representation. Judge any school on whether it earns from teaching you or from the hope that it will get you signed.',
      },
      {
        q: 'What is the difference between a modeling school and a modeling agency?',
        a: 'A school sells you training and earns from your fees. An agency represents you to paying clients and earns a commission on your bookings. They are opposite business models, and a company presenting itself as both is the arrangement to be most careful about.',
      },
      {
        q: 'Do you need to go to modeling school to become a model?',
        a: 'No. Agencies evaluate your look, measurements, age and professionalism, and they train the models they sign on their own development boards. No modeling school certificate has ever caused an agency to sign anyone, because the industry has no accreditation system.',
      },
      {
        q: 'How much does modeling school cost?',
        a: 'Programmes commonly run from several hundred dollars into the thousands, particularly where a photoshoot is bundled in. The figure matters less than the structure: paying for instruction is a normal transaction, while paying for a portfolio you did not choose as a condition of enrolment is the classic scam pattern.',
      },
      {
        q: 'How do I know if a modeling school is a scam?',
        a: 'Check whether representation is implied, whether a paid photoshoot with their photographer is compulsory, whether they pressure you to decide quickly, and whether they can name graduates whose careers you can independently verify. Any yes to the first three, or no to the last, is a reason to walk away.',
      },
    ],
    body: `
<p>Modeling schools occupy an awkward position. A minority teach genuinely useful things honestly. The category as a whole is also the single most reliable place to lose money in this industry, and it has been for decades.</p>
<p>This guide is written from the agency side. Our instructors are the casting directors and agents who see the results — including the people who arrive having spent thousands on a programme that got them nothing.</p>

<h2>School and Agency Are Opposite Businesses</h2>
<p>This distinction does more work than anything else in this article, so it is worth being precise.</p>
<ul>
<li>An <b>agency</b> represents you to clients and takes a commission from what you earn. It makes money only when you make money, which is why it will not sign you unless it believes it can sell you.</li>
<li>A <b>school</b> sells you training and earns from your fee. It makes money whether or not you ever work.</li>
</ul>
<p>Neither is dishonest by nature. Training is a legitimate product. The problem is a business that blurs the two — selling training while implying representation — because that combination lets it charge you upfront while dangling an outcome it has no obligation to deliver.</p>
<p>The test to carry into any conversation: <b>does this company make money when I work, or does it make money whether or not I ever work?</b></p>

<h2>How the Classic Scam Is Structured</h2>
<p>It is remarkably consistent, and once you have seen the shape you cannot unsee it.</p>
<ol>
<li><b>The approach.</b> Scouted in a shopping centre, at an event, or by DM. Told you have "the look".</li>
<li><b>The invitation.</b> An audition, screen test or open call — free, and flattering.</li>
<li><b>The acceptance.</b> You are told you have been selected. The room is often full of people who were all also selected.</li>
<li><b>The pitch.</b> To proceed, you need a professional portfolio, or a course, or both — from their photographer, at their price.</li>
<li><b>The urgency.</b> A deadline, a discount that expires, a place that will go to someone else.</li>
<li><b>The silence.</b> You pay. You get photos. Nothing happens, and nothing was ever contractually promised.</li>
</ol>
<p>Note that steps 1 to 5 can be conducted without a single false statement. Nobody guaranteed you work. That is what makes it durable — much of it is legal, and it survives precisely because the victim cannot point to a broken promise.</p>

${whatAgenciesThink}

<h2>What a Legitimate School Looks Like</h2>
<p>They do exist. The honest ones share traits:</p>
<ul>
<li><b>They sell instruction, and say so.</b> The outcome offered is skills, not signing.</li>
<li><b>Named, verifiable instructors.</b> People currently working in the industry whose credits you can check independently.</li>
<li><b>No compulsory photoshoot.</b> Or if photography is offered, it is genuinely optional and separately priced.</li>
<li><b>No implied scouting.</b> They do not suggest agents will be watching, and they do not present themselves as a route to representation.</li>
<li><b>Transparent pricing</b> with no pressure to decide today.</li>
<li><b>Verifiable outcomes.</b> They can name people whose careers you can trace — and those careers are traceable to agencies, not to the school.</li>
</ul>

<h2>Questions That End the Conversation Quickly</h2>
<p>Ask these directly. How they are answered tells you more than any brochure.</p>
<ul>
<li>"Are you an agency, a school, or both — and how does the business make money?"</li>
<li>"Is any payment required before or during representation?"</li>
<li>"Am I required to shoot with a specific photographer?"</li>
<li>"Can you name three people who came through this programme and are working now?"</li>
<li>"Can I take the contract home and read it?"</li>
</ul>
<p>A legitimate operation answers all five without friction. Hesitation on the last one in particular is decisive — in Australia and the US alike, consumer law gives you the right to consider a contract, and reputable businesses expect you to.</p>

<h2>If You Have Already Paid</h2>
<p>You are not the first, and it is not a comment on your judgement — these operations are practised. Two things worth doing: gather every document, receipt and message, and check what your local consumer protection body covers. In Australia, the ACCC and your state fair trading office handle misleading conduct. In the US, the FTC and your state attorney general's office take these complaints, and several states have specific talent-agency statutes.</p>
<p>Whether or not you recover anything, reporting it makes the next person's search a little more informative.</p>

<h2>The Route That Costs Nothing</h2>
<p>Before paying anyone for anything, the entire path into representation is free:</p>
<ol>
<li>Work out which board you fit — see <a href="../what-do-modeling-agencies-look-for/">what agencies look for</a>.</li>
<li>Shoot digitals on your phone in daylight against a plain wall.</li>
<li>Find real agencies and verify them — our guide to <a href="../modeling-agencies-near-me/">finding a genuine agency</a> has the checklist.</li>
<li>Submit exactly what each one asks for, and go to open calls.</li>
</ol>
<p>If you then decide training would help, <a href="../modeling-classes/">our guide to modeling classes</a> covers how to judge one. And our own free runway module — six lessons from a working fashion week producer, no card required — exists so you can assess the teaching before spending anything.</p>
`,
  },
];
