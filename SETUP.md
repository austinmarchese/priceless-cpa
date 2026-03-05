# Priceless CPA Website — Client Setup Guide

This guide helps you set up the website locally and use OpenClaw to create new industry landing pages.

---

## Quick Start

### 1. Install Prerequisites

You need these installed on your Mac:

```bash
# Install Homebrew (if you don't have it)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node

# Install GitHub CLI
brew install gh

# Install OpenClaw
npm install -g @anthropic/openclaw
```

### 2. Clone the Repository

```bash
git clone https://github.com/austinmarchese/priceless-cpa.git
cd priceless-cpa
npm install
```

### 3. Authenticate with GitHub

So you can push changes:

```bash
gh auth login
```

Follow the prompts (choose GitHub.com, HTTPS, and authenticate via browser).

### 4. Run the Dev Server

```bash
npm run dev
```

View the site at: http://localhost:3001

---

## Using OpenClaw

OpenClaw is an AI assistant that can build landing pages for you through conversation.

### Start OpenClaw

In the `priceless-cpa` folder:

```bash
openclaw
```

### Available Commands

| Say this... | What happens |
|-------------|--------------|
| "I want to build a new industry landing page" | Interviews you, then creates the page |
| "Create a landing page for dentists" | Same as above, starts with "dentists" |
| "Push the code" | Commits and pushes your changes to GitHub |
| "Push changes" | Same as above |

### Creating a New Industry Page

1. Say: **"I want to build a new industry landing page"**

2. OpenClaw will ask you questions like:
   - What industry?
   - Who's the target client?
   - What are their pain points?
   - What services do you offer them?

3. Answer each question (pick from the options given)

4. OpenClaw creates:
   - Content in `workflow/industries-content.ts`
   - Page at `app/industries/<slug>/page.tsx`
   - Updates the navigation

5. Say: **"Push the code"** to save to GitHub

---

## Editing Existing Pages

### Edit Industry Copy

All industry page text lives in one file:

```
workflow/industries-content.ts
```

Open it, find the industry you want to edit, change the text inside quotes, save.

### What You Can Safely Edit

- Headlines and descriptions
- Benefits lists
- Stats
- CTA button text

### What NOT to Change

- Variable names (e.g., `lawyersContent`)
- Punctuation like commas, brackets `{}`, `[]`
- The structure of the file

---

## File Structure

```
priceless-cpa/
├── app/
│   ├── page.tsx              # Homepage
│   ├── industries/
│   │   ├── page.tsx          # Industries landing page
│   │   ├── lawyers/          # Each industry has a folder
│   │   ├── ai-businesses/
│   │   └── ...
│   └── ...
├── workflow/
│   ├── industries-content.ts # All industry copy (EDIT THIS)
│   └── README.md             # Editing instructions
├── skills/                   # OpenClaw skills
│   ├── industry-page/        # Creates new industry pages
│   └── git-push/             # Pushes code to GitHub
└── SETUP.md                  # This file
```

---

## Troubleshooting

### "Push failed" or authentication error

Run:
```bash
gh auth login
```

### Site won't start

Make sure you ran:
```bash
npm install
```

### Changes not showing

1. Make sure the dev server is running (`npm run dev`)
2. Hard refresh your browser (Cmd+Shift+R)

### Broke something?

Undo your changes:
```bash
git checkout .
```

Or ask OpenClaw: "Undo my changes"

---

## Need Help?

Contact the development team or ask OpenClaw — it can read the codebase and help debug issues.
