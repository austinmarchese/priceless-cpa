---
strategy: Home Office via Accountable Plan
category: core
authority:
  - IRC §280A(c)(1) - home office (regular and exclusive use)
  - IRC §62(c) - accountable plan
  - Treas. Reg. §1.62-2 (accountable plan requirements)
  - Treas. Reg. §1.280A-2
applies_when:
  - entity_type in [S-Corp, LLC-S-Election, C-Corp]  # for sole prop, use direct Schedule C home office
  - owner_uses_home_for_business: true
  - has_dedicated_business_use_space: true
earliest_actionable_quarter: Q1 (formalize plan)
latest_actionable_quarter: Q4 (reimbursements through year-end)
typical_savings_range: $1500 - $8000
typical_savings_as_pct_of_income: 0.5% - 2.5%
savings_formula: |
  Reimbursable home office expenses × marginal_tax_rate
  Reimbursable expenses include:
    - Pro-rata mortgage interest, property tax, utilities, insurance, repairs
    - Pro-rata depreciation on home (note: depreciation recapture on sale)
    - Pro-rata HOA dues
    - Direct business expenses (separate phone line, office furniture, etc.)
  Pro-rata = home office sq ft / total home sq ft
  Typical: 200 sq ft home office / 2,000 sq ft home = 10% × annual home expenses ($30K typical) = $3,000/yr
feasibility: high
implementation_complexity: low to medium
audit_risk: low (when documented and accountable plan is properly drafted)
requires_documentation:
  - Written accountable plan document
  - Square footage measurement (room dimensions)
  - Photographs of office space showing exclusive business use
  - Annual reimbursement requests with supporting receipts/calculations
  - Cancelled checks or payroll records showing reimbursement
requires_partner_signoff: false
requires_separate_engagement: false
typical_separate_engagement_fee: null
compatible_stacks:
  - Augusta-Rule-280A (different mechanism, can coexist)
  - S-Corp-Reasonable-Comp (reimbursement is not comp; doesn't affect comp analysis)
incompatible_with:
  - Schedule A itemized deduction for same expenses (must allocate)
prerequisites:
  - Dedicated home office space used regularly and exclusively
industries_best_fit:
  - all (every owner working from home)
industries_not_applicable:
  - businesses where owner has dedicated commercial office space and no home use
state_specific_considerations: false (federal rule)
path_b_compensation_tier: 0
---

# Home Office via Accountable Plan

For S Corp and C Corp owners, the home office deduction works through an accountable plan reimbursement, not Schedule A. Sole proprietors take it directly on Schedule C.

## The basic mechanic for S Corp owners

Schedule A home office deduction was eliminated in TCJA. For S Corp owner-employees, the only path is reimbursement under an accountable plan:

1. S Corp adopts written accountable plan
2. Owner submits expense report quarterly or monthly with home office calculation
3. S Corp reimburses owner (no income to owner, deduction to S Corp)
4. Reimbursement bypasses W-2 (no FICA/Medicare)

Sole proprietors take the deduction directly on Schedule C (Form 8829) — the accountable plan mechanism doesn't apply because there's no separate entity.

## The fact pattern requirements (§280A(c)(1))

- **Regular use** — used on a continuing basis, not occasional
- **Exclusive use** — no personal use of the space (can't be a guest bedroom that's also an office)
- **Principal place of business** — primary location for substantial admin/management activities
- **Trade or business connection** — the use must be for client's business, not employer (post-TCJA, employees cannot deduct home office for employer convenience)

## Calculation methods

**Actual expense method** (preferred for higher savings):
- Measure office square footage / total home square footage
- Apply percentage to: mortgage interest, property tax, utilities, insurance, repairs, HOA, depreciation
- Add direct expenses (office-only items)

**Simplified method**:
- $5/sq ft up to 300 sq ft = max $1,500/year
- Easy but typically much smaller than actual expense method
- Use only when actual method isn't worth the complexity

## Depreciation considerations

Including depreciation on the home in the reimbursement creates depreciation recapture on sale. Trade-off:
- Including depreciation: larger annual deduction ~$1,000-$3,000/year, but pay ~25% recapture tax on the depreciation when home sold
- Excluding depreciation: simpler, no recapture surprise, smaller annual deduction

For long-term homeowners with no near-term sale plans: include depreciation
For homeowners likely to sell within 5 years: consider excluding depreciation

§121 personal residence exclusion does NOT shelter the depreciation recapture — that portion is always taxable on sale.

## The accountable plan must include

Per Reg §1.62-2:
- Business connection requirement (expenses must have business purpose)
- Substantiation requirement (receipts, records, business purpose documented)
- Return of excess requirement (employee returns reimbursement of expenses not actually incurred)

Plan must be written, in place before reimbursements, and consistently followed.

## Implementation steps

1. Draft accountable plan document (one-time)
2. Measure office square footage
3. Photograph office space showing dedicated business use
4. Quarterly: owner submits expense report:
   - Square footage and percentage
   - Period covered
   - Mortgage interest paid (from monthly statement)
   - Property tax (allocated annually or per quarter)
   - Utilities (electric, gas, water, internet — actual bills)
   - Insurance (homeowners)
   - Repairs (with receipts)
   - HOA dues
   - Depreciation calculation
5. S Corp reimburses owner via separate check (or accumulated and paid quarterly)
6. S Corp deducts as office expense
7. Owner does not include reimbursement in income (accountable plan rules)

## Common errors we inherit

- **No accountable plan in place** — reimbursements treated as wages, taxed
- **Schedule A still attempted** — no longer allowed post-TCJA
- **Office space not exclusive** — kid's homework area, guest bedroom, exercise room dual-use disqualifies
- **Depreciation surprise on sale** — owner didn't know about recapture
- **Square footage estimate not measured** — eyeballed, fails audit substantiation
- **Reimbursement same period as expenses but no plan in place** — accountable plan rules require pre-existing plan
- **Cell phone, internet, etc. fully reimbursed without business-use percentage** — partial business use only; full reimbursement creates wage income

## Stacking with Augusta Rule

These coexist well — different mechanisms:
- Home office: regular and exclusive business use of one room (e.g., 200 sq ft office)
- Augusta: business rents full home or substantial portion for occasional board meetings (12 days/year)

A typical owner has both: $3,000/year home office reimbursement + $15,000-$25,000/year Augusta deductions = $18K-$28K combined annual deduction.

## Documentation skill handoff

- Accountable plan document template
- Square footage measurement worksheet
- Quarterly expense report template
- Annual reconciliation worksheet
- Photos checklist (what to document)
- Year-end true-up calculation

## Post-OBBBA and current law impact

OBBBA 2025 did not amend §280A(c) or accountable plan regulations (§1.62-2). Strategy continues unchanged.

### Indirect OBBBA impacts

**TCJA employee expense elimination remains**: TCJA's §67(g) suspension of miscellaneous itemized deductions (including unreimbursed employee business expenses) is in effect through 2025. OBBBA did NOT extend or make permanent. As of 2026+, the sunset may restore miscellaneous itemized deductions (subject to 2% floor) — but the accountable plan approach through S Corp remains superior because it's pre-tax (not subject to floor, not a personal deduction).

As of 2026-04, the 2026 status of §67(g) suspension is uncertain pending technical corrections. Accountable plan remains the safer route.

**§199A interaction**: Accountable plan reimbursement is a business expense (reduces S Corp net income). Small effect on QBI base.

## Interaction with other strategies

### Coordinates with Augusta-Rule-280A

Separate mechanisms, can coexist:
- Home office: exclusive regular business use portion
- Augusta: whole-home rental for specific days

Both available for same client.

### Coordinates with S-Corp-Reasonable-Comp

Accountable plan reimbursement is NOT compensation. Doesn't affect reasonable comp analysis. Owner receives reimbursement tax-free; S Corp deducts.

### Coordinates with HSA-Optimization

Independent. HSA is health savings; accountable plan is expense reimbursement.

### Non-interaction with QBI beyond AGI

Reimbursement doesn't affect AGI at owner level (it's a pre-tax reimbursement, not income at all). Slight effect on QBI base via S Corp net income reduction.

## Audit posture

### Risk profile: medium; accountable plan documentation is key

- **LOW** when accountable plan is properly written, reimbursements properly documented, substantiation timely
- **MEDIUM** when accountable plan exists but documentation is sparse
- **HIGH** when payments to owner classified as "reimbursement" but lacking accountable plan structure
- **HIGH** when reimbursements continue despite expense not actually incurred

### Audit trigger scenarios

- Large "reimbursed employee expenses" on S Corp return
- Reimbursements to owner without receipts or substantiation
- Home office calculation appears unreasonable (claiming 50% of a 3,000 sq ft home as exclusively business)
- No written accountable plan document
- Reimbursement amounts round numbers (suggesting estimates, not actual expenses)

### Defense considerations

- **Written accountable plan** executed before reimbursements begin
- **Substantiation documents**: receipts, invoices, mileage logs
- **Square footage calculation** with photographs showing exclusive business use
- **60-day substantiation rule**: expenses substantiated within 60 days of being paid
- **Reasonable time for excess return**: 120 days to return any excess reimbursement

### Statute of limitations

- Standard 3-year §6501 limitation
- Improperly-reported reimbursements can be re-characterized as wages, triggering payroll tax issues

## Deliverable points (documentation skill handoff)

When accountable plan appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Establish accountable plan for your S Corp effective January 1, 2026. Reimburse your home office expenses (computed at [percentage] × actual home expenses) plus business mileage at the standard rate."
- **Why quantification**: Annual reimbursement $[X]; S Corp deduction = $[X]. Owner receives $X tax-free.
- **Trade-off statement**: Documentation discipline required. Substantiation within 60 days of payment. Accountable plan written document required.
- **Action items**: Draft accountable plan document; set up substantiation protocol; implement monthly or quarterly reimbursement schedule
- **Deadline**: Plan in effect before reimbursements begin

### In the Excel model

- **Tax Projection tab**: Reimbursement as S Corp business expense (reduces K-1 income)
- **Strategies tab**: row for "Accountable Plan" with federal/state savings at owner's marginal rate
- **Actions tab**: Accountable plan execution; monthly substantiation; quarterly reimbursement cycle
- **Notes tab**: Home office calculation methodology; substantiation protocol

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — home office square footage / exclusive use verified?]`
- `[REVIEW: scope — mileage claim realistic? Logs maintained?]`
- `[REVIEW: quantification — 60-day substantiation window; process in place?]`

## Update status

| Verification | Date | Source |
|---|---|---|
| §280A(c) home office deduction mechanics | Unchanged 2026-04 | Statutory |
| §1.62-2 accountable plan regulations | Unchanged 2026-04 | Treasury |
| Revenue Procedure 2013-13 safe harbor option | Continuing 2026-04 | IRS |
| TCJA §67(g) miscellaneous deduction suspension (through 2025) | Uncertain post-2026 | P.L. 115-97 |
| Business mileage standard rate (annually updated) | Updated annually | IRS |
| OBBBA non-amendment of §280A(c) | Verified 2026-04 | P.L. 119-21 full text review |

**Last full review**: 2026-04 (Sprint 5.5 rebuild — added Post-OBBBA, Interaction, Audit Posture, Deliverable Points)

**Next review trigger**: Annual mileage rate update (January); §67(g) post-2025 status clarification; any accountable plan regulation amendments
