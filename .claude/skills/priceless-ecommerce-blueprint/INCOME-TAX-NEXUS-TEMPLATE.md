# Income Tax Nexus Map — Working Template

> **SUPERSEDED — read `references/sales-tax-screening-rules.md` (Part B) instead.** This file's "commonly ~$500K, varies by state" framing is materially wrong: only eight states (AL, CA, CO, CT, MI, NY, TN, VA) have adopted any factor-presence income-tax standard, and most use figures other than $500K. Do not build §3b from this file alone.

Determines which states the business should be **filing state income tax returns** in — a different question from sales tax nexus (§3a). A business can owe no sales tax anywhere and still have an income tax filing obligation in a dozen states, or vice versa. Scratch work; paste the finished table into Blueprint §3b.

## Why this is a separate analysis from sales tax nexus

Sales tax nexus asks "did you cross a sales/transaction threshold that requires you to collect tax from customers." Income tax nexus asks "does your own business have enough presence in a state that the state can tax your income." Two distinct triggers create it, and e-commerce sellers usually have exposure from both:

1. **Physical presence via FBA inventory.** Public Law 86-272 protects an out-of-state seller from a state's net income tax **only if the seller's sole in-state activity is soliciting orders for tangible goods that are then shipped in from outside the state.** The moment the business has *property* in a state — including inventory sitting in an Amazon fulfillment center — that protection is gone for that state, regardless of how small the sales volume is. This is the single biggest income-tax-nexus risk specific to FBA sellers, and it's easy to miss because the seller never chose to have a physical presence anywhere — Amazon's fulfillment network created it for them.
2. **Factor-presence economic nexus.** Independent of physical presence, a growing number of states impose income tax nexus purely on sales volume into the state — commonly a ~$500K threshold (the Multistate Tax Commission model; exact amount and whether it's indexed varies by state). This can create a filing obligation in a state with zero inventory and zero employees there, based on Shopify/DTC sales alone.

A state can trigger nexus under either path independently — check both, don't treat them as alternatives.

## Source data

| Need | Where to pull it |
| :---- | :---- |
| States where FBA inventory is stored | Amazon Seller Central > Reports > Fulfillment > Inventory Event Detail (or the FBA Inventory / Manage Inventory by warehouse view). This shows which fulfillment centers, and therefore which states, have held the client's stock during the period — not just where it ships from today. |
| Sales by state (DTC/Shopify + Amazon combined) | Same pull as `NEXUS-MAP-TEMPLATE.md` — reuse that data, don't re-pull it |
| Current state income tax filings | Ask the client / check prior-year returns and Karbon — which state income tax returns (not sales tax) has the entity actually filed |
| Current state income tax nexus thresholds + P.L. 86-272 conformity posture | Run `/state-tax-lookup` for every state with material sales or FBA inventory — thresholds and 86-272 treatment vary by state and change; don't assume a uniform $500K or assume 86-272 applies everywhere |

## Calculation

1. **Physical-presence states:** list every state where the Inventory Event Detail report shows stock was held during the period, even briefly or in small quantity. Each of these states is a nexus state **regardless of sales volume** — 86-272 does not apply once there's in-state property. Mark these as "Crossed/present: Yes" independent of the threshold column.
2. **Factor-presence states:** for every remaining state with sales but no FBA inventory, compare total sales into that state (Amazon + Shopify combined) against that state's verified current economic/factor-presence threshold for income tax (pull via `/state-tax-lookup` — do not reuse the sales-tax threshold, they're frequently different numbers). Mark "Crossed" Yes/No.
3. Cross-reference both lists against the states where the entity is **currently filing income tax returns**. The gap between "nexus states" and "currently filing states" is the finding.
4. **Estimate exposure carefully, don't overstate it.** Unlike sales tax (where uncollected tax is a real, quantifiable liability), income tax exposure for a marginal state is often small or even a refund position once apportioned income and that state's rate are applied — many e-commerce sellers have thin or negative apportioned income in a small FBA state. Frame the finding as "you likely need to start filing here" rather than assuming a large back-tax bill; only flag material dollar exposure where the math actually supports it (highest-volume states, or states with corporate income + high rates).

## Output → paste into Blueprint §3b

| State | Trigger | Your activity | Threshold | Crossed / present? | Currently filing? | Est. exposure |
| :---- | :---- | :---- | :---- | :----: | :----: | ----: |
| [State] | [FBA inventory / factor-presence sales] | [$ sales or "inventory stored"] | [$500K or N/A for inventory] | [Yes/No] | [Yes/No] | [$] |

- **States with FBA inventory presence:** [list]
- **States crossed on factor-presence alone (no inventory):** [list]
- **Currently filing state income tax in:** [N states]
- **Estimated exposure / filing gap:** [$X, or note if primarily a going-forward filing gap rather than a large liability]

If the filing gap is material across several states, don't try to fix history inside the Blueprint — flag it as a separate scoped project (state income tax voluntary disclosure / historical filing catch-up), same as the sales tax pattern in §3a. Coordinate the going-forward apportionment approach with whichever multi-state elections show up in §5 (e.g., PTET only applies in states with income tax, and only where nexus is already established).
