---
name: industry-playbook
description: Utility skill for pulling the industry-specific strategy playbook for a client. Given the client's industry, returns the pre-scored strategy bias for that vertical — what usually works, what usually doesn't, the common pitfalls, industry-specific accounting methods, and any sector-specific tax code (e.g., real estate §469 REPS, software §174, medical §199A SSTB treatment). Covers 11 industries Priceless serves: E-Commerce, Real Estate Owner, Software/AI, Doctors/Medical, Construction, Real Estate Agent, Digital Marketing, Home Services, Jewelry Store, Investment Firms, Car Washes. Called on-demand — typically by tax-strategy-5 to filter the 25-strategy library to industry-relevant recommendations, or standalone when onboarding a client in a specific industry. Trigger phrases: "industry playbook for [industry]", "what works for e-commerce clients", "real estate tax strategies", "pull the SaaS playbook". This is a reference utility, not a phase sub-skill. The library lives under `.claude/skills/priceless-tax-planning/tax-strategy/industries/`.
---

# Industry Playbook Utility

## Purpose

Pull the industry-specific strategy playbook on demand. The main library has a file for each of the 11 industries Priceless actively serves. This wrapper makes those playbooks accessible as a standalone slash command so analysts can get industry-specific context without loading the full engagement skill.

Two typical calls:

1. **From tax-strategy-5** — filter the 25-strategy library to what usually applies in a given industry, score by industry fit
2. **Standalone** — analyst onboarding a new client, partner preparing for a discovery call, senior staff writing a pitch for a prospect in a specific vertical

## How to use

### Input

Industry name (match one of the 11 covered):
- E-Commerce
- Real Estate Owner
- Software / AI / SaaS
- Doctors / Medical
- Construction
- Real Estate Agent
- Digital Marketing
- Home Services
- Jewelry Store
- Investment Firms
- Car Washes

If the client's industry doesn't match, surface the closest adjacent playbook and flag the partial fit.

### Step 1: Resolve the industry file

Industry files live under `.claude/skills/priceless-tax-planning/tax-strategy/industries/`. Map industry to filename:
- E-Commerce → `E-COMMERCE.md`
- Real Estate Owner → `REAL-ESTATE-OWNER.md`
- Software/AI → `SOFTWARE-AI.md`
- Doctors/Medical → `DOCTORS-MEDICAL.md`
- Construction → `CONSTRUCTION.md`
- Real Estate Agent → `REAL-ESTATE-AGENT.md`
- Digital Marketing → `DIGITAL-MARKETING.md`
- Home Services → `HOME-SERVICES.md`
- Jewelry Store → `JEWELRY-STORE.md`
- Investment Firms → `INVESTMENT-FIRMS.md`
- Car Washes → `CAR-WASHES.md`

Router file: `.claude/skills/priceless-tax-planning/tax-strategy/industries/SKILL.md` covers the selection logic.

### Step 2: Read the playbook

Each industry playbook covers:
- Typical client profile (revenue range, entity structure, margin profile)
- Industry-specific accounting methods (e.g., completed-contract vs. percentage-of-completion for construction; inventory capitalization under §263A for product businesses)
- Industry-specific tax code triggers:
  - **Real Estate**: §469 passive activity / REPS qualification, §1031, cost segregation, §163(j) RPTB election, §199A 2.5% UBIA real property, Opportunity Zones, bonus depreciation on components
  - **Software/AI**: §174 R&E capitalization (OBBBA restored expensing with transition), R&D credit §41, §1202 QSBS for C Corp scenarios
  - **Doctors/Medical**: §199A SSTB classification (affects QBI), §162(l) for S Corp setup, retirement plan stacking given W-2 + S Corp income
  - **E-Commerce**: inventory §263A UNICAP, state sales tax nexus (Wayfair), payment processor 1099-K reconciliation
  - **Construction**: small contractor §460 exemption, retention receivable timing, §263A exceptions
  - **Real Estate Agent**: Schedule C vs. S Corp conversion, auto and home office, §199A rental exclusion
  - **Digital Marketing**: service business §199A W-2 wage limit, software capex vs. opex, contractor vs. W-2
  - **Home Services**: S Corp reasonable comp given lots of crew labor, vehicle §179 vs. bonus, accountable plans
  - **Jewelry**: inventory method (LIFO consideration), §179 for secure storage, §199A retail treatment
  - **Investment Firms**: §1411 NIIT, SSTB treatment for advisory, carried interest (§1061), §199A treatment of management fees vs. incentive
  - **Car Washes**: heavy equipment bonus depreciation, §179 caps (property vs. vehicle), water/environmental credits if applicable
- Strategies that typically apply with high priority
- Strategies that typically do NOT apply (and why)
- Industry benchmarks for reasonable comp (S Corp clients)
- Common pitfalls and audit triggers for this industry
- Sample memo language specific to the industry

### Step 3: Apply to the caller's context

**If called from tax-strategy-5**:
- Return the prioritized strategy list for that industry
- Flag strategies to exclude / deprioritize
- Apply the industry-specific scoring bias to the selection matrix
- Surface industry-specific audit posture notes

**If called standalone** (onboarding, pitch prep):
- Return the full playbook summary
- Highlight what distinguishes this industry from generic SMB tax planning
- Flag the 3-5 questions to ask the prospect to qualify them into the industry

### Step 4: Cross-references

Many clients straddle industries (e.g., an e-commerce founder who owns real estate; a construction company owner with investment property). When that happens:
- Return both playbooks
- Flag the interaction (e.g., REPS qualification doesn't apply to e-commerce hours, but does to real estate hours)
- Note that the real estate file is the most commonly-stacked secondary playbook

### Step 5: Flag when the playbook doesn't fully apply

Industries evolve. If the client's business model doesn't map cleanly:
- Return the closest playbook
- Flag the mismatch explicitly
- Suggest partner review for the strategy selection

## What this skill does NOT do

- Does not replace the industry-specific lived experiences in `wiki/` (those are for content / sales; this is for tax execution)
- Does not compute strategy savings (that's tax-strategy-5)
- Does not override the strategy selection matrix (it biases it, doesn't replace it)
- Does not cover industries not in the 11-file library (flags the gap instead)

## Output format

```
Industry: {INDUSTRY}
Typical client profile: {summary}
High-priority strategies for this industry:
  1. {Strategy} — {why}
  2. {Strategy} — {why}
  ...
Strategies to deprioritize:
  - {Strategy} — {why}
Industry-specific tax code triggers: {list}
Common pitfalls: {list}
Audit posture notes: {list}
Cross-industry considerations: {if applicable}
Source file: .claude/skills/priceless-tax-planning/tax-strategy/industries/{INDUSTRY}.md
```
