---
name: quarterly-memo
description: Phase 4 synthesis. Assembles the partner-reviewable quarterly memo (Q1 / Q2 / Q3 / Q4) by integrating outputs from Phase 0.5 (tax-return-analysis), Phase 1 (bookkeeping-qa), Phase 2 (tax-projection), Phase 2.5 (payroll-analysis), and Phase 3 (tax-strategy) into the appropriate quarter-specific format. Applies the quarterly workflow playbook (Q1-Q4) and the output template for the engagement tier (Foundational / Comprehensive / Full Wealth). Produces both (a) the internal partner-review draft and (b) the structured task block for Karbon handoff. Triggered after Phase 3 completes. Designed for US senior staff to run with partner sign-off required before conversion to client-facing version.
---

# Quarterly Memo Sub-Skill

## Purpose

This is the synthesis step. By this point:
- Phase 0.5 has extracted carryforwards, basis, elections
- Phase 1 has verified the books
- Phase 2 has built the baseline projection
- Phase 2.5 has set S Corp reasonable comp (if applicable)
- Phase 3 has produced ranked strategy recommendations

The quarterly memo is where those outputs become a single partner-reviewable document formatted to the specific quarter's playbook and the client's service tier.

The output is **internal draft only**. Partner reviews, signs off on aggressive positions, approves Path B disclosures, then converts to the client-facing version using the separate `CLIENT-FACING-MEMO-TEMPLATE.md` flow.

## Inputs required

From Phase 0.5: Tax Return Analysis Report
From Phase 1: Data Integrity Summary (must be "proceed")
From Phase 2: Baseline Projection Memo
From Phase 2.5: Reasonable Comp Analysis (if S Corp)
From Phase 3: Strategy Recommendations (ranked, scored, with authority citations)

From client profile:
- Engagement tier: Foundational / Comprehensive / Full Wealth
- Current quarter: Q1 / Q2 / Q3 / Q4
- Known events for current year
- Open items from prior engagement
- Path B infrastructure status (affiliate disclosures needed?)

## Workflow

### Step 1: Read foundation files

- `../shared/FIRM-METHODOLOGY.md`
- `../shared/QUARTERLY-CADENCE.md`
- `../shared/OUTPUT-TEMPLATES.md` (primary format reference)
- `../shared/ENGAGEMENT-STANDARDS.md`
- `../shared/REFERRAL-DISCLOSURE-FRAMEWORK.md` (if Path B tier)

### Step 2: Load the quarter-specific workflow

Pick based on current quarter:
- Q1: `../workflows/Q1-WORKFLOW.md` (baseline + prior-year close-out)
- Q2: `../workflows/Q2-WORKFLOW.md` (mid-year checkpoint)
- Q3: `../workflows/Q3-WORKFLOW.md` (flagship strategy)
- Q4: `../workflows/Q4-WORKFLOW.md` (year-end execution window)

Each workflow file specifies:
- Required sections for the quarter
- Quarter-specific strategies in-window vs. out-of-window
- Delivery cadence and client expectations
- Deadline pressure points

### Step 3: Determine tier-based content depth

Per `../shared/OUTPUT-TEMPLATES.md`:

**Foundational ($4K+)**:
- Baseline projection + safe harbor
- 3-5 strategy recommendations (core strategies only; no capital deployment)
- Quarterly task list

**Comprehensive ($8K+)**:
- Everything in Foundational PLUS:
- Entity optimization
- Multi-year accelerate/defer framing
- 5-8 strategy recommendations (including stacking scenarios)
- Path B financial product overlay (if affiliate infrastructure available)
- Estate planning surface flags

**Full Wealth ($14K+)**:
- Everything in Comprehensive PLUS:
- Capital Deployment evaluation (Operator 8) — only if AGI > $750K
- Cross-entity and multi-year orchestration
- Advanced state optimization
- Multi-generational coordination notes
- Partner sign-off gate for any capital deployment recommendation

### Step 4: Assemble memo sections

Follow the quarterly workflow's section list. Typical structure:

**Section 1: Executive Summary**
- Baseline tax liability: federal + state
- Total projected savings from recommendations: $X
- Top 3 recommendations by dollar impact
- Open items requiring partner or client decision

**Section 2: Baseline Projection**
- Pull directly from Phase 2 Baseline Projection Memo
- Variance-to-prior-year narrative
- Safe harbor status

**Section 3: Reasonable Compensation** (S Corp only)
- Pull from Phase 2.5 Reasonable Comp Analysis
- Current run rate vs. recommended
- §162(l) health insurance optimization
- HSA coordination

**Section 4: Strategy Recommendations**
- For each strategy from Phase 3 (in rank order):
  - Strategy name and authority (code sections, regulations, rev. procs.)
  - Why it applies to this client (from `applies_when` match)
  - Projected savings (delta against baseline, both federal and state)
  - Implementation path (what happens, by whom, by when)
  - Interactions with other strategies on this memo
  - Audit posture (risk level, documentation required)
  - Deliverable points (what documentation skill needs to produce)

**Section 5: State-Specific Items**
- Load `../states/{STATE}.md` for each state in scope
- PTET election status and action
- Residency posture
- Multi-state allocation (per `../workflows/MULTI-STATE-MECHANICS.md` if 2+ states)

**Section 6: Capital Deployment** (Full Wealth, AGI > $750K only)
- Per `../tax-strategy/capital-deployment/CAPITAL-DEPLOYMENT-FRAMEWORK.md` 8-gate qualification
- If gates pass: recommended vehicle(s) with tier classification
- Partner sign-off gate explicitly called out
- Reference `PROMOTER-PATTERNS-PARTNER-DEFENSE.md` where any aggressive vehicle surfaces

**Section 7: Path B Disclosure Block** (if affiliate recommendations present)
- Per `../shared/REFERRAL-DISCLOSURE-FRAMEWORK.md`
- Tier 0-4 compensation disclosure per AICPA §1.520, Circular 230 §10.29
- Client §7216 consent status

**Section 8: Quarterly Task Block** (structured, for Karbon automation)
- YAML-formatted task list
- Each task: description, assignee role, deadline, dependencies
- Downstream automation consumes this block to create Karbon tasks

**Section 9: Open Questions for Partner**
- Anything analyst could not resolve
- Aggressive positions flagged for partner sign-off
- Client decisions required
- Multi-year framing choices (accelerate to current year vs. defer to next)

**Section 10: Appendix**
- Authority citations full text where aggressive positions rely on them
- Assumptions the projection depends on (carried from Phase 2)
- Carryforward balances (carried from Phase 0.5)
- Basis balances (carried from Phase 0.5)

### Step 5: Apply visualization conventions

Per `../shared/VISUALIZATION-CONVENTIONS.md`:
- Priceless Navy palette
- Tax waterfall chart (baseline → after each strategy → final)
- Quarterly estimate schedule table
- Savings summary table
- Excel 7-tab model if Comprehensive or Full Wealth

### Step 6: QC check before partner hand-off

Run through before submitting to partner:
- Every strategy has full authority citation (code + reg + rev. proc. / notice where applicable)
- Every dollar figure traces to Phase 2 baseline or a strategy delta
- Every state has current-year law (verify against `../states/{STATE}.md` last-review date)
- OBBBA 2025 (P.L. 119-21) references current where affected
- 2026 indexed amounts cite Rev. Proc. 2025-32 or Notice 2025-67
- Tier appropriate (no Full Wealth-only content in Foundational memo)
- Path B disclosure block present if any affiliate recommendation surfaces
- Task block valid YAML

### Step 7: Hand off to partner

Deliver:
- Internal memo (PDF or Markdown)
- Excel model (if Comprehensive / Full Wealth)
- Structured task block (separate YAML file for Karbon)
- QC checklist with sign-offs

Partner reviews, signs off on aggressive positions, approves Path B, converts to client-facing version using `../shared/CLIENT-FACING-MEMO-TEMPLATE.md`.

## Outputs

- **Internal partner-review memo** (primary deliverable; this sub-skill's output)
- **Structured task block** (YAML; for Karbon automation handoff)
- **Excel supporting model** (Comprehensive and Full Wealth tiers)
- **QC checklist** (showing all gates passed)

Downstream:
- Partner converts internal memo to client version using `CLIENT-FACING-MEMO-TEMPLATE.md`
- Task block feeds Karbon to create executable tasks
- Strategy documentation skill consumes Deliverable Points from each strategy

## Partner sign-off gates (mandatory)

Memo does not reach client without partner sign-off on:
- All aggressive positions (any strategy with high audit posture)
- Capital deployment recommendations (if Full Wealth)
- Path B affiliate disclosures (Tier 2+ compensation)
- Multi-state apportionment judgments
- Reasonable comp departures from RCReports baseline
- Any §199A aggregation changes
- Any entity conversion or §1362 election change

## What this sub-skill does NOT do

- Does not produce the client-facing version (partner does, using CLIENT-FACING-MEMO-TEMPLATE)
- Does not execute tasks (Karbon does, humans in the loop)
- Does not sign off on aggressive positions (partner does)
- Does not override earlier phases (if Phase 2 baseline is wrong, fix Phase 2 — don't paper over in memo)

## Who operates this sub-skill

- **US senior staff**: run the synthesis, assemble memo, QC check
- **Partner**: reviews, signs off, converts to client version, signs final
- **Offshore analysts**: do NOT operate this sub-skill directly (they produced the inputs in earlier phases)

No quarterly memo reaches a client without partner sign-off.
