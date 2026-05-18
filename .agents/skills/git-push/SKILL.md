---
name: git-push
description: Commit and push code changes to GitHub
triggers:
  - push code
  - push changes
  - commit and push
  - save changes
  - deploy changes
  - push to github
tools:
  - Bash
metadata: {"openclaw":{"platforms":["darwin","linux","win32"]}}
---

# Push Code Changes

Commit and push all changes to GitHub.

## When to Activate

User says:
- "Push the code"
- "Save my changes"
- "Commit and push"
- "Deploy changes"

## Steps

### 1. Check status
```bash
git status
```

### 2. If there are changes, show them
```bash
git diff --stat
```

Tell the user what changed.

### 3. Stage all changes
```bash
git add -A
```

### 4. Commit with a descriptive message

Ask user:
> What should the commit message say? Or I can summarize the changes for you.

If they want you to summarize, write a brief commit message based on the diff.

```bash
git commit -m "Your message here"
```

### 5. Push to GitHub
```bash
git push origin main
```

### 6. Confirm
> Done! Changes pushed to GitHub.
>
> View at: https://github.com/austinmarchese/priceless-cpa

## If push fails

If authentication fails, tell the user:
> Push failed. You may need to set up GitHub authentication.
>
> Run: `gh auth login` and follow the prompts.
