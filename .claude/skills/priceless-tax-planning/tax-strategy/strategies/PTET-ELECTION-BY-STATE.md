---
strategy: Pass-Through Entity Tax (PTET) Election
category: core
authority:
  - IRS Notice 2020-75 (blessed PTET regimes federally)
  - State-specific PTET statutes (36+ states have regimes)
  - OBBBA 2025 (P.L. 119-21) — preserved PTET despite legislative proposals to restrict
  - §164 (federal deductibility of state income tax at entity level)
applies_when:
  - pass_through_entity: true (S Corp, partnership, most multi-member LLCs)
  - state_has_PTET_regime: true
  - owner_federal_SALT_deduction_constrained: true (effective for high earners despite $40K cap)
earliest_actionable_quarter: Q1 (March-April election deadlines in most states)
latest_actionable_quarter: varies by state (some allow mid-year elections, most require early)
typical_savings_range: $2000 - $50000+ (depends on state rate and entity income)
typical_savings_as_pct_of_income: 1% - 6% of entity net income
savings_formula: |
  Federal tax savings = State tax paid at entity level × marginal federal rate
  Because PTET payment is deductible at entity level (not subject to individual SALT cap)
  Effective rate: state rate × federal marginal rate
  Example: NY PTET paid of $50,000 × 37% federal rate = $18,500 federal savings
  State side: owner gets credit against state tax for PTET paid (generally dollar-for-dollar)
  Net: federal deduction captured that would have been limited by SALT cap
feasibility: high (in PTET-offering states)
implementation_complexity: medium (state-specific election mechanics, annual renewal in most states)
audit_risk: low (IRS blessed in Notice 2020-75)
requires_documentation:
  - State PTET election form (varies by state)
  - Entity-level state tax computation
  - K-1 reflecting reduced pass-through income
  - State credit documentation at owner level
  - Multi-state coordination if entity operates in multiple states
requires_partner_signoff: true for multi-state; false for single-state routine
requires_separate_engagement: no (standard planning)
typical_separate_engagement_fee: null
compatible_stacks:
  - S-Corp-Reasonable-Comp (reasonable comp also affects state tax computation)
  - QBI-Optimization (PTET reduces K-1 income flowing to individual — affects QBI base)
  - Charitable-Bunching-DAF (PTET reduces AGI, affects charitable limits)
  - Defined-Benefit-Overlay (in phase-in range, PTET income reduction helpful)
  - Multi-state-mechanics (complex multi-state coordination)
incompatible_with:
  - C corporations (C Corps pay state tax normally, no PTET framework)
  - Sole proprietors (no entity to elect)
  - Disregarded single-member LLCs (unless elected as separate entity)
prerequisites:
  - Pass-through entity in PTET-offering state
  - State-specific election deadline met
  - Entity-level state tax payment capability
industries_best_fit:
  - All pass-through entities in PTET-offering states
industries_not_applicable:
  - Clients in non-PTET states
state_specific_considerations: |
  Major update post-OBBBA: SALT cap raised to $40,000 for 2025-2029 (indexed),
  with phase-down beginning at MAGI $500,000 (2025) / $505,000 (2026)
  For high-income owners (MAGI > $600K), effective SALT cap returns to $10,000
  PTET remains highly valuable for these high-income owners
  For middle-income owners below phase-down, SALT cap increase may partially reduce PTET benefit
path_b_compensation_tier: 0
---

# Pass-Through Entity Tax (PTET) Election

The SALT cap workaround that pass-through entity owners use to deduct state and local taxes beyond the federal SALT cap. Entity pays state income tax at entity level (federally deductible as business expense), owner gets state credit.

**Critical post-OBBBA update**: The OBBBA (enacted July 4, 2025) raised the federal SALT cap from $10,000 to $40,000 for tax years 2025-2029 (indexed), with a phase-down for MAGI over $500,000 that fully reduces the benefit to $10,000 at MAGI around $600,000. This changes the PTET calculus but **does NOT eliminate its value for high-income owners**. Congressional proposals to restrict PTET were NOT adopted in the final OBBBA.

## The basic mechanic

1. Pass-through entity makes state-level election (typically annual)
2. Entity pays state income tax at entity level (tied to owners' allocable shares of state-source income)
3. Federal deduction captured at entity level (not subject to individual SALT cap — it's a business expense)
4. K-1 to owner reflects reduced pass-through income (net of state tax paid)
5. Owner receives state credit for proportionate share of PTET paid
6. Owner's federal return: reduced K-1, less individual SALT deduction needed

Net effect: federal deduction captured that would have been limited at owner level.

## Post-OBBBA analysis — when PTET still matters

### For MAGI ≤ $500,000 (2025) / $505,000 (2026)

SALT cap is $40,000+ (indexed). If all SALT (state income + property tax) fits under $40,000 cap:
- Could itemize SALT at owner level (no PTET needed)
- PTET still beneficial for amounts above the $40K cap

Example MFJ with $400K MAGI, $60K total SALT:
- Without PTET: SALT deduction capped at $40K → $20K state tax "lost" at federal level
- With PTET: $30K state income tax at entity level (fully deductible) + $10K property tax at owner (fits under new cap reduction) → full $40K+ captured

### For MAGI $500K-$600K (2025) / $505K-$605K (2026) — PHASE-DOWN ZONE

SALT cap phases down:
- Reduced by 30 cents per dollar MAGI over threshold
- Floors at $10,000

Example MFJ with $550K MAGI, $75K SALT:
- Phase-down: ($550K - $500K) × 30% = $15K reduction
- Effective SALT cap: $40K - $15K = $25K
- Without PTET: $25K deduction; $50K state tax "lost"
- With PTET: entity captures full state income tax deduction at federal level

### For MAGI > $600K (2025) / $605K (2026)

SALT cap back to $10,000 (floor).
PTET captures essentially all state tax as federal deduction.
Example MFJ with $800K MAGI, $100K state income tax:
- Without PTET: $10K deduction (everything above cap lost)
- With PTET: $100K state tax deductible at entity level, owner gets $100K state credit, net federal deduction gain of $90K × 37% = $33K savings

### Practical conclusion

**PTET remains highly valuable** for high-income pass-through owners. For owners with MAGI $600K+, it's often worth $10K-$50K+ annually in federal tax.

For middle-income owners MAGI <$500K, the increased SALT cap reduces PTET's incremental value, but it may still matter for amounts above the new cap.

## State-by-state overview (36+ states with PTET regimes)

### Major PTET states for Priceless client base

**California** — CA PTET:
- 9.3% rate on qualifying PTE income
- Two required payments: first (greater of $1,000 or 50% of prior year's PTET) due June 15; balance by original return deadline
- 2026-2030 relief: missed June 15 payment no longer invalidates election (but 12.5% per-owner credit reduction penalty)
- Recent: California extended PTET for additional 5 years (state passed legislation in 2025)
- Election annual
- Both partnership and S Corp eligible
- Owner credit: 9.3% credit against CA individual tax

**New York** — NY PTET / NYC PTET:
- NY rates up to 10.9% (aligns with personal rates) plus NYC PTET
- Election due March 15 each year (irrevocable for year)
- Quarterly estimated payments required
- Partnership and S Corp
- Owner credit at state and city level
- For NYC residents, NYC PTET adds additional layer

**New Jersey** — BAIT (Business Alternative Income Tax):
- NJ rates up to 10.75%
- Election by March 15
- Quarterly estimated payments
- Partnership and S Corp

**Illinois** — IL PTET:
- Illinois PTET made permanent December 2025 (previously had sunset)
- 4.95% rate (matches individual flat rate)
- Election deadline March 15 (calendar year)
- Quarterly estimated payments

**Connecticut** — CT PTET:
- Mandatory for partnerships (unique — not elective)
- 6.99% rate
- Owner credit for share of PTET paid

**Massachusetts** — MA PTET:
- 5% + 4% surtax above $1M (aligns with individual flat plus surtax)
- Election annual
- Made permanent in 2025

**Georgia** — GA PTET:
- 5.39% rate (matches individual rate)
- Election deadline varies (typically March)

**Other PTET states** (partial list): AL, AR, AZ, CO, HI, ID, IN, IA, KS, KY, LA, MD, MI, MN, MO, MS, MT, NE, NM, NC, ND, OH, OK, OR, RI, SC, UT, VA, WI

### PTET states at risk of sunset / legislative change

- **Virginia**: extended one year in 2025 (sunsets 1/1/2027); needs further extension
- **Oregon, Utah**: scheduled sunset 12/31/2025; watch for extension legislation
- **California**: extended for 5 years (stable through 2030)
- **Illinois**: made permanent 12/12/2025

### States WITHOUT PTET

- Alaska, DC, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming (all have no or minimal state income tax — PTET not relevant)
- Delaware (no PTET to date)
- Maine (limited)
- Vermont (limited)
- West Virginia (limited)

Monitor state legislatures annually for PTET additions and modifications.

## Planning workflow

### Step 1: Identify client's state(s)

For each state where pass-through entity generates source income:
- Does state have PTET regime?
- What's the current-year election deadline?
- What's the PTET rate?
- Are there quarterly estimated payment requirements?

### Step 2: Compute federal benefit

Federal benefit = State tax paid at entity level × Owner's marginal federal rate

For 2025:
- MFJ at 37% bracket: benefit = state tax × 37%
- MFJ at 35% bracket: benefit = state tax × 35%

### Step 3: Compute state impact (neutral)

Owner's state tax = state tax × owner ownership percentage
Owner gets credit = state tax paid at entity × owner ownership percentage
State net: generally zero (tax paid at entity = credit at owner)

### Step 4: Compare to non-PTET

Without PTET:
- State tax still paid (just at owner level)
- Federal SALT deduction limited (by $40K cap, phase-down, or $10K floor)

### Step 5: Consider Multi-state mechanics

For multi-state entity (operates in multiple states):
- Separate PTET election per state (each state's rules)
- Careful tracking of K-1 income sourcing
- Owner may have credit at owner's resident state for PTET paid in non-resident state
- Increased complexity; partner review

### Step 6: Timing

Most states' deadlines fall in Q1 (January-March) for the election. Q1 engagement is the planning window for PTET election for current year.

### Step 7: Quarterly estimated payments

Most PTET states require quarterly entity-level estimates. Coordinate with client's accounting team.

## Interaction with other strategies

### QBI (§199A)

PTET reduces K-1 income (owner's QBI base). For owners in:
- Below threshold (Zone 1): may reduce QBI deduction slightly
- Phase-in range (Zone 2): reducing taxable income via PTET is beneficial
- Above threshold non-SSTB (Zone 3): reducing K-1 still subject to W-2/UBIA limit; effect varies
- Above threshold SSTB (Zone 3): QBI already zero; PTET neutral to QBI

### S Corp reasonable comp

Entity-level state tax includes reasonable comp. Reasonable comp decision unchanged by PTET election; but PTET impact depends on final K-1 amount.

### Charitable giving

PTET reduces AGI, which affects:
- 60% AGI limit for cash charitable contributions
- Medical expense 7.5% AGI floor
- Other AGI-based thresholds

Generally positive (more room under limits).

### NIIT

Reducing K-1 income reduces NII (for passive owners). For material-participation S Corp owners, K-1 already not subject to NIIT (active business exclusion), so PTET is NIIT-neutral at federal level.

## Common errors

- **Missed election deadline** — most states require Q1 election; late election fails
- **Missing quarterly payments** — some states invalidate election for missed payments
- **Not tracking credit** properly — owner must claim state credit for PTET paid
- **Multi-state coordination** — incorrectly sourcing income across states
- **Federal deduction tracked wrong** — entity-level deduction, not on individual 1040
- **Resident state credit for non-resident PTET** — missed credit opportunity
- **Applying PTET to wrong entity type** — must be eligible pass-through

## Documentation skill handoff

- PTET election forms (state-specific templates)
- Annual election renewal tracker
- Quarterly estimated payment tracker
- State-by-state rate and deadline database
- Owner credit computation worksheet
- Multi-state PTET coordination workpaper
- Client communication template (explaining mechanics)

## Reference sources

- IRS Notice 2020-75 (federal blessing of PTET regimes)
- State PTET statutes (varies; monitor state revenue departments)
- OBBBA §70107 (preserved PTET despite legislative proposals to restrict)
- AICPA PTET state matrix
- Tax Foundation state PTET tracker

## Audit posture

### Risk profile: low for straightforward PTET elections; medium for complex multi-state

PTET is a post-TCJA-era workaround with IRS blessing via Notice 2020-75. Risk profile:

- **LOW** when election is made timely, entity-level tax paid timely, shareholder receives proper credit/reduction, no state-to-state inconsistencies
- **MEDIUM** when multi-state apportionment is complex (owner in high-tax state, entity operates in multiple states with different PTET regimes)
- **MEDIUM** when owner moves states mid-year (residency change affects state-level credits)
- **LOW-FEDERAL** on federal side: IRS has consistently honored PTET regimes since 2020 Notice

### Audit trigger scenarios

**Federal**:
- PTET-paid amount claimed as federal deduction disproportionate to entity income
- §461(l) excess business loss interaction (PTET paid by loss entity doesn't help)
- Improper passthrough of federal deduction to shareholder (should be at entity level, not individual)

**State**:
- Shareholder credit claimed exceeds PTET paid at entity level
- Late election (most states require specific filing deadline)
- Payment not made by required date (some states require quarterly estimates)
- Resident-vs-nonresident apportionment disputes
- Federal deduction computed differently than state allows

### Defense considerations

- **Annual PTET election documentation** per state where election made
- **Entity-level PTET payment records** (state by state)
- **K-1 reconciliation**: PTET at entity level reduces K-1 ordinary income; shareholder claim of credit reconciled
- **Multi-state apportionment memo** when complex
- **State residency documentation** if owner has ambiguous residency
- **Federal Notice 2020-75 reliance** memo for federal deduction posture

### Statute of limitations

- Standard 3-year statutes at federal and state level
- State-specific amended return windows vary
- PTET elections generally not revocable after filing for that year

## Deliverable points (documentation skill handoff)

When PTET strategy appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Elect PTET in [state(s)] for 2026. Federal deduction at entity level of $[X] provides $[Y] federal savings. State tax credit on individual return offsets the PTET paid — net state position unchanged. Net benefit: $[Y] federal savings not available via individual SALT deduction (capped)."
- **Why quantification**: Federal savings = PTET paid × marginal federal rate. SALT cap avoidance benefit articulated.
- **Trade-off statement**: Cash flow timing — PTET paid before year-end / by required date. Estimated payment schedule per state. State election generally binding for the year.
- **Action items**: Entity-level election filing per state; quarterly PTET estimated payments (if required); confirmation of shareholder reporting on K-1
- **Deadline**: State-specific (see state-by-state section)

### In the Excel model

- **Tax Projection tab State Section**: PTET paid as deduction from entity income; state tax credit offsetting shareholder state liability
- **Strategies tab**: row for "PTET Election" with federal savings quantified; state savings = $0 (structurally neutral at state level) or positive if SALT cap would otherwise bind
- **Actions tab**: per-state election deadline; per-state payment schedule
- **Notes tab**: state election details; any multi-state considerations; coordination with individual state returns

### In partner-review [REVIEW] callouts

- `[REVIEW: quantification — PTET at [state] produces federal savings of $[X]; confirm owner's marginal rate]`
- `[REVIEW: scope — multi-state apportionment for [entity]; coordination with [other state] PTET election?]`
- `[REVIEW: framing — owner moved from [state A] to [state B] mid-year; residency-based election complication]`
- `[REVIEW: authority — OBBBA SALT cap phase-down at $505K MAGI; client above? PTET still meaningful?]`

### Template language

> **Elect PTET in [California/New York/etc.] for 2026**. Your [S Corp/partnership] pays entity-level tax of $[X] (at [state rate]%), which is deductible at the federal level without SALT cap limitation. This saves $[Y] federal ($X × [your marginal rate]). You receive an equal state tax credit on your individual return, so state tax position is unchanged. Net benefit: $[Y] federal savings we couldn't capture otherwise with your SALT deduction already capped.

## Update status

| Verification | Date | Source |
|---|---|---|
| OBBBA 2025 SALT cap at $40,400 (2026) | Verified 2026-04 | P.L. 119-21 §70108 |
| OBBBA SALT phase-down at MAGI $505K (2026) | Verified 2026-04 | P.L. 119-21 §70108 |
| OBBBA PTET preservation | Verified 2026-04 | P.L. 119-21 — no restrictive amendments |
| IRS Notice 2020-75 currency | Verified 2026-04 | IRS; notice remains operative |
| California PTET extension through 2030 | Verified 2026-04 | California AB 2960 (2024) |
| Illinois PTET permanent | Verified 2026-04 | Illinois SB [TBD] December 2025 |
| Virginia PTET sunset 1/1/2027 | Verified 2026-04 | Virginia legislature |
| Oregon PTET sunset status | Monitor ongoing | Oregon revenue department updates |
| Utah PTET status | Monitor ongoing | Utah revenue department updates |
| State-by-state election deadlines | Continuously refreshed | AICPA PTET state matrix; firm state subscription |

**Last full review**: 2026-04 (Sprint 5.5 rebuild — added Audit Posture, Deliverable Points)

**Verification note**: State PTET landscape changes frequently. Verify current state statutes before each engagement, particularly for:
- Election deadlines (may shift)
- Payment schedules (may change)
- Rate changes (tied to state personal income tax rates)
- Sunset dates (especially Oregon, Utah, Virginia)

**Next review trigger**: State legislative actions (rolling); OBBBA SALT cap sunset date (2029); IRS issuance of PTET-specific regulations if any
