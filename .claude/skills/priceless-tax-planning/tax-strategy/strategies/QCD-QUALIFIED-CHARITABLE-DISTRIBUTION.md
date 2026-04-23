---
strategy: Qualified Charitable Distribution (QCD) from IRA
category: core
authority:
  - IRC §408(d)(8) - qualified charitable distribution
  - SECURE Act 2.0 (2022) - expanded QCD to include one-time $50K to charitable gift annuity or CRT
  - Notice 2007-7 (initial QCD guidance)
  - §408(d)(8)(D) - maximum $100,000 per year indexed (2025: $108,000; 2026: $115,000)
applies_when:
  - age >= 70_5: true (age 70½ or older)
  - has_IRA_subject_to_RMD: true (traditional IRA, inherited IRA; some specific SEP/SIMPLE in certain years)
  - has_charitable_intent: true
earliest_actionable_quarter: Any
latest_actionable_quarter: Q4 (must complete by Dec 31 of distribution year)
typical_savings_range: $2000 - $40000
typical_savings_as_pct_of_income: varies; especially valuable for high-income retirees
savings_formula: |
  QCD amount × marginal federal tax rate
  Plus: potential Medicare IRMAA tier savings (AGI-based)
  Plus: potential SS taxation reduction (AGI-based for low-middle income retirees)
  Plus: state tax savings (state follows federal for most)
  2025 limit: $108,000 per individual per year (MFJ: $216,000 combined if both eligible)
  2026 limit: $115,000 (indexed)
  Qualifies as RMD satisfaction (reduces or eliminates need for separate RMD)
feasibility: high
implementation_complexity: low (one-time setup with custodian)
audit_risk: low
requires_documentation:
  - IRA custodian QCD processing (direct transfer, not to account holder first)
  - Written acknowledgment from receiving charity
  - Year-end 1099-R showing distribution (Box 7 code: 7 for normal distribution, not differentiated for QCD)
  - Annotation on 1040 Line 4 ("QCD")
requires_partner_signoff: false
requires_separate_engagement: false
typical_separate_engagement_fee: null
compatible_stacks:
  - Charitable-Bunching-DAF (separate vehicle; can do both)
  - Roth-Conversion-Planning (QCD satisfies RMD requirement, opening Roth conversion capacity)
  - Inherited-IRA-Planning (QCD available for inherited IRAs of age-eligible beneficiary)
incompatible_with:
  - QCD to donor-advised fund (NOT allowed — must go to operating public charity)
  - QCD to private non-operating foundation (NOT allowed)
  - QCD below age 70½ (must be 70½ at distribution time)
prerequisites:
  - Age 70½ or older
  - Traditional IRA or inherited IRA
  - Charitable intent
  - Charity is qualified 501(c)(3) operating public charity
industries_best_fit:
  - all (any age-eligible client with IRA and charitable intent)
industries_not_applicable:
  - younger clients (age restriction)
  - clients with only Roth IRA (QCD from Roth possible but usually unhelpful since Roth distributions already tax-free)
state_specific_considerations: most states conform; some states don't recognize QCD and tax as regular distribution
path_b_compensation_tier: 0
---

# Qualified Charitable Distribution (QCD) from IRA

For clients age 70½+, QCD is one of the most tax-efficient ways to satisfy charitable intent. Transfers directly from IRA to charity, excluded from income entirely. Can satisfy Required Minimum Distributions.

## The basic mechanic

1. IRA owner age 70½+ instructs IRA custodian to transfer distribution directly to qualified charity
2. Distribution excluded from gross income (not like ordinary IRA distribution which is fully taxable)
3. Counts toward Required Minimum Distribution if RMD applicable
4. No itemized deduction needed (amount never enters income, so no deduction to claim)

Net effect: the client's charitable giving is done with pre-tax IRA dollars instead of after-tax personal dollars.

## Why this is especially valuable

### For retirees in RMD age

Required Minimum Distributions (age 73+, under current rules) force IRA owners to take taxable distributions they may not need. QCD allows the RMD to go to charity without entering income.

Example:
- Client has $2M traditional IRA at age 75
- Required Minimum Distribution: ~$75,000/year
- If taken normally: $75K added to AGI, taxed at ~24-32% = $18K-$24K tax
- If taken as QCD: $0 added to AGI, $0 tax, charity receives $75K

Net savings: $18K-$24K per year by routing through charity.

### For clients who'd itemize anyway

A client giving $20K to charity could either:
- Take IRA RMD: $20K added to AGI, itemize $20K charitable deduction
- QCD: $0 AGI change, $0 itemized deduction (but also $0 taxable income)

Both produce similar net tax result BUT QCD has additional benefits:
- No AGI increase means no cascading effects (IRMAA, SS taxation, etc.)
- Doesn't require itemizing (client below standard deduction still benefits)

### For clients who take standard deduction

This is where QCD shines most.

Client who takes standard deduction ($31,500 MFJ in 2026 projected) gets no benefit from charitable giving — standard deduction covers all deductions. QCD provides tax benefit WITHOUT requiring itemization.

Post-TCJA reality: most retirees take standard deduction. QCD restores tax benefit for their charitable giving.

## The AGI cascade effect (why this matters so much)

Many tax items scale with AGI:

- **Medicare IRMAA tiers** (Medicare Part B and D premium surcharges based on 2-year lookback AGI). Higher AGI → higher Medicare premiums. Tiers in $15K-$25K increments.
- **Social Security taxation**: Up to 85% of SS benefits taxable depending on "provisional income" (AGI + tax-exempt interest + 50% SS)
- **NIIT threshold**: $200K single / $250K MFJ — QCD keeps AGI below
- **Additional Medicare Tax**: Same thresholds
- **Net investment income tax affordability of Roth conversions**: QCD reduces RMD, may enable additional Roth conversion capacity

For a retiree near an IRMAA tier threshold, reducing AGI by $30K (QCD instead of normal RMD) can save $2K-$5K in Medicare premiums for 2 years (tier is 2-year lookback).

## The rules in detail

### Age requirement
- Must be 70½ at time of distribution (not just in the year of age 70½)
- If you turn 70½ on June 15, QCDs must be after June 15

### Maximum amount
- 2025: $108,000 per individual (indexed)
- 2026: $115,000 per individual (indexed)
- Married couple: each spouse has own limit, so $216,000+ (2025) / $230,000+ (2026) combined
- Amount above cap: treated as regular IRA distribution (fully taxable)

### Must go directly to charity
- Custodian transfers directly
- If IRA owner receives the money first then writes check to charity, it's NOT a QCD (becomes regular distribution + itemized deduction)

### Qualifying charities
- 501(c)(3) operating public charities
- NOT donor-advised funds
- NOT private non-operating foundations
- NOT supporting organizations (limited exception for certain §509(a)(3) Type I and II)

### Source IRA types
- Traditional IRA: YES
- SEP-IRA and SIMPLE IRA: YES for non-active plans (active plan QCDs subject to different treatment)
- Inherited IRA: YES if beneficiary is 70½+
- Roth IRA: Technically allowed but usually not useful (Roth distributions already tax-free)

### RMD coordination
- QCD counts toward RMD for year
- $75K RMD + $75K QCD: zero regular distribution needed
- $75K RMD + $100K QCD: RMD satisfied, extra $25K to charity
- QCD must be in the year for which RMD is being satisfied (year-end deadline matters)

### One-time $50K special provision (SECURE 2.0)
- Once-in-lifetime, can use up to $50K of QCD to fund:
  - Charitable Gift Annuity (CGA)
  - Charitable Remainder Annuity Trust (CRAT)
  - Charitable Remainder Unitrust (CRUT)
- Income stream from the CGA/CRT comes back to donor (taxable as received)
- Specialized use case; CGA is simplest implementation

## Implementation

### Step 1: Identify eligible clients

During Q1 engagement, flag clients:
- Age 70½+
- Own traditional IRA (or inherited IRA)
- Subject to RMD (current year)
- Known or likely charitable intent

### Step 2: Set up mechanism

Client contacts IRA custodian:
- Request QCD processing
- Provide charity name, address, EIN if available
- Specify amount
- Request direct transfer (check made to charity OR direct electronic transfer)

Most major custodians (Fidelity, Schwab, Vanguard, IBKR) have QCD request forms or portal options.

### Step 3: Get acknowledgment from charity

For any QCD over $250, IRS-standard acknowledgment letter required. Same as any charitable contribution. Letter should state:
- Amount received
- Date received
- No goods or services received in exchange

### Step 4: 1099-R reporting

At year-end, IRA custodian issues 1099-R showing distribution. IMPORTANT: the 1099-R does NOT distinguish QCDs from regular distributions in Box 7 (both are code 7 for normal distribution age 59½+).

Tax preparer must manually annotate on Form 1040:
- Line 4a: Total IRA distributions (includes QCD amount)
- Line 4b: Taxable amount (excludes QCD amount)
- Write "QCD" on the line

If the QCD portion isn't annotated, IRS assumes full distribution is taxable. This is where errors happen.

### Step 5: State reporting

Most states follow federal treatment. A few require separate adjustment on state return. Verify state conformity.

## Planning opportunities

### QCD + Roth conversion stacking

Client with RMDs and excess IRA balance:
- Use QCD to satisfy RMD (keeps AGI low)
- Use freed-up "bracket space" to do Roth conversion at moderate rate
- Future Roth growth tax-free

Example:
- Client age 75, $3M traditional IRA, 12% bracket with current income
- RMD $120K normally — but uses $100K QCD for satisfaction of RMD portion
- $20K still needs to be regular distribution
- Converts another $50K traditional to Roth at 12% bracket before rising to 22%
- Pays tax on $50K conversion at 12% = $6K, avoids future 22% tax

### QCD for bunching

Some retirees bunch charitable giving. QCD can be used in "off-bunch" years when standard deduction applies, preserving DAF for bunch years.

- Bunch years: large DAF contribution, itemize
- Off-bunch years: QCD from IRA, standard deduction

### Charitable Gift Annuity ($50K option)

For older retirees wanting guaranteed income stream plus charitable component:
- $50K one-time QCD to CGA
- CGA pays back fixed annuity for life (rate based on age)
- Portion of each payment is return of principal (tax-free), rest taxable
- Remainder goes to charity at donor's death

Specialized; use when appropriate but complex for non-specialists to set up.

## Common errors

- **Distribution went to owner first, then to charity** — NOT a QCD (regular distribution plus itemized deduction)
- **Client under age 70½** at distribution time
- **QCD to DAF** — not allowed
- **Tax preparer didn't annotate Line 4b** — full amount treated as taxable
- **Amount exceeded annual cap** — excess is regular distribution
- **Inactive SEP-IRA contribution year**: subtle rule about recent contributions
- **Missing charity acknowledgment letter** for amounts over $250

## Client education

Most clients don't know about QCD. Priceless partner conversation with eligible clients:

"You're required to take minimum distributions from your IRA starting at age 73, and those distributions are fully taxed. You're also giving $30K/year to your church. Currently, you're effectively paying tax on the RMD then giving away the after-tax amount.

Instead, you can have your IRA custodian send that $30K directly to your church. It counts as your RMD, you don't pay any tax on it, and your church gets the same amount. Net: about $7,500 in annual tax savings for you."

This conversation is high-value for eligible clients.

## When Priceless engages

For all age-eligible clients with charitable intent:
- Annual QCD analysis (Q1 engagement)
- Coordinate with RMD calculation
- Ensure proper 1099-R annotation on return
- Track QCD giving history per client

For Full Wealth clients considering CGA/CRT:
- Separate engagement for complex charitable planning
- Coordinate with estate attorney

## Documentation skill handoff

- QCD custodian request instructions (by custodian — Fidelity, Schwab, Vanguard, etc.)
- Charity acknowledgment template / tracker
- Year-end QCD summary for return preparation
- Form 1040 preparation checklist (Line 4a/4b annotation)
- CGA / CRT engagement referral (for complex situations)
- Client communication template (explaining QCD mechanics)

## Post-OBBBA charitable landscape (relative value increases)

OBBBA 2025 made QCDs relatively MORE valuable starting 2026 because of new limitations on itemized charitable deductions:

**The 0.5% AGI floor on itemized deductions (2026+)**: Regular charitable contributions from itemizers face a 0.5% AGI floor — the first 0.5% of AGI given is non-deductible. **QCDs bypass this entirely** because the amount never enters income; no floor applies.

**The 35% cap on itemized deduction value for top-bracket (37%) taxpayers (2026+)**: Regular charitable contributions by top-bracket donors are now capped at 35% deduction value. **QCDs avoid this entirely** — the exclusion from income works at the taxpayer's actual marginal rate (potentially 37% plus state).

**The new above-the-line charitable deduction for non-itemizers (2026+)**: DAFs and private foundations are excluded; direct cash giving to public charities is eligible. **QCDs work alongside this** — QCD still provides AGI reduction regardless of itemizer status; the non-itemizer deduction is a small additional benefit for cash gifts.

**Practical implication for Priceless clients age 70½+**: For the high-income retired client, QCD becomes the single most tax-efficient charitable giving vehicle post-2026. Partner conversation framework should emphasize the compounding benefits:
1. No AGI increase (preserves deduction thresholds, IRMAA tiers, SS taxation)
2. Satisfies RMD requirement
3. Bypasses 0.5% AGI floor
4. Bypasses 35% top-bracket cap
5. State tax benefit in conforming states

For retirees making $30K+/year in charitable gifts, QCD vs. regular charitable giving could save $5K-$15K annually in the post-OBBBA landscape.

## Update status

File updated 2026-04 with:
- 2025 QCD limit: $108,000 per individual
- 2026 QCD limit: $115,000 per individual (indexed per IRS Rev. Proc.)
- Post-OBBBA charitable landscape changes (0.5% AGI floor, 35% cap) that make QCDs relatively more valuable
- QCD as preferred charitable vehicle for age 70½+ clients in 2026 environment

## Interaction with other strategies (detailed)

### Stacks with Charitable-Bunching-DAF

For age 70½+ clients who would otherwise bunch contributions to a DAF:
- QCD: bypasses AGI floor, bypasses bracket cap, satisfies RMD
- DAF bunch: reduces taxable income; subject to 0.5% AGI floor (2026+); capped at 35% bracket (2026+)
- **QCD beats DAF bunching for age-eligible clients for direct giving to public charities**
- Hybrid: QCD for base giving ($115K capacity 2026); DAF bunch for amounts beyond QCD limit

### Stacks with RMD management

QCD satisfies RMD requirement, so seniors with large IRA balances can use QCD to (a) meet RMD obligation and (b) reduce AGI simultaneously.

Particularly valuable for retirees whose RMD pushes them into higher tax brackets or triggers IRMAA (Medicare premium surcharges) or SS taxation increases.

### Stacks with Roth-Conversion-Planning (for later years)

For clients approaching age 70½: pre-70½ Roth conversions reduce future RMDs (Roth has no RMDs). QCD strategy becomes relatively less valuable as RMD base shrinks. But conversions cost current-year tax.

Partner evaluates: convert now (pay tax at current bracket) vs. QCD later (satisfy RMD while giving; no current tax). Depends on client's charitable intent and projected future brackets.

### Not directly interacting with QBI

QCD doesn't affect QBI deduction (reduces AGI but for retirees typically pass-through income not in play).

## Audit posture

### Risk profile: low when properly executed; high when direct-deposit-to-donor violation occurs

- **LOW** when QCD goes DIRECTLY from IRA custodian to qualified charity (never through donor's hands)
- **LOW** when under $115,000 per individual (2026 limit)
- **HIGH** when distribution goes to donor first, then donor writes check — this is NOT a QCD, it's a taxable distribution + charitable deduction (different and often worse tax treatment)
- **HIGH** when charity is not §170(b)(1)(A) qualified (e.g., DAFs and private foundations are NOT eligible)

### Audit trigger scenarios

- QCD claimed but no charity acknowledgment
- Distribution to donor checking account then claimed as QCD (disqualifying)
- QCD to a DAF or private foundation (not permitted)
- QCD > $115,000 (2026) / $108,000 (2025) per individual (excess portion is taxable)
- Form 1099-R shows distribution without code indicating QCD (requires 5498 and written acknowledgment to substantiate)

### Defense considerations

- **Trustee/custodian documentation**: distribution made payable directly to charity
- **Charity acknowledgment**: written, contemporaneous, §170(f)(8) compliant (even though §170 deduction not claimed — acknowledgment still needed for QCD substantiation)
- **Form 1099-R**: typically reports gross distribution; tax return reports QCD portion as non-taxable
- **Custodian check copy or confirmation**: direct-pay to charity verifiable

### Statute of limitations

- Standard 3-year §6501 limitation
- Misclassified QCD (actually taxable distribution) — subject to assessment

## Deliverable points (documentation skill handoff)

When QCD appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Execute $[X] of your 2026 RMD as Qualified Charitable Distribution(s) direct to [charity name(s)]. Satisfies $[RMD amount] of your required minimum distribution; $[X] excluded from income entirely."
- **Why quantification**: Tax savings = $[X] × (marginal rate + IRMAA impact + SS taxation impact). For retirees, the compound benefit beyond federal rate is often substantial.
- **Trade-off statement**: Must be age 70½+. Must go directly from IRA custodian to qualified charity. Cannot be to DAF or private foundation. $115,000 limit per individual (2026).
- **Action items**: Contact IRA custodian for QCD procedure; specify charity name and address; IRA custodian mails check directly to charity
- **Deadline**: December 31, 2026 for the distribution to count for 2026 tax year

### In the Excel model

- **Tax Projection tab**: QCD as reduction of IRA distribution income (not a deduction); AGI reduced
- **Strategies tab**: row for "QCD" with federal savings, IRMAA savings, SS taxation savings, state savings
- **Actions tab**: QCD execution by Dec 31; custodian contact; charity confirmation
- **Notes tab**: age eligibility verified; custodian QCD procedure documented

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — client age 70½+ verified?]`
- `[REVIEW: scope — target charity qualified public charity, NOT DAF/private foundation?]`
- `[REVIEW: quantification — IRMAA and SS taxation impacts included? Full benefit picture?]`

### Template language

> **Execute $50,000 of your RMD as Qualified Charitable Distributions for 2026**. Your 2026 RMD from traditional IRAs is approximately $72,000. We recommend $50,000 go directly to your chosen public charities (St. Mary's, Miami Children's Museum, others) via QCD — this satisfies that portion of your RMD but excludes it from your taxable income entirely.
>
> Tax benefit: $50,000 × (35% federal bracket + IRMAA tier impact of approximately $2,400 + reduced SS taxation of approximately $800) = $19,700 effective benefit. Plus in the post-OBBBA environment where itemized charitable deductions face a 0.5% AGI floor and 35% bracket cap, QCD is a superior vehicle for charitable giving.
>
> Action: Contact your IRA custodian (Schwab) to initiate QCDs directly to each charity. Custodian mails check to charity. Receive written acknowledgment from each charity for our file.

## Update status

| Verification | Date | Source |
|---|---|---|
| 2026 QCD limit ($115,000 per individual) | Verified 2026-04 | IRS Rev. Proc. 2025-32 |
| 2025 QCD limit ($108,000) | Verified 2026-04 | IRS (historical reference) |
| SECURE 2.0 indexing of QCD limit | Continuing 2026-04 | SECURE 2.0 §307 |
| OBBBA 0.5% AGI floor (makes QCD relatively more valuable) | Verified 2026-04 | P.L. 119-21 §70112 |
| OBBBA 35% bracket cap (makes QCD relatively more valuable) | Verified 2026-04 | P.L. 119-21 §70112 |
| QCD-to-split-interest trust option (SECURE 2.0, one-time $50K) | Continuing 2026-04 | SECURE 2.0 §307 |
| QCD age threshold (70½) | Unchanged 2026-04 | §408(d)(8) |
| Qualified charity eligibility (§170(b)(1)(A)) | Unchanged 2026-04 | Statutory; DAFs and PFs excluded |

**Last full review**: 2026-04 (Sprint 5.5 rebuild — added Interaction detail, Audit Posture, Deliverable Points)

**Next review trigger**: 2027 QCD limit update; IRS guidance on split-interest trust QCD mechanics
