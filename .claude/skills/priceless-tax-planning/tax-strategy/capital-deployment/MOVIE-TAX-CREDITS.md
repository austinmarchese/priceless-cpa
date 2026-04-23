---
strategy: Movie Tax Credit Purchases (State Film Tax Credits)
category: capital-deployment (Operator 8)
authority:
  - State film tax credit statutes (vary by state)
  - IRC §212 (expenses of producing income - if treated as investment)
  - IRC §1001 (gain/loss on sale of tax credits — generally capital gain/loss)
  - Rev. Rul. 2003-59 (state tax credit as property)
  - Ginsberg v. Commissioner, 130 TC 88 (2008) (state tax credit purchase tax treatment)
  - One Big Beautiful Bill Act (OBBBA), P.L. 119-21 (2025) — no direct amendment; state credits unchanged
framework: operator-8 (Capital Deployment)
eligibility_gate: capital-deployment/CAPITAL-DEPLOYMENT-FRAMEWORK.md
applies_when:
  - client has significant STATE tax liability in film-credit-offering state
  - client has ability to purchase credits at discount (typical 85-92 cents on the dollar)
  - client in state where credits are transferable and salable
  - client understands this is STATE tax strategy only (no federal benefit)
earliest_actionable_quarter: Q3-Q4 (aligning with state tax year-end)
latest_actionable_quarter: Before state tax filing deadline
typical_savings_range: $10000 - $100000 (varies with state tax liability and discount)
typical_savings_as_pct: typically 8-15% of state tax liability offset
savings_formula: |
  Movie tax credit purchase math:
    Buy $100,000 of state tax credits for $88,000 (12% discount typical)
    Apply credits to offset $100,000 of state tax liability
    Out of pocket: $88,000 vs. $100,000 paid if no credit
    Savings: $12,000 per $100,000 of state tax liability
  
  Federal treatment of purchase transaction:
    Discount on purchase may create capital gain at credit application (credit used = sale to state)
    Rev. Rul. 2003-59 / Tempel v. Commissioner: credits are property
    Character: typically capital gain (short-term if held < 1 year)
    Reporting: Form 8949 / Schedule D
  
  Net federal impact:
    $12,000 gain × 37% ordinary (short-term) = $4,440 federal tax
    OR if long-term held > 1 year: 20% + 3.8% = 23.8% = $2,856 federal tax
    Net benefit after federal tax: $7,560 - $9,144 per $100K credit
  
  Compared to just paying the state tax:
    Federal state tax deduction limited by SALT cap ($40,400 post-OBBBA)
    Credit purchase may preserve SALT cap room
    Net cash flow benefit: $7,500 - $9,000 per $100K of state tax
  
  This is NOT a tax shelter — it's a straightforward discount purchase with gain recognition
feasibility: high (well-established state credit markets in major production states)
implementation_complexity: low-medium (credit broker handles; verification of credit validity)
audit_risk: low for buyer (credits themselves are verified by state)
requires_documentation:
  - Credit purchase agreement
  - Seller's certification (often required by state)
  - State-issued credit certificate (or transfer confirmation)
  - State tax filing using credit
  - Federal Form 8949 reporting gain
  - Broker 1099 (if applicable)
requires_partner_signoff: true (verify broker legitimacy; verify state credit applicability to specific client's tax situation)
requires_separate_engagement: false (within Priceless engagement)
typical_separate_engagement_fee: null (Priceless); broker fees typically 2-5% of credit amount
compatible_stacks:
  - PTET-ELECTION-BY-STATE.md (different state tax strategy; evaluate both)
  - CHARITABLE-BUNCHING-DAF.md (state income tax management coordinated)
  - State-level strategies generally
incompatible_with:
  - Clients in states without state income tax (Florida, Texas, Washington, Tennessee, etc.)
  - Clients in states without film credit transfer programs
  - Investment-style "movie fund" partnerships (see PROMOTER-PATTERNS-PARTNER-DEFENSE.md)
prerequisites:
  - State tax liability in a film-credit state
  - Credit broker relationship or access
  - Understanding that this is pure state tax strategy, not federal tax shelter
industries_best_fit:
  - any client with significant state tax liability in film-credit states
  - particularly high-income states: Georgia, Louisiana, New York, California (in limited ways), New Mexico, Illinois
industries_not_applicable:
  - Florida residents (no state income tax)
  - Texas residents (no state income tax)
  - Low-state-tax-liability clients (economics don't work below $50K+ of state liability)
state_specific_considerations: |
  Active film credit programs (as of 2026):
  - Georgia: robust transferable credits; 20-30% of production budget; active secondary market
  - Louisiana: transferable; 25-40% of in-state spending
  - New York: partially transferable
  - California: not generally transferable (for traditional productions)
  - New Mexico: transferable with restrictions
  - Illinois: transferable
  - Pennsylvania: transferable
  - Other states: varying programs
  
  Key variables by state:
  - Transferability (essential for purchase)
  - Discount market (active secondary market vs. direct negotiation)
  - Certification process (state verifies validity)
  - Ordering rules (how credits apply to state tax)
  - Expiration/carry-forward
  
  Georgia market is most developed; others vary in depth
path_b_compensation_tier: 0 (broker markets; Priceless does not take compensation; neutral referrals)
---

# Movie Tax Credit Purchases

**IMPORTANT SCOPE CLARIFICATION**: This file covers the LEGITIMATE strategy of purchasing state film tax credits from production companies at a discount, for application against state tax liability. It does NOT cover:

- §181 film investment partnerships (distinct federal deduction strategy; higher complexity; different risk profile)
- Syndicated movie investment partnerships (many IRS Dirty Dozen patterns)
- Any promoted "movie tax shelter" products

For those patterns, see `PROMOTER-PATTERNS-PARTNER-DEFENSE.md`.

## The basic mechanic

1. Production company earns state film tax credit from qualifying in-state spending
2. Credit may exceed company's state tax liability (common — production company often has minimal state tax liability)
3. Company sells credit at discount to buyer with state tax liability
4. Buyer applies credit to offset state tax
5. State treats credit as paid; buyer's state tax liability reduced

### Example (Georgia)

Film production spends $10M in Georgia. Qualifies for 30% tax credit = $3M Georgia credit.
Production company has $0 Georgia tax liability itself.
Company sells $3M credit to broker at $2.55M (85 cents on dollar).
Broker sells $100K slices at 89 cents (net broker margin).
Individual buyer with $100K Georgia tax liability buys $100K credit for $89,000.
Applied to Georgia return; state tax obligation satisfied.

**Buyer saves $11,000 per $100K of Georgia tax** (minus federal tax consequences, below).

## Federal tax treatment

Not as clean as just paying 89 cents for 100 cents of tax relief. Federal implications:

### The credit purchase is property acquisition

Per Rev. Rul. 2003-59 and Ginsberg v. Commissioner: state tax credits are property for federal tax purposes.

### When credit is applied to state tax: potential sale

Applying the credit effectively "uses" it. Treated as transfer/sale at face value, with basis equal to purchase price.

- Amount realized: face value ($100K)
- Basis: purchase price ($89K)
- Gain: $11K

### Character of gain

- Short-term if held < 1 year: ordinary rate up to 37%
- Long-term if held > 1 year: long-term capital gain rate 20% + 3.8% NIIT = 23.8%

Typical credit purchase: held < 1 year (applied to current tax year) → short-term gain

### Net federal impact

For $100K credit purchased at $89K:
- State savings: $11K
- Federal tax on $11K gain (short-term at 37%): $4,070
- **Net benefit: $6,930 per $100K of state tax**

For credit held > 1 year and applied to subsequent year:
- State savings: $11K
- Federal tax on $11K gain (LTCG at 23.8%): $2,618
- **Net benefit: $8,382 per $100K**

Long-term treatment creates meaningfully better result.

## State treatment variables

### Transferability

Critical first test: does the state allow credit transfer?

- **Fully transferable**: Georgia, Louisiana, Illinois, many others
- **Partially transferable**: New York (specific restrictions)
- **Not transferable**: California (for most productions)

If not transferable in state: no market for credits; strategy unavailable.

### Secondary market depth

Some state markets have active secondary markets with many buyers and sellers. Georgia is most developed. Other states have thinner markets with potentially wider bid-ask spreads.

More developed market = better pricing for buyer (smaller discount paid).

### State certification

Most states require:
- Production company's certification that credit is valid
- State-issued credit certificate
- Documentation of transfer

Without proper state certification: credit may be disallowed on state return.

### Ordering rules

Some states have rules about order of credit application:
- Priority 1: certain refundable credits
- Priority 2: film credits
- Priority 3: other credits

Proper sequencing on state return preserves full value.

### Expiration and carry-forward

Some credits have expiration dates or carry-forward limits. Purchase timing relative to intended use year matters.

## Broker selection (partner-signoff critical path)

Credit purchase involves some counterparty risk. Partner vets brokers:

### Criteria

- **Established track record**: years in credit market; volume transacted
- **Reference checks**: other CPA firms / buyers
- **Transparency**: pricing methodology; seller identification
- **Proper state registration**: many states license credit brokers
- **Escrow arrangements**: credit verification before buyer payment

### Red flags

- Deep discounts (below 80 cents on dollar without clear reason) — potentially invalid credit
- Opaque sellers
- Requests for upfront payment before state certification
- Unlicensed brokers in licensing states
- Bundled with other "investment" pitches

## When credit purchase makes sense

**All should be true**:

- Client has state tax liability in credit-active state
- State tax liability meaningful (ideally $50K+)
- Broker vetted by Priceless
- Credit purchase net of federal tax still produces benefit
- Timing aligned with state tax year

**When it doesn't**:

- Client has no state tax liability
- Client in state without transferable credits
- Federal tax impact erodes benefit
- Broker not vetted
- Small amounts where transaction costs dominate

## Post-OBBBA and current law impact

### No direct OBBBA effect

OBBBA did not amend state film tax credits (state-level statutes) or federal treatment of credit purchases.

### Indirect OBBBA impacts

**SALT cap $40,400 (2026)**: Credit purchase may preserve SALT cap room by reducing direct state tax payment. If client pays $100K state tax → SALT cap limits deduction to $40,400. With $100K credit → no direct state tax paid → no SALT impact → more federal itemized capacity for other deductions.

This is the INDIRECT federal benefit of state credit purchase beyond the direct discount.

### PTET coordination

See `PTET-ELECTION-BY-STATE.md`. For S Corp / partnership clients:
- PTET election: business pays state tax; federally deductible
- Credit purchase: offsets owner's personal state tax

Not mutually exclusive but optimized together. PTET addresses business-level state tax; credit purchase addresses personal-level state tax.

## Interaction with other strategies

### Stacks with PTET-ELECTION-BY-STATE

For multi-state entrepreneurs:
- PTET at entity level
- Film credit purchase at individual level
- Combined state tax optimization

### Stacks with CHARITABLE-BUNCHING-DAF

Year with significant state tax reduction via credit purchase → AGI management combined with charitable bunching.

### Independent of federal strategies

Credit purchase is pure state tax strategy. Federal strategies (QOZ, DAF, etc.) operate independently.

### Non-compatibility with §181 investment

Different strategy entirely. §181 investment in production company creates federal deduction but different risk/compliance profile. Not covered in this file.

## Audit posture

### Risk profile: low for standard credit purchase from vetted broker

- **LOW** when credit properly state-certified, purchase documented, Form 8949 reporting correct
- **MEDIUM** when broker chain unclear
- **HIGH** when credit validity in question (state rejects)

### Audit trigger scenarios

- Credit disallowed by state (production failed to meet requirements)
- Federal Form 8949 gain reporting error
- SALT deduction interaction errors
- Credit held across multiple years with treatment inconsistencies

### Defense considerations

- **State credit certificate**: retain original
- **Purchase agreement**: with broker and underlying seller
- **State tax filing using credit**: showing proper application
- **Form 8949 (Schedule D)**: gain properly reported
- **Federal basis calculation**: purchase price + transaction costs

### State-level audit

States audit credit programs more than federal:
- Production company verification
- Spending test compliance
- Transfer documentation
- Apportionment rules

Individual buyer typically not audited for credit validity (state verified at issuance). Buyer's exposure: if underlying credit is retroactively invalidated (rare), state may reject.

## Deliverable points (documentation skill handoff)

When movie tax credit purchase appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Purchase $[X] of [state] film tax credits at [Y]% discount ($[Z] cost). Apply against 2026 [state] tax liability. Net after federal tax impact: $[W] benefit."
- **Why quantification**: State tax saved - purchase price - federal tax on recognition = net benefit. Show calculation.
- **Trade-off statement**: Federal gain recognition reduces benefit. Short-term vs. long-term holding affects net. Broker verification required. Credit validity risk (minor).
- **Action items**:
  - Broker selection (from vetted roster)
  - Credit purchase transaction
  - State tax filing using credit
  - Federal gain reporting on Form 8949
- **Deadline**: Per state tax year-end timing

### In the Excel model

- **Tax Projection tab**: State tax offset by credit; federal gain on Form 8949 block
- **Strategies tab**: row for "State Film Tax Credit" with net benefit
- **Notes tab**: Broker identity; credit source (production); state certification

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — broker on vetted roster?]`
- `[REVIEW: scope — client's state has active credit market?]`
- `[REVIEW: quantification — federal tax on gain reducing benefit; calculated?]`
- `[REVIEW: framing — this is credit PURCHASE, not §181 investment or shelter structure?]`

### Template language

> **Purchase $150,000 of Georgia state film tax credits at 11% discount ($133,500 cost)**. Apply against your 2026 Georgia tax liability of $150,000. Net state tax saved: $16,500.
>
> **Federal impact**: Credit recognized at face value when applied; $16,500 short-term capital gain. Federal tax at 37%: $6,105.
>
> **Net benefit**: $10,395 (cash flow reduction after federal tax).
>
> **Additional benefit**: Your Georgia tax paid via credit preserves SALT cap room. If your direct state tax payment would have been $100K (SALT-capped at $40,400 deductible), your credit-paid $100K doesn't count against SALT cap — you retain room for property tax and other SALT items.
>
> [Broker Name] on Priceless vetted roster; credit certificates delivered upon purchase completion.

## Update status

| Verification | Date | Source |
|---|---|---|
| Rev. Rul. 2003-59 credit treatment | Unchanged 2026-04 | IRS |
| Ginsberg v. Commissioner | Unchanged 2026-04 | Tax Court |
| State film credit programs (varies by state) | Verify per-state quarterly | State statutes |
| OBBBA non-amendment | Verified 2026-04 | P.L. 119-21 full text |
| SALT cap interaction | Verified 2026-04 | §164(b)(6)(B); OBBBA indexing |
| Federal Form 8949 reporting | Current 2026-04 | IRS |
| Broker roster (Priceless internal) | Rolling | Firm internal |

**Last full review**: 2026-04 (Sprint 7 — initial build)

**Next review trigger**: State film credit program changes (states periodically revise); any federal character-of-income changes
