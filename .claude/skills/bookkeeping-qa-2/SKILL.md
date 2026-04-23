---
name: bookkeeping-qa-2
description: Phase 1 of the quarterly tax engagement. Verifies the client's QBO books reconcile before any projection work. Reviews P&L, Balance Sheet, Trial Balance, and General Ledger to identify reconciliation issues, classification errors, and trend anomalies. Produces the Data Integrity Summary — "books are clean, proceed" OR "blockers found, stop and fix." Run after tax-return-analysis-1 and BEFORE tax-projection-3. A projection built on broken books produces a broken memo. The library for this sub-skill lives under `.claude/skills/priceless-tax-planning/bookkeeping-qa/` — this wrapper delegates to it.
---

# Bookkeeping QA (Phase 1) — Sub-Skill #2

## Delegation

This is a thin wrapper. The actual skill logic lives in the main tax planning library:

**Read and follow**: `.claude/skills/priceless-tax-planning/bookkeeping-qa/SKILL.md`

Also load these supporting files from the library:
- `.claude/skills/priceless-tax-planning/bookkeeping-qa/COMMON-CLASSIFICATION-ERRORS.md`
- `.claude/skills/priceless-tax-planning/bookkeeping-qa/PAYROLL-RECONCILIATION-METHODOLOGY.md`

And the shared foundation files:
- `.claude/skills/priceless-tax-planning/shared/FIRM-METHODOLOGY.md`
- `.claude/skills/priceless-tax-planning/shared/ENGAGEMENT-STANDARDS.md`
- `.claude/skills/priceless-tax-planning/shared/CLIENT-PROFILE-TEMPLATE.md`

Prerequisite input: Tax Return Analysis Report from Phase 0.5 (tax-return-analysis-1).

## Position in the engagement

```
Phase 0.5 → tax-return-analysis-1
Phase 1   → bookkeeping-qa-2            ← YOU ARE HERE
Phase 2   → tax-projection-3
Phase 2.5 → payroll-analysis-4 (S Corp only)
Phase 3   → tax-strategy-5
Phase 4   → quarterly-memo-6
```

## Who runs this

Offshore analyst executes. Partner escalation on material findings (reconciliation off by > $5K, systematic classification errors, payroll liability mismatches).

## Output

Data Integrity Summary:
- **Proceed**: books reconcile; handoff to tax-projection-3
- **Stop**: blockers identified; fix required before projection

Stopping in Phase 1 is cheaper than discovering issues in Phase 4. Do not skip this phase.
