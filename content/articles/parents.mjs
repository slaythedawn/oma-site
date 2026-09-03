// Parent-facing cluster. This is the segment with the most predatory operators,
// so every article here leads with safeguarding and money before opportunity.
// Deliberately NOT targeting the bare term "teen model", which carries search
// intent this brand should not be competing for.

const DATE = '2026-08-19';

const parentRedFlags = `
<h2>The Warning Signs, In Plain Terms</h2>
<p>This corner of the industry attracts operators who make money from hopeful parents rather than from clients. The patterns are consistent and easy to recognise once you know them.</p>
<ul>
<li><b>Any upfront fee.</b> Registration, joining, administration, "portfolio", website listing. A real agency earns commission on bookings and charges you nothing to sign your child.</li>
<li><b>A compulsory photoshoot with their photographer.</b> The single most common structure. You pay hundreds for photos you did not need, and the work never materialises.</li>
<li><b>Approached in a shopping centre and rushed.</b> Legitimate scouting happens, but a real scout will happily let you go home, look them up, and call the agency's published number.</li>
<li><b>Extravagant promises.</b> Nobody can guarantee your child work, and any suggestion that a specific brand or campaign is waiting should end the conversation.</li>
<li><b>Pressure to decide today.</b> "This offer expires" is a sales technique, not an industry practice.</li>
<li><b>Vague or unverifiable clients.</b> A working agency names brands and campaigns you can check.</li>
<li><b>Requests for unaccompanied meetings.</b> You should be present at every casting, fitting and shoot. Any resistance to that is disqualifying, full stop.</li>
</ul>
<p>The underlying economics are covered in <a href="../how-much-does-it-cost-to-become-a-model/">what it actually costs to become a model</a>, and they apply doubly here.</p>
`;

const legalBlock = `
<h2>The Rules That Protect Your Child</h2>
<p>Children working in entertainment and advertising are covered by employment and child-protection rules everywhere this guide is read, but the system doing the protecting is different in the US, the UK and Australia, and none of the three run it nationally. A professional agency and a professional client will know their own system and follow it without being asked; an operator who seems unaware of it, or treats it as an inconvenience, is telling you exactly how the day will go.</p>

<h3>United States</h3>
<p>There is no single federal child-performer law — it runs state by state, and the rules a family in California works under can differ meaningfully from a family in Texas. Most states with an active industry require an entertainment work permit before a minor can work a shoot, cap hours and set mandatory breaks by age, and require schooling arrangements on longer bookings. A handful of states, California and New York among them, go further and legally require a portion of a child's earnings, commonly 15 percent, into a blocked trust account the child controls at adulthood, often called a Coogan account after the law's namesake. Check your own state's labor department before your child works a single job.</p>

<h3>United Kingdom</h3>
<p>England licenses child performers through the local council, not a national body: under the Children (Performances and Activities) Regulations 2014, any child from birth to the end of compulsory school age needs a performance licence from their local authority to work in paid modelling, and the employer or agency is normally the one who applies for it. Unless a parent or a teacher from the child's school is directly supervising, the child must be accompanied by a local-authority-registered chaperone, whose sole job on set is the child's welfare. Scotland, Wales and Northern Ireland run their own separate but broadly similar licensing systems, administered locally rather than by Westminster, so check with your own council before assuming the England rules apply as written.</p>

<h3>Australia</h3>
<p>Australia has no single national scheme either — each state runs its own. In New South Wales, an employer needs a formal Authority from the Office of the Children's Guardian before employing a child in modelling or entertainment, must notify the Office before the work happens, and must have a child-safe code of conduct in place; the Authority is time-limited, issued for anywhere from one week to twelve months. Other states, Victoria and Queensland among them, run comparable schemes through their own regulators rather than the NSW system, so the correct body to check with depends on where your family and the job are actually based.</p>

<h2>What All Three Systems Actually Cover</h2>
<p>Despite the different regulators and paperwork, US, UK and Australian rules protect the same ground:</p>
<ul>
<li><b>Permits, licences or an equivalent authority</b> for a child to work, usually the employer's responsibility to obtain, not the family's.</li>
<li><b>Limits on hours</b>, tightened further by age and by whether it is a school day.</li>
<li><b>Mandatory breaks and rest</b>, and limits on total time on set.</li>
<li><b>Supervision requirements</b> — a parent, guardian or approved chaperone present at all times.</li>
<li><b>Schooling provisions</b> where a booking falls in school hours.</li>
<li><b>Restrictions on how earnings are handled</b>, including trust arrangements in some US states.</li>
</ul>
`;

export const parents = [
  {
    slug: 'child-modeling-agencies',
    seoTitle: 'Child Modeling Agencies: A Parent&#x27;s Safety-First Guide',
    description:
      'How child modeling agencies work, how to tell a real one from a scam, what it should cost, the legal protections, and how to submit safely.',
    headline: 'Child Modeling Agencies: What Parents Need to Know First',
    category: 'For parents',
    image: 'how-to-become-a-child-model',
    imageAlt: 'A parent and child at a relaxed daylight casting',
    readTime: 12,
    date: DATE,
    related: [
      'how-to-become-a-child-model',
      'baby-modelling-agency',
      'how-to-choose-a-modeling-agency',
    ],
    faq: [
      {
        q: 'Do child modeling agencies charge fees?',
        a: 'No legitimate agency charges you to represent your child. They earn a commission on work the child books. Registration fees, compulsory paid photoshoots and portfolio packages are the standard structure of operations that profit from parents rather than from clients.',
      },
      {
        q: 'What age do child modeling agencies accept?',
        a: 'Agencies represent children from babies through to teenagers, usually split into age bands because clients cast narrowly by age. Babies and toddlers are booked almost entirely on temperament and availability rather than appearance, and requirements tighten as children get older.',
      },
      {
        q: 'How do I know if a child modeling agency is legitimate?',
        a: 'Check that it earns commission rather than fees, that it names clients and campaigns you can verify, that children on its books visibly work, that it has a real office, and that it follows your jurisdiction\'s child employment rules without being prompted. Verify any scout approach through the agency\'s official published contact details.',
      },
      {
        q: 'Do I need professional photos for my child to join an agency?',
        a: 'No, and agencies generally prefer you do not send them. Recent, natural phone snapshots in daylight — a clear face shot and a full-length, no makeup, no props, genuine expression — are exactly what they want. Anyone insisting on a paid professional shoot before representation is selling photography.',
      },
      {
        q: 'Can I be present at my child&#x27;s casting and shoots?',
        a: 'Yes, and you should be. A parent or approved guardian being present is both standard industry practice and, in most jurisdictions, a legal requirement for children working. Any agency or client resistant to your presence should be refused immediately.',
      },
    ],
    body: `
<p>If you are researching child modeling agencies, the most useful thing to understand before anything else is that this is the part of the industry with the highest concentration of operators who take money from parents and deliver nothing.</p>
<p>That is not a reason to avoid it. Child modeling is a real, regulated, often well-paid line of work, and plenty of families do it happily. But the order of operations matters: understand the money and the safeguards first, then the opportunity.</p>
<p>At Online Model Academy our instructors include agents and casting directors who cast children professionally. This is the guidance they give parents.</p>

<h2>How a Real Child Agency Works</h2>
<p>An agency represents your child to clients — brands, retailers, catalogues, advertising agencies — and takes a commission from what the child earns. It does not charge you to join, does not require you to buy photographs, and does not sell you training as a condition of representation.</p>
<p>The economics are the whole tell. An agency that earns only when your child works has every incentive to be honest with you about whether your child will work. An operation that charges upfront has already been paid regardless.</p>

${parentRedFlags}

<aside class="inline-cta">
  <div class="k">Free module</div>
  <h3>The runway masterclass, free</h3>
  <p>Five lessons from the course, taught by a working runway producer. The same material our paying students get, yours to keep.</p>
  <a class="go" data-cta="inline-free" href="https://www.onlinemodel.academy/offers/ZbJFXeGn?utm_source=blog&utm_medium=article&utm_campaign=free_runway_module&utm_content=child-modeling-agencies__inline" target="_blank" rel="noopener">Get the free module &rarr;</a>
</aside>

<h2>What Agencies Actually Want From a Child</h2>
<p>Much less than parents expect, and almost none of it is about being exceptionally beautiful.</p>
<h3>Babies and toddlers</h3>
<p>Booked overwhelmingly on temperament and availability. Will the child tolerate strangers, lights and a busy room without distress? Can you get there on short notice? Twins are in disproportionate demand because they let productions work around hour limits.</p>
<h3>Younger children</h3>
<p>Natural expression and the ability to follow simple direction from an adult who is not you. Clients are casting a believable child, not a polished performer. Confidence and ease matter far more than looks.</p>
<h3>Older children and teenagers</h3>
<p>Requirements begin to narrow toward adult boards, and fashion agencies start scouting in the mid-teens. Our guide to <a href="../how-to-become-a-model-at-16/">modelling at 16</a> covers that transition, including the parts that change legally when a young person approaches adulthood.</p>
<p>Across every age, the child wanting to do it is not a nice-to-have. A child who is not enjoying a set is obvious on camera, does not get rebooked, and should not be there.</p>

${legalBlock}

<h2>How to Submit Safely</h2>
<ul>
<li><b>Approach agencies directly</b> through their official website. Do not respond to unsolicited DMs, and verify any in-person scout through the agency's published phone number.</li>
<li><b>Send simple recent photos</b> — a clear face shot and a full-length, taken on a phone in daylight, no makeup, no costumes, natural expression. Include age, height and clothing size.</li>
<li><b>Send only what is asked for.</b> Never send more identifying detail than the submission form requests.</li>
<li><b>Check what happens to the images.</b> A professional agency can tell you how submissions are stored and who sees them.</li>
<li><b>Keep your child's social media private</b> and separate from any modeling activity.</li>
</ul>

<h2>The Money Side, Honestly</h2>
<p>Child modeling can pay well — national campaigns pay a day rate plus usage, and usage is often the larger figure. But bookings are irregular, casting travel is unpaid, and the income is not something to plan a household around.</p>
<p>In several jurisdictions there are rules about how a child's earnings must be held, precisely because the history here is not a happy one. Ask your agency how earnings are paid, to whom, and on what timeline, and get the answer in writing.</p>

<h2>The Question Worth Asking First</h2>
<p>Not "could my child do this" — plenty of children could. The better question is whether your child actively wants to, and whether your family can absorb irregular castings, unpaid travel and a lot of rejection without it becoming a source of pressure on a child.</p>
<p>If the answer is yes, approach real agencies, refuse to pay anyone, stay present at every booking, and treat the whole thing as something your child gets to try rather than something they need to succeed at.</p>
<p>Our full <a href="../how-to-become-a-child-model/">parent's guide to child modelling</a> goes deeper on the day-to-day of it, and our free runway masterclass is available at no cost if an older child wants to understand what the professional side actually involves.</p>
`,
  },

  {
    slug: 'baby-modelling-agency',
    seoTitle: 'Baby Modelling Agency: How It Works and What It Costs',
    description:
      'How baby modelling agencies work, what they look for, the fees that signal a scam, the legal protections for infants, and how to submit safely.',
    headline: 'Baby Modelling Agencies: An Honest Guide for Parents',
    category: 'For parents',
    image: 'how-to-become-a-child-model',
    imageAlt: 'A baby photographed in soft daylight during a relaxed casting',
    readTime: 10,
    date: DATE,
    related: [
      'child-modeling-agencies',
      'how-to-become-a-child-model',
      'how-to-choose-a-modeling-agency',
    ],
    faq: [
      {
        q: 'How do I get my baby into modelling?',
        a: 'Approach established agencies that run a baby or child board, directly through their official website, and send two or three recent phone snapshots in daylight — a clear face shot and a full-length — with your baby\'s age, height and clothing size. Never pay a registration fee or buy a photoshoot to be considered.',
      },
      {
        q: 'How much does a baby modelling agency cost?',
        a: 'Nothing. Legitimate agencies earn a commission on bookings and charge parents no joining fee. Any agency requiring payment for registration, a portfolio, a professional shoot or a website listing is earning from parents rather than from clients.',
      },
      {
        q: 'What do baby modelling agencies look for?',
        a: 'Temperament above everything: a baby who is settled around strangers, lights and noise, and who tolerates a busy room without distress. Alertness, healthy skin and clear eyes matter, and so does parental availability at short notice. Twins are in particularly high demand because they help productions work within legal hour limits.',
      },
      {
        q: 'How much do baby models get paid?',
        a: 'Bookings are paid as a session fee plus usage, with usage covering where and how long the images run and often exceeding the session fee. Work is irregular and unpredictable, so it is best treated as occasional income rather than something to rely on. In many jurisdictions there are rules governing how a child\'s earnings must be held.',
      },
      {
        q: 'How long do baby modelling shoots last?',
        a: 'Legal limits are strict for infants and vary by jurisdiction, typically capping total time on set at a few hours with mandatory breaks and a parent present throughout. Productions plan around these limits, which is one reason twins are so frequently booked.',
      },
    ],
    body: `
<p>Baby modelling is a genuinely real market. Nappy brands, baby food, retail and department store catalogues, prams and car seats, health and pharmacy campaigns — all of it needs infants, continuously.</p>
<p>It is also the part of the industry where parents are most often separated from their money by people who never had any intention of booking their child. So this guide handles the money and the safeguards first.</p>

<h2>It Should Cost You Nothing</h2>
<p>A legitimate baby modelling agency earns a commission when your baby books a job. That is the entire business. It has no reason to charge you a registration fee, sell you a photoshoot, or take payment for a listing on its website.</p>
<p>The most common scam in this space is elegantly simple: an agency signs almost everyone, requires a paid professional shoot as a condition of representation, and earns its money there. The photos are fine. The work never comes. Nothing illegal necessarily happened — you were sold photography, not representation.</p>
<p>If you take one thing from this article: <b>you should never pay a baby modelling agency anything.</b></p>

<h2>What They Are Actually Looking For</h2>
<p>Almost none of it is what parents assume.</p>
<h3>Temperament, first and last</h3>
<p>A shoot is a strange room, bright lights, unfamiliar adults and a lot of waiting. What every booker wants is a baby who copes with that calmly. A settled, curious baby who tolerates being handed around is infinitely more bookable than a strikingly beautiful one who becomes distressed.</p>
<h3>Alertness and health</h3>
<p>Clear eyes, healthy skin, and being awake and responsive during the shoot window. Nothing exotic.</p>
<h3>Your availability</h3>
<p>Castings come with very little notice and are usually mid-week and mid-day. A parent who can reliably get there is a substantial part of the value. Many perfectly bookable babies never work simply because the family cannot make the castings.</p>
<h3>Twins and multiples</h3>
<p>In unusually high demand. Because infants can only be on set for a strictly limited time, twins let a production keep shooting by swapping. If you have twins, agencies will want to hear from you.</p>
<h3>Age bands</h3>
<p>Clients cast narrowly — a brand needing a six-month-old will not use a twelve-month-old. Babies also age out of their band in weeks rather than years, so agencies re-photograph frequently and interest can be sporadic for that reason alone.</p>

${legalBlock}

<aside class="inline-cta">
  <div class="k">Free module</div>
  <h3>The runway masterclass, free</h3>
  <p>Five lessons from the course, taught by a working runway producer. The same material our paying students get, yours to keep.</p>
  <a class="go" data-cta="inline-free" href="https://www.onlinemodel.academy/offers/ZbJFXeGn?utm_source=blog&utm_medium=article&utm_campaign=free_runway_module&utm_content=baby-modelling-agency__inline" target="_blank" rel="noopener">Get the free module &rarr;</a>
</aside>

<h2>How to Submit</h2>
<ul>
<li>Find agencies that explicitly run a baby or child board, and go to their official website.</li>
<li>Send two or three recent snapshots: one clear face shot, one full-length, taken on a phone in daylight against a plain background.</li>
<li>No props, no costumes, no professional photography, no editing.</li>
<li>Include date of birth, current height and weight, and clothing size.</li>
<li>Include your realistic availability. Be honest — overstating it helps nobody.</li>
<li>Send only what the form asks for, and nothing more identifying.</li>
</ul>
<p>Photos age out fast at this stage, so expect to update them every couple of months while your baby is on a board.</p>

${parentRedFlags}

<h2>What the Work Is Actually Like</h2>
<p>Short, strictly time-limited, and heavily dependent on your baby's mood on the day. You will be present throughout. There will be waiting. Sometimes a shoot ends early because the baby has had enough, and a professional set treats that as normal rather than a problem.</p>
<p>Payment is a session fee plus usage, and usage is frequently the larger component — a nappy brand running an image nationally for two years pays very differently from a single catalogue page. Ask how usage is calculated before you agree to anything.</p>

<h2>A Realistic Expectation</h2>
<p>Most babies on an agency board book occasionally or not at all, and that is not a reflection on the baby. Boards are large, client needs are narrow, and timing is everything.</p>
<p>Treat it as an occasional, low-stakes thing your family does when a booking happens to come up. Do not pay anyone, stay in the room, and stop the moment it stops being easy for your child.</p>
<p>For the older end of this, our <a href="../child-modeling-agencies/">child modelling agency guide</a> and our <a href="../how-to-become-a-child-model/">parent's guide to child modelling</a> cover what changes as children grow into their own opinions about it.</p>
`,
  },

  {
    slug: 'kids-modelling-agency-australia',
    seoTitle: "Kids Modelling Agencies in Australia: A Parent's Guide",
    description:
      'How legitimate Australian kids modelling agencies work, the permit rules state by state, what to send, what the work pays, and the fees that mark a scam.',
    headline: 'Kids Modelling Agencies in Australia',
    category: 'For parents',
    image: 'how-to-become-a-child-model',
    imageAlt: "Folded children's clothes and shoes laid out in natural daylight",
    readTime: 10,
    date: '2026-09-03',
    related: [
      'how-to-become-a-child-model',
      'modelling-agencies-australia',
      'how-to-become-a-model-at-16',
    ],
    faq: [
      {
        q: 'Do kids modelling agencies in Australia charge a joining fee?',
        a: 'No legitimate one does. An Australian children’s agency earns a commission on the work a child books, which means it is paid by the client, not by you. Joining fees, compulsory paid photoshoots, portfolio packages and paid training before representation are the standard pattern of operators who make their money from parents rather than from casting.',
      },
      {
        q: 'What age can a child start modelling in Australia?',
        a: 'There is no national minimum age for entertainment and modelling work, and agencies represent children from newborn onwards for nappy, baby and family campaigns. What changes with age is the permit and supervision regime around the job. In New South Wales an employer needs an authority to employ anyone under 16 for still photography or modelling, and in Victoria an employer needs a child employment licence for anyone under 15, even for unpaid work.',
      },
      {
        q: 'Does my child need a permit to model in Australia?',
        a: 'The permit is the employer’s responsibility, not the parent’s, but the rule differs by state. New South Wales requires the employer to hold an authority to employ children under 16 and to lodge a notification at least seven days before the child’s first work day. Victoria requires the employer to hold a child employment licence for anyone under 15 and to provide a supervisor aged 18 or over holding a Working with Children Clearance. Queensland has no permit but sets hour limits by age and requires a parent’s consent form. Western Australia, South Australia, Tasmania, the ACT and the Northern Territory have no dedicated entertainment permit scheme.',
      },
      {
        q: 'What photos do kids modelling agencies want?',
        a: 'Recent, natural phone snaps in daylight against a plain wall. A head and shoulders shot, a full-length shot, and one of the child being themselves. No makeup, no props, no studio, no retouching, and nothing that dresses a child as an adult. Children change quickly, so agencies want photos from the last month rather than a portfolio from last year.',
      },
      {
        q: 'How much do child models earn in Australia?',
        a: 'It varies enormously by job type and it is not a reliable income. A catalogue or retail day rate sits well below what an adult commercial model earns, while a national television commercial with usage can pay considerably more, because usage rather than the shoot day is where the value sits. The agency deducts its commission and the money is paid to the parent or guardian on the child’s behalf.',
      },
      {
        q: 'Can teenagers join a kids modelling agency in Australia?',
        a: 'Yes. Most Australian children’s agencies run a teen board, and the permit rules still apply until 16 in New South Wales and 15 in Victoria. Teen work is mostly commercial and retail rather than fashion, and the height thresholds that gate adult fashion boards do not apply to it.',
      },
    ],
    body: `
<p>If your child has been stopped in a shopping centre, or a scout has messaged you on Instagram, the useful thing to know first is this: <b>a legitimate Australian children's modelling agency will never ask you for money to sign your child.</b> Everything else in this guide follows from that one rule.</p>
<p>Our child and teen module is taught by Hannah Millward, the founder of Bump Models and one of Australia's most respected child and teen agents, with more than 17 years placing young talent into campaigns for Bonds, Huggies and David Jones. This is the parent's version of what she teaches.</p>

<h2>How a Real Kids Modelling Agency Makes Its Money</h2>
<p>An agency is paid a commission on the work a child actually books. The client pays the agency, the agency takes its percentage, and the rest is paid to you on the child's behalf. That is the entire business model, and it explains every red flag below.</p>
<p>An agency that earns from casting has an incentive to sign only children it can genuinely place, and to keep its books small enough that each child gets submitted. An operation that earns from parents has the opposite incentive: sign everyone, charge everyone, and let the disappointment sort itself out. Both call themselves agencies. Only one of them makes money when your child works.</p>
<p>The practical test takes one question. Ask what it costs to be represented. If the answer is a number, you are not talking to an agency.</p>

<h2>What You Should Never Pay For</h2>
<ul>
<li><b>A joining, registration or administration fee.</b> There is no legitimate version of this.</li>
<li><b>A compulsory photoshoot.</b> Children's agencies work from phone snaps, because children change too fast for a studio portfolio to stay current.</li>
<li><b>A portfolio or comp card package.</b> If cards are needed later, they are produced once the child is signed and working, and the cost is usually modest and often deducted from earnings.</li>
<li><b>Paid classes as a condition of representation.</b> Training and representation are different businesses. An agency that requires you to buy the first before it will consider the second is selling the course.</li>
<li><b>A place on a database or website listing.</b> Paying to appear somewhere is advertising, not casting.</li>
</ul>
<p>Our guide to <a href="../modeling-schools/">modelling schools and the scams around them</a> covers the same pattern in the adult market, where it is just as common.</p>

<h2>The Permit Rules, State by State</h2>
<p>Child employment in entertainment is regulated by state, not federally, and the obligation sits with the employer rather than with you. Knowing the rule where you live tells you very quickly whether the people booking your child are running a real production. Our <a href="../how-to-become-a-child-model/">parent's guide to child modelling</a> sets the same ground out for the US and UK.</p>
<table>
<thead><tr><th>State or territory</th><th>What the employer must hold</th></tr></thead>
<tbody>
<tr><td><b>New South Wales</b></td><td>An authority to employ children, required for anyone under 16 in still photography or modelling, issued by the Office of the Children's Guardian. A separate notification must be lodged no fewer than seven days before the child's first work day, including for fittings and rehearsals.</td></tr>
<tr><td><b>Victoria</b></td><td>A child employment licence, required for anyone under 15 even when the work is unpaid. A supervisor aged at least 18 holding a Victorian Working with Children Clearance must be present, and the Mandatory Code of Practice sets hours, tutoring and record-keeping. Employing a child without a licence is a criminal offence.</td></tr>
<tr><td><b>Queensland</b></td><td>No permit, but a parent's consent form is required before a school-aged child can be employed, and hour limits apply by age. For recorded work, children aged 8 to 15 may work up to eight hours a day, five days a week, between 6am and 11pm; children under 3 are limited to four hours a day, three days a week, between 6am and 6pm.</td></tr>
<tr><td><b>WA, SA, Tasmania, ACT, NT</b></td><td>No dedicated entertainment permit scheme. General child employment, work health and safety and working-with-children laws still apply, and the absence of a permit is not an absence of obligation.</td></tr>
</tbody>
</table>
<p>Victoria's hour limits are the tightest published set and a useful benchmark anywhere in the country: under 3 years, four hours a day and three days a week; 3 to 8 years, six hours a day and four days a week; 8 to 15 years, eight hours a day and five days a week. A child who has already been at school for three hours or more cannot work more than four.</p>
<p>You are allowed to ask a producer or agency which permit they hold. A professional operation answers immediately. Hesitation is information.</p>

<h2>What Australian Children's Agencies Actually Book</h2>
<p>Almost none of it is fashion. The work that pays for children in this country is commercial: supermarket and retail catalogues, nappy and baby brands, department store campaigns, banking and telco advertising, tourism, health campaigns, and television commercials. Bonds, Huggies and David Jones are the shape of the market.</p>
<p>That matters because it changes what agencies are looking for. A commercial client is casting a believable child, not a striking one. Agencies build a board that covers the range of children a national campaign might need, which means the child who books is often the one who fits a gap rather than the one who is most photogenic.</p>
<p>It also means the fashion criteria that dominate adult modelling are irrelevant here. There is no height requirement for a child. Our guide to <a href="../types-of-modeling/">the types of modelling</a> sets out where each category sits.</p>

<h2>What to Send, and When</h2>
<p>Every legitimate Australian children's agency asks for roughly the same thing, and none of it costs anything.</p>
<ul>
<li><b>Three or four recent phone photos.</b> Daylight, plain background, taken in the last month. Head and shoulders, full length, and one candid.</li>
<li><b>No makeup, no styling, no props.</b> Nothing that ages the child up. Agents are assessing the child, and anything added gets in the way.</li>
<li><b>Current height, clothing size and shoe size,</b> plus date of birth.</li>
<li><b>A short note from you</b> covering your city, your availability on weekdays, and whether the child is comfortable with strangers and instruction.</li>
</ul>
<p>Send it through the agency's own submission form. Then wait. Children's boards turn over as children grow, so a no this year is not a no next year, and a no is usually about a gap rather than about your child.</p>

<h2>Teen Modelling in Australia</h2>
<p>Teen boards sit inside most children's agencies and follow the same commercial logic. The work is retail, school-uniform, sport, telco and youth-brand campaigns. The permit rules still apply, up to 16 in New South Wales and 15 in Victoria.</p>
<p>The change that matters at this age is agency. A teenager starts making their own decisions about castings, and that is exactly when scam exposure rises, because scouts approach teenagers directly through social media rather than through parents. If your child is approached on Instagram or TikTok, the same single question applies: what does representation cost? Our guide to <a href="../how-to-become-a-model-at-16/">becoming a model at 16</a> covers the transition, and <a href="../how-to-become-a-model-in-australia/">how to become a model in Australia</a> covers the adult process they are heading towards.</p>

<h2>The Money</h2>
<p>Rates vary too much to publish a single number honestly. A retail catalogue day is modest. A national television commercial with broadcast usage can be a multiple of it, because usage rather than the shoot day is where the value sits. The agency's commission comes off the top, and payment is made to you as parent or guardian.</p>
<p>Two things are worth saying plainly. Income is irregular and unpredictable enough that no household should plan around it. And if anyone quotes you guaranteed earnings, that is not how casting works, and it is a reliable marker of the operations described earlier. Our guide to <a href="../how-much-do-models-make/">what models actually earn</a> sets out how rates and usage work across the market.</p>

<h2>Questions to Ask Before You Sign Anything</h2>
<ul>
<li>What does representation cost? (Correct answer: nothing.)</li>
<li>What commission do you take, and on what?</li>
<li>Which clients have you placed children with in the last twelve months?</li>
<li>How many children of my child's age and look are on your board right now?</li>
<li>Which permit or licence do you or the producer hold in this state?</li>
<li>Is the contract exclusive, how long does it run, and how do I end it?</li>
<li>Who is on set as the child's supervisor, and how are hours and breaks managed?</li>
</ul>
<p>Take the contract away and read it before signing. Any agency that objects to that has told you what you needed to know.</p>

<h2>What to Do This Week</h2>
<p>Take the three photos on your phone. Shortlist two or three Australian children's agencies that actually service your city. Submit exactly what each asks for, and pay nobody. Then, before your child ever walks into a casting, learn what happens inside the room, because knowing the process is what makes the experience good for a child rather than confusing.</p>
<p>Our free runway masterclass with Jack Bedwani, who choreographs shows for Calvin Klein, Coach and Charlotte Tilbury, is five lessons on exactly that, and it costs nothing.</p>
`,
  },
];
