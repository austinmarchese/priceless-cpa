# CLAUDE.md - Priceless CPA Operating System

This file provides guidance to Claude Code when working in this repository.

## What This Is

Priceless CPA's internal operating system. Two things live here:

1. **The Website** -- Next.js app for priceless.cpa (landing pages, lead magnets, industry pages)
2. **The Content OS** -- Everything needed to create YouTube videos, shorts, and marketing content without re-deriving context

## How This Repo Is Organized

The repo uses three top-level content folders with distinct purposes:

| Folder | Purpose |
|--------|---------|
| `raw/` | Unprocessed source material. Outlier screenshots, photos, research dumps, transcripts, best-work examples. Files here are inputs, not polished docs. |
| `wiki/` | Organized knowledge base. Audience profiles, brand voice, script systems, marketing strategy, lived experiences, consultant frameworks. Each wiki page references specific raw files when needed. |
| `projects/` | Active work. Each video or short gets its own folder with idea, script, and production notes. |

**Entry point:** Start with `wiki/_Home.md` to navigate the wiki.

## How to Use This Context

When helping with content:

1. **Check lived experiences** in `wiki/lived-experiences/` for relevant past learnings about what works
2. **Reference best work** in `raw/best-work/` when matching voice/style for new content
3. **Apply consultant frameworks** from `wiki/consultants/` for strategic feedback on copy
4. **Use audience profiles** in `wiki/audience/` to speak directly to their pain points
5. **Check outlier research** in `raw/outliers/` before creating YouTube content (proven patterns and titles)

## Key Folders

### Wiki (organized knowledge base)

| Folder | Purpose |
|--------|---------|
| `wiki/audience/` | Target personas and content strategies |
| `wiki/anthony/` | Brand source of truth |
| `wiki/brand-voice/` | Voice enforcement rules |
| `wiki/youtube-scripts/` | Script writing system |
| `wiki/thumbnails-and-titles/` | Packaging resources |
| `wiki/shorts/` | Format library and example scripts for short-form video |
| `wiki/lived-experiences/` | Daily learnings, what's working, what's not |
| `wiki/consultants/` | Expert frameworks to apply (copywriting, marketing) |
| `wiki/knowledge/` | Tax topic knowledge base for script reference |
| `wiki/marketing/` | Growth engine, sales process, lead magnets |

### Raw (unprocessed source material)

| Folder | Purpose |
|--------|---------|
| `raw/outliers/` | Outlier research: analyzed videos, proven patterns, adapted titles |
| `raw/best-work/` | Examples of content that performed well |
| `raw/photos/` | Raw photos for thumbnails and content |
| `raw/transcripts/` | Video transcripts |
| `raw/research/` | Research dumps |

### Projects (active work)

| Folder | Purpose |
|--------|---------|
| `projects/videos/` | Each video is its own folder with idea, script, production notes |
| `projects/videos/_template/` | Video project template |
| `projects/shorts/` | Short-form scripts ready to film (output of `/shorts-script`) |
| `projects/vsls/` | VSL scripts for landing pages, funnels, and service offers (output of `/vsl-script`) |

### Website

| Folder | Purpose |
|--------|---------|
| `app/` | Next.js pages (homepage, industries, lead magnets, services) |
| `workflow/` | Content data for industry pages |
| `public/` | Static assets (logo, illustrations) |

### Marketing & Sales

| File | Purpose |
|------|---------|
| `wiki/marketing/marketing-growth-engine.md` | Full marketing funnel: lead gen, sales process, lead magnets |
| `wiki/marketing/mvp-sales-process.md` | GHL pipeline, automations, lead scoring, implementation checklist |

## Skills

Skills are in `.claude/skills/[name]/SKILL.md`. When the user runs `/[skill-name]`, read the SKILL.md and follow the process.

**Content Creation:**

| Command | What it does |
|---------|--------------|
| `/video-idea-research` | Title generation: new concept, riff on outliers, or translate competitor titles |
| `/video-script-research` | Research the body content of a locked video: stats, tax code, examples, enriched outline |
| `/youtube-script` | Write a long-form YouTube script (10-20 min) from outline or topic |
| `/priceless-youtube-script-writer` | Full script lifecycle: draft, revise, finalize. Karlton hooks + Jasmine authority + Anthony's voice |
| `/youtube-idea` | Generate scored video ideas matched to audience and outlier patterns |
| `/shorts-script` | Write short-form video scripts (45-90s) for Reels/TikTok/Shorts |
| `/daily-journal` | Capture today's learnings into lived experiences |

**Sales & Marketing:**

| Command | What it does |
|---------|--------------|
| `/vsl-script` | Write Video Sales Letter scripts for landing pages, funnels, and service offers |
| `/industry-page` | Build a new industry landing page through interview |
| `/lead-magnet` | Generate a new lead magnet page with route and interactive quiz |
| `/code-review` | Audit codebase for branding consistency and best practices |

**System:**

| Command | What it does |
|---------|--------------|
| `/create-skill` | Create a new reusable workflow |
| `/improve-skill` | Enhance a skill based on learnings |
| `/create-consultant` | Clone an expert's frameworks |
| `/git-push` | Commit and push changes to GitHub |

## YouTube Content Workflow

The typical flow for creating YouTube content:

```
1. /video-idea-research   -> Generate titles (new concept, riff on outliers, or translate competitors)
2. /video-script-research -> Deep research: north star video, topic deep dive, enriched outline
3. /youtube-script        -> Write full script from outline with packaging
4. /shorts-script --from-youtube [slug]  -> Cut shorts clips from the long-form script
5. Film + edit
6. /daily-journal         -> Capture what worked after publishing
```

All YouTube context lives in one place:
- **Outlier research**: `raw/outliers/` (patterns, titles, screenshots)
- **Projects**: `projects/videos/[slug]/` (each video is its own folder: idea.md, script.md, production notes)
- **Shorts**: `projects/shorts/` (standalone shorts and clips from long-form)

## Content Creation Principles

1. **Speak to specific pain** -- "Tax surprises" not "tax issues"
2. **Use their language** -- Industry-specific terms, not accounting jargon
3. **Reference lived experiences** -- Real learnings beat generic advice
4. **Match proven voice** -- Use examples in `raw/best-work/` to match style
5. **Apply frameworks** -- Use consultant frameworks for strategic feedback
6. **Use proven patterns** -- Every YouTube video should map to an outlier pattern
7. **No em dashes** -- Use commas, periods, or restructure

## Target Audience (Quick Reference)

**Primary persona:** Serial entrepreneurs, 35-45, $5-50M net worth. Built wealth through operating businesses, reinvested into real estate. Multiple entities, complex structures. Frustrated with reactive CPAs who don't see the big picture.

**Full profile:** `wiki/audience/serial-entrepreneur/profile.md`

## Improving Skills

After running any skill, look for opportunities to improve it. If the user mentions something that could be better, or if you notice a pattern, suggest:

> "Should I add this to the skill so it works better next time?"

## Agents and Templates

- **Agents**: `.claude/agents/` contains agents organized by department
- **Templates**: `.claude/templates/` contains reusable templates

## This is a Next.js Project

The website lives in `app/`. Key files:
- `app/page.tsx` -- Homepage
- `app/industries/` -- Industry landing pages
- `app/tax-checklist/` -- Lead magnet (7 Questions tool)
- `workflow/industries-content.ts` -- Content for industry pages
