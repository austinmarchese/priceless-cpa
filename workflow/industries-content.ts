/**
 * INDUSTRIES CONTENT FILE
 *
 * Edit the text inside quotes to update copy on industry pages.
 * DO NOT change the structure, only the text values.
 *
 * Each industry follows this structure:
 * - topBarText: Urgency/attention banner at the very top
 * - categoryLabel: Small label above headline (e.g., "Crypto Accounting & Advising")
 * - headline: Main headline (first part)
 * - headlineHighlight: Second part of headline (in gold)
 * - description: Supporting paragraph under headline
 * - heroCta: Button text
 * - benefits: Array of what you handle/offer
 * - whoIsFor: Array of ideal client types
 * - processSteps: 4-step "How We Work" process
 * - stats: 4 key statistics
 * - finalHeadline: Bottom CTA headline
 * - finalDescription: Bottom CTA description
 * - finalCta: Bottom button text
 */

export const industriesLanding = {
  headline: 'Specialized Accounting for Your Industry',
  subheadline: 'We understand the unique financial challenges of your business. Get expert accounting tailored to your specific industry needs.',
  ctaText: 'Find Your Industry',
}

export const lawyersContent = {
  topBarText: 'Trust account compliance made simple',
  topBarHighlight: 'Book your consultation',

  categoryLabel: 'Legal Practice Accounting',
  headline: 'Financial Clarity for',
  headlineHighlight: 'Law Firms & Attorneys',
  description: 'Navigate IOLTA compliance, manage trust accounting, and maximize tax deductions specific to legal practices. We understand the unique financial demands of running a law firm.',
  heroCta: 'Get Expert Legal Accounting Help',

  benefits: [
    'Expert IOLTA & trust account reconciliation',
    'Bar association compliance monitoring',
    'Partner compensation & distribution planning',
    'Legal-specific tax deduction optimization',
    'Case cost tracking & profitability analysis',
  ],

  whoIsFor: [
    'Solo practitioners building their practice',
    'Law firm partners managing distributions',
    'Attorneys with trust account obligations',
    'Legal practices scaling to multiple attorneys',
  ],

  processSteps: [
    { num: '01', title: 'Compliance Audit', desc: 'Review trust accounts and IOLTA requirements' },
    { num: '02', title: 'Systems Setup', desc: 'Implement compliant bookkeeping processes' },
    { num: '03', title: 'Ongoing Management', desc: 'Monthly reconciliation and reporting' },
    { num: '04', title: 'Tax Optimization', desc: 'Maximize legal-specific deductions' },
  ],

  stats: [
    { value: '100%', label: 'IOLTA Compliant' },
    { value: '50+', label: 'Legal Clients' },
    { value: '$50K+', label: 'Avg Tax Savings' },
    { value: '24hr', label: 'Response Time' },
  ],

  finalHeadline: 'Don\'t Let Compliance Keep You Up at Night',
  finalDescription: 'Book a free consultation and get expert guidance on your firm\'s finances.',
  finalCta: 'Book Your Free Consultation',
}

export const aiBusinessesContent = {
  topBarText: 'R&D tax credits could save you thousands',
  topBarHighlight: 'Find out how much',

  categoryLabel: 'Tech & AI Startup Accounting',
  headline: 'Financial Infrastructure for',
  headlineHighlight: 'AI & Tech Startups',
  description: 'R&D tax credits, SaaS revenue recognition, equity compensation — we understand the complexities of building the future and can help you stay compliant while maximizing savings.',
  heroCta: 'Get Expert Startup Accounting',

  benefits: [
    'R&D tax credit identification & documentation',
    'ASC 606 compliant revenue recognition',
    'Stock option & RSU accounting',
    'Investor-ready financial packages',
    'Multi-jurisdiction tax optimization',
  ],

  whoIsFor: [
    'AI/ML startups from seed to Series C',
    'SaaS companies with recurring revenue',
    'Tech founders with equity compensation',
    'Startups preparing for fundraising',
  ],

  processSteps: [
    { num: '01', title: 'R&D Analysis', desc: 'Identify qualifying research activities' },
    { num: '02', title: 'Financial Setup', desc: 'Implement startup-friendly accounting' },
    { num: '03', title: 'Ongoing Support', desc: 'Monthly bookkeeping & burn analysis' },
    { num: '04', title: 'Tax Strategy', desc: 'Maximize credits and minimize liability' },
  ],

  stats: [
    { value: '$2M+', label: 'R&D Credits Claimed' },
    { value: '40+', label: 'Tech Clients' },
    { value: 'Series A-C', label: 'Experience' },
    { value: '48hr', label: 'Financial Packages' },
  ],

  finalHeadline: 'Scale Your AI Business With Confidence',
  finalDescription: 'Get the financial foundation you need to focus on building, not bookkeeping.',
  finalCta: 'Book Your Free Strategy Call',
}

export const ecommerceContent = {
  topBarText: 'Multi-state sales tax eating into margins?',
  topBarHighlight: 'We can help',

  categoryLabel: 'E-Commerce Accounting',
  headline: 'E-Commerce Accounting That',
  headlineHighlight: 'Scales With You',
  description: 'From Amazon FBA to Shopify, we handle inventory accounting, sales tax nexus, and the complexity of selling everywhere. Focus on growth while we handle the numbers.',
  heroCta: 'Get E-Commerce Accounting Help',

  benefits: [
    'Multi-state sales tax compliance & filing',
    'Accurate inventory & COGS tracking',
    'Marketplace fee reconciliation',
    'Channel & SKU profitability analysis',
    'Returns & refund accounting',
  ],

  whoIsFor: [
    'Amazon FBA sellers scaling operations',
    'Shopify & DTC brands growing fast',
    'Multi-channel sellers managing complexity',
    'E-commerce businesses with inventory',
  ],

  processSteps: [
    { num: '01', title: 'Platform Sync', desc: 'Connect all your sales channels' },
    { num: '02', title: 'Inventory Setup', desc: 'Accurate COGS & inventory tracking' },
    { num: '03', title: 'Tax Compliance', desc: 'Multi-state nexus & filing handled' },
    { num: '04', title: 'Profit Analysis', desc: 'Know your margins by SKU & channel' },
  ],

  stats: [
    { value: '7-Figure', label: 'Brands Served' },
    { value: '50+', label: 'States Covered' },
    { value: '100%', label: 'Tax Compliant' },
    { value: 'Real-Time', label: 'Inventory Sync' },
  ],

  finalHeadline: 'Scale Without the Accounting Headaches',
  finalDescription: 'Let us handle the numbers while you focus on growing your brand.',
  finalCta: 'Book Your Free Consultation',
}

export const realEstateContent = {
  topBarText: 'Missing out on depreciation benefits?',
  topBarHighlight: 'Find out what you\'re leaving on the table',

  categoryLabel: 'Real Estate Accounting',
  headline: 'Accounting for',
  headlineHighlight: 'Real Estate Investors & Agents',
  description: 'From 1031 exchanges to cost segregation studies, we help you keep more of what you earn from every property. Expert guidance for investors and agents alike.',
  heroCta: 'Get Real Estate Accounting Help',

  benefits: [
    '1031 exchange planning & QI coordination',
    'Cost segregation study analysis',
    'Property-by-property P&L tracking',
    'Multi-entity structure optimization',
    'Agent-specific tax deductions',
  ],

  whoIsFor: [
    'Real estate investors with multiple properties',
    'Agents & brokers maximizing deductions',
    'Property managers tracking rentals',
    'Investors planning 1031 exchanges',
  ],

  processSteps: [
    { num: '01', title: 'Portfolio Review', desc: 'Analyze all properties & entities' },
    { num: '02', title: 'Tax Analysis', desc: 'Identify savings opportunities' },
    { num: '03', title: 'Structure Setup', desc: 'Optimize entity & ownership structure' },
    { num: '04', title: 'Ongoing Strategy', desc: 'Proactive tax planning & compliance' },
  ],

  stats: [
    { value: '$10M+', label: 'Properties Managed' },
    { value: '100+', label: 'RE Clients' },
    { value: '$100K+', label: 'Tax Savings' },
    { value: '1031', label: 'Experts' },
  ],

  finalHeadline: 'Maximize Your Real Estate Returns',
  finalDescription: 'Book a free consultation and discover how much you could save.',
  finalCta: 'Book Your Free Strategy Session',
}

export const creatorsContent = {
  topBarText: 'Self-employment taxes taking 30%+ of your income?',
  topBarHighlight: 'There\'s a better way',

  categoryLabel: 'Creator & Influencer Accounting',
  headline: 'Financial Management for',
  headlineHighlight: 'Content Creators & Influencers',
  description: 'Multiple revenue streams, brand deals, and self-employment taxes — we make sense of creator finances so you can focus on creating content that matters.',
  heroCta: 'Get Creator Accounting Help',

  benefits: [
    'Multi-platform revenue consolidation',
    'S-Corp election for tax savings',
    'Brand deal & sponsorship tracking',
    'Equipment, travel & home office deductions',
    'Quarterly tax planning & payment schedules',
  ],

  whoIsFor: [
    'YouTubers & video creators',
    'Podcasters & audio creators',
    'Social media influencers',
    'Course creators & digital product sellers',
  ],

  processSteps: [
    { num: '01', title: 'Income Mapping', desc: 'Connect all revenue platforms' },
    { num: '02', title: 'Entity Strategy', desc: 'S-Corp election if beneficial' },
    { num: '03', title: 'Deduction Audit', desc: 'Maximize creator-specific write-offs' },
    { num: '04', title: 'Tax Planning', desc: 'Quarterly estimates & year-end strategy' },
  ],

  stats: [
    { value: '100+', label: 'Creators Served' },
    { value: '$500K+', label: 'Deductions Found' },
    { value: 'All', label: 'Platforms' },
    { value: '30%+', label: 'Tax Savings' },
  ],

  finalHeadline: 'Take Control of Your Creator Finances',
  finalDescription: 'Book a free call and see how much you could be saving.',
  finalCta: 'Book Your Free Consultation',
}
