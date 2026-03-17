---
name: industry-page
description: Interview the user to understand a target industry, then generate a complete landing page with content and code
triggers:
  - new industry page
  - new industry landing page
  - create industry page
  - build industry page
  - add industry
  - new landing page for
tools:
  - Read
  - Write
  - Bash
metadata: {"openclaw":{"platforms":["darwin","linux","win32"]}}
---

# Industry Landing Page Builder

You create high-converting industry landing pages for Priceless CPA through an interview process.

## When to Activate

User says something like:
- "I want to build a new industry landing page"
- "Create a landing page for dentists"
- "Add a new industry page"
- "New landing page for restaurants"

## Your Role

You are an interviewer + copywriting partner. You figure out WHO the audience is, WHAT they struggle with, and WHY they'd choose Priceless CPA — then you build the page automatically.

## Step 1: Get the Industry Name

Ask:
> What industry are you creating a landing page for?
>
> Give me the name (e.g., "Dentists", "Fitness Studios", "Trucking Companies")

Compute a URL slug in kebab-case (e.g., `dental-practices`).

Check if `app/industries/<slug>/page.tsx` exists:
- If yes, ask: Update it, Replace it, or Cancel?
- If no, continue

## Step 2: Understand the Audience (3-4 questions)

Ask structured questions with 3-4 options each. Example:

> Who specifically are you targeting within [industry]?
>
> 1. **Solo operators** — One-person shops
> 2. **Small firms** — 2-10 employees
> 3. **Growing companies** — 10-50 employees
> 4. **Mix** — I'll explain

Cover:
- Who are they? (size, role)
- What do they call themselves?
- Revenue range?

**Checkpoint:** Summarize what you learned, confirm before moving on.

## Step 3: Pain Points (3-4 questions)

Ask about:
- Primary financial pain (tax surprises, compliance fear, cash flow, messy books)
- What makes this industry's accounting unique
- What they've tried before (DIY, generic CPA, ignored it)
- Trigger event (what makes them finally seek help)

**Checkpoint:** Summarize pain points, confirm.

## Step 4: Your Solution (3 questions)

Ask about:
- Top 3-5 services to emphasize
- Key differentiator (why Priceless over generic CPA)
- 4-step process for working with clients

**Checkpoint:** Summarize solution, confirm.

## Step 5: Proof & Urgency (2 questions)

Ask about:
- Stats to display (# of clients, average savings, response time, years experience)
- Urgency hook for top banner (deadline, money left on table, common mistake)

## Step 6: Confirm Before Building

Show summary:
> Here's what I've got:
>
> **Industry:** [name]
> **Target:** [who]
> **Primary pain:** [pain]
> **Key differentiator:** [why you]
> **Urgency hook:** [banner text]
>
> Ready to build, or want to adjust?

## Step 7: Build the Page

Once confirmed, do ALL of these:

### 7a. Read the template
```bash
Read app/industries/lawyers/page.tsx
Read workflow/industries-content.ts
```

### 7b. Add content to industries-content.ts

Add a new export at the end of the file:

```typescript
export const [slug]Content = {
  topBarText: '[urgency hook]',
  topBarHighlight: 'Book your consultation',

  categoryLabel: '[Industry] Accounting',
  headline: '[First part]',
  headlineHighlight: '[Industry name in gold]',
  description: '[1-2 sentences on their #1 pain]',
  heroCta: 'Get [Industry] Accounting Help',

  benefits: [
    '[Service 1]',
    '[Service 2]',
    '[Service 3]',
    '[Service 4]',
    '[Service 5]',
  ],

  whoIsFor: [
    '[Client type 1]',
    '[Client type 2]',
    '[Client type 3]',
    '[Client type 4]',
  ],

  processSteps: [
    { num: '01', title: '[Step 1]', desc: '[Desc]' },
    { num: '02', title: '[Step 2]', desc: '[Desc]' },
    { num: '03', title: '[Step 3]', desc: '[Desc]' },
    { num: '04', title: '[Step 4]', desc: '[Desc]' },
  ],

  stats: [
    { value: '[Stat]', label: '[Label]' },
    { value: '[Stat]', label: '[Label]' },
    { value: '[Stat]', label: '[Label]' },
    { value: '[Stat]', label: '[Label]' },
  ],

  finalHeadline: '[Emotional closer]',
  finalDescription: '[Benefit reinforcement]',
  finalCta: 'Book Your Free Consultation',
}
```

### 7c. Create the page file

Create `app/industries/<slug>/page.tsx`:
- Copy structure from `app/industries/lawyers/page.tsx`
- Change import to `{ [slug]Content }`
- Update component name

### 7d. Update industries grid

Edit `app/industries/page.tsx`:
- Add new entry to the `industries` array

### 7e. Update homepage nav

Edit `app/page.tsx`:
- Add new entry to the `industries` array in the dropdown

### 7f. Confirm completion

> Done! Created:
> - `workflow/industries-content.ts` — added [slug]Content
> - `app/industries/[slug]/page.tsx` — new page
> - Updated industries grid and homepage nav
>
> Test at: http://localhost:3001/industries/[slug]

## Rules

- Ask 1-2 questions per message, not 5
- Always give 3-4 options + escape hatch ("Something else")
- Summarize after each section before moving on
- Don't ask open-ended questions
- Use their industry language, not accounting jargon
- Be specific: "$50K savings" not "significant savings"
