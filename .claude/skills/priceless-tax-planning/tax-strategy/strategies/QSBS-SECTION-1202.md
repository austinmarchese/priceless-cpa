---
strategy: Qualified Small Business Stock (§1202)
category: core
authority:
  - IRC §1202 - partial/full exclusion of gain on QSBS
  - IRC §1045 - rollover of QSBS gain into replacement QSBS
  - IRC §1244 - small business stock ordinary loss (separate, related provision)
  - One Big Beautiful Bill Act (OBBBA), P.L. 119-21, enacted July 4, 2025 — major expansion of §1202
  - §1202(a)(5) (post-OBBBA) — tiered holding period exclusion percentages
  - Treas. Reg. proposed §1.1202
applies_when:
  - has_qualified_C_corp_stock_meeting_requirements: true
  - holding_period >= 3_years (post-OBBBA) OR >= 5_years (pre-OBBBA stock): true
earliest_actionable_quarter: Any (acquisition timing matters)
latest_actionable_quarter: Any (holding period and sale timing)
typical_savings_range: $0 - $15,000,000+ per issuer (potentially massive for founders)
typical_savings_as_pct_of_income: varies; potentially 100% of qualified gain (at 5 years)
savings_formula: |
  Post-OBBBA stock (issued after July 4, 2025):
    Exclusion percentage by holding period:
      3-4 years:  50% exclusion  (unexcluded portion taxed at 28% + 3.8% NIIT)
      4-5 years:  75% exclusion  (unexcluded portion taxed at 28% + 3.8% NIIT)
      5+ years:   100% exclusion
    Per-issuer cap: greater of:
      - $15,000,000 (indexed for inflation starting 2027), OR
      - 10x adjusted basis in the QSBS sold
    Gross asset threshold: $75,000,000 at issuance (vs. $50M pre-OBBBA)
  
  Pre-OBBBA stock (issued on or before July 4, 2025):
    100% exclusion at 5+ years (only — no tiered partial exclusion)
    Per-issuer cap: greater of $10M or 10x basis
    Gross asset threshold: $50M at issuance
    Continues to apply to pre-existing stock; cannot "refresh" old stock for new rules
  
  Typical value for tech founder with post-OBBBA stock sold at 5yr+:
    Up to $15M × (20% LTCG + 3.8% NIIT + state rate) = up to $3.57M federal savings
    Plus $15M × state rate in conforming states
    10x basis alternative can multiply for high-basis stock
feasibility: high (when facts fit)
implementation_complexity: medium to high (entity structure and holding tracking)
audit_risk: low (well-established when fact pattern documented)
requires_documentation:
  - C corporation formation documents
  - Stock certificates with issue dates (critical for pre- vs. post-OBBBA determination)
  - Records establishing qualified trade or business throughout holding period
  - Total gross assets at all times (pre- or post-OBBBA threshold)
  - Original issuance certificate (vs. secondary market acquisition)
  - Holding period tracking (3/4/5 year tiers for post-OBBBA stock)
requires_partner_signoff: true (high-stakes, complex facts, common audit area when gain exceeds $1M)
requires_separate_engagement: for sale analysis, often yes ($2K-$5K); for planning, included in Full Wealth tier
typical_separate_engagement_fee: $2,000 - $10,000 for sale analysis
compatible_stacks:
  - Opportunity Zones (rollover excess gains above cap into QOZ for additional deferral — QOZ made permanent under OBBBA)
  - Trust planning (gift QSBS to non-grantor trust for separate cap per trust)
  - §1045 rollover (reinvest QSBS proceeds into new QSBS; note — cannot convert pre-OBBBA stock to post-OBBBA treatment via §1045)
  - Estate/gift planning (tacking holding period on gifts and inheritance)
incompatible_with:
  - S Corps (QSBS must be C Corp stock)
  - Stock acquired in secondary market (must be original issue)
  - SSTB-type businesses in restricted categories (health, law, accounting, financial services, etc.)
  - Converting pre-OBBBA stock to post-OBBBA treatment via §351 or §368 reorganizations (§1202(i) blocks this)
prerequisites:
  - C Corp status
  - Qualifying trade or business (not SSTB-like restricted categories)
  - Gross assets ≤$75M at all times before and immediately after issuance (post-OBBBA) OR ≤$50M (pre-OBBBA)
  - Active business requirement (80%+ assets in qualified trade or business) during holding period
  - 3-year minimum holding period (post-OBBBA partial) or 5-year (pre-OBBBA full)
industries_best_fit:
  - software-ai-companies (startups, frequently exit via sale)
  - e-commerce (if structured as C Corp for exit)
  - manufacturing, retail (non-SSTB)
  - construction
industries_not_applicable:
  - SSTB categories: health, law, accounting, consulting, financial services, performing arts, athletics, brokerage, banking, insurance, farming, mining, hotels, restaurants
  - S Corps (all — §1202 requires C Corp)
  - Partnerships (not stock)
state_specific_considerations: |
  Non-conforming states (QSBS gain fully taxable at state level):
    Alabama, California, Mississippi, New Jersey, Pennsylvania
  Partially conforming:
    Hawaii, Massachusetts
  New York conforms partially; others may delay implementing OBBBA updates
  For CA residents: strategic pre-sale relocation to conforming state worth evaluating
  No-income-tax trust situs states for QSBS-holding trusts:
    Alaska, Delaware, Nevada, South Dakota, Wyoming
path_b_compensation_tier: 0
---

# Qualified Small Business Stock (§1202)

The single most valuable provision in the code for startup founders and early-stage C Corp shareholders. The One Big Beautiful Bill Act (OBBBA), enacted July 4, 2025, significantly expanded §1202 — introducing tiered holding periods, raising the per-issuer cap to $15M, and raising the gross asset threshold to $75M.

**Critical**: OBBBA changes apply only to QSBS issued after July 4, 2025. Pre-existing QSBS continues under prior rules (5-year hold, $10M cap, $50M gross asset threshold). Stock issuance date determines which regime applies.

## The basic mechanic

When a qualifying C Corp shareholder sells QSBS, gain is excluded from federal income tax:

**For post-OBBBA stock (issued after July 4, 2025)**:
- 3-year hold: 50% exclusion
- 4-year hold: 75% exclusion
- 5-year hold: 100% exclusion
- Per-issuer cap: greater of $15M or 10× basis
- Unexcluded portion taxed at 28% (not standard 20% LTCG) + 3.8% NIIT

**For pre-OBBBA stock (issued on or before July 4, 2025)**:
- 5-year hold: 100% exclusion (no partial exclusion for shorter holds)
- Per-issuer cap: greater of $10M or 10× basis
- Unexcluded portion at standard 20% LTCG + 3.8% NIIT

## Why this matters

For a founder holding $15M in QSBS after 5 years:
- Post-OBBBA: up to $15M excluded (greater of cap or 10× basis determines). Federal savings up to ~$3.57M.
- Pre-OBBBA: up to $10M excluded. Federal savings up to ~$2.38M.
- For very large gains, trust-based cap multiplication can multiply.
- For very high-basis stock, 10× basis alternative can far exceed the dollar cap.

For a founder who needs liquidity at 3 years instead of waiting for 5:
- Post-OBBBA: 50% exclusion available (previously: nothing — had to wait or use §1045)
- Trade-off: unexcluded half at 28% (not 20%)
- Still a meaningful benefit for shorter-hold exits

## The qualifying criteria (largely unchanged by OBBBA)

Stock must meet ALL:

### 1. C corporation

Must be issued by domestic C corporation. Not S Corp. Not partnership. Not LLC (unless check-the-box elected C Corp treatment).

For S Corp clients considering exit, converting to C Corp can establish post-OBBBA QSBS going forward. Pre-conversion S Corp gain doesn't benefit; only stock issued after conversion and held per holding period rules.

### 2. Original issuance

Must be acquired directly from the corporation (primary issuance). Secondary purchases do NOT qualify.

Exceptions:
- Gift/inheritance — recipient tacks on original owner's holding period
- Some trust/entity transfers retain character

### 3. Qualified trade or business

Must be an active qualified trade or business throughout substantially all holding period.

**Disqualified (SSTB-type)**:
- Health, law, engineering, architecture, accounting, actuarial science
- Performing arts, consulting, athletics
- Financial services, brokerage, banking, insurance, financing, leasing, investing
- Farming
- Mining and natural resources
- Operation of hotel, motel, restaurant

**Qualified (common)**:
- Software / tech / SaaS
- Product companies (e-commerce, manufacturing)
- Retail (mostly; see restaurants excluded)
- Construction
- Real estate development (some nuance)

### 4. Gross assets test

**Post-OBBBA**: Corporation's total gross assets must be ≤$75M at all times before and immediately after issuance.

**Pre-OBBBA**: ≤$50M.

"Gross assets" = adjusted basis of all assets. Cash counts.

The $75M threshold gets annual inflation adjustments starting 2027.

Once crossed, future stock issued is ineligible. But existing stock continues to qualify — the threshold test applies at issuance, not on sale.

Nuance: If a company's gross assets drop back below the threshold, additional QSBS can be issued against remaining headroom. Example: company at $75M assets can't issue more; if assets drop to $60M, $15M of new QSBS can be issued.

### 5. Active business requirement

At least 80% of corporate assets must be used in qualified trade or business throughout substantially all of the taxpayer's holding period.

Passive assets (cash, portfolio investments) above 80% threshold can disqualify.

### 6. Holding period

**Post-OBBBA (tiered)**: 3 years minimum for partial exclusion, 5 years for full.

**Pre-OBBBA**: 5 years minimum for any exclusion.

Gift/inheritance tacks on prior holder's period.

### Stock types

Common stock qualifies. Preferred stock generally doesn't (unless convertible preferred with specific terms).

## The cap calculation

§1202(b)(1) allows the greater of:

**Post-OBBBA**: $15M per issuer per taxpayer (lifetime from that company) OR 10× aggregate adjusted basis of stock sold.

**Pre-OBBBA**: $10M per issuer per taxpayer OR 10× basis.

### Example 1: Post-OBBBA founder stock

Founder with $1K basis, sells all for $30M after 5 years of holding post-OBBBA stock:
- $15M cap: $15M excluded
- 10× basis: $1K × 10 = $10K (immaterial)
- Result: $15M excluded (100% exclusion at 5 years); $15M taxable at LTCG rates

### Example 2: Post-OBBBA high-basis stock

Founder with $5M basis (later funding round) sells all for $60M after 5 years:
- $15M cap: $15M
- 10× basis: $5M × 10 = $50M
- Greater: $50M excluded
- Result: $50M excluded (100%); $10M taxable at LTCG

### Example 3: Post-OBBBA 3-year hold

Founder with $1K basis sells stock for $20M after 3 years of holding post-OBBBA stock:
- Qualifies for 50% exclusion (3+ years, not yet 4)
- Cap applies to the exclusion amount: min(50% × $20M gain, $15M cap) = $10M excluded
- $10M taxable at 28% + 3.8% NIIT = $3.18M federal tax
- Versus: hold one more year for 75% or two more years for 100%

### Example 4: Pre-OBBBA stock (held before July 4, 2025)

Founder with $1K basis holds pre-OBBBA stock for 5 years, sells for $30M:
- 100% exclusion rules (pre-OBBBA)
- $10M cap (pre-OBBBA): $10M excluded
- $20M taxable at standard 20% LTCG + 3.8% NIIT = $4.76M federal tax

Pre-OBBBA founders got shortchanged vs. post-OBBBA founders, but their existing stock cannot be "refreshed" via §351 or §368 exchange — the prior rules stick.

## Per-taxpayer / per-issuer

The $15M/$10M cap is PER TAXPAYER PER ISSUER.

Planning implications:
- Transfer QSBS to non-grantor trusts: each trust = separate taxpayer, separate cap
- Gifting to children: each child = separate taxpayer with own cap
- Multiple issuers: founder investing in multiple startups, each has own cap

Trust-based planning ("QSBS stacking") can multiply the exclusion meaningfully for high-net-worth founders.

## AMT treatment

For post-2010 QSBS (both pre- and post-OBBBA): 0% AMT preference on 100% exclusion. Clean exclusion for 5+ year holds.

For post-OBBBA 50%/75% partial exclusions (3-4 year holds): 28% capital gains rate on unexcluded portion; verify AMT treatment against current guidance.

## State treatment

**States conforming** (full §1202 benefit):
- Most states follow federal treatment

**States NOT conforming** (QSBS gain fully taxable at state level):
- Alabama, California, Mississippi, New Jersey, Pennsylvania

**States partially conforming**:
- Hawaii, Massachusetts

**Nuance**:
- New York partially conforms
- Some states may delay implementing OBBBA updates (monitor for updates per state)

**For CA-resident founders**: federal exclusion available; state tax still applies. On $15M gain, CA state tax ≈ $2M.

**Strategic implication**: CA founders considering pre-sale relocation to conforming state can save meaningful state tax. Complex; separate engagement warranted.

## Cannot refresh pre-OBBBA stock

§1202(i) prevents converting pre-OBBBA stock into post-OBBBA stock via:
- §351 exchange (stock-for-stock)
- §368 reorganization

If pre-OBBBA stock is exchanged for new stock, the new stock retains pre-OBBBA treatment (5-year hold, $10M cap).

Implication: for founders of pre-OBBBA C Corps, recapitalizing to try to capture OBBBA treatment won't work. The original stock's regime persists.

## Planning before the exit

Priceless should engage with QSBS-eligible clients early, not at the last minute.

### Year 1-3: Entity structure

- Verify C Corp status (not S Corp, LLC, partnership)
- Verify qualified trade or business
- Document gross asset test satisfaction at issuance
- Determine pre- vs. post-OBBBA treatment for each stock tranche
- Consider founder stock vs. later issuances and their respective treatments

### Year 3-5: Partial exclusion planning (post-OBBBA only)

- At 3 years: 50% exclusion available; evaluate whether partial exit worth the 28% rate
- At 4 years: 75% exclusion; better
- Consider §1045 rollover if not meeting holding period at planned exit

### Year 5+: Full exclusion sale planning

- Confirm all requirements still met at sale date
- Document holding period
- §1045 rollover option if investing sale proceeds into new QSBS (defers remainder of gain)
- Trust-based gifting if multi-generational planning (each trust = separate $15M cap)
- State residency considerations
- Consider AMT implications for partial exclusions

## §1045 rollover

Sell QSBS, reinvest proceeds into new QSBS within 60 days: gain is deferred (not excluded — deferred via basis reduction).

**Important post-OBBBA**: §1045 rollover of pre-OBBBA stock does NOT convert it to post-OBBBA treatment. New stock acquired via §1045 rollover retains the original stock's character.

## Common errors and pitfalls

- **Stock structured as S Corp** — fatal; cannot be QSBS
- **Pre- vs. post-OBBBA misidentification** — affects cap, holding period, and rate
- **Assuming partial exclusion at 3-4 years for pre-OBBBA stock** — not available; only 5+ year full exclusion
- **Stock acquired in secondary market** — doesn't qualify
- **Gross assets crossed threshold before issuance** — disqualifies from that point
- **Active business requirement not maintained** — if company accumulates too much cash or invests passively, status can break
- **Holding period not met** — strict; early sales lose exclusion unless §1045 rollover
- **Gift timing missed** — gifting for cap-multiplication needs to happen well before sale
- **State conformity ignored** — clients surprised by state tax
- **28% rate on unexcluded portion missed** — applies to 3-4 year partial exclusions and to excess above cap
- **Pre-OBBBA "refresh" attempt** — §1202(i) blocks; new stock retains old rules
- **Documentation gaps** — at audit, must prove qualified status throughout holding period

## Common stacking opportunities

- **Trust planning**: Gifting QSBS to non-grantor trusts before exit multiplies the per-issuer cap per trust
- **Charitable remainder trusts**: Combining with §664 CRT for simultaneous tax deferral and charitable benefit
- **Opportunity Zones (post-OBBBA permanent)**: Excess gain above cap can be rolled into QOZ funds for further deferral
- **§1045 rollover**: Sequential QSBS investments; useful when holding period not met or gain exceeds cap

## When Priceless engages

Tier relevance:
- **Foundational tier**: Flag QSBS potential; refer to Full Wealth for actual planning
- **Comprehensive tier**: Annual review of QSBS status; planning pre-exit
- **Full Wealth tier**: Full engagement including pre-exit planning, trust structures, multi-generational considerations

Separate engagements warranted:
- Pre-exit QSBS sale analysis: $3K-$10K
- QSBS + trust planning: $5K-$25K (coordinated with estate attorney)
- Relocation analysis for state conformity: $2K-$5K
- Pre-OBBBA vs. post-OBBBA analysis for multi-tranche stockholders: $2K-$5K

## Partner sign-off required

Per strategy metadata: requires_partner_signoff: true.

Because:
- Often highest-dollar strategy for individual clients
- Pre- vs. post-OBBBA regime identification is material
- Fact pattern analysis has judgment calls (qualified trade, original issuance, active business)
- Audit exposure if claimed without solid documentation
- Client communication requires precision on what's excluded vs. taxable

## Documentation skill handoff

- QSBS qualification memo template (establishes 6 qualifying criteria met; distinguishes pre-OBBBA and post-OBBBA)
- Holding period tracker (by issuance date, accounting for tier breakpoints)
- §1045 rollover election form
- State conformity analysis
- Pre-exit planning checklist
- Gifting planning coordination with estate attorney
- Pre- vs. post-OBBBA regime determination worksheet for multi-tranche stockholders

## Reference sources

- IRC §1202 and §1045
- OBBBA (P.L. 119-21), enacted July 4, 2025
- Treas. Reg. proposed §1.1202
- Selected cases: relatively sparse; IRS guidance via PLRs

## Audit posture

### Risk profile: medium when documentation complete; high when factual qualifications thin

QSBS is a high-stakes exclusion — often $5M-$15M of gain excluded for an individual client. IRS pays attention.

- **LOW** when stock clearly qualifies, holding period well-documented, trade or business clearly active, §1202 workpaper prepared contemporaneously
- **MEDIUM** when qualification depends on fact-intensive analysis (active business test, qualified trade, original issuance)
- **HIGH** when qualification is established only retroactively, when multiple tranches exist with mixed regimes (pre-OBBBA vs. post-OBBBA), or when aggregate issuer assets approach $75M ceiling
- **CRITICAL** when entity had C-to-S conversion history (stock may not qualify post-conversion)

### Audit trigger scenarios

- Large Form 1040 gain exclusion under §1202 on Schedule D / Form 8949
- Post-OBBBA 3-year or 4-year tiered exclusion claims (new; IRS will develop examination focus)
- Taxpayer claims $15M cap when prior $10M cap should apply (pre-OBBBA stock)
- Aggregate issuer assets near $75M ceiling (verification required)
- Active business test challenged (too much passive income or investment holdings)
- §1045 rollover election with weak documentation of replacement QSBS
- State non-conformity producing federal-only exclusion

### Defense considerations

- **§1202 qualification memo** prepared at or near acquisition (contemporaneous documentation strongest)
- **Holding period tracker** by issuance date and tranche (critical for post-OBBBA tiered exclusion)
- **Issuer certification** confirming active business, gross assets, trade/business category
- **Original issuance documentation** (subscription agreement, stock certificate, cap table, wire transfer record)
- **Pre-OBBBA vs. post-OBBBA regime analysis** for each tranche
- **Aggregate gross assets schedule** if issuer near $75M threshold (pre-OBBBA $50M threshold)
- **Active business activities documentation** (operating evidence, not just financial statements)
- **State conformity memo** if state doesn't conform to federal exclusion

### Statute of limitations

- Standard 3-year §6501 limitation
- §6501(e) 6-year limitation if understatement >25%
- §6501(c) no statute if fraud — a large unclaimed §1202 followed by claim years later raises fraud concern potential
- §1045 rollover triggers separate tracking for replacement stock holding period

## Deliverable points (documentation skill handoff)

When QSBS appears in a client memo:

### In the narrative memo

**Pre-exit planning memo** (most common Priceless engagement):
- **Recommendation statement**: "Your [Company] investment is tracking toward qualified §1202 status. Projected exit value of $[X] at the 5-year mark produces $[Y] of federally-excluded gain under §1202 ($15M cap for post-OBBBA stock; $10M for pre-OBBBA)."
- **Why quantification**: Federal tax avoided = excluded gain × (28% rate for §1202 gain) + NIIT 3.8%
- **Trade-off statement**: Hold to 5-year mark (or 3/4/5 under post-OBBBA tiers); §1045 rollover option if exit needed before 5 years; state conformity varies
- **Action items**: verify annual qualification; maintain issuer certifications; coordinate exit timing
- **Deadlines**: 5-year holding period anniversary (primary); post-OBBBA 3-year (50%) / 4-year (75%) anniversaries for partial exclusion

**Post-exit memo** (year of exit):
- **Recommendation statement**: "Exit of [Company] shares produces $[X] total gain. Under §1202 [pre-OBBBA / post-OBBBA] regime, $[Y] is federally excluded. Remaining $[Z] is subject to [regular capital gain / 28% §1202 special rate if pre-OBBBA]. Net tax: $[W]."
- Detailed computation on Schedule D / Form 8949
- State tax analysis (conformity varies)

### In the Excel model

- **Tax Projection tab Capital Gains block**: §1202 exclusion applied; residual taxable gain at 28% (pre-OBBBA) or tier-based exclusion (post-OBBBA)
- **Appendix / Supporting Calculations tab**: §1202 qualification analysis; holding period; aggregate issuer assets check; state conformity
- **Strategies tab**: row for "QSBS Exclusion" with federal savings quantified; indicates which cap applies ($10M or $15M)
- **Actions tab**: holding period anniversary milestones; annual issuer certification requests
- **Notes tab**: methodology note on pre-OBBBA vs. post-OBBBA regime determination

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — pre-OBBBA or post-OBBBA regime? Issuance date [date]; confirm regime application]`
- `[REVIEW: quantification — $15M cap vs. $10M cap; confirm correct cap applied to this tranche]`
- `[REVIEW: scope — §1045 rollover election? Exit in year [X]; replacement stock identified?]`
- `[REVIEW: authority — active business test during entire holding period; documentation verified?]`
- `[REVIEW: framing — client has multiple tranches with mixed regimes; memo must distinguish clearly]`

### Template language

For pre-exit planning (Full-Wealth tier):
> **Your QSBS five-year clock is running**. Your 2021 investment in [Company] crosses the five-year §1202 mark in October 2026. Post-OBBBA, your $15M per-taxpayer cap allows up to $15M of gain to be federally excluded at 100% when exit occurs after the five-year mark. Decision point in Q2 2027 — we'll model the exit scenarios then, including §1045 rollover option if earlier exit becomes necessary.

For post-exit:
> **Your 2026 exit of [Company] produces $12M of gain**. This stock qualified as QSBS under post-OBBBA rules (issued 2021, held 5+ years, all qualification criteria met). Your $15M per-taxpayer cap is not exhausted, so the full $12M is federally excluded. Federal tax saved: $3.36M (28% × $12M) plus $456K NIIT saved. State treatment: [state-specific — California doesn't conform; gain taxable at state level]. Total federal + state savings: $[X].

## Update status

| Verification | Date | Source |
|---|---|---|
| OBBBA 3-year 50% / 4-year 75% / 5-year 100% tiered exclusion | Verified 2026-04 | P.L. 119-21 (OBBBA) |
| OBBBA $15M per-taxpayer cap (post-OBBBA stock) | Verified 2026-04 | P.L. 119-21 |
| OBBBA $75M aggregate asset ceiling (post-OBBBA issuers) | Verified 2026-04 | P.L. 119-21 |
| Pre-OBBBA $10M cap (stock issued before enactment) | Continued operation 2026-04 | Pre-existing §1202 |
| Pre-OBBBA $50M aggregate asset ceiling | Continued operation 2026-04 | Pre-existing §1202 |
| 28% §1202 special rate (pre-OBBBA residual gains) | Unchanged 2026-04 | §1(h) |
| §1045 rollover mechanics | Unchanged 2026-04 | §1045 |
| State conformity landscape | Monitor ongoing | State revenue departments |
| Active business test standards | Unchanged 2026-04 | Treas. Reg. proposed §1.1202 |
| AMT treatment | Unchanged 2026-04 | §57(a)(7) |

**Last full review**: 2026-04 (Sprint 5.5 rebuild — added Audit Posture and Deliverable Points)

**Partner review note**: Pre-OBBBA vs. post-OBBBA regime distinction is material and fact-specific. Partner should personally verify regime application for every QSBS engagement.

**Next review trigger**: IRS regulations on post-OBBBA tiered exclusion (likely 2026-2027); any state conformity legislation; case law on active business test
