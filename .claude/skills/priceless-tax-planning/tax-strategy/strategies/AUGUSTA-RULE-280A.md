---
strategy: Augusta Rule (§280A(g))
category: core
authority:
  - IRC §280A(g) - rental of dwelling unit < 15 days
  - Treas. Reg. §1.280A-1
  - Sinopoli v. Commissioner, T.C. Memo 2023-105 (substantiation requirements)
applies_when:
  - has_S_corp_or_other_business: true
  - owner_owns_residence: true
  - business_has_legitimate_need_for_meeting_space: true
earliest_actionable_quarter: Q1
latest_actionable_quarter: Q4 (meetings must occur and be documented contemporaneously throughout year)
typical_savings_range: $1500 - $7500
typical_savings_as_pct_of_income: 0.5% - 2%
savings_formula: |
  (Number of meetings, max 14 days/year) × (FMV daily rental rate) × marginal_tax_rate
  Typical: 12 meetings × $750-$2,000/day × ~30% effective bracket = $2,700 to $8,400 deduction value
  Income to homeowner: tax-FREE (under 15-day rental exclusion)
  Deduction to business: tax-deductible business expense
feasibility: high (when documented properly)
implementation_complexity: low to medium (depends on documentation discipline)
audit_risk: medium (post-Sinopoli IRS scrutiny on substantiation)
requires_documentation:
  - Board meeting minutes for each meeting (date, attendees, business agenda, decisions made)
  - FMV rental comparable documentation (similar venue daily rates in area, with screenshots/quotes)
  - Written rental agreement between business and homeowner
  - Cancelled check or transfer record from business to homeowner for each rental
  - Photographs or other evidence of meeting actually held
  - Calendar showing meeting was scheduled
requires_partner_signoff: false (standard methodology)
requires_separate_engagement: false
typical_separate_engagement_fee: null
compatible_stacks:
  - Home-Office-Accountable-Plan (different mechanism, can coexist)
  - S-Corp-Reasonable-Comp (Augusta payments don't affect comp analysis)
incompatible_with: []
prerequisites:
  - Owner has business that would legitimately need meeting space
  - Owner owns the residence
industries_best_fit:
  - all (any S Corp or business owner can use, with proper facts)
industries_not_applicable:
  - Owners who rent their residence (not eligible — must own dwelling)
  - Businesses with no legitimate need for offsite meetings
state_specific_considerations: false (federal rule)
path_b_compensation_tier: 0
---

# Augusta Rule (§280A(g))

The §280A(g) "Augusta Rule" allows a homeowner to rent their residence for fewer than 15 days per year and exclude the rental income from gross income entirely. When the renter is the homeowner's own business, this becomes a deduction-without-recognition strategy.

## The basic mechanic

1. Business pays homeowner FMV rent for use of residence as meeting space
2. Business deducts the rent as ordinary business expense
3. Homeowner reports the rent as rental income — but excludes it under §280A(g) if total annual rentals are under 15 days
4. Net effect: business deduction with no offsetting personal income

Maximum benefit: 14 days × FMV daily rate × marginal rate.

## When this works (the fact pattern requirements)

Per Sinopoli and prior case law, the strategy requires real facts:

- **Real meetings actually held** — not a paper exercise. Board meetings, strategy sessions, partner offsites, customer entertainment events, training sessions.
- **Business purpose clearly documented** — minutes showing what was discussed and decided, who attended.
- **FMV rental rate** — what would a comparable venue charge for the same date, same duration, same setup? Document with screenshots, quotes, or similar evidence.
- **Arms-length rental terms** — written agreement between business and homeowner, with the rent actually paid (cancelled check or transfer trail).
- **Residence used for business purpose during the rental period** — not when homeowner is using it personally for the same period.
- **Under 15 days total** — including any other rental days for any purpose during the year.

## When this fails

- **Paper meetings** — no actual gathering occurred; just a memo claiming a meeting
- **No documentation of FMV** — IRS reduces deduction to what they think is reasonable, often dramatically lower
- **Excessive daily rate** — claiming $5,000/day when comparable venues are $500
- **No written agreement** — IRS challenges arm's-length nature
- **Same business reasonable comp issues** — IRS may treat Augusta payments as disguised wages or distributions
- **Homeowner uses residence personally on rental days** — fails the exclusive business use test

## The post-Sinopoli landscape

*Sinopoli v. Commissioner* (T.C. Memo 2023-105) tightened the substantiation expectations. Three brothers operating an S Corp claimed Augusta deductions for meetings; Tax Court allowed the deductions but at substantially reduced FMV, and noted the IRS's increased focus on documentation.

Lessons from Sinopoli:
- Documentation must be contemporaneous (created at time of meeting, not reconstructed)
- FMV must be defensible with real comparable data
- Meeting business purpose must be substantive (not pretextual)
- Tax Court allowed the deduction but reduced; IRS could have pursued accuracy penalty

## Implementation steps

1. Identify legitimate business meetings the client genuinely holds (or could legitimately hold)
2. Establish FMV rental rate with comparable data — typical hotel meeting space, conference room rental, executive retreat venue
3. Draft written rental agreement between business and homeowner (or homeowner and spouse, depending on title)
4. Calendar the meetings throughout the year
5. For each meeting:
   - Hold the meeting
   - Document agenda and minutes contemporaneously
   - Take a photo or two
   - Process payment from business to homeowner (separate transaction, properly recorded)
6. Year-end: verify total days < 15
7. Tax filing: business deducts as rent expense; homeowner does NOT report the income (excluded under §280A(g))

## Typical execution cadence

- 12 meetings/year is the conventional cadence (monthly)
- $1,000-$2,500/day FMV is typical depending on location and home size
- Total deduction $12K-$30K/year for a typical client; tax savings $3K-$10K depending on bracket

## Common errors we inherit

- **No documentation** — taken as a deduction with nothing to back it up
- **Excessive rates** — $5K-$10K/day claimed without comparable support
- **Overlapping with home office** — confusion between Augusta (business rents from owner) and home office (owner's personal use deducted)
- **Reported on Schedule E** — incorrectly reporting the income then deducting it; the §280A(g) exclusion means it should not appear on the return at all
- **Meetings clearly not real** — 12 "meetings" all on the same day, or "meetings" with one attendee

## Stacking with home office

These two strategies work different mechanisms and can coexist:
- **Home office**: owner uses portion of home regularly and exclusively for business; deducts portion of expenses
- **Augusta**: business rents whole home (or substantial portion) for specific business meeting days; pays homeowner

A client can have both: home office deduction for regular business use of one room, plus Augusta deductions for occasional whole-home rentals for board meetings.

## Implementation playbook (handoff to documentation skill)

The documentation skill generates:
- Annual rental agreement template
- Board meeting minutes template (12 monthly meetings pre-formatted)
- FMV comparable data worksheet (instructs client how to document)
- Payment tracking schedule
- Year-end summary worksheet
- Instructions to client on holding meetings and contemporaneous documentation

## Post-OBBBA and current law impact

OBBBA 2025 did not amend §280A or the 15-day rental exclusion. Strategy continues unchanged.

### Indirect OBBBA impacts

**§199A interaction**: Augusta rental payment is an ordinary business expense (§162(a)), reducing pass-through income. For QBI purposes, reduces the K-1 ordinary income base that flows to owner's QBI calculation. Small but present effect.

**QBI phase-in management**: The Augusta deduction is one of many small AGI reducers. At $12K-$30K/year, contributes to staying below §199A thresholds when combined with retirement plan contributions and other strategies.

**SALT cap at $40,400**: Augusta rental income at owner level is excluded under §280A(g) — doesn't reach AGI. No SALT interaction.

### Post-Sinopoli enforcement landscape (continues to apply)

The IRS's post-Sinopoli scrutiny remains the primary risk factor. Expect continued focus on:
- Documentation substance
- FMV rental rate defensibility
- Business purpose genuineness
- Arm's-length transaction terms

No OBBBA provision changes these enforcement priorities.

## Interaction with other strategies (expanded)

### Stacks with Home-Office-Accountable-Plan

These work different mechanisms and coexist:
- **Home office**: owner uses portion of home regularly and exclusively for business; deducts portion of expenses (§280A(c)(1))
- **Augusta**: business rents whole home (or substantial portion) for specific business meeting days; pays homeowner (§280A(g))

A client can have both:
- Home office: one room (say, 15% of home), daily business use → 15% of utilities, depreciation, etc.
- Augusta: 12 monthly board meetings in whole home → FMV rent × 12 days

The mechanical distinction is "exclusive use for home office deduction" vs. "rental of entire home for specific periods." Both can apply.

### Stacks with S-Corp-Reasonable-Comp

Augusta payments are NOT compensation and do not affect reasonable comp analysis. The S Corp pays rent to owner (not wages). Owner excludes rent under §280A(g) (not includes as wages).

One subtle interaction: if Augusta payments are structured as "disguised wages" (recurring monthly, same amount, round numbers, no real business substance), IRS may challenge re-characterization. Solution: vary dates, tie to actual meetings, maintain contemporaneous minutes.

### Stacks with Hiring-Children-Legitimately

Independent. Augusta is owner-level; child wages are separate W-2 or 1099 payments to children. Both can appear in same S Corp's tax picture.

### Stacks with Health-Insurance-S-Corp-162L

Independent. Health insurance premium through W-2; Augusta rent to owner. Both deductible by S Corp; different owner treatment.

### Stacks with Solo-401k-SEP-Comparison

Indirect — Augusta reduces S Corp net income, which reduces K-1 to owner, which reduces net SE income (if applicable). Small effect on Solo 401(k) capacity (if based on pass-through SE rather than W-2).

For S Corp owners with reasonable comp W-2 set independently, Augusta doesn't affect retirement capacity (which is based on W-2, not pass-through).

### Stacks with QBI-Optimization

Augusta rental expense reduces S Corp net income → reduces QBI base (lower business income means lower QBI to deduct). Small effect.

Offsetting: Augusta exclusion at owner level doesn't add to AGI. Net effect on QBI phase-in management is roughly neutral — AGI-side no change; QBI-base slightly lower.

Most beneficial for non-QBI-sensitive clients or below-threshold clients where QBI calculation isn't W-2-limited.

## Audit posture

### Risk profile: medium post-Sinopoli; low when documentation pristine

- **LOW** when documentation is complete (real meetings, contemporaneous minutes, FMV with comparables, written rental agreement, payment trail, photos)
- **MEDIUM** when documentation is partial (some minutes missing, FMV not well-supported)
- **HIGH** when documentation is thin (claimed deduction without contemporaneous records)
- **HIGH** when daily rate is excessive relative to local comparables
- **CRITICAL** when IRS discovers "paper meetings" with no actual gathering

### Audit trigger scenarios

- Large "rent" expense on S Corp return from officer
- Round-number monthly payments (e.g., $2,000 × 12) suggesting disguised compensation
- Augusta deductions on corporate returns where officer comp is minimal or zero (reclassification concern)
- No 1099 filed by S Corp for payments to officer (paper trail compliance)
- Schedule E rental income reported by owner (technical error — should not appear at all under exclusion)

### Defense considerations

- **Contemporaneous minutes**: date, attendees, agenda, decisions, duration
- **FMV comparable data**: screenshots or quotes from 3+ comparable venues at the time of each meeting
- **Written rental agreement**: signed before first rental, specifying terms
- **Payment trail**: S Corp check or ACH transfer to owner's personal account; not cash
- **Calendar**: meetings scheduled in advance
- **Photographs**: visual evidence of meeting in progress
- **Attendee records**: who was there, what role
- **Proper 1099-MISC**: S Corp files 1099 for rent paid (not 1099-NEC)

### Sinopoli defensive playbook

Post-Sinopoli (T.C. Memo 2023-105), taxpayers should expect:
- IRS to probe FMV assumption
- IRS to reduce deduction to what they consider "reasonable" if FMV not well-supported
- Tax Court will allow deduction (usually) but at reduced amount
- Accuracy penalty unlikely if documentation is pristine; possible if documentation is weak

### Statute of limitations

- Standard 3-year §6501 limitation
- §6501(e) 6-year if understatement > 25%

## Deliverable points (documentation skill handoff)

When Augusta Rule appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Implement Augusta Rule rental for 2026. Plan 12 board meetings during the year at $1,500 FMV per day. Total: $18,000 business deduction; $0 taxable income to you under §280A(g) 15-day exclusion."
- **Why quantification**: Federal savings = $18K × marginal rate (typically $5K-$7K). State savings vary.
- **Trade-off statement**: Documentation discipline required (contemporaneous minutes, FMV support, payment trail). Daily rate must be defensible against local comparables. Limit of 14 days per year.
- **Action items**: Calendar meetings for the year; establish FMV comparable file; draft rental agreement; set up payment schedule; maintain minutes
- **Deadline**: Meetings held throughout the year; documentation contemporaneous with each; year-end summary

### In the Excel model

- **Tax Projection tab**: Augusta rent as S Corp expense (reduces net income); no line item at owner level (excluded)
- **Strategies tab**: row for "Augusta Rule (§280A(g))" with federal + state savings
- **Actions tab**: Meeting calendar; documentation maintenance; payment schedule
- **Notes tab**: FMV methodology (comparables identified); meeting cadence; minutes maintenance protocol

### In partner-review [REVIEW] callouts

- `[REVIEW: quantification — FMV rate of $[X]/day; comparables in file?]`
- `[REVIEW: framing — client has history of informal "meetings at home"; tighten to formal board meetings with real agenda?]`
- `[REVIEW: authority — post-Sinopoli documentation rigor; client briefed on requirements?]`

### Template language

> **Implement the Augusta Rule for 2026**: Hold 12 monthly board meetings at your home during the year. Your S Corp pays you fair market rent of $1,500/day (12 days × $1,500 = $18,000 total). The rental income is excluded from your personal income under §280A(g) — tax-free to you. The S Corp deducts the rent as a business expense.
>
> Federal tax savings: approximately $6,660 (37% bracket × $18,000). State: $0 (Florida).
>
> Implementation discipline is non-negotiable. You'll maintain contemporaneous minutes of each meeting (agenda, attendees, decisions), keep comparable venue data on file showing the $1,500 rate is market, and process payment from the S Corp to your personal account for each meeting separately. We provide the templates.

## Update status

| Verification | Date | Source |
|---|---|---|
| §280A(g) 15-day rental exclusion | Unchanged 2026-04 | Statutory |
| Sinopoli v. Commissioner standard (documentation) | Applicable 2026-04 | T.C. Memo 2023-105 |
| OBBBA non-amendment of §280A | Verified 2026-04 | P.L. 119-21 full text review |
| Post-Sinopoli IRS enforcement posture | Continuing 2026-04 | IRS audit trends |
| 1099 reporting requirements for rent | Unchanged 2026-04 | §6041 |

**Last full review**: 2026-04 (Sprint 5.5 rebuild — added Post-OBBBA, expanded Interaction, Audit Posture, Deliverable Points)

**Next review trigger**: New case law interpreting Sinopoli standard; IRS audit trend shifts; any §280A amendments (unlikely but monitor)
