# Tech Stack Research

**Date:** 2025-03-15
**Context:** Anthony evaluated the full firm technology stack with Claude, comparing current tools against alternatives optimized for AI automation, API openness, and scalability to 1,000+ returns. No decisions have been made yet. This is research and analysis only.

## Current Stack

| Tool | Role | Est. Cost/yr |
|------|------|-------------|
| TaxDome Pro (10 users) | Practice management, client portal, invoicing, doc sharing, time tracking, workflows, organizers, engagement letters | ~$10,000 |
| CCH Axcess Tax | Tax preparation software | ~$10,000-15,000 |
| Anchor | Engagement letters + billing ($5 flat fee passed to client) | $0 to firm |

## Options Evaluated

### Practice Management: TaxDome vs Karbon

**TaxDome limitations found:**
- No public API. Zapier integration is contacts-only (create/update/delete contacts).
- Cannot pull documents, workflows, pipeline data, invoices, or organizer data programmatically.
- Architecturally incompatible with AI-powered automation vision.

**Karbon strengths found:**
- Native API (v3): contacts, orgs, work items, notes, timesheets, billing, custom fields. Webhooks on status changes.
- Native integrations with Soraban, Filed, StanfordTax, Tallyfor.
- Practice Intelligence analytics layer.
- eSignatures with KBA (8879 compliant). Credits sold in bundles separately.
- Pricing: Business plan at 10 users = ~$9,480/yr. Comparable to TaxDome.

**Karbon API gap:** Document/file download not exposed via API. Workaround: store docs in OneDrive/Drive.

### Tax Prep Software: CCH Axcess vs ProConnect vs UltraTax

**CCH Axcess strengths:**
- Highest form comprehensiveness (77%). Best for complex business returns.
- Flat-fee pricing scales better at 1,000+ returns vs ProConnect per-return.
- Expert AI launching natively. Engagement Essentials only works with CCH.
- Weaknesses: lowest ease-of-use rating (3.7/5), terrible support, opaque pricing, 7% annual increases.

**ProConnect strengths:**
- Cloud-native, QBO integration, per-return pricing (cheaper at low volume).
- Filed and Soraban both support it.
- Weakness: per-return pricing stops scaling well at 500+ returns ($18-25K+ at 1,000 returns). Business return handling not as deep.

**ProConnect + UltraTax hybrid:** Evaluated and found problematic. Two platforms = two data sets, two training paths, two renewal cycles. Not recommended.

**Drake:** Too simple for the client mix. Lowest integration score (3.0).

### Individual Return Prep: Filed vs CCH Axcess Scan vs Juno

**Filed:**
- Extracts data, builds workpapers with audit trail, drafts return in CCH Axcess. AI-written prep notes. YoY comparison.
- Platform-independent (CCH, ProConnect, UltraTax, Lacerte, Drake).
- Natively integrates with Karbon. Status syncs back.
- Credit-based pricing: simple 1040 = 1 credit, complex = 2-3 credits. Estimated $20-50/credit. **Quote needed.**
- Caveat: business returns, multi-state, RE in active development. Need to verify coverage for the firm's return mix.

**CCH Axcess Scan:**
- Smart OCR layer. Structured forms (W-2, 1099, K-1) only. No workpaper creation. Native to CCH.
- Could complement Filed for simple W-2 returns if bundled cheaply.

**Juno:**
- Exclusive TaxDome integration. Off the table if moving to Karbon.

### Business Return Workflow: Trial Balance Automation

**CCH Engagement Essentials:**
- Imports from QBO/Xero, auto-maps to tax groupings, one-click push to CCH Axcess with live dynamic link.
- Flat annual fee (not per-return). Estimated $800-2,000/yr. **Quote needed.**
- Only works with CCH Axcess.

**Tallyfor:**
- Per-binder pricing. $875/yr base + $35/binder over 25. At 150 returns = ~$5,250/yr. Expensive.

**RegroupTAX:**
- $415/mo for 250 returns = $4,980/yr. Also expensive.

**Claude Cowork skill opportunity:** Narrative workpaper drafting (book-to-tax memos, entity analysis, officer comp, RE activity summaries). Complementary to trial balance tools, not a substitute.

### Client Intake: Soraban Collect

- AI-powered organizers, document collection, auto-reminders. Native Karbon integration.
- Collect only (skip Deliver, which would be redundant with Karbon's native eSign/delivery).
- Estimated $3,000-4,000/yr. Not currently used.

### Engagement Letters + Billing: Anchor vs Ignition

**Anchor (current):**
- $5 flat fee passed to client. Firm cost = $0.
- Connects to Karbon via Zapier.

**Ignition:**
- Native Karbon integration. AutoPricing, AI Price Insights.
- 1% ACH / 1.75%+ credit card processing fees charged to firm. At $400K+ billings = $20-30K/yr. Expensive.
- Pro+ plan needed at 200+ clients = $4,788/yr subscription on top of processing.

## Estimated Cost Comparison (If All Changes Were Made)

| Tool | Est. Cost/yr |
|------|-------------|
| Karbon Business (10 users) | $9,480 |
| CCH Axcess Tax | ~$10,000-15,000 |
| CCH Engagement Essentials | $800-2,000 |
| Filed | $4,000-10,000 |
| Soraban Collect | $3,000-4,000 |
| Anchor | $0 |
| **Total** | **~$27,000-40,000** |

vs current stack at ~$20,000-25,000. The delta buys API access, automation capability, and ~40-50% returns-per-FTE improvement.

## Scalability Notes

- Current stack: ~60-70 returns per FTE. Data trapped in TaxDome.
- Proposed stack: ~85-100 returns per FTE. Full API access, real-time dashboards, Filed automates 1040 prep, Engagement Essentials automates business TB.
- At 1,000 returns: CCH flat-fee wins vs ProConnect per-return. Karbon scales linearly. Soraban scales by returns not headcount.

## Quotes / Research Still Needed

1. **Filed** -- Demo, verify return type coverage (RE, crypto, business), negotiate credit pricing
2. **CCH Engagement Essentials** -- Flat-fee quote as contract add-on
3. **CCH Axcess Scan** -- Worth bundling cheaply alongside Filed?
4. **ProConnect** -- Get quote as CCH negotiation leverage
5. **Karbon eSign credits** -- Volume pricing for 200+ clients
6. **Soraban Collect** -- Confirm collect-only pricing

## Key Insights from Research

- TaxDome Zapier = contacts only. No documents, workflows, pipelines, invoices, organizer data. Decisive limitation.
- Filed is NOT Canopy-exclusive. Supports CCH Axcess + Karbon natively. Canopy "Smart Prep" is a distribution deal.
- Juno IS TaxDome-exclusive. Off the table with Karbon.
- CCH flat-fee pricing inverts ProConnect cost advantage at 500+ returns.
- Engagement Essentials is reportedly flat-fee, making it cheapest TB option at 100-200 business returns.
- Anchor $0 vs Ignition $20-30K/yr at scale. Math is decisive.
- Full business return AI prep (like Filed for 1065s) doesn't exist yet. CCH Expert AI for 1065s is in early adopter phase as of Jan 2026.
