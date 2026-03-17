# CLAUDE.md - Priceless CPA Operating System

This file provides guidance to Claude Code when working in this repository.

## What This Is

Priceless CPA's operating system for creating content that converts. It contains:

- **Lived Experiences** — Learnings from client work, content creation, and industry insights
- **Best Work** — Examples of high-performing content (emails, landing pages, blog posts)
- **Consultants** — Expert frameworks for copywriting, marketing, and accounting content
- **Audience** — Deep profiles of target industries and client personas

## How to Use This Context

When helping with content:

1. **Check lived experiences** for relevant past learnings about what works
2. **Reference best work** when matching voice/style for new content
3. **Apply consultant frameworks** for strategic feedback on copy
4. **Use audience profiles** to speak directly to their pain points

## Key Folders

| Folder | Purpose |
|--------|---------|
| `context/lived-experiences/` | Daily learnings—what's working, what's not |
| `context/best-work/` | Examples of content that performed well |
| `context/consultants/` | Expert frameworks to apply (copywriting, marketing) |
| `context/audience/` | Target industry profiles and personas |
| `context/shorts/` | Format library and example scripts for short-form video |

## Skills

Skills are in `skills/[name]/SKILL.md`. When the user runs `/[skill-name]`, read the SKILL.md and follow the process.

**Available skills:**

| Command | What it does |
|---------|--------------|
| `/daily-journal` | Capture today's learnings into lived experiences |
| `/create-skill` | Create a new reusable workflow |
| `/improve-skill` | Enhance a skill based on learnings |
| `/create-consultant` | Clone an expert's frameworks |
| `/industry-page` | Build a new industry landing page through interview |
| `/git-push` | Commit and push changes to GitHub |
| `/shorts-script` | Write short-form video scripts for tax content |

## Content Creation Principles

1. **Speak to specific pain** — "Tax surprises" not "tax issues"
2. **Use their language** — Industry-specific terms, not accounting jargon
3. **Reference lived experiences** — Real learnings beat generic advice
4. **Match proven voice** — Use examples in best-work to match style
5. **Apply frameworks** — Use consultant frameworks for strategic feedback

## Improving Skills

After running any skill, look for opportunities to improve it. If the user mentions something that could be better, or if you notice a pattern, suggest:

> "Should I add this to the skill so it works better next time?"

## This is a Next.js Project

The website lives in `app/`. Key files:
- `app/page.tsx` — Homepage
- `app/industries/` — Industry landing pages
- `workflow/industries-content.ts` — Content for industry pages
