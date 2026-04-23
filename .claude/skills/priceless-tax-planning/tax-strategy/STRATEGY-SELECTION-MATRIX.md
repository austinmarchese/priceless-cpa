# Strategy Selection Matrix

This file defines how tax strategies and financial products are evaluated, filtered, and ranked when the skill produces a quarterly tax planning memo. Every strategy file in `tax-strategy/strategies/` and every product file in `financial-products/products/` conforms to the metadata schema described here.

## The workflow

When the skill produces a quarterly memo, it runs this selection process:

1. **Load client profile** (from the projection phase): industry, income, entity type, state, age, filing status, life events YTD, sophistication indicators, attest-client status, existing strategies in place
2. **Load quarter context**: which quarter we're in (per `QUARTERLY-CADENCE.md`), how many months remain in the year, which strategy windows are still open
3. **For each strategy file**, evaluate `applies_when` conditions against the client profile
4. **For each financial product file**, evaluate `suitability_requires` conditions (stricter — per `REFERRAL-DISCLOSURE-FRAMEWORK.md`)
5. **Filter by quarter** — remove strategies whose implementation window has closed for the current year
6. **Estimate savings** using the product/strategy's savings formula against the client's projected numbers
7. **Compute ranking score**: `(estimated_savings × feasibility) / implementation_complexity`
8. **Apply tie-breaking rules** (see below)
9. **Produce the ranked list** with the top 5-8 items surfacing in the memo, others listed in the appendix
10. **Layer the disclosure framework** for any Path B items that passed suitability

## Metadata schema — strategy files

Every file in `tax-strategy/strategies/` starts with a YAML frontmatter block:

```yaml
---
strategy: Strategy Name
category: core | industry | relocation | event | leveraged
authority:
  - IRC §X
  - Reg §X-Y
  - Rev. Rul. YYYY-XX
  - relevant case law
applies_when:
  - condition_1
  - condition_2
  - ...
earliest_actionable_quarter: Q1 | Q2 | Q3 | Q4 | Any
latest_actionable_quarter: Q1 | Q2 | Q3 | Q4 | Any
typical_savings_range: "$X,XXX - $XX,XXX"
typical_savings_as_pct_of_income: "X% - Y%"
savings_formula: |
  [How to compute estimated savings from client profile]
feasibility: low | medium | high
implementation_complexity: low | medium | high
audit_risk: low | medium | high
requires_documentation:
  - item_1
  - item_2
requires_partner_signoff: true | false
requires_separate_engagement: true | false
typical_separate_engagement_fee: "$X,XXX" | null
compatible_stacks:
  - Other-Strategy-Name-1
  - Other-Strategy-Name-2
incompatible_with:
  - Strategy-Name
prerequisites:
  - Other strategy or condition that must be in place first
industries_best_fit:
  - industry-slug-1
  - industry-slug-2
industries_not_applicable:
  - industry-slug
state_specific_considerations: true | false
path_b_compensation_tier: 0 | 1 | 2 | 3 | 4 (for financial products only)
---
```

## Metadata schema — financial product files

Same as strategy schema with these additions required for Path B products:

```yaml
---
[all the above]
path_b_compensation_tier: 2 | 3 | 4
suitability_requires:
  - net_worth condition
  - liquid_assets condition
  - sophistication condition
  - other conditions
disclosure_template: link to template ID in DISCLOSURE-TEMPLATES.md
fiduciary_gate: true (for Tier 3) | false
§7216_consent_required: true | false
non_affiliate_alternative_required: true | false
non_affiliate_alternative: |
  Description of at least one comparable product the client could access without Priceless compensation
license_required_to_sell:
  - Florida 2-15
  - Series 65
  - other
---
```

## Ranking formula details

**Base score:** `(estimated_savings × feasibility_weight) / implementation_complexity_weight`

Where:
- `feasibility_weight`: high = 1.0, medium = 0.7, low = 0.4
- `implementation_complexity_weight`: low = 1.0, medium = 1.5, high = 2.5

**Modifiers:**

- **Recurring strategies get a 1.3× multiplier.** Annual compounding value > one-shot value when other things are equal. Reasonable comp optimization, accountable plans, PTET elections, retirement contributions all benefit from this.
- **Stacked strategies get a 1.2× multiplier per additional strategy in the stack.** A DB plan recommendation that combines with reasonable comp optimization and Solo 401(k) stacking is worth more than the three evaluated separately.
- **Client-executable strategies get a 1.15× multiplier.** Things the client can understand and defend themselves are stickier than advisor-dependent.
- **Higher audit risk gets a 0.8× multiplier.** Not a disqualifier — risky strategies can still make the list if they serve the client — but the ranking penalizes them modestly.

## Tie-breaking rules

When two strategies score within 10% of each other:

1. **Deadline proximity wins.** Strategy with a closing window outranks strategy with a later deadline.
2. **Documentation already in place wins.** If the client has already done the groundwork (e.g., accountable plan exists, need to formalize a reimbursement), that strategy outranks one requiring from-scratch setup.
3. **Core category outranks industry category outranks event category outranks leveraged category.** Breadth of applicability is a tie-breaker toward more foundational strategies.

## Filtering by quarter

Per `QUARTERLY-CADENCE.md`, each strategy has an `earliest_actionable_quarter` and `latest_actionable_quarter`. The skill filters out strategies whose window has closed.

Example: Q3 delivery (late August). Filter behavior:
- Strategy with `latest_actionable_quarter: Q2`: **dropped** (window closed, note for next year's Q1)
- Strategy with `latest_actionable_quarter: Q3`: included but flagged urgent
- Strategy with `latest_actionable_quarter: Q4`: included normally
- Strategy with `earliest_actionable_quarter: Q1, latest_actionable_quarter: Q1` and current is Q3: dropped, noted for next year

Strategies dropped for quarter reasons are documented in an appendix: "Strategies noted for next year's planning cycle."

## Filtering by client profile

`applies_when` conditions are evaluated as a conjunction (all must be true). Common conditions:

- `entity_type in [S-Corp, LLC-taxed-as-S]` or `entity_type in [Schedule C]`
- `owner_w2 > $X` or `entity_net_income > $X`
- `state in [FL, CA, NY, ...]` or `state not in [...]`
- `has_real_estate: true`
- `has_dependents_under_18: true`
- `married_filing_jointly: true`
- `age >= 50` or `age < 50`
- `has_prior_year_NOL: true`
- `has_unused_capital_losses: true`
- `has_appreciated_assets_outside_retirement: true`
- `primary_industry in [ecommerce, digital-marketing, real-estate-investor, ...]`

When a condition depends on data not in the client profile, the skill either (a) asks the analyst to supply it, or (b) flags the strategy as "needs additional input to evaluate" rather than silently skipping.

## How the skill presents the output

The top-ranked strategies appear in the memo in this format:

```
STRATEGY 1 — [Name]
   Estimated savings: $X,XXX
   Authority: [citations]
   Quarter to execute: [Quarter X, deadline date]
   Stack with: [other strategy names if applicable]
   Implementation steps: [brief]
   Documentation needed: [list]
   Fee for separate engagement (if any): $X,XXX
   Open questions for partner: [any]
   [If Path B product: full disclosure block per REFERRAL-DISCLOSURE-FRAMEWORK.md]
```

Strategies that fell below the top 5-8 but still qualified appear in an appendix. Strategies dropped for quarter reasons appear in a "Next year" note.

## Maintenance and evolution

The matrix and individual strategy files are living documents. Updates happen when:

- A new strategy becomes available (new law, new product, new interpretation)
- An existing strategy's authority, savings range, or suitability changes materially
- A client engagement reveals the skill got something wrong — the strategy file and matrix are updated before the next quarterly cycle
- IRS guidance, case law, or state legislation changes the risk or availability of a strategy

The managing partner (or a designated methodology owner) reviews the matrix quarterly and logs changes in the README changelog.

## What this matrix does NOT do

- Does not generate tax advice independent of client facts. It filters and ranks strategies that Priceless has already decided are appropriate in general.
- Does not substitute for partner judgment. The partner decides which of the top-ranked strategies are actually delivered to the client, in what order, and with what framing.
- Does not handle client communication. Memos are internal deliverables. Client communication is drafted separately based on the approved memo.
- Does not decide about attest client implications — that's a separate check per `REFERRAL-DISCLOSURE-FRAMEWORK.md`.
