---
name: tax-strategy-5
description: Phase 3 of the quarterly tax engagement. Runs the eight cognitive operators against the baseline projection, filters the 25-strategy library by client profile and quarter timing window, applies the strategy selection matrix, and returns ranked recommendations with full authority citations (code section, regulation, rev. proc., notice). Includes 11 industry playbooks and 13 capital deployment vehicles (Operator 8 — AGI > $750K Full Wealth tier). Output is Strategy Recommendations that feed quarterly-memo-6. Partner sign-off required for any aggressive position and for all capital deployment recommendations. The library for this sub-skill lives under `.claude/skills/priceless-tax-planning/tax-strategy/` — this wrapper delegates to it.
---

# Tax Strategy (Phase 3) — Sub-Skill #5

## Delegation

This is a thin wrapper. The actual skill logic lives in the main tax planning library:

**Read and follow**: `.claude/skills/priceless-tax-planning/tax-strategy/SKILL.md`

Key reference files in the library:
- `.claude/skills/priceless-tax-planning/tax-strategy/STRATEGY-SELECTION-MATRIX.md` (ranking logic)
- `.claude/skills/priceless-tax-planning/tax-strategy/TIMING-RULES.md` (quarter-window filter)
- `.claude/skills/priceless-tax-planning/tax-strategy/CREDITS-REFERENCE.md` (federal + state credits)

Strategy library (25 files):
- `.claude/skills/priceless-tax-planning/tax-strategy/strategies/`
  (Retirement, S Corp cluster, Charitable, Coordination/Family, High-value, Secondary)

Industry playbooks (11 files):
- `.claude/skills/priceless-tax-planning/tax-strategy/industries/`
  (E-Commerce, Real Estate Owner, Software/AI, Doctors, Construction, RE Agent, Digital Marketing, Home Services, Jewelry, Investment Firms, Car Washes)

Capital deployment (Operator 8 — AGI > $750K Full Wealth):
- `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/CAPITAL-DEPLOYMENT-FRAMEWORK.md` (8-gate qualification)
- Tier 1: QOZ, DAF-Advanced, §1031 Advanced, Equipment Leasing
- Tier 2: Aircraft, Oil & Gas, CRT/CRUT, Private Foundation
- Tier 3: CLT, Foreign GILTI, Movie Tax Credits
- Partner defense: PROMOTER-PATTERNS-PARTNER-DEFENSE.md

Shared foundation:
- `.claude/skills/priceless-tax-planning/shared/FIRM-METHODOLOGY.md` (eight operators)
- `.claude/skills/priceless-tax-planning/shared/REFERRAL-DISCLOSURE-FRAMEWORK.md` (Path B)
- `.claude/skills/priceless-tax-planning/shared/ENGAGEMENT-STANDARDS.md`

Prerequisite inputs:
- Baseline Projection Memo (from tax-projection-3)
- Reasonable Comp Analysis (from payroll-analysis-4, if S Corp)
- Tax Return Analysis Report (from tax-return-analysis-1)
- Client profile (entity structure, industry, tier, AGI, state ties)

## Position in the engagement

```
Phase 0.5 → tax-return-analysis-1
Phase 1   → bookkeeping-qa-2
Phase 2   → tax-projection-3
Phase 2.5 → payroll-analysis-4 (S Corp only)
Phase 3   → tax-strategy-5              ← YOU ARE HERE
Phase 4   → quarterly-memo-6
```

## The eight cognitive operators (per FIRM-METHODOLOGY.md)

1. **Reconcile** — handled in Phase 1 (bookkeeping-qa-2)
2. **Baseline** — handled in Phase 2 (tax-projection-3)
3. **Reasonable Comp** — handled in Phase 2.5 (payroll-analysis-4)
4. **Entity-Arbitrage** — run here
5. **Accelerate / Defer** — run here (with multi-year framing per updated Operator 5)
6. **Stack** — run here (compound strategies)
7. **Financial Product Overlay** — run here (Path B tiers with affiliate infrastructure)
8. **Capital Deployment** — run here ONLY if AGI > $750K AND foundational planning complete

## Who runs this

US senior staff executes strategy selection and stacking. Partner signs off on:
- Aggressive positions (high audit posture)
- Capital deployment recommendations
- Entity conversions / §1362 elections
- §199A aggregation changes
- Path B affiliate disclosures

## Output

Ranked Strategy Recommendations with, for each strategy:
- Authority citations (IRC, Treas. Reg., Rev. Proc., Notice, case law)
- Projected savings (federal + state delta against baseline)
- Implementation path (who, what, by when)
- Interactions with other strategies on the memo (stacking compatibility)
- Audit posture (Low / Medium / High with documentation requirements)
- Deliverable Points (for downstream documentation skill handoff)

Feeds forward to: quarterly-memo-6 (synthesis into the partner-reviewable memo).
