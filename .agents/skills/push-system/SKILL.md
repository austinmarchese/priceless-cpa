---
name: push-system
description: "Review local changes, flag risky modifications (audience, YouTube skills, frameworks), and push to main or create a PR. Risky changes get interactive review before merging."
---

# /push-system

Review local changes against main, flag anything risky, then push (if on main) or create a PR and merge (if on a branch).

## Repo detection

Detect which repo you're in by checking the current working directory:

```bash
REPO_NAME=$(basename "$(git rev-parse --show-toplevel 2>/dev/null)")
```

This determines behavior:

| Repo | Risky file rules |
|------|-----------------|
| `internal-os` | Full risky-file classification (see table below) |
| Any other repo | No risky-file classification. All changes are treated as safe. |

## When to use

- After making changes you want to ship.
- Before ending a session where you've modified important files.

## What counts as "risky" (internal-os only)

A change is risky if it modifies any of these areas:

| Area | Path patterns | Why it's risky |
|------|--------------|----------------|
| Target audience / ICP | `knowledge/frameworks/audience/` | Changes who we speak to, affects every piece of content |
| YouTube skills | `.Codex/skills/youtube-*/**` | Core content production workflows |
| Script frameworks | `knowledge/frameworks/youtube/scripts/` | Changes how scripts get written |
| Packaging frameworks | `knowledge/frameworks/youtube/packaging/` | Changes title/thumbnail strategy |
| Brand / voice | `knowledge/frameworks/brand/` | Changes Austin's voice and positioning |
| Consultant agents | `.Codex/agents/*-consultant*` | Changes expert feedback loops |
| Shared settings | `.Codex/settings.json` | Affects all teammates' Codex behavior |

Everything else (new raw knowledge, project files, wiki pages, new non-YouTube skills, scripts, dashboard code) is **not risky** and can be pushed without review.

**For non-internal-os repos:** Skip the risky file classification entirely. All files are safe.

## Instructions

### Step 1: Gather the diff

Run in parallel:
- `git status --short`
- `git diff HEAD` (unstaged + staged changes)
- `git log --oneline -5` (recent commits for message style)
- `git branch --show-current`
- `git rev-list --count origin/main..HEAD` (unpushed commits)

If there are no changes (clean working tree AND no unpushed commits), tell the user there's nothing to push and stop.

### Step 2: Classify changes

**If repo is `internal-os`:**

Split every changed file into two buckets:

1. **Risky** - matches any path pattern from the table above
2. **Safe** - everything else

Present a summary:

```
Changes to push:

SAFE (N files)
  - .Codex/skills/new-thing/SKILL.md -- new skill
  - knowledge/raw/articles/new-article.md -- new source material

RISKY (N files)
  - knowledge/frameworks/audience/icp.md -- modified target audience definition
  - .Codex/skills/youtube-4-script-writer/SKILL.md -- changed script workflow
```

**If any other repo:**

Just list the changed files grouped by directory. No risk classification needed.

### Step 3: Handle risky changes (internal-os only)

If there are **no risky files** (or not in internal-os), skip to Step 4.

If there **are risky files**, for each risky file:

1. Show the diff for that file
2. Explain what changed and why it matters
3. Ask: "Keep this change, modify it, or revert it?"

Options:
- **Keep** - proceed as-is
- **Modify** - work with the user to adjust the change, then re-diff
- **Revert** - `git checkout -- <file>` to undo that specific file

After resolving all risky files, re-run `git status` to confirm the final state.

### Step 4: Commit (if needed)

If there are uncommitted changes:
- Stage all remaining files
- Write a concise commit message following the repo's style (look at recent `git log`)
- Commit

### Step 5: Push

Check which branch we're on:

**If on `main`:**
```bash
git push origin main
```

**If on a branch:**
1. Push the branch: `git push -u origin <branch>`
2. Create a PR:
```bash
gh pr create --title "<concise title>" --body "$(cat <<'EOF'
## Summary
<bullet points of what changed>

## Risk review
<either "No risky changes" or summary of risky changes that were reviewed and approved>
EOF
)"
```
3. Merge the PR:
```bash
gh pr merge --squash --delete-branch
```

### Step 6: Confirm

```
Pushed to main (N commits).

Changes:
  - <grouped summary of what shipped>
```

## Edge cases

- **Push fails (auth, network):** Show the error. Suggest `! git push origin main` if it might be a credential issue.
- **PR merge fails (conflicts):** Show the conflict. Help resolve or suggest rebasing first.
- **Mixed risky + safe (internal-os):** Only the risky files get interactive review. Safe files flow through automatically.
- **User wants to override all risk warnings:** That's fine. If they say "just push it" or "skip review", respect that and proceed to Step 4.
- **Not a git repo:** Tell the user this directory isn't a git repository.

## What this skill does NOT do

- Does not pull from main first. Use `/update-system` for that.
- Does not run tests or builds.
- Does not force-push or rewrite history.
