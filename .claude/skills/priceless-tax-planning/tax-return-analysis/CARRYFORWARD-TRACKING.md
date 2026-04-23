# Carryforward Tracking

Reference for every carryforward type that might appear on a Priceless client's prior return. Each carryforward is a future tax asset or obligation that must be tracked year over year.

## Personal return carryforwards

### Net Operating Loss (§172)

**What it is**: A loss from a trade or business (Schedule C, E, F, K-1) that exceeds income and can be carried forward to offset future income.

**Post-TCJA rules**:
- NOLs generated in 2018+ carry forward indefinitely (no carryback generally)
- Limited to 80% of taxable income in any future year (not 100%)
- NOLs from 2017 and prior retain pre-TCJA rules (2-year carryback, 20-year carryforward, 100% offset)
- CARES Act allowed 5-year carryback for NOLs generated 2018-2020, with 100% offset — watch for these

**Where it appears on return**:
- Form 1040 Line 8 (Other Income, negative)
- Schedule 1 supporting
- Form 172 computation workpaper
- Prior year tax summary

**Where it's tracked**:
- Carryforward worksheet (must be maintained by preparer)
- Form 1045 or 1139 for carrybacks

**Common errors**:
- NOL mislabeled as "ordinary loss" without §172 classification
- 80% limitation applied to old-law NOLs
- Full absorption claimed when 80% limit applies
- CARES-era carryback opportunity missed
- Interaction with §461(l) excess business loss limitation missed

**Current-year action**:
- Compute available NOL for current year
- Apply 80% limitation to ordinary taxable income
- Track remaining carryforward
- Consider whether strategies should be pulled forward to absorb NOL (vs. let it expire, though no expiration for post-2017 NOLs)

### Capital Loss Carryforward

**What it is**: Net capital loss exceeding $3,000/year annual deduction limit carries forward indefinitely.

**Rules**:
- $3,000/year ($1,500 if MFS) deductible against ordinary income
- Short-term losses first, then long-term
- No expiration

**Where it appears**:
- Form 1040 Line 7 (capital gains/losses)
- Schedule D
- Capital Loss Carryover Worksheet

**Common errors**:
- Carryforward math wrong (not netting ST/LT correctly)
- Carryforward reset on major life event (death of spouse especially — half of carryforward lost to surviving spouse)
- Wash sales not properly disallowed
- §1244 small business stock loss not claimed as ordinary

**Current-year action**:
- Compute carryforward balance
- Consider tax-loss harvesting in current year to absorb gains
- Consider §1202 QSBS gains (partially or fully exempt) and whether loss offset is even useful
- Track ST vs. LT split carefully

### Passive Activity Loss (§469)

**What it is**: Losses from passive activities (generally rentals, businesses where taxpayer doesn't materially participate) that exceed passive income. Suspended until future passive income or disposition.

**Rules**:
- Suspended until:
  - Future passive income absorbs them
  - Complete disposition of the activity (released at that time)
- Real estate professionals (§469(c)(7)) can deduct rental losses against active income
- $25,000 special allowance for active rental (phases out AGI $100K-$150K)
- Material participation tests (§469(h))

**Where it appears**:
- Form 8582 (Passive Activity Loss Limitations)
- Schedule E (rentals)
- K-1 items flagged passive

**Common errors**:
- Active vs. passive classification wrong
- Real estate professional status claimed without meeting requirements
- Grouping elections not documented
- At-risk limitation (§465) confused with passive loss limitation (§469)
- Current-year losses not traced to specific activities

**Current-year action**:
- Verify active vs. passive classification per activity
- Track suspended losses by activity
- If disposition planned, time to release losses
- Real estate STR planning opportunities (§469(c)(7) treatment for STR, Augusta-style rules)

### Charitable Contribution Carryforward

**What it is**: Charitable contributions exceeding AGI limits carry forward 5 years.

**Limits by contribution type** (60% cash limit made PERMANENT by OBBBA 2025):
- Cash to public charity (including DAF): 60% AGI (permanent post-OBBBA)
- Appreciated capital gain property to public charity: 30% AGI
- Cash to private non-operating foundation: 30% AGI
- Appreciated property to private non-operating foundation: 20% AGI

**Post-OBBBA 2026+ additional considerations for itemizers**:
- 0.5% AGI floor: first 0.5% of AGI charitable giving is non-deductible (reduces current-year deduction; reduces amount "absorbed" before hitting AGI limit)
- 35% bracket cap: top-bracket (37%) taxpayers see deduction value capped at 35%
- Both apply at the time of deduction (not contribution), so the 0.5% floor and 35% cap re-apply to carryforward amounts used in future years

**Rules**:
- FIFO usage — oldest carryforward first
- 5-year limit from year of contribution
- Separate tracking by contribution type (AGI limits differ)
- For 2025 contributions carried into 2026+: the contribution itself was made pre-floor, but deduction utilization in the 2026+ year is subject to the floor and cap rules in effect that year

**Where it appears**:
- Schedule A, line 14 (contributions over the limit = carryforward)
- Charitable Contribution Carryforward Worksheet

**Common errors**:
- Not tracking by contribution type (mixed with wrong limit)
- Expired carryforward claimed
- 60% limit applied to non-cash contribution
- Not applying 0.5% AGI floor to carryforward utilization (2026+)

**Current-year action**:
- Use oldest carryforward first
- Apply correct AGI limit per type
- Apply 0.5% AGI floor (2026+) and 35% bracket cap (2026+) to the utilized amount
- Bunching opportunity evaluation if carryforward is substantial

### Foreign Tax Credit Carryover (§904)

**What it is**: Foreign tax credit exceeding US tax on foreign-source income carries forward 10 years (forward only, no backward).

**Rules**:
- Categorized by income type (passive, general, branch, etc.)
- Per-category limitation
- 10-year forward limit

**Where it appears**:
- Form 1116 (Foreign Tax Credit)
- Schedule B (foreign account disclosure)

**Common errors**:
- Carryforward treated as one bucket when separate by category
- Expiration missed

### General Business Credit Carryover (§39)

**What it is**: General business credits (R&D credit, work opportunity, etc.) exceeding tax liability carry forward 20 years, backward 1 year.

**Common credits that create carryforwards**:
- R&D credit (§41)
- Work Opportunity Tax Credit (§51)
- Small employer health insurance credit (§45R)
- Energy credits (§48, §48E, §45Q)

**Common errors**:
- R&D credit opportunity not evaluated (especially for software/AI companies)
- Energy credits missed on property installations

### AMT Credit Carryover (§53)

**What it is**: AMT paid in a prior year when regular tax was lower creates a minimum tax credit that offsets regular tax in future years.

**Rules**:
- No expiration
- Only offsets regular tax, not AMT again
- Tracks as FIFO generally

**Common errors**:
- Credit not claimed in subsequent low-AMT years
- Lost for estates where AMT was paid on installment-sold items

### §179 Carryforward

**What it is**: §179 expense election limited by business income carries forward indefinitely.

**Rules**:
- Limited to business income (can't create a loss)
- No expiration
- Must be from active trade or business

### Investment Interest Expense Carryover (§163(d))

**What it is**: Investment interest expense exceeding net investment income carries forward.

**Rules**:
- Investment income defined narrowly (interest, non-qualified dividends, short-term gains)
- Qualified dividends and long-term gains NOT investment income unless elected
- Carryforward indefinite

## Entity-level carryforwards

### S Corp NOLs

Entity-level losses pass through to shareholders; no entity NOL remains (except suspended passive losses at entity level in rare cases).

### Partnership NOLs

Same — pass through to partners.

### C Corp NOLs

Stay at entity level; same 80% limitation and indefinite carryforward post-TCJA.

### Passive loss carryforwards at entity level

Rare but possible with C Corps treated as closely held.

### §179 at entity level

Elected at entity level, passes through subject to shareholder/partner business income limit.

## Working with carryforwards in planning

### Prioritize use of expiring credits

Foreign Tax Credit (10 years) and General Business Credit (20 years) can expire. Prioritize using these before they're lost.

### Integrate with current-year strategies

NOL in hand + planning for a high-income year: consider accelerating income that absorbs NOL (Roth conversion, install sale recognition, bonus depreciation deferred).

Capital loss carryforward + appreciated security sales: harvest gains to absorb the carryforward if positions no longer strategic.

Charitable carryforward + DAF: stack new DAF contribution with carryforward in high-income year.

### Client handoff

For new-to-Priceless clients, construct carryforward schedule from scratch using 3-5 years of returns. Present to client as "here are the tax assets you have; here's when they expire; here's how we'll use them."

### Annual maintenance

Update carryforward schedule every year as part of return preparation. Track:
- Which carryforwards were used
- Which carryforwards were added (new year's contributions to the pool)
- Which carryforwards expired
- Remaining balance

This schedule is a Priceless-internal workpaper, not a return attachment, but the discipline prevents loss of client tax assets.

## Update status

File updated 2026-04 with:
- Charitable contribution carryforward: 60% AGI cash limit made permanent by OBBBA
- 2026+ applications: 0.5% AGI floor and 35% bracket cap apply to carryforward utilization
- Other carryforward rules (NOL, AMT, FTC, passive, capital loss, §163(j)) unchanged structurally
- §163(j) coordinate with OBBBA restoration to EBITDA basis (noted in FEDERAL-TAX-COMPUTATION.md)
