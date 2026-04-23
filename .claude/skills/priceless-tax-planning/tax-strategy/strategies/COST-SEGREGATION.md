---
strategy: Cost Segregation Study
category: secondary
authority:
  - IRC §168 - MACRS depreciation classes
  - IRC §263A - UNICAP
  - Treas. Reg. §1.263(a)-3 - tangible property regulations
  - Hospital Corporation of America v. Commissioner (1997) - legal foundation for cost segregation
  - IRS Cost Segregation Audit Techniques Guide (2023 revision)
  - OBBBA 2025 (P.L. 119-21) §70108 - 100% bonus depreciation made permanent post-Jan 19, 2025
applies_when:
  - owns_building_or_significant_improvements: true
  - building_basis > $500000: typical threshold (lower for some uses)
  - taxable_income > 0: true (to absorb the deduction; carryforward possible if not)
  - property_placed_in_service_recently: within last 15 years typically, though lookback available
earliest_actionable_quarter: Q1 (to sequence with tax year strategy)
latest_actionable_quarter: Q4 (must have study completed before filing)
typical_savings_range: $20000 - $500000+ (single-year acceleration)
typical_savings_as_pct_of_income: 5-30% of acquisition/construction cost reclassified
savings_formula: |
  Reclassified property (5/7/15-year) × marginal federal rate × bonus depreciation rate
  
  Post-OBBBA (property placed in service after Jan 19, 2025): 100% bonus
  
  Example: $1M property acquisition, cost seg identifies $250K as 5/7/15-year:
    Year 1 bonus depreciation: $250K × 100% = $250K deduction
    At 37% marginal rate: $92,500 federal tax savings
  
  Compare to 39-year (commercial) or 27.5-year (residential) straight-line without cost seg
feasibility: high
implementation_complexity: medium (requires engineering-based study)
audit_risk: medium (documentation quality dependent)
requires_documentation:
  - Engineering-based cost segregation study report
  - Form 3115 if §481(a) catch-up on prior-year property
  - Photo documentation of building components
  - Construction cost breakdowns if new construction
  - Invoices and contracts supporting specific assets
requires_partner_signoff: true (sizing, study engagement)
requires_separate_engagement: true (cost seg study itself)
typical_separate_engagement_fee: $5000 - $25000 (engineering firm fee)
compatible_stacks:
  - Real-Estate-Owner (primary use case)
  - Car-Washes (excellent §1245 reclassification)
  - Construction (if contractor owns facility)
  - Doctors-Medical (practice real estate)
  - Real estate investor with REPS
incompatible_with:
  - Rented properties (tenant doesn't have basis)
  - Properties owned less than 1 year (timing constraint)
prerequisites:
  - Owns the property (fee simple or via pass-through entity)
  - Property placed in service (not under construction)
  - Has basis to reclassify
industries_best_fit:
  - Real Estate Owner (LTR/STR)
  - Car Washes (excellent §1245 content)
  - Construction (if owned facility)
  - Medical Practices (if owned building)
  - Hotels/hospitality
  - Warehouses/distribution
  - Retail stores (if owned)
industries_less_fit:
  - Properties in ADS (slower depreciation)
  - Owner-occupied residential (no depreciation)
state_specific_considerations: |
  Most states conform to federal MACRS and bonus depreciation
  Some states decouple from bonus (CA, AZ, etc.) — state depreciation differs from federal
  Cost seg at federal level still valuable even in non-conforming states
path_b_compensation_tier: 0 (Priceless may refer to cost seg specialty firms; no compensation tier)
---

# Cost Segregation Study

For clients who own buildings with meaningful basis, cost segregation is often the single highest-ROI tax strategy available. Post-OBBBA's 100% permanent bonus depreciation, first-year deductions can be extraordinary.

## The basic mechanic

Standard commercial building: 39-year straight-line. Residential rental: 27.5-year. Very slow depreciation.

Cost segregation is an engineering-based analysis that identifies building components that qualify for shorter depreciation lives:

- **5-year property**: carpet, appliances, removable fixtures, specialty equipment, certain cabinetry
- **7-year property**: certain business furniture and equipment
- **15-year property (land improvements)**: parking lots, landscaping, exterior lighting, fencing, retaining walls, curbing, driveways

Typical reclassification percentages:

| Property type | Typical 5/7-year % | Typical 15-year % | Remaining (§1250) |
|---------------|---------------------|---------------------|---------------------|
| Residential rental | 15-25% | 8-15% | 60-75% |
| Apartment complex | 15-30% | 10-20% | 50-75% |
| Office building | 15-25% | 10-20% | 55-75% |
| Warehouse | 10-20% | 10-20% | 60-80% |
| Retail store | 15-30% | 10-20% | 50-75% |
| Restaurant | 25-40% | 10-20% | 40-65% |
| Hotel | 20-35% | 10-20% | 45-70% |
| Car wash | 40-55% | 10-20% | 25-50% |
| Medical office | 20-35% | 10-15% | 50-70% |

## Post-OBBBA 100% bonus depreciation impact

Pre-OBBBA: bonus depreciation phasing down (80% → 60% → 40% → 20% → 0%).

Post-OBBBA (placed in service after January 19, 2025): **100% bonus depreciation PERMANENT**.

Reclassified 5/7/15-year property deductible in full in year 1. This supercharges cost segregation.

**Transitional rule**: Property placed in service Jan 1, 2025 - Jan 19, 2025 uses pre-OBBBA rate (40% in 2025 default, or 60% elected). After Jan 19: 100%.

## When cost segregation makes sense

### Clear green light

- Property basis > $500K (often > $1M for full engineering study)
- Taxpayer has income to absorb deduction (or can carry forward)
- Property placed in service within last 15 years (lookback works but newer is cleaner)
- Property structure includes significant §1245/§1250 improvement components

### Maybe (evaluate carefully)

- Property basis $250K-$500K (smaller studies available; simpler methodology)
- Taxpayer in low-income year or unable to use loss
- Passive activity without offsetting passive income (loss suspended)

### Usually no

- Property basis < $250K (study cost eats benefit)
- Fully depreciated property (no basis to reclassify)
- Property held in ADS by election (can't apply bonus)

## Implementation

### Step 1: Feasibility analysis

Priceless reviews:
- Property type and basis
- Client's tax profile (income, other deductions, passive/non-passive posture)
- Prior depreciation history
- Expected ROI of study

If green, recommend study.

### Step 2: Study engagement

Referral to specialty engineering firm (CSSI, KBKG, Source Advisors, Cost Seg Authority, O'Connor, others).

Fee structure:
- Small study (<$500K basis): $3K-$7K
- Standard study ($500K-$2M basis): $5K-$12K
- Large study ($2M+): $10K-$25K+
- Complex/multi-property: scope-dependent

### Step 3: Engineering site visit

Engineer physically inspects property, photographs components, reviews construction documents (if new) or property details (if acquired).

### Step 4: Study report

Detailed report identifying each component, life class, basis allocation, supporting documentation, case law citations.

### Step 5: Tax return implementation

**If newly placed in service**: Use study results on current year return. No Form 3115 needed.

**If lookback (prior-year property)**: §481(a) adjustment via Form 3115 (automatic method change, typically DCN 184). Catch-up all prior years' underdepreciation in current year.

### Step 6: Ongoing treatment

Reclassified assets depreciated at their respective lives going forward (post-bonus). Straight-line §1245 property uses MACRS; land improvements use 15-year straight-line GDS (or 20-year ADS).

## Common errors and missed opportunities

- **Study not done** on properties that would benefit (most common)
- **Done but not updated** for improvements, additions
- **Classification too conservative** (engineer not aggressive enough on §1245)
- **§481(a) catch-up not claimed** on prior-year property (leaving years of depreciation on table)
- **Bonus depreciation not applied** to reclassified components (should apply if placed in service during bonus period)
- **State depreciation not tracked** separately in non-conforming states
- **Dispositions not tracked** (§168(i)(7) allows partial dispositions to accelerate remaining basis)

## §481(a) catch-up mechanics

For prior-year property that didn't have cost seg originally:

1. Engineering study done in current year identifies reclassifications that should have occurred
2. §481(a) adjustment = sum of prior-year underdepreciation + current-year adjustment
3. Report via Form 3115, automatic method change (typically DCN 184 for MACRS reclassification)
4. Current-year deduction captures all catch-up

**Example**: $1M property acquired 2020, always depreciated at 39-year. 2026 cost seg study identifies $300K of 5/7/15-year reclassifiable.
- 2020-2025: underdepreciated by ~$200K (estimated)
- 2026: catch-up + normal depreciation = massive deduction
- Plus: §481(a) can be accelerated by 100% bonus on the reclassified balance still remaining

## Interaction with other strategies

### With passive activity

Cost seg deduction creates passive loss for passive real estate. Trapped under §469 unless:
- Taxpayer is REPS
- STR 7-day exception met
- Passive income available to absorb
- Disposition of activity

**Planning**: If client not REPS, cost seg creates suspended loss. Can be valuable at disposition (releases all carried losses against gain).

### With §1031 exchange

Planning around §1031:
- New replacement property: cost seg the new one
- Relinquished property: basis transfers; cost seg of original property remains in play via §481(a) if deferred adjustments
- Careful: §1031 + cost seg + bonus interaction can be complex, partner involvement

### With §179

§179 and bonus generally work together but stack in specific order. For most clients post-OBBBA 100% bonus, §179 matters less for real property. §179 preserved for certain improvements (roofs, HVAC, fire protection, security on non-residential).

## Deliverable points

In the client memo:
- Quantified year-1 deduction
- Quantified multi-year deduction pattern
- Fee for study vs. expected tax savings (ROI)
- Sequencing with other strategies
- State treatment if different from federal

## Audit posture

Cost seg studies face IRS scrutiny. Mitigations:
- Use reputable engineering firm
- Ensure study follows IRS Audit Techniques Guide
- Maintain study report and supporting documentation indefinitely
- Photo documentation critical

## Update status

File created 2026-04 reflecting OBBBA 100% permanent bonus depreciation for property placed in service after January 19, 2025. Pre-OBBBA transition rules noted.
