---
strategy: S Corp Shareholder Basis Tracking
category: secondary
authority:
  - IRC §1366 - pass-through of items
  - IRC §1367 - basis adjustments
  - IRC §1368 - distribution treatment
  - IRC §465 - at-risk rules
  - Treas. Reg. §1.1367-1 through -3
  - Form 7203 - S Corp Shareholder Stock and Debt Basis Limitations (required for losses)
applies_when:
  - is_s_corp_shareholder: true
  - has_ever_taken_distribution_beyond_basis: true (risk event)
  - is_claiming_losses: true (basis required for loss utilization)
  - or planning_exit_or_buyout: true
earliest_actionable_quarter: Q1 (annual housekeeping)
latest_actionable_quarter: Q4 (before year-end transactions)
typical_savings_range: prevents disallowance — value = losses utilized × rate
typical_savings_as_pct_of_income: n/a (defensive, not offensive strategy)
savings_formula: |
  Losses can only be deducted to the extent of basis
  Distributions in excess of basis = capital gain (§1368)
  Basis calculation critical for:
    - Loss utilization
    - Distribution characterization
    - Sale or redemption gain/loss
    - Liquidation treatment
feasibility: high (mechanical)
implementation_complexity: medium (recordkeeping discipline)
audit_risk: medium (Form 7203 now required; IRS focus area)
requires_documentation:
  - Form 7203 (required with return for shareholders claiming losses)
  - Stock basis schedule from inception
  - Debt basis schedule (if applicable)
  - §1367 annual adjustments
  - Distribution records
  - Capital contribution records
  - Loan documentation (for debt basis)
requires_partner_signoff: true (especially for exit planning)
requires_separate_engagement: no (integrated with return prep)
typical_separate_engagement_fee: null
compatible_stacks:
  - S-Corp-Election-Analysis (prerequisite)
  - S-Corp-Reasonable-Comp
  - PTET-Election-By-State
incompatible_with: []
prerequisites:
  - S Corp exists
  - Client is shareholder
industries_best_fit:
  - All S Corp clients (universal requirement)
industries_less_fit: []
state_specific_considerations: |
  Most states conform to federal basis rules
  Some states (e.g., AMT states, decoupling states) may have state-specific basis differences
path_b_compensation_tier: 0
---

# S Corp Shareholder Basis Tracking

Every S Corp shareholder has stock basis and (potentially) debt basis. Basis determines loss utilization, distribution treatment, and gain/loss on sale. Prior CPAs frequently drop the ball on basis tracking — creating massive retroactive problems when losses disallowed or distributions mischaracterized.

## Why basis matters

### 1. Loss utilization

S Corp losses pass through to shareholder's 1040. But shareholder can only deduct losses to extent of:
- Stock basis
- Plus debt basis (direct loans to the S Corp from shareholder)

Losses in excess of basis: **suspended**. Carry forward indefinitely until basis restored.

### 2. Distribution characterization

Distributions to shareholders:
- Up to basis: return of basis (tax-free; reduces basis)
- In excess of basis: capital gain (§1368(b)(2))

Incorrect basis tracking → distributions taxed as ordinary when should be tax-free basis return, OR not taxed when should be capital gain.

### 3. Gain/loss on sale

When shareholder sells stock:
- Sale price - basis = capital gain/loss
- Held > 1 year: long-term capital gain rate
- §1202 if qualified (C Corp only, not S Corp — different mechanism)

### 4. Redemption and liquidation

At S Corp termination or redemption of shareholder:
- Basis determines gain/loss
- AAA (Accumulated Adjustments Account) determines C Corp-era distribution treatment for former C Corps

## Form 7203 requirement

Since tax year 2021, shareholders claiming S Corp losses MUST attach Form 7203 to their 1040 tracking:
- Stock basis calculation
- Debt basis calculation
- §1367 adjustments
- Loss utilization

**Penalty for missing**: Losses can be disallowed. IRS has made this a focus area.

## Stock basis — the §1367 adjustments

Annual adjustment pattern (after 2025):

**Starting stock basis at year-begin**: From prior year's ending basis (or initial contribution if new shareholder).

**Increases**:
+ Capital contributions (cash or property contributed during year)
+ Pro-rata share of taxable income items (ordinary income, interest, dividends, capital gains)
+ Pro-rata share of tax-exempt income items
+ Depletion deductions exceeding adjusted basis

**Decreases** (applied in specific order per §1367):
– Distributions (up to stock basis)
– Non-deductible expenses, non-capitalized (e.g., 50% meal limitation, fines)
– Pro-rata share of loss items (deductible to extent of basis)
– Depletion deductions

**Result**: Ending stock basis.

**Order of adjustments matters**. Income/distribution adjustments before losses. Losses reduce basis to zero; excess losses suspended.

## Debt basis

Created when shareholder directly lends to the S Corp. Requirements:
- Actual loan (not guarantee of third-party loan to corporation)
- Loan documentation (note, interest, repayment terms)
- Bona fide intent to create debt/creditor relationship

**Guarantees don't create debt basis**: Shareholder guaranteeing bank loan to S Corp does NOT give shareholder debt basis. This is a frequent surprise.

**Back-to-back loans**: Shareholder borrows from bank, then lends to S Corp. Shareholder has debt basis ($X lent to S Corp).

**Restoration of debt basis**: Post-2022, debt basis is restored before stock basis if both reduced by losses.

### Debt basis adjustments

- Increases: Amount lent to S Corp
- Decreases: Repayment of loan from S Corp (up to basis)
- Decreases: Pass-through losses (after stock basis exhausted)

**When loss reduces debt basis**: Subsequent repayment to shareholder beyond remaining debt basis = ordinary income (not return of principal).

## AAA (Accumulated Adjustments Account)

For S Corp that was never a C Corp: AAA rarely matters. Stock basis sufficient.

For S Corp that was formerly a C Corp (S election made after C Corp years):
- AAA tracks S Corp period undistributed earnings
- Distributions come from AAA first (no tax if within basis)
- Then from Accumulated E&P (dividend; ordinary income or qualified div)
- Then from remaining stock basis (reduces basis)
- Then in excess of basis (capital gain)

**Why it matters**: Former C Corps have two distinct pools. Order of distribution pool matters for tax treatment.

## Common errors

### Error 1: No basis tracking

Most common problem. Prior CPA prepares returns without tracking basis. Years go by. Issues when:
- Losses claimed that shouldn't have been
- Distributions taxed that should have been tax-free
- Sale of stock: basis unknown → default to $0 → entire proceeds taxable

**Remediation**: Reconstruct from inception using all prior returns, K-1s, bank records. Can be tedious. Sometimes impossible. Partner memo needed.

### Error 2: Guarantees treated as debt basis

Shareholder guarantees bank loan to S Corp. Prior CPA treats guarantee amount as debt basis for loss utilization. This is wrong.

**Remediation**: Remove debt basis. Losses may have been disallowed. Amended returns or carryforward reconciliation needed.

### Error 3: Distributions not tracked relative to basis

Owner takes distributions without basis check. Distributions exceed basis → capital gain that should have been reported. Or owner's basis understated, distributions "look" like capital gain but are really return of basis.

### Error 4: Ordering of adjustments wrong

§1367 order matters:
1. Income items (increase basis)
2. Distributions (decrease basis)
3. Loss items (decrease basis)

Error: applying losses before distributions. Results in distributions treated as excess (taxable) when they shouldn't be.

### Error 5: Multi-shareholder basis not separately tracked

Each shareholder has own basis. Not pro-rata to S Corp AAA or earnings. Different contribution history, different loan history, different distribution history.

### Error 6: Post-2022 debt basis restoration ordering

Regulations clarified in 2022. Losses reduce stock basis first, then debt basis. Income restoration: debt basis first, then stock basis. Prior CPAs may have used old ordering.

## Post-OBBBA / Current context

Structure unchanged by OBBBA. Form 7203 continues as required documentation. §1367 adjustments unchanged.

## Best practices

### For new S Corp client

1. Document opening basis clearly (capital contribution + initial tax-exempt items)
2. Build running basis spreadsheet
3. Update annually based on K-1 activity
4. Attach Form 7203 to every return where losses claimed

### For inherited client (prior CPA)

1. Review prior returns for consistency
2. Reconstruct basis from available data
3. Partner memo if reconstruction incomplete or reveals prior issues
4. Consider amending prior returns if material errors

### For exit or sale planning

1. Confirm current basis
2. Model gain/loss on anticipated transaction
3. Coordinate with buyer's basis (if asset sale)
4. §754 election consideration if partnership equivalent
5. Review suspended losses that release at disposition

## Documentation standards

- Spreadsheet or software (most tax software has basis module)
- Annual reconciliation to K-1
- Distribution tracking (when received, amount)
- Loan documentation (note, interest, payments)
- Contribution documentation (cash vs. property; property receives fair value + adjusted basis)

## Interaction with other areas

### Suspended losses at exit

Losses suspended due to basis insufficiency release when:
- Basis restored (via income, contribution, or loan)
- Disposition of S Corp interest

**Example**: Shareholder has $50K suspended losses. Sells S Corp stock for $100K with $20K basis. Gain: $80K capital gain. But suspended losses of $50K can be deducted against this gain. Net: $30K taxable.

### PTET election interaction

PTET tax paid at S Corp level reduces shareholder's flow-through income and basis.

### QBI interaction

QBI deduction occurs at shareholder 1040 level; does NOT affect basis directly (deduction happens after K-1 passes through).

## Deliverable points

Basis memo should emphasize:
- Current-year basis calculation with supporting math
- Running basis tracking methodology
- Form 7203 preparation and review
- Suspended loss tracking (if applicable)
- Coordination with exit planning if relevant

### Client-facing framing when draws are approaching or exceeding basis

Clients almost never intuit why distributions can exceed basis when the bank balance looks fine — walk through the distinction and the two most common causes before giving the number:
> "A quick distinction: a distribution is money moving from the business to you personally — it's your own money. A tax payment is money leaving the business for the IRS or [state]. They're not the same thing, and mixing them up is where basis questions get confusing. You can take money out of the business tax-free only up to your basis — roughly what you've invested plus your share of profits, minus what you've already withdrawn. Beyond that, withdrawals are taxed as a capital gain. This is rarely because the business had a bad year — two everyday situations create the mismatch: (1) the business has more debt than cash on hand, since basis tracks what you've invested and earned, not what the business owes; (2) depreciated assets create a gap between book cash and tax basis, since equipment or property that's been depreciated leaves real cash on hand while your tax basis has already been reduced by those deductions."

Then quantify: end-of-prior-year basis, YTD draws (broken out into distributions vs. personal expenses run through the business, if applicable), the resulting cushion or shortfall, and — if a reasonable-comp catch-up is also happening this quarter — how much reclassifying draws to wages (see `strategies/S-CORP-REASONABLE-COMP.md` and `payroll-analysis/REASONABLE-COMP-DEEP-DIVE.md`) improves the basis position. Frame a thin cushion as something to plan around, not alarm about: recommend avoiding further personal spending through business accounts until the next update, and commit to modeling it precisely once the missing income estimate is confirmed. Full explainer bank in `shared/CLIENT-FACING-MEMO-TEMPLATE.md`.

## Cross-references

- `strategies/S-CORP-ELECTION-ANALYSIS.md`
- `strategies/S-CORP-REASONABLE-COMP.md`
- `tax-return-analysis/CARRYFORWARD-TRACKING.md` — suspended losses
- `strategies/PTET-ELECTION-BY-STATE.md`

## Update status

File created 2026-04. §1367 mechanics unchanged by OBBBA. Form 7203 continues as required.

Updated 2026-08: added client-facing framing for the basis-vs-cash mismatch, sourced from a live engagement (T&A Contracting LLC Q3 2026).
