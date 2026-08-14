# Safe Harbor Methodology

> **Note:** This file previously shipped with the wrong contents (a duplicate of the North Carolina state file). Reconstructed 2026-08-13 to match the workflow referenced in `SKILL.md` Step 5. This is the §6654 estimated-tax-penalty safe harbor reference used across every quarterly engagement — get this right, since it drives the Q-by-Q payment recommendation in every memo.

## Purpose

Clients don't get penalized for owing tax at filing — they get penalized for underpaying *during the year* relative to a safe harbor target. This file specifies how to compute that target and turn it into a quarter-by-quarter payment plan.

## Federal safe harbor — §6654

A taxpayer avoids the estimated tax penalty if total withholding + estimated payments equal or exceed the **lesser of**:

1. **90% of the current-year tax liability**, or
2. **100% of the prior-year tax liability** (if prior-year AGI ≤ $150,000, or ≤ $75,000 MFS), or **110% of prior-year tax** (if prior-year AGI > $150,000 / $75,000 MFS)

Whichever of these two is *lower* is the actual safe harbor — always compute both and use the smaller number. For a growing business (the common Priceless client profile), the prior-year test is usually the binding, lower number; for a client with a declining or volatile year, the current-year 90% test can be lower.

**No penalty exception**: total tax due after withholding/estimates is under $1,000, or the taxpayer had no tax liability in the prior year and was a US citizen/resident for the full 12 months.

## The withholding even-pay rule (§6654(g)) — critical mechanic

**W-2 withholding is deemed paid evenly across all four quarters, regardless of when it was actually withheld.** This is the single most useful lever in quarterly planning:

- A client who under-withheld in Q1/Q2 can fix the *entire year's* safe-harbor position with a large withholding catch-up in Q3 or Q4 — something a late **estimated payment** cannot do (estimates are only credited to the quarter in which they're actually paid, per the installment schedule below).
- This is exactly the mechanism behind the "reclassify prior draws as wages, catch-up payroll" technique documented in the main `SKILL.md` Learnings section — a single large payroll run late in the year, with real withholding, can retroactively cure an entire year's underpayment exposure that quarterly estimates paid on the same date could not.
- **Wage-capacity ceiling**: withholding can never exceed the wage itself (net of FICA). K-1 income, distributions, and any income without a paycheck attached must be covered by estimates unless officer comp is raised. This is the trade-off to surface explicitly: pushing all the safe-harbor burden onto withholding (by raising W-2 wages) costs extra payroll tax and can throttle the QBI deduction (see the reasonable-comp/QBI crossover math in `SKILL.md`); leaving a real estimate-payment gap avoids that cost but requires the client to actually make the estimated payments on time.

## Quarterly estimated payment due dates (individual, calendar year)

| Installment | Due date | % of annual safe-harbor target (even method) |
|---|---|---|
| Q1 | April 15 | 25% |
| Q2 | June 15 | 25% (cumulative 50%) |
| Q3 | September 15 | 25% (cumulative 75%) |
| Q4 | January 15 (following year) | 25% (cumulative 100%) |

Note the odd spacing — Q2 and Q3 "quarters" are only 2 months apart (Apr 15 → Jun 15 → Sep 15), then a 4-month gap to Q4 (Sep 15 → Jan 15). Build the payment calendar around actual due dates, not calendar quarters.

## Annualized income installment method

For clients with materially uneven income through the year (most e-commerce, seasonal, and one-time-event clients), the even-25%-per-quarter method overstates early-quarter liability and can trigger an unnecessary Q1/Q2 "penalty" that the annualized method would have avoided. Form 2210 Schedule AI computes the safe-harbor requirement based on income actually earned through each period (cumulative 3/5/8/11-month lookback windows), not a flat 25%.

**When to use**: any client with a back-loaded income year (e.g., I Spy Productions's Q4 e-commerce seasonality is a plausible candidate), a one-time transaction landing in a single quarter, or a client who caught up officer comp late in the year (as with the mid-year 2026 payroll catch-up documented in this engagement) — the annualized method can show that no penalty applies for the early quarters even though the flat-25% method would suggest a shortfall.

**Caution**: annualization requires more detailed within-year data and is itself subject to strict computation rules on Form 2210 Schedule AI — don't just assert it helps without running the actual schedule.

## State safe harbor — varies by state, check the specific state file first

State rules are NOT uniform. Per the main `SKILL.md` Learnings section, confirmed patterns:

| State | Safe harbor rule |
|---|---|
| Federal | Lesser of 90% current-year or 100%/110% prior-year (AGI-dependent) |
| Pennsylvania | Lesser of 100% prior-year or 90% current-year — **no 110% bump regardless of income** |
| Massachusetts | Lesser of 100% prior-year or **80%** current-year (not 90%) |
| Most other states | Broadly follow the federal 90%-current/100%-prior pattern, but confirm exact percentages and AGI thresholds in the relevant `../states/{STATE}.md` file before relying on this as a default |

**Never assume a state mirrors the federal 110% rule** — always check the specific state file. If no state file exists yet for the client's state, flag as an open item rather than defaulting to the federal pattern.

**No-income-tax states** (FL, TX, TN, NV, WA on wages, SD, WY, AK, NH): no state safe harbor computation needed for ordinary income. Confirm no state-specific tax that *does* apply (WA capital gains tax, TX franchise tax at the entity level, NH interest/dividends tax) doesn't have its own separate estimated-payment regime.

## Building the quarterly plan for the memo

1. Compute both federal tests (90% current / 100-110% prior), take the lower — this is the federal target.
2. Compute the state target(s) per the applicable state file(s).
3. Determine prepayment already in place: YTD withholding (federal + state, from Phase 1's payroll reconciliation) + YTD estimated payments made + prior-year overpayment applied forward.
4. Subtract prepayment from target = remaining amount needed.
5. Allocate the remaining amount across remaining installment dates. If withholding capacity exists (an active payroll run before year-end), evaluate whether directing the remaining need through withholding (even-pay rule) is more effective than a lump Q4 estimate — especially useful when a client missed Q1-Q3 estimates entirely and wants to avoid a stacked penalty for those quarters.
6. Flag Q4-urgency explicitly when the client is materially behind heading into the final stretch of the year — this drives whether Phase 3 needs to prioritize immediate-execution strategies over ones that could wait to next year.

## What this file does NOT do

- Does not calculate the actual dollar penalty for a known underpayment (that's a Form 2210 computation, done at return-prep time, not planning time)
- Does not override the entity-level estimated payment rules for C corps (different regime, §6655)
- Does not substitute for confirming the specific state's rule in its own state file

## Update status

| Item | Status |
|---|---|
| Federal §6654 90%/100%/110% mechanics | Confirmed, statutory |
| Withholding even-pay rule (§6654(g)) | Confirmed, statutory; cross-referenced to firm Learnings in main SKILL.md |
| Quarterly due dates | Confirmed, standard IRS calendar |
| PA, MA safe-harbor specifics | Confirmed via firm Learnings (live engagement experience) |
| Other state safe-harbor rules | Defer to individual state files — do not assume federal pattern |

**Reconstructed**: 2026-08-13.
