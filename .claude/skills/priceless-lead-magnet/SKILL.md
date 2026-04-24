---
name: priceless-lead-magnet
description: Framework for creating lead magnet pages that capture emails and deliver value for Priceless CPA
---

# Lead Magnet Generator

## When to Use

Use this skill when Anthony wants to create a new lead magnet, whether that's a checklist, guide, quiz, calculator, or any free resource that captures an email.

## Pre-flight: Sync Check

Before starting, check if there are updates on main:

```bash
git fetch origin main
BEHIND=$(git rev-list HEAD..origin/main --count)
```

If `$BEHIND` > 0, warn the user:
> "There are [N] new commits on main. Run `git pull origin main` to get the latest context files before continuing?"

If up to date, proceed silently.

## The Lead Magnet Framework

Every effective lead magnet for Priceless CPA should hit these five criteria before building:

### 1. Specificity Test

The lead magnet must solve ONE specific problem for ONE specific person.

**Good:** "7 Questions to Ask Your CPA Before You Sign Your Return"
**Bad:** "Tax Tips for Business Owners"

Ask: *Can the reader use this in their next meeting, conversation, or decision?* If no, make it more specific.

### 2. Format Decision

Choose the format that best delivers the value:

| Format | Best For | Complexity | Example |
|--------|----------|------------|---------|
| **Interactive Quiz** | Personalized recommendations, high engagement | High | "Should You Switch to S-Corp?" quiz with branching results |
| **Checklist** | Step-by-step processes, "did I miss anything?" anxiety | Low | "Year-End Tax Checklist for Real Estate Investors" |
| **Calculator** | Number-driven decisions, "how much am I losing?" | Medium | "S-Corp Salary Savings Calculator" |
| **Guide/PDF** | Educational deep-dives, establishing authority | Low | "The Business Owner's Guide to Quarterly Estimated Taxes" |
| **Assessment** | "Where do I stand?" self-evaluation | Medium | "Rate Your Tax Strategy: 10-Point Assessment" |

**Recommendation for Priceless CPA:** Interactive quizzes and checklists convert best because they deliver personalized, immediately useful results. Guides work for SEO but convert lower.

### 3. Audience Alignment

The lead magnet must target one of Priceless CPA's core audiences:

- **Serial entrepreneurs** ($250K-$2M, multiple entities, complex structures)
- **Real estate investors** (rental properties, cost seg, 1031 exchanges)
- **Scaling business owners** (outgrowing TurboTax, need proactive strategy)
- **Crypto/DeFi investors** (complex transaction reporting)
- **High-income professionals** (attorneys, doctors, tech workers with side businesses)

Ask: *Which audience does this serve, and what specific pain point are they Googling at 11pm?*

### 4. The Value-to-Ask Ratio

The value delivered must far exceed the "cost" of giving an email.

**High value (worth an email):**
- Personalized results based on their situation
- A specific dollar amount they could save
- A checklist they can literally hand to their CPA
- A score/grade with actionable next steps

**Low value (not worth an email):**
- Generic advice they could find on Google
- A PDF that restates your blog post
- "Tips" without specificity

### 5. The Conversion Path

Every lead magnet needs a clear next step:

```
Lead Magnet -> Email Captured -> Value Delivered -> CTA to Book Consultation
```

The CTA should feel natural, not salesy. Pattern:
> "Not happy with your results? Let's talk." or "Want help implementing this? Book a free consultation."

---

## Process

### Step 1: Define the Lead Magnet

Ask Anthony:

1. **Who is this for?** (which audience segment)
2. **What specific problem does it solve?**
3. **What format?** (quiz, checklist, calculator, guide, assessment)
4. **What's the headline?** (should pass the specificity test)
5. **What URL slug?** (e.g., `/s-corp-quiz`, `/year-end-checklist`)

### Step 2: Build the Content

Before writing any code, outline:

- **The questions/sections** (what does the user interact with or read?)
- **The personalized results** (what do they get after giving their email?)
- **The "aha moment"** (what makes them think "I need a better CPA"?)

### Step 3: Generate the Page

Create two files:

**`app/[slug]/layout.tsx`** - SEO metadata following existing pattern
**`app/[slug]/page.tsx`** - The lead magnet page

The page must follow the Priceless CPA lead magnet structure:

```
Page Structure:
1. Dark background (bg-[#0f1222])
2. Headline with gold accent (text-[#c4a24e])
3. Core content (quiz steps, checklist items, calculator, etc.)
4. Email capture gate (before showing results)
5. Personalized results/value delivery
6. CTA section (Book a Free Consultation -> Calendly)
7. Footer with logo
```

**Reference implementation:** `app/tax-checklist/page.tsx` is the gold standard. All new lead magnets should match its patterns for colors, spacing, components, and responsive behavior.

### Step 4: Verify with /code-review

Run `/code-review` after generating to confirm branding compliance.

---

## Branding Quick Reference

| Element | Class/Value |
|---------|-------------|
| Page bg | `bg-[#0f1222]` |
| Card bg | `bg-white/5` with `border border-white/10` |
| Gold | `#c4a24e` |
| Gold hover | `#d4b25e` |
| Headline | `text-white font-semibold` |
| Gold accent text | `text-[#c4a24e] font-serif italic` |
| Body text | `text-white/70` |
| Muted text | `text-white/40` |
| Input bg | `bg-white/10 border-white/20` |
| Button primary | `bg-[#c4a24e] text-[#0f1222]` |
| Form endpoint | `https://formsubmit.co/ajax/anthony@priceless.cpa` |
| CTA link | `https://calendly.com/pricelesscpa/intro` |

## Lead Magnet Ideas Bank

Ideas that align with Priceless CPA's audience and content strategy:

| Idea | Format | Audience | Pain Point |
|------|--------|----------|------------|
| Should You Switch to S-Corp? | Quiz | Scaling owners | "Am I in the right entity?" |
| Year-End Tax Move Checklist | Checklist | All business owners | "What should I do before Dec 31?" |
| How Much Is Your CPA Costing You? | Calculator | Underserved owners | "Am I leaving money on the table?" |
| Real Estate Investor Tax Scorecard | Assessment | RE investors | "Am I maximizing my deductions?" |
| New Business Tax Setup Checklist | Checklist | New entrepreneurs | "What do I need to set up?" |
| Crypto Tax Prep Checklist | Checklist | Crypto investors | "What records do I need?" |

## Example

```
User: /lead-magnet

Claude: Let's build a new lead magnet. Who is this for, and what specific problem does it solve?

User: Real estate investors who aren't sure if they're getting the right deductions

Claude: Good audience. A few format options:
- Assessment: "Rate Your RE Tax Strategy" (they answer questions, get a score)
- Checklist: "12 Deductions Every RE Investor Should Claim" (simple list, high save rate)
- Quiz: "Are You Overpaying on Your Rental Property Taxes?" (personalized result)

Which feels right?

User: The assessment

Claude: What headline? I'd suggest something like:
"Rate Your Real Estate Tax Strategy" with the accent line "Find Out What You're Missing"

[continues building...]
```

## Learnings

-
