---
name: daily-journal
description: Capture learnings from content work, client calls, and industry insights
---

# Daily Journal

Capture your learnings into the lived knowledge base.

## When to Use

Run `/daily-journal` after:
- Creating content that worked (or didn't)
- A client call with useful insights
- Discovering something about an industry
- Testing something and seeing results

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

### Step 1: Ask What Happened

Ask the user:
> "What happened today worth remembering? This could be:
> - Content that performed well (or flopped)
> - Client feedback that surprised you
> - An industry insight from a conversation
> - Something you tested and learned from"

### Step 2: Extract the Key Elements

From their response, identify:
1. **The Story** — What actually happened? (Be specific)
2. **The Learning** — What's the transferable insight?
3. **The Quotable** — How would they naturally say this?
4. **Tags** — What topics does this cover?

### Step 3: Create the Entry

Generate a markdown file with this structure:

```markdown
# [DATE] - [Brief Descriptive Title]

## Metadata
- **Date:** [TODAY]
- **Tags:** [extracted tags]
- **Context:** [what they were working on]

## What Happened

[The story, written in first person]

## Key Learning

[The transferable insight]

## Quotable

> "[Natural language quote]"
```

### Step 4: Save the Entry

Save to: `wiki/lived-experiences/[DATE]-[slug].md`

Use format: `2026-03-17-lawyers-love-specificity.md`

Confirm: "Logged to lived experiences: `[filename]`"

### Step 5: Connect to Content

Ask:
> "Is there content you're working on where this learning applies? I can reference it next time."

## Inputs Needed

- User's description of what happened

## Output

- Markdown file in `wiki/lived-experiences/`
- Confirmation message

## Example

```
User: /daily-journal

Codex: What happened today worth remembering?

User: The landing page for lawyers is converting way better than
the generic one. I think it's because we called out specific pain
like "billable hour tracking nightmares" instead of just "tax help."

Codex: Got it. Here's what I captured:

**What Happened:** Industry-specific landing page for lawyers
outperformed the generic version significantly.

**Key Learning:** Specific pain points ("billable hour tracking
nightmares") convert better than generic ones ("tax help").

**Quotable:** "The more specific the pain, the more they feel seen."

Logged to lived experiences: `2026-03-17-specific-pain-converts.md`

Is there content you're working on where this learning applies?
```

## Learnings

- Keep entries specific—"content went well" is useless
- Industry-specific learnings are gold for future pages
- Include actual metrics when available
