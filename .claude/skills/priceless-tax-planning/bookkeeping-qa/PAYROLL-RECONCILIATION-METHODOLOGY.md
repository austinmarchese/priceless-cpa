# Payroll Reconciliation Methodology

Payroll reconciliation matters more for Priceless than it does for most CPAs because:

1. Most of our clients are S Corp owners whose W-2 is the payroll
2. Payroll tax withholding and prepayments count toward total tax prepayment for projection (per v0.4.1 update)
3. Reasonable comp analysis depends on accurate W-2 data
4. §162(l) health insurance flows through W-2 for >2% shareholders
5. Errors in payroll create cascading problems across tax return prep, planning, and audit exposure

This file specifies how to reconcile payroll data across QBO, payroll provider (Gusto, ADP, etc.), and 941/940 filings.

## The four data sources to reconcile

1. **QBO P&L payroll expense** (employer's side in accounting records)
2. **Payroll provider register** (what Gusto/ADP says was run)
3. **941 quarterly filings** (what was reported to IRS)
4. **EFTPS deposit records** (what was actually paid to Treasury)

These four should all agree. Any difference = investigation.

## Step 1: QBO P&L payroll expense

Extract for each quarter:
- Gross wages (what QBO shows paid to employees)
- Employer-side FICA (Social Security + Medicare)
- Employer-side federal unemployment (FUTA)
- Employer-side state unemployment (SUTA)
- Employee contributions to benefits (retirement, HSA, health if cafeteria plan)
- Net to employee (after employee withholding)

Total QBO quarterly payroll expense = Gross Wages + Employer-side taxes + Employer-paid benefits.

## Step 2: Payroll provider register

Should match QBO. If using Gusto integration with QBO, typically does. If manual entry, often doesn't.

Common variance sources:
- Timing differences (pay period vs. pay date)
- Manual corrections in QBO not reflected in Gusto
- Adjustments by payroll provider between pay periods
- Fee/service charges from payroll provider

## Step 3: 941 quarterly filings

For each quarter, 941 should show:
- **Line 2** (wages, tips, compensation subject to federal income tax withholding) = QBO gross wages for the quarter (generally)
- **Line 3** (federal income tax withheld) = W-2 box 2 cumulative for quarter
- **Line 5a** (Social Security wages) = Box 3 cumulative for quarter (subject to wage base)
- **Line 5a** × 12.4% × 2 (employee + employer) = Social Security portion of tax
- **Line 5c** (Medicare wages) = Box 5 cumulative for quarter
- **Line 5c** × 2.9% × 2 (employee + employer) = Medicare portion of tax
- **Line 5d** (Additional Medicare, employee only) = 0.9% × wages above $200K threshold
- **Line 10** (total taxes before adjustments) = FIT withheld + SS tax + Medicare tax + Additional Medicare
- **Line 13** (total deposits) = what was paid via EFTPS

## Step 4: EFTPS deposit records

For each quarter, verify:
- Monthly or semi-weekly deposits made per the schedule required (based on annual tax liability)
- Deposit amounts match 941 Line 13
- No late deposits (penalty if so)

## The common errors to find

### Error 1: Wages in QBO don't match 941

Usually a timing issue. Quarter-cutoffs depend on pay date, not pay period:
- Pay period Dec 16-31, paid Jan 3: belongs to Q1 next year, not Q4 this year
- Pay period Mar 16-31, paid Apr 2: Q2, not Q1

Double-check quarter cutoffs. If still a mismatch, investigate.

### Error 2: >2% S Corp shareholder health insurance wrong

For >2% shareholders with S Corp-paid health insurance per §162(l):

**Correct W-2**:
- Box 1 (federal wages): Includes premium
- Box 3 (SS wages): Does NOT include premium
- Box 5 (Medicare wages): Does NOT include premium
- Box 14: Disclose the §162(l) amount

**941 implications**:
- Wages on Line 2 match Box 1 (including premium)
- Wages on Line 5a and 5c do NOT include premium

If 941 Line 5a/5c includes the premium, SS and Medicare were overpaid on the premium amount. Correctable via 941-X.

### Error 3: HSA contribution wrong

For >2% S Corp shareholder with HSA contribution via S Corp:

**Correct W-2**:
- Box 1: Includes HSA amount
- Box 3: Does NOT include
- Box 5: Does NOT include
- Box 12 (code W): Should NOT show for >2% shareholder (that's the cafeteria plan code; doesn't apply)

For other employees via cafeteria plan:
- Box 1, 3, 5: All exclude the HSA contribution
- Box 12 (code W): Shows the amount

### Error 4: Retirement contributions wrong

401(k) employee deferrals:
- Box 1: Excludes deferral
- Box 3, 5: Includes deferral (subject to FICA/Medicare)
- Box 12 (code D): Shows deferral amount

Roth 401(k):
- Box 1: Includes (taxable)
- Box 3, 5: Includes (subject to FICA/Medicare)
- Box 12 (code AA): Shows Roth deferral

SEP-IRA employer contribution:
- Doesn't appear on W-2 (at all)
- Goes to Schedule C or K-1 of the business as employer contribution

Solo 401(k) employer contribution:
- Doesn't appear on W-2 (same as SEP)

### Error 5: Officer's FIT withholding low or zero

Common for S Corp owners: withholding too low because owner expects to rely on estimated payments. This is fine strategically, but:
- If withholding is zero, no prepayment from payroll
- Projection needs to count only estimated payments
- Client may be behind safe harbor if relying on under-withholding

Flag in Data Integrity Summary — may affect projection and next-payment recommendation.

### Error 6: Family member pay issues

Spouse or children on payroll:
- FICA exemption for children <18 only if employer is sole prop or partnership of parents (not S Corp)
- If S Corp has children on payroll, FICA applies (reducing the net benefit of hiring children)
- Must verify role is legitimate (not paper employment)

### Error 7: 1099 vs. W-2 misclassification

If contractor appears in books:
- Is this actually a W-2 situation (employer control, integral to business)?
- ABC test in some states (CA AB5, etc.) more strict
- Reclassification risk if misclassified

Flag in Data Integrity Summary for partner review.

### Error 8: State payroll tax mismatches

State unemployment (SUTA) by state:
- Wage base varies
- Rate varies
- Experience rating varies

Reconcile state quarterly return to QBO state unemployment expense.

State income tax withholding:
- Varies by state
- Some states have no withholding (FL, TX, etc.)
- Client may have multi-state employees

## For projection (Phase 2): what to extract

Key output to pass to projection:

```
PAYROLL PREPAYMENT TOTAL (YTD)
=====================================
Federal Income Tax Withheld:         $X  (from 941 Line 3, YTD)
Employee FICA (SS + Medicare):       $X  (informational only — employee's share of 941 Line 5a/5c)
Employer FICA (SS + Medicare):       $X  (informational — S Corp owner is economically paying both)
Employer FUTA:                       $X  (940 YTD)
State Income Tax Withheld:           $X  (state W-2 / state quarterly filing)
State Unemployment (Employer):       $X  (state quarterly filing)

For S Corp owner's tax prepayment picture:
  FIT withheld from W-2 wages:       $X  (counts as prepayment of federal income tax)
  Estimated federal payments made:    $X  (from client records)
  Prior-year overpayment applied:     $X  (from return)
  Total federal prepayment:          $X  (sum of above)
  
  State withholding:                  $X
  State estimated payments:           $X
  Total state prepayment:            $X
  
  Note: employer-side FICA/Medicare is an S Corp expense, not directly offsetting 
  owner's personal tax liability, but represents additional tax the owner is 
  economically paying (both sides of FICA/Medicare flow from the same S Corp).
```

## Partner escalation triggers

- 941 filings missing for any quarter
- Material math errors on 941 (discovered from reconciliation)
- Evidence of payroll tax liability not being deposited
- Misclassified workers (1099 vs. W-2) with material exposure
- Cross-state payroll without proper state compliance
- §162(l) or HSA coding errors for >2% shareholders that affect multiple quarters (may warrant 941-X and W-2c)

## Documentation

Reconciliation worksheet template: one row per quarter, four columns (QBO, Payroll Provider, 941, EFTPS), variance column. If variance cannot be explained, drill down.

Save the reconciliation as a workpaper in Karbon under the engagement. Partner reviews in Phase 4 quality check.
