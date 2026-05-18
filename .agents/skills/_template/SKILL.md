---
name: [skill-name]
description: [One-line description of what this skill does]
---

# [Skill Name]

## When to Use

Use this skill when you:
- [Situation 1]
- [Situation 2]
- [Situation 3]

## Process

### Pre-flight: Sync Check

Before starting, check if there are updates on main:

```bash
git fetch origin main
BEHIND=$(git rev-list HEAD..origin/main --count)
```

If `$BEHIND` > 0, warn the user:
> "There are [N] new commits on main. Run `git pull origin main` to get the latest context files before continuing?"

If up to date, proceed silently.

### Step 1: [First Step]

[What to do in this step]

### Step 2: [Second Step]

[What to do in this step]

### Step 3: [Third Step]

[What to do in this step]

## Inputs Needed

- [What information does the skill need?]
- [Any files or context required?]

## Output

[What does this skill produce?]

## Example

```
User: /[skill-name]

Codex: [Example of how the skill runs]
```

## Learnings

[Add learnings here after each use. What would make this skill better?]

-
