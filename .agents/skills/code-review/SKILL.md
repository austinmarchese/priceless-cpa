---
name: code-review
description: Review the Priceless CPA codebase for branding consistency, code quality, and best practices
---

# Code Review

## When to Use

Use this skill when you:
- Want to audit the codebase for branding/style consistency
- Before pushing a new page or feature to production
- After a batch of changes to make sure nothing drifted
- Want to check that new pages match existing patterns

## Process

### Pre-flight: Sync Check

Before starting, check if there are updates on main:

```bash
git fetch origin main
BEHIND=$(git rev-list HEAD..origin/main --count)
```

If `$BEHIND` > 0, warn the user:
> "There are [N] new commits on main. Run `git pull origin main` to get the latest context files before continuing?"

If up to date, proceed silently.

### Step 1: Scan All Pages

Read every page file in `app/` and check against the branding system below.

### Step 2: Check Branding Compliance

**Color System (must match exactly):**
| Token | Value | Usage |
|-------|-------|-------|
| Background (primary) | `#06080e` | Main page bg |
| Background (secondary) | `#0b0e18` | Alternate section bg |
| Background (card) | `#0f1222` | Cards, inputs, containers |
| Gold accent | `#c4a24e` | CTAs, highlights, borders, hover states |
| Gold hover | `#d4b25e` | Button hover states |
| Gold border subtle | `#c4a24e/10` or `#c4a24e/20` | Subtle borders |
| Text primary | `#f0ede6` | Headlines on dark bg |
| Text body | `#c8c5bc` | Body text on dark bg |
| Text muted | `#7a7870` | Secondary/meta text |
| Text faint | `white/50`, `white/40` | Footer, fine print |

**Typography:**
- Headlines: `font-display` class (or `font-semibold` on lead magnet pages)
- Body: Default system font stack
- Tracking: `tracking-wide` or `tracking-[0.2em]` for labels
- No em dashes anywhere. Use commas, periods, or restructure.

**Component Patterns:**
- CTAs always link to `https://calendly.com/pricelesscpa/intro`
- Primary buttons: `bg-[#c4a24e] text-[#0f1222]` with rounded-full or rounded-xl
- Cards: `bg-[#0f1222] rounded-xl border border-[#c4a24e]/10`
- Logo: `<Image src="/logo.webp" .../>` with `rounded-lg`
- Footer: Always includes logo, copyright with current year, and back link

**Page Structure (industry/service pages):**
1. Top bar (urgency banner)
2. Logo bar
3. Hero section
4. Benefits / What We Handle
5. How We Work (4-step process)
6. Stats
7. Final CTA
8. Footer

**Page Structure (lead magnet pages):**
1. Dark background `bg-[#0f1222]`
2. Headline with gold `text-[#c4a24e]` accent
3. Progress/interactive element
4. Email capture form
5. Results/value delivery
6. CTA to Calendly
7. Minimal footer

### Step 3: Check Code Quality

- `'use client'` directive present on interactive pages
- Proper `next/image` usage (no raw `<img>` tags)
- Proper `next/link` usage (no raw `<a>` for internal links)
- `metadata` exported from layout.tsx files (SEO)
- No hardcoded dates (use `new Date().getFullYear()`)
- Form submissions go to `https://formsubmit.co/ajax/anthony@priceless.cpa`
- Mobile responsive (check for `md:` breakpoints)
- Accessibility: alt text on images, proper heading hierarchy

### Step 4: Report Findings

Output a table with:

| File | Issue | Severity | Fix |
|------|-------|----------|-----|

Severity levels: `critical` (broken/wrong), `warning` (inconsistent), `nitpick` (style preference)

Then fix all critical and warning issues automatically. Ask before fixing nitpicks.

## Inputs Needed

- None, reads the entire `app/` directory

## Output

- Table of findings
- Auto-fixes applied for critical/warning issues
- Summary of what was changed

## Learnings

-
