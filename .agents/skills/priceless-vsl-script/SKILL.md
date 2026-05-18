---
name: priceless-vsl-script
description: Write Video Sales Letter scripts for Priceless CPA landing pages, email funnels, and service offers using direct response frameworks
---

# VSL Script Writer

## When to Use

Use `/priceless-vsl-script` when you need to:
- Write a VSL for a landing page (cold or warm traffic)
- Write a VSL for a specific service offer (S-Corp restructuring, tax strategy, etc.)
- Write an Awareness Bridge VSL (converts lead magnet users into sales call bookers)
- Revise an existing VSL based on feedback or performance data

## How It's Different from YouTube Scripts

YouTube scripts educate and build trust. VSLs sell. The structure, pacing, and psychology are fundamentally different:

| YouTube Script | VSL Script |
|----------------|------------|
| Educate first, soft CTA | Every section drives toward one action |
| 10-20 minutes | 3-15 minutes (shorter for affluent audiences) |
| Re-hooks for retention | Agreement sequence for conversion |
| Ascending value points | Problem escalation then mechanism reveal |
| Multiple takeaways | One Big Domino belief to knock over |

## File Structure

| File | Purpose |
|------|---------|
| `vsl-brief.md` | Offer definition, audience, false beliefs, mechanism |
| `vsl-script.md` | Working draft with inline feedback blocks |
| `vsl-final.md` | Production-ready version (created on approval) |

VSL projects live in: `projects/vsls/[slug]/`

---

## Process

### Pre-flight: Sync Check

Before starting, check if there are updates on main:

```bash
git fetch origin main
BEHIND=$(git rev-list HEAD..origin/main --count)
```

If `$BEHIND` > 0, warn:
> "There are [N] new commits on main. Run `git pull origin main` to get the latest context files before continuing?"

If up to date, proceed silently.

### Step 0: Load Context

Read these files before anything else:

1. **Target Persona**: `wiki/audience/serial-entrepreneur/profile.md`
2. **Content Strategy**: `wiki/audience/serial-entrepreneur/content-strategy.md`
3. **Marketing Funnel**: `wiki/marketing/marketing-growth-engine.md`
4. **Sales Process**: `wiki/marketing/mvp-sales-process.md`
5. **Lived Experiences**: scan `wiki/lived-experiences/` for relevant learnings
6. **Best Work**: scan `raw/best-work/` for voice/style reference

Confirm: "Loaded persona, marketing funnel, and voice reference."

### Step 1: Define the VSL Type

Ask:

> "What type of VSL are we building?"
>
> 1. **Landing Page VSL** - Cold/warm traffic watches, then books a call
> 2. **Awareness Bridge VSL** - Lead magnet user gets nurtured into booking a call (3-7 days after lead magnet)
> 3. **Service-Specific VSL** - Sells a specific offer (S-Corp, tax strategy, entity restructuring)
> 4. **Ad VSL** - Short-form (2-5 min) for paid traffic

### Step 2: Build the VSL Brief

Interview the user to fill out this brief. Ask only what's missing if some answers are obvious from context.

```markdown
# VSL Brief

## The Offer
- **What are you selling?** [Service, consultation, lead magnet upgrade]
- **Price point:** [Free consultation / $X service / lead magnet]
- **One-sentence promise:** [The transformation in one line]
- **CTA:** [Book a call / Apply / Buy]

## The Audience
- **Who is this for?** [Specific segment of serial entrepreneur persona]
- **Traffic temperature:** [Cold / Warm / Hot]
- **Where are they coming from?** [Ad, YouTube, lead magnet, email sequence]

## The Big Domino
"If I can make them believe that [new opportunity] is the key to [what they desire most]
and that it is only achievable through [Priceless CPA's mechanism],
then all other objections become irrelevant."

- **New opportunity:** [What Priceless CPA offers that's different]
- **Desired outcome:** [What the viewer wants]
- **Mechanism:** [Why only Priceless CPA delivers this]

## Three False Beliefs
1. **Vehicle:** "This approach won't work because ___"
   Story/proof to break it: ___
2. **Internal:** "I can't do this because ___"
   Story/proof to break it: ___
3. **External:** "My situation is different because ___"
   Story/proof to break it: ___

## Top 5 Objections (for "Without" Statements)
1. ___
2. ___
3. ___
4. ___
5. ___
```

Save to `projects/vsls/[slug]/vsl-brief.md`.

### Step 3: Choose the Script Structure

Based on VSL type and traffic temperature, recommend one of these structures:

---

#### Structure A: The Sales Conversation VSL (2-15 min)
**Best for:** Affluent audiences, warm traffic, landing pages, Awareness Bridge

Based on Jeremy Haynes' VSL masterclass and Sultanic's agreement sequence. The core insight: **a perfect VSL is just a normal sales conversation, captured without the counterparty communicating with you.** Each step flows into the next the way a real conversation would. If you leave a question unanswered, the viewer mentally stops hearing everything after that point and bounces.

| Step | What Happens | Haynes Principle |
|------|--------------|------------------|
| 1. **What I Can Do For You** (Hook) | Direct statement of what you can specifically help them with. Not a hook gimmick, not "3 secrets." Just: "I'm going to help you [outcome]. Here's what we'll cover." | In a real conversation, you'd start with why you're talking. |
| 2. **Why I'm The One To Do It** (Credibility) | Real proof of why you're legitimate. Not "as seen in Forbes." Real client count, real refund rate, real years of experience. Strategic objection handling planted here. | In a real conversation, they'd ask "why should I trust you?" next. |
| 3. **The Buying Motives** (Bigger Picture) | Walk through the actual reasons people buy from you. Start with the majority hook (most common reason), then cascade to secondary and minority hooks. Be elaborate here. | In a sales call, you'd ask "what brings you in today?" and they'd share their motive. Handle all the common ones. |
| 4. **The Offer + Price** | Present what you're selling. **Always state the price.** This qualifies people before they hit the CTA. Explain what's included. No value stacks. | In a real conversation, you'd never avoid mentioning price. That's not how sales works. |
| 5. **Objection Handling** | Handle the real objections from real sales calls. Not made-up FAQs. The actual reasons people say "no." For affluent: fewer, harder-hitting. For general public: more objections, handled empathetically. | In a real conversation, they'd push back. Handle it here so the sales call is a layup. |
| 6. **Qualification** | "This is who this is for. This is who this is NOT for." Let the right people further identify. Let the wrong people self-select out. | In a real conversation, you'd qualify before moving forward. |
| 7. **CTA** | Clear call to action. Book a call, fill out the application, whatever. Optional: add testimonials then a second CTA after. | Close the conversation. |

**Why Always State the Price (Haynes):**
- More qualified people hit your pixel, training the ad algorithm to find more like them
- Salespeople become cashiers, not closers (leads show up already knowing the investment)
- You survive the "conditioning window" that most businesses never make it through
- Short-term you might get fewer calls. Long-term you out-compete everyone.

**Affluent Buyer Rules (Haynes + Sultanic):**
- 2-15 minutes maximum. Can be as short as 2 minutes.
- Extremely direct, no fluff, no unnecessary words
- Very little manipulation. No value stacks (not FTC compliant).
- Conservative claims. Undershoot, don't overshoot. Affluent people are biased toward action and risk, they don't need hype.
- Authentic confidence and authority. Not performed confidence.
- Simple presentation: white background/black text or black background/white text. No company logos needed. No design flourishes.
- Half of Haynes' million-dollar-month clients use screen-recorded presentations without ever showing their face
- Overdesigned presentations consistently underperform with affluent audiences
- **Character matching:** You must look, dress, and behave like what the audience expects. A CPA serving $1M+ entrepreneurs should look like a peer, not a guru. Button-down, neutral environment, quality without being flashy.

**General Public Rules (if ever needed):**
- Can go up to 60 minutes (longer = more trust building)
- More empathetic communication style. Direct authority creates skepticism.
- Presentation must be well-designed (opposite of affluent). Simple = scam to general public.
- Trust assets (testimonials) must be highly believable. Screenshot from where they were captured, not retyped with a stock photo.
- Claims can be bigger but must still be believable. Affluent = conservative. General public = biggest compliant claim.
- Real scarcity works well. Believable discounts (not inflated "was $10K now $97").
- Acknowledge their financial reality empathetically if the price stretches them.

---

#### Structure B: The Epiphany Bridge VSL (8-15 min)
**Best for:** Cold traffic, service-specific offers, complex offers that need belief shifting

Based on Brunson's storytelling framework. Take the viewer through the same emotional experience that led to the "aha moment."

| Section | Duration | What Happens |
|---------|----------|--------------|
| 1. Hook + Big Promise | 0-1min | Bold claim + hook to stay until the end. State what they'll learn. |
| 2. Qualify + Origin Story | 1-3min | Credentials through results (not resume). Epiphany Bridge: backstory, journey, breakthrough. |
| 3. Secret #1 (Vehicle) | 3-6min | Break the false belief the vehicle won't work. Name it, Story it, Teach it, Prove it. |
| 4. Secret #2 (Internal) | 6-9min | Break the false belief they can't do it. Tell a story about someone like them who succeeded. |
| 5. Secret #3 (External) | 9-11min | Break the false belief their situation is different. Address specific external circumstances. |
| 6. Transition | 11-12min | "I've shown you what to do. Would it be okay if I shared how I can help you implement this?" |
| 7. The Stack + Close | 12-15min | Present each component one at a time, re-stack after each. Trial closes throughout. Urgency. CTA. |

---

#### Structure C: Short-Form Ad VSL (2-5 min)
**Best for:** Paid ads (Facebook, YouTube pre-roll), retargeting

Compressed format. Every second must earn the next second.

| Section | Duration | What Happens |
|---------|----------|--------------|
| 1. Pattern Interrupt | 0-10s | Visual or verbal scroll-stopper. Bold claim or contrarian statement. |
| 2. Problem + Agitation | 10s-1min | Name the pain. Make it vivid and specific. Use "away" language. |
| 3. Mechanism (not product) | 1-2min | The underlying principle. Why other approaches fail and this one works. |
| 4. Quick Proof | 2-3min | 1-2 fast case studies or results. Specific numbers. |
| 5. CTA | 3-5min | One clear action. Minimize negative admittance. "Without" statements. |

---

### Step 3b: Page Layout & Play Rate

Before writing the script, define where the VSL lives. Play rate (% of page visitors who press play) is a critical metric.

**Maximize play rate (Haynes):**
- Simplified page: headline, VSL, and CTA/application only. Nothing else.
- If you add sections below the VSL that explain the offer, people scroll and decide without watching. Play rate drops.
- The only way to get the information should be pressing play.
- A good play rate is 30%+. Some niches run at 9% play rate and still hit million-dollar months (with strong qualification headlines filtering out wrong people).
- Use Wistia for hosting if possible. Video thumbnails (not static images) increase play rate. Never use "click play" style thumbnails.

**Reading retention graphs:**
- Steep drop at the beginning = bad opener, redo it
- Gradual decline throughout = normal. People conclude "for me" or "not for me" and either take action or leave.
- ~10% of total viewers making it to the end is typical and fine
- Flat section after initial drop = strong retention, good sign

### Step 4: Draft the Script

Write the full VSL script following the chosen structure. Apply these direct response principles throughout:

#### The Agreement Sequence (Sultanic)
Every section must get a "yes" before moving to the next. If the viewer disagrees at any point, they bounce.

1. Open with a statement they cannot disagree with (truth about their reality)
2. Validate their experience (show you understand their world)
3. Introduce a reframe (shift their perspective)
4. Present your mechanism (not your product)
5. Show proof the mechanism works (each piece is a micro-agreement)
6. Make the offer (by this point, 10-15 agreements have been made)

#### Chunking Claims (Sultanic)
Break big claims into believable steps:

- "Step 1: We restructure your entities to separate operating income from investment income"
- "Step 2: That unlocks Section 199A deductions you're currently missing"
- "Step 3: For a client making $1.2M, that's $47K in annual savings"
- "Step 4: Over 5 years, that's $235K back in your pocket, not the IRS's"

#### The "Without" Objection Removal (Sultanic)
Map top 5 objections from the brief. Embed as "without" statements:

"...without switching CPAs mid-tax-season, without restructuring everything at once, without spending hours in meetings explaining your situation from scratch, without aggressive positions that put you at audit risk, and without paying more than you're already paying for reactive compliance work."

#### Desire Through Lack (Sultanic)
Don't say "we'll save you money." Show them what they're currently LACKING:

Compare: "Your CPA files your return. Our clients get a proactive tax strategy reviewed quarterly, entity structures optimized for their specific income mix, and a coordinator who talks to their attorney, their bookkeeper, and their investment advisor."

The gap between what they have and what exists creates desire.

#### Mental Bind Near the Close (Sultanic)
Structure:
- "You've seen how [example 1 result]. You've seen how [example 2 result]."
- "That's why every successful entrepreneur with $1M+ in income has a proactive tax strategist."
- "But the ones who build real, generational wealth have a quarterback. One person coordinating everything."
- "And if you don't have that, you're just hoping your CPA catches what they should."

#### Generalized Negatives (Sultanic)
Never accuse the viewer directly.

| Don't say | Say instead |
|-----------|-------------|
| "Your CPA is failing you" | "Most CPAs are trained to be compliant, not strategic. It's not their fault." |
| "You're overpaying" | "The average entrepreneur with 3+ entities overpays by $30K-$80K annually." |
| "You don't have a plan" | "Most business owners have never had a proactive tax conversation with their CPA." |

#### Toward vs. Away Language (Sultanic)
- **Opening/Hook:** Lead with "away" language (pain, cost, what they're losing) to capture attention
- **Body/Mechanism:** Pivot to "toward" language (vision, results, what's possible)
- **Close:** Blend both. Paint the future, then remind of the cost of inaction.

**Key insight:** Toward/gain customers are 100x easier to upsell and ascend. Away/pain customers are one-time buyers. For Priceless CPA's affluent audience, lean heavily toward/gain. Lead with away only to capture initial attention, then pivot quickly.

#### Copy Structures (from Sultanic's Swipe File)

Use these as structural templates when drafting. Fill blanks with Priceless CPA specifics.

**The Payoff Opening:**
"In the next [X] minutes, I'm going to show you ___ that will ___ and free you from ___ so you never have to ___ again. All without ___. Once you ___, then you'll be able to ___ and you'll never have to ___ or ___."

**The Contrast Opener:**
"There are only two types of [avatar]. The ones that [desired outcome] and the ones that watch them [desired outcome]. That's it."

**Priceless CPA example:** "There are only two types of entrepreneurs making $1M+. The ones who have a proactive tax strategist coordinating everything, and the ones who find out what they owed after the damage is done."

**The Timeline Language:**
"First you'll ___, then once you have ___ then you'll be able to ___. You can now have ___ so you can finally ___ without ever having to ___ and that's when you become ___."

**Assumptive Questions (replace questions with statements):**
Instead of: "So why do you need a proactive CPA?"
Write: "So the #1 reason you need this is... It all comes down to ___. Which brings us to ___. And what this really means is ___."

These create forward momentum. Once you start chaining assumptive statements, you can go on and on. Each statement creates a void the next one fills.

**The 30-Day Close:**
"30 days from now, two things will happen. Either you'll be 30 days older, or you'll be 30 days older and ___. The only difference is the decision you make right now."

**The "Still Here?" Close (after main CTA):**
"Still here? Still thinking about it? Ask yourself why. There's little risk by starting today. In fact, all you lose is [30 minutes of your time / a free conversation] if I'm wrong about this. But what if I'm right? What if ___? What if ___?"

**CRO Doubt Technique (plant doubt about doing nothing):**
"Now that you know how ___ works, and now that you can see how ___... How can you keep doing ___ if ___?"

**Priceless CPA example:** "Now that you know how entity structuring actually saves you $47K a year, and now that you can see how most CPAs never bring this up... How can you keep filing the same way next year if nothing changes?"

### Step 5: Apply Anthony's Voice

Use the same voice markers as YouTube scripts, but adapted for sales context:

**VSL-Appropriate Signature Phrases:**
- "Here's what I see with almost every new client who comes to us"
- "That's not a tax strategy. That's compliance. There's a difference."
- "If your CPA hasn't brought this up, they're not looking at the full picture"
- "Here's exactly what this looks like when it's done right"
- "I'm not saying your CPA is bad. I'm saying the system most CPAs operate in doesn't incentivize this."

**Number Specificity (ALWAYS):**

| DO | DON'T |
|----|-------|
| "$47K in annual savings" | "significant savings" |
| "3 entities, 2 rental properties, and a syndication" | "multiple entities and investments" |
| "Section 199A qualified business income deduction" | "the QBI deduction" |
| "$1.2M across two businesses" | "a high-income client" |

**Script Killers (same as YouTube, plus these VSL-specific ones):**
- "Sign up now!" or "Don't miss out!" (hype, not authority)
- "Limited time offer" without a real reason (manufactured urgency)
- Value stacks with inflated numbers ("$10,000 value for just $97!")
- Fake scarcity
- "Act now before it's too late"
- Any manipulation that wouldn't pass the "would I say this in a boardroom?" test

### Step 6: Run Quality Checklist

Before presenting draft, verify:

#### Agreement Sequence
- [ ] Opens with a statement the viewer cannot disagree with
- [ ] Each section earns a micro-agreement before moving to the next
- [ ] Problem reframe gets 3-5 "yes" moments before introducing the mechanism
- [ ] Mental bind near the close locks in the logic chain

#### Direct Response Psychology
- [ ] Big Domino belief is clear and everything supports it
- [ ] Three false beliefs are addressed (vehicle, internal, external)
- [ ] Top objections handled with "without" statements
- [ ] Claims chunked into believable steps with specific numbers
- [ ] Desire created through lack (showing the gap), not by hyping the offer
- [ ] Generalized negatives used instead of accusatory language
- [ ] Price framed by smallest meaningful unit (if applicable)
- [ ] Negative admittance minimized (viewer doesn't have to admit failure to buy)

#### Sales Conversation Flow (Haynes)
- [ ] Flows like a real sales conversation. No gaps where a question goes unanswered.
- [ ] Each step naturally leads to the next (what > why > buying motives > offer > objections > qualify > CTA)
- [ ] Buying motives cascade from majority hook to minority hooks
- [ ] Price is stated clearly (no hiding it to "get more calls")
- [ ] Qualification section included ("this is for you if... this is NOT for you if...")
- [ ] Character matches audience expectations (peer-to-peer, not guru-to-student)

#### Persuasion Flow
- [ ] Away language in hook/problem, toward language in mechanism/offer
- [ ] Proof stacked (2-3 examples/results, not just one)
- [ ] One clear CTA repeated at the end (and only at the end, or once mid + end)
- [ ] Transition to offer feels natural, not jarring ("Would it be okay if I showed you...")
- [ ] Copy triggers inner monologue ("yes, that's me" response at each section)

#### Voice & Authenticity
- [ ] Zero script killers present
- [ ] Contains Anthony's signature phrases
- [ ] All examples use specific numbers
- [ ] Reads like a confident peer, not a salesperson
- [ ] No em dashes
- [ ] Passes the "would I say this in a boardroom?" test
- [ ] No hype, no manufactured urgency, no inflated value stacks

#### Persona Fit
- [ ] Examples use $250K-$3M+ income levels
- [ ] Addresses multi-entity or multi-asset situations
- [ ] Positions proactive planning as the mechanism
- [ ] Makes Anthony the quarterback who coordinates everything

### Step 7: Present Draft

Create `vsl-script.md` with inline feedback blocks:

```markdown
# [VSL Title / Working Name]

**Type:** [Landing Page / Awareness Bridge / Service-Specific / Ad]
**Structure:** [Agreement Sequence / Epiphany Bridge / Short-Form Ad]
**Target Duration:** ~[X] minutes
**Traffic Temperature:** [Cold / Warm / Hot]
**CTA:** [Book a call / Apply / etc.]
**Status:** Draft

---

## SECTION NAME (~timestamp)

[Script content here...]

<!-- FEEDBACK
- [ ] Tighten / more concise
- [ ] Needs stronger agreement moment
- [ ] Needs specific numbers
- [ ] Needs client story or proof
- [ ] Voice doesn't sound like Anthony

Notes:
-->

---
```

Add global feedback block at the end.

Tell user:
> "Draft complete. Review and add feedback inline, then tell me when you're ready to revise."

---

## Revise Mode

Same revision process as youtube-script-writer:

1. Re-read `vsl-script.md` to capture all feedback
2. Run proactive checks (agreement sequence gaps, missing proof, voice issues)
3. Section-by-section revision with approval
4. Apply changes, ask if approved or another round

### VSL-Specific Revision Checks

| Issue | Fix |
|-------|-----|
| "Feels salesy" | Replace hype with specificity. Add a client story. Use generalized negative instead of direct claim. |
| "Too long" | Cut story/credibility section first. Tighten problem reframe. Combine proof points. |
| "Not convincing" | Check agreement sequence. Where does the viewer first disagree? Fix that section. |
| "Doesn't sound like Anthony" | Replace generic phrases with signature phrases. Add specific numbers. Remove any "sales voice." |
| "Weak close" | Add mental bind. Add "without" statements. Make CTA more specific. |

---

## Finalization

### Create vsl-final.md

Production-ready version with:
- All feedback blocks removed
- `**[CUT TO]**` callouts for visual transitions
- `**[ON-SCREEN TEXT]**` for key numbers, stats, or phrases to display
- `**[B-ROLL]**` for supporting visuals
- Production notes section:

```markdown
# PRODUCTION NOTES

## Recording Format
- [ ] Teleprompter / memorized / conversational
- Recommended: [based on VSL type]

## Visual Style
- [ ] Talking head
- [ ] Screen recording with voiceover
- [ ] Slides/presentation
- Recommended: [based on VSL type and audience]

## On-Screen Text

| Timestamp | Text to Display |
|-----------|----------------|
| [time] | [text] |

## Where This VSL Lives
- **Page:** [URL or page path]
- **Funnel position:** [Where in the marketing funnel]
- **Traffic source:** [Where viewers come from]

## Performance Tracking
- **Key metric:** [Watch-through rate / CTA click rate / booking rate]
- **Target:** [X%]
- **Review after:** [X days / X views]
```

---

## Output Format

Save to: `projects/vsls/[slug]/vsl-script.md`

If the project folder doesn't exist, create it.

---

## Quick Reference: Framework Sources

These frameworks inform this skill. They're principles to internalize, not rigid templates.

### From Jeremy Haynes (VSL Masterclass)
- **VSL = Sales Conversation** - A VSL is just a normal sales conversation without the counterparty. Follow the natural flow of how a real conversation would go.
- **7-Step Flow** - What I can do for you, Why I can do it, Buying motives, Offer + Price, Objections, Qualification, CTA
- **Always State the Price** - Conditions the ad pixel, qualifies leads, turns salespeople into cashiers
- **Character Matching** - Look, dress, and behave like what the audience expects. A fund manager wears a button-down, not a Gucci jumpsuit.
- **Majority Hook Cascade** - Start with the #1 reason people buy, then cascade to secondary and minority hooks. Don't lead with a niche reason.
- **Unanswered Questions Kill VSLs** - If a question forms in the viewer's mind and you don't answer it, they stop hearing everything after that point
- **Play Rate Optimization** - Simplified page (headline + VSL + CTA only), video thumbnails over static, Wistia for analytics
- **Affluent vs. General Public** - Two completely different playbooks. Affluent = short, direct, conservative claims, simple design. General public = longer, empathetic, well-designed, bigger claims.

### From Russell Brunson (Expert Secrets / DotCom Secrets)
- **Hook, Story, Offer** - Every piece of marketing needs all three
- **The Epiphany Bridge** - Take viewers through your "aha moment" so they arrive at the same conclusion
- **The Big Domino** - One belief that, if held, makes all objections irrelevant
- **Three False Beliefs** - Vehicle, Internal, External. Each gets its own story.
- **The Stack** - Present components one at a time, re-stack to show growing value
- **The Perfect Webinar** - Intro, Three Secrets, Transition, Stack and Close
- **Trial Closes** - "Does that make sense?" / "Can you see how this would work?"

### From Alen Sultanic (Direct Response / Swipe Files / Low-Ticket Funnels)
- **Agreement Sequence** - VSL is a series of agreements. Disagree = bounce.
- **Chunking Claims** - Break big claims into believable steps
- **"Without" Objection Removal** - Embed objection handling as "without" statements
- **Desire Through Lack** - Show the gap between what they have and what's possible
- **Mental Binds** - Lock in the logic chain near the close
- **Generalized Negatives** - Let viewers self-identify without feeling attacked
- **Negative Admittance** - Minimize what they have to admit is wrong to buy
- **Toward vs. Away Language** - Away to capture attention, toward to sell the vision. Build business on toward/gain customers.
- **Price Framing** - Break price into smallest meaningful unit
- **Affluent Buyer Rules** - Short, direct, no fluff, no value stacks, simple presentation
- **Copy Structures** - Payoff Opening, Contrast Opener, Timeline Language, Assumptive Questions, 30-Day Close, "Still Here?" Close, CRO Doubt Technique
- **Inner Monologue** - Great copy triggers an inner monologue in the reader. AI copy often lacks this, making it feel flat. Every line should trigger the viewer's internal "yes, that's me" response.
- **Compete on Economics, Not Creativity** - The business that can pay more to acquire a customer wins. Structure funnels so the front-end self-liquidates.

---

## Learnings

-
