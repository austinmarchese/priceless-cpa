---
name: priceless-ecommerce-blueprint
description: E-commerce niche offer (from Anthony). Two uses — (1) Sales reference: explain/quote the E-Commerce Blueprint + Quarterback pricing, tiers, qualification, and sales scripts during a sales conversation. (2) Deliverable production: build the actual client-facing E-Commerce Financial & Tax Blueprint from a client's channel/financial data. Trigger phrases: "e-commerce offer", "e-commerce pricing", "Blueprint pricing", "build the blueprint for [client]", "e-commerce Blueprint for [client]", "what tier should I present". NOT for tax prep or bookkeeping cleanup themselves — this produces the diagnostic deliverable and its sales framing, not the underlying tax return or books.
---

# E-Commerce Financial & Tax Blueprint

Anthony's offer architecture for the e-commerce niche (Amazon FBA, Shopify/DTC, multi-channel, wholesale, $500K-$5M+ revenue). Two clean one-call closes: a paid diagnostic (**the Blueprint**) on the sales call, an ongoing retainer (**the Quarterback**) on the delivery call.

## Library

- `OFFER-ARCHITECTURE.md` — pricing bands, tiers, qualification guide, sales scripts, credit mechanic, rollout plan. Source of truth for anything money- or sales-related. **Quote it, don't reinvent it.**
- `BLUEPRINT-TEMPLATE.md` — the client-facing deliverable skeleton (10 sections + PREP NOTEs).
- Component working templates — scratch work, never shown to the client. Each specifies exact source reports, calculation steps, and an output table shaped to paste directly into the matching Blueprint section:
  - `CHANNEL-PL-TEMPLATE.md` → Blueprint §2
  - `NEXUS-MAP-TEMPLATE.md` → Blueprint §3
  - `CASH-FLOW-MODEL-TEMPLATE.md` → Blueprint §8 (FAB)
  - `SKU-PROFITABILITY-TEMPLATE.md` → Blueprint §9 (FAB)
  - (No separate file for the §5 Tax Plan — its table is pre-loaded live from the industry playbook below.)
- Tax-strategy content for §5 of the Blueprint comes from the existing industry playbook: `.claude/skills/priceless-tax-planning/tax-strategy/industries/E-COMMERCE.md`. Don't duplicate that content here — read it live each time.

## Mode 1 — Sales / pricing reference

Use when someone asks about pricing, tiers, qualification, or what to say on a call. Read `OFFER-ARCHITECTURE.md` and answer directly from it — the numbers, bands, and scripts there are Anthony's, not to be recalculated or softened. If a number looks off or a client's situation doesn't cleanly match a band, flag it rather than improvising a new one.

Quick anchors (see file for full detail):
- Blueprint bands: Lite $1,500 / Standard $2,500 / Complex $3,500 (up to $5,000 for 3+ entities or 20+ states)
- Quarterback tiers: Tier 1 $800/qtr + $2K tax prep / Tier 2 $1,600/mo / Tier 3 $2,850/mo
- Blueprint fee is 100% creditable toward the first 12-month term if they enroll within 30 days, credit vests only on completing the term, applied to the final invoice(s)
- One offer per call: Blueprint on the sales call, Quarterback on the delivery call, never both

## Mode 2 — Build a client Blueprint

Use when asked to produce the actual deliverable for a named client. This becomes a paid work product a partner presents live — treat it with the same rigor as a quarterly tax memo, not a first draft.

### Step 1: Confirm inputs before writing anything

Never fabricate a number. If a data point below is missing, ask for it or the specific report it comes from — do not estimate or default silently:

- Channel payout/reporting exports: Amazon Seller Central (Reports > Payments > Date Range Report), Shopify (Analytics > Finances + Payouts), and any other channel's payout reports, for the period being reviewed
- Sales by state + transaction counts per channel (for the nexus map)
- Current entity structure, S-corp election status, current officer comp
- Prior-year return(s) if available (ties §4 and §5 to the client's actual numbers)
- Current inventory/COGS method and whether landed cost (freight + duties) is captured
- Current accounting stack (QBO or not, A2X or not, inventory tool, sales tax tool)
- Whether this client already committed on the sales call to the Fast Action Bonus — this gates whether §8/§9 are included at all (see below)

### Step 2: Build section by section, in this order

Work through `BLUEPRINT-TEMPLATE.md` sections 2 through 10 first; write the Executive Summary (§1) **last**, once the real numbers exist.

- **§2 Channel P&L** — follow `CHANNEL-PL-TEMPLATE.md` to rebuild each channel's deposit into gross sales, refunds, platform/referral fees, fulfillment/storage, advertising, COGS, and contribution profit. Reconcile the total to what actually hit the bank. Flag explicitly if the client had been reading a platform's net deposit as revenue.
- **§3 Nexus map** — follow `NEXUS-MAP-TEMPLATE.md` to compare sales-by-state against each state's *current, verified* economic nexus threshold (don't assume $100K/200 transactions uniformly — thresholds vary and change). Note Amazon's marketplace-facilitator coverage separately from Shopify/DTC exposure, which is the client's own responsibility.
- **§4 Entity & structure review** — S-corp election status, reasonable comp balance, multi-entity fit. E-commerce is non-SSTB, so full QBI is in play — coordinate this with §5.
- **§5 12-18 month tax plan** — read `.claude/skills/priceless-tax-planning/tax-strategy/industries/E-COMMERCE.md` for the current strategy menu (QBI optimization, S-corp comp, Solo 401(k)/SEP, hiring children, R&D credit, cost seg, PTET election, inventory method, exit planning). Keep only strategies that actually apply to this client, delete the rest, and put a real dollar estimate on every row — no theoretical rows. Only surface exit-planning strategies (QSBS/§1202) if a sale is realistically 3-5+ years out. Partner sign-off required on anything aggressive.
- **§6 Inventory/COGS assessment** — this is an assessment, not a rebuild. Check method fit for size (§471(c) ~$30M average gross receipts threshold), whether landed cost is captured, whether the balance-sheet inventory value looks real or static/zero (red flag). If a full historical SKU rebuild is warranted, name it as a separate scoped project — don't fold it into the Blueprint.
- **§7 Accounting system blueprint** — recommend the stack (QBO + A2X + inventory tool + cash flow + sales tax tool), and be honest about what the client can DIY versus what realistically needs a managed hand (A2X drifts if unmanaged; Shopify Tax collects but does not file).
- **§8/§9 (Fast Action Bonus)** — include ONLY if the client committed to the FAB on the sales call. If confirmed: follow `CASH-FLOW-MODEL-TEMPLATE.md` for §8 and `SKU-PROFITABILITY-TEMPLATE.md` for §9. If unconfirmed, ask before building these; do not include them by default.
- **§10 Implementation roadmap** — sequence everything above by quarter, end with how ongoing service would run this for them, and name the Tier (1/2/3) that fits based on what they'd hand over. Don't hard-sell here — let the roadmap make the case.
- **§1 Executive summary** — write last. 5-7 sentences max: true profit + tax number, then the 2-3 biggest dollar opportunities, then the bottom line.

### Step 3: Voice and QC

- Plain language, no accounting jargon, no em dashes, quarterback tone — same brand-voice rules as the rest of Priceless content.
- Every dollar figure must tie to a source pulled in Step 1. If you can't source it, don't put a number on it — say what's needed to get one.
- Before delivering, run the template's own final checklist: every `[bracket]` filled, every PREP NOTE deleted, executive summary matches the sections, FAB sections included only if earned, partner has reviewed.
- **Partner sign-off required before this goes to a client.** This is a paid deliverable presented live, never emailed cold.

