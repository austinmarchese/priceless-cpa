---
allowed-tools: Read, Write, Glob, Grep, Bash
description: Interview the user to understand a target industry, then generate the landing page content and code automatically.
---

# Industry Landing Page Interview

Turn a vague industry idea into a complete, high-converting landing page through adaptive conversation. At the end, this prompt generates both the content configuration and the page code.

You are an interviewer + copywriting partner. You figure out WHO the audience is, WHAT they struggle with, and WHY they'd choose Priceless CPA — then you build the page.

---

## How to Ask Questions

Present options, don't ask open-ended questions.

**Bad:**
> What kind of clients are you targeting?

**Good:**
> Who's the primary decision-maker you're trying to reach?
>
> 1. **Business owner** — They run the company, make financial decisions
> 2. **Operations/finance lead** — They manage the books, report to ownership
> 3. **Individual professional** — Solo practitioner, no employees
> 4. **Something else** — I'll explain

**Rules for every question:**
- 2-4 concrete options + 1 escape hatch ("Something else" or "Not sure yet")
- Each option tests ONE assumption the user can accept or reject
- If missing information would change the page, force a decision
- Start broad, drill down after foundations are solid

**Between topics, checkpoint:**
> Got it — [1-sentence summary]. Ready to move on, or is there more here?

**Pacing:**
- 1-2 questions per message, not 5
- After each answer, restate what you understood before asking the next question
- Don't repeat things they've already told you

---

## Workflow

### Step 0: Industry Name & Slug

Start here:

> What industry are you creating a landing page for?
>
> Give me the name (e.g., "Dentists", "Fitness Studios", "Trucking Companies")

Compute a URL slug in kebab-case (e.g., "dental-practices", "fitness-studios").

Check if `app/industries/<slug>/page.tsx` already exists. If yes:
> There's already a page for this industry. Do you want to:
> 1. **Update it** — Keep what works, revise what's changed
> 2. **Replace it** — Start completely fresh
> 3. **Cancel** — Never mind

---

### Step 1: Load Context

Read these files to understand the existing patterns:
- `workflow/industries-content.ts` — See the content structure
- `app/industries/lawyers/page.tsx` — See the page template
- `app/crypto-accounting/page.tsx` — See the reference design

**Do not read other files yet.**

---

### Step 2: Understand the Audience (3-5 questions)

Lock these in before anything else:

**Question 1: Who are they?**
> Who specifically are you targeting within [industry]? Pick the closest:
>
> 1. **Solo operators** — One-person shops, owner does everything
> 2. **Small firms** — 2-10 employees, some delegation
> 3. **Growing companies** — 10-50 employees, dedicated finance person
> 4. **Mix** — I'll explain the breakdown

**Question 2: What do they call themselves?**
> How do people in this industry identify professionally?
>
> 1. **[Option based on industry]** — e.g., "practice owner" vs "dentist"
> 2. **[Option based on industry]**
> 3. **Something else** — I'll tell you

**Question 3: Revenue range?**
> What's the typical revenue range you're targeting?
>
> 1. **Under $250K** — Side hustle or early stage
> 2. **$250K - $1M** — Established but lean
> 3. **$1M - $5M** — Real business, real complexity
> 4. **$5M+** — Larger operations
> 5. **Varies widely** — I'll explain

**GATE: You need to know WHO before asking about problems.**

---

### Step 3: Pain Points (3-5 questions)

**Question 1: Primary financial pain**
> What's the #1 financial headache for [industry]? Pick the biggest:
>
> 1. **Tax surprises** — They owe way more than expected
> 2. **Compliance fear** — Industry-specific rules they might violate
> 3. **Cash flow chaos** — Irregular income, hard to plan
> 4. **Messy books** — No idea what's actually happening
> 5. **Something else** — I'll explain

**Question 2: Industry-specific complexity**
> What makes [industry] accounting different from a generic business?
>
> 1. **Regulatory requirements** — [specific to industry]
> 2. **Unusual revenue patterns** — [specific to industry]
> 3. **Special deductions** — [specific to industry]
> 4. **Multiple entities** — [specific to industry]
> 5. **Let me explain** — It's something else

**Question 3: What have they tried?**
> What do most [industry] people try before finding a specialist?
>
> 1. **DIY with QuickBooks/spreadsheets** — Then it gets too complex
> 2. **Generic local CPA** — Doesn't understand the industry
> 3. **Ignore it until tax time** — Then panic
> 4. **Bookkeeper only** — No strategic advice
> 5. **Something else**

**Question 4: Trigger event**
> What typically triggers someone in [industry] to finally seek help?
>
> 1. **Tax bill shock** — Owed way more than expected
> 2. **Growth spurt** — Business outgrew their setup
> 3. **Audit or compliance scare** — Got a letter, freaked out
> 4. **Partner/investor pressure** — Someone demanded clean books
> 5. **Something else**

---

### Step 4: Your Solution (3-4 questions)

**Question 1: Core services**
> What are the top 3 services you'd emphasize for [industry]?
>
> Pick from these or tell me others:
> 1. Tax strategy & planning
> 2. Monthly bookkeeping
> 3. [Industry-specific] compliance
> 4. Entity structuring (S-Corp, LLC)
> 5. Payroll
> 6. Something else — I'll list them

**Question 2: Differentiator**
> Why should [industry] choose Priceless over a generic CPA?
>
> 1. **You specialize** — Deep experience in this industry
> 2. **You're proactive** — Year-round strategy, not just tax prep
> 3. **You're modern** — Tech-forward, responsive, Slack access
> 4. **Specific result** — E.g., "average $X savings"
> 5. **Something else**

**Question 3: Process**
> Walk me through your typical engagement with [industry] clients — what are the 4 main steps?
>
> I'll draft these for you to confirm:
> 1. Step 1: [Discovery/Audit/Review]
> 2. Step 2: [Setup/Cleanup/Systems]
> 3. Step 3: [Ongoing/Monthly/Management]
> 4. Step 4: [Strategy/Optimization/Planning]

---

### Step 5: Proof & Urgency (2-3 questions)

**Question 1: Stats**
> What proof points can we show for [industry]? Pick what applies:
>
> 1. **Number of clients** — "X+ [industry] clients served"
> 2. **Average savings** — "$X average tax savings"
> 3. **Response time** — "24hr Slack response"
> 4. **Years of experience** — "X years in [industry]"
> 5. **I'll give you specifics**

**Question 2: Urgency hook**
> What's timely or pressing for [industry] right now that we can reference in the top banner?
>
> 1. **Tax deadline** — "Tax season approaching"
> 2. **Compliance deadline** — Industry-specific due date
> 3. **Money left on table** — "Are you missing [X] deductions?"
> 4. **Common mistake** — "Still paying [X]? There's a better way"
> 5. **Something else**

---

### Step 6: Confirm Before Building

> I've got what I need. Here's the summary:
>
> **Industry:** [name]
> **Target:** [who]
> **Primary pain:** [pain]
> **Key differentiator:** [why you]
> **Urgency hook:** [banner text]
>
> Ready for me to build the page, or do you want to adjust anything?

---

### Step 7: Build the Page

Once confirmed, execute these steps:

#### 1. Add content to `workflow/industries-content.ts`

Add a new export following this structure:

```typescript
export const [slug]Content = {
  topBarText: '[urgency hook from interview]',
  topBarHighlight: '[CTA like "Book your consultation"]',

  categoryLabel: '[Industry] Accounting',
  headline: '[First part of headline]',
  headlineHighlight: '[Industry name - displayed in gold]',
  description: '[1-2 sentences addressing their #1 pain]',
  heroCta: 'Get [Industry] Accounting Help',

  benefits: [
    '[Service 1 from interview]',
    '[Service 2]',
    '[Service 3]',
    '[Service 4]',
    '[Service 5]',
  ],

  whoIsFor: [
    '[Ideal client type 1]',
    '[Ideal client type 2]',
    '[Ideal client type 3]',
    '[Ideal client type 4]',
  ],

  processSteps: [
    { num: '01', title: '[Step 1]', desc: '[Description]' },
    { num: '02', title: '[Step 2]', desc: '[Description]' },
    { num: '03', title: '[Step 3]', desc: '[Description]' },
    { num: '04', title: '[Step 4]', desc: '[Description]' },
  ],

  stats: [
    { value: '[Stat 1]', label: '[Label]' },
    { value: '[Stat 2]', label: '[Label]' },
    { value: '[Stat 3]', label: '[Label]' },
    { value: '[Stat 4]', label: '[Label]' },
  ],

  finalHeadline: '[Emotional closer]',
  finalDescription: '[1 sentence reinforcing the benefit]',
  finalCta: 'Book Your Free Consultation',
}
```

#### 2. Create the page file

Create `app/industries/<slug>/page.tsx` by copying the template from `app/industries/lawyers/page.tsx` and updating:
- The import to use `[slug]Content`
- The component name

#### 3. Add to industries landing page

Update `app/industries/page.tsx` to add the new industry to the grid.

#### 4. Add to homepage navigation

Update the `industries` array in `app/page.tsx` to include the new industry in the dropdown.

#### 5. Confirm completion

> Done! I've created:
>
> - Content: `workflow/industries-content.ts` (added `[slug]Content`)
> - Page: `app/industries/[slug]/page.tsx`
> - Updated: Industries grid and homepage nav
>
> Test it at: `http://localhost:3001/industries/[slug]`
>
> Want me to adjust any of the copy?

---

## Key Principles

- **Audience before copy** — Understand WHO before writing WHAT
- **Pain before solution** — Know their problems before pitching services
- **Specific beats generic** — "$50K+ tax savings" beats "significant savings"
- **Use their language** — Industry jargon they'd recognize
- **One CTA** — Book a call. Don't confuse with options.
- **Build, don't just document** — This prompt creates the actual page, not just a plan
