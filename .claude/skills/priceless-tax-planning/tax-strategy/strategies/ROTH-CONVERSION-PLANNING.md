---
strategy: Roth Conversion Planning
category: secondary
authority:
  - IRC §408A - Roth IRA rules
  - IRC §408A(d)(6) - conversion rules
  - SECURE 2.0 Act - Roth match/catchup changes
  - OBBBA 2025 - permanent tax bracket preservation (no sunset to pre-TCJA rates)
applies_when:
  - has_traditional_IRA_or_401k_balance: true
  - current_year_low_bracket_relative_to_future: true (e.g., business loss year, gap year between high earning and retirement)
  - or anticipates_higher_future_bracket: true
  - or multi-decade holding horizon: true
earliest_actionable_quarter: Q1 (planning multi-year program)
latest_actionable_quarter: Q4 (must complete conversion by Dec 31 of conversion year; no deadline extensions)
typical_savings_range: $10000 - $500000+ (lifetime present value; varies enormously with circumstances)
typical_savings_as_pct_of_income: NPV depends on conversion amount and bracket differential
savings_formula: |
  Current year tax cost = conversion amount × current marginal rate
  Future value of tax-free Roth: principal × (1 + growth rate)^years × (1 - future marginal rate avoided)
  NPV of Roth = future value of tax-free vs. pre-tax IRA distribution at future rate
  
  Key variables:
    - Current vs. future marginal rate (Roth wins if future > current)
    - Time horizon (longer favors conversion)
    - Pay conversion tax from non-IRA funds (critical for optimization)
    - Legacy/estate considerations (Roth avoids RMDs, passes to heirs tax-free)
feasibility: high (mechanical)
implementation_complexity: medium (multi-year planning benefit)
audit_risk: very low
requires_documentation:
  - Form 8606 (basis tracking)
  - Form 1099-R (from custodian, next year)
  - Conversion paperwork (custodian to custodian or in-house)
requires_partner_signoff: false for modest conversions; true for multi-year strategic plans
requires_separate_engagement: no
typical_separate_engagement_fee: null
compatible_stacks:
  - Backdoor-Roth-IRA (no overlap but complementary)
  - Mega-Backdoor-Roth (no overlap)
  - Charitable-Bunching-DAF (conversion year + charitable offset can work)
  - Defined-Benefit-Overlay (DB reduces current year TI, may enable conversion at low bracket)
incompatible_with:
  - No pre-tax IRA balance (nothing to convert)
  - Very short time horizon (need growth to overcome upfront tax)
prerequisites:
  - Traditional IRA, 401(k), or similar pre-tax retirement balance
  - Cash outside retirement to pay conversion tax (ideally)
  - Clear multi-year tax picture
industries_best_fit:
  - Any client with significant pre-tax retirement balance
  - Business owners in transition years
  - Retirees in gap years between work income and SS/RMDs
  - High-net-worth clients planning legacy
state_specific_considerations: |
  State income tax on conversion (most states tax retirement conversions like income)
  Residency planning critical: FL/TX/NV/WA clients (no state income tax on conversion)
  Nonresident income sourcing rules can matter if moving
path_b_compensation_tier: 0
---

# Roth Conversion Planning

Converting traditional IRA or 401(k) assets to Roth IRA. Pay tax today on conversion amount; assets grow tax-free forever; no RMDs; passes to heirs tax-free.

## The basic mechanic

1. Identify pre-tax retirement balance (Traditional IRA, Traditional 401(k) from former employer, etc.)
2. Transfer portion (or all) to Roth IRA
3. Conversion amount added to current-year taxable income (no early withdrawal penalty for conversion, but 5-year clock applies to withdrawal of converted amount)
4. Tax paid on conversion
5. Roth grows tax-free; qualified distributions tax-free; no RMDs on Roth IRA during owner's lifetime

## Post-OBBBA context

**Permanent brackets**: OBBBA made current bracket structure permanent (no 2026 sunset to higher pre-TCJA rates). Eliminates one traditional argument for urgency in conversions before 2026 reversion.

**Still compelling when**:
- Current bracket < expected future bracket (tax arbitrage)
- Current bracket low relative to historical pattern (gap year, business loss year, pre-RMD window)
- Anticipating future high-income years that would push into higher brackets
- Estate tax planning (Roth reduces estate inclusion of tax-basis; more efficient transfer)
- Asset protection (Roth beneficiary structures)

## When conversions make sense

### Low-income current year

- Business loss year
- Between jobs / early retirement (before SS claiming and RMDs)
- Low-earning spouse in MFJ couple transitioning

**Classic window**: Age 62-72 gap between retirement and RMDs. Low income during this period. Fill the 12% or 22% bracket with conversion amounts. Later RMDs at 73+ would otherwise force higher bracket distributions.

### Anticipate higher future bracket

- Career trajectory suggests much higher future income
- RMDs will push into higher bracket
- Desire to leave tax-free inheritance (beneficiaries may be in high bracket)

### Estate planning

Traditional IRA is "pre-tax" — estate valued on pre-tax basis for estate tax (federal $15M exemption permanent post-OBBBA), plus heirs owe income tax on inherited IRA distributions.

Roth IRA passes to heirs income-tax-free. Effectively reduces "real" estate value by the embedded income tax.

Secure Act (2019): non-spouse beneficiaries generally must distribute inherited IRA within 10 years. Roth same 10-year rule, but all distributions tax-free.

### Legacy value

Older client with no intent to use IRA during lifetime — convert to Roth, grow tax-free, heirs get tax-free.

## When conversions DON'T make sense

### Current bracket > future bracket

If expected to drop to lower bracket in retirement (common for many earners), traditional deferral wins. Pay low-bracket tax on distributions later.

### No external cash to pay conversion tax

Paying conversion tax from IRA itself (via distribution of conversion amount + additional withdrawal for taxes) dramatically reduces benefit. Best case: pay conversion tax from outside IRA funds.

### Short horizon

Conversion economics require growth to overcome the tax drag. Less than 5-10 year horizon often doesn't justify.

### Premium healthcare subsidies (ACA)

Pre-65 client on ACA exchange: conversion income could push MAGI above subsidy cliff. Significant unintended cost.

### Medicare IRMAA (age 63+)

Age 63+ clients: conversion income increases MAGI for IRMAA lookback. Higher Medicare premiums 2 years later.

## Mechanics

### Types of conversions

1. **In-plan conversion**: 401(k) → Roth 401(k) (if plan allows). Stays in plan.
2. **In-service rollover + conversion**: 401(k) → traditional IRA → Roth IRA (in certain circumstances)
3. **Full IRA conversion**: traditional IRA → Roth IRA (same custodian or custodian-to-custodian)
4. **Partial conversion**: convert subset of IRA each year over multi-year plan

### Five-year rules (two of them)

**Rule 1**: Each converted amount has separate 5-year clock before penalty-free withdrawal (only matters if under 59½).

**Rule 2**: Roth account itself must be open 5 years before ALL earnings are tax-free (doesn't affect contributions or conversions, but matters for earnings).

For clients 59½+: penalty not an issue. 5-year rule still can matter for earnings in newly-opened account.

### Pro-rata rule

If client has non-deductible basis in traditional IRA (from prior nondeductible contributions), conversion is pro-rata taxable/nontaxable. Form 8606 tracks basis.

For Backdoor Roth IRA purposes (see separate file): pro-rata trap. SEP-IRA balance + Traditional IRA balance both count in pro-rata calculation.

### Recharacterization (NOT available)

TCJA eliminated recharacterization of Roth conversions. Once converted, cannot "undo." Plan carefully.

### Timing

Conversion must complete by December 31 of conversion year. No extensions. Early-year or mid-year conversions allow tax payment planning through estimated quarterly payments.

**Strategy**: Convert early in year, observe income trajectory, decide on additional conversions by Q4, pay tax via Q4 estimated or withholding.

## Multi-year Roth conversion programs

For clients with large pre-tax balance and moderate-term horizon:

**Strategy**: Fill specific brackets each year with conversions.

Example: Retired couple, age 62-72 window, IRA balance $1.5M, current ordinary income $80K (SS deferred):

- Year 1: Convert $100K — fills 22% bracket (2025 MFJ up to $206,700)
- Year 2: Same
- Year 3: Same
- ...
- Year 10: Convert until RMD age

Over 10 years: $1M converted at 22% blended rate. If future RMDs would have been at 24-32%, saves substantially.

Plus: reduces balance subject to RMDs post-73, reducing Medicare IRMAA exposure.

## Charitable offset in conversion year

Convert $200K + bunch $100K charitable (to DAF): 
- Conversion adds $200K to income
- Charitable deduction offsets $100K (if itemizable and above 0.5% AGI floor post-2026)
- Net taxable from conversion: $100K

Creative for clients with charitable intent who want to time conversion + charitable giving.

## State planning

Federal conversion tax is the main cost. State tax adds.

**Planning**: If moving state (or already in no-income-tax state), convert in no-state-tax year.

- FL, TX, NV, WA, SD, WY, AK, NH, TN: no state income tax
- Clients planning retirement relocation: convert AFTER moving to low-tax state

**Nonresident issue**: Some states (CA, NY) assert tax on conversions for former residents. §114 generally protects retirement income sourcing to current residence, but states sometimes push back. Partner review.

## Documentation

- Form 8606: basis tracking for conversion
- Form 1099-R: custodian reports next year
- Tax return reflects conversion income
- Financial plan showing conversion strategy

## Common errors

- Converting when future bracket expected lower (wrong direction)
- Paying conversion tax from IRA itself (destroys benefit)
- Missing pro-rata rule with SEP balance
- No Form 8606 tracking (basis lost or miscounted)
- ACA subsidy cliff ignored (pre-65 clients)
- IRMAA lookback ignored (age 63+)
- Attempting recharacterization (not allowed post-TCJA)

## Cross-references

- `strategies/BACKDOOR-ROTH-IRA.md` — separate contribution mechanic
- `strategies/MEGA-BACKDOOR-ROTH.md` — plan after-tax pathway
- `strategies/CHARITABLE-BUNCHING-DAF.md` — offset in conversion year
- `FEDERAL-TAX-COMPUTATION.md` — bracket planning

## Update status

File created 2026-04. Post-OBBBA permanent bracket structure eliminates urgency from 2026 sunset scenarios. Core conversion economics unchanged.
