---
name: create-consultant
description: Clone an expert by extracting their frameworks into a consultant file
---

# Create Consultant

Turn an expert's thinking into a consultant you can reference for content feedback.

## When to Use

Run `/create-consultant` when you:
- Found a copywriter or marketer whose frameworks you want to apply
- Consumed enough of their content to extract patterns
- Want AI to think like them when reviewing your copy

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

### Step 1: Identify the Expert

Ask:
> "Who do you want to clone as a consultant?
>
> Good candidates for content work:
> - Copywriters whose style you admire
> - Marketing strategists with clear frameworks
> - Content creators in the accounting/finance space
> - Anyone whose feedback you'd pay for
>
> Who is it, and what are they known for?"

### Step 2: Extract Core Philosophy

Ask:
> "What does [name] fundamentally believe about content/copy?
>
> Think about:
> - What principles do they repeat constantly?
> - What do they think most people get wrong?
> - What's their core thesis?
>
> Give me 3-5 core beliefs."

### Step 3: Extract Frameworks

Ask:
> "What frameworks or formulas do they use?
>
> These are repeatable ways of writing, like:
> - A headline formula
> - A way of structuring landing pages
> - How they approach pain points
> - A process for writing emails
>
> Describe 2-3 frameworks. For each one:
> - What's it called?
> - How does it work?
> - When do you apply it?"

### Step 4: Extract Their Voice

Ask:
> "How does [name] give feedback on copy?
>
> - Are they direct or gentle?
> - Do they use specific phrases?
> - What do they always push back on?
> - What makes them say 'this is good'?
>
> Give me examples of how they'd respond to weak copy."

### Step 5: Create the Consultant File

Create the file at:
```
context/consultants/[name]/frameworks.md
```

Use the template from `context/consultants/_template.md`.

### Step 6: Confirm Creation

> "Created [name] consultant at `context/consultants/[name]/frameworks.md`
>
> To use this consultant, tell me:
> 'Review this copy using [name]'s frameworks'
>
> Or just mention their name and I'll apply their thinking."

## Example

```
User: /create-consultant

Claude: Who do you want to clone as a consultant?

User: Joanna Wiebe from Copyhackers - she's the godmother of
conversion copywriting

Claude: What does Joanna fundamentally believe about copy?

User: She believes you should use customer language, not your own.
Voice of customer research is everything. She also says specificity
beats cleverness—concrete details over vague claims.

Claude: Great. What frameworks does she use?

User: The main one is the "Message Mining" process—pulling exact
phrases from customer reviews, support tickets, surveys. She also
has the "So what?" test—keep asking "so what?" until you hit the
real benefit. And she structures landing pages with the
problem-agitate-solve framework.

Claude: How does Joanna give feedback?

User: Very direct. She'd say things like "this is you talking, not
your customer" or "too vague—what does 'quality service' actually
mean?" She pushes for specifics constantly.

Claude: Created Joanna Wiebe consultant at
`context/consultants/joanna-wiebe/frameworks.md`

To use: "Review this landing page using Joanna's frameworks"
```

## Tips

- **Include direct quotes** — Their exact language helps AI match their voice
- **Be specific about frameworks** — "They write good copy" is useless. "They use PAS structure" is useful.
- **Update over time** — Add new frameworks as you discover them

## Learnings

- Copywriting consultants are highest value for content work
- Include examples of their actual feedback style
- Link to their best resources in the Sources section
