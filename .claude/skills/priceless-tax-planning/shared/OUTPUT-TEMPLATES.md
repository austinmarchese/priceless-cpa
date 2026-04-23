# Output Templates

This file defines the standard output formats the skill produces. Every deliverable the skill generates conforms to one of these templates. Partners review drafts in these formats; final client communication is drafted separately from an approved memo.

## The six template types

1. **Q1 Tax Plan Memo** — prior year close, current year baseline
2. **Q2 Tax Plan Memo** — mid-year checkpoint, early strategy
3. **Q3 Tax Plan Memo** — flagship strategy window (highest value)
4. **Q4 Tax Plan Memo** — year-end execution, short and action-oriented
5. **Intake Gap Memo** — produced when inputs are insufficient to proceed
6. **Data Integrity Summary** — produced when bookkeeping QA blockers prevent projection

Additionally, the **Aggressive Position Analysis** and **Path B Product Disclosure Block** are reusable sub-sections embedded in memos as needed.

## Universal header (every memo)

Every memo starts with this header. Fields auto-populate from the Karbon engagement and client profile.

```
================================================================
PRICELESS CPA — TAX PLANNING DRAFT MEMO
================================================================
CLIENT:              [Client ID — not name]
ENGAGEMENT:          [Karbon engagement ID]
TYPE:                [Q1 Baseline | Q2 Checkpoint | Q3 Strategy | Q4 Execution | Gap | Integrity]
TAX YEAR:            [YYYY]
PREPARED BY:         [Analyst name and location]
PREPARED DATE:       [YYYY-MM-DD]
DATA AS OF:          [YYYY-MM-DD]
REDACTION VERIFIED:  [YES — Analyst initials | NO — stop]

STATUS: DRAFT — PARTNER REVIEW REQUIRED
DO NOT DELIVER TO CLIENT UNTIL PARTNER REVIEW COMPLETE
================================================================
```

## Template 1: Q1 Tax Plan Memo

```
[UNIVERSAL HEADER]

SECTION 1: EXECUTIVE SUMMARY
One paragraph summarizing where the client stands as of the current year's start.
Three bullets:
  • Prior year outcome: [filed return total tax, refund/owed, carryforwards identified]
  • Current year baseline: [projected AGI, projected tax, safe harbor target]
  • Q1 action items: [N items requiring client decision before 4/15]

SECTION 2: CLIENT PROFILE
  Filing status, ages, dependents
  Entity structure (list every entity the client owns with percentages)
  Primary industry and vertical
  State of residency and any secondary state ties
  Attest client status: [Yes | No]
  Path B suitability: [N/A | Tier 2 eligible | Tier 3 eligible]

SECTION 3: PRIOR-YEAR CONFIRMATION
  Prior year AGI, taxable income, total tax, tax paid, refund/balance due
  Prior year strategies executed: [list with actual savings realized]
  Carryforwards identified: [NOL, capital loss, passive loss, §179, credit carryforwards, basis tracking]
  Open items from prior year: [extensions filed, late items still pending]

SECTION 4: CURRENT-YEAR BASELINE PROJECTION
  Projection method: [straight-line | prior-year ratio | event-based]
  Full-year projection table: (same format as tax-projection/SKILL.md output)
  Safe harbor analysis: [100/110% prior year vs 90% current year]
  Q1 estimated payment required: $X,XXX by 4/15

SECTION 5: EARLY-YEAR STRATEGIES
  Strategies actionable in Q1 (from STRATEGY-SELECTION-MATRIX, filtered to earliest_actionable_quarter = Q1):
  Top 3-5 ranked with:
    - Name, description
    - Estimated savings
    - Authority
    - Documentation needed
    - Deadline
    - Open questions for partner

SECTION 6: FINANCIAL PRODUCT OVERLAY (Path B, if applicable)
  Suitability-screened products per REFERRAL-DISCLOSURE-FRAMEWORK.md
  Disclosure blocks for any Tier 2+ recommendations
  Non-affiliate alternatives for Tier 3 items
  Partner review required before inclusion in client communication

SECTION 7: ENGAGEMENT EXPANSIONS
  Any recommendations requiring separate engagements:
    - Scope
    - Fee estimate
    - Priceless affiliate or external referral

SECTION 8: OPEN QUESTIONS FOR PARTNER
  Items the analyst could not resolve and needs partner decision on

SECTION 9: NEXT TOUCH
  Q2 delivery scheduled: [late May date]
  Inputs needed for Q2: [checklist]
```

## Template 2: Q2 Tax Plan Memo

```
[UNIVERSAL HEADER]

SECTION 1: EXECUTIVE SUMMARY
  Three bullets:
    • Projection variance from Q1 baseline: [+/- $X,XXX on AGI; drivers]
    • Q2 estimated payment required: $X,XXX by 6/15
    • Newly-surfaced strategies: [N items]

SECTION 2: VARIANCE ANALYSIS
  Q1 baseline vs current projection (column comparison)
  Material drivers of variance (revenue changes, major expenses, life events YTD)
  Reasonable comp YTD check: on-track | ahead | behind annual target

SECTION 3: UPDATED PROJECTION
  Same projection table format as Q1, with 4 months of actual data

SECTION 4: Q2 PAYMENT
  Safe harbor analysis updated
  Required payment amount and voucher prep note

SECTION 5: STRATEGY QUEUE
  Strategies to implement in Q3: [from matrix, filtered to earliest_actionable_quarter ≤ Q3]
  Strategies requiring Q3 setup for Q4 execution
  Any strategies whose window is closing (urgent)

SECTION 6: FINANCIAL PRODUCT OVERLAY (Path B, if applicable)
  [same structure as Q1]

SECTION 7: OPEN QUESTIONS FOR PARTNER

SECTION 8: NEXT TOUCH
  Q3 delivery: [late August]
  Inputs needed: [checklist]
```

## Template 3: Q3 Tax Plan Memo (flagship)

```
[UNIVERSAL HEADER]

SECTION 1: EXECUTIVE SUMMARY
  Four bullets (Q3 gets an extra):
    • Full-year projection (high confidence — 7 months actual): [key numbers]
    • Q3 estimated payment: $X,XXX by 9/15
    • Primary strategy recommendations: [top 3 with estimated savings]
    • Decisions the client must make in the next 30 days: [list]

SECTION 2: FULL-YEAR PROJECTION (HIGH CONFIDENCE)
  Projection table with 7 months actual
  Sensitivity: if Q4 income lands +/- 10%, tax impact
  Reasonable comp recommended adjustment (if any)

SECTION 3: Q3 PAYMENT
  Safe harbor analysis, required payment, voucher prep note
  PTET payment if applicable for state

SECTION 4: STRATEGY RECOMMENDATIONS (FLAGSHIP SECTION)
  Top 5-8 ranked per STRATEGY-SELECTION-MATRIX
  Each includes:
    - Full description of the strategy
    - Authority citations
    - Fact pattern fit for this client
    - Estimated savings (computed from projection)
    - Stack opportunities
    - Implementation steps with specific deadlines
    - Documentation requirements
    - Separate engagement fee (if applicable)
    - Open questions for partner

SECTION 5: REASONABLE COMP TRUE-UP
  YTD W-2, projected annual target, required adjustment for remaining payroll periods
  Gross-up calculations, federal and state withholding adjustments

SECTION 6: FINANCIAL PRODUCT OVERLAY (Path B)
  [expanded in Q3 — this is the quarter where we surface the full overlay]
  Insurance coverage review
  Retirement plan design review (DB, cash balance, NQDC considerations)
  Investment vehicle considerations
  Full disclosure blocks for any Tier 2+ recommendations

SECTION 7: ENGAGEMENT EXPANSIONS
  Separate engagements to propose (cost seg, entity restructure, PPLI implementation, etc.)
  With scope and fee for each

SECTION 8: OPEN QUESTIONS FOR PARTNER

SECTION 9: NEXT TOUCH
  Q4 delivery: [mid-December]
  Inputs needed: [checklist]
  Year-end action item preview
```

## Template 4: Q4 Tax Plan Memo (execution-focused)

```
[UNIVERSAL HEADER]

SECTION 1: EXECUTIVE SUMMARY
  Three bullets:
    • Final-year projection (10-11 months actual): [key numbers]
    • Actions that must close by 12/31: [short list]
    • Q4 estimated payment vs. withholding decision: [which path recommended]

SECTION 2: FINAL PROJECTION
  Near-final projection table
  Material variances vs. Q3 updated projection

SECTION 3: YEAR-END ACTION CHECKLIST
  Ordered list of actions, each with:
    - Action
    - Deadline (most are 12/31)
    - Responsible party (client, Priceless, external)
    - Dollar impact
    - Status (confirmed pending | awaiting client decision | complete)

  Typical categories:
    - Reasonable comp final adjustment
    - Retirement plan final funding (employee side)
    - Charitable giving final execution
    - Loss harvesting
    - Roth conversion execution
    - Bonus depreciation (asset placed in service)
    - Final distributions decisions

SECTION 4: Q4 PAYMENT DECISION
  Required safe harbor position
  Option A: Q4 estimated payment by 1/15
  Option B: withhold via final payroll run (for W-2 earners; avoids 1/15 obligation)
  Recommended path and rationale

SECTION 5: EXTENSION vs. FILE DECISION
  Is an extension recommended?
  Tradeoffs given client's situation

SECTION 6: NEXT YEAR PREVIEW
  Setup items for Q1 next year:
    - Retirement plans to establish effective 1/1
    - S Corp elections to file by 3/15
    - PTET registrations for next year
    - Entity formations in process

SECTION 7: OPEN QUESTIONS FOR PARTNER

SECTION 8: NEXT TOUCH
  Q1 next year delivery: [mid-March]
  Inputs needed for prior-year close
```

## Template 5: Intake Gap Memo

Used when inputs are insufficient. Replaces the full memo.

```
[UNIVERSAL HEADER — TYPE: GAP]

ISSUE: Cannot proceed with [quarter] tax planning due to missing inputs.

MISSING INPUTS:
  [Itemized list of what's needed, why it matters, and where to get it]

PROVIDED INPUTS:
  [What the analyst did receive]

NEXT STEPS:
  1. Client to provide [specific items]
  2. Karbon task created: [task ID]
  3. Re-run skill when inputs received
  4. Delivery will shift to [new target date]

IMPACT IF NOT RESOLVED:
  [What client misses — e.g., "cannot compute Q3 estimated payment amount, client may owe underpayment penalty"]
```

## Template 6: Data Integrity Summary

Used when bookkeeping QA finds blockers. Replaces Phase 2-4 of a memo.

```
[UNIVERSAL HEADER — TYPE: INTEGRITY]

ISSUE: Bookkeeping contains material issues preventing accurate projection.

BLOCKERS (must fix before proceeding):
  1. [issue — impact — how to fix]
  2. [...]

MATERIAL ITEMS (should fix before filing):
  1. [issue — impact — how to fix]
  2. [...]

MINOR ITEMS (fix in next close):
  1. [...]

ENGAGEMENT SCOPE IMPACT:
  [Will this require additional bookkeeping hours? Separate engagement?]
  
NEXT STEPS:
  1. Bookkeeping team to address blockers by [date]
  2. Re-run this skill when books are clean
  3. Delivery will shift to [new target date]
```

## Reusable sub-sections

### Aggressive Position Analysis block

Embedded in any memo that recommends a strategy flagged with `audit_risk: high` or `requires_partner_signoff: true`.

```
AGGRESSIVE POSITION ANALYSIS — [Strategy Name]

AUTHORITY SUPPORTING THE POSITION:
  [Primary IRC/Reg citations]
  [Case law if relevant]
  [Revenue rulings, procedures, or other guidance]

FACT PATTERN REQUIRED:
  [What must be true about the client's situation for the position to hold]

DOCUMENTATION REQUIRED TO DEFEND:
  [Specific items — contemporaneous written, appraisals, board minutes, etc.]

REPORTABLE/LISTED TRANSACTION STATUS:
  [§6011 / Form 8886 disclosure analysis — is this a reportable or listed transaction?]

§6662 ACCURACY PENALTY POSTURE:
  [Substantial authority analysis; disclosure under §6662(d)(2)(B)(ii) if needed]

§6694 PREPARER PENALTY POSTURE:
  [How Priceless's signing preparer is protected]

IMPLEMENTATION TIMELINE:
  [When the position must be set up, documented, and filed]

PARTNER SIGN-OFF REQUIRED: YES
```

### Path B Product Disclosure Block

Embedded whenever a Tier 2, 3, or 4 product is recommended. Pulls the appropriate template from `REFERRAL-DISCLOSURE-FRAMEWORK.md`.

```
FINANCIAL PRODUCT RECOMMENDATION — [Product Name]

TAX / FINANCIAL NEED ADDRESSED:
  [Why this product fits this client's situation]

SUITABILITY DETERMINATION:
  Criteria evaluated:
    - [criterion 1]: met / not met / unknown
    - [criterion 2]: met / not met / unknown
    ...
  Determination: SUITABLE | REQUIRES ADDITIONAL FACT-FINDING | NOT SUITABLE

DISCLOSURE (Tier [2 | 3 | 4]):
  [Full disclosure language per REFERRAL-DISCLOSURE-FRAMEWORK.md for the applicable tier]

NON-AFFILIATE ALTERNATIVE:
  [At least one alternative the client could access without Priceless compensation]

IMPLEMENTATION PATH:
  [Which affiliate entity, which licensed individual, what next steps]

FIDUCIARY GATE (Tier 3 only):
  Recommendation driven by client need, not by Priceless compensation: CONFIRMED
  Lower-compensation alternative considered: [YES with explanation | N/A]

§7216 CONSENT:
  [Required / Not required / Already obtained]

PARTNER SIGN-OFF REQUIRED: YES
```

## Format and style rules

- Every memo is a single document, plain text or markdown, no PDFs generated by the skill (those are produced downstream)
- Client ID is used, not client name, until partner finalizes the client-facing version
- Dollar figures are formatted with commas and dollar signs ($45,000 not 45000)
- Percentages include the % sign
- Dates use YYYY-MM-DD in the header but natural formatting in body text ("April 15, 2026")
- No client-facing language — this is an internal deliverable for partner review
- No em-dashes in tables (formatting issue with monospace renderings); use regular hyphens

## Structured Task List Block (v0.3 addition)

Every memo ends with a machine-parseable task list that feeds Karbon automation and the separate `priceless-tax-documentation` skill. This block is delimited by specific markers so downstream automation can extract it reliably.

```
================================================================
STRUCTURED TASK LIST — MACHINE PARSEABLE
================================================================
<!-- BEGIN_TASK_BLOCK -->
<!-- Format: YAML-compliant; do not edit manually; extracted by Karbon integration -->

engagement:
  karbon_id: "[Karbon engagement ID]"
  client_id: "[client placeholder]"
  quarter: "Q[1|2|3|4]"
  tax_year: [YYYY]
  tier: "[Foundational | Comprehensive | Full Wealth]"
  generated_date: "YYYY-MM-DD"
  memo_version: "[v0.3.N]"

strategies_recommended:
  - strategy_id: "S-CORP-REASONABLE-COMP"
    priority: [1-10]
    estimated_savings_usd: [number]
    execution_deadline: "YYYY-MM-DD"
    karbon_task_title: "[Client ID] - Reasonable comp adjustment Q[N]"
    karbon_task_owner_role: "[senior_staff | partner | offshore | client]"
    documentation_skill_invocation: "reasonable-comp-board-resolution"
    requires_separate_engagement: [true | false]
    separate_engagement_fee_estimate: [number or null]
    path_b_tier: [0 | 1 | 2 | 3 | 4]
    disclosure_required: [true | false]
    
  - strategy_id: "AUGUSTA-RULE-280A"
    priority: 2
    estimated_savings_usd: 4500
    execution_deadline: "2026-12-15"
    karbon_task_title: "[Client ID] - Augusta Rule setup and 2026 meeting calendar"
    karbon_task_owner_role: "senior_staff"
    documentation_skill_invocation: "augusta-rule-package"
    requires_separate_engagement: false
    separate_engagement_fee_estimate: null
    path_b_tier: 0
    disclosure_required: false

  # ... additional strategies

partner_review_gates:
  - gate_type: "aggressive_position"
    description: "[what the partner must specifically approve]"
    blocking_until_resolved: true
    
  - gate_type: "path_b_disclosure_needed"
    description: "Tier 2 disclosure for [Insurance Affiliate] recommendation"
    blocking_until_resolved: true

open_questions:
  - question: "[What the skill couldn't resolve]"
    owner: "[analyst | senior_staff | partner | client]"
    resolution_needed_by: "YYYY-MM-DD"

data_integrity_flags:
  - flag: "[What was off in the data]"
    severity: "[blocker | warning | info]"
    action_taken: "[How the skill handled it]"

downstream_handoffs:
  documentation_skill:
    strategies_needing_documentation: ["S-CORP-REASONABLE-COMP", "AUGUSTA-RULE-280A"]
    
  karbon_tasks:
    count: [number]
    high_priority_count: [number]
    
  affiliate_handoff:
    required: [true | false]
    tier: [2 | 3]
    affiliate: "[Insurance | RIA]"

<!-- END_TASK_BLOCK -->
================================================================
```

The downstream automation:
1. Extracts the block between `<!-- BEGIN_TASK_BLOCK -->` and `<!-- END_TASK_BLOCK -->`
2. Parses as YAML
3. For each strategy: creates a Karbon task with the specified owner role and deadline
4. For each partner_review_gate: blocks memo delivery until partner marks resolved
5. For each open_question: creates a Karbon question task routed to the specified owner
6. For the documentation_skill handoff: queues invocation after partner approval
7. For affiliate_handoff: triggers notification to affiliate entity after partner approval and §7216 consent verification

## Tier-Based Template Logic (v0.3 addition)

The skill produces output appropriate to the engagement tier. Lower tiers get tighter, shorter memos; higher tiers get comprehensive treatment with every section populated.

### Foundational tier ($4K+/year)

The standard quarterly memo, lean version:
- Section 1: Executive Summary (3 bullets max)
- Section 2: Client Profile (condensed; 1 paragraph)
- Section 3: Data Integrity (summary only unless blockers)
- Section 4: Baseline and Projection (one table, one chart reference)
- Section 5: Reasonable Comp (if S Corp; otherwise skipped)
- Section 6: Strategy Recommendations — TOP 5 ONLY, no Capital Deployment, no financial product overlay
- Section 7: Implementation Task List
- Section 8: Open Questions for Partner
- Appendix: Structured Task Block

No capital deployment section. No financial product overlay. No multi-entity rollup. Clients who want these migrate to Comprehensive.

### Comprehensive tier ($8K+/year)

Full memo including:
- All Foundational sections, expanded
- Section 6: Strategy Recommendations — TOP 8, including stackable combinations
- Section 6A: Financial Product Overlay (when affiliate infrastructure available)
- Section 6B: Multi-entity rollup analysis (when client has 2+ entities)
- Section 9 (new): Documentation Generation Queue (list of documents the documentation skill will produce)
- Appendix A: Strategy comparison tables
- Appendix B: Documentation skill handoff checklist
- Structured Task Block

Capital Deployment still excluded unless client explicitly opts in AND AGI > $750K.

### Full Wealth tier ($14K+/year)

Everything from Comprehensive, plus:
- Section 6C: Capital Deployment analysis (when AGI > $750K and foundational planning complete)
- Section 9: Estate coordination notes (referral to estate attorney as needed)
- Section 10: Multi-year planning outlook (3-5 year horizon)
- Appendix C: Capital Deployment opportunities with pre-vetted sponsor notes
- Appendix D: Partner dedicated time log (how Full Wealth partner hours are being used)
- Appendix E: Affiliate coordination memo (when products are in place or being evaluated)

Full Wealth memos often run 15-25 pages vs. Foundational's 4-7.

### Tier detection

The skill reads the `engagement_tier` field from the client profile's Section 1. The template assembly logic conditionally includes sections based on tier. If tier is not populated, the skill defaults to Foundational and flags the missing tier as an open question for partner.

### Tier upgrade triggers

The skill flags clients for potential tier upgrade when:
- AGI > $750K and currently Foundational → suggest Comprehensive upgrade (Capital Deployment becomes available)
- Multiple entities and currently Foundational → suggest Comprehensive (multi-entity rollup)
- Complex life events (sale, divorce, relocation) and currently Foundational or Comprehensive → suggest Full Wealth for that year
- Partner flags during QC that engagement volume exceeded tier fee

Upgrade suggestions appear in Section 8 (Open Questions) marked "ENGAGEMENT SCOPE DISCUSSION — next year."

## Versioning

Each template version is tracked. When a template changes, the change is logged with date and summary. Memos reference the template version they were generated against.

Current versions (v0.3):
- Q1 Memo: v1.1 (tier awareness added)
- Q2 Memo: v1.1
- Q3 Memo: v1.1
- Q4 Memo: v1.1
- Intake Gap: v1.0 (unchanged)
- Data Integrity: v1.0 (unchanged)
- Aggressive Position Analysis: v1.0 (unchanged)
- Path B Disclosure Block: v1.0 (unchanged)
- Structured Task Block: v1.0 (NEW in v0.3)
- Tier-Based Logic: v1.0 (NEW in v0.3)
