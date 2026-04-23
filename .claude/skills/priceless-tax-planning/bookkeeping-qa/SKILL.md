---
name: bookkeeping-qa
description: Phase 1 of quarterly engagement. Verifies the client's books are clean enough to project from. Reviews QBO P&L, Balance Sheet, Trial Balance, and General Ledger (current YTD and prior year full-year) to identify reconciliation issues, classification errors, and trend anomalies. Produces a Data Integrity Summary: books are clean → proceed to projection, OR books have blockers → stop and fix. Triggered as Phase 1 of any quarterly workflow. Designed for offshore analyst execution with partner escalation on material issues.
---

# Bookkeeping QA Sub-Skill

## Purpose

Before we project, we verify the books reconcile. Projections built on broken books produce broken memos. The cost of stopping in Phase 1 is much lower than the cost of discovering issues in Phase 4.

This sub-skill runs as Phase 1 of any quarterly engagement. It is executed primarily by offshore analysts with partner escalation on material findings.

## Inputs required

From client (all redacted):
- Current year YTD QBO P&L (accrual basis, by month)
- Current year YTD QBO Balance Sheet
- Current year YTD QBO Trial Balance
- Current year YTD QBO General Ledger (full transaction detail)
- Current year YTD payroll register
- Current year quarterly 941 filings
- Prior year full-year QBO P&L
- Prior year full-year QBO Balance Sheet
- Prior year full-year QBO General Ledger

From Phase 0.5:
- Tax Return Analysis Report

From client profile:
- Entity structure and industry
- Current-year events flagged
- Known bookkeeping issues from prior engagements

## Workflow

### Step 1: Read foundation files

- `../shared/FIRM-METHODOLOGY.md`
- `../shared/CLIENT-PROFILE-TEMPLATE.md`
- `../shared/ENGAGEMENT-STANDARDS.md`

### Step 2: Review Trial Balance first

Trial balance tells us quickly whether there are gross classification errors before we dig into P&L or GL.

Checks:
- **Negative asset balances** — cash should not be negative; receivables should not be negative (negative = deferred revenue miscoded); inventory should not be negative
- **Positive contra-asset balances** — accumulated depreciation should be credit; allowance for doubtful accounts should be credit
- **Liability balance sanity** — accounts payable positive; payroll liabilities match expected withholding
- **Equity balance** — owner's equity / retained earnings rolls forward correctly from prior year
- **Revenue balance** — credit in TB
- **Expense balance** — debit
- **Net debit = net credit** — TB must balance; if it doesn't, systematic issue

Any red flags → investigate before proceeding.

### Step 3: Reconcile balance sheet

**Bank accounts**:
- QBO bank balance matches bank statement ending balance for each month
- Small variance (< $100): outstanding items acceptable
- Larger variance: reconciliation issue; flag
- Beginning-of-year balance matches prior-year ending

**Credit cards**:
- Same as bank accounts
- Often less disciplined in smaller operations

**Accounts receivable**:
- Balance rolls: opening + invoiced - collected = closing
- Aging report ties to AR balance
- Old items (>90 days) may be stale

**Inventory** (for product businesses):
- Matches physical inventory records
- Cost method (FIFO, weighted average) consistency

**Accounts payable**:
- Balance rolls: opening + bills entered - bills paid = closing
- Vendor aging ties
- Old unpaid items may be disputed or miscoded

**Fixed assets**:
- Tie to prior-year depreciation schedule
- Any new additions this year?
- Any disposals with gain/loss booked?

**Loans**:
- Owner loans: direction matters (from owner = loan basis; to owner = potential distribution)
- Bank loans: interest + principal split properly
- Outstanding balance matches lender statement

**Equity**:
- Beginning owner's equity matches prior-year filing
- Current-year distributions tracked separately
- Owner contributions tracked separately

### Step 4: Reconcile payroll to 941 filings

Critical for S Corp owners — payroll prepayments count toward total tax prepayment (per v0.4.1 update).

Checks:
- QBO payroll expense by quarter matches 941 wages
- Federal income tax withheld matches 941 Line 3
- Social Security and Medicare (employee portion) match 941
- Employer-side Social Security and Medicare match 941
- Federal deposits made (EFTPS) match 941 Line 13
- Any discrepancy = broken payroll, flag

State payroll tax: reconcile to state quarterly filings (varies by state).

### Step 5: Scan current-year P&L for classification issues

Read through each major line item. Look for:

**Owner personal expenses miscoded**:
- "Office supplies" with personal-looking transactions (Amazon household items, Target)
- "Meals and entertainment" without business meal documentation
- "Travel" for clearly personal trips
- "Vehicle" for personal vehicle expenses without business use %
- "Utilities" at home address without home office allocation
- "Subscriptions" for streaming services, personal apps
- "Insurance" that's homeowner's insurance
- "Education" for kids' schooling

**Misclassifications within business expenses**:
- Equipment purchases in "office supplies" (should be fixed assets)
- Legal/professional fees for business acquisition (should be capitalized)
- Repairs that are actually capital improvements (new roof, HVAC)
- Prepaid expenses expensed immediately
- Draws labeled as "owner comp" (should be distribution, not wage)

**Missing expected items**:
- No office rent when client works from home (home office accountable plan?)
- No professional fees when Priceless engaged
- No depreciation on known fixed assets
- No insurance when client has coverage
- No interest on known loans

**Revenue issues**:
- Revenue deposits not matching invoiced amounts
- Revenue miscoded as "other income" or "uncategorized income"
- Cash deposits not reconciled to customer payments
- Sales tax collected but not remitted separately

### Step 6: Dive into General Ledger for suspicious items

**Large individual transactions**:
- Any single transaction >$5,000 — verify documentation matches classification
- Round numbers — often adjusting entries or estimates

**Vendor patterns**:
- Recurring payments to "Owner" — likely distributions
- Recurring payments to family members — legitimate employment or disguised gift?
- Payments to "cash" — no proper documentation
- Payments to generic "contractor" without 1099 issued

**Unusual accounts**:
- "Ask My Accountant" — uncategorized; flag any balance
- "Suspense" accounts — should generally be zero at period end
- "Adjustments" or "Other" with material balances

**Journal entries**:
- Manual JEs that need supporting documentation
- Monthly recurring JEs that look inappropriate
- Year-end JEs restating prior periods without explanation

### Step 7: Trend analysis against prior year

Compare current-year monthly pattern to prior-year pattern:

**Revenue**:
- Monthly run-rate this year vs. prior year same months
- YoY trend consistent with client communication
- Seasonality consistent

**Gross margin**:
- Current vs. prior — large changes investigate
- COGS ratio consistency

**Operating expenses as % of revenue**:
- Consistent with prior or explainable changes
- Any category that grew disproportionately

**Payroll**:
- Number of employees consistent
- Wage rate inflation within norms
- Owner's W-2 consistent with stated reasonable comp

**Anomalies**:
- Any category 30%+ different from prior with no explanation

### Step 8: Basis and AAA roll-forward check (S Corp clients)

Reconcile from prior-year Return Analysis Report:
- Prior-year ending AAA + current-year income - current-year distributions = current-year ending AAA
- Prior-year stock basis + current-year income - current-year distributions = current-year stock basis
- Any mismatch → flag

### Step 9: Produce Data Integrity Summary

```
BOOKKEEPING QA — DATA INTEGRITY SUMMARY
================================================================
Client: [ID]
Data as of: [DATE]
Analyst: [name], [date]
Status: [CLEAN - PROCEED | MINOR ISSUES - PROCEED WITH NOTES | BLOCKERS - STOP]

SECTION 1: Data Completeness
[What was provided, what's missing]

SECTION 2: Trial Balance Findings
[TB-level anomalies or clean bill]

SECTION 3: Balance Sheet Reconciliation
[Bank, CC, AR, AP, Loans, Equity — confirmed or flagged]

SECTION 4: Payroll Reconciliation
[QBO payroll vs. 941 filings; prepayment total for projection]

SECTION 5: P&L Classification Issues
[Specific transactions identified; proposed reclassifications]

SECTION 6: General Ledger Findings
[Suspicious items, unusual accounts, JEs to investigate]

SECTION 7: Trend Analysis
[YoY comparisons; anomalies flagged]

SECTION 8: Basis / AAA Roll-Forward
[S Corp: basis and AAA from prior-year Return Analysis]

SECTION 9: Recommendations for Fix
[Specific actions needed before Phase 2]

SECTION 10: Open Questions for Bookkeeping Team
[Items bookkeeping should address]

SECTION 11: Proceed / Stop Decision
[Clear recommendation with rationale]
```

### Step 10: Pass to Phase 2

Once "proceed" decision made, pass to Phase 2 including:
- Payroll prepayment total (federal + state withholding + employer-side FICA)
- Reclassification adjustments to apply in projection
- Known events to build into projection

## Stop/proceed decision framework

### Proceed normally
- All reconciliations match within materiality
- Classification issues minor and absorbable
- Trend anomalies all explainable
- Basis and AAA reconcile

### Proceed with notes
- Minor reconciliation issues not affecting tax calc (old AR, old AP)
- Small classification issues individually immaterial
- Trend anomalies with plausible explanations

### Stop
- Material bank reconciliation issue (unexplained differences)
- Payroll not matching 941 by material amount
- Owner personal expenses >10% of operating expenses
- Uncategorized transactions with material balance
- Basis / AAA cannot be reconciled from prior-year Return Analysis
- Missing documents materially blocking reliable QA

## Partner escalation triggers

- Evidence of fraud or intentional misstatement
- Large related-party transactions without documentation
- Foreign transactions surface that weren't disclosed
- Crypto activity with no prior-year reporting
- Owner personal expenses so pervasive books are fundamentally wrong

## What this sub-skill does NOT do

- Does not do bookkeeping cleanup (different engagement)
- Does not re-categorize transactions (flag only; bookkeeping team fixes)
- Does not opine on adequacy of internal controls
- Does not review fraud exposure beyond obvious red flags
- Does not restate prior-year financials

## Reference files

- `../shared/FIRM-METHODOLOGY.md`
- `../shared/ENGAGEMENT-STANDARDS.md`
- `../tax-return-analysis/SKILL.md`
- `COMMON-CLASSIFICATION-ERRORS.md`
- `PAYROLL-RECONCILIATION-METHODOLOGY.md`
