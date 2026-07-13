# SKU & Channel Profitability — Working Template

Ranks products by what they actually put in the client's pocket after landed cost and allocated fees, not just by revenue. Fast Action Bonus only — build this only if the client committed to the FAB on the sales call. Scope to the top 20 SKUs, or by category if the catalog is large and fragmented; a full-catalog rebuild is a separate paid project, not part of the Blueprint. Scratch work; paste the finished table into Blueprint §9.

## Source data

| Need | Where to pull it |
| :---- | :---- |
| Units sold + revenue by SKU | Amazon: Business Reports > Detail Page Sales and Traffic (by SKU/ASIN). Shopify: Analytics > Sales by product. |
| Landed cost per SKU | Client's product cost file — must include freight + duties per unit, not just factory cost, or the margin will be overstated |
| Per-unit platform fees | Amazon: Fee Preview report or Payments report at SKU level (referral fee % + FBA fee are often SKU-size-dependent, don't average across the catalog). Shopify: allocate transaction fees proportionally to revenue share since Shopify doesn't fee at the SKU level. |
| Ad spend per SKU/campaign | Amazon Ads / Meta / Google campaign reports, where campaigns map to specific SKUs or product groups. If ad spend isn't SKU-mapped, allocate proportionally to revenue share and say so — don't present it as SKU-precise if it isn't. |

## Calculation

1. Pull units sold and revenue for every SKU in the period; sort descending by revenue.
2. Take the top 20 SKUs by revenue, or roll up by product category if the catalog is long-tail (hundreds of low-volume SKUs).
3. For each: **COGS** = units × landed unit cost (freight + duties included).
4. **Allocated fees** = SKU-level platform/fulfillment fees where available, else allocated proportionally to that SKU's share of channel revenue. Include ad spend the same way.
5. **True margin $** = Revenue − COGS − Allocated fees.
6. **Margin %** = True margin $ ÷ Revenue.
7. Re-sort by **True margin $**, not revenue — a high-revenue SKU with thin or negative true margin should surface here even if it looked like a top performer by sales volume alone.

## What to call out

- **Quiet winners** — lower-revenue SKUs with strong true margin that deserve more ad spend or inventory investment.
- **Hidden losers** — high-revenue SKUs where true margin is thin or negative once landed cost and fees are counted; flag whether that's a pricing problem, a fee/ad-spend problem, or a landed-cost problem.
- Tie every call-out to a specific reorder or ad-spend decision the client can act on, not just a ranking.

## Output → paste into Blueprint §9

| SKU / Category | Units | Revenue | True margin $ | Margin % |
| :---- | ----: | ----: | ----: | ----: |
| [SKU] | [#] | [$] | [$] | [%] |

**What jumps out:** [2-4 sentences. Your quiet winners, your hidden losers, and what to do more/less of. Tie to ad spend and reorder decisions.]
