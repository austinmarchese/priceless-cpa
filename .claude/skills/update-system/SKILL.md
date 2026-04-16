---
name: update-system
description: "Pull latest priceless-cpa changes from main and summarize what's new. Syncs skills, agents, wiki, raw research, and site code so the whole team stays on the same version."
---

# /update-system

Sync this teammate's local priceless-cpa repo with `origin/main` and give them a briefing on what's new, not just "files updated" but "here's what changed and what it means for how you work."

## When to use

- Triggered by the SessionStart alert ("priceless-cpa is N commits behind main").
- Manually after a teammate knows work has landed they want to pull.
- Before starting a new session of meaningful work (writing a script, building a page, etc.).

## Instructions

### Step 1: Check current state

Run in parallel:
- `git -C "$CLAUDE_PROJECT_DIR" fetch origin main --quiet`
- `git -C "$CLAUDE_PROJECT_DIR" status --short`
- `git -C "$CLAUDE_PROJECT_DIR" rev-list --count HEAD..origin/main`
- `git -C "$CLAUDE_PROJECT_DIR" rev-list --count origin/main..HEAD`

Interpret:
- Behind = 0 and no local changes, tell user they're up to date, stop.
- Behind > 0, proceed.
- Ahead > 0, mention it; their local has unpushed commits. That's fine, rebase will handle.
- Dirty working tree, note it; `--autostash` will handle.

### Step 2: Preview what's changing

Before pulling, show the teammate what's about to land:

```
git log HEAD..origin/main --oneline
git diff --stat HEAD..origin/main
```

Group the changed files by area and summarize:

| Area | Path prefix | What to call it |
|------|-------------|-----------------|
| Skills | `.claude/skills/` | New/updated slash commands |
| Agents | `.claude/agents/` | New/updated consultant personas |
| Settings | `.claude/settings.json`, `.claude/settings.local.json` | **Shared Claude Code settings (hooks, permissions)** |
| Wiki | `wiki/` | Audience profiles, brand voice, frameworks, lived experiences |
| Raw | `raw/` | Outlier research, best work, transcripts, photos |
| Projects | `projects/videos/`, `projects/shorts/`, `projects/vsls/` | Active content work |
| Website | `app/`, `lib/`, `public/`, `workflow/` | Next.js site code and content data |
| Scripts | `scripts/` | Utilities |
| Root docs | `CLAUDE.md`, `README.md`, `SETUP.md` | Instructions |

**Critical check:** if `.claude/settings.json` or `.claude/settings.local.json` changed, flag it explicitly. New hooks/permissions will prompt the teammate to re-approve on next session (Claude Code security behavior). Tell them this is expected.

### Step 3: Pull

```
git -C "$CLAUDE_PROJECT_DIR" pull --rebase --autostash origin main
```

If the pull fails (merge conflict or rebase conflict), stop and show the teammate the output. Do **not** attempt to resolve conflicts automatically. Give them:
- The files in conflict (`git status`)
- Suggested next step: resolve manually, then `git rebase --continue` or `git rebase --abort`

### Step 4: Briefing

After a successful pull, deliver a structured briefing. Don't just list files, explain what's new in human terms.

Template:

```
Updated priceless-cpa to latest main (N commits).

What's new:

SKILLS
  - /new-skill-name, one-line purpose
  - /existing-skill, what changed (e.g., "added new mode", "reworded CTA")

AGENTS
  - new-consultant-name, who they are, when to use them

WIKI
  - wiki/audience/... , new persona detail or strategy update
  - wiki/lived-experiences/... , new learning worth applying

RAW
  - raw/outliers/... , new analyzed videos or patterns
  - raw/best-work/... , new examples to match voice against

PROJECTS
  - projects/videos/[slug]/ , new script in progress
  - projects/shorts/ , new shorts ready to film

WEBSITE
  - app/... , new page or component
  - workflow/... , updated industry content

SETTINGS
  - .claude/settings.json or settings.local.json changed. You may be
    prompted to re-approve hooks/permissions on next session, expected.

What this means for you:
  <1-3 sentences on what's worth knowing. e.g., "Use /new-skill-name
  instead of manually doing X", or "The youtube-script skill now
  loads new outlier patterns automatically.">
```

Skim the contents of new/changed skill and agent files (just the front-matter `description` + first section) to write meaningful one-liners. Do not just echo filenames.

### Step 5: Cleanup check

Quickly verify:
- Any new skills listed in CLAUDE.md? (If CLAUDE.md mentions a skill that doesn't exist locally, something's wrong.)
- Any gitignored patterns that might now be catching files teammate cares about?

Only flag if there's a real issue. Otherwise end with the briefing.

## What this skill does NOT do

- Does not push local commits. That's the teammate's call.
- Does not resolve merge conflicts automatically.
- Does not modify local-only settings (`settings.local.json` stays personal unless it was explicitly pulled).
- Does not run `/improve-skill`, `/code-review`, or any other skill as a side effect.

## Common edge cases

- **Offline / no network:** `git fetch` fails. Tell the teammate they appear offline and to retry later.
- **Detached HEAD or non-main branch:** warn the teammate and stop. They may be mid-experiment (e.g., on a feature branch for a landing page).
- **Large diff (50+ files):** don't dump the full list. Group by area and give counts per area, then highlight the most impactful changes (new skills, new agents, settings changes, new outlier research).
- **First run after cloning:** the teammate will see the SessionStart prompt asking to approve hooks from `.claude/settings.json`. That's normal.
