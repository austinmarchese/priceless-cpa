# Karbon + Ping Integration Architecture

**Goal:** auto-populate the client profile (`.claude/skills/priceless-tax-planning/shared/CLIENT-PROFILE-TEMPLATE.md`) from Karbon and Ping so analysts stop manually typing client context (age, goals, entity history, planning details) into every engagement.

**Status:** Architecture proposal, based on doc review July 2026.
**Sources reviewed:** Karbon developer docs (developers.karbonhq.com, full OpenAPI spec) and Ping Assistant docs (pingassistant.com help center).

---

## The two systems are opposites, so they get different integration patterns

| | Karbon | Ping Assistant |
|---|---|---|
| What it holds | Structured facts: DOB, entity data, work history, custom fields | Unstructured context: call/meeting transcripts, emails, per-client memory |
| Public REST API | Yes (v3, full OpenAPI spec) | **No** |
| MCP server | Announced ("Kai" roadmap), not shipped. Zapier-hosted MCP exists today | **Yes, shipped and documented:** `https://app.pingassistant.com/api/mcp` |
| Webhooks | Yes (Contact, Work, Note, CustomField) | No |
| Integration pattern | **Deterministic REST pull** via a sync skill | **Live MCP queries** from the Claude session |

Bonus already working in production: Ping natively syncs meeting summaries onto Karbon client timelines and creates Karbon work items from action items. The pipes between the two vendors already exist; this architecture only adds Claude as a reader/writer.

---

## Target architecture

```
                    STRUCTURED FACTS                      UNSTRUCTURED CONTEXT
┌────────────────────────────────────┐        ┌───────────────────────────────────┐
│ KARBON (system of record)          │        │ PING ASSISTANT                    │
│ Contacts / Orgs / ClientGroups     │◄───────│ meetings, Quo calls, emails,      │
│ AccountingDetail, WorkItems,       │ native │ transcripts, Client Memory        │
│ Custom Fields, Notes/timeline      │  sync  │                                   │
└────────────┬───────────▲───────────┘        └────────────────┬──────────────────┘
             │ REST v3   │ REST v3                             │ hosted MCP
             │ (pull)    │ (write-back)                        │ (OAuth per user)
             ▼           │                                     ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ /client-profile-sync [client]   (Claude Code skill)                             │
│  1. Pull Karbon facts        → identity, entities, work history, custom fields  │
│  2. Query Ping MCP           → goals, life events, planning intent w/ citations │
│  3. Merge into CLIENT PROFILE draft, mark gaps [NEEDS INPUT]                    │
│  4. Analyst reviews + fills gaps (human gate stays)                             │
└──────────────────────────────────────┬──────────────────────────────────────────┘
                                       ▼
                     Quarterly engagement runs unchanged
                     (tax-return-analysis-1 → … → quarterly-memo-6)
                                       │
                                       ▼
                     Write-back: POST Note to Karbon timeline +
                     PUT CustomFieldValues (new facts learned this quarter)
```

Design principles:

1. **Profile as cache layer.** The tax skills never call APIs live. The sync skill hydrates the profile document; engagements consume the document. APIs down = engagement still runs off the last profile.
2. **Karbon stays system of record.** New facts flow back INTO Karbon (notes + custom fields), not into this repo. No client PII committed to git (repo is shared and auto-deploys `web/` to prod).
3. **Provenance on every auto-filled field.** `Age: 47 (Karbon AccountingDetail.BirthDate, synced 2026-07-09)` or `Goal: exit operating co within 3 yrs (Ping meeting 2026-05-14)`. Analysts trust what they can trace.
4. **Human gate stays.** Sync produces a draft. Analyst approves before the engagement runs.

---

## Karbon integration (REST v3)

### Access requirements

- **Plan gating: API access requires Business or Enterprise plan.** Confirm Priceless CPA's tier first; this is a hard blocker.
- **One API application per account.** Self-service registration: Karbon Settings → Connected Apps → API Applications. Claude integration consumes the firm's single slot. Certified partner integrations (Ping's Karbon sync, Zapier) do NOT consume it.
- Auth: two static headers on every request, no OAuth, no refresh:
  - `Authorization: Bearer {ApplicationID}` (GUID, delivered at registration)
  - `AccessKey: {JWT}` (from Settings → Connected Apps)
- Keys are **account-level and see everything** regardless of per-user Karbon permissions. Store as env vars on operator machines (`KARBON_BEARER_TOKEN`, `KARBON_ACCESS_KEY`), never in the repo. Rotate via the self-service Rotate button if leaked.
- Rate limit: 120 req/min per account. Use `Accept-Encoding: gzip`, `$top=100`, server-side `$filter`.
- Base: `https://api.karbonhq.com/v3/`. Smoke test: `GET /v3/TenantSettings`.
- Full spec: https://karbonhq.github.io/karbon-api-reference/KarbonAPI.json · Guides: https://developers.karbonhq.com (append `.md` to any guide for raw markdown; `llms.txt` available).

### Per-client pull (≈6 calls per client)

| Profile section | Karbon call | Key fields |
|---|---|---|
| 1. Identity & filing | `GET /v3/Contacts/{key}?$expand=BusinessCards,ClientTeam` | `AccountingDetail.BirthDate` (age!), `Sex`, addresses/phones/emails via BusinessCards, `ClientTeam` (owner/manager) |
| 2. Entity structure | `GET /v3/Organizations/{key}?$expand=Contacts,BusinessCards` per entity | `AccountingDetail`: `EntityType`, `IncorporationDate`, `IncorporationState`, `LineOfBusiness`, `FinancialYearEndMonth` (0-indexed!), `AnnualRevenue`, `RegistrationNumbers[]` (EIN), `DateSignedEngagement` |
| Household / entity map | `GET /v3/ClientGroups/{key}` | `Members[]` = contacts + orgs in the group |
| Engagement history | `GET /v3/WorkItems?$filter=ClientKey eq '{key}'&$orderby=StartDate desc` | `Title`, `WorkType`, `WorkStatus`, dates |
| Firm-defined fields | `GET /v3/CustomFieldValues/{EntityKey}` | see custom fields below |
| Documents on file | `GET /v3/FileList/Contact?EntityKey={key}` | `FileName`, `DownloadUrl` |

`AccountingDetail` ("DetailsOfAccounting" schema) is the tax-planning goldmine, on both Contacts and Organizations. It's also writable.

### Custom fields: the durable home for what Keyur types manually

Karbon has no native fields for filing status, client goals, or planning history. Define them **once** via `POST /v3/CustomFields` (types: Text, Number, Date, Boolean, Colleague, ListSingleSelect, ListMultipleSelect; available on Contacts and Orgs only, not Work Items):

- `Filing Status` (ListSingleSelect: Single/MFJ/MFS/HOH/QW)
- `Client Goals` (Text)
- `Entity History` (Text)
- `Planning Notes` (Text)
- `Engagement Tier` (ListSingleSelect: Foundational/Comprehensive/Full Wealth)
- `Ping Client Name` (Text — persisted Ping↔Karbon pairing, see identity resolution section)

Then they're editable by anyone in the Karbon UI, readable/writable via `GET/PUT /v3/CustomFieldValues/{EntityKey}`, with the `CustomField` webhook for change detection. **Caveat: PUT replaces ALL values for the entity — always GET-modify-PUT.** (Same caveat for BusinessCards PUT.)

### Write-back loop

- `POST /v3/Notes` with `Timelines: [{EntityType: 'Contact', EntityKey: '...'}]` puts an HTML note on the client's Karbon timeline (create-only, no update). Post the quarterly "new facts learned" summary here with a firm user as `AuthorEmailAddress`.
- `PUT /v3/CustomFieldValues/{EntityKey}` updates the structured fields (goals changed, tier changed).

### Hard gaps in the Karbon API (design around, don't fight)

1. **No email retrieval.** Client email correspondence on Karbon timelines is unreachable via the public API. Not a problem here: **Ping captures emails independently** (Gmail/Outlook connection) and exposes them via its MCP. Email context comes from Ping, period.
2. **No "list notes by contact" endpoint.** `GET /v3/Notes/{id}` needs a NoteID you already have. Historical timeline notes are unreachable. Mitigations: (a) we create our own notes, so we can store their keys; (b) full call/meeting content is available from Ping MCP directly, so we never need to read Ping's synced summaries back out of Karbon; (c) if note history ever matters, subscribe to the `Note` webhook and accumulate keys, but that requires a hosted endpoint — skip for v1, on-demand sync is enough.

---

## Ping integration (hosted MCP)

### What Ping is

Ping Assistant (pingassistant.com): AI client-intelligence platform for accounting firms. Captures meetings (Zoom/Meet/Teams notetaker), phone calls (via Quo/OpenPhone — OpenPhone auto-record+transcription must be on; calls under 30s skipped), and emails. Every interaction auto-links to a client by contact email or phone number match (hence the phone-number import during setup). Per-client timeline + "Client Memory" + Ask Ping Q&A.

### Access path: MCP only

- **No public REST API, no webhooks, no Zapier.** The one documented programmatic path is the hosted MCP server:
  - **URL:** `https://app.pingassistant.com/api/mcp`
  - **Auth:** OAuth — connect, log in with Ping credentials, authorize. Per-user.
  - **Scope:** search/read emails, clients, meetings, transcripts; draft with Ping context.
  - Docs: https://www.pingassistant.com/help-center/integrations/connect-to-claude-mcp
- Add to Claude Code (per operator):
  ```bash
  claude mcp add --transport http ping https://app.pingassistant.com/api/mcp
  ```
  Each analyst authenticates with their own Ping login; Ping's assignment groups then govern which clients they can query. That's better than a shared key: client visibility permissions carry through.

### What the sync skill asks Ping

During profile hydration, query per client:

1. "Search meetings and calls for [client] in the last 12 months. Extract: stated goals, life events (marriage, kids, moves, health), entity/transaction plans (sales, acquisitions, real estate), risk tolerance signals."
2. "Search emails with [client] for planning-related threads: entity changes, major purchases, comp changes."
3. Every extracted fact cited: `(Ping meeting 2026-05-14: "we want to exit the HVAC business in 3 years")`.

These fill the profile sections Karbon can't: goals, planning intent, soft context. Exactly the fields Keyur named (age comes from Karbon; goals/entity history come from Ping + custom fields).

---

## Pairing Ping data with Karbon data (identity resolution)

There is no shared foreign key between the two systems. Ping's MCP returns its own client/contact records; Karbon keys are GUIDs Ping never exposes. The two vendors DO hold a curated mapping internally (Ping's native Karbon sync posts notes to the correct Karbon timeline, matched during Ping setup), but that crosswalk is not readable through any API. So the sync skill resolves identity itself.

### Entity model mismatch to respect

| Ping | Karbon | Notes |
|---|---|---|
| Client (= company/household bucket) | Organization OR Contact OR ClientGroup | Ping has one flat "client"; Karbon splits person / entities / group |
| Contact (person under a client, keyed by name + email + phone) | Contact + BusinessCards (emails, phones) | Same person, different keys |
| — | ClientGroup.Members[] | Karbon's entity cluster; one Ping client usually spans a whole Karbon group |

### Join keys, in order of reliability

1. **Email address** — Ping auto-links emails/meetings to clients by participant email; Karbon stores every email on `BusinessCards.EmailAddresses[]`. Deterministic when they overlap.
2. **Phone number** — Ping links Quo calls by caller number (that's why the team imported phone numbers at setup); Karbon stores `BusinessCards.PhoneNumbers[]`. Normalize both sides to E.164 before comparing.
3. **Name** — fuzzy, tie-breaker only. Compare against Karbon `FullName`, `PreferredName`, and entity `AccountingDetail.LegalName`/`TradingName`.

### Resolution flow in /client-profile-sync

```
1. Resolve client in Karbon (name → ContactKey / OrgKey / ClientGroupKey)
2. Build identity bundle from Karbon across ALL ClientGroup members:
   { names[], emails[], phones[] (E.164) }        ← BusinessCards expansion
3. Check Karbon custom field "Ping Client Name" — if set, query Ping with it directly (fast path)
4. Else query Ping MCP by each name in the bundle
5. Validate every Ping match: does the Ping client's contact email set or
   phone set intersect the Karbon bundle? 
     ≥1 email or phone match → accept
     name-only match         → flag, ask analyst once
6. On analyst confirmation, persist the pairing: PUT Karbon custom field
   "Ping Client Name" = the confirmed Ping client name
7. Tag every extracted Ping fact with the Karbon ClientKey + citation
```

Step 6 is the important one: ambiguity gets resolved by a human **once per client ever**, then the mapping lives in Karbon (visible and editable in the UI) and every later sync takes the fast path. Add "Ping Client Name" (Text) to the Phase 1 custom-field list.

### Known edge cases

| Case | Handling |
|---|---|
| Personal Gmail in Ping vs work email in Karbon | Email match fails, phone match usually saves it; else the one-time analyst confirmation |
| One owner, multiple entities ("HVAC Co" in Ping, person + 3 orgs in Karbon) | Identity bundle spans the ClientGroup, so any member's name/email/phone can anchor the match; all Ping facts roll up to the group-level profile |
| Spouse on calls/meetings | If spouse is a contact under the same Ping client and same Karbon ClientGroup, facts land on the same profile; if spouse missing on either side, add them there (data hygiene, not code) |
| Two Karbon clients sharing a phone number (office line) | Phone alone never auto-accepts if it matches multiple bundles; escalate to analyst |
| Client renamed in Ping | Fast path breaks, skill falls back to full resolution and re-persists the custom field |

### Hygiene rule that makes pairing reliable

The join is only as good as contact data parity. Standing rule for the team: every client's primary email and mobile number must exist in BOTH Karbon BusinessCards and Ping contacts at onboarding. The Phase 1 three-client audit should check this parity explicitly.

## Build plan

**Phase 0 — prerequisites (blockers, verify before building anything)**
1. Confirm Karbon plan is Business or Enterprise (API is gated to those tiers).
2. Register the API application in Karbon (Settings → Connected Apps), store the two keys as env vars on Austin's machine first.
3. Each analyst adds the Ping MCP connector and authorizes.
4. Confirm Quo auto-record + transcription is on (otherwise calls never reach Ping).

**Phase 1 — Karbon custom fields + data audit (1 day)**
1. `POST /v3/CustomFields` for the five fields above.
2. Pick 3 real clients, run the 6-call pull chain manually, map results against the 12-section profile template. Output: coverage table (Karbon-fillable / Ping-fillable / return-derived / human-only). This scopes everything after.

**Phase 2 — `/client-profile-sync` skill (2-3 days)**
1. New skill at `.claude/skills/client-profile-sync/` with a helper script (Node or bash+curl) for the Karbon pull chain. Script takes ClientKey or client name (`$filter=FullName eq`), outputs normalized JSON.
2. Skill flow: run Karbon pull → query Ping MCP → merge into profile draft → mark `[NEEDS INPUT]` gaps → analyst reviews → profile saved to Karbon under the engagement (as today), never committed to git.
3. Wire the numbered tax skills to expect a synced profile: PREREQUISITES-CHECKLIST gets a "profile synced within 30 days" line.

**Phase 3 — write-back (1 day)**
Add a final step to quarterly-memo-6: draft the "new facts learned" note, analyst approves, `POST /v3/Notes` to the client timeline + `PUT /v3/CustomFieldValues`. Context compounds in Karbon every quarter.

**Phase 4 — later, only if needed**
- Karbon webhooks (`Contact`, `CustomField`, `Note`) for push-based freshness — needs a hosted HTTPS endpoint, skip until on-demand sync feels stale.
- Karbon's official MCP server when it ships (announced with Kai, late 2025 roadmap; watch developers.karbonhq.com). Could replace the helper script for ad-hoc queries; keep the script for deterministic sync regardless.
- Zapier-hosted Karbon MCP (zapier.com/mcp/karbon) exists today as a no-code fallback, but direct REST is cheaper and deterministic. Not recommended for v1.

## Risks and constraints

| Risk | Mitigation |
|---|---|
| Karbon plan tier below Business | Hard blocker, verify in Phase 0 before any build |
| Single API app slot consumed by this integration | Fine today; revisit if a future tool needs direct (non-certified) API access |
| Account-level key sees all clients | Keys live only on trusted operators' machines as env vars; rotate on offboarding |
| Client PII leaking into shared git repo | Profiles live in Karbon, synced on demand; nothing under `clients/` gets real PII; repo hooks already guard `web/` |
| PUT replace-all semantics (CustomFieldValues, BusinessCards) | Helper script always GET-modify-PUT |
| Karbon data is thin today (Keyur's own caveat) | Phase 1 audit measures this before Phase 2 build; custom fields + write-back are what make it rich over time |
| Ping MCP is per-user OAuth; headless/cron runs won't have it | Keep Ping queries inside interactive engagement sessions, don't schedule them |
