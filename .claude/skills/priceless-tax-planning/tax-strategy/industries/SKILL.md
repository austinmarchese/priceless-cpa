# Industries Reference

This directory contains industry-specific tax planning playbooks for Priceless CPA's 11 core verticals. Each file is loaded during Phase 3 (strategy generation) when the client profile matches the industry.

## How it works

During engagement, the main `SKILL.md` reads the client profile. Based on `industry` field, the matching industry file is loaded for strategy ranking, industry-specific red flags, and deliverable tailoring.

## Industries covered

| File | Primary client profile | QBI posture | Retirement profile |
|------|------------------------|-------------|--------------------|
| `E-COMMERCE.md` | Product-based online sellers | Non-SSTB, full QBI | Moderate |
| `REAL-ESTATE-OWNER.md` | LTR, STR, mixed portfolios | Safe harbor evaluation | Moderate to high |
| `SOFTWARE-AI.md` | SaaS, AI companies, dev shops | Non-SSTB, full QBI | Moderate; QSBS exit focus |
| `DOCTORS-MEDICAL.md` | Physicians, dentists, medical groups | SSTB, phase-out focus | CRITICAL (DB priority) |
| `CONSTRUCTION.md` | GCs, specialty trades, builders | Non-SSTB, full QBI | Moderate |
| `REAL-ESTATE-AGENT.md` | Solo agents, team leaders | Non-SSTB (performance-based) | Moderate |
| `DIGITAL-MARKETING.md` | Agencies, MarTech | SSTB analysis critical | Moderate |
| `HOME-SERVICES.md` | HVAC, plumbing, electrical, etc. | Non-SSTB, full QBI | Moderate |
| `JEWELRY-STORE.md` | Retail + custom jewelers | Non-SSTB, full QBI | Moderate; LIFO focus |
| `INVESTMENT-FIRMS.md` | RIAs, wealth managers as clients | SSTB, phase-out focus | CRITICAL (DB priority) |
| `CAR-WASHES.md` | Express and full-service car washes | Non-SSTB, full QBI | Moderate; cost seg focus |

Additionally, `PR-ACT-60.md` (in separate PR vertical skill or cross-reference) addresses clients relocating to Puerto Rico.

## Industry classification logic

Some clients have multiple possible classifications (e.g., construction firm that also owns the building). Load multiple industry files if relevant; deduplicate strategies.

### Non-SSTB industries (full QBI available)
- E-Commerce
- Real Estate Owner (with safe harbor)
- Software/AI
- Construction
- Real Estate Agent (performance-based, non-SSTB)
- Home Services
- Jewelry Store
- Car Washes

### SSTB industries (QBI phases out above threshold)
- Doctors / Medical Practices
- Investment Firms (RIAs)

### SSTB analysis required (mixed/ambiguous)
- Digital Marketing Agencies (depends on service mix)
- Real estate agents with pure consulting revenue streams

## Common patterns across industries

### Non-SSTB pattern
- QBI optimization typically valuable (W-2/UBIA limit above threshold)
- Reasonable comp math coordinates with QBI W-2 limit
- Full deduction available regardless of income level

### SSTB pattern
- Retirement plan stacking becomes critical (DB/CBP priority)
- Taxable income reduction strategies have DOUBLE benefit (direct deduction + QBI restoration)
- Charitable giving patterns often meaningful
- Exit planning has QSBS implications if C Corp

### Real estate heavy industries
- Cost segregation almost always valuable
- Bonus depreciation timing critical (100% permanent post-OBBBA)
- §163(j) back to EBITDA (post-OBBBA benefit)
- §1031 exchange awareness
- Self-rental rule awareness

### Inventory businesses
- Method accounting review (cash/accrual, inventory methods)
- §471(c) small taxpayer exemption check (post-OBBBA ~$30M threshold)
- LIFO evaluation where appreciation pattern present
- Landed cost accuracy

## Cross-reference to strategy files

Industry files reference individual strategy files for detail. Always load relevant strategy files alongside industry file during Phase 3.

Industry files are playbooks; strategy files are mechanisms. Playbooks tell you WHAT to consider for a given client; strategy files tell you HOW.

## Update cadence

Industry files updated annually for:
- OBBBA / new legislation impacts
- Post-OBBBA IRS guidance
- Indexed threshold changes
- State-level program changes
- Industry-specific IRS focus areas

Last updated: April 2026 (initial release with v0.9).
