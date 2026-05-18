# TaxDome → Karbon Migration: Team Walkthrough

**Purpose:** Work through this with a teammate to make a go/no-go decision (or scope a phased path). Each section ends with discussion prompts.

**Status:** Research complete. No decision made. Multiple quotes still needed.

**Companion docs:**
- `karbon-vs-taxdome-deep-research.md` — full evidence + sources
- `research.md` — original tech stack research
- `raw-conversation-2025-03-15.md` — original Anthony + Claude conversation

---

## How to Use This Doc

Read top to bottom together. Stop at every "Discuss" box. Capture decisions or open questions in the "Decisions Log" at the bottom.

Estimated walkthrough time: 60-90 minutes.

---

## Part 1: Why We're Even Considering This

### The strategic driver

TaxDome works fine for daily operations today. The reason this is on the table:

> **TaxDome has no API.** Zapier integration is contacts-only (create/update/delete contacts). Cannot pull documents, workflows, pipelines, invoices, organizer data programmatically.

This blocks Anthony's vision of an AI-powered firm where Claude/automation tools can:
- Read work item status across the firm in real time
- Auto-route client intake to the right preparer + work template
- Surface capacity and bottlenecks on a dashboard
- Draft client communication with full thread context
- Tag documents, generate workpaper summaries, write back to the practice management system

None of that is buildable on TaxDome. All of it is buildable on Karbon's REST API.

### The cost we're paying for the API

Karbon does not just give us API access. It also takes away things TaxDome does well:
- Native unified client portal with messaging, chat, payments, e-sign
- Native two-way SMS
- IRS transcript integration
- Native organizers (Karbon needs StanfordTax add-on)
- Tax software print integration (Drake/Lacerte/UltraTax/CCH all print to TaxDome)
- All-in-one bundled pricing
- Mobile app maturity

### The big question for this walkthrough

> Is the API worth the cost (in dollars + disruption + lost native features)?

**Discuss:**
- On a 0-10 scale, how important is the AI-powered firm vision over the next 24 months?
- If we delayed it 18-24 months, what specifically do we lose?
- Are there workarounds for the API gap that don't require migration? (See Part 7.)

---

## Part 2: What Karbon Has That TaxDome Doesn't

| Feature | Why It Matters |
|---|---|
| **Native REST API v3** | The whole reason for migrating |
| **Email Triage** | Shared team inbox, all email flows in, AI-summarized, assignable, linkable to work items. Solves "who replied to this client?" for a 10-person team. |
| **WIP + realization dashboards** | Real-time profitability per client/manager/owner |
| **AI email composition** | Tone/length/language customizable. Saves admin time. |
| **Rate plans by role** | Multi-role billing depth |
| **Card surcharge passthrough** | Clients absorb processing fees |
| **Native integrations** | Filed, StanfordTax, Soraban, Ignition, Xero (two-way), HubSpot CRM all plug in cleanly |
| **n8n native node** | Self-hosted automation layer |

**Discuss:**
- Of these, which 2-3 would actually change our daily operations?
- Email Triage is the biggest UX shift. Do we currently have a "who replied?" problem? If not, it's a non-feature for us.

---

## Part 3: What TaxDome Has That Karbon Doesn't (Migration Loss)

Sorted by severity for our firm:

### HIGH severity

| Feature | Karbon Replacement | Cost |
|---|---|---|
| **IRS Transcript Integration** (official partnership) | TaxNow third-party only | TBD |
| **Tax Software Print Integration** (all major tax software prints to portal) | None | Workflow loss |
| **Native client portal** (mature, white-labeled) | Karbon for Clients (launched July 2025, immature) | $0 but UX risk |
| **K-1 tracking, tax notices, efile status** | Custom work item builds | Setup labor |

### MEDIUM-HIGH severity

| Feature | Karbon Replacement | Cost |
|---|---|---|
| **Native two-way SMS** ($0.04/msg) | GHL or TextMagic | $50-150/mo |
| **Native organizers** (mature, conditional, prior-year rollover) | StanfordTax add-on (Dec 2025 launch) or Soraban Collect | TBD or $15K/yr min |
| **In-portal client chat** | None | Email only |

### MEDIUM severity

| Feature | Karbon Replacement | Cost |
|---|---|---|
| **Bookkeeping hub + GL integration** | None | Only matters if we do bookkeeping |
| **Unlimited e-signatures** (bundled) | Credit-based, $0.80-1.00/credit, 2-3 credits per KBA | ~$550-800/yr at 200 returns; scales linearly |
| **Multi-language portal** | Not documented | Depends on client mix |

### NOTE: One major item NOT a gap anymore
**Karbon native KBA shipped July 2025.** Original research said it was on roadmap. It's live now. Cost is credit-based but functional.

**Discuss:**
- Which of the HIGH severity items would actually break our workflow? (Be honest — the ones we don't really use don't count.)
- Tax software print integration: how often do we use this today? Walking through a real client journey, where does it show up?
- IRS transcripts: how many transcripts do we pull per year? Workaround = manual e-Services pull. Painful but not blocking.
- Two-way SMS: is this how we actually chase clients, or do we mostly use email?

---

## Part 4: Edge Cases Both Platforms Miss

These don't change the decision but should be on our radar:

1. **Real per-client cost-to-serve profitability.** Karbon's realization dashboards get closer than TaxDome but neither tracks fully-loaded cost (partner review time, revisions, write-offs).
2. **Document versioning.** Neither makes v1/v2 of a return draft a first-class feature.
3. **Entity-relationship mapping.** A client with operating co + 2 LLCs + a trust shows up as 4 separate accounts in both systems. No native "this is one economic family" view. Real friction for RE-heavy clients.
4. **Karbon's monthly automation caps.** Undocumented. Real risk for high-volume reminder workflows.

**Discuss:**
- The entity-relationship gap is real for our RE-heavy clients. Is this a deal-breaker? Or do we already work around it?

---

## Part 5: The Migration Itself (The Hard Part)

### Hard showstoppers

1. **No bulk migration tooling exists.** Reverse direction (Karbon → TaxDome) is the dominant flow. No vendor will hold our hand.
2. **Karbon import = contacts only.** Spreadsheet upload of orgs + people. That's it. Documents/messages/invoices/templates/organizer responses are NOT imported.
3. **Workflow templates rebuild from scratch.** 20-60+ hours. Anthony probably has to do this himself.
4. **TaxDome chat history not bulk exportable.** Print-to-PDF one thread at a time.
5. **Recurring invoices not exportable.** Re-enter manually.
6. **Organizer responses CSV one-by-one only.** Multi-year history effectively lost.
7. **Karbon Team plan caps at 1,000 contacts.** We need Business plan ($89/user/mo) for headroom.
8. **TaxDome post-cancellation data window undefined.** Export EVERYTHING before canceling.

### Soft risks (recoverable but painful)

- Document folder structure: Drive sync preserves it. Upload to Karbon is manual per work item (10-30 hrs).
- E-signed 8879 audit trails: download all signed PDFs from Drive before canceling. Verify embedded certificate page exists.
- Client portal re-onboarding: 5-15% of clients need hands-on help. 2-4 weeks of re-invitation campaigns.
- Time tracking + payment history: CSV archive only. Not live in Karbon.
- §7216 disclosure: update engagement letters to name Karbon as data processor BEFORE migration.

### 12-week migration sequence (must be May-July, never during tax season)

| Week | Action |
|---|---|
| 1-2 | Export everything from TaxDome (Drive sync, all CSVs, signed 8879s, chat threads worth keeping) |
| 3-4 | Set up Karbon: contacts CSV import, permissions, rebuild high-volume templates |
| 5-6 | Upload docs to Karbon Storage. Lock in StanfordTax or Soraban for organizer replacement |
| 7-8 | Pilot 10-15 active clients fully through Karbon |
| 9-10 | Bulk-invite remaining clients to Karbon portal |
| 11-12 | Cancel TaxDome (after exports verified). Read-only parallel during remaining billing period |

### Total disruption cost

| Category | Range |
|---|---|
| Karbon subscription delta | $0 to +$4,800/yr |
| Organizer replacement (StanfordTax or Soraban) | +$2,400-15,000/yr |
| Staff time (template rebuild, doc upload, re-onboarding) | $4,500-18,000 one-time |
| Dual-platform overlap 1-2 months | $800-1,600 one-time |
| **Client churn risk (2-5% × 200 clients × $2.5K avg revenue)** | **$10,000-25,000** |
| **Total one-time disruption** | **$15,000-45,000 fully loaded** |

> **Biggest single risk is client churn from portal re-onboarding, not software cost.**

**Discuss:**
- Can Anthony actually carve out 60-120 hours in May-July for the migration?
- Who else on the team would be involved in template rebuild + document upload?
- Are we comfortable with a 2-5% client churn assumption? Which 4-10 clients would be most likely to leave?
- Do we have an alternative tax season plan if Karbon hasn't stabilized by January?

---

## Part 6: Money

### Today's stack (TaxDome all-in)

| Line | Year 1 | Year 3 (with TaxDome's 10%/yr trajectory) |
|---|---|---|
| TaxDome Pro 1-yr (10 users) | $10,000 | ~$13,310 |
| Tax software (CCH or ProConnect) | $5,868 | ~$11,000 |
| Ignition Pro | $2,748 | $2,748 |
| **Total** | **$18,616** | **~$27,000-28,000** |

### If we migrate (Karbon full stack)

| Line | Year 1 | Year 3 |
|---|---|---|
| Karbon Business 10 users | $10,680 | $10,680 |
| eSign credits | $960 | $2,400 |
| CCH Axcess Essentials | $3,740 | $4,874 |
| Ignition Pro | $2,748 | $2,748 |
| SmartVault Accounting Pro | $5,400 | $5,400 |
| Migration/onboarding | $2,000-5,000 | -- |
| **Total** | **$25,528-28,528** | **$26,102** |

### Key insight: stacks converge by Year 3

TaxDome's price trajectory (67% over 3yrs based on $600 → $1,000 history) eats its early cost advantage. The cost question is mostly a Year 1 disruption question, not a long-term economics question.

### TaxDome price history (worth knowing)

| Year | Pro plan/user/yr | Change |
|---|---|---|
| 2020-2022 | $600 | Launch |
| Feb 2023 | $800 | +33% ("first-ever price change") |
| 2024-2025 | $1,000 | +25% (via tier restructure) |

**+67% over 3 years.** The 3-yr lock-in is real but expires.

**Discuss:**
- Year 1 delta is ~$7-10K + the disruption cost ($15-45K). Is that worth the API + workflow upgrade?
- If we lock TaxDome into another 3-yr commit, we're betting against the trajectory. Is that wise?
- Karbon AI is currently bundled. "Future pricing may apply." If it becomes $20/user/mo = $2,400/yr add-on, does the math change?

---

## Part 7: Hybrid + No-Migration Options

### Option C: Karbon for new clients only (hybrid)

Run both. New engagements go to Karbon. In-flight returns finish in TaxDome. Phase out TaxDome over 12-18 months.

**Pros:** Limits portal churn risk. Lets us validate Karbon during low-stakes work.
**Cons:** Dual-platform burden. Client segmentation complexity (new vs existing get different experiences). 12-18 months of paying for both.

### Option D: Stay on TaxDome, build automation around it differently

Anthony's research said TaxDome's API is contacts-only via Zapier. One subagent (less authoritative) suggested TaxDome has more API surface than originally believed. Worth verifying.

If TaxDome's API is genuinely just contacts:
- Browser automation (Playwright against TaxDome web UI) is technically viable but operationally fragile. UI changes break scripts. No vendor support. Creates undocumented technical debt. Not recommended as primary strategy.
- Shared inbox tools (Front, Missive) layered over Gmail/Outlook can replicate most of Karbon Triage value at $5-15/user/mo. Worth evaluating.
- Webhooks via Zapier can fire on contact-level events but won't surface work/document state.

### Option E: Wait 18-24 months and revisit

Karbon's tax-firm features (FIFO queues, StanfordTax organizers, extension management, native portal, KBA) all shipped between June 2025 and Feb 2026. They're 6-18 months old and unvalidated by community adopters.

If we wait until late 2027:
- Community feedback on tax-firm Karbon adopters will exist
- 8879 workflow either proven or proven-broken
- Client portal matures
- TaxDome's price increases will have eaten more of its cost advantage anyway

**Discuss:**
- Which of these 5 paths (A: stay, B: migrate, C: hybrid, D: extend TaxDome, E: wait) feels right gut-check?
- What would have to be true for us to pick each one?

---

## Part 8: Recommended Supporting Tools (If We Migrate)

| Need | Tool | Annual Cost | Status |
|---|---|---|---|
| Practice management | Karbon Business (10 users) | $10,680 | Locked if migrating |
| Organizer + workpaper binder | StanfordTax (Karbon partnership) | TBD | **Quote needed** |
| 1040 prep AI | Filed | TBD (credit-based) | **Quote needed** |
| Document mgmt + KBA bundled | SmartVault Accounting Unlimited | $7,800-9,000 | Recommended |
| Engagement letters | Anchor (keep) | $0 firm cost | Already working |
| Payment collection | Karbon Payments (ACH) | ~$1,000 | Stripe-powered, surcharge passthrough |
| Business return TB | CCH Engagement Essentials | $800-2,000 | **Quote needed** |
| Client intake AI | Soraban Collect | $15K/yr min floor | Validate need before committing |
| Internal automation | n8n self-hosted | $20-50/mo infra | Anthony builds Karbon webhook → Claude flows |
| SMS replacement | GHL or TextMagic | $50-150/mo | If we need SMS at all |
| Tax software (kept) | CCH Axcess Tax | ~$10K-15K | No change |

**Discuss:**
- Soraban's $15K/yr floor is steep. Do we actually need it on top of StanfordTax?
- SmartVault adds $7-9K/yr but bundles KBA + DMS + branded portal. Is that worth it vs Karbon Storage + OneDrive manual workflow?
- Do we keep Ignition? Or just lean on Anchor for engagement and Karbon Payments for collection?

---

## Part 9: Open Questions That Must Be Answered Before Deciding

1. **Filed:** Per-credit pricing? Coverage of business returns, multi-state, RE? Demo scheduled?
2. **CCH Engagement Essentials:** Flat-fee quote as contract add-on?
3. **CCH Axcess Scan:** Worth bundling cheaply alongside Filed?
4. **ProConnect:** Get quote as CCH negotiation leverage?
5. **Karbon eSign:** 2 or 3 credits per KBA recipient? (Affects $550 vs $800 budget)
6. **Karbon AI:** Confirmed bundled in Business tier? Or is "future pricing" closer than implied?
7. **Soraban Collect:** Confirm collect-only pricing + 50-return/mo minimum applicability
8. **StanfordTax:** Pricing through Karbon partnership vs standalone?
9. **TaxDome native API:** Is it actually contacts-only, or is there more surface area than original research found? (Verify before committing to migration on API grounds.)
10. **Our actual workflow audit:** How often do we use IRS transcript integration, tax software print-to-portal, in-portal chat, two-way SMS today? (If rarely, the migration loss is smaller than the matrix suggests.)

---

## Part 10: Decision Framework

For each migration path, list what would have to be true:

### Path A: Stay on TaxDome 18-24 months, revisit
- True if: AI-firm vision can wait. Daily ops are fine. Risk tolerance for migration is low.
- False if: Anthony has a specific Q3-Q4 2026 deliverable that requires Karbon API.

### Path B: Migrate now (May-July 2026)
- True if: Mitigations all funded (paid Guided Implementation, SmartVault, StanfordTax, parallel-run, Karbon champion). API access has urgent strategic value.
- False if: Any mitigation can't fund. Or staff capacity for 60-120 hrs migration work doesn't exist this summer.

### Path C: Hybrid (Karbon for new clients only)
- True if: We want to validate Karbon for tax workflow before betting the firm. Comfortable with 12-18 months of dual-platform pain.
- False if: Client segmentation complexity is unmanageable. Or if "validated" never converts to "fully migrated."

### Path D: Stay on TaxDome + extend differently
- True if: TaxDome's API is more capable than original research found. Or shared inbox tools (Front/Missive) deliver most of Karbon's Triage value at low cost.
- False if: TaxDome API really is contacts-only AND third-party tools can't bridge the gap.

### Path E: Wait
- True if: We can build the AI-firm vision incrementally on TaxDome's limited surface for 18-24 months. Or if we're not ready to bet on Karbon's tax features being mature enough.
- False if: Competitors gain meaningful AI advantage in that window.

**Discuss:**
- Walk through each path together. Rank 1-5 by gut feel. Compare rankings.
- For your top pick: what's the smallest experiment we could run in the next 30 days to test the assumption?

---

## Decisions Log

(Capture as you go)

| Date | Decision / Open Question | Owner | Next Step |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

---

## Appendix: Sources

Full citations and raw evidence in:
- `karbon-vs-taxdome-deep-research.md` (this folder)
- `research.md` (this folder, original tech stack research)
- Subagent raw outputs at `/private/tmp/claude-501/-Users-austinmarchese-client-code-priceless-cpa/.../tasks/`

Primary sources: Karbon developer center + pricing + release notes, TaxDome help center + pricing docs, CPA Practice Advisor (June/July/Dec 2025 announcements), Capterra/G2 reviews, IRS §7216 regs, vendor pricing pages for SmartVault/Ignition/Filed/StanfordTax/Soraban, Reddit /r/taxpros + /r/Accounting threads, Financial Cents and Uku independent comparisons.
