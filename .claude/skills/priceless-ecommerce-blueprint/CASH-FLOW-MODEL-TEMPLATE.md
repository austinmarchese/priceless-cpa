# Cash Flow Forecast — Working Template

Models the lag every e-commerce business feels: money out for inventory and ads now, money back weeks or months later. Fast Action Bonus only — build this only if the client committed to the FAB on the sales call. Scratch work; paste the finished table into Blueprint §8.

## Source data

| Need | Where to pull it |
| :---- | :---- |
| Net deposits (cash in) | QBO bank feed / register for the period, or the reconciled channel totals from `CHANNEL-PL-TEMPLATE.md` (Gross sales − Refunds − Fees − Fulfillment − Advertising, per channel, summed) |
| Inventory purchases | QBO accounts payable / bill payments to suppliers, or bank register if paid directly |
| Ad spend | Ad platform billing (Amazon Ads, Meta, Google, TikTok) — actual spend, not budgeted |
| Operating + tax | Remaining opex from QBO P&L (payroll, rent, software, etc.) plus any estimated tax payments made in the period |

Use actual historical cash movement for the trailing period covered by the Blueprint, then project forward one to two quarters using the same seasonal pattern (e.g., a Q4-heavy inventory buy pattern should show up as a Q3 cash dip, not spread evenly).

## Calculation

Build by quarter (or by month if the client's cash cycle is tight enough that quarterly hides the real risk):

1. **Cash in** — net deposits actually received in that period
2. **Inventory purchases** — cash paid to suppliers in that period (not units ordered — actual cash out, including deposits/prepayments to manufacturers)
3. **Ad spend** — actual ad platform billing in that period
4. **Operating + tax** — remaining opex + any tax payments/estimates paid in that period
5. **Ending cash position** = prior period's ending cash + cash in − inventory purchases − ad spend − operating & tax

Roll this forward period to period so each quarter's ending cash becomes the next quarter's starting point.

## Identify the two things that make this section valuable

- **Tightest point** — the period (and, if useful, the specific week within it) where ending cash position is lowest, or where the swing from the prior period is largest. Name it specifically ("early October, right after the Q4 inventory buy lands and before holiday sales deposit").
- **Safe size for the next inventory buy** — the amount of cash the client can commit to inventory while still covering the tightest point's operating costs with a margin of safety (don't cut it to zero — build in a buffer for at least a few weeks of opex).

## Output → paste into Blueprint §8

| | [Q1] | [Q2] | [Q3] | [Q4] |
| :---- | ----: | ----: | ----: | ----: |
| Cash in (net deposits) | [$] | [$] | [$] | [$] |
| Inventory purchases | ([$]) | ([$]) | ([$]) | ([$]) |
| Ad spend | ([$]) | ([$]) | ([$]) | ([$]) |
| Operating + tax | ([$]) | ([$]) | ([$]) | ([$]) |
| **Ending cash position** | **[$]** | **[$]** | **[$]** | **[$]** |

- **Your tightest point:** [when, and how tight].
- **Safe size for your next big inventory buy:** [$X] by [date].
- **What this changes:** [1-2 sentences on the decision this unlocks.]
