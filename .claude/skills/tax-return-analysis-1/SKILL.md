---
name: tax-return-analysis-1
description: Phase 0.5 of the quarterly tax engagement. Extracts carryforwards, basis balances, elections, and prior-CPA methodology from the prior-year returns (1040, 1120-S, 1065, 1120, state returns). Produces the Tax Return Analysis Report that feeds every subsequent phase. Run this BEFORE bookkeeping-qa-2 on any new engagement or when prior-year returns have not yet been analyzed. The library for this sub-skill lives under `.claude/skills/priceless-tax-planning/tax-return-analysis/` — this wrapper delegates to it.
---

# Tax Return Analysis (Phase 0.5) — Sub-Skill #1

## Delegation

This is a thin wrapper. The actual skill logic lives in the main tax planning library:

**Read and follow**: `.claude/skills/priceless-tax-planning/tax-return-analysis/SKILL.md`

Also load these supporting files from the library:
- `.claude/skills/priceless-tax-planning/tax-return-analysis/CARRYFORWARD-TRACKING.md`
- `.claude/skills/priceless-tax-planning/tax-return-analysis/BASIS-TRACKING.md`
- `.claude/skills/priceless-tax-planning/tax-return-analysis/PRIOR-CPA-PATTERNS.md`

And the shared foundation files:
- `.claude/skills/priceless-tax-planning/shared/FIRM-METHODOLOGY.md`
- `.claude/skills/priceless-tax-planning/shared/ENGAGEMENT-STANDARDS.md`
- `.claude/skills/priceless-tax-planning/shared/CLIENT-PROFILE-TEMPLATE.md`

## Position in the engagement

```
Phase 0.5 → tax-return-analysis-1        ← YOU ARE HERE
Phase 1   → bookkeeping-qa-2
Phase 2   → tax-projection-3
Phase 2.5 → payroll-analysis-4 (S Corp only)
Phase 3   → tax-strategy-5
Phase 4   → quarterly-memo-6
```

## Who runs this

Offshore analyst executes. Senior staff reviews carryforward/basis findings. Partner escalates on prior-CPA methodology concerns.

## Output

Tax Return Analysis Report with:
- Carryforward balances (NOL, capital loss, §179, §163(j), §469 passive, QBI, AMT, credits)
- Basis balances (S Corp stock/debt, partnership outside, at-risk)
- Elections in place (methods, §168(g), §179, bonus, §754, §163(j) election-out)
- Prior-CPA methodology notes and red flags
- Flags for partner review on aggressive positions taken previously

Feeds forward to: bookkeeping-qa-2, tax-projection-3, tax-strategy-5.
