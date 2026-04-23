---
name: payroll-analysis-4
description: Phase 2.5 of the quarterly tax engagement. For S Corp clients only. Sets reasonable compensation for the 2% shareholder using RCReports methodology + industry benchmarks, coordinates §162(l) self-employed health insurance, HSA, and retirement plan contributions through payroll. Produces the Reasonable Comp Analysis that feeds tax-projection-3. Partner escalation required on any material departure from RCReports baseline. The library for this sub-skill lives under `.claude/skills/priceless-tax-planning/payroll-analysis/` — this wrapper delegates to it.
---

# Payroll Analysis (Phase 2.5) — Sub-Skill #4

## Delegation

This is a thin wrapper. The actual skill logic lives in the main tax planning library:

**Read and follow**: `.claude/skills/priceless-tax-planning/payroll-analysis/SKILL.md`

Also load these supporting files from the library:
- `.claude/skills/priceless-tax-planning/payroll-analysis/REASONABLE-COMP-DEEP-DIVE.md`

Related strategy files (consulted for S Corp comp coordination):
- `.claude/skills/priceless-tax-planning/tax-strategy/strategies/S-CORP-REASONABLE-COMP.md`
- `.claude/skills/priceless-tax-planning/tax-strategy/strategies/HEALTH-INSURANCE-S-CORP-162L.md`
- `.claude/skills/priceless-tax-planning/tax-strategy/strategies/HSA-OPTIMIZATION.md`

And the shared foundation files:
- `.claude/skills/priceless-tax-planning/shared/FIRM-METHODOLOGY.md`
- `.claude/skills/priceless-tax-planning/shared/ENGAGEMENT-STANDARDS.md`

## Position in the engagement

```
Phase 0.5 → tax-return-analysis-1
Phase 1   → bookkeeping-qa-2
Phase 2   → tax-projection-3
Phase 2.5 → payroll-analysis-4          ← YOU ARE HERE (S Corp clients only)
Phase 3   → tax-strategy-5
Phase 4   → quarterly-memo-6
```

Skip this phase if the client has no S Corp entity.

## Who runs this

Offshore analyst pulls RCReports benchmark + industry data. US senior staff reviews reasonable comp conclusion. Partner signs off on any material departure from baseline (required for §6694 preparer protection).

## Output

Reasonable Comp Analysis with:
- RCReports baseline with industry adjustments
- Recommended W-2 wage for 2% shareholder
- §162(l) SE health insurance amount to run through payroll (not as Schedule 1 deduction)
- HSA employer vs. employee contribution split
- Solo 401(k) / SEP contribution coordination with W-2 wage base
- Quarterly payroll tax impact

Feeds forward to: tax-projection-3 (sets the W-2 wage line) and tax-strategy-5 (feeds §199A W-2 wage limit).
