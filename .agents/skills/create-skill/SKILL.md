---
name: create-skill
description: Create a new reusable skill from a workflow you do repeatedly
---

# Create Skill

Turn a repeatable content workflow into a skill you can run with one command.

## When to Use

Run `/create-skill` when you:
- Notice you're explaining the same process repeatedly
- Have a content workflow with clear steps
- Want to codify something so AI can do it consistently

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

### Step 1: Identify the Workflow

Ask the user:
> "What's a content workflow you do repeatedly that you'd like to turn into a skill?
>
> Good candidates:
> - Blog post outline from topic
> - Email sequence for specific trigger
> - Social post from blog content
> - Client onboarding content
> - Industry research synthesis
>
> Describe what you do, step by step."

### Step 2: Extract the Steps

From their description, identify:
1. The trigger (when do you run this?)
2. The inputs needed (what information does it require?)
3. The steps (what happens in order?)
4. The output (what does it produce?)

Confirm with the user:
> "Here's what I understood:
>
> **When to use:** [trigger]
> **Inputs:** [what's needed]
> **Steps:**
> 1. [step 1]
> 2. [step 2]
> 3. [step 3]
> **Output:** [what it produces]
>
> Does this capture your workflow? What's missing?"

### Step 3: Choose a Name

Ask:
> "What should we call this skill? Use lowercase with hyphens (e.g., `blog-outline`, `email-sequence`)"

### Step 4: Create the Skill File

Create the folder and SKILL.md file:
```
skills/[skill-name]/SKILL.md
```

Use the template from `skills/_template/SKILL.md` as a base.

### Step 5: Confirm Creation

Tell the user:
> "Created `/[skill-name]` at `skills/[skill-name]/SKILL.md`
>
> Try it now: `/[skill-name]`
>
> After using it, run `/improve-skill` to make it better based on what you learned."

## Example

```
User: /create-skill

Codex: What's a content workflow you do repeatedly?

User: Every time I finish an industry landing page, I write a
blog post that goes deeper on one of the pain points. I pick
the most compelling pain, research it more, and write a post
that links back to the landing page.

Codex: Here's what I understood:

**When to use:** After completing an industry landing page
**Inputs:** The landing page content, which pain point to expand
**Steps:**
1. Review landing page pain points
2. Pick the most compelling one
3. Research deeper on that pain
4. Write blog post expanding on it
5. Add CTA linking to landing page

**Output:** Blog post draft

Does this capture your workflow?

User: Yes, also ask me for any industry-specific stats

Codex: Got it. What should we call this skill?

User: pain-to-post

Codex: Created `/pain-to-post` at `skills/pain-to-post/SKILL.md`

Try it now: `/pain-to-post`
```

## Learnings

- Content skills should reference best-work for voice matching
- Include checkpoints to confirm before moving to next section
- Skills that create files should show where they saved
