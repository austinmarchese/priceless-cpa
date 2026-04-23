# Redaction Protocol

Before any client document enters a Claude conversation, sensitive identifying data must be removed. This protects the client, the firm, and complies with IRC §7216 (disclosure of tax return information) and Gramm-Leach-Bliley.

Claude cannot verify whether an uploaded document has been redacted. The team member uploading is responsible. However, this skill will refuse to proceed if it detects clear indicators of unredacted PII (see "Stop conditions" below).

## What must be redacted before upload

Black out or replace with `[REDACTED]`:

1. **Social Security Numbers** (taxpayer, spouse, dependents, SSNs on any K-1, W-2, 1099)
2. **Employer Identification Numbers** (replace with `[EIN]` — Claude does not need the actual EIN to plan)
3. **Full bank and brokerage account numbers** (last 4 digits are fine if needed for reconciliation reference)
4. **Credit card numbers** (any appearance, including in QBO expense details)
5. **Dates of birth** (replace with "[DOB]" or just age: "Taxpayer age 47")
6. **Full home address** (city and state are fine — needed for state tax; street address is not)
7. **Driver's license or passport numbers**
8. **Dependent names** (replace with "Dependent 1", "Dependent 2" — ages are fine)
9. **Individual client names** in correspondence or notes (replace with "Taxpayer" / "Spouse" / "Client")

## What does NOT need to be redacted

These are needed for substantive tax analysis and are not high-risk:

- Income amounts, deduction amounts, tax amounts — all dollar figures
- Filing status
- State of residence
- Entity type (S Corp, LLC, etc.)
- Industry/profession description
- Age
- Presence and ages of dependents
- Property types and general descriptions ("single family rental in Miami", "commercial building in downtown Chicago")
- Investment categories ("$500K in diversified index funds", "crypto portfolio primarily BTC and ETH")

The principle: we need enough to do tax planning, not enough to identify the individual.

## Stop conditions

If Claude sees any of the following in an uploaded document, stop processing and request redacted versions:

- A 9-digit number formatted as `XXX-XX-XXXX` (likely SSN)
- A 9-digit number formatted as `XX-XXXXXXX` (likely EIN)
- Any field literally labeled "SSN", "Social Security", "Tax ID", "TIN", "EIN"
- A full street address with number + street name + city + state + ZIP
- Account numbers longer than 4 digits next to labels like "Account", "Routing", "ABA"

When stopping, respond with:
> "This document appears to contain unredacted identifying information. Per Priceless CPA's data handling protocol, I can't proceed until the document is redacted. Please re-upload with the following removed: [list specific items detected]. See shared/REDACTION-PROTOCOL.md for the full redaction standard."

Do not proceed with partial analysis using redacted mental notes — the whole workflow stops and restarts once clean documents are provided.

## Tools for redaction

For internal team use:
- **PDF redaction**: Adobe Acrobat Pro → Tools → Redact. This is destructive; always save redacted versions as new files with `-REDACTED` suffix.
- **QBO export redaction**: Export to Excel, find/replace SSNs and account numbers in the file, then convert back to PDF or upload Excel directly.
- **Payroll reports (Gusto/ADP)**: Most payroll platforms have a "masked SSN" export option that shows only last-4. Use this wherever possible.
- **Tax returns from clients**: Ask the client to upload to Karbon's secure portal, then your team downloads, redacts, and processes. Clients should never email returns.

## Special case: offshore team

Our offshore staff in India and Philippines run this skill as part of their workflow. The same redaction standard applies. Team leads are responsible for verifying redaction compliance before offshore analysts begin work. Periodic spot-checks should be conducted.

## Audit trail

Every engagement that uses this skill must have the following in Karbon:
1. Note with date and analyst name confirming redaction was verified
2. Link or reference to the redacted document set used
3. The draft memo output
4. The partner review notes and final deliverable

If these are not in Karbon, the engagement cannot be invoiced.
