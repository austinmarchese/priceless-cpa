---
parent_workflow: workflows/prior-year/SKILL.md
purpose: Go/no-go decision framework for whether to proceed with amended return after Stage 2 findings
user: senior / partner; 30 min per engagement decision
input: RETURN-LEVEL-CHECKLIST findings with quantified tax impact
output: Written go/no-go decision with rationale and proposed fee structure
---

# Economics Break-Even Framework

Not every missed deduction should result in an amended return. This framework structures the go/no-go decision after Stage 2 findings are compiled.

## Core rule: Recovery ≥ 3x cost of prep

As a general rule, proceed if estimated **net recovery to client** is at least **3x the cost of amended return preparation**. This reflects:
- Client's opportunity cost of engaging with the process
- Audit exposure (real, if modest)
- Time value of money
- Psychological friction of revisiting closed year

If recovery < 3x prep cost, the engagement is uneconomic even if the position is sound.

## Quantification inputs

### Estimated client recovery

Take findings from Stage 2 checklist. For each finding:

| Input | Example |
|---|---|
| Dollar amount of adjustment | $50,000 missed QBI deduction |
| Taxpayer's marginal federal rate | 37% |
| State rate + addback factor | 5.75% × (1 - federal deduction flow) = ~3.6% effective |
| Combined effective rate | ~40.6% |
| Federal recovery | $18,500 |
| State recovery | $1,800 |
| Interest on refund | Yes — IRS pays interest from due date of original return until refund paid |
| **Total gross recovery** | **~$21,000** |

Sum across all findings for aggregate recovery estimate.

### Preparation cost

| Cost component | Typical range |
|---|---|
| Offshore prep (Form 1040X + supporting schedules + state amendments) | $400-$800 |
| Senior review and technical sign-off | $500-$1,500 |
| Partner sign-off for high-risk positions | $500-$1,000 |
| Correspondence and client interaction | $200-$500 |
| IRS follow-up tracking (to refund receipt) | $100-$300 |
| **Total Priceless cost** | **$1,700-$4,100** |

### Net client recovery after fees

Two fee structures to model:

**Contingent fee (20-30% of recovery)**:
- On $21K recovery at 25%: Priceless fee $5,250; client net $15,750
- Client net / prep cost: $15,750 / $2,500 = **6.3x** → proceed

**Flat fee ($2,500-$5,000 per return)**:
- On $21K recovery with $3,500 flat: Client net $17,500
- Client net / prep cost: $17,500 / $2,500 = **7.0x** → proceed

### Break-even threshold

Below approximately **$5,000 gross recovery**, no fee structure works:
- Contingent: $5K × 25% = $1,250 fee; prep cost higher
- Flat: $2,500 fee consumes half of recovery

Recommend **decline** if gross recovery under $5,000 unless urgent SOL constraint or strategic relationship value.

## Decision tree

```
Aggregate recovery from Stage 2 findings
│
├── > $15,000 → Strong proceed; contingent or flat fee both work
│
├── $8,000-$15,000 → Proceed; contingent preferred if lowers client friction
│
├── $5,000-$8,000 → Marginal; proceed only if:
│   ├── SOL expiring < 6 months (urgency premium)
│   ├── Strategic client (cascade to 2023/2024 likely)
│   └── Minimal collateral issues
│
├── < $5,000 → Decline; document decision; note for current-year forward planning
│
└── Negative NPV (adjustment opens worse issues) → Decline; document carefully
```

## Collateral consequence assessment

Even strong recovery cases can be wrong to amend. Evaluate:

### State return cascade

If federal amendment triggers state amendments:
- Is state rate material? (5-10% typical)
- Does state amendment reopen state SOL or create new audit exposure?
- Multiple states? (Each adds prep time and potential downside)
- Some states (NY, CA) are relatively strict on amendments; others (FL, TX) N/A

### Year cascade

If TY 2022 amendment affects TY 2023 and 2024:
- Basis changes flow forward (S corp, partnership, §1202 holding periods)
- Carryforward (NOL, capital loss, PAL) changes
- Depreciation method change (Form 3115) effective current year only; doesn't require prior-year amendment but may create compliance work
- Often 2-3x the original scope

Factor cascade into pricing: If cascading, discuss bundled engagement (2022+2023+2024) at engagement letter.

### Audit exposure

Amended returns DO carry higher audit risk than original:
- IRS flags amendments for initial review (not full audit, but elevated attention)
- Specific positions taken are explicitly highlighted
- If related positions in other years exist on original returns, they become visible

Practical calibration:
- **Low risk**: Mechanical errors (e.g., prior CPA forgot to claim PTET credit already paid at entity level) — proceed
- **Moderate risk**: Position changes (e.g., §199A aggregation, cost seg catch-up) — proceed with solid documentation
- **High risk**: Aggressive interpretations (e.g., REPS without strong hour log, §1202 with questionable active business) — decline or require partner signoff + client letter acknowledging risk
- **Too high**: Promoter-driven positions (conservation easement, captive insurance, aggressive §1202 structures) — decline regardless of arithmetic recovery

### Basis / carryforward reconstruction

If prior CPA didn't track basis or carryforwards:
- Reconstruction work adds 5-15 hours per entity
- Often reveals additional errors (compounds scope)
- May be net positive but MUST be priced in

## Worked decision examples

### Example 1: Proceed — Strong case

**Client**: S corp owner, NY resident, 2022 return
**Findings**: PTET election made at entity but credit not claimed on personal; $28K federal recovery, $15K NY recovery
**Aggregate recovery**: $43K
**Prep cost**: $2,500 (mechanical fix; no judgment involved)
**Ratio**: 17x
**Collateral**: No state cascade (NY only); no year cascade; zero audit risk (claiming credit already paid)
**Decision**: PROCEED. Contingent 25% = Priceless fee $10,750; client net $32,250.

### Example 2: Marginal — Proceed with partner sign-off

**Client**: Real estate owner, 2022 return, $2M office building purchase
**Findings**: No cost seg study; Form 3115 catch-up opportunity for TY 2025 (not amendment to 2022 — method change)
**Aggregate recovery**: $35K via §481(a) adjustment in current year
**Prep cost**: $5,000 (cost seg study $3K + Form 3115 prep $2K)
**Ratio**: 7x
**Collateral**: Not technically an amendment — no audit exposure of TY 2022 return; applies in TY 2025
**Decision**: PROCEED. Note: This is Form 3115 method change, not amendment. Different workflow but similar economics.

### Example 3: Decline — Below threshold

**Client**: Solo practitioner, 2023 return
**Findings**: HSA contribution missed ($3,850); missed DC FSA ($2,500); aggregated $6,350 deductions
**Tax impact**: $6,350 × 37% federal + 5.75% state = $2,740 recovery
**Prep cost**: $1,500 minimum
**Ratio**: 1.8x
**Decision**: DECLINE. Below 3x threshold. Document: "Noted missed retirement/benefit strategies for TY 2023 return. Recovery insufficient to justify amended return prep cost. Flagged for forward planning in current year and beyond."

### Example 4: Decline — Collateral risk

**Client**: Partnership owner, 2022 return
**Findings**: Prior CPA treated client as limited partner (no SE tax); re-review suggests LLC member manager with active participation (SE tax should apply)
**"Recovery"**: None — this is an INCREASE in tax owed, not a refund
**Situation**: Client could amend and voluntarily pay additional SE tax ($15K) — or not disclose and accept current treatment
**Decision**: DECLINE amendment in that direction. Document concerns. Fix forward (current year reclassify as active). Flag for conversation with client about proper treatment going forward. Do NOT unilaterally amend to increase client tax.

### Example 5: Decline — Aggressive position

**Client**: High-income client, 2023 return
**Findings**: Client wants to amend to add §1202 QSBS exclusion on startup stock sold. However, stock was held only 4 years, 8 months at sale; no active business documentation; client was investor, not operator.
**Claimed recovery**: $800K (huge)
**Prep cost**: $8,000
**Ratio**: 100x (on paper)
**Decision**: DECLINE. §1202 5-year hold not met. Taking this position invites §6662 accuracy-related penalty and §6701 preparer penalty. Document decline carefully. If client insists, provide formal opinion letter declining position (billable) and advise client to seek second opinion.

## Fee structures in detail

### Contingent fee

**Structure**: Priceless takes X% of net recovery; 0 if no recovery

**Pros**:
- No client fee risk
- Alignment with outcome
- Easier to say yes for client

**Cons**:
- Priceless bears risk (IRS rejects, delays)
- Circular 230 §10.27 limits contingent fees on original returns (amendments are allowed but subject to conditions)
- Cash flow: collected only when refund issued

**Typical rates**:
- 20% for mechanical fixes (clear-cut refunds)
- 25-30% for position changes (more reviewer judgment)
- 33% uncommon — reserved for very high-recovery, high-complexity cases

**Circular 230 compliance**: Contingent fees on amended returns are permissible under §10.27 where:
- Original return filed by someone else, OR
- Original return filed by Priceless but amendment is in context of IRS audit / challenge

### Flat fee

**Structure**: Fixed dollar amount per amended return

**Pros**:
- Predictable for client
- Priceless bears no IRS outcome risk
- Cleaner billing

**Cons**:
- Client may balk at writing check for uncertain recovery
- Priceless bears prep time risk (if complex)

**Typical rates**:
- $2,500 simple (single-issue, single-year, single-state)
- $3,500 moderate (multiple issues, cascade to 1 other year)
- $5,000-$8,000 complex (multi-year cascade, basis reconstruction, multi-state, partner sign-off)

### Hourly

**Structure**: $350-$500/hr for offshore; $500-$750/hr for senior; $750-$1,000/hr for partner

**Use case**: Open-ended investigation where scope is uncertain. Generally avoid for prior-year work — convert to flat fee once scope is clear.

## Priceless internal economics

Rough economics for portfolio sweep across Priceless 200-client book:

| Assumption | Value |
|---|---|
| Clients with TY 2022 returns | 200 |
| Tier 1+2 candidates (30%) | 60 |
| Average recovery per candidate | $12,000 |
| Contingent fee rate (25%) | |
| Priceless fee per engagement | $3,000 |
| Prep cost per engagement (offshore + review) | $600 |
| Gross margin per engagement | $2,400 |
| **Gross margin across 60 engagements** | **$144,000** |

With cascade to TY 2023 and TY 2024 for 60% of same clients:

| Cascade assumption | Value |
|---|---|
| 36 clients with 2-3 year cascade | 36 |
| Additional engagements (avg 1.5x) | 54 |
| Additional Priceless fee per cascade engagement | $2,500 (slightly lower — more mechanical) |
| Additional prep cost | $500 |
| Gross margin per cascade engagement | $2,000 |
| **Cascade gross margin** | **$108,000** |

**Total portfolio sweep economic potential: $250,000+**

This is separate from, and additive to, current-year planning revenue. Can absorb offshore capacity during slower Q2/Q3 periods.

## Triggering the conversation

When Stage 3 decision is PROCEED, use CLIENT-CONVERSATION-SCRIPTS.md to structure the client-facing conversation. Always have:
1. Written recovery estimate with range
2. Clear fee structure and total cost
3. Timeline with SOL constraints
4. Risks disclosed in writing
5. Engagement letter ready to send same day

When decision is DECLINE, document in DECISION-LOG-TEMPLATE.md. No need for client conversation unless client specifically asks (in which case, frame as "reviewed and recovery was not sufficient to justify the work").
