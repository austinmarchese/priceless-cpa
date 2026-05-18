# Tech Stack Evaluation Conversation

**Date:** 2025-03-15
**Participants:** Anthony (Priceless CPA) + Claude
**Source:** Claude shared conversation snapshot
**Status:** Research only. No decisions finalized.

## Summary

Anthony evaluated Priceless CPA's full internal technology stack with Claude, starting from "what apps can Cowork connect to?" and ending with a complete analysis of a potential migration path. The conversation covered practice management (TaxDome vs Karbon), tax prep software (CCH Axcess vs ProConnect vs UltraTax), AI-powered return preparation (Filed vs Juno vs CCH Scan), business return automation (Engagement Essentials vs Tallyfor vs RegroupTAX), client intake (Soraban Collect), and engagement/billing (Anchor vs Ignition).

**Source type:** conversation transcript
**Relevance:** Foundational research for potential firm infrastructure changes
**Ingested:** 2025-04-17

## Topics Covered (in order)

1. Claude Cowork capabilities and CPA firm use cases
2. TaxDome API limitations (Zapier contacts-only, no document access)
3. Karbon vs TaxDome feature comparison across 8 use cases
4. Custom practice management build evaluation (found impractical for client portal)
5. Karbon API capabilities and gaps (documents not exposed)
6. Soraban Collect vs Deliver (Deliver redundant with Karbon)
7. AI tax prep landscape: Juno (TaxDome-exclusive), Filed (platform-independent), StanfordTax, Black Ore, Magnetic
8. CCH Axcess Scan vs Filed for automated data input
9. Filed + Karbon + CCH Axcess integration confirmation
10. Filed credit-based pricing structure
11. Business return automation: CCH Engagement Essentials vs Tallyfor vs RegroupTAX
12. Engagement Essentials pricing research (opaque, flat-fee, estimated $800-2,000)
13. CCH Axcess vs ProConnect vs UltraTax vs Drake evaluation
14. ProConnect + UltraTax hybrid analysis (found problematic)
15. Scaling math: flat-fee CCH favorable at 1,000+ returns
16. CCH support frustration acknowledged, timing considerations
17. Anchor vs Ignition: processing fee math ($0 vs $20-30K/yr at scale)
18. Full stack summary and cost comparison

## Key Insights

- TaxDome Zapier integration is contacts-only. Cannot pull documents, workflows, pipelines, invoices, or organizer data. This is the core limitation driving the evaluation.
- Filed is not Canopy-exclusive. It supports CCH Axcess, ProConnect, UltraTax, Lacerte, Drake natively. The Canopy "Smart Prep" is a distribution deal.
- Juno IS TaxDome-exclusive. Moving to Karbon means Juno is off the table in native form.
- CCH Axcess flat-fee pricing inverts the ProConnect cost advantage at 500+ returns.
- Engagement Essentials is reportedly flat-fee (not per-return), making it the cheapest trial balance option at 100-200 business returns.
- Anchor's $5 pass-through model means the firm pays $0 regardless of volume. Ignition's 1%+ processing fees compound to $20-30K/yr at scale.
- Claude Cowork skills are viable for narrative workpaper drafting (advisory memos, entity analysis) but not for structured tax extraction workpapers (Filed handles those).
- Full business return AI prep doesn't exist yet. CCH Expert AI for 1065s in early adopter phase.
