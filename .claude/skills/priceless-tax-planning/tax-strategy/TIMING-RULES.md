# Timing Rules

This file extracts and operationalizes the "Strategies by earliest actionable quarter" table from `shared/QUARTERLY-CADENCE.md`. The strategy selection matrix uses this to filter recommendations.

## How the timing filter works

When the skill produces a quarterly memo, it filters the strategy library:

- A strategy is **included** if `current_quarter <= strategy.latest_actionable_quarter` AND `current_quarter >= strategy.earliest_actionable_quarter`
- A strategy is **dropped from current memo but noted for next year** if its window has closed
- A strategy is **flagged urgent** if current quarter is at or past its latest actionable quarter

Each strategy file has these metadata fields:
```yaml
earliest_actionable_quarter: Q1 | Q2 | Q3 | Q4 | Any | Event-Driven
latest_actionable_quarter: Q1 | Q2 | Q3 | Q4 | Any | Event-Driven
```

`Event-Driven` means the strategy's deadline is tied to a specific event (e.g., §1031 exchange has 45/180 day rules from the property sale date, not from a quarter), and the matrix uses event-specific date arithmetic instead of quarter filtering.

## Strategy timing reference table

This is the canonical reference. Updates go in this file; individual strategy files inherit.

### Earliest by Q1, latest by Q1 (Q1-only strategies)

These must be acted on in Q1 to apply to the current year:

- **S Corp election (Form 2553) for current calendar year** — deadline March 15
- **Section 444 fiscal year election** — varies by entity

### Earliest by Q1, latest by Q4 (year-long strategies)

Most strategies fit here. Earlier action is better; later still works but with diminishing benefit:

- **Reasonable Comp Adjustment** — earliest is Q1 (set the rate for the year), latest is Q4 (adjust via final payroll). Q4 adjustment is harder because gross-up math gets tight.
- **Accountable Plan Formalization** — Q1 is best (covers full year), Q4 still works but loses retroactive coverage
- **Augusta Rule §280A** — meetings can be held throughout year; documentation must be contemporaneous
- **Home Office Deduction** — claim covers actual months of use; Q1 setup is cleanest
- **Hiring Children** — earlier in year = more wages = larger deduction; payroll setup takes 2-4 weeks
- **Spousal Employment** — same as above
- **HSA Funding** — contributions accepted through April 15 of following year
- **Solo 401(k) Employee Deferrals** — must be elected and funded by Dec 31
- **Solo 401(k) Employer Contributions** — funded through tax filing deadline (extended)
- **SEP IRA Contributions** — funded through tax filing deadline (extended)
- **Defined Benefit / Cash Balance Funding** — plan must exist by Dec 31; funding through tax filing deadline
- **Charitable Bunching via DAF** — fund by Dec 31 of contribution year
- **Roth Conversion** — by Dec 31
- **Loss Harvesting** — by Dec 31
- **Bonus Depreciation** — asset must be placed in service by Dec 31

### Earliest by Q1, latest by Q3 (early-window strategies)

These need lead time for execution and lose viability if started in Q4:

- **New Retirement Plan Establishment (DB, Cash Balance)** — actuary engagement, plan document drafting, recordkeeper setup typically 60-90 days
- **Entity Restructure** — new entity formation, transfer of assets, election filings need lead time
- **PR Act 60 Bona Fide Residency Establishment** — closing-month specific tests, requires planning
- **PTET Election (current year, in many states)** — election deadlines vary, often Q1-Q2
- **Cost Segregation Study** — engineering study takes 4-12 weeks

### Earliest by Q3, latest by Q4 (late-window strategies)

These rely on year-to-date data sufficient for accurate planning:

- **Year-End Reasonable Comp True-Up** — needs YTD data through at least Q3
- **Final Bonus Depreciation Decision (placed in service)** — Q4 is when most equipment buying happens
- **Year-End QBI Optimization** — final adjustments based on near-final income
- **Retirement Plan Final Funding** — typically executed in Q4
- **Final Charitable Giving** — DAF top-ups, appreciated asset donations
- **Withholding Adjustment via Final Payroll** — alternative to Q4 estimated payment

### Earliest by Q4, latest by Q4 (year-end-only)

- **Withholding via Final Payroll** — only available on the final payroll run
- **Year-End Loss Harvesting** — must complete by Dec 31
- **Year-End Roth Conversion** — must complete by Dec 31

### Event-Driven (any quarter, deadline depends on triggering event)

- **§1031 Exchange** — 45-day identification + 180-day completion from sale of relinquished property
- **§1033 Involuntary Conversion** — 2 years (3 for some) from gain realized
- **QSBS §1202 Sale** — based on holding period (5 years), then sale timing
- **Qualified Opportunity Fund Investment** — 180 days from gain realization
- **§453 Installment Sale** — election made on return, but transaction structure must be in place at sale
- **Estimated Payment Underpayment** — Form 2210 strategies are filing-time, but cash flow affects QY decisions
- **Roth Recharacterization (deceased rules)** — varies by deadlines
- **Inherited IRA RMD** — 10-year rule strategies based on date of original owner death

## Quarter-specific deadlines reference

Hard deadlines the skill enforces in any quarter:

### Q1 deadlines (Jan-March)
- Jan 15: prior-year Q4 estimated payment due
- Jan 31: W-2s and 1099s issued
- March 15: S Corp election (Form 2553) for current year; calendar-year 1120S, 1065 due (or extension)
- April 15: 1040 due, Q1 estimated payment due, prior-year IRA/HSA contributions due

### Q2 deadlines (April-May)
- April 15: see above
- June 15: Q2 estimated payment due

### Q3 deadlines (June-Aug)
- September 15: Q3 estimated payment due, extended 1120S/1065 due

### Q4 deadlines (Sep-Dec)
- October 15: extended 1040 due
- December 31: most year-end strategies must be complete
- January 15 next year: Q4 estimated payment due

### State-specific deadlines

PTET election deadlines vary materially by state. The PTET-ELECTION-BY-STATE.md strategy file maintains the per-state table.

## How the matrix uses this file

When ranking strategies for a Q3 memo:

1. For each strategy, read `earliest_actionable_quarter` and `latest_actionable_quarter`
2. Drop strategies where `latest_actionable_quarter < Q3` — note in "Strategies for next year" appendix
3. Flag urgent any strategy where `latest_actionable_quarter == Q3`
4. Include normally any strategy where `Q3 < latest_actionable_quarter`
5. For event-driven strategies, evaluate the specific event date arithmetic instead

## Updates

This file is updated whenever:
- A new strategy is added to the library (add timing entry)
- Tax law changes a deadline (e.g., new statutory deadline for a credit)
- IRS issues guidance changing a planning window
- State legislative changes alter PTET or other state-specific deadlines

Updates are logged in the README changelog.
