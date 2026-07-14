# Sales Tax Nexus Map — Working Template

> **SUPERSEDED — read `references/sales-tax-screening-rules.md` (Part A) instead.** That file corrects this one's unsourced threshold framing, adds measurement-period validation, and adds confidence/review gates. This file is kept only until `SKILL.md` is updated to point at it; do not build §3a from this file alone.

Maps every state the client sells into against that state's economic nexus threshold, to find where they owe and aren't registered. Scratch work — fill in, verify thresholds, then paste the finished table into Blueprint §3.

## Source data

| Need | Where to pull it |
| :---- | :---- |
| Sales by state, per channel | Amazon: Seller Central > Reports > Tax > Sales Tax Report. Shopify: Analytics > Reports > Sales by state, or the Shopify Tax dashboard. Other channels: their sales-by-state or tax report. |
| Transaction count by state, per channel | Same reports as above — most give both dollar and transaction count |
| Current registration status | Ask the client / check prior preparer's records — which states is the client actually registered and filing sales tax in today |
| Current nexus thresholds | **Verify per state, do not assume $100K / 200 transactions uniformly** — see note below |
| Marketplace-facilitator coverage | Amazon collects and remits sales tax directly in nearly every state with an economic nexus law; Shopify/DTC does not collect or file on the seller's behalf |

**Threshold note:** most states use a $100K sales threshold, but the 200-transaction leg has been repealed in a growing number of states, and a handful of states use different dollar thresholds entirely. Pull each state's current statute or use `/state-tax-lookup` for the states in play rather than defaulting to $100K/200 — a wrong threshold produces a wrong exposure number on a paid deliverable.

## Calculation

1. For each state with any sales activity, sum sales $ and transaction count across all channels for the period.
2. Compare against that state's verified current threshold. Mark **Crossed?** Yes/No.
3. **Check whether the state excludes marketplace-facilitated sales from the seller's own threshold count** — this varies by state and changes the math: if Amazon's MF sales don't count toward the seller's own threshold, isolate DTC/Shopify sales-by-state separately before testing threshold-crossing.
4. Cross-reference against the current registration list. Mark **Registered?** Yes/No.
5. **Estimated exposure** — for states that are Crossed = Yes and Registered = No: exposure applies only to sales the client was responsible for collecting (i.e., DTC/Shopify sales; Amazon's marketplace-facilitated sales are already collected and remitted by Amazon regardless of the client's own registration status). Exposure ≈ uncollected taxable DTC sales in that state × that state's sales tax rate. Flag as an estimate — actual exposure depends on taxability of the specific products and any exemptions.
6. Total back-exposure = sum of estimated exposure across all crossed-but-unregistered states.

## Output → paste into Blueprint §3

| State | Your sales | Threshold | Crossed? | Registered? | Est. exposure |
| :---- | ----: | :---- | :----: | :----: | ----: |
| [State] | [$] | [$X / N txns] | [Yes/No] | [Yes/No] | [$] |

- **Registered and filing today:** [N states]
- **Where you've crossed the line but aren't registered:** [M states]
- **Estimated total back-exposure:** [$X]
- **Marketplace-facilitator note:** [Amazon is covering you in X states; your Shopify/DTC sales in Y states are your responsibility.]

If total exposure is material, don't try to scope the cleanup inside the Blueprint — flag it as a separate voluntary-disclosure/remediation engagement (see OFFER-ARCHITECTURE.md notes, historically $2K-$5K per state) and let the Blueprint stop at "here's what we found."
