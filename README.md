# Priceless CPA Content Operating System

A Claude Code-powered system for creating high-converting content for Priceless CPA. This repo combines a Next.js website with an AI-assisted content workflow that learns from your best work and applies expert frameworks.

## Quick Start

### Prerequisites

- [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) installed
- Node.js 18+

### Setup

1. **Clone and install:**
   ```bash
   git clone <your-repo-url>
   cd priceless-cpa
   npm install
   ```

2. **Start the website (optional):**
   ```bash
   npm run dev
   ```

3. **Start Claude Code:**
   ```bash
   claude
   ```

That's it. Claude Code automatically reads `CLAUDE.md` and understands the project structure.

---

## Using Skills

Skills are reusable workflows. Run them by typing `/skill-name` in Claude Code.

### Available Skills

| Command | What it does |
|---------|--------------|
| `/shorts-script` | Write short-form video scripts (Reels/TikTok/Shorts) |
| `/daily-journal` | Capture learnings into the knowledge base |
| `/industry-page` | Build a new industry landing page through interview |
| `/create-consultant` | Clone an expert's frameworks for content review |
| `/create-skill` | Create a new reusable workflow |
| `/improve-skill` | Enhance a skill based on feedback |
| `/git-push` | Commit and push changes to GitHub |

### Skill Examples

**Write a short-form video script:**
```
/shorts-script cost segregation
```

**Write a script with a specific format:**
```
/shorts-script --format contrarian
```

**Capture a learning from today:**
```
/daily-journal
> "The landing page for lawyers converted 3x better when we mentioned
> 'billable hour tracking' instead of just 'accounting.'"
```

**Build a new industry page:**
```
/industry-page
> "I want to create a landing page for dental practices"
```

**Clone an expert's frameworks:**
```
/create-consultant
> "I want to clone Joanna Wiebe from Copyhackers"
```

---

## Project Structure

```
priceless-cpa/
├── web/                    # Next.js website (Vercel root dir = web)
│   ├── app/page.tsx       # Homepage
│   ├── app/industries/    # Industry landing pages
│   ├── components/        # Shared React components
│   ├── lib/               # Shared utilities
│   ├── workflow/          # Content data (industries-content.ts)
│   └── public/            # Static assets
│
├── context/               # AI knowledge base
│   ├── audience/          # Target personas and content strategies
│   ├── best-work/         # Examples of high-performing content
│   ├── consultants/       # Expert frameworks (copywriting, marketing)
│   ├── lived-experiences/ # Daily learnings captured via /daily-journal
│   └── shorts/            # Format library and example scripts
│
├── skills/                # Reusable workflows
│   ├── shorts-script/     # Short-form video scripts
│   ├── daily-journal/     # Capture learnings
│   ├── industry-page/     # Build landing pages
│   ├── create-consultant/ # Clone expert frameworks
│   ├── create-skill/      # Create new skills
│   ├── improve-skill/     # Improve existing skills
│   └── git-push/          # Git workflow
│
├── CLAUDE.md              # Instructions for Claude Code
└── README.md              # This file
```

---

## How It Works

### 1. Context-Aware Content

Claude Code reads from `context/` to understand:
- **Who you're writing for** — Persona profiles with pain points and language
- **What works** — Examples of high-performing content
- **Expert frameworks** — Copywriting and marketing principles to apply
- **Past learnings** — What you've tested and discovered

### 2. Skills as Workflows

Each skill in `skills/` is a documented process. When you run `/skill-name`, Claude:
1. Reads the skill's `SKILL.md`
2. Follows the step-by-step process
3. Uses context from the knowledge base
4. Creates or modifies files as needed

### 3. Learning Over Time

Use `/daily-journal` to capture learnings. These get stored in `context/lived-experiences/` and inform future content creation.

---

## Common Workflows

### Create a Short-Form Video

```
/shorts-script
```

Choose a topic and format. The script lands in `Shorts/` ready to film.

### Build a New Industry Page

```
/industry-page
```

Answer a few questions about the target audience. Claude creates:
- Content in `workflow/industries-content.ts`
- Page at `app/industries/[slug]/page.tsx`
- Updates to navigation

### Add Expert Frameworks

```
/create-consultant
```

Extract an expert's thinking into a consultant file. Then ask Claude to review content using their frameworks:

```
Review this landing page using Joanna Wiebe's frameworks
```

### Capture Daily Learnings

```
/daily-journal
```

Log what worked, what didn't, and why. These learnings compound over time.

---

## Content Creation Principles

Built into the system:

1. **Speak to specific pain** — "Tax surprises" not "tax issues"
2. **Use their language** — Industry terms, not accounting jargon
3. **Reference lived experiences** — Real learnings beat generic advice
4. **Match proven voice** — Use examples in best-work to match style
5. **Apply frameworks** — Use consultant frameworks for strategic feedback

---

## Improving Skills

After running any skill, if something could work better, tell Claude:

```
"The script was too long. Can we add a 45-second max to the skill?"
```

Claude will suggest updating the skill for next time. Or run:

```
/improve-skill shorts-script
```

---

## Website Development

The Next.js site lives in `app/`. Key files:

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage |
| `app/industries/page.tsx` | Industries grid |
| `app/industries/[slug]/page.tsx` | Individual industry pages |
| `workflow/industries-content.ts` | Content for all industry pages |

Run the dev server:
```bash
npm run dev
```

View at: http://localhost:3000

---

## Adding New Skills

1. Run `/create-skill`
2. Describe the workflow you want to automate
3. Claude creates `skills/[name]/SKILL.md`

Or manually create `skills/[name]/SKILL.md` following the template in `skills/_template/`.

---

## Tips

- **Be specific** — "Write a short about cost segregation" beats "write content"
- **Use context** — Reference audience profiles: "Write this for the serial entrepreneur persona"
- **Iterate** — Run `/improve-skill` when you notice patterns
- **Capture learnings** — Use `/daily-journal` to make the system smarter over time
