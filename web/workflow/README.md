# Workflow Content Files

This folder contains all editable copy and tools for the Priceless CPA website.

---

## Quick Start

### Editing Existing Industry Pages
1. Open `industries-content.ts`
2. Find the industry you want to edit (e.g., `lawyersContent`)
3. Change the text inside quotes
4. Save and refresh your browser

### Creating a New Industry Page
1. **Start with the interview:** Open `INDUSTRY-INTERVIEW.md` and work through all sections
2. **Add your content:** Copy your answers into `industries-content.ts` using the template
3. **Create the page:** Copy an existing industry page folder and update the import
4. **Add to the grid:** Update `app/industries/page.tsx` to include your new industry

---

## Files in This Folder

| File | Purpose |
|------|---------|
| `industries-content.ts` | All industry page copy (edit this!) |
| `INDUSTRY-INTERVIEW.md` | Interview tool for creating new industry pages |
| `README.md` | This file |

---

## Rules for Editing `industries-content.ts`

### Safe to Change
- Any text inside `'single quotes'` or `"double quotes"`
- The text content of headlines, descriptions, benefits, etc.

### DO NOT Change
- Variable names (e.g., `lawyersContent`, `topBarText`)
- Punctuation like commas, colons, brackets `{}`, or `[]`
- The structure or order of properties

### Example

```typescript
// SAFE to change the text inside quotes:
headline: 'Your New Headline Here',
description: 'Your new description text goes here.',

// DO NOT change the structure:
benefits: [
  'Benefit one',    // Keep the comma
  'Benefit two',    // Keep the comma
  'Benefit three',  // Keep the comma
],
```

---

## Industry Page Structure

Each industry page has these sections (all editable in `industries-content.ts`):

1. **Top Bar** — Urgency message at the very top
2. **Hero** — Main headline, description, and CTA button
3. **What We Handle** — 5 benefits/services you provide
4. **Who This Is For** — 4 ideal client types
5. **How We Work** — 4-step process
6. **Stats** — 4 key numbers/proof points
7. **Final CTA** — Closing headline and button

---

## Testing Your Changes

1. Make sure the dev server is running: `npm run dev`
2. Visit `http://localhost:3001/industries/[slug]`
3. Refresh the page after saving changes

---

## Need Help?

If you break something, you can:
1. Undo your changes (Cmd+Z)
2. Check git for the previous version: `git checkout workflow/industries-content.ts`
3. Reach out to the development team
