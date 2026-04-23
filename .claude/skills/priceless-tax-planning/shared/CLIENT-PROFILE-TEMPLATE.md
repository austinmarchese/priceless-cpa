# Client Profile Template

The skill needs structured information about the client to do its job well. Without it, output quality depends on whatever the analyst happens to type into the prompt. With it, output quality is consistent across analysts and engagements.

This template is filled out **once per client per year** and updated as material facts change. It lives in Karbon under the engagement and is uploaded into the Claude project alongside the engagement's working documents.

For new clients, the template gets populated during the onboarding engagement. For existing clients migrated to the quarterly cadence, an analyst populates it from the prior-year tax return and existing Karbon records before the first quarterly run.

---

# CLIENT PROFILE — [Karbon Engagement ID]

**Tax Year**: [YYYY]
**Profile Last Updated**: [YYYY-MM-DD]
**Updated By**: [analyst name]
**Engagement Tier**: [Foundational | Comprehensive | Full Wealth]
**Client Status**: [Active | Onboarding | Pilot]

---

## 1. Identity and filing

- **Filing Status**: [Single | MFJ | MFS | HOH | QW]
- **Taxpayer Age**: [number] (DOB redacted per protocol)
- **Spouse Age**: [number, if applicable]
- **Dependents**: [number, ages: e.g., "2 dependents, ages 8 and 11"]
- **State of Domicile**: [state]
- **Date of Domicile Change** (if current year): [date or N/A]
- **Secondary State Ties**: [list any states with material economic presence or part-year residency]
- **Citizenship/Residency Status**: [US Citizen | US Resident | Non-Resident Alien | Other]

## 2. Entity structure

For each entity the client owns or has material interest in:

### Entity 1
- **Entity Name** (placeholder, no real name): [e.g., "Operating Co"]
- **Entity Type**: [S Corp | C Corp | Partnership | LLC-Disregarded | LLC-Partnership | Sole Prop | Trust | Other]
- **Ownership %**: [%]
- **State of Formation**: [state]
- **States with Nexus**: [list]
- **Tax Year**: [Calendar | Fiscal — specify]
- **Industry**: [from approved list — see methodology]
- **Annual Revenue Range**: [<$500K | $500K-$1M | $1M-$5M | $5M-$25M | >$25M]
- **Annual Net Income Range**: [actual or rounded]
- **Number of W-2 Employees**: [number]
- **Owner Active in Business**: [Yes | No | Partial]

[Repeat for additional entities — multi-entity rollup logic in tax-projection sub-skill handles the integration]

## 3. Income mix (prior year actuals)

- **W-2 wages from all sources**: $X
  - Of which: from owned S Corps: $X
  - Of which: from third-party employers: $X
- **K-1 ordinary income**: $X
- **K-1 separately-stated items** (interest, dividends, §1231, §179): $X each
- **Schedule C net income**: $X
- **Schedule E rental net income**: $X
- **Interest and dividends (taxable)**: $X
- **Interest and dividends (tax-exempt)**: $X
- **Capital gains realized**: $X (long-term: $X / short-term: $X)
- **Other income** (royalties, gambling, social security, etc.): $X
- **Total AGI prior year**: $X
- **Total Taxable Income prior year**: $X
- **Total Federal Tax prior year**: $X
- **Total State Tax prior year**: $X (specify state)

## 4. Carryforwards from prior years

- **Net Operating Loss**: $X (year originated, expiration if applicable)
- **Capital Loss Carryforward**: $X (long-term / short-term split)
- **Passive Activity Loss**: $X (by activity if material)
- **§179 Carryforward**: $X
- **Charitable Contribution Carryforward**: $X (year originated, 5-year limit)
- **Foreign Tax Credit Carryover**: $X
- **General Business Credit Carryover**: $X (10-year limit by year)
- **AMT Credit Carryover**: $X
- **Other Carryforwards**: [list]

## 5. Basis tracking

For each pass-through entity:

### Entity 1 — Basis at end of prior year
- **Stock basis** (S Corp) or **outside basis** (Partnership): $X
- **Loan basis** (S Corp) or **basis in liabilities** (Partnership): $X
- **At-risk basis**: $X
- **Distributions in excess of basis prior years (if any)**: $X (tax treatment)

## 6. Existing strategies in place

Strategies the client has already implemented and that are recurring or active:

- [ ] S Corp election (year elected: ____)
- [ ] PTET election (state and year): ____
- [ ] Accountable plan formalized (year: ____)
- [ ] Augusta Rule taken (years and amounts): ____
- [ ] Home office deduction taken (years and methodology — actual vs simplified): ____
- [ ] Solo 401(k) plan (year established: ____, current balance: ~$X)
- [ ] SEP IRA (year established: ____)
- [ ] Defined Benefit / Cash Balance Plan (year established: ____, annual contribution: $X)
- [ ] HSA (years funded, current balance: ~$X)
- [ ] Donor-Advised Fund (sponsor, current balance: ~$X)
- [ ] Cost segregation studies on properties (which properties, year done)
- [ ] §1031 exchanges (history)
- [ ] QBI aggregation election in place (which entities)
- [ ] Other: [list]

## 7. Existing financial products in place (Path B context)

- **Term Life Insurance**: Coverage $X, expires ____, on whom
- **Permanent Life Insurance** (Whole/UL/IUL): Death benefit $X, cash value $X, premium $X/year
- **Disability Insurance**: Monthly benefit $X, elimination period ____, own-occ?
- **Long-Term Care**: Coverage type, daily benefit
- **Umbrella Liability**: Coverage $X
- **Key Person Insurance**: Yes/No
- **Buy-Sell Funding in place**: Yes/No
- **Captive Insurance Company**: Yes/No (if yes, year established, premium volume)
- **Investment Advisory Relationship**: Firm name, AUM, fee structure
- **Brokerage Accounts** (general categories, not specifics): types and approximate values

## 8. Client sophistication and preferences

- **Investment Sophistication**: [Beginner | Moderate | Sophisticated | Accredited | Qualified Purchaser]
- **Investment Horizon**: [<5yr | 5-15yr | 15+yr]
- **Liquidity Needs**: [High | Medium | Low — meaning client needs ready access to capital]
- **Risk Tolerance**: [Conservative | Moderate | Aggressive]
- **Tolerance for IRS Examination**: [Low | Moderate | High]
- **Existing Advisor Relationships**: [Estate attorney? Investment advisor? Insurance broker? Financial planner?]
- **Client's Decision-Making Style**: [Wants detailed analysis | Wants the bottom line | Wants both]

## 9. Compliance gates

- **Attest Client of Priceless CPA**: [Yes | No] — if Yes, no Tier 2/3 product recommendations per `REFERRAL-DISCLOSURE-FRAMEWORK.md`
- **Active IRS Examination**: [Yes | No]
- **Active State Tax Examination**: [Yes | No]
- **Engagement Letter with AI Disclosure**: [Signed | Pending | Not yet]
- **§7216 Consent for Affiliate Information Sharing**: [Signed | Not Applicable | Pending]
- **Priceless Licensure Check**: Are we licensed/registered to practice in this client's state? [Yes | No | Need to verify]

## 10. Known events for current year

Events the client has communicated or that are anticipated:

- **Income events**: [bonus expected, sale of business planned, IPO of equity holdings, etc.]
- **Investment events**: [planned property purchase, planned property sale, planned major investment]
- **Personal events**: [marriage, divorce, birth/adoption, death of family member, retirement]
- **Business events**: [new entity formation, M&A, major hiring/firing, new line of business]
- **Geographic events**: [planned move, partial-year residence, international travel affecting Bona Fide Residency]

## 11. Open items from prior engagement

- **Strategies recommended last year that didn't execute** (and why):
- **Documentation gaps from prior year**:
- **Items deferred from last year's planning**:
- **Carryforward items requiring action this year**:

## 12. Historical context (for new-to-Priceless clients)

For clients who came from another CPA:

- **Prior CPA's approach** (general): [aggressive | moderate | conservative | unknown]
- **Known issues with prior preparation** (errors, missed strategies, weak documentation):
- **Why the client switched**:
- **Items requiring immediate attention** in first engagement:

---

## How this gets used

When the analyst starts a Claude session for a quarterly engagement, they upload this completed profile alongside the redacted documents. Claude reads the profile first and uses it to:

- Apply the right strategy filters (entity type, industry, state)
- Apply the right tier of memo template
- Skip Tier 2/3 product recommendations if attest client
- Run Operator 8 only if AGI > $750K threshold
- Avoid recommending strategies the client already has in place
- Flag carryforwards and basis issues that need attention
- Customize the memo's recommendations to the client's actual sophistication level

Profile completeness directly drives output quality. Missing fields = missing context = lower-quality memo.

## Profile maintenance

- **Annually**: full review and refresh during Q1 engagement
- **Per quarterly engagement**: update Section 10 (current-year events) and Section 11 (open items from prior)
- **Material change events**: update immediately when material facts change (new entity, divorce, etc.)
- **End of year**: archive the year-end version, start next year's profile from it
