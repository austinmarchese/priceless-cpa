# Priceless CPA — Firm Methodology

This is how Priceless CPA thinks about tax planning. Every analysis produced by this skill should be traceable back to these principles. If an analysis contradicts this methodology, stop and flag it for partner review.

For deliverable formats, see `shared/OUTPUT-TEMPLATES.md`. This file is the constitution; OUTPUT-TEMPLATES is the format. Keep them separate.

## What we do and how we're positioned

Priceless CPA delivers **quarterly tax planning and strategy** as a productized recurring service, alongside traditional tax preparation, S Corp maintenance, full-cycle accounting, payroll, and CFO advisory. Our practice serves business owners across these primary industries:

1. E-Commerce (DTC, Amazon FBA, Shopify operators)
2. Digital Marketing Agencies
3. Construction (general contractors and trades)
4. Real Estate Agents and Brokers
5. Real Estate Owners (short-term rental and long-term hold)
6. Jewelry Stores
7. Doctors and Medical Practices
8. Home Services (plumbing, HVAC, landscaping)
9. Software / AI Companies
10. Investment Firms (RIAs, asset managers as clients)
11. Car Wash Operators

Plus the **Puerto Rico Act 60 relocation** vertical via Priceless PR Advisors.

We also operate as an **affiliated advisory platform (Path B)**. When a client's tax planning engagement surfaces opportunities in insurance, retirement plan design, PPLI, investment vehicles, or other financial products, we can implement through our affiliated entities with full disclosure per `shared/REFERRAL-DISCLOSURE-FRAMEWORK.md`. This is a normal part of our service model.

## Our delivery cadence

Quarterly maintenance model aligned with IRS estimated-tax quarters. Each quarter has a distinct deliverable per `shared/QUARTERLY-CADENCE.md`. Delivery occurs 3-4 weeks before each payment deadline.

## Service tiers

Quarterly engagements are tiered. The skill produces output appropriate to the tier the client purchased.

| Tier | Annual fee range | What's included |
|------|------------------|------------------|
| Foundational | $4,000+ | Standard quarterly memo, basic strategy review, projection, payment schedule |
| Comprehensive | $8,000+ | Adds documentation generation for approved strategies, financial product overlay, multi-entity rollup |
| Full Wealth | $14,000+ | Adds dedicated partner time, capital deployment evaluation, estate coordination, every appendix populated |

Tier is captured in the client profile and drives which sections of the memo template fire.

## The eight cognitive operators

Every planning analysis runs through these operators in order. Each is a question the analyst asks explicitly before moving on.

### 1. Reconcile (always runs first)

*"Do the numbers tie?"*

Before any planning, the books must tie. Bank to ledger, payroll to W-2 totals, K-1 to 1120S, prior-year AGI to carryforwards. If they don't tie, stop and fix the data — no projection is better than a wrong projection. The bookkeeping-qa sub-skill runs this operator.

### 2. Baseline

*"What would the tax picture look like if the client did absolutely nothing different from last year?"*

Straight-line or seasonally-adjusted projection using prior-year methodology. This is the counterfactual against which every strategy's savings are measured. Every quarterly deliverable updates the baseline.

### 3. Reasonable Comp (S Corp clients only)

*"Is the owner's W-2 defensible, and is it optimal?"*

S Corp reasonable comp is our highest-frequency issue. Every S Corp client gets this check every year. Under-comp exposes to payroll tax reclassification; over-comp leaks FICA/Medicare. Target range depends on role, industry, entity net income. Ref: `tax-strategy/strategies/S-CORP-REASONABLE-COMP.md`.

### 4. Entity-Arbitrage

*"Is the client using the right entity structure for their current income mix and future direction?"*

Sole prop → S Corp election (Form 2553) above ~$60K net SE income. S Corp → C Corp analysis for retained earnings at growth stage. Real estate in LLCs with check-the-box elections. Holding company structures for multi-business owners. PR LLC formation for Act 60 candidates. Catches clients who outgrew their entity.

### 5. Accelerate / Defer

*"What income and deductions can be timed to land in lower-bracket years — considering this year AND next year?"*

Bonus depreciation (100% under OBBBA 2025), §179, retirement contributions, charitable bunching via DAF, installment sales, QBI phase-out management, Roth conversions in low-income years. Timing matters most in transition years.

**Two-year framing (added v0.5 per partner direction):** This operator explicitly evaluates whether today's optimal move is also next year's optimal move. When they diverge, surface the decision rather than defaulting to current-year optimization.

Examples where this-year-optimal differs from next-year-optimal:

- **Bonus depreciation / §179**: take less now if next year has higher expected income (deduction worth more at the higher bracket)
- **Roth conversions**: convert in low-income years, not high
- **§1031 vs. recognize**: if next year has loss carryforwards or lower bracket, recognize now at lower effective cost
- **Charitable bunching**: bunch in the high-income year, not the low
- **S Corp election timing**: elect before a high-income year starts, not mid-year
- **Installment sale election**: spread gain into lower future years when appropriate
- **NOL usage**: when to use vs. carry forward
- **QSBS holding period vs. sale timing**: coordinate §1202 exclusion with bracket timing

The operator runs the "next year looks materially different" check by examining:
- Known or anticipated income events (planned sale, planned launch, anticipated bonus)
- Known or anticipated deduction changes (property placed in service, expired depreciation, changed family structure)
- Known or anticipated life events (retirement, marriage, relocation, business sale)

Where a meaningful two-year difference exists, the operator surfaces it as a Forward-Looking Consideration in the memo rather than just defaulting to current-year optimization. Partner makes the call on the multi-year trade-off.

Do not skip this check to default to "maximize current-year savings." That's the wrong answer often enough to warrant explicit evaluation.

### 6. Stack

*"What strategy combinations create 1+1=3 outcomes?"*

Some strategies pair into outsized savings:
- Defined Benefit plan + S Corp salary optimization
- §1031 exchange + cost segregation + bonus depreciation
- QSBS + QOZ overflow above the §1202 cap
- Augusta Rule + accountable plan home office + HRA
- Solo 401(k) + HSA + Defined Benefit stacking for high-income professionals
- Charitable bunching via DAF + appreciated asset donation

Never present strategies in isolation when a stack is available. Reference: `shared/COMPOUNDING-OPPORTUNITIES.md` (built in Sprint 5).

### 7. Financial Product Overlay (Path B-specific)

*"Is there a financial product that solves a non-tax need surfaced by this engagement?"*

Beyond tax strategies, every quarterly review examines whether the client has exposures or opportunities best addressed by financial products — key person insurance, disability, buy-sell funding, estate liquidity, PPLI for high-tax-alpha investors, cash balance plans for high-earning practices, NQDC for key employee retention.

When surfaced, products are evaluated against suitability criteria per `shared/REFERRAL-DISCLOSURE-FRAMEWORK.md`. Recommendations carry mandatory written disclosure when compensation flows to Priceless or its affiliates.

### 8. Capital Deployment (high-income clients only)

*"Are there meaningful capital deployment opportunities that would produce material tax savings disproportionate to the investment, while also fitting the client's investment profile?"*

This operator runs only when **projected AGI > $750K** OR **projected total tax > $200K**. It's the layer above foundational planning, not a substitute for it. The analyst confirms the client has already maxed foundational strategies (retirement plans, accountable plans, QBI optimization, reasonable comp) before invoking this operator.

What this operator evaluates:

- Whether the client has investible capital outside their operating business and beyond emergency reserves
- Whether the client's risk tolerance, liquidity profile, and investment sophistication fit the available options
- Whether deal sponsors under consideration have been pre-vetted by a Priceless partner
- Specific capital deployment categories:
  - Equipment leasing partnerships (car washes, gas stations, related operations)
  - Aircraft leasing partnerships
  - Oil and gas working interests
  - FX trading partnerships
  - Qualified Opportunity Funds and QOZ direct investments
  - Charitable contribution structures (donor-advised funds, direct giving of appreciated assets, conservation considerations where applicable)
  - Medical device and other charitable contribution programs

What this operator does NOT do:

- Recommend any specific deal sponsor without partner pre-vetting documented
- Surface options for clients who haven't completed foundational planning first
- Treat capital deployment as the "primary" recommendation when foundational gaps exist
- Recommend leverage levels beyond what the client can prudently absorb if the investment underperforms

When this operator surfaces a recommendation, the memo's Strategy section flags it as Capital Deployment-tier and the partner's review specifically confirms suitability before any client communication.

## Our defaults

When methodology is ambiguous, default to:

- **Documented over clever.** A $10K savings with paper trail beats a $15K savings we can't defend.
- **Recurring over one-shot.** Annual strategies that compound (retirement contributions, accountable plans, PTET elections) beat one-shot plays.
- **Client-executable over advisor-dependent.** If the client can't understand the strategy, it's too complex for them.
- **Fit the facts, not force them.** We recommend strategies that match the client's actual situation.
- **Foundational first, capital deployment second.** Operator 8 never runs before Operators 1-7 have been completed.
- **Fiduciary before commercial.** Under Path B, recommendations are driven by client need, not by which product pays best.

## Red flags that require partner-level attention

If any of the following appear in client data or analysis, escalate to partner immediately:

- Undisclosed foreign accounts (FBAR / Form 8938 exposure)
- Cryptocurrency transactions on exchanges without tax reporting
- Related-party transactions without documented arm's-length pricing
- Prior returns with math errors, missing schedules, or unfiled years
- Client referenced by a disgruntled former CPA, IRS notice, or ongoing examination
- Rental real estate with materially improper active/passive classification
- Reasonable comp obviously wrong (e.g., $0 comp on $500K S Corp income)
- Client is an attest client of Priceless CPA (blocks commission-based recommendations)
- Unauthorized practice issues (client is in a state where we aren't licensed)
- Capital deployment recommendation from a deal sponsor not on Priceless's pre-vetted list

## Scope boundaries — when we refer out

Priceless CPA does NOT handle:
- Estate planning documents (wills, trusts) — refer to estate attorney
- Asset protection structures — refer to attorney
- Criminal tax matters or voluntary disclosures — refer to tax controversy attorney
- Audit representation beyond correspondence exams — refer to qualified specialist
- Sales tax compliance for e-commerce across 20+ states — refer to Avalara/TaxJar partner
- Forensic accounting — refer to forensic CPA
- Business valuations for litigation or transactions — refer to credentialed valuation firm

When any of these surface, flag in the memo and recommend a specific referral category.

## How this methodology evolves

This file is the single source of truth for how Priceless CPA does tax planning. It's updated quarterly by the managing partner after reviewing trailing engagements. Do not embed methodology in individual strategy files — if a rule applies across the firm, it belongs here.
