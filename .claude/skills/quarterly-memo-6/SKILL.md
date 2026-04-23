---
name: quarterly-memo-6
description: Phase 4 of the quarterly tax engagement. Synthesizes the outputs from tax-return-analysis-1, bookkeeping-qa-2, tax-projection-3, payroll-analysis-4, and tax-strategy-5 into a single partner-reviewable quarterly memo (Q1 / Q2 / Q3 / Q4) formatted to the client's service tier (Foundational / Comprehensive / Full Wealth). Applies the quarter-specific workflow playbook and produces both the internal memo AND the structured task block for Karbon handoff. Partner sign-off required before conversion to the client-facing version. Trigger phrases: "assemble Q1/Q2/Q3/Q4 memo for [client]", "build the quarterly memo", "synthesize the engagement outputs". The library for this sub-skill lives under `.claude/skills/priceless-tax-planning/quarterly-memo/` — this wrapper delegates to it.
---

# Quarterly Memo (Phase 4) — Sub-Skill #6

## Delegation

This is a thin wrapper. The actual skill logic lives in the main tax planning library:

**Read and follow**: `.claude/skills/priceless-tax-planning/quarterly-memo/SKILL.md`

Quarter-specific workflow (load based on current quarter):
- `.claude/skills/priceless-tax-planning/workflows/Q1-WORKFLOW.md`
- `.claude/skills/priceless-tax-planning/workflows/Q2-WORKFLOW.md`
- `.claude/skills/priceless-tax-planning/workflows/Q3-WORKFLOW.md`
- `.claude/skills/priceless-tax-planning/workflows/Q4-WORKFLOW.md`

Shared foundation (always loaded):
- `.claude/skills/priceless-tax-planning/shared/QUARTERLY-CADENCE.md`
- `.claude/skills/priceless-tax-planning/shared/OUTPUT-TEMPLATES.md` (primary format reference)
- `.claude/skills/priceless-tax-planning/shared/VISUALIZATION-CONVENTIONS.md`
- `.claude/skills/priceless-tax-planning/shared/CLIENT-FACING-MEMO-TEMPLATE.md` (partner uses this post-review)
- `.claude/skills/priceless-tax-planning/shared/REFERRAL-DISCLOSURE-FRAMEWORK.md` (if Path B)
- `.claude/skills/priceless-tax-planning/shared/ENGAGEMENT-STANDARDS.md`

Prerequisite inputs (from earlier phases):
- Tax Return Analysis Report (tax-return-analysis-1)
- Data Integrity Summary (bookkeeping-qa-2)
- Baseline Projection Memo (tax-projection-3)
- Reasonable Comp Analysis (payroll-analysis-4, if S Corp)
- Strategy Recommendations (tax-strategy-5)

## Position in the engagement

```
Phase 0.5 → tax-return-analysis-1
Phase 1   → bookkeeping-qa-2
Phase 2   → tax-projection-3
Phase 2.5 → payroll-analysis-4 (S Corp only)
Phase 3   → tax-strategy-5
Phase 4   → quarterly-memo-6            ← YOU ARE HERE
```

## Who runs this

US senior staff executes the synthesis and QC. Partner reviews, signs off on aggressive positions, approves Path B disclosures, then converts internal memo to client-facing version using CLIENT-FACING-MEMO-TEMPLATE.md.

Offshore analysts do NOT operate this sub-skill — they produced the inputs in earlier phases.

## Output

- **Internal partner-review memo** (primary deliverable)
- **Structured task block** (YAML, for Karbon automation)
- **Excel supporting model** (7-tab; Comprehensive and Full Wealth tiers)
- **QC checklist** with all gates signed off

Downstream:
- Partner converts internal memo → client-facing memo (using CLIENT-FACING-MEMO-TEMPLATE.md)
- Task block feeds Karbon to create executable tasks
- Documentation skill consumes Deliverable Points from each strategy

## Partner sign-off gates (mandatory)

No memo reaches a client without partner sign-off on:
- All aggressive positions
- Capital deployment recommendations (Full Wealth tier, AGI > $750K)
- Path B affiliate disclosures (Tier 2+ compensation)
- Multi-state apportionment judgments
- Reasonable comp departures from RCReports baseline
- §199A aggregation changes
- Entity conversions or §1362 elections
