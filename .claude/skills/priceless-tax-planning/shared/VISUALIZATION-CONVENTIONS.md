# Visualization Conventions

This file defines the visual rules for Priceless CPA deliverables. The goal is to produce memos and models that feel premium and consistent across engagements without making every deliverable a design project. Defined once; applied everywhere.

## Scope

Two deliverables per engagement:
1. **PDF narrative memo** — story format, print-friendly, branded
2. **Excel / Sheets model** — data format, interactive, scenario-modelable

Each has its own visual conventions. Internal memos (for partner review) follow these conventions too, but with less formatting polish since they're workpapers.

---

## PDF narrative memo conventions

### Typography

- Body text: 11pt, serif (Georgia, Garamond, or similar) for readability
- Headers: 14-18pt, sans-serif (Helvetica, Calibri, or similar) for contrast
- Emphasized numbers: 13pt bold, sans-serif, in highlight boxes
- Footnotes (rare): 9pt, italic, sans-serif

Partners may choose the exact font family when generating the PDF; the template specifies size relationships and serif/sans-serif distinction, not specific typefaces. This lets partners use whatever their preferred word processor has available.

### Color palette

**Primary:** Priceless Navy (exact hex TBD — approximately #1A365D or similar)
Use for: primary headers, cover page accents, signature block, highlighted number boxes

**Neutral grays:** 
- Near-black #1A1A1A for body text
- Medium gray #4A4A4A for secondary text, bylines
- Light gray #E5E5E5 for table borders, separator lines, subtle backgrounds

**Semantic colors (minimal use):**
- Savings green #1F7A1F for savings figures, ahead-of-safe-harbor indicators
- Warning amber #B8860B for on-track indicators, attention flags
- Risk red #8B0000 for behind-safe-harbor, deadline-missed, urgent action

**Not used:**
- Rainbow palettes
- Client-specific branding colors
- Bright or neon tones

### Highlighted number boxes

The most critical numbers in every memo are emphasized in framed boxes to make them scannable. Consistent pattern:

```
┌──────────────────────────────────────────────────────────────┐
│  PROJECTED 2026 TOTAL TAX:           $218,000                │
│  PAID YEAR-TO-DATE:                  $142,000                │
│  NEXT PAYMENT (Fed ES, due 6/15):    $28,400                 │
│  PROJECTED TOTAL STRATEGY SAVINGS:   $43,500                 │
└──────────────────────────────────────────────────────────────┘
```

Four numbers per box. Always these four (or the tier-appropriate equivalents). Always in the same order. Always on the "Where You Stand" page.

For Comprehensive and Full Wealth, an additional box may appear in the "Looking Forward" section:

```
┌──────────────────────────────────────────────────────────────┐
│  2027 PROJECTED TAX (baseline):      $245,000                │
│  2027 WITH PLANNING IN PLACE:        $201,000                │
│  MULTI-YEAR OPPORTUNITY:             $44,000                 │
└──────────────────────────────────────────────────────────────┘
```

### Tables

Simple, clean, readable. Not Excel-style dense tables.

Rules:
- Max 6 columns; beyond that, break into multiple tables
- Alternate row shading in very light gray (#F5F5F5) for rows > 5
- Bold the header row
- Right-align numeric columns; left-align text columns
- Currency always shows dollar sign in header row, not in every cell
- Totals row: bold + top border
- "Subtotal" rows: italic + thin top border

Example:

| Strategy | Est. Savings | Priority | Action By |
|---|---|---|---|
| Accountable Plan | $4,200 | 1 | July 1 |
| Augusta Rule | $5,000 | 1 | July 1 |
| Solo 401(k) Boost | $14,800 | 2 | Oct 1 |
| Charitable Bunch | $6,500 | 2 | Dec 31 |
| Hire Jake | $3,000 | 3 | Sep 1 |
| **Total** | **$33,500** | | |

### Charts

Four chart types. No more. If the story needs a different chart, we reevaluate whether the chart is actually helping.

**1. Projection Waterfall**

Shows how income flows to taxable income to total tax, with strategies visible as reductions.

```
Gross Income          ████████████████████████  $850,000
   Less: Business Deductions         ██████         -$120,000
   Less: Retirement Contributions    ███            -$50,000
   Less: QBI Deduction               ██             -$45,000
= Taxable Income      ███████████████████        $635,000
   Federal Tax @ blended rate                       $165,000
   State Tax                                        $28,000
   SE Tax                                           $22,000
   Medicare Additional                              $3,000
= TOTAL TAX           ████████████              $218,000
```

Horizontal bar style, scale anchored at left. Reductions shown as indented negative bars. Final "Total Tax" bar matches the highlighted number box.

**2. Safe Harbor Progress Bar**

Shows prepayments vs. safe harbor target.

```
Safe Harbor Target: $205,700
Paid YTD:          $142,000  [████████████████████░░░░░░░░░░] 69%

Status: ON TRACK
Next payment: $28,400 due June 15 will bring total to $170,400 (83%)
Remaining to cover through year-end: $35,300
```

Single horizontal bar with completion percentage. Semantic color based on status:
- Green: ahead of schedule
- Amber: on track
- Red: behind schedule

**3. Strategy Savings Bars**

Horizontal bars ranking strategies by estimated savings.

```
Solo 401(k) Boost       ██████████████░  $14,800
Charitable Bunching     ██████░          $6,500
Augusta Rule            ████░            $5,000
Accountable Plan        ███░             $4,200
Hire Jake               ██░              $3,000
```

Color intensity (shading) indicates implementation complexity:
- Darkest: Low complexity (one-time setup, then automatic)
- Medium: Medium complexity (requires quarterly attention)
- Lightest: High complexity (requires dedicated engagement or significant client input)

**4. Year-Over-Year Comparison** (Comprehensive and Full Wealth only)

Two grouped bars side by side showing prior year actual vs. current year projection.

```
                      2025 Actual      2026 Projected
Total Revenue       █████████████     ██████████████   +8%
Net Business Income ██████████        ████████████     +20%
AGI                 ████████          █████████        +13%
Total Tax           ███████           ████████         +17%
Effective Rate      ████              ████             flat
```

Shows direction of travel. Arrow/indicator shows % change.

### Not used in PDF

- Pie charts (hard to read, inaccurate)
- 3D effects (unprofessional)
- Animated or interactive charts (PDFs are static)
- Sankey diagrams or other complex visualizations
- More than one chart per page (overwhelming)

### Page layout

- 8.5 × 11 US Letter standard
- 1 inch margins all sides
- Single-column body text (not newspaper columns)
- Page numbers at bottom center, format "Page X of Y"
- Priceless logo top-right of every page (small, subtle)
- Footer: "Priceless CPA — Confidential — [Client ID] — Q[N] 20[YY]"

### Cover page

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│                  [Priceless Logo]                      │
│                                                        │
│                                                        │
│             QUARTERLY TAX PLAN                         │
│                                                        │
│                  Q2 2026                               │
│                                                        │
│                                                        │
│              Prepared for                              │
│            Sarah Rodriguez                             │
│                                                        │
│                                                        │
│              Prepared by                               │
│              Tony Chen, CPA                            │
│              Priceless CPA                             │
│                                                        │
│              June 4, 2026                              │
│                                                        │
│                                                        │
│     [Navy accent bar across bottom with tagline]       │
│                                                        │
└────────────────────────────────────────────────────────┘
```

Minimalist. The memo starts on page 2.

### Export

Partner's workflow for PDF generation:
1. Final draft in Word or Google Docs
2. Apply Priceless branded template (stored in `_TEMPLATES/PricelessMemo_Template.docx`)
3. Export to PDF
4. Quick review in PDF form (catch any formatting bugs that appeared in export)
5. Upload to client delivery channel

Template files maintained in shared drive. Updated version-locked when conventions change.

---

## Excel / Sheets model conventions

### Structural conventions

- One tab per logical concept (7 tabs total per the client-facing memo template)
- Tab order is fixed: Dashboard, Projection, Strategy Savings, Payment Schedule, Scenario Comparison, Multi-Year, Assumptions
- Tab color coding:
  - Dashboard: Navy
  - Data tabs (Projection, Strategy Savings, Payment Schedule): no color
  - Analytical tabs (Scenario Comparison, Multi-Year): medium gray
  - Reference tab (Assumptions): light green
- Never hide tabs
- Never protect sheets so client can't see formulas (transparency over obfuscation)

### Cell formatting

- Font: Calibri 11pt for body cells
- Headers: Calibri 11pt bold
- Section labels: Calibri 12pt bold, navy color
- Row height: standard (15 pt) unless content requires more
- Column widths: auto-fit but minimum 10 characters
- Freeze panes: freeze header row on every tab
- Zoom: 100% default

### Cell fill conventions

| Purpose | Fill color | Notes |
|---|---|---|
| Formula cell (calculated) | Pale gray (#F5F5F5) | Visible but not distracting |
| Input cell (client-editable) | Pale yellow (#FFF9E5) | Signals "you can change this" |
| Header cell | Navy (#1A365D) with white text | Consistent across all tabs |
| Highlighted number (important) | Pale blue (#E6F0F8) | Used sparingly |
| Totals row | Pale gray (#F5F5F5) + bold + top border | |
| Status indicator (green/amber/red) | Semantic color fill | Only in Status columns |

### Number formatting

- Currency: `$#,##0` for amounts ≥ $100 | `$#,##0.00` for amounts < $100
- Percentages: `0.0%` (one decimal)
- Negative numbers: red parentheses `(1,234)`
- Dates: `mmmm d, yyyy` in narrative cells | `yyyy-mm-dd` in date-typed cells
- N/A cells: "—" (em dash)
- Zero values in output: "—" not "$0" (unless the zero is meaningful)
- Cells with formulas that could return errors: wrap in `IFERROR(...,"—")`

### Highlighted cells pattern

Same as PDF: four key numbers per tab, emphasized consistently.

On the Dashboard tab:
- Projected Total Tax (navy bold, boxed cell with thick border)
- Paid Year-to-Date (same style)
- Next Payment (same style, with date adjacent)
- Total Projected Savings (same style)

On the Projection tab:
- **Total Tax** row at bottom: bold, double top border, navy fill with white text
- Subtotals (AGI, Taxable Income): bold, single top border

On the Strategy Savings tab:
- Total Savings row at bottom: bold, navy fill with white text

### Formulas

- Visible and traceable (no hidden calculations)
- Use named ranges for commonly-referenced values (e.g., `Prior_Year_Tax`, `Safe_Harbor_Target`, `Current_Year_Bracket`)
- Link between tabs with tab names explicit: `=Projection!B25` not `=B25`
- Document complex formulas in an adjacent comment cell
- Avoid volatile functions (NOW(), TODAY(), INDIRECT()) unless necessary — they slow the workbook

### Charts in Excel

Minimal. One chart per analytical tab at most. Same four chart types as PDF:

- Projection Waterfall (on Projection tab)
- Strategy Savings Bars (on Strategy Savings tab)
- Scenario Comparison (on Scenario Comparison tab)

No chart on Dashboard, Payment Schedule, Multi-Year, Assumptions tabs (those are data-dense; charts would be redundant or confusing).

### Client interactivity

Designed so clients can model scenarios:

- Assumptions tab inputs (revenue run-rate, margin, etc.) feed Projection tab
- Projection tab feeds Dashboard totals
- Strategy Savings tab has a "Status" column with validation list: Recommended / Approved / Implemented / Declined
- Changing Status flows through to Dashboard totals automatically
- Client can change assumptions, see projections update, decide

Partners should demo this on the first engagement with each client so they understand it's interactive.

### Print formatting

Clients occasionally print the Excel. Settings:
- Print area set on each tab (no print bleed)
- Fit to 1 page wide
- Page breaks manually set on dense tabs
- Gridlines on in print (for readability)
- Sheet name in header
- "Priceless CPA — Confidential — [Client ID]" in footer
- Page numbers bottom right

### File conventions

- Filename: `[ClientID]_[Year]_[Quarter]_TaxPlanningModel.xlsx`
- Save as .xlsx (not .xls)
- Google Sheets version: same structure, same conventions, hosted in client's shared Drive folder
- Master template: `_TEMPLATES/TaxPlanningModel_Master_v0.4.xlsx` in firm shared drive
- Version-lock the template when conventions change; existing engagements stay on their version

### Security and sharing

- No personally-identifying information in the file (use client ID placeholder)
- No linked external files (self-contained workbook)
- No macros / VBA (security risk; clients' IT may block)
- Protected cells only where essential to prevent accidental formula overwrites (client-editable cells stay unprotected)
- Comments visible (don't hide; transparency)

---

## Internal memo conventions (for partner review)

Simpler rules. The internal memo is a workpaper; polish comes during client-facing conversion.

- Markdown format in the Claude project (or plain text)
- No required branding
- Open questions for partner in a distinct section (marked with `> QUESTION:` prefix)
- Compliance flags in a distinct section
- No highlighted boxes required (use markdown bold for emphasis)
- No charts required (tables are fine; visuals come in client-facing conversion)
- Length unbounded (thoroughness > brevity)

The internal memo is input to the conversion process. It doesn't need to be pretty.

---

## What's deferred to later sprints

- **Actual master template Excel file**: structure specified here, file built in Sprint 8 against a real engagement
- **Chart generation automation**: Excel charts created manually per engagement in v0.4; automation via script in Sprint 8+
- **PDF generation pipeline**: partners manually export in v0.4; automated PDF generation from markdown with Priceless branding in post-MVP
- **Dark mode / accessibility variations**: single standard for MVP; accessibility pass post-launch
- **Client portal delivery UI**: engagements email PDF + share Excel link in v0.4; integrated portal delivery in future Karbon integration

---

## Version history

- v1.0 (April 2026, v0.4): Initial conventions for PDF narrative memo + Excel/Sheets model. Four chart types, color palette, formatting standards, file conventions.
