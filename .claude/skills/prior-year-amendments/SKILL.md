---
name: prior-year-amendments
description: Revenue-generating SOL-urgent workflow for amending prior-year returns (TY 2022, 2023, 2024). Runs a structured three-stage sweep across the Priceless client book: Stage 1 screening matrix (triage 200+ clients without opening returns), Stage 2 return-level checklist (line-by-line inspection of Tier 1/2 candidates), Stage 3 economics break-even (go/no-go decision per client). Produces client conversation scripts for the PROCEED decisions and a decision log for every client touched (institutional memory + professional diligence evidence). Separate engagement from current-year planning — billed hourly or fixed-fee or contingent per return. Statute-of-limitations driven urgency: 3-year SOL from later of due date or filing date; April 15 deadlines binding. Trigger phrases: "prior-year sweep", "amended return opportunity", "[client] missed deductions", "3115 catch-up", "portfolio amendment review". This is NOT a phase sub-skill — it's a standalone engagement workflow. The library lives under `.claude/skills/priceless-tax-planning/workflows/prior-year/`.
---

# Prior-Year Amendments Workflow

## Delegation

This is a thin wrapper. The actual workflow logic lives in the main tax planning library:

**Read and follow**: `.claude/skills/priceless-tax-planning/workflows/prior-year/SKILL.md`

Supporting files in the library (loaded in order as the engagement progresses):

1. **Stage 1 — Screening**: `.claude/skills/priceless-tax-planning/workflows/prior-year/SCREENING-MATRIX.md` — pre-review triage to classify clients into Tier 1/2/3/Not-a-candidate WITHOUT opening the actual return (15-30 min per client; offshore)

2. **Stage 2 — Return-level review**: `.claude/skills/priceless-tax-planning/workflows/prior-year/RETURN-LEVEL-CHECKLIST.md` — line-by-line inspection against common miss patterns (1-2 hours per return; offshore pass 1 + senior sign-off)

3. **Stage 3 — Go/no-go**: `.claude/skills/priceless-tax-planning/workflows/prior-year/ECONOMICS-BREAK-EVEN.md` — recovery ≥ 3x prep-cost decision framework (30 min per engagement decision; senior/partner)

4. **Stage 4 — Client conversation** (if PROCEED): `.claude/skills/priceless-tax-planning/workflows/prior-year/CLIENT-CONVERSATION-SCRIPTS.md` — scripts for pitching amended return opportunities

5. **Always — Decision log**: `.claude/skills/priceless-tax-planning/workflows/prior-year/DECISION-LOG-TEMPLATE.md` — one row per client touched (Tier 1 through Not-a-candidate); institutional memory + audit trail for professional diligence

Related inputs from other phases (when available):
- `.claude/skills/priceless-tax-planning/tax-return-analysis/CARRYFORWARD-TRACKING.md` (carryforwards uncovered in prior-year review flow forward)
- `.claude/skills/priceless-tax-planning/tax-return-analysis/BASIS-TRACKING.md` (basis reconstruction often surfaces during prior-year review)
- `.claude/skills/priceless-tax-planning/tax-return-analysis/PRIOR-CPA-PATTERNS.md` (common prior-CPA errors to watch for)

Always-loaded foundation:
- `.claude/skills/priceless-tax-planning/shared/FIRM-METHODOLOGY.md`
- `.claude/skills/priceless-tax-planning/shared/ENGAGEMENT-STANDARDS.md` (Circular 230 §10.27 contingent-fee rules for amended returns)
- `.claude/skills/priceless-tax-planning/workflows/qc/PARTNER-QC-CHECKLIST.md` (amendments require FULL QC depth before filing)

## When to invoke this skill

This is a **standalone engagement**, not a phase of the quarterly cadence. Typical triggers:

- **Portfolio sweep**: partner decides to run prior-year review across the Priceless 200-client book (usually Q2-Q3 when current-year capacity allows)
- **Ad-hoc discovery**: mid-engagement, senior staff or partner spots a missed position in a prior return and flags the client for separate prior-year engagement
- **Client-initiated**: client asks "did the old CPA miss anything?" — run screening matrix on that specific client
- **SOL urgency**: prior-year return approaching 3-year SOL deadline (April 15 cutoffs binding)

## Position relative to quarterly workflow

```
Quarterly engagement flow (per-client, sequential):
  tax-return-analysis-1 → bookkeeping-qa-2 → tax-projection-3 → 
  payroll-analysis-4 → tax-strategy-5 → quarterly-memo-6

Prior-year workflow (portfolio sweep OR ad-hoc, parallel to quarterly):
  Stage 1 screen → Stage 2 checklist → Stage 3 economics → 
  Stage 4 client convo (if PROCEED) → file 1040X → track to refund
```

The two workflows share inputs (prior-year returns, basis/carryforward data) but produce separate deliverables and separate engagement letters. **Never bundle prior-year amendments into the current-year engagement letter** — they're distinct scope, distinct fees, distinct risks.

## Who runs this

- **Offshore analysts**: Stage 1 screening across entire client book; Stage 2 first pass on Tier 1/2 candidates; decision log data entry
- **US senior staff**: Stage 2 technical sign-off; Stage 3 economics analysis; Stage 4 client conversation drafting
- **Partner (Tony)**: Stage 3 go/no-go approval; signs every 1040X before filing; full QC per PARTNER-QC-CHECKLIST (FULL depth); handles any aggressive-position decisions

## Output

Per-engagement deliverables (for each PROCEED client):
- Amended Form 1040X with supporting schedules
- State amendments where cascade triggered
- Client engagement letter (prior-year-specific, separate from current-year)
- Recovery estimate with range
- Timeline with SOL constraints
- Risk disclosures in writing

Portfolio-level deliverables (for the sweep):
- Decision log covering every client touched (Tier 1 through Not-a-candidate)
- Portfolio economic summary (engagements signed, estimated recovery, estimated fees)
- Forward-planning flags (missed strategies that should be captured in current-year planning for the Declined clients)

## Fee structure options

Per `ECONOMICS-BREAK-EVEN.md`:
- **Contingent**: 20-30% of net recovery (Circular 230 §10.27 compliant for amended returns filed in context of prior CPA's return or IRS challenge)
- **Flat fee**: $2,500 simple / $3,500 moderate / $5,000-$8,000 complex
- **Hourly**: $350-$1,000/hr depending on staff level — generally convert to flat once scope is clear

**Break-even**: decline if gross recovery < $5,000 unless SOL urgency or strategic relationship value.

## Partner sign-off gates (mandatory)

Per `PARTNER-QC-CHECKLIST.md` Part 3 "Prior-year amended return":
- Statute of limitations confirmed and time remaining noted
- Recovery / cost ratio meets 3x threshold
- Collateral consequences considered (state cascade, year cascade, basis reconstruction)
- Position defensibility confirmed (not aggressive)
- Form 1040X prepared per IRS instructions
- Supporting schedules included
- Client engagement letter is prior-year-specific (separate from current-year)

No 1040X is filed without partner sign-off.

## What this skill does NOT do

- Does not amend returns the original CPA still has in scope (refer back to them)
- Does not take aggressive positions (decline if under §6694 "more likely than not" or §6662 penalty exposure)
- Does not amend to INCREASE client tax (if a prior position is indefensible, fix forward; don't unilaterally amend up)
- Does not replace current-year planning (it's additive revenue during slower Q2/Q3 periods)
- Does not substitute for quarterly engagement scope (separate engagement letter required)
