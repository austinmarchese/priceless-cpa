---
name: improve-skill
description: Enhance a skill based on learnings from using it
---

# Improve Skill

Make a skill better based on what you learned while using it.

## When to Use

Run `/improve-skill` when:
- You just ran a skill and noticed something that could be better
- You have feedback on how a skill should work differently
- You want to add learnings from a conversation to a skill

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

### Step 1: Identify the Skill

Ask:
> "Which skill do you want to improve?
>
> Available skills:"

List all skills in `skills/` folder (excluding `_template`).

### Step 2: Understand the Improvement

Ask:
> "What should be better about this skill? For example:
> - Add a step that was missing
> - Change the order of steps
> - Add a question to ask upfront
> - Improve the output format
> - Add a learning for next time
>
> Or just describe what happened and I'll suggest improvements."

### Step 3: Review Current Skill

Read the current SKILL.md file and summarize:
> "Here's the current skill:
>
> **Steps:**
> 1. [current step 1]
> 2. [current step 2]
>
> **Learnings so far:**
> - [any existing learnings]
>
> Based on your feedback, here's what I'd change:
>
> [Proposed changes]
>
> Should I apply these changes?"

### Step 4: Apply Changes

If user approves, update the SKILL.md file with:
- Modified steps (if process changed)
- New learnings added to the Learnings section
- Any other improvements

### Step 5: Confirm

> "Updated `skills/[skill-name]/SKILL.md`
>
> Changes made:
> - [change 1]
> - [change 2]
>
> The skill will use these improvements next time you run it."

## Quick Mode

If user says something like:
> "Based on our conversation, can you improve the [skill-name] skill?"

Then:
1. Review the conversation for relevant learnings
2. Read the current skill file
3. Propose specific improvements
4. Apply on approval

## Example

```
User: /improve-skill

Codex: Which skill do you want to improve?

Available skills:
- daily-journal
- industry-page
- create-skill
- git-push

User: industry-page

Codex: What should be better about this skill?

User: It should save the audience insights to the audience folder
after we're done. That info is valuable for future content.

Codex: Got it. Here's the current industry-page process:

[Summary of steps]

**Proposed change:**
Add Step 8: Save audience insights to `wiki/audience/[industry]/profile.md`

Should I apply this change?

User: Yes

Codex: Updated `skills/industry-page/SKILL.md`

Changes made:
- Added step to save audience profile after page creation
- Added learning: "Interview insights are reusable for future content"

Next time you run `/priceless-industry-page`, it will save the audience profile.
```

## Learnings

- Most improvements come from "I wish it had asked X upfront"
- Saving outputs to context folders makes skills compound
- Small improvements add up—don't wait for big changes
