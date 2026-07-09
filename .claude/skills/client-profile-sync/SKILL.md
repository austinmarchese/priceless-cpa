---
name: client-profile-sync
description: Auto-populate a client's tax planning profile from Karbon (structured facts via REST API) and Ping Assistant (call/meeting/email context via MCP). Pulls identity, entity structure, engagement history, and custom fields from Karbon; extracts goals, life events, and planning intent from Ping transcripts with citations; merges everything into the CLIENT-PROFILE-TEMPLATE format with provenance tags and [NEEDS INPUT] gap markers. Also handles one-time setup (--setup creates the Karbon custom fields and smoke-tests credentials) and post-engagement write-back (--write-back posts a "new facts learned" note to the client's Karbon timeline and updates custom field values). Trigger phrases: "sync client profile for [name]", "client-profile-sync [name]", "pull client context from Karbon", "hydrate the client profile", "profile sync setup", "write back to Karbon". Requires KARBON_BEARER_TOKEN + KARBON_ACCESS_KEY env vars and the Ping MCP connector. Architecture doc: docs/integrations/karbon-ping-architecture.md.
---

# Client Profile Sync

## Purpose

Analysts lose time manually typing client context (age, goals, entity history, planning details) into every engagement. This skill pulls that context automatically:

- **Karbon** (REST API v3) → structured facts: DOB/age, entity structure, incorporation details, EIN, revenue, engagement history, firm-defined custom fields
- **Ping Assistant** (MCP server) → soft context: goals, life events, planning intent extracted from call/meeting transcripts and emails, with citations

Output is a draft CLIENT PROFILE (same 12-section format as `.claude/skills/priceless-tax-planning/shared/CLIENT-PROFILE-TEMPLATE.md`) with every auto-filled field tagged with its source and every gap marked `[NEEDS INPUT]`. The analyst reviews, fills gaps, and uploads to Karbon under the engagement. **The profile is never committed to this repo** (client PII).

## Modes

| Invocation | What it does |
|---|---|
| `/client-profile-sync --setup` | One-time: smoke-test Karbon credentials, verify Ping MCP, create the six Karbon custom fields |
| `/client-profile-sync [client name]` | Full sync: pull Karbon + Ping, produce draft profile |
| `/client-profile-sync [client name] --karbon-only` | Skip Ping (e.g., Ping MCP not connected on this machine) |
| `/client-profile-sync [client name] --write-back` | After an engagement: post "new facts learned" note to Karbon timeline + update custom field values |

## Step 0: Preflight (every run)

1. Check env vars are set: `KARBON_BEARER_TOKEN` (36-char GUID Application ID) and `KARBON_ACCESS_KEY` (JWT starting `eyJ`). If missing, stop and point the user to the setup guide (`docs/integrations/keyur-setup-guide.md` / PDF).
2. Smoke test: `bash .claude/skills/client-profile-sync/scripts/karbon.sh smoke` (calls `GET /v3/TenantSettings`).
   - `401` → keys swapped or invalid. The Bearer header takes the Application ID GUID; the AccessKey header takes the JWT. They are NOT interchangeable.
   - `403` → endpoint not granted to the API application, or the firm is not on a Business/Enterprise Karbon plan (API is plan-gated).
3. Unless `--karbon-only`: check Ping MCP tools are available (ToolSearch for `ping`). If absent, offer to continue Karbon-only and note that goals/context sections will be `[NEEDS INPUT]`.

All Karbon calls go through the helper script (`scripts/karbon.sh`) or direct `curl` with:

```bash
curl -s --compressed \
  -H "Authorization: Bearer $KARBON_BEARER_TOKEN" \
  -H "AccessKey: $KARBON_ACCESS_KEY" \
  -H "Accept: application/json" \
  "https://api.karbonhq.com/v3/..."
```

Rate limit is 120 req/min per account. A single-client sync is ~6-10 calls, never an issue; if you ever loop over many clients, sleep 500ms between calls and honor `Retry-After` on any `429`.

## Step 1: Resolve the client in Karbon

Input is a client name. Search all three entity types (OData filters are case-insensitive):

```
GET /v3/Contacts?$filter=contains(FullName,'{name}')
GET /v3/Organizations?$filter=contains(FullName,'{name}')
GET /v3/ClientGroups?$filter=FullName eq '{name}'        # ClientGroups: eq only, no contains
```

Present matches to the analyst and confirm which is the anchor client. Note the key type: individual clients anchor on a **Contact**; if the contact belongs to a **ClientGroup**, the group is the profile scope (one profile per household/entity cluster).

## Step 2: Karbon pull chain

For the confirmed client, pull in this order:

| # | Call | Feeds profile section |
|---|---|---|
| 1 | `GET /v3/Contacts/{ContactKey}?$expand=BusinessCards,ClientTeam` | §1 Identity: `AccountingDetail.BirthDate` → compute age, `Sex`, emails/phones/addresses from BusinessCards, ClientOwner/ClientManager |
| 2 | `GET /v3/ClientGroups/{key}` (if contact is in a group) | Entity map: `Members[]` lists every contact + org in the household |
| 3 | `GET /v3/Organizations/{key}?$expand=Contacts,BusinessCards` for EACH org in Members | §2 Entity structure: `AccountingDetail.EntityType`, `IncorporationDate`, `IncorporationState`, `LineOfBusiness`, `AnnualRevenue`, `FinancialYearEndMonth` (**0-indexed**: 0=Jan), `RegistrationNumbers[]` (EIN), `DateSignedEngagement`; owner roles via `BusinessCards.RoleOrTitle` |
| 4 | `GET /v3/WorkItems?$filter=ClientKey eq '{key}'&$orderby=StartDate desc` | Engagement history: Title, WorkType, WorkStatus, dates. Run per member key |
| 5 | `GET /v3/CustomFieldValues/{EntityKey}` for contact + each org | Filing Status, Client Goals, Entity History, Planning Notes, Engagement Tier, Ping Client Name |
| 6 | `GET /v3/FileList/Contact?EntityKey={key}` (and `/FileList/Organization`) | Documents on file (returns list + DownloadUrls) |

Pagination: list responses are OData envelopes (`value[]`, `@odata.nextLink`). Follow `@odata.nextLink` verbatim if present; max page size 100.

Build the **identity bundle** as you go — needed for Step 3:

```json
{ "names":  [contact FullName + PreferredName, each org LegalName/TradingName/FullName],
  "emails": [every BusinessCards.EmailAddresses entry across all members],
  "phones": [every BusinessCards.PhoneNumbers entry, normalized to E.164] }
```

## Step 3: Pair with Ping (identity resolution)

There is no shared key between Karbon and Ping. Resolve per the architecture doc:

1. **Fast path**: if custom field `Ping Client Name` is set (from Step 2, call #5), query Ping MCP with that exact client name. Done.
2. Else search Ping for each name in the identity bundle.
3. Validate every candidate: does the Ping client's contact email set or phone set intersect the Karbon bundle?
   - ≥1 email or phone match → accept.
   - Name-only match → show the analyst both records, ask to confirm (once per client, ever).
   - Phone matching multiple Karbon bundles (shared office line) → never auto-accept, ask.
4. On confirmation, persist: `PUT /v3/CustomFieldValues/{ContactKey}` setting `Ping Client Name`. **CustomFieldValues PUT replaces ALL values for the entity — always GET current values first, modify, PUT the full set back.**
5. No Ping match at all → report it (likely contact-data parity problem: client's email/phone missing in Ping), mark Ping-sourced sections `[NEEDS INPUT]`, continue.

## Step 4: Extract context from Ping

Query the Ping MCP (searches meetings, calls, emails, transcripts) for the paired client:

1. **Goals + life events**: "Search meetings and calls for [Ping client] in the last 12 months. Extract: stated financial/business goals, life events (marriage, children, relocation, health), timeline intentions."
2. **Transactions + entity plans**: "Search [Ping client] conversations for: business sale/acquisition plans, real estate purchases or sales, entity formation/restructuring mentions, large planned purchases (vehicles, equipment, aircraft), retirement plan discussions."
3. **Email context**: "Search emails with [Ping client] for planning-relevant threads: compensation changes, distributions, estimated payment discussions, new income sources."

Rules for extracted facts:
- Every fact carries a citation: `(Ping meeting 2026-05-14: "we want to exit the HVAC business in 3 years")`.
- Direct quotes where the wording matters (goals, intent). Paraphrase logistics.
- Conflicts between Ping statements at different dates → keep the most recent, note the change.
- Ping facts never overwrite Karbon structured facts; if they conflict (e.g., transcript mentions an entity Karbon doesn't have), flag as `[VERIFY: mentioned in Ping, not in Karbon]`.

## Step 5: Merge into the profile draft

1. Load `.claude/skills/priceless-tax-planning/shared/CLIENT-PROFILE-TEMPLATE.md` as the skeleton.
2. Fill every field you can, tagging provenance inline:
   - `**Taxpayer Age**: 47 _(Karbon AccountingDetail.BirthDate, synced 2026-07-09)_`
   - `**Client goals**: Exit operating co within 3 years _(Ping meeting 2026-05-14)_`
3. Anything neither source covers → `[NEEDS INPUT]`. Do not guess. Do not fill income figures (§3+) from Ping chatter; those come from returns/QBO in the engagement phases.
4. Prepend a sync header: sync date, Karbon keys used, Ping client name, counts (fields filled from Karbon / from Ping / needing input).

## Step 6: Output handling (PII discipline)

- Write the draft to `~/client-profiles/[client-slug]-profile-[YYYY-MM-DD].md` (create the folder if missing). **Never** write it inside this repo, the repo is shared and pushes to a production deploy.
- Tell the analyst: review, fill `[NEEDS INPUT]` fields, then upload the finished profile to Karbon under the engagement (the template's own storage convention).
- Offer the review summary in chat: what was auto-filled, what needs input, any `[VERIFY]` flags.

## Write-back mode (`--write-back`)

Run after quarterly-memo-6 (or any engagement that surfaced new facts):

1. Ask the analyst for (or infer from the session) the new facts learned this quarter.
2. Draft a timeline note (HTML body): what changed, decisions made, facts to remember. Show the analyst for approval.
3. Post it: `POST /v3/Notes` with `{Subject, Body, AuthorEmailAddress: [analyst email], Timelines: [{EntityType: "Contact", EntityKey: "..."}]}`. Notes are create-only (no update endpoint). Store the returned NoteID in the note ledger: `~/client-profiles/.note-ledger.json` (append `{clientKey, noteId, date, subject}`) — the API has no "list notes" endpoint, this ledger is the only way to re-read our own notes later.
4. Update structured fields if goals/tier/status changed: GET current `CustomFieldValues`, modify, PUT full set.

## Setup mode (`--setup`)

1. Run smoke test (Step 0).
2. List existing custom fields: `GET /v3/CustomFields`. Create any of these six that are missing via `POST /v3/CustomFields`:

| Name | Type | Visible on |
|---|---|---|
| Filing Status | ListSingleSelect (Single, MFJ, MFS, HOH, QW) | Contacts |
| Client Goals | Text | Contacts + Organizations |
| Entity History | Text | Organizations |
| Planning Notes | Text | Contacts + Organizations |
| Engagement Tier | ListSingleSelect (Foundational, Comprehensive, Full Wealth) | Contacts |
| Ping Client Name | Text | Contacts |

   Payload shape: `{"Name": "...", "Type": "...", "IsVisibleToContacts": true, "IsVisibleToOrganizations": false, "ListOptions": [...]}`. Never DELETE a custom field definition (destroys all values, irreversible) without explicit partner confirmation.
3. Verify Ping MCP responds (simple search).
4. Report readiness: Karbon OK / custom fields created / Ping OK.

## Error handling

| Symptom | Cause | Fix |
|---|---|---|
| `401` on everything | Bearer/AccessKey headers swapped, or key rotated | Bearer = Application ID GUID; AccessKey = JWT. Re-copy from Karbon Settings → Connected Apps |
| `403` on specific endpoint | Endpoint not granted to the API application, or plan below Business | Grant in Karbon Connected Apps settings; confirm plan tier |
| `429` | Rate limit (120/min) | Honor `Retry-After` header, resume |
| `409` on Work Item PATCH | Optimistic concurrency conflict | Re-GET and retry |
| Custom field values vanished after update | PUT replace-all semantics violated | Always GET-modify-PUT the full value set |
| Ping search returns nothing for a real client | Contact email/phone parity gap between systems | Add the client's email + mobile to Ping contacts (and Karbon BusinessCards), re-run |

## Reference

- Architecture + pairing logic: `docs/integrations/karbon-ping-architecture.md`
- Karbon API reference: https://karbonhq.github.io/karbon-api-reference/ (spec: `KarbonAPI.json`; guides at developers.karbonhq.com, append `.md` for raw markdown)
- Ping MCP docs: https://www.pingassistant.com/help-center/integrations/connect-to-claude-mcp
- Profile template: `.claude/skills/priceless-tax-planning/shared/CLIENT-PROFILE-TEMPLATE.md`
