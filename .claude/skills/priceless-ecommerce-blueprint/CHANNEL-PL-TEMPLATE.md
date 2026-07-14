# Channel P&L — Working Template

> **SUPERSEDED — read `references/channel-profit-methodology.md` instead.** That file has the sourced report paths, the reconciliation test, confidence labeling, and review gates this file lacks. This file is kept only until `SKILL.md` is updated to point at it; do not build §2 from this file alone.

Rebuilds each sales channel's blended payout into real revenue, real cost, and real contribution profit. This is scratch work — fill it in, reconcile it, then paste only the finished table into Blueprint §2. Never hand a client this working file; it has no narrative, just numbers.

## Source data (pull fresh each engagement — don't reuse a prior period's figures)

| Channel | Report | Gives you |
| :---- | :---- | :---- |
| Amazon | Seller Central > Reports > Payments > Date Range Report (Transaction view) | Sales, refunds, FBA fulfillment fees, referral fees, storage fees |
| Amazon Ads | Amazon Ads console > Campaign reports | Ad spend (separate from the Payments report) |
| Shopify | Analytics > Finance summary + Payouts | Gross sales, discounts, returns, shipping charged, processing fees |
| Shopify Ads | Meta/Google/TikTok ad accounts (Shopify doesn't report this) | Ad spend |
| Walmart / eBay / other | Each platform's settlement or payout report | Sales, fees, refunds — same shape as Amazon/Shopify |
| Wholesale | QBO invoices/deposits for wholesale customers | Gross sales, any wholesale-specific discounts |
| COGS (all channels) | Client's product cost file, or QBO if landed cost is tracked there | Unit cost including freight + duties if captured — flag in §6 if it isn't |

If COGS isn't tracked per channel, allocate by units sold per channel (units × landed unit cost), not by revenue share — margin differs by channel and revenue-based allocation hides that.

## Calculation

For each channel, for the period stated in the Blueprint header (typically trailing 12 months):

1. **Gross sales** — total from the payout/settlement report, before any deductions
2. **Refunds / returns** — as reported by the platform (negative)
3. **Platform & referral fees** — Amazon referral fee, Shopify transaction fee, marketplace commission, etc. (negative)
4. **Fulfillment / storage** — FBA fulfillment + storage fees, Shopify shipping cost if merchant-paid, 3PL fees (negative)
5. **Advertising** — actual ad spend for that channel, pulled from the ad platform, not estimated (negative)
6. **Cost of goods sold** — units sold on that channel × landed unit cost (negative)
7. **Contribution profit** = 1 − |2| − |3| − |4| − |5| − |6|
8. **Margin %** = Contribution profit ÷ Gross sales

## Reconciliation (do this before trusting any number above)

Sum each channel's (Gross sales − Refunds − Fees − Fulfillment − Advertising) — this should approximate the actual net deposits that hit the bank for the period (COGS doesn't hit the bank as a channel deduction, it's a separate cash outflow to suppliers). If the reconciled total is off from actual bank deposits by more than a few percent, find the gap before finalizing — a common cause is ad spend paid outside the platform's own reporting (e.g., a separate agency invoice) or a fee category missed.

**Flag explicitly** if the client had been treating a channel's net deposit as their profit — this is the most common e-commerce bookkeeping error and the strongest hook into ongoing bookkeeping service (Quarterback Tier 2/3).

## Output → paste into Blueprint §2

| | [Channel 1] | [Channel 2] | [Channel 3] | **Total** |
| :---- | ----: | ----: | ----: | ----: |
| Gross sales | [$] | [$] | [$] | **[$]** |
| Refunds / returns | ([$]) | ([$]) | ([$]) | **([$])** |
| Platform & referral fees | ([$]) | ([$]) | ([$]) | **([$])** |
| Fulfillment / storage | ([$]) | ([$]) | ([$]) | **([$])** |
| Advertising | ([$]) | ([$]) | ([$]) | **([$])** |
| Cost of goods sold | ([$]) | ([$]) | ([$]) | **([$])** |
| **Contribution profit** | **[$]** | **[$]** | **[$]** | **[$]** |
| **Margin %** | [%] | [%] | [%] | **[%]** |
