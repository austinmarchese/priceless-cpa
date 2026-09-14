# Multi-Client QuickBooks Tool — Build Plan

**Date:** 2026-09-11
**For:** Austin (build owner)
**Requested by:** Anthony
**Problem in one line:** We can't ask a single question across all ~150 client books, so cross-client questions either go unanswered or get answered from memory.

## The Problem

Anthony regularly has questions that span the whole client book, and there is no way to ask them. Two real examples from the last few weeks:

- **"What are shipping and logistics COGS totals across our e-commerce clients?"** Still unanswered. Getting it would mean guessing which clients probably qualify, making a list from memory, and opening each book one at a time.
- **"Which clients had net income of $500,000 or more in 2025?"** Same problem. It's a one-line question that currently takes a day of clicking, so it doesn't get asked.

**Who feels it:** Anthony, and by extension anyone doing planning or offer work that depends on knowing the shape of the book.

**How often:** Recurring. It comes up whenever there's a niche question (which clients fit the e-commerce offer), a threshold question (who's over an income line and needs a strategy conversation), or a benchmarking question.

**What it costs:** Not hours, mostly. The real cost is that **the question goes unanswered, or gets answered from memory.** Memory is biased toward the clients Anthony already thinks about, which means the clients most likely to be missed are exactly the ones nobody is thinking about. This is a revenue and a service-quality problem, not a time problem.

**A compounding issue surfaced during planning:** each client's chart of accounts is its own thing. Account names don't vary wildly, but they were never set intentionally. One client's "Shipping & Freight" is another's "Logistics" is another's "Cost of Sales - Other." So even with the data in hand, the totals don't automatically mean the same thing across books.

This is a problem happening today.

## What We Use Now

- **QuickBooks Online** — every client's books. Priceless is the accountant on all of them through QuickBooks Online Accountant. Roughly 100–150 companies.
- **Karbon** — practice management. Already has a working internal tool at `mcp/karbon/` that connects Claude to Karbon. This build is the same shape of thing and should reuse its structure.
- **Claude Code** — where Anthony works.
- **Intuit's own QuickBooks connector** — already available, does read and write, but connects to **one company at a time**. That single limitation is the entire reason to build this.

**Current manual workflow for a cross-client question:**
1. Think of which clients might qualify.
2. Write a list from memory.
3. Open each client's book in QuickBooks, one at a time.
4. Run the report, note the number.
5. Repeat. Usually abandon partway.

## Minimum Viable Solution

**A tool that holds a saved connection to each client's QuickBooks book and runs the same question across all of them at once, returning one table.** Anthony drives it from Claude Code in plain English. Read-only in v1.

**What it does:**

1. **Pulls any standard figure across every client for a period.** "Net income over $500k for 2025" returns a ranked list in one shot, covering every connected book, not a remembered subset.
2. **Shows account names, not just totals.** For a question like shipping and logistics, it returns every account each client actually uses under COGS, with totals, so the variation is visible and the answer is honest rather than assumed. This is the feature that handles the chart-of-accounts problem instead of hiding it.
3. **Reports coverage, not just connection health.** QuickBooks has no way to ask "list all my accountant clients" — that mapping only exists in our own records. So: export the client list out of QuickBooks Online Accountant once as the master list, and have the tool hold the list of what's actually connected. **The difference between the two is the coverage report** — clients we have access to but aren't querying, clients on our books who aren't in QuickBooks at all, and connections that have dropped. That diff is more useful for analyzing the client list than a flat list would be. "All clients" has to actually mean all clients or the tool is worse than useless.

**What it touches:** QuickBooks Online, read-only. Nothing else. Data stays on Anthony's Mac.

**Who operates it in v1:** Anthony and Austin only. On demand. No one else's workflow changes. See *Team Access* below — team-wide use is explicitly not v1, but the build must not foreclose it.

**Where it runs:** Locally on Anthony's Mac, in Claude Code. Same pattern as the existing Karbon tool. Client credentials never leave the machine and there is no hosting bill.

**The one background piece:** a **weekly** job that keeps all 100–150 connections alive. This is not optional. QuickBooks connections expire on their own after about 100 days of no use, and a book nobody queries for a quarter will silently drop off. Without it, the connection list rots and the tool quietly starts lying about coverage.

*Why weekly and not nightly or monthly:* the job is a plain script hitting Intuit's token endpoint, no AI involved, so it costs nothing to run at any cadence. Each refresh resets the 100-day clock. Weekly leaves margin for roughly 14 consecutive silent failures before anything breaks; monthly leaves margin for two. Since the cost is the same, take the margin.

**The write switch (built, not used):** the connection store carries a per-client write flag, defaulted **off** for every client. No write tools ship in v1. This costs almost nothing now and means turning writes on later is a small job rather than a rebuild.

**Known setup cost:** every client company must be authorized once, individually. There is no firm-wide accountant connection in QuickBooks, even as the accountant of record. It's roughly 30 seconds per client done from Anthony's own login. 150 clients is one boring afternoon, once.

## Deliberately NOT Building Yet

- **Write access / doing the accounting through it.** *Not "later, maybe" — this is the actual destination, sequenced deliberately.* See **Roadmap: Three Projects, Not One** below for sizing and why it's staged. The per-client write switch is built in v1 and defaults off.
- **Standardizing the chart of accounts across all books.** *Its own project, and this build is its prerequisite.* You can't standardize what you haven't inventoried, and MVS item 2 is the inventory. Doing both at once means designing a firm-standard category map before seeing the actual mess.
- **A firm-standard category mapping layer** (so cross-client queries return apples-to-apples automatically). Falls out of the standardization project, not this one.
- **Hosting it so the whole team can use it from anywhere.** Not v1. But unlike the other deferrals, **this one comes with a binding constraint on how v1 is built** — see *Team Access: Not V1, But Must Stay Possible* below.
- **Any money movement, invoice sending, or client-facing action.** Permanent design stance, same as the payroll app plan.

## Team Access: Not V1, But Must Stay Possible

**Anthony's constraint, stated directly:** team access is not a v1 requirement, but *the ability to add team access later* is a requirement for this project to be worth doing at all. A tool that only ever works on one laptop does not justify the build.

So v1 ships local, and the architecture treats hosting as a **migration, not a rewrite**. Concretely, that means:

1. **Keep the QuickBooks logic separate from how it's reached.** The part that knows how to query 150 books should not know or care whether it's being called over a local connection or over the network. Moving to hosted should mean adding a second way in, not rewriting the engine.
2. **Put the connection store behind a clean boundary.** In v1 it's a local encrypted file on Anthony's Mac. Later it's a proper database on a server. The query code should never know which.
3. **Don't hard-code a single user.** V1 has exactly one user, but the audit log should still record *who* asked, and the write switch should be a per-client setting rather than a global one. Adding people should mean adding rows, not refactoring.
4. **Register the Intuit app for the hosted future now.** Intuit's review is the slow external step. Use `priceless.cpa` as the host domain from the start so a later move doesn't mean revisiting the app profile. *Austin: worth confirming with Intuit whether changing host/IP details later triggers re-review. If it does, this point matters a lot.*

**What is explicitly NOT being built in v1:** user accounts, permissions, a web interface, a hosted server, or any multi-user anything. Just don't paint them out.

**Rejected outright:** installing a copy on each team member's Mac. That means five separate copies of 150 clients' QuickBooks credentials on five laptops. Not an acceptable path to team access.

## Roadmap: Three Projects, Not One

Writing to client books is the real destination. It is deliberately **not** v1, and the reason is sizing, not squeamishness. Three sequential projects, each earning the next:

| # | Scope | Relative size | Character |
|---|---|---|---|
| 1 | **Read across all books** (this plan) | **1x** | Straightforward. Known pattern. Also produces the chart of accounts inventory that everything later depends on. |
| 2 | **Writes for Anthony alone**, narrow and reversible, on 1–2 clients | **~2x** | Still a script. The dry-run and the reversal log are most of the added work, not the API calls. |
| 3 | **Team writes, hosted, with review** | **~4–5x** | A different animal: an internal application with accounts, permissions, per-user audit, and a senior-approves-staff workflow. Someone owns it operationally. |

**Where the jump actually comes from.** Writing to the QuickBooks API is easy — the batch endpoint takes 30 operations per request at 40 requests per minute per book, so throughput is never the constraint. The cost is elsewhere:

1. **QuickBooks has no undo.** The Audit Log is read-only history, not a rollback. A run that miscategorizes 400 transactions has no button to fix it. So writes require a dry run, an approval step, and **our own reversal log recording the before-state of every field changed**. That roughly doubles the work versus naive write tools, and it is not optional.
2. **Reconciliation and closed periods.** Recategorizing reconciled transactions is how books get broken quietly. Guardable (closing date with password set in QuickBooks, plus refusing to touch reconciled items without explicit override) but must be designed in.
3. **"My accountants" is the real multiplier.** Multiple people writing to client books pulls the entire hosting project forward: accounts, permissions, per-user audit, review workflow. Project 3's size comes almost entirely from the team requirement, not from the word "write."
4. **Liability.** Anthony signs these books. Every change has to be attributable to a person, reversible, and reviewable.

### What already exists (check before building)

**QuickBooks Online Accountant has a Reclassify Transactions tool** (Accountant Tools → Reclassify transactions) that does bulk reassignment of account, class, and location within one client, today, at no extra cost. Its limits: it cannot change the bank or credit card payment account on expenses, and cannot bulk-change payee on posted or reconciled transactions.

**So bulk mechanical find-and-replace is already solved.** Confirm the team actually uses it before building anything that overlaps. If they don't, the gap may be training rather than tooling.

**What an AI tool adds that Reclassify cannot:** judgment at volume. "Go through 900 uncategorized transactions, categorize each the way this client's own history suggests, and flag the ones you're unsure about." That is the thing worth building. Rebuilding find-and-replace is not.

### Design notes for v1 (cost nothing now, save a rewrite later)

These are **not** v1 scope. They are cheap shapes to adopt now so Projects 2 and 3 aren't rewrites:

- **The audit log records an actor**, even though in v1 the actor is always Anthony.
- **The write switch is per-client**, not global (already in the MVS).
- **When writes arrive, every mutation records its before-state** so it can be written back. Design the log format with that in mind rather than retrofitting it.

## Will People Use It?

**Workflow change required: none.** Nobody on the team does anything differently. Anthony asks questions in Claude Code, the same place he already works.

**The one new thing anyone has to do:** the one-time connection afternoon (~150 authorizations), plus re-authorizing a client whenever they change their QuickBooks admin or the weekly job reports a dropped connection. That's a handful of clicks a month at most.

**The honest adoption risk** is not that people won't use it, it's that Anthony stops trusting it. That happens if it silently covers 90 clients while claiming to cover 150. Hence MVS item 3 and the weekly job — coverage honesty is a v1 feature, not a nice-to-have.

**Risk controls carried into v1 even though it's read-only:**
- Read-only means the worst case is a wrong answer, not a wrong book. That's the point of shipping this half first.
- Every query the tool runs gets logged locally, so any answer can be traced back to what was actually asked of which books.
- QuickBooks limits how fast any one book can be queried, so the tool must pace itself per client rather than hammering 150 books at once.
- Before writes are ever enabled: closing dates with passwords set in QuickBooks so closed periods are protected at the source, and write tools scoped narrowly (categorize a transaction, add a memo) rather than one general-purpose write.

## Feasibility: What's Certain and What Isn't

**The code is not the hard part.** It's a few hundred lines, and `mcp/karbon/` is a working template for the same shape of tool.

| Piece | Difficulty | Guaranteed deliverable? |
|---|---|---|
| Intuit app + development keys | Trivial, ~5 minutes | **Yes** |
| The tool itself (query engine, coverage report) | Known pattern, Karbon template exists | **Yes** |
| Connecting ~150 client books | Boring, not hard | **Yes** |
| Weekly connection keeper | Small script | **Yes** |
| Write tools, when wanted | An afternoon | **Yes** |
| **Intuit approving production keys** | Outside our control | **No — see below** |

**The one external dependency: Intuit's review.** No real client book can be touched until Intuit issues production keys. A real firm with a real domain, published policies, and a narrow scope request is a routine approval, but the timeline is not published anywhere and cannot be promised. Publishing to the QuickBooks App Store is *not* required.

**Doable immediately, with no approval needed:** register the app, get development keys, and build and prove the entire tool against Intuit's sandbox companies including the cross-book query and the coverage report.

**Blocked until keys land:** the connect afternoon, and any real answer to the shipping question or the $500k question.

### Open technical question Austin should resolve first

The app assessment questionnaire asks for a host domain, a launch URL, a disconnect URL, and hosting IP addresses. A tool running on a Mac has none of these natively. Two possible resolutions, unconfirmed from Intuit's public docs:

- **If Intuit accepts a localhost redirect for production:** answer with `priceless.cpa` as host domain, run the connect flow locally, no web work needed.
- **If production redirect URLs must be public HTTPS:** a small callback endpoint has to live on `priceless.cpa`, which means touching `web/` (Austin's tree).

Quickest way to find out: create the app, try adding a localhost redirect URI under production settings, see whether the portal accepts it.

## Getting Intuit Production Keys (walkthrough)

### Gather before starting

| Item | Use |
|---|---|
| Intuit account | A **firm** account, not personal. Whoever creates the app owns it; prefer a shared admin address so it isn't locked to one person. |
| App name | Internal and obvious, e.g. "Priceless CPA Internal Analytics" |
| Privacy policy URL | Must be a real reachable page, e.g. `priceless.cpa/privacy` |
| EULA / terms URL | Same, e.g. `priceless.cpa/terms` |
| Host domain | `priceless.cpa` |
| Hosting country + IPs | See the open question above |
| Support contact | Firm email |
| Scope | **Accounting only** (`com.intuit.quickbooks.accounting`). Do not request payments or payroll scopes we won't use — a narrower request is a cleaner review. |

**If the privacy and terms pages don't exist and are publicly reachable, that is a hard blocker** and it is web work.

### Step 1 — Create the app (no approval needed)

1. developer.intuit.com, sign in with the firm Intuit account
2. My Apps → Create an app → QuickBooks Online and Payments
3. Select the accounting scope only
4. Development keys (Client ID + Secret) and sandbox companies are issued immediately

### Step 2 — Request production keys

1. In the app, open the **Production Settings** tab
2. Complete the app profile: name, description, support contact, policy URLs, host domain
3. State the country and IP addresses the app runs from
4. Left nav → **App assessment questionnaire**. Five sections: app details, compliance, authorization and authentication, API usage, error handling and security
5. Submit, then wait for Intuit

The security section (credential storage, token handling, data isolation) should be answered against how this is actually built, not generically.

## For Austin

**What's being asked:** build a local tool that connects to all ~150 client QuickBooks books and answers one question across all of them at once, driven from Claude Code. Read-only. Same shape as `mcp/karbon/`.

**The three constraints that aren't negotiable:**
1. **Coverage honesty.** If it covers 90 books while implying 150, it's worse than nothing. The coverage report is a v1 feature.
2. **The weekly connection keeper ships with v1**, not after. Without it the connections silently rot on a ~100 day clock.
3. **Build so hosting later is a migration, not a rewrite.** See *Team Access* above. This is the condition Anthony set for the project being worth doing.

**What's deliberately out of scope:** write tools, chart of accounts standardization, hosting, user accounts, any money movement or client-facing action.

**Where to start:** Step 1 above takes five minutes, needs no approval, and unblocks everything else. Submit for production keys the same day, since that clock is the only one we don't control.

## First Steps

1. **Confirm Austin owns the build**, with `mcp/karbon/` as the template.
2. **Register the Intuit developer app and submit for production keys** (walkthrough above). Do this first — it's the only step on someone else's clock. Resolve the localhost-vs-hosted-redirect question while in the portal.
3. **Prove it on 3 clients before connecting 150.** Connect three books, answer the actual net-income question, confirm the number matches what QuickBooks shows. Only then do the connection afternoon.
4. **Build the weekly connection-keeper before the bulk connect**, not after. Otherwise the first 100-day cliff arrives with no warning.
5. **Run the shipping and logistics question as the acceptance test.** The build is done when that question, the one that's been sitting unanswered, gets a real answer with the account names shown.

## Open Questions

- Timeline. Austin to estimate once the localhost-vs-hosted question is resolved.
- **Do `priceless.cpa/privacy` and `priceless.cpa/terms` exist and resolve publicly?** If not, that's a prerequisite and it's web work.
- Does changing the host domain or IP details later trigger a fresh Intuit review? Determines how carefully the app profile should be filled out for the eventual hosted version.
- Are all ~150 clients actually on QuickBooks Online, or are some on desktop or another system? Those are out of scope for v1 and need to be named so coverage reporting is honest.
- How do client names in QuickBooks map to client records in Karbon? Worth wiring together eventually so a cross-client answer can carry the Karbon context, but not a v1 requirement.
