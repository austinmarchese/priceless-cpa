# CLAUDE.md - Priceless CPA Operating System

This file provides guidance to Claude Code when working in this repository.

## What This Is

Priceless CPA's internal operating system. Two things live here:

1. **The Website** — Next.js app for priceless.cpa (landing pages, lead magnets, industry pages)
2. **The Content OS** — Everything needed to create YouTube videos, shorts, and marketing content without re-deriving context

## How to Use This Context

When helping with content:

1. **Check lived experiences** for relevant past learnings about what works
2. **Reference best work** when matching voice/style for new content
3. **Apply consultant frameworks** for strategic feedback on copy
4. **Use audience profiles** to speak directly to their pain points
5. **Check outlier research** before creating YouTube content (proven patterns and titles)

## Key Folders

### Content OS (context + reference)

| Folder | Purpose |
|--------|---------|
| `context/audience/` | Target personas and content strategies |
| `context/shorts/` | Format library and example scripts for short-form video |
| `context/lived-experiences/` | Daily learnings, what's working, what's not |
| `context/best-work/` | Examples of content that performed well |
| `context/consultants/` | Expert frameworks to apply (copywriting, marketing) |

### Content Pipeline (where work happens)

| Folder | Purpose |
|--------|---------|
| `content/youtube/outliers/` | Outlier research: 19 analyzed videos, 6 proven patterns, adapted titles |
| `content/youtube/projects/` | Each video is its own folder with idea, script, production notes |
| `content/shorts/` | Short-form scripts ready to film (output of `/shorts-script`) |
| `content/knowledge/` | Tax topic knowledge base for script reference |
| `content/photos/` | Raw photos for thumbnails and content |

### Website

| Folder | Purpose |
|--------|---------|
| `app/` | Next.js pages (homepage, industries, lead magnets, services) |
| `workflow/` | Content data for industry pages |
| `public/` | Static assets (logo, illustrations) |

### Marketing & Sales

| File | Purpose |
|------|---------|
| `context/marketing-growth-engine.md` | Full marketing funnel: lead gen, sales process, lead magnets |
| `context/mvp-sales-process.md` | GHL pipeline, automations, lead scoring, implementation checklist |

## Skills

Skills are in `skills/[name]/SKILL.md`. When the user runs `/[skill-name]`, read the SKILL.md and follow the process.

**Content Creation:**

| Command | What it does |
|---------|--------------|
| `/video-idea-research` | Title generation: new concept, riff on outliers, or translate competitor titles |
| `/video-script-research` | Deep research workflow: north star video, topic research, enriched outline |
| `/youtube-script` | Write a long-form YouTube script (10-20 min) from outline or topic |
| `/youtube-idea` | Generate scored video ideas matched to audience and outlier patterns |
| `/shorts-script` | Write short-form video scripts (45-90s) for Reels/TikTok/Shorts |
| `/daily-journal` | Capture today's learnings into lived experiences |

**Website & Marketing:**

| Command | What it does |
|---------|--------------|
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
1. /video-idea-research   → Generate titles (new concept, riff on outliers, or translate competitors)
2. /video-script-research → Deep research: north star video, topic deep dive, enriched outline
3. /youtube-script        → Write full script from outline with packaging
4. /shorts-script --from-youtube [slug]  → Cut shorts clips from the long-form script
5. Film + edit
6. /daily-journal         → Capture what worked after publishing
```

All YouTube context lives in one place:
- **Outlier research**: `content/youtube/outliers/` (patterns, titles, screenshots)
- **Projects**: `content/youtube/projects/[slug]/` (each video is its own folder: idea.md, script.md, production notes)
- **Shorts**: `content/shorts/` (standalone shorts and clips from long-form)

## Content Creation Principles

1. **Speak to specific pain** — "Tax surprises" not "tax issues"
2. **Use their language** — Industry-specific terms, not accounting jargon
3. **Reference lived experiences** — Real learnings beat generic advice
4. **Match proven voice** — Use examples in best-work to match style
5. **Apply frameworks** — Use consultant frameworks for strategic feedback
6. **Use proven patterns** — Every YouTube video should map to an outlier pattern
7. **No em dashes** — Use commas, periods, or restructure

## Target Audience (Quick Reference)

**Primary persona:** Serial entrepreneurs, 35-45, $5-50M net worth. Built wealth through operating businesses, reinvested into real estate. Multiple entities, complex structures. Frustrated with reactive CPAs who don't see the big picture.

**Full profile:** `context/audience/serial-entrepreneur/profile.md`

## Improving Skills

After running any skill, look for opportunities to improve it. If the user mentions something that could be better, or if you notice a pattern, suggest:

> "Should I add this to the skill so it works better next time?"

## This is a Next.js Project

The website lives in `app/`. Key files:
- `app/page.tsx` — Homepage
- `app/industries/` — Industry landing pages
- `app/tax-checklist/` — Lead magnet (7 Questions tool)
- `workflow/industries-content.ts` — Content for industry pages
