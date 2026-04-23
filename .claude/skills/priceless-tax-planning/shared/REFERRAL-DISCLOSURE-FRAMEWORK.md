# Referral Disclosure Framework

This file governs how the skill handles any recommendation where Priceless CPA or an affiliated entity could earn compensation. It is the compliance spine of the Path B advisory model.

Every financial product file (`financial-products/products/*`) and every memo output that surfaces such a product must conform to this framework. If the skill cannot conform, it does not surface the recommendation.

## The core rule

Before any product recommendation flowing compensation to Priceless CPA or its affiliates is surfaced in a client deliverable, three conditions must all be satisfied:

1. **The client meets the suitability criteria for the product** (per the product's file)
2. **The client is not an attest client of Priceless CPA** (per `referral-partners/ATTEST-CLIENT-SCREEN.md`)
3. **The required written disclosure has been delivered to the client in advance of the transaction** (per this file)

If any of the three is not satisfied, the skill flags the opportunity for partner review but does not produce client-facing product recommendation language. The partner determines next steps.

## Governing authorities

This framework is built to comply with:

- **AICPA Code of Professional Conduct §1.510** — Commissions and Contingent Fees. Prohibits commissions/contingent fees from clients for whom the firm performs attest services. Allows commissions from non-attest clients with disclosure.
- **AICPA Code of Professional Conduct §1.520** — Referral Fees. Permits receipt/payment of referral fees with written disclosure to the client.
- **Circular 230 §10.29** — Conflicting Interests. Requires informed written consent when the practitioner has a personal interest in the transaction.
- **Florida Statutes Chapter 473** and **Florida Board of Accountancy Rule 61H1** — state CPA licensing rules governing commissions and disclosure in Florida.
- **Florida Statutes Chapter 626** — insurance producer licensing and conduct.
- **NAIC Suitability in Annuity Transactions Model Regulation (2020)** as adopted in Florida — best-interest standard for annuity sales.
- **Investment Advisers Act of 1940** and state investment adviser rules — fiduciary duty for investment advice, Form ADV disclosure, advertising rules (including the 2022 SEC Marketing Rule).
- **Internal Revenue Code §7216** and related regulations — confidentiality of tax return information, requirements for taxpayer consent to use or disclose.

When a state other than Florida governs a specific client's matter, the analyst must check the relevant state's rules. Multi-state clients may trigger the stricter state's requirements.

## The affiliated entity structure

The skill assumes the following Priceless entity structure for disclosure purposes. Replace with actuals as entities are formed.

- **Priceless CPA** — the CPA firm practicing public accountancy (tax, accounting, advisory). Not licensed to sell insurance or investment advice.
- **[Insurance Affiliate]** — a Florida-licensed insurance agency under common ownership with Priceless CPA. Licensed producers under this entity hold Florida 2-15 (Life, Health, Variable Annuity) and 2-20 (General Lines) licenses as applicable. Earns commissions on policies placed.
- **[RIA Affiliate]** — a state-registered (or SEC-registered) investment adviser under common ownership with Priceless CPA. Investment Adviser Representatives (IARs) provide fee-based investment advisory services. Form ADV Parts 1, 2A, and 2B are filed and delivered to clients per Rule 204-3.

If an affiliate doesn't exist yet, the skill should treat Path B recommendations as held for partner-decision only. The skill references the entities by placeholder names; these are find-and-replaced once entities are formed.

## Four disclosure tiers

Not every product recommendation requires the same disclosure. The skill classifies each product into one of four tiers.

### Tier 0: No Priceless compensation flows

Products where Priceless CPA and its affiliates earn nothing — e.g., a recommendation to fund the client's existing 401(k) at their employer, or to maintain their existing term life policy. No special disclosure required; standard tax advice rules apply.

### Tier 1: Referral to independent third party

Product is recommended to the client but implemented through a truly independent third party (e.g., a specialized PPLI sponsor, a captive insurance manager, a large brokerage). Priceless CPA and affiliates earn nothing from the referral.

Memo language includes: "Priceless CPA does not receive compensation for this referral."

### Tier 2: Affiliate earns commission, no ongoing fee

Insurance products placed through [Insurance Affiliate] where commission is earned on policy issuance, potentially with trailing renewal commissions.

Memo language must include, in writing delivered to the client **before** the client accepts the referral:

> "This recommendation involves a product that would be placed through [Insurance Affiliate], an insurance agency affiliated with Priceless CPA under common ownership. If you choose to implement this recommendation, [Insurance Affiliate] will receive a commission from the insurance carrier, estimated at [range or amount] on the first-year premium and [renewal commission terms] on subsequent renewals. This commission is paid by the insurance carrier, not by you directly, and is reflected in the policy's pricing. You are under no obligation to use [Insurance Affiliate] to implement this recommendation; you may engage any licensed producer of your choice. [Agent name] holds a [Florida 2-15 / other] insurance license. This disclosure is provided per AICPA Code of Professional Conduct §1.520."

### Tier 3: Affiliate earns ongoing advisory fee

Investment advisory services through [RIA Affiliate] — typically a percentage of assets under management, or a flat fee, or a subscription. Ongoing fiduciary relationship.

Memo language must include, in writing delivered to the client before engagement:

> "This recommendation involves engaging [RIA Affiliate] as an investment adviser, an RIA affiliated with Priceless CPA under common ownership. If you engage [RIA Affiliate], you will enter a separate advisory agreement and pay an advisory fee of [X% of AUM / $X flat / other], as more fully described in [RIA Affiliate]'s Form ADV Part 2A, which will be delivered to you before you sign the advisory agreement. [RIA Affiliate] owes you a fiduciary duty in the provision of investment advice. You are under no obligation to engage [RIA Affiliate]; you may select any qualified investment adviser. [Advisor name] is registered as an Investment Adviser Representative and holds [Series 65 / CFP / CPA-PFS / other]. This disclosure is provided per AICPA Code of Professional Conduct §1.520 and Form ADV delivery requirements."

### Tier 4: Complex / multiple-compensation products

Products that combine multiple forms of compensation (e.g., PPLI with an investment sub-account managed by the RIA affiliate), or products where compensation structure is unusual. These require custom disclosure drafted by partner with legal review. The skill does NOT auto-generate Tier 4 disclosure language. It flags the engagement for partner-drafted disclosure.

## The fiduciary gate

When a product recommendation flows through [RIA Affiliate] (Tier 3) or the recommendation is investment advice rather than insurance placement, the recommendation is subject to the Investment Advisers Act fiduciary duty.

This means the skill's recommendation logic must satisfy:

- **Duty of care** — recommendation is based on reasonable analysis of the client's specific circumstances and appropriate product alternatives.
- **Duty of loyalty** — recommendation is not driven by compensation to Priceless CPA or affiliates; if a lower-compensation or no-compensation alternative better serves the client, the skill says so.

**Practical implementation:** whenever the skill recommends a product in Tier 2 or Tier 3, the memo must also identify at least one non-affiliated or no-compensation alternative the client could consider. Example: "Alternatively, the client may purchase term life coverage directly through [online brokerage] or any independent agent; similar coverage is available from multiple A+ rated carriers."

## The attest client screen

Before surfacing any Tier 2 or Tier 3 recommendation, the skill checks whether the client is an attest client of Priceless CPA per `referral-partners/ATTEST-CLIENT-SCREEN.md`. Attest services for this purpose include:

- Audits, reviews, compilations where independence is required
- Certain agreed-upon procedures engagements
- Any engagement where SSARS or GAAS independence applies

If the client is an attest client, **the skill does not surface Tier 2 or Tier 3 recommendations**. The memo notes the product category was considered but is not recommendable through Priceless affiliates due to AICPA §1.510.

In practice, Priceless CPA's core services (tax prep, S Corp maintenance, bookkeeping, payroll, CFO advisory) are not attest services, so this screen should rarely trigger. But the check runs every time regardless.

## IRC §7216 consent

If the skill surfaces a product recommendation that would involve disclosing or using tax return information for a purpose other than preparing the return (e.g., passing prior-year AGI to an insurance carrier for suitability analysis, or sharing return information with [RIA Affiliate] for portfolio analysis), **taxpayer consent under §7216 is required** in the specific form and manner required by Treasury Reg §301.7216.

The skill does not auto-transmit tax information to affiliates. When surfacing such a recommendation, the memo notes that §7216 consent will be requested separately before any information crosses the boundary.

## Suitability framework

Each financial product file carries `suitability_requires` metadata. The skill evaluates these conditions against the client profile before surfacing the product. If suitability fails, the product does not appear in the memo.

Example for a PPLI recommendation:

```yaml
suitability_requires:
  - net_worth > $5M (excluding primary residence)
  - liquid_assets > $1M after policy premium
  - tax_bracket_federal >= 37%
  - investor_sophistication: accredited_or_qualified_purchaser
  - time_horizon_years >= 15
  - existing_insurance_adequate: true
  - not_attest_client: true
  - §7216_consent_workflow: initiated
```

Suitability is evaluated conservatively. When a product is close to the suitability line, the skill flags for partner review rather than auto-surfacing.

## What the skill produces vs. what the partner does

**The skill produces:** analysis, product identification, disclosure-compliant memo language, suitability documentation, alternative comparisons. All in draft form.

**The partner does:** reviews the memo, confirms suitability based on facts the skill cannot verify (e.g., is this client actually sophisticated enough for PPLI?), signs the disclosure, delivers to client, tracks in Karbon.

**The client does:** reviews the disclosure, asks questions, decides whether to implement, signs any agreements with the affiliate entity separately from the CPA engagement.

**The skill does not:** generate signed agreements, accept client signatures, move money, place trades, or bind coverage. These happen in the affiliate's own systems under the affiliate's own supervision.

## Logging and audit trail

Every engagement in which the skill surfaces a Tier 2, 3, or 4 recommendation must have the following logged in Karbon:

- Which product was recommended
- Suitability determination (conditions met, which ones)
- Disclosure language used
- Date disclosure delivered to client
- Client response (accepted, declined, engaged non-affiliate alternative)
- Partner sign-off on the recommendation
- If implemented, confirmation of implementation by the affiliate entity (separate file reference)

The compliance officer (or partner serving that role) reviews this log quarterly. Any gaps are remediated before the next quarterly delivery cycle.

## What this framework doesn't cover

The framework assumes the firm is operating in good faith with appropriate licenses and structures. It does not cure:

- Unlicensed insurance sales — if the affiliate's producer isn't licensed in the client's state, no amount of disclosure fixes it
- Unregistered investment advice — if the RIA isn't registered in the client's state, advice for compensation cannot be given regardless of disclosure
- Breach of fiduciary duty — disclosure doesn't convert a bad recommendation into a good one; if the recommendation doesn't serve the client, it's still a breach
- Sale of unsuitable products — suitability analysis must be real, not pro forma

The skill enforces the process. The partner and compliance function enforce the substance.
