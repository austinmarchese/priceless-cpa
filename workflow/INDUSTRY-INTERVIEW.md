# Industry Landing Page Interview Tool

Use this interview guide when creating a new industry landing page. Work through each section to deeply understand the target audience, then use the answers to fill in the `industries-content.ts` file.

---

## How to Use This Tool

1. **Answer each question** as if you're talking to an ideal client from this industry
2. **Be specific** — generic answers create generic copy
3. **Use their language** — how do THEY describe their problems?
4. **After completing**, transfer your answers to `industries-content.ts`

---

## SECTION 1: Industry Identification

**Industry Name:**
_What industry are you targeting? (e.g., "Dentists", "SaaS Founders", "Restaurant Owners")_

```
Answer:
```

**What do they call themselves?**
_How do people in this industry identify? (e.g., "practice owner" vs "dentist", "founder" vs "CEO")_

```
Answer:
```

**What's the typical business size?**
_Revenue range, employee count, years in business_

```
Answer:
```

---

## SECTION 2: Pain Points (The "Before" State)

**What keeps them up at night financially?**
_List 3-5 specific financial worries they have_

```
1.
2.
3.
4.
5.
```

**What have they tried that didn't work?**
_Generic accountants? DIY software? Ignoring it?_

```
Answer:
```

**What's the cost of NOT solving this?**
_Money lost? Time wasted? Stress? Missed opportunities?_

```
Answer:
```

**What specific compliance/regulatory issues do they face?**
_Industry-specific tax rules, licenses, reporting requirements?_

```
Answer:
```

**What financial jargon do THEY use?**
_Industry-specific terms they'd recognize (e.g., "IOLTA" for lawyers, "COGS" for e-commerce)_

```
Answer:
```

---

## SECTION 3: Ideal Client Profile

**Who is the PERFECT client in this industry?**
_Be specific: revenue, business model, mindset, goals_

```
Answer:
```

**Who is NOT a good fit?**
_Who should you filter out?_

```
Answer:
```

**What triggers them to finally seek help?**
_Tax surprise? Growth spurt? Audit notice? Partner pressure?_

```
Answer:
```

**Where do they hang out online/offline?**
_Associations, forums, conferences, podcasts they follow?_

```
Answer:
```

---

## SECTION 4: Your Solution

**What specific services do you offer this industry?**
_List 5 concrete things you do for them_

```
1.
2.
3.
4.
5.
```

**What makes you different for THIS industry?**
_Why should they choose you over a generic CPA?_

```
Answer:
```

**What's your 4-step process for this industry?**
_How do you onboard and serve them? (used for "How We Work" section)_

```
Step 1:
Step 2:
Step 3:
Step 4:
```

**What results can you promise or have you delivered?**
_Specific numbers: tax savings, time saved, problems solved_

```
Answer:
```

---

## SECTION 5: Proof & Credibility

**What stats can you share?**
_Number of clients in this industry, years of experience, average savings, etc._

```
Stat 1:
Stat 2:
Stat 3:
Stat 4:
```

**Do you have testimonials from this industry?**
_Quotes, case studies, success stories_

```
Answer:
```

**What credentials matter to this industry?**
_CPA? Industry certifications? Software expertise?_

```
Answer:
```

---

## SECTION 6: Messaging & Copy

**What's the #1 thing they want?**
_Distill it to one sentence_

```
Answer:
```

**What urgency hook would resonate?**
_For the top banner — what's timely or pressing for them?_

```
Answer:
```

**How would you complete this sentence for them:**
"Finally, an accountant who understands ___________"

```
Answer:
```

**What objections might they have?**
_And how would you address them?_

```
Objection 1:
Response:

Objection 2:
Response:
```

---

## SECTION 7: Transfer to Content File

Now take your answers and fill in this template, then add it to `industries-content.ts`:

```typescript
export const [industryName]Content = {
  // Top banner - urgency hook
  topBarText: '[Your urgency hook from Section 6]',
  topBarHighlight: '[CTA text like "Book your consultation"]',

  // Hero section
  categoryLabel: '[Industry] Accounting',
  headline: '[First part of headline]',
  headlineHighlight: '[Second part in gold - usually the industry name]',
  description: '[1-2 sentences addressing their #1 want from Section 6]',
  heroCta: 'Get [Industry] Accounting Help',

  // What you handle - from Section 4
  benefits: [
    '[Service 1]',
    '[Service 2]',
    '[Service 3]',
    '[Service 4]',
    '[Service 5]',
  ],

  // Who it's for - from Section 3
  whoIsFor: [
    '[Ideal client type 1]',
    '[Ideal client type 2]',
    '[Ideal client type 3]',
    '[Ideal client type 4]',
  ],

  // Process - from Section 4
  processSteps: [
    { num: '01', title: '[Step 1 title]', desc: '[Brief description]' },
    { num: '02', title: '[Step 2 title]', desc: '[Brief description]' },
    { num: '03', title: '[Step 3 title]', desc: '[Brief description]' },
    { num: '04', title: '[Step 4 title]', desc: '[Brief description]' },
  ],

  // Stats - from Section 5
  stats: [
    { value: '[Stat 1]', label: '[Label]' },
    { value: '[Stat 2]', label: '[Label]' },
    { value: '[Stat 3]', label: '[Label]' },
    { value: '[Stat 4]', label: '[Label]' },
  ],

  // Final CTA
  finalHeadline: '[Emotional closer addressing their main pain]',
  finalDescription: '[1 sentence reinforcing the benefit]',
  finalCta: 'Book Your Free Consultation',
}
```

---

## Checklist Before Publishing

- [ ] All fields filled in `industries-content.ts`
- [ ] Created new page folder: `app/industries/[slug]/page.tsx`
- [ ] Copied page template from existing industry page
- [ ] Updated import to use new content export
- [ ] Added industry to the grid in `app/industries/page.tsx`
- [ ] Tested locally at `http://localhost:3001/industries/[slug]`

---

## Tips for Great Copy

1. **Use their words** — If lawyers say "trust account," don't say "escrow account"
2. **Be specific** — "$50K+ tax savings" beats "significant savings"
3. **Address the fear** — What are they afraid of? Speak to it.
4. **Show you get it** — Reference industry-specific challenges
5. **One CTA** — Don't confuse them with options. Book a call.
