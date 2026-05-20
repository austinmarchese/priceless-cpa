# cleanup-system

Team-facing PII sweep for local machines. Run weekly. Daily during busy season.

## What it does

Scans for client files that shouldn't be sitting on your laptop:
- Tax returns (1040, 1120-S, K-1, W-2, 1099)
- Payroll registers
- QBO/QuickBooks backups
- Bank statements, invoices, GLs
- Files referenced inside Claude Code chat transcripts (those transcripts often embed file content)
- Claude desktop app attachment cache

## Run it

In Claude Code:

```
/cleanup-system
```

Or run the scanner directly:

```bash
# macOS / Linux
node .claude/skills/cleanup-system/scan.mjs

# Windows (PowerShell or Git Bash)
node .claude\skills\cleanup-system\scan.mjs
```

## Flags

| Flag | What it does |
|------|--------------|
| `--deep` | Also scan file CONTENT for SSN/EIN regex (slow, text files only) |
| `--max-age 30` | Only files modified in last 30 days (default 90) |
| `--dir <path>` | Add a directory to the scan |
| `--json` | JSON only, no header |

## Why it matters

Client PII on local machines is the biggest avoidable security risk we have. State and federal data-breach rules apply the moment a return touches a laptop that gets lost, stolen, or compromised. This skill catches anything you forgot to delete.

## How it decides what to flag

Three tiers:

- **HIGH** — filename screams tax return / SSN / payroll, OR the file's contents contain an SSN pattern
- **MEDIUM** — financial-keyword filenames (QBO, bank statement, invoice)
- **LOW** — generic PDF/CSV/XLSX with no other signal

Edit `patterns.json` to add client surnames or your own regexes.

## Audit log

Every deletion is logged to `~/.priceless-cleanup/audit.jsonl`. Keep this — it's our evidence trail for compliance.

## Safety

- Never auto-deletes.
- Never `rm -rf` a directory.
- Asks per-file for HIGH tier.
- Tells you to use Claude desktop's own "Clear data" instead of `rm`-ing its cache directory (manual deletion can corrupt the app).
- Files in this repo (`raw/`, `clients/`, `wiki/`) are NOT scanned — those are intentional source material.

## Cross-platform

Tested on macOS, Windows (Git Bash + native PowerShell with Node), Linux. Only requirement is Node 18+.
