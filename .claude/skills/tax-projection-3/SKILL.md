---
name: tax-projection-3
description: Phase 2 of the quarterly tax engagement. Produces the baseline federal + state tax projection that becomes the denominator for every strategy in Phase 3. Reads verified books from bookkeeping-qa-2 and the Tax Return Analysis Report from tax-return-analysis-1, builds current-year projection on actual YTD + annualized remainder, reconciled to OBBBA 2025 (P.L. 119-21) and 2026 indexed amounts (Rev. Proc. 2025-32, Notice 2025-67). Output is the Baseline Projection Memo. Run after bookkeeping-qa-2 passes and (for S Corps) after payroll-analysis-4 sets reasonable comp. The library for this sub-skill lives under `.claude/skills/priceless-tax-planning/tax-projection/` — this wrapper delegates to it.
---

# Tax Projection (Phase 2) — Sub-Skill #3

## Delegation

This is a thin wrapper. The actual skill logic lives in the main tax planning library:

**Read and follow**: `.claude/skills/priceless-tax-planning/tax-projection/SKILL.md`

Also load these supporting files from the library:
- `.claude/skills/priceless-tax-planning/tax-projection/FEDERAL-TAX-COMPUTATION.md`
- `.claude/skills/priceless-tax-planning/tax-projection/STATE-TAX-BASELINE.md`
- `.claude/skills/priceless-tax-planning/tax-projection/SAFE-HARBOR-METHODOLOGY.md`

State-specific rules (load as needed based on client ties):
- `.claude/skills/priceless-tax-planning/states/{STATE}.md`

Multi-state engagements:
- `.claude/skills/priceless-tax-planning/workflows/MULTI-STATE-MECHANICS.md`

And the shared foundation files:
- `.claude/skills/priceless-tax-planning/shared/FIRM-METHODOLOGY.md`
- `.claude/skills/priceless-tax-planning/shared/OUTPUT-TEMPLATES.md`
- `.claude/skills/priceless-tax-planning/shared/ENGAGEMENT-STANDARDS.md`

Prerequisite inputs:
- Tax Return Analysis Report (from tax-return-analysis-1)
- Data Integrity Summary — "proceed" (from bookkeeping-qa-2)
- Reasonable Comp Analysis (from payroll-analysis-4, if S Corp)

## Position in the engagement

```
Phase 0.5 → tax-return-analysis-1
Phase 1   → bookkeeping-qa-2
Phase 2   → tax-projection-3            ← YOU ARE HERE
Phase 2.5 → payroll-analysis-4 (S Corp only — runs alongside / before this phase)
Phase 3   → tax-strategy-5
Phase 4   → quarterly-memo-6
```

## Who runs this

Offshore analysts handle entity projections, 1040 stack, Tier 2 state projections. US senior staff reviews multi-state allocations, OBBBA transition issues, variance narrative. Partner reviews baseline before Phase 3 begins on Full Wealth tier engagements.

## Output

Baseline Projection Memo with:
- Federal + state tax liability
- Safe harbor target and quarterly estimate schedule
- Variance-to-prior-year analysis with drivers
- Marginal rates (used by Phase 3 for strategy delta math)
- Assumptions and open items

Feeds forward to: tax-strategy-5 (this baseline becomes the denominator).
