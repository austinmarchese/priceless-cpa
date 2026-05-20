---
name: cleanup-system
description: Scan local machine for client PII (tax returns, payroll, QBO exports, bank statements) sitting in Downloads/Desktop/Documents, plus Claude Code transcripts and Claude desktop cache that may contain client data. Walks user through review and deletion. Use when team member says "clean my system", "purge client files", "PII sweep", "cleanup downloads", or runs /cleanup-system. Run weekly at minimum, daily during busy season. Cross-platform (macOS, Windows, Linux).
---

# Cleanup System

## When to Use

Use this skill when:
- A team member is finishing work with client files and wants to wipe local copies
- The user says "clean my system", "check for PII", "cleanup", "purge downloads"
- Weekly housekeeping (recommend setting a recurring reminder)
- Before sharing a screen, traveling with the laptop, or onboarding/offboarding hardware
- After any quarterly engagement that touched real client data

## What This Skill Does

Scans three sources for files that look like client PII:

1. **Local files** — `~/Downloads`, `~/Desktop`, `~/Documents` (+ `~/OneDrive/Documents` on Windows)
2. **Claude Code transcripts** — `~/.claude/projects/<slug>/*.jsonl` (paths attached or content embedded)
3. **Claude desktop app cache** — macOS/Windows/Linux app data directory (attachments persist here)

Classifies each finding into a tier:
- **HIGH** — filename or content matches a tax-return / SSN / EIN / payroll pattern
- **MEDIUM** — financial keywords (QBO, bank statement, invoice) or transcript references to medium-risk files
- **LOW** — generic finance extensions (PDF, CSV, XLSX) with no other signal

Never auto-deletes. The user confirms every deletion.

## Process

### Step 1: Run the scanner

Run the cross-platform Node scanner:

```bash
node .claude/skills/cleanup-system/scan.mjs
```

Flags:
- `--deep` — also scan file CONTENT for SSN/EIN regex (slower; only runs on text files like CSV/TXT/JSONL)
- `--max-age 30` — only files modified in the last N days (default 90)
- `--dir <path>` — add an extra directory to scan
- `--json` — emit JSON only (no header)

The scanner emits JSON with a `findings[]` array.

### Step 2: Present the findings as a table

Read the JSON. Group by tier (HIGH → MEDIUM → LOW). Show the user a Markdown table:

| Tier | Source | Path | Size | Last Modified | Why flagged |
|------|--------|------|------|---------------|-------------|

Truncate path to last 4 segments for readability. Convert size to KB/MB. Show reasons concatenated.

Also show a count summary at the top: `12 HIGH, 8 MEDIUM, 30 LOW`.

### Step 3: Walk through deletion

For HIGH tier — ask per-file (these are the dangerous ones, false positives matter less than missed positives, but mistakes are still costly):

> "Delete `~/Downloads/smith_1040_2024.pdf`? (y/n/skip-all-high)"

For MEDIUM tier — ask per-batch (offer "delete all in this directory" or "skip all medium"):

> "Found 8 MEDIUM items in `~/Downloads`. Delete all / review one-by-one / skip?"

For LOW tier — default to skip with one batch confirm:

> "30 LOW-tier files (generic PDFs/CSVs). Skip these? (recommended)"

For **claude-code-transcript** findings — show the transcript path, the session date (from filename), and the referenced files. Ask:

> "Session from 2026-03-12 references `smith_1040_2024.pdf` and contains 1 SSN pattern. Delete the whole transcript? (y/n)"

For **claude-desktop-cache** — explain it's the desktop app's cache and the safest path is via the app itself:

> "Claude desktop app cache is at `~/Library/Application Support/Claude/` (180 MB, 23 files). To purge attachments, open Claude → Settings → Data → Clear app data. Don't `rm` this directory manually — it can corrupt the app."

### Step 4: Delete (with mandatory consent gate)

**Never call `rm`, `del`, `unlink`, `fs.unlinkSync`, or any other direct delete primitive.** All deletions go through `delete.mjs`, which forces explicit confirmation tokens and refuses to touch the repo working tree.

**Single file:**

```bash
node .claude/skills/cleanup-system/delete.mjs \
  --target "<exact path the user approved>" \
  --confirm "<exact same path, byte-identical>" \
  --reason "<tier + why>" \
  --user "<git user.email>"
```

`--target` and `--confirm` MUST be byte-identical. This is intentional: it forces you to type the path twice, surfacing exactly what is about to be deleted in your tool call before submission.

**Batch (after user approves a group):**

Write the approved list to a JSON file in `/tmp` like:

```json
[
  { "path": "/Users/x/Downloads/smith_1040.pdf", "confirmed": true, "reason": "HIGH: matched 1040" },
  { "path": "/Users/x/Downloads/jones_w2.pdf",   "confirmed": true, "reason": "HIGH: matched W-2" }
]
```

Then:

```bash
node .claude/skills/cleanup-system/delete.mjs \
  --targets-file /tmp/cleanup-approved.json \
  --user "<git user.email>"
```

Every entry must have `"confirmed": true` or the script refuses the entire batch.

**Always dry-run first when uncertain:**

```bash
node .claude/skills/cleanup-system/delete.mjs --target "..." --confirm "..." --dry-run
```

Dry-run still writes an audit-log entry tagged `"action": "dry-run"`.

**What the helper refuses to do:**
- Delete anything inside the priceless-cpa repo working tree
- Delete a directory (only individual files)
- Delete top-level system or home directories
- Run if `--target` and `--confirm` don't match byte-for-byte
- Run a batch where any entry is missing `"confirmed": true`

For transcripts, target the specific `.jsonl` file. For the Claude desktop cache, **do not call `delete.mjs` on it** — tell the user to clear via the app's Settings → Data instead.

The audit log is written automatically by `delete.mjs` — no manual log step needed.

### Step 5: Empty Trash / Recycle Bin

If anything ended up in Trash (Finder moved it instead of `rm`), prompt:

> "Empty Trash now to ensure files are gone from disk? (y/n)"

macOS: `osascript -e 'tell app "Finder" to empty trash'`
Windows: `PowerShell -Command "Clear-RecycleBin -Force"`

### Step 6: Write the audit log

Append one JSONL entry per deletion to `~/.priceless-cleanup/audit.jsonl`:

```json
{"ts":"2026-05-18T14:30:00Z","user":"austin@theincubator.xyz","path":"/Users/x/Downloads/smith_1040_2024.pdf","tier":"HIGH","source":"local-files","reasons":["filename matched: 1040"],"action":"deleted"}
```

Create the directory if it doesn't exist. This is the compliance evidence trail — never delete this log without explicit user direction.

If audit log is missing for a session, that means files were reviewed but nothing was deleted. Write a single "scan-only" entry instead so we have a record of the scan.

### Step 7: Summarize

Print a final summary:

```
Cleanup complete.
- Scanned: 4 local dirs + ~/.claude/projects + Claude desktop cache
- Findings: 12 HIGH, 8 MEDIUM, 30 LOW
- Deleted: 11 HIGH, 5 MEDIUM, 0 LOW
- Skipped: 1 HIGH (kept by user), 3 MEDIUM, 30 LOW
- Audit log: ~/.priceless-cleanup/audit.jsonl
Next sweep recommended: 2026-05-25
```

## Tuning Patterns

Edit `.claude/skills/cleanup-system/patterns.json` to:
- Add client surnames to `clientNames` array — flagged HIGH
- Add custom filename regexes to `filenamePatterns.high|medium|low`
- Adjust `maxAgeDays` (default 90)
- Add scan directories per platform

## Safety Rules

1. **Never delete without per-file or per-batch confirmation.** Auto mode does not override this.
2. **Never `rm -rf` a directory you didn't enumerate.** Always list contents first.
3. **Don't `rm` the Claude desktop app cache directory directly** — corrupts the app. Tell user to clear via app settings.
4. **Don't delete the audit log.**
5. **Don't delete this repo's working tree** — even if a file in `clients/` or `raw/` looks like PII, that's intentional source material. Only flag files OUTSIDE the repo root.
6. **Stop on permission errors** — don't try to elevate. Report and ask user.

## Inputs Needed

None for a scan. For deletion, only user confirmation.

## Output

- Markdown table of findings
- Audit log entry per action
- Final summary

## Example

```
User: /cleanup-system

Claude: Running scanner...

Found 12 HIGH, 8 MEDIUM, 30 LOW across local dirs + Claude transcripts.

HIGH findings:
| Source       | Path                                  | Size  | Modified   | Why                              |
|--------------|---------------------------------------|-------|------------|----------------------------------|
| local-files  | ~/Downloads/smith_1040_2024.pdf       | 412KB | 2026-05-15 | filename matched: 1040           |
| local-files  | ~/Desktop/payroll_register_jones.xlsx | 88KB  | 2026-05-12 | filename matched: payroll        |
| claude-code  | ~/.claude/projects/.../2026-03-12.jsonl| 1.2MB| 2026-03-12 | references smith_1040_2024.pdf   |
...

Delete ~/Downloads/smith_1040_2024.pdf? (y/n/skip-all)
```

## Learnings

(Update this section as the skill is used.)

- Initial version. Pending real-world feedback from team rollout.
