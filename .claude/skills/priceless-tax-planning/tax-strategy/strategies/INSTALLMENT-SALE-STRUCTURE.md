---
strategy: Installment Sale Structure
category: secondary
authority:
  - IRC §453 - installment method
  - IRC §453A - interest on deferred tax
  - IRC §453(e) - related-party sale rules
  - IRC §453(l) - dealer restrictions
  - Treas. Reg. §15A.453-1 - installment method
applies_when:
  - selling_capital_asset_or_non_inventory_property: true
  - seller_financing_structure: true (at least one payment received after close of tax year)
  - is_not_inventory_or_dealer_property: true
  - is_not_publicly_traded_securities: true
earliest_actionable_quarter: Q1 (pre-closing structure review)
latest_actionable_quarter: pre-closing
typical_savings_range: $10000 - $200000+ (NPV of tax deferral; depends on gain and deferral period)
typical_savings_as_pct_of_income: varies
savings_formula: |
  Without installment method: recognize 100% of gain in year of sale
  With installment method: recognize gain pro-rata as payments received
  
  Tax deferral value:
    - NPV of deferred tax
    - Bracket management (spread gain across years)
    - Avoid pushing into higher bracket, NIIT, Additional Medicare
    - Reduce or avoid §453A interest charge if small enough
feasibility: high (if transaction structure supports it)
implementation_complexity: medium (requires seller financing structure, buyer credit)
audit_risk: low (standard mechanic)
requires_documentation:
  - Promissory note with buyer
  - Security instrument (mortgage, UCC, etc.)
  - Form 6252 annual reporting
  - Gross profit ratio calculation
  - Installment method election (default; opt-out possible)
requires_partner_signoff: true (transaction structuring)
requires_separate_engagement: maybe (transaction planning sometimes separate)
typical_separate_engagement_fee: variable
compatible_stacks:
  - Real estate sales
  - Business sales
  - Charitable-Bunching-DAF (bunching charitable in year of large gain works here too)
  - S-Corp-Basis-Tracking (exit planning)
  - QSBS-Section-1202 (partial exclusion above cap uses installment for remainder)
incompatible_with:
  - Inventory sale (dealers)
  - Publicly traded securities (§453(k)(2))
  - Related party sale within 2 years (§453(e) acceleration)
  - Dealer in real property (§453(l))
prerequisites:
  - Sale of qualifying non-dealer property
  - Buyer financing or seller note
  - At least one payment after tax year close
industries_best_fit:
  - Real Estate Owner selling property with seller financing
  - Business sale (closely held)
  - Succession / family transfer
industries_less_fit:
  - Publicly traded
  - Inventory/dealer
  - High-NIIT-exposed clients (interest on deferred tax complicates)
state_specific_considerations: |
  Most states conform to installment method
  State tax on installment payments in year received
  Some states with different residency during deferred period: sourcing complexity
  CA specifically pursues former residents on deferred gain
path_b_compensation_tier: 0
---

# Installment Sale Structure

Section 453 allows deferral of gain recognition on eligible property sales by spreading gain over the years payments are received. Valuable for real estate sales, business sales, and succession planning.

## The basic mechanic

Seller sells property for $X. Instead of collecting $X at close:
- Down payment at close
- Promissory note for balance (with interest)
- Buyer pays down note over years

**Without installment method**: Full gain recognized in year of sale.

**With installment method** (default, unless election out):
- Gain recognized pro-rata as payments received
- Each payment consists of: principal (reduces note basis), gain (recognize at gross profit ratio)
- Interest portion of payment: ordinary interest income

## Gross profit ratio

The fraction of each principal payment that is gain:

**GPR = Gross profit / Contract price**

Where:
- Gross profit = Sale price - Basis - Selling expenses
- Contract price = Sale price - Qualifying debt assumed by buyer (liabilities assumed don't count)

**Example**:
- Sale price: $1,000,000
- Basis: $400,000
- Selling expenses: $50,000
- Assumed mortgage: $0 (cash buyer, seller financing)
- Gross profit: $1,000,000 - $400,000 - $50,000 = $550,000
- Contract price: $1,000,000
- GPR: 55%

Each principal payment: 55% = gain, 45% = return of basis.

## Example: Multi-year recognition

$1M sale, $200K down, $800K 10-year note at 6%:

Year of sale:
- Down payment: $200K
- Gain on down: $200K × 55% = $110K recognized
- (Interest income from note: $0 in sale year, starts next year)

Year 2:
- Principal received: $60K (per amortization)
- Interest received: $48K (separately ordinary income)
- Gain on principal: $60K × 55% = $33K
- Interest income: $48K

Over 10 years: Full $550K gain recognized as $800K note paid off.

## When installment sale makes sense

### Tax deferral NPV

Future tax on deferred gain vs. full current tax. NPV of deferral = tax × discount rate × deferral period.

At 37% federal + 3.8% NIIT + state, full-year tax on $550K gain = ~$250K. Deferring half by 5 years at 5% discount: ~$15K NPV savings.

Bigger gains, longer deferrals, higher marginal rates → bigger deferral value.

### Bracket management

Large one-time gain pushes seller into high bracket / NIIT / Additional Medicare.

Spreading over 5-10 years may keep seller in lower brackets each year.

**Example**: $2M gain in year of sale → 37% bracket + 20% LTCG + 3.8% NIIT. Same $2M spread over 5 years at $400K/year → potentially 15-20% LTCG + NIIT (varies), substantial saving.

### Buyer flexibility

Seller financing eases transaction when buyer can't get bank financing. Seller earns interest on note (usually 4-8%). Creates annuity-like income stream.

### Estate planning

Installment note in estate: value = present value of remaining payments. Can grantor-sell to defective grantor trust for installment note (freeze and discount technique).

## Post-OBBBA context

Installment method mechanics unchanged by OBBBA.

**QSBS interaction**: QSBS gain above the $15M cap (post-OBBBA) taxable at 28% LTCG rate. For large QSBS exits with deferred consideration, installment method can spread the non-excluded portion over years.

**QOZ interaction**: QOZ investment defers recognized gain. Installment + QOZ requires careful sequencing (reinvest 180 days of EACH gain recognition trigger).

## When installment sale DOES NOT apply

### Dealer property

§453(l): Real estate dealer (regular business of selling real estate) cannot use installment method on property held for sale.

### Inventory

§453(b)(2): Inventory sales excluded. Merchandise sold in ordinary course of business.

### Publicly traded securities

§453(k)(2): Publicly traded stocks/bonds — all gain recognized in year of sale, even if seller-financed.

### Related-party sale within 2 years

§453(e): If buyer (related party) resells within 2 years, seller's deferred gain accelerated in year of resale.

Purpose: Prevent tax avoidance via family sale at installment + immediate cash sale.

"Related" broadly defined (§267 + §453(f)).

### Recapture income

§453(i): Depreciation recapture (§1245 and §1250 portions) recognized in year of sale regardless of installment method. Only capital gain portion qualifies for installment treatment.

**Important for real estate sellers**: Property with substantial depreciation may have large recapture portion recognized immediately, with only residual capital gain deferred.

## §453A interest on deferred tax

For large sellers (deferred principal > $5M), §453A imposes interest on deferred tax:
- Applies to installment obligations outstanding > $5M at year-end
- Calculated on underpayment rate (currently ~8-9%)
- Reduces after-tax benefit of deferral

**Note**: $5M threshold is per year of sale. Cumulative older notes from prior sales typically not subject to §453A.

**Partner conversation**: §453A makes installment less attractive for very large sales.

## Election out

**Installment method is DEFAULT**. To elect out (recognize full gain currently):
- Attach statement to timely filed return
- Election irrevocable

When to elect out:
- Current year low income, future years high (recognize now, cheap)
- Avoid §453A interest
- Simplify recordkeeping

## Common errors and pitfalls

### Error: Not reporting recapture in year of sale

§1245 recapture must be recognized in year of sale even under installment method. Often missed.

### Error: Wrong gross profit ratio

Calculation errors propagate over years. Mortgage assumption, selling expenses, basis calculation all affect.

### Error: Related-party sale acceleration not tracked

2-year window on related-party resale. Not monitoring triggers surprise acceleration.

### Error: §453A interest not reported

Large installment sales subject to annual §453A interest. Often missed.

### Error: Buyer default / disposition

If buyer defaults, seller repossesses. §1038 rules: gain/loss on repossession.

If seller disposes of installment note (sells, gifts, transfers to related party):
- Full remaining gain recognized (§453B)
- Charitable contribution of note: gain recognized (FMV less basis in note)

### Error: Debt forgiveness = cancellation of gain deferral

If seller forgives remaining note balance: full remaining gain accelerates.

## Coordination with other strategies

### Charitable planning

Large gain year: charitable bunching offsets (see CHARITABLE-BUNCHING-DAF.md).

Gift installment note to DAF: IRS treats as sale — full gain recognized. Usually bad move.

Better: Cash gift to DAF in year of sale offsets current-year gain.

### QSBS + installment

QSBS exclusion up to cap ($15M post-OBBBA). Above-cap portion taxed at 28% LTCG.

If seller negotiates deferred consideration, installment can spread the above-cap portion.

### QOZ + installment

QOZ reinvestment triggered by gain recognition. With installment, each year's recognized gain is separately eligible for QOZ reinvestment (within 180 days).

### Self-canceling installment note (SCIN)

Note terminates at seller's death. Advanced estate planning technique. Partner review required.

### Private annuity

Buyer pays seller annuity for life. Advanced estate planning. Different treatment from installment.

## Monteleone v. Commissioner (1960) and economic substance

Courts continue to require actual economic substance — bona fide sale, not tax-motivated transaction. Standard real estate and business sales are clearly qualifying; creative structures warrant review.

## Deliverable points

Installment sale memo should emphasize:
- Year-by-year recognition schedule
- Interest income separately from gain
- §453A interest if applicable
- Recapture component recognized immediately
- Buyer credit and security considerations
- Coordination with other strategies

## Cross-references

- `strategies/QSBS-SECTION-1202.md` — coordination
- `strategies/CHARITABLE-BUNCHING-DAF.md` — offsetting in sale year
- `strategies/S-CORP-BASIS-TRACKING.md` — exit planning
- `industries/REAL-ESTATE-OWNER.md` — common use case
- `FEDERAL-TAX-COMPUTATION.md` — bracket management

## Update status

File created 2026-04. §453 mechanics unchanged by OBBBA. Coordination with QSBS and QOZ reflects post-OBBBA structure.
