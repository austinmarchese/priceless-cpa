# Basis Tracking

Basis determines the tax treatment of distributions, losses, and dispositions. The IRS requires basis tracking; most S Corp and partnership taxpayers don't do it well. Priceless does.

## Why basis matters

**For S Corp shareholders**:
- Losses deductible only to extent of basis
- Distributions are tax-free return of capital up to basis; capital gain above basis
- Loan basis separate from stock basis (loans from shareholder to corp)
- At-risk basis (§465) separate limitation

**For partners**:
- Same general principles, different rules
- Outside basis = partner's basis in partnership interest
- Inside basis = partnership's basis in its assets
- Debt allocations affect outside basis

**When basis matters in planning**:
- Planning distributions beyond current year income
- Evaluating losses available for deduction
- Sale of entity or partnership interest
- Buyout of co-owner
- Estate planning / basis step-up analysis
- Redemption transactions

## S Corp basis (§1367)

### Stock basis

**Starting point**: Original contribution of capital (cash + FMV of property less liabilities assumed).

**Annual adjustments** (in this order):
1. **Increase** by separately stated income items (interest, dividends, tax-exempt interest, etc.)
2. **Increase** by ordinary income
3. **Increase** by any other income
4. **Decrease** by distributions (but distributions never reduce below zero; excess = capital gain)
5. **Decrease** by separately stated deductions (charitable contributions, §179, etc.)
6. **Decrease** by non-deductible expenses
7. **Decrease** by ordinary loss

**Can't go below zero** for stock basis purposes. But:
- Excess distributions over stock basis = capital gain (LTCG if >1yr holding period)
- Excess losses beyond stock + loan basis = suspended until basis restored

### Loan basis

**What it is**: Direct loans from shareholder to S Corp create loan basis. Allows loss deduction beyond stock basis.

**Rules**:
- Must be direct loan (shareholder → corp), not guaranteed bank loan
- Restored (not increased) by later income
- If reduced by losses then restored, restoration doesn't exceed original loan balance
- Repayment of reduced-basis loan = capital gain (bad outcome, often surprises clients)

**Common error**: Guaranteed bank loans counted as loan basis. They're not. Only direct shareholder loans.

### At-risk basis (§465)

Separate from §1367 basis. Limits losses to amount taxpayer could actually lose.

**Includes**:
- Cash and property contributed
- Amounts borrowed for which taxpayer is personally liable
- Recourse debt (generally)

**Excludes**:
- Non-recourse debt (generally)
- Loans from related parties with protection against loss

**Interaction**: A shareholder can have stock basis but lack at-risk basis (e.g., if financed with non-recourse). At-risk limitation applies separately.

### Distributions in excess of basis — the nightmare scenario

When distributions exceed stock basis (and loan basis if accessed), excess becomes capital gain.

**Typical scenario**:
- S Corp with retained AAA but shareholder's outside basis eroded by prior distributions
- Large distribution taken
- Excess over basis = capital gain, taxable to shareholder
- Often a surprise that wasn't on the return

**Planning prevention**:
- Track basis annually
- Before large distributions, verify basis capacity
- If basis insufficient, consider loan contribution first (creates loan basis)
- Or reduce distribution to within basis

### AAA vs. basis — don't confuse

**Accumulated Adjustments Account (AAA)**:
- Corporate-level account (not shareholder-level)
- Tracks the undistributed income of the S Corp
- Determines whether distributions are tax-free (from AAA) or taxable (from E&P if any)
- Adjusted for ordinary income, separately stated items, distributions, and certain other items

**Basis**:
- Shareholder-level
- Tracks what the shareholder has invested
- Determines whether distributions are tax-free to them (return of capital) or taxable (gain)

A distribution can be sourced from AAA (corporate-level analysis) but still be taxable because it exceeds shareholder basis. Both tests must be passed.

For S Corps without accumulated E&P (never been a C Corp, or E&P distributed), AAA vs. non-AAA distinction matters less — but basis still does.

## Partnership basis (§705)

### Outside basis

**What it is**: Partner's basis in the partnership interest itself.

**Starting point**: Contributions (cash + FMV of property contributed less liabilities assumed + allocable share of partnership liabilities).

**Annual adjustments**:
1. **Increase** by:
   - Partner's share of partnership income (all items)
   - Partner's share of tax-exempt income
   - Increase in partner's share of partnership liabilities
   - Additional contributions
2. **Decrease** by:
   - Distributions (cash and property, FMV)
   - Partner's share of losses
   - Partner's share of non-deductible expenses
   - Decrease in partner's share of partnership liabilities

**Can't go below zero**: Excess distributions = gain. Excess losses = suspended until basis restored.

### Tax basis capital account

Since 2020, partnerships must report partner capital accounts on tax basis on Schedule K-1 Item L.

**Difference from outside basis**: Tax basis capital account EXCLUDES the partner's share of partnership liabilities. Outside basis INCLUDES them.

Both are needed for full picture.

### Inside basis

**What it is**: Partnership's basis in its assets.

**Relevant when**:
- §754 election in place (allows basis adjustments on transfers and distributions)
- Partner buys out another partner
- Partner retires or dies
- Partnership sells appreciated or depreciated property

Generally tracked at entity level by the preparer.

### Debt allocation (§752)

Partner's share of partnership debt increases outside basis. Categories:

- **Recourse debt**: Allocated to partners with economic risk of loss (typically general partners or those with deficit restoration obligations)
- **Nonrecourse debt**: Allocated in three tiers per §1.752-3
- **Qualified nonrecourse financing**: Real estate mortgages generally treated as giving at-risk basis

Changes in debt allocation (partner admitted, debt paid down, etc.) affect outside basis. Underappreciated by most preparers.

## Basis reconstruction methodology

For new-to-Priceless clients where basis isn't tracked:

### Step 1: Get source documents

- Initial contribution documentation (formation docs, initial tax returns)
- All prior years' returns with K-1s
- Any distribution records
- Any additional contributions or loans
- Any ownership changes (buy-ins, buy-outs, redemptions)

### Step 2: Build the schedule from inception

Year by year:
- Opening balance (prior year ending)
- Income/loss adjustments from K-1
- Distributions
- Other items
- Closing balance

For each year, document the source (K-1 Part III, distribution record, etc.).

### Step 3: Identify gaps

Common gaps:
- Distributions not captured (paid directly to shareholder outside payroll, not recorded)
- Additional contributions not documented
- Loan activity not tracked
- Ownership changes (e.g., owner's children received shares as gifts) changing the basis calc

### Step 4: Reasonable reconstruction where documentation is missing

When documentation is missing, use reasonable methods:
- Bank records for distributions
- K-1s for income
- Legal documents for ownership changes
- Partner or corporate resolutions for loans

Document the methodology. This is a workpaper the partner reviews.

### Step 5: Present findings

- Current basis position
- Confidence level (well-documented vs. reconstructed)
- Implications for planning (distribution capacity, loss deductibility, sale gain)
- Recommended action (accept the reconstructed number, engage separate basis study, obtain documentation from prior parties)

## Red flags in basis analysis

Escalate to partner:
- Basis appears to be negative (distributions exceeded income + contributions)
- Prior-year returns show distributions but basis was never adjusted
- Loan basis used for losses but loans are actually bank-guaranteed by shareholder (not direct loans)
- Partnership interest transfers without §754 election where partner paid premium (missed step-up)
- Buy-out of departing owner where basis wasn't stepped up
- Estate-transfer situations where step-up missed or misapplied
- Any client mentioning "basis issue" or "buying out a partner" or "selling my interest"

## Working examples — typical Priceless client

### Example 1: S Corp with moderate income, clean history

Client: E-commerce S Corp, Tony Chen (owner), 5-year-old business.

Basis reconstruction:
- Year 1 formation: $10K contribution. Loss $(30K). Stock basis $0, suspended loss $20K.
- Year 2: Income $50K. Restored basis to $20K (absorbed suspended loss first). Distribution $(15K). Ending stock basis $5K.
- Year 3: Income $80K. Distribution $(40K). Ending stock basis $45K.
- Year 4: Income $120K. Distribution $(60K). Ending stock basis $105K.
- Year 5: Income $150K. Distribution $(80K). Ending stock basis $175K.

Current state: Stock basis $175K. Comfortable distribution capacity for next year. No loan basis needed.

### Example 2: Partnership with complications

Client: Real estate LLC-partnership, 3 partners, 10 years of operations, recent partner retirement.

Issues to reconstruct:
- Each partner's outside basis from initial contributions
- Each year's allocable share of income/loss
- Refinancing in year 4 changed debt allocations
- Retired partner in year 9 — was there a §754 election? Buy-out treatment?

This is materially more complex. Often warrants separate basis study engagement ($1,500-$3,500 fee).

### Example 3: S Corp with distributions exceeding basis (the nightmare)

Client: Professional services S Corp, 15 years, never tracked basis.

Findings:
- Cumulative distributions exceed cumulative income over 15 years
- Basis went to zero somewhere around year 7
- Years 8-15 distributions in excess of basis = capital gain that was never reported
- Prior returns have a significant issue

Planning implications:
- Amendment consideration for years within statute (3 years, possibly 6 for substantial understatement)
- Going-forward: can't distribute excess until basis restored by future income
- Client communication: uncomfortable conversation but necessary

Partner must handle this. Do not proceed without partner sign-off on approach.

## Documentation skill handoff

For the documentation skill (Sprint 6), basis tracking requires:
- Year-by-year basis worksheet template
- Annual update instructions
- Distribution capacity check template
- Basis reconstruction memo template (for new-to-Priceless clients)
- Separate engagement letter template for formal basis study
