# Common Classification Errors

Reference catalog of classification errors frequently observed in client QBO data. Organized by error type. Use during Phase 1 GL scan.

## Owner personal expenses in business

The single most common error pattern. Owners run personal expenses through the business account because it's easier to track one card. Problem: creates nondeductible business expense that looks deductible.

### Office Supplies — most abused category

**Typical contents when correct**: Pens, paper, printer ink, file folders, small office items, software subscriptions used for business.

**Common wrong entries**:
- Amazon purchases for household items (toilet paper, cleaning supplies, groceries)
- Target purchases (clothing, home goods)
- Personal electronics (headphones for personal use, gaming peripherals)
- Kid-related items (school supplies, art supplies)
- Gift purchases (wedding gifts, holiday gifts not for business)
- Pet supplies
- Home improvement items (furniture, decor)

**How to spot**: Scan vendor names and amounts. Personal items usually small amounts at retail vendors like Amazon, Target, Walmart, Home Depot. Business office supplies tend to be Staples, Office Depot, or direct from software/subscription services.

### Meals & Entertainment

**Correct**: Business meals with clients, staff meals at meetings, meals during business travel (50% deductible).

**Common wrong entries**:
- Family dinners at restaurants
- Takeout during weekends
- Grocery store purchases
- Bar tabs without business context
- Personal entertainment (movies, concerts, sports events unrelated to business)
- Golf fees (personal golf is not a business meal)

**Documentation test**: Each meal should have:
- Business purpose documented
- Attendees identified
- Business discussion noted

If documentation missing, reclassify to owner draw.

### Travel

**Correct**: Flights, hotels, rental cars, meals, tips for business travel. Conferences, client meetings, required in-person activities.

**Common wrong entries**:
- Family vacation flights
- Personal trip hotels
- Anniversary trips
- Trips where business component is minor (weekend in Vegas with one 30-minute client meeting)

**Documentation test**: Primary purpose of trip must be business. Mixed-purpose trips allocate cost based on business vs. personal days.

### Vehicle

**Correct**: Business vehicle expenses — gas, maintenance, insurance, lease payments — for a vehicle used for business with business use % documented.

**Common wrong entries**:
- Personal vehicle expenses 100% deducted without business use allocation
- Family vehicle expenses
- Spouse's vehicle expenses (unless spouse is actually employed)
- Kid's vehicle expenses

**Documentation test**: Mileage log required (§274(d)(4)). If no log, deduction risk material.

### Subscriptions & Dues

**Correct**: Business software, professional memberships, industry publications, business-related apps.

**Common wrong entries**:
- Streaming services (Netflix, Spotify, Disney+, Hulu)
- Personal apps (dating apps, personal fitness)
- Magazines/newspapers personal in nature
- Gym memberships (personal unless clearly business — rare)

### Utilities

**Correct for home office situation**: Allocated portion of utilities at home based on home office sq ft / total sq ft.

**Common wrong entries**:
- Full utilities at home address without allocation
- Utilities at a second home / vacation home
- Cell phone 100% when some personal use
- Home internet 100% when some personal use

### Insurance

**Correct**: Business liability, commercial property, key person, E&O, cyber, workers comp.

**Common wrong entries**:
- Homeowner's insurance
- Personal auto insurance (unless on business vehicle)
- Life insurance on owner (generally not deductible)
- Umbrella personal liability policy

### Education

**Correct**: Continuing education for owner's business role (CPE for accountants, continuing legal ed for lawyers, industry conferences, etc.).

**Common wrong entries**:
- Kids' school tuition
- Spouse's college tuition
- Personal hobby courses
- General education unrelated to current business role

### Uncategorized Expense — the catch-all that hides both answers

**Don't default to "routine cleanup, nothing needed from the client"** just because a transaction landed in Uncategorized Expense. That bucket is where QBO auto-sorts anything the client's bank feed couldn't map to a rule, and it mixes two very different situations that need opposite treatment:

- **Legitimate business expense missing only a category** (e.g., a subcontractor paid via Zelle, a job-site cash payment) — genuinely routine; just needs the right expense account.
- **Personal draw that never got coded as a distribution** — not routine at all. If it's personal, it's basis-tested (see the S-corp basis/distribution discussion elsewhere in the engagement) and needs to flow into the same bucket as any other personal spending run through the business.

**How to spot the ambiguous ones**: bank/ATM withdrawals, Zelle/Venmo/CashApp payments to *individuals* (not vendor businesses), and card charges split to an owner's personal account name in the GL. Any of these could be either a subcontractor payment or a personal draw — the transaction description alone doesn't tell you which, and guessing wrong in either direction is a real error (miscoding a personal draw as a deductible expense understates income; miscoding a legitimate subcontractor payment as a distribution overstates the owner's basis-tested draws for no reason).

**Fix**: ask the client which it is — don't silently pick one. Name the specific transactions (who was paid, how much, by what method) in the memo's open-questions section rather than burying the ambiguity inside a "routine, nothing needed from you" line. See the Client Intake Gate confirm-or-ask principle in `SKILL.md` Step 3.5 — this is the same rule applied to bookkeeping QA, not just intake.

## Misclassifications within business expenses

Not owner personal — but wrong category within business expenses.

### Capital expenditures coded as expenses

Depreciable/capitalizable items that should be fixed assets:
- Computer equipment over $2,500 (de minimis threshold per §1.263(a)-1(f))
- Furniture
- Leasehold improvements
- Major equipment
- Software licenses that are actual assets (vs. subscription services)

### Repairs vs. Improvements

§263(a) regulations distinguish:
- **Repair** (deductible): restore property to ordinary operating condition
- **Improvement** (capitalize): betterment, restoration, adaptation

Common errors:
- New HVAC coded as repair (should capitalize and depreciate)
- New roof coded as repair (should capitalize)
- Major renovation coded as repair
- Building component replacement (should allocate to unit of property per §1.263(a)-3)

### Prepaid expenses expensed currently

Annual insurance paid in January should be expensed ratably over year. Full deduction in January = wrong (cash basis exception for <12 months applies, but many cases warrant accrual).

### Draw vs. Distribution vs. Compensation

For S Corp:
- **Compensation**: W-2 wages to owner for services rendered (box 1)
- **Distribution**: Return of capital or distribution of profits (not W-2; reduces AAA)
- **Draw**: Informal term; should be either compensation (W-2) or distribution (per above)

Common error: Owner payments labeled "draw" in QBO, some should be comp and some should be distribution. Needs proper categorization.

For partnership:
- **Guaranteed payment**: Payment for services regardless of partnership income (deductible to partnership, ordinary income to partner)
- **Distribution of profits**: Allocated share of income (passes through via K-1)

## Missing expected items

Sometimes the error is what's NOT there.

### Missing home office (S Corp owner working from home)

If client works from home, expect:
- Accountable plan reimbursement for home office portion (utilities, insurance, etc.)
- OR rental from owner to S Corp (if Augusta-style)

If neither is in the books, strategy isn't being claimed.

### Missing Augusta Rule

If client has S Corp and owns residence, Augusta Rule may be available. Look for:
- Monthly rental income to owner (personal, excluded)
- Monthly rental expense to S Corp
- Board meeting documentation

If absent but applicable, flag for current-year implementation.

### Missing professional fees

Priceless charges the client for quarterly planning. If there's no entry for Priceless fees, either:
- Client is paying personally (should be reimbursed by entity)
- Fees not yet booked
- Wrong entity paid

### Missing depreciation

Compare fixed asset schedule to depreciation expense. If fixed assets exist but no depreciation booked, catch-up needed.

### Missing §162(l) health insurance flow

For >2% S Corp shareholder with health insurance:
- Expect to see insurance premium paid by S Corp
- Expect to see it flowing through W-2 box 1
- Expect to see §162(l) deduction on personal return

If any step missing, procedural error.

## Revenue recognition errors

### Cash vs. accrual confusion

For accrual-basis taxpayers:
- Revenue recognized when earned (invoice issued)
- Expenses recognized when incurred

For cash-basis:
- Revenue recognized when received
- Expenses when paid

Mixing these creates reconciliation chaos. Check method consistency.

### Sales tax collected vs. remitted

Sales tax collected from customers is a liability (pass-through). Common errors:
- Sales tax collected treated as revenue
- Sales tax remitted treated as expense
- Neither — balance growing indefinitely (indicates not remitting)

### Deferred revenue

Customer payments for services not yet rendered should be deferred revenue (liability), not revenue.

Common error: Annual software subscriptions collected upfront recognized entirely in month collected. Should defer monthly.

### Refunds and chargebacks

Customer refunds reduce revenue. Chargebacks (credit card disputes lost) reduce revenue. Common error: Refunds expensed as "customer service" rather than revenue reduction.

## Payroll classification errors

### Contractor vs. employee

1099 contractors vs. W-2 employees — major compliance issue. Common error: Treating workers as 1099 who should be W-2 (reclassification risk, §530 safe harbor analysis, state-level strict tests like CA AB5).

### Owner classification

See Draw vs. Distribution vs. Compensation above.

### Family member pay

- Spouse: should generally be W-2 with real work
- Children: can be W-2 (FICA exemption for <18 in sole prop) with real work
- Common error: "Contractor" payments to family without proper documentation

### Fringe benefits

- Health insurance: proper §162(l) treatment for >2% S Corp shareholders
- HSA: proper W-2 treatment (box 1 not box 3/5 for >2% shareholders)
- De minimis fringe: properly excluded from wages
- Non-cash fringe: properly valued and taxed

## How to document findings

For each error identified:

```
FINDING [N]
Account: [QBO account]
Transaction(s): [specific transactions or pattern]
Amount(s): [$X]
Issue: [what's wrong]
Proposed Action: [reclassify to X account, or capitalize, or investigate further]
Priority: [Blocker / Material / Minor]
Handoff: [Bookkeeping team fix | Phase 2 adjustment | Flag for partner]
```

Findings go into Phase 1 Data Integrity Summary and flow through to Phase 2 as adjustments.

## Materiality thresholds (Priceless firm standard)

- **Blocker** (stop engagement): single error > $10K, or pattern of errors > 10% of operating expenses
- **Material** (fix before Phase 4): single error > $2K, or pattern > 3% of operating expenses
- **Minor** (note and go forward): individual errors under thresholds but worth cleaning up over time

Materiality scales with engagement size. For a $200K AGI client, $2K is material. For a $2M AGI client, $10K is material. Partner judgment on borderline cases.
