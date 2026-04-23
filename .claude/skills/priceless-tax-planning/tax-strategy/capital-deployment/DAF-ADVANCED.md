---
strategy: Donor-Advised Fund (DAF) Advanced Strategies
category: capital-deployment (Operator 8)
authority:
  - IRC §170 (charitable contribution deduction)
  - IRC §170(b)(1)(A) (public charity limits)
  - IRC §4966, §4967 (DAF excise tax rules)
  - IRC §4943 (excess business holdings; applies to DAFs)
  - IRC §4944 (jeopardizing investments)
  - Treas. Reg. §1.170A series
  - Pension Protection Act of 2006 §1231 (DAF rules codification)
  - One Big Beautiful Bill Act (OBBBA), P.L. 119-21 (2025) — 0.5% AGI floor (2026+); 35% bracket cap; non-itemizer above-the-line $1K/$2K (DAF excluded)
  - IRS Notice 2020-36 (anti-abuse for DAFs)
  - IRS Notice 2023-2 (proposed regs on DAF distributions)
framework: operator-8 (Capital Deployment)
eligibility_gate: capital-deployment/CAPITAL-DEPLOYMENT-FRAMEWORK.md
applies_when:
  - client_AGI > $750000 (Capital Deployment tier; advanced DAF strategies)
  - has_significant_charitable_intent: true (ongoing giving, legacy)
  - has_appreciated_non-cash_assets: often drives the strategy (stock, real estate, business interests, crypto)
earliest_actionable_quarter: Any; Q3 typically drives year-end contribution decisions
latest_actionable_quarter: December 15 (buffer for non-cash transfers to complete by Dec 31)
typical_savings_range: $50000 - $500000+ (depends on asset type, AGI, and contribution size)
typical_savings_as_pct_of_contribution: 35-50% combined federal + state + capital gains avoidance (2026+ calculation with OBBBA adjustments)
savings_formula: |
  Advanced DAF contribution value = 
    (federal tax savings on itemized deduction, capped at 35% post-OBBBA)
    + (state tax savings, state-dependent)
    + (capital gains tax avoidance on appreciated asset × [federal LTCG + NIIT + state])
    - (0.5% AGI floor, post-OBBBA 2026+)
  
  Post-OBBBA 2026 calculation for $500K appreciated stock contribution:
    AGI $750K; 35% effective marginal rate (capped from 37%)
    0.5% AGI floor: $3,750 (not deductible)
    Deductible amount: $496,250
    Federal savings: $496,250 × 35% = $173,688
    State savings (varies; Florida $0, California 13.3% = $66K, etc.)
    Appreciated stock basis $50K: avoided cap gain = $450K × 23.8% (LTCG + NIIT) = $107K
    Total federal benefit: $173,688 + $107K = $281K
    (State: $0-$66K+ depending on state)
  
  vs. cash contribution of same $500K:
    Federal savings: $496,250 × 35% = $173,688
    No capital gains avoidance
    Total federal benefit: $173,688
  
  Appreciated stock contribution produces $107K more federal benefit at this scale — the core "DAF advanced" insight.
feasibility: high (widely available; sponsors include Fidelity, Schwab, Vanguard, Community Foundations)
implementation_complexity: low for cash and public stock; medium for non-public assets; high for very unusual assets
audit_risk: low for standard contributions; medium for non-public asset valuations
requires_documentation:
  - DAF account agreement
  - Contribution documentation (broker transfer record for stock; deed for real estate; legal opinion for LLC interests)
  - Form 8283 Section A for non-cash > $500; Section B for non-cash > $5,000 with qualified appraisal
  - Qualified appraisal for non-public assets (stock, real estate, partnership interests, art, crypto with fair value support)
  - Written acknowledgment from DAF sponsor for each contribution
  - Grant recommendation records (for Priceless advisory tracking; not IRS required)
requires_partner_signoff: |
  false (for cash contributions and public stock)
  true (for non-cash > $5,000, especially LLC interests, real estate, business interests, crypto)
  true (for DAF succession planning; multi-generation structuring)
requires_separate_engagement: false (within core engagement) UNLESS engagement involves complex asset donation requiring legal/valuation specialists
typical_separate_engagement_fee: null (Priceless); specialists: $2K-$10K for qualified appraisal of complex assets
compatible_stacks:
  - CHARITABLE-BUNCHING-DAF.md (basic DAF strategy; this file covers advanced extensions)
  - CRT-CRUT.md (CRT distributes to DAF; coordinated structure)
  - CLT.md (grantor CLT followed by DAF; estate planning sequence)
  - QSBS-SECTION-1202.md (contribute QSBS shares to DAF before sale; avoid §1202 cap via gifting)
  - PRIVATE-FOUNDATION.md (DAF as alternative or companion to PF; less compliance)
  - INSTALLMENT-SALE-STRUCTURE.md (installment receivables can be contributed; specialized)
  - COST-SEGREGATION.md (real estate with built-in gain may be contributed before sale)
incompatible_with:
  - Non-qualified charities (DAF must grant to §170(b)(1)(A) public charities typically)
  - Private benefit transactions (cannot distribute to donor's personal interests)
prerequisites:
  - Charitable intent (client has genuine philanthropic goals; not just tax motivation)
  - Sufficient AGI and gift amount for the contribution to produce meaningful tax benefit
  - Asset selection (for appreciated asset contributions: identify which lots, establish basis)
industries_best_fit:
  - software-ai-companies (stock compensation creates appreciated positions)
  - investment-firms (concentrated equity positions in RIA's own firm or client holdings)
  - real-estate-owner (appreciated real estate with low basis)
  - doctors-medical (steady high income plus accumulated appreciated investments)
  - any-high-AGI (charitable intent is the core filter, not industry)
industries_not_applicable: none (universally applicable when client has charitable intent)
state_specific_considerations: |
  Most states conform to federal DAF treatment.
  California conformity with OBBBA changes being evaluated; state implementation of 0.5% floor and 35% cap may lag federal.
  New York and other high-tax states: state itemized deduction interaction needs per-engagement review.
path_b_compensation_tier: 0 (DAF sponsor selection is neutral; Priceless does not accept compensation from sponsors; firm may recommend specific sponsors based on client fit, but no compensation flow)
---

# Donor-Advised Fund (DAF) Advanced Strategies

Basic DAF contribution strategy is covered in `CHARITABLE-BUNCHING-DAF.md`. This file covers the advanced extensions that matter for Full-Wealth clients:

1. **Non-cash appreciated asset contributions** (beyond publicly-traded stock)
2. **Multi-generational succession planning** through the DAF
3. **DAF + CRT/CLT integrated structures**
4. **DAF-to-DAF transfers** (for strategic reorganization)
5. **Complex grant-making coordination**
6. **Business interest contributions** (S Corp stock, LLC units)

## The core insight for Full-Wealth clients

At AGI > $750K, the highest-value DAF contribution is almost NEVER cash. It's:

- **Appreciated publicly-traded stock** (avoid capital gains + deduction at FMV)
- **Pre-sale business interests** (contribute before sale to avoid recognition of built-in gain)
- **Real estate with built-in gain** (specialized but high-value when available)
- **Pre-IPO shares** (QSBS stock timing matters)
- **Cryptocurrency** (if appreciated; still relatively new territory but established framework)

The combined benefit of (a) FMV deduction + (b) capital gains avoidance + (c) no reduction for 0.5% AGI floor on the avoidance side makes appreciated-asset donation substantially more valuable than cash. For Full-Wealth clients sitting on appreciated positions, this is the flagship DAF strategy.

## Strategy 1: Appreciated publicly-traded stock (most common)

### Mechanic

1. Client identifies specific lots of publicly-traded stock with long-term holding period and large built-in gain
2. Client transfers shares (not cash) to DAF sponsor account
3. DAF sponsor typically liquidates promptly (no tax event — DAF is charity)
4. DAF credits client's account with FMV at transfer date
5. Client deducts FMV on Schedule A
6. Client avoids capital gains tax on built-in gain

### Quantification example (2026)

Client has 500 shares of Apple purchased 2010 at basis $50/share. 2026 FMV $300/share.
- Cost basis: $25,000
- FMV: $150,000
- Built-in gain: $125,000

Cash contribution alternative:
- Sell 500 shares: $125,000 gain × 23.8% (LTCG + NIIT) = $29,750 capital gains tax
- Net proceeds after tax: $120,250
- Contribute cash: $120,250
- Federal deduction × 35% = $42,088
- Total: $42,088 federal benefit

Direct stock contribution:
- Transfer stock to DAF: $150,000 FMV deduction
- Federal deduction × 35% = $52,500 (less 0.5% AGI floor impact)
- No capital gains triggered
- Total federal benefit: approximately $52,500 (vs. $42,088 cash) + $29,750 capital gains avoided
- Net advantage over cash: approximately $40,000

For concentrated equity positions (founder stock, stock comp vesting, long-held positions), this is a recurring annual strategy.

### Practical considerations

- **Lot selection**: for tax efficiency, contribute highest-gain lots. For client preferring to retain low-basis (step-up-at-death candidates), contribute mid-basis lots.
- **Timing**: transfer before December 31 for current-year deduction. DAF sponsor typically needs 2-3 weeks for public stock transfer — start by early December.
- **DAF sponsor liquidity**: most major sponsors (Fidelity, Schwab, Vanguard) handle public stock routinely
- **Covered securities**: broker reports basis; reconciliation straightforward
- **Wash sale considerations**: if client plans to repurchase similar stock, wash sale doesn't apply to the donation itself (no loss), but could affect other parts of portfolio

## Strategy 2: Pre-sale business interest contribution

### Mechanic

Client owns S Corp stock, LLC interest, or partnership interest with significant appreciated value. Business sale in motion. Alternative to selling-then-donating:

1. Pre-sale, contribute some portion (e.g., 20%) of ownership interest to DAF
2. DAF becomes owner of that portion
3. Business sale proceeds: client receives 80%, DAF receives 20%
4. DAF liquidates its portion (no tax to DAF; charity)
5. Client deducts FMV of contributed interest (appraised)
6. Client avoids capital gains on contributed portion

### The value proposition

Without pre-sale contribution:
- Sell 100% of business; recognize full gain
- Pay capital gains tax on full gain
- Donate some portion of after-tax proceeds

With pre-sale contribution:
- Donate 20% pre-sale; no gain recognized on that portion
- Sell 80%; recognize gain only on 80%
- DAF sells its 20% — no tax to charity
- FMV deduction on 20% contributed

Example: $10M business sale, $500K basis
- Without contribution: gain $9.5M; tax (23.8%) = $2,261,000
- With 20% pre-sale contribution: sell 80% ($8M proceeds, $400K basis), gain $7.6M; tax = $1,808,800. Contribute 20% ($2M FMV). FMV deduction × 35% = $700K. Saved: $452K from tax reduction + $700K deduction = $1.15M
- Net advantage over straight sale-and-donate pattern: ~$150K-$400K (depending on deduction utilization)

### Execution requirements

- **Qualified appraisal** for the contributed business interest (§170(f)(11))
- **Pre-existing transaction understanding** avoided (don't contribute after sale price locked; appearance of avoiding recognition)
- **DAF sponsor capability**: most major sponsors accept LLC/S Corp interests but evaluate case-by-case
- **Partner signoff REQUIRED** — this is complex execution with audit sensitivity
- **Sale timing discipline**: contribution must precede sale; ideally weeks ahead
- **Estate planning coordination**: contributed portion is out of estate

### Audit sensitivity

The "pre-arranged sale" doctrine is the main risk. If IRS views contribution and sale as step-transaction where sale was pre-negotiated before contribution, may reject the charitable deduction and treat client as constructive seller of the contributed portion.

Key factors supporting defensible position:
- Contribution date precedes letter of intent (LOI) or binding agreement
- DAF receives real ownership (voting rights, economic interest)
- DAF makes its own decision to sell
- Contribution amount not conditioned on sale outcome

## Strategy 3: Real estate appreciated asset contribution

### Mechanic

Client owns real estate with substantial built-in gain (long held, appreciated market). Alternative to selling:

1. Identify specific property
2. Contribute to DAF (requires qualified appraisal)
3. DAF holds, sells, or uses the property
4. Client deducts FMV (subject to 30% of AGI limit for appreciated property)
5. Avoid capital gains on appreciation

### Considerations

- **Qualified appraisal required** ($5K+ contribution threshold, but real estate appraisal standard practice regardless)
- **DAF sponsor capability**: some sponsors will not accept real estate (operational complexity); community foundations often more flexible
- **Timing of deed transfer**: must be complete by Dec 31 for current-year deduction (cash contributions have no calendar issue; real estate title transfer is more involved)
- **Unrelated Business Income (UBI)**: if contributed property generates rental or business income while DAF holds, UBI rules apply
- **§1031 interaction**: contribution is NOT a like-kind exchange; cannot combine

### 30% AGI limit

Appreciated real estate donations to public charity (including most DAFs) are subject to 30% of AGI limit (not 60% for cash). For a $750K AGI client:
- 30% × $750K = $225K deductible in year of contribution
- Excess carries forward 5 years

For very large real estate contributions ($1M+ FMV), multi-year deduction utilization is typical.

## Strategy 4: Cryptocurrency contribution

### Mechanic

Cryptocurrency treated as property for tax purposes. Contribution rules mirror stock:

1. Identify specific lots of appreciated crypto (long-term holding period preferred)
2. Transfer to DAF sponsor
3. Sponsor liquidates
4. Client deducts FMV (subject to 30% of AGI limit — treated as appreciated capital asset)
5. Avoid capital gains

### DAF sponsor crypto capability

- **Fidelity Charitable**: accepts Bitcoin, Ethereum directly; convenient for tech-heavy clients
- **Schwab Charitable**: accepts select cryptocurrencies
- **Vanguard Charitable**: cash only traditionally; evaluate current status
- **Specialty DAFs (e.g., Endaoment, The Giving Block)**: crypto-native, accept wide range of tokens

### Documentation

- **Qualified appraisal** for crypto contributions > $5K (required per §170(f)(11))
- **Transfer documentation**: wallet-to-wallet transaction record
- **Fair market value methodology**: exchange price at time of transfer, documented with screenshots/API records
- **Holding period proof**: first acquisition date (exchange records or wallet history)

### Risks

- Valuation volatility — transfer FMV may differ from Dec 31 FMV
- Emerging area; IRS expected to issue more guidance
- Less mainstream than stock; documentation hygiene crucial

## Strategy 5: Multi-generational succession

### Mechanic

Client establishes DAF with intention that it continues after death:

1. Client is primary advisor during life
2. Client designates **successor advisors** (spouse, then children, etc.)
3. DAF continues perpetually (or terminated under client-specified rules)
4. Grants from DAF continue per family's ongoing recommendations

### Succession structure options

**Option 1: Single successor chain**
- Spouse → Children → Grandchildren
- Sequential advisory control
- Simple but creates family negotiation about joint giving

**Option 2: Family advisory committee**
- DAF advised by committee of family members
- Majority vote for grants
- More deliberate but requires family agreement

**Option 3: Termination and distribution to new DAFs**
- Upon primary advisor's death, DAF balance distributed to separate DAFs for each child
- Each child runs their own DAF going forward
- Clean separation; each branch makes own decisions

**Option 4: Terminal charitable distribution**
- Upon primary advisor's death, DAF balance distributed to named charities
- No ongoing family involvement
- Cleaner estate but loses multi-generational engagement

### Estate planning implications

- DAF is irrevocable; contributed funds are NOT in decedent's estate
- Successor advisor role does NOT create estate inclusion
- Family members retain advisory role but no legal ownership
- Decedent's estate tax picture: DAF assets excluded (§170 deduction at time of contribution reduced estate accordingly)

### Coordination with estate attorney

- Will and trust documents should reference the DAF
- Successor advisor designations maintained at DAF sponsor
- Family communication about intent prevents post-death disputes

## Strategy 6: DAF-to-DAF transfers

### Use cases

- Consolidating multiple DAFs (client opened accounts at different sponsors over time)
- Switching sponsors (fee comparison, service quality, investment options)
- Strategic restructuring (converting family DAF to multiple individual DAFs)

### Mechanic

- DAF sponsor A makes grant to DAF sponsor B's sponsoring organization
- Technically a grant, not a transfer per se
- Receiving DAF opens account for the same advisor(s)
- No tax event (both are qualified charities)

### Considerations

- Sponsor policies differ on DAF-to-DAF grants
- Receiving sponsor may want initial contribution documentation
- Advisory rights may reset at new sponsor (ensure continuity)
- Timing: typically 2-4 weeks per side

## Strategy 7: Integrated DAF + CRT structure

### The pattern

1. Client establishes Charitable Remainder Trust (CRT) — see `CRT-CRUT.md`
2. CRT remainder beneficiary designation: DAF (instead of specific charity)
3. Upon CRT termination (end of lifetime or term years), remainder flows to DAF
4. DAF continues perpetually with family advisory

### Why this pattern

- CRT provides income stream to donor during life (typically 5-7% annually)
- CRT contribution creates partial current deduction (present value of remainder interest)
- Upon termination, remainder preserves charitable intent without forcing immediate charity selection
- DAF gives family ongoing involvement in charitable grants

### Integration considerations

- **CRT must be irrevocable**: designation of DAF as remainder beneficiary is part of CRT document
- **DAF succession**: advisory rights to DAF assets should match family estate plan
- **Tax efficiency**: CRT provides tax deferral during lifetime; DAF preserves ongoing deduction flexibility

### Coordinate with estate attorney

- CRT document drafted by estate counsel
- Advisory designation at DAF sponsor maintained
- Overall estate plan integrated

## Strategy 8: DAF + QSBS coordination

### Pre-exit QSBS gifting

Client holds QSBS stock approaching exit. §1202 exclusion capped at $15M per taxpayer (post-OBBBA).

Pre-exit, contribute appreciated QSBS shares to DAF:
- Transfer at FMV (qualified appraisal for pre-IPO)
- No capital gain recognition (charity)
- FMV deduction
- Client retains residual QSBS position (still within $15M cap for remaining shares)

Effective strategy when QSBS holding exceeds cap:
- Example: Client holds QSBS with $25M FMV, $500K basis
- Cap allows exclusion of only first $15M of gain
- Contribute $7M of QSBS pre-exit to DAF → $7M FMV deduction, no gain recognized
- Remaining $18M QSBS: up to $15M excluded at exit ($3M residual gain)
- Alternatively: all $18M excluded if pre-OBBBA cap or state cap allows

### Timing considerations

- Contribute BEFORE liquidation event triggers (pre-arranged sale risk)
- Gifts must have economic substance (DAF receives real ownership, not sham)
- Qualified appraisal reflecting pre-IPO / pre-sale valuation

## Post-OBBBA and current law impact

### Direct OBBBA changes (major)

**0.5% AGI floor (effective 2026)**: First 0.5% of AGI in itemized charitable deductions is non-deductible. For $750K AGI: $3,750 floor. Reduces but does not eliminate DAF value.

**35% bracket cap (effective 2026)**: Charitable deduction valued at maximum 35%, not 37%. For top-bracket clients, 2 percentage points of value reduction.

**Non-itemizer above-the-line $1K/$2K (DAFs EXCLUDED)**: Non-itemizers get small above-the-line charitable deduction. DAFs specifically excluded. Doesn't affect DAF strategy for itemizers (the typical client), but reminder that DAF isn't the vehicle for non-itemizing clients' small giving.

**60% AGI cash limit made permanent**: No change from prior; just removed sunset.

### Strategic implications

1. **Appreciated-asset donation becomes MORE valuable relative to cash**: the 0.5% AGI floor and 35% cap reduce cash contribution value; capital gains avoidance on appreciated assets partially compensates. Favor appreciated asset strategies over cash in bunch years.

2. **Bunching analysis shifts**: `CHARITABLE-BUNCHING-DAF.md` covers the refined math. For Full-Wealth clients often itemizing anyway, the bunching motivation is weaker than for moderate-income clients.

3. **QCD becomes relatively more valuable for age 70½+ clients**: QCD avoids 0.5% floor and 35% cap (and also bypasses AGI increase). For eligible retirees, QCD > DAF for smaller direct giving. DAF still wins for larger amounts or non-cash assets.

4. **DAF vs. private foundation analysis shifts**: DAF's simplicity gains relative value compared to private foundation's compliance burden, absent specific foundation needs. See `PRIVATE-FOUNDATION.md` comparison.

## Interaction with other strategies

### Stacks with CHARITABLE-BUNCHING-DAF

`CHARITABLE-BUNCHING-DAF.md` covers basic bunching; this file covers advanced asset contributions. In practice, Full-Wealth clients often combine:
- Base giving via DAF (appreciated assets)
- Bunching for threshold management (not strictly needed when always itemizing)

For $750K+ AGI client who always itemizes due to SALT + mortgage, bunching motivation is lower; advanced asset donation becomes primary DAF value.

### Stacks with QSBS-SECTION-1202

Covered above (Strategy 8).

### Stacks with CRT-CRUT

Covered above (Strategy 7).

### Interaction with PRIVATE-FOUNDATION

DAFs and private foundations are alternative charitable structures. Comparison:

| Feature | DAF | Private Foundation |
|---|---|---|
| Setup cost | $0-$1,000 | $5,000-$15,000 |
| Ongoing compliance | Sponsor handles | Annual Form 990-PF; 5% minimum distribution; audit |
| Annual admin | Minimal | Substantial |
| Investment control | Sponsor's menu | Full flexibility |
| Family involvement | Successor advisors | Board/officers |
| Grant-making | Advisor recommends; sponsor approves | Full control |
| Anonymity | Available | Limited (990-PF public) |
| Minimum size practical | $25K | $1M-$5M |
| Investment returns captured | Sponsor's fund performance | Market rates |

For most Full-Wealth clients without specific need for direct control or anonymity-focused giving, DAF is simpler and often sufficient.

Private foundation makes sense when:
- Significant ongoing giving > $250K/year
- Family wants direct control and governance
- Complex grant-making or scholarship structures
- Business-related foundation activity
- $2M+ endowment makes compliance economics favorable

### Stacks with COST-SEGREGATION (real estate)

Real estate with cost seg losses + real estate donation: if client has carried-forward passive losses from cost seg, donation of the property doesn't release the losses. Coordinate.

For real estate donation, consider whether depreciation recapture applies (ordinary income portion of gain). If yes, contribution may be valued at basis (not FMV) for ordinary-income portion.

### Stacks with ROTH-CONVERSION-PLANNING

Year of large DAF contribution + Roth conversion:
- DAF contribution reduces AGI (itemized deduction)
- Roth conversion increases AGI
- Net AGI impact manages §199A, IRMAA, other AGI-sensitive items
- Pair for efficient bracket utilization

## Audit posture

### Risk profile: low for cash and public stock; medium for non-cash; high for unusual assets

- **LOW** for cash contribution + acknowledgment + Schedule A itemization
- **LOW** for publicly-traded stock transfer + broker confirmation + DAF sponsor acknowledgment
- **MEDIUM** for non-public stock, LLC interests (requires appraisal)
- **MEDIUM** for real estate (requires appraisal, deed transfer documentation)
- **HIGH** for unusual assets (art, collectibles, wine — appraisal standards vary)
- **HIGH** for cryptocurrency without robust valuation methodology
- **CRITICAL** for pre-arranged sale doctrine scenarios (contribute-then-sell pattern)

### Audit trigger scenarios

- Large non-cash contribution disproportionate to prior years
- Form 8283 Section B without qualified appraisal attached
- Pre-sale contribution of business interest with sale closing soon after
- Cryptocurrency contribution without documented fair value methodology
- Donation of property that generated UBI while in DAF
- Multiple DAF contributions at year-end (possible step-transaction or bunching concerns)

### Defense considerations

- **Contemporaneous written acknowledgment** from DAF sponsor for every contribution
- **Form 8283 Section B + qualified appraisal** for non-cash > $5,000
- **Broker confirmations** for stock transfers (date of transfer, FMV, holding period)
- **Deed transfer records** for real estate
- **Crypto transaction records** with FMV documentation at transfer moment
- **Pre-sale doctrine defense**: contribution before LOI; DAF receives real ownership; no pre-arranged outcome
- **Qualified appraisal** prepared by disinterested appraiser; complete per §1.170A-17

### Statute of limitations

- Standard 3-year §6501 limitation
- §6501(e) 6-year if understatement > 25%
- No statute if fraud (§6501(c))
- Excess contribution carry-forwards: preserved basis/documentation through 5-year window

## Deliverable points (documentation skill handoff)

When DAF advanced strategy appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Contribute [specific assets/amount] to [DAF sponsor] by December 31, 2026. Contribute appreciated [stock/real estate/business interest] rather than cash for combined FMV deduction + capital gains avoidance."
- **Why quantification**: Federal deduction × 35% (post-OBBBA cap) + capital gains avoided at 23.8% + state impact. Explicit comparison: asset contribution vs. equivalent cash contribution.
- **Trade-off statement**: Asset irrevocably transferred to DAF (no recovery). Qualified appraisal required for non-cash > $5K (cost $2K-$10K depending on asset). DAF sponsor fees (typically 0.6-1.0% annually on account).
- **Action items**: 
  - Asset selection and identification
  - Qualified appraisal (if required)
  - DAF sponsor selection and account opening
  - Transfer execution (timing-critical for year-end)
  - Form 8283 preparation
  - Succession/advisory setup if applicable
- **Deadline**: December 31, 2026; Dec 15 buffer for non-cash transfers

### In the Excel model

- **Tax Projection tab**: Itemized deduction in Schedule A block; cap gains avoidance shown in capital gains section with offsetting entry
- **Strategies tab**: row for "DAF Appreciated Asset Contribution" with federal savings + capital gains avoided + state total
- **Actions tab**: Asset selection → appraisal → DAF setup → transfer execution → acknowledgment → Form 8283
- **Notes tab**: DAF sponsor selected; asset type; appraisal methodology; succession plan; estate plan coordination

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — appreciated asset contribution > $5K; qualified appraisal secured?]`
- `[REVIEW: framing — pre-sale business interest contribution; LOI timing verified?]`
- `[REVIEW: scope — estate planning coordination for succession designation?]`
- `[REVIEW: quantification — state tax treatment; California non-conformity evaluated?]`
- `[REVIEW: authority — DAF sponsor capability for this asset type verified?]`

### Template language

For Full-Wealth tier client with appreciated stock:

> **Contribute 500 shares of Apple stock to Fidelity Charitable by December 31, 2026**. Your long-term holding (purchased 2010, current FMV $150,000, basis $25,000) provides the ideal structure: FMV deduction of $150,000 at the federal level, plus avoiding $29,750 in capital gains tax you'd otherwise pay on the built-in gain if you sold for cash then donated.
>
> Total federal benefit: $52,500 itemized deduction × 35% post-OBBBA cap — $52,500. Plus $29,750 capital gains avoided. Net $82,250 federal. State (Florida): $0.
>
> The $150,000 enters the Fidelity Charitable account and we continue your current grant recommendations to [charities] over the coming years. Successor advisory set up for [spouse → children]. Priceless handles Form 8283 and broker transfer instructions.

## Update status

| Verification | Date | Source |
|---|---|---|
| OBBBA 0.5% AGI floor (2026+) | Verified 2026-04 | P.L. 119-21 §70112 |
| OBBBA 35% bracket cap (2026+) | Verified 2026-04 | P.L. 119-21 §70112 |
| OBBBA non-itemizer above-the-line (DAFs excluded) | Verified 2026-04 | P.L. 119-21 §70111 |
| OBBBA 60% AGI cash limit permanent | Verified 2026-04 | P.L. 119-21 §70111 |
| §4966, §4967 DAF excise rules | Unchanged 2026-04 | Statutory |
| §170(f)(11) qualified appraisal threshold ($5K non-cash; $500K+ for related-party restrictions) | Unchanged 2026-04 | Statutory |
| Appreciated asset 30% AGI limit (appreciated capital gain property to public charity) | Unchanged 2026-04 | §170(b)(1)(C) |
| Pre-arranged sale doctrine (per case law) | Applicable 2026-04 | Humane Society v. Comm'r; various |
| IRS Notice 2023-2 proposed regs on DAF | Monitor 2026-04 | IRS |

**Last full review**: 2026-04 (Sprint 7 initial build)

**Next review trigger**: IRS final regulations on DAF distributions (post-Notice 2023-2); state conformity with OBBBA floor/cap changes; QSBS post-OBBBA regulations affecting pre-exit gifting strategy
