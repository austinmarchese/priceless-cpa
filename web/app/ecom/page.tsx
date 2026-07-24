'use client'

import Link from 'next/link'
import { useState } from 'react'
import BookingEmbed from '../../components/BookingEmbed'

/* Next IRS quarterly-estimate deadline (Apr 15, Jun 15, Sep 15, Jan 15). */
function nextEstimateDeadline() {
  const now = new Date()
  const y = now.getFullYear()
  const candidates = [
    { label: 'Q1 estimate', date: new Date(y, 3, 15) },
    { label: 'Q2 estimate', date: new Date(y, 5, 15) },
    { label: 'Q3 estimate', date: new Date(y, 8, 15) },
    { label: 'Q4 estimate', date: new Date(y + 1, 0, 15) },
  ]
  const next = candidates.find((c) => c.date.getTime() > now.getTime()) ?? candidates[0]
  const days = Math.max(0, Math.ceil((next.date.getTime() - now.getTime()) / 86_400_000))
  return { label: next.label, days }
}

/* ------------------------------------------------------------------ */
/* PLACEHOLDER DATA — swap these with real client info from Anthony    */
/* ------------------------------------------------------------------ */

// Real client brand logos for the trust marquee. Each file is normalized to a
// uniform 336x168 chip (see /public/ecom-logos/) with a brand-appropriate
// background so light-on-dark and dark-on-light logos all read cleanly.
const clientBrands = [
  { name: 'Neighborbrite', src: '/ecom-logos/neighborbrite.webp' },
  { name: 'Kovaria', src: '/ecom-logos/kovaria.webp' },
  { name: 'Whitetail Smokeless', src: '/ecom-logos/whitetail-smokeless.webp' },
  { name: 'NÔOR', src: '/ecom-logos/noor.webp' },
  { name: 'Brooklyn Film Camera', src: '/ecom-logos/brooklyn-film-camera.webp' },
  { name: 'Hemlock Park', src: '/ecom-logos/hemlock-park.webp' },
  { name: "Kim's DD", src: '/ecom-logos/kims-dd.webp' },
  { name: 'MILOS Joyería', src: '/ecom-logos/milos-joyeria.webp' },
  { name: 'ROAS Media', src: '/ecom-logos/roas-media.webp' },
  { name: 'YourGreenhouses', src: '/ecom-logos/your-greenhouses.webp' },
  { name: 'Hitched', src: '/ecom-logos/hitched.webp' },
  { name: 'Anime Gear Guru', src: '/ecom-logos/anime-gear-guru.webp' },
  { name: 'The Business Toolkit', src: '/ecom-logos/business-toolkit.webp' },
  { name: "VanMan's", src: '/ecom-logos/vanmans.webp' },
  { name: 'Featured eCom brand', src: '/ecom-logos/brand-red.webp' },
]

const combinedRevenue = '$238M+' // combined public gross revenue across eCom clients

const stats = [
  { value: '$238M+', label: 'Client revenue managed', sub: 'across eCom brands' },
  { value: '$5.3M+', label: 'Taxes saved', sub: 'found, documented, filed' },
  { value: '80+', label: 'eCom brands served', sub: 'Shopify to 8-figure DTC' },
]

// Real client testimonials (permission on file). Add more as they come in.
const testimonials = [
  {
    quote:
      "Before working with Anthony, it was difficult to find a CPA who was proactive and communicated effectively. Since working with Anthony, I've got a tax strategy in place, my return is filed, and I've referred five or six of my friends who are equally happy.",
    result: 'Saved $35K/yr through tax strategy + proactive financial management',
    name: 'Jeff Clayton',
    role: 'Founder, TSJA Holdings',
  },
]

// Real review profiles. Google is live; more platforms coming.
const ratingBadges = [
  { platform: 'Google', score: '4.9', count: '24 reviews' },
]

const whyUs = [
  {
    title: 'eCom is all we do',
    desc: 'Not a generalist who sees one online seller a year. Every client here sells on Shopify, Amazon, or TikTok Shop. Same channels, same tax traps, every day.',
  },
  {
    title: 'Flat fees, month-to-month',
    desc: 'No annual contracts, no lock-in. You know the number before we start and you can walk any month. We earn the relationship, we don’t trap it.',
  },
  {
    title: 'Direct access to your CPA',
    desc: 'A dedicated Slack channel and a real person who knows your books. Not a ticket queue, not a rotating pool of junior staff.',
  },
  {
    title: 'Replies within 24–48 hours',
    desc: 'Ask a question, get a real answer inside a day or two. No three-week email silence in the middle of tax season when you need a decision now.',
  },
  {
    title: 'Fee-back guarantee',
    desc: 'If the audit doesn’t find tax savings and recoverable profit worth at least the fee, we refund the difference. The risk is ours, not yours.',
  },
  {
    title: 'A monthly margin scoreboard',
    desc: 'Every month you get numbers you can actually trust: true margin by channel and SKU, cash position, and what changed. Not a shoebox at year-end.',
  },
]

const auditDeliverables = [
  {
    title: 'True Profit Reconstruction',
    desc: 'Your real revenue, COGS, and true margin after every fee, ad dollar, and refund.',
    tag: 'PROFIT',
  },
  {
    title: 'Sales Tax & State Nexus Exposure Map',
    desc: 'Every state you owe in, your back exposure, and the cleanest fix.',
    tag: 'RISK',
  },
  {
    title: 'Entity & S Corp Structure Review',
    desc: 'Whether an S Corp or cleaner entity setup keeps more money in your pocket.',
    tag: 'SAVINGS',
  },
  {
    title: '12–18 Month Tax Plan',
    desc: 'A written plan around your income: every move worth making, when, and what it saves.',
    tag: 'SAVINGS',
  },
  {
    title: 'Inventory & COGS Method Check',
    desc: 'Whether freight and duties are costed right, before a wrong method inflates your taxable income.',
    tag: 'PROFIT',
  },
  {
    title: 'Accounting System Blueprint',
    desc: 'The exact tool setup so your books stay accurate in real time.',
    tag: 'CLARITY',
  },
  {
    title: 'Implementation Roadmap',
    desc: 'Everything above, sequenced by quarter, with who does what.',
    tag: 'ROADMAP',
  },
]

const steps = [
  {
    n: '01',
    title: 'Book the audit call',
    desc: 'A 15-minute call. We look at your store, your stack, and your last return. You get a flat-fee quote on the spot.',
  },
  {
    n: '02',
    title: 'We dig in',
    desc: 'Books, returns, sales channels, inventory. Our team runs the full 7-point analysis while you keep running the business.',
  },
  {
    n: '03',
    title: 'Your Profit Report, delivered',
    desc: 'A walkthrough call plus the written report: exposure, savings, and a prioritized fix-it list with dollar amounts.',
  },
  {
    n: '04',
    title: 'We run it for you (optional)',
    desc: 'Keep the report and DIY it, or have us implement everything: bookkeeping, tax, S Corp, all the way to eCom CFO.',
  },
]

const ongoing = [
  {
    name: 'Tax Advisory & Accounting Management',
    who: 'Cash-basis accounting plus an annual advisory cycle that keeps taxes optimized',
    features: ['Cash-basis bookkeeping & compliance', 'Business + personal tax returns', 'Annual tax-saving advisory cycle', 'S Corp payroll & quarterly estimates'],
    featured: false,
  },
  {
    name: 'eCom Financial Operations',
    who: 'Everything in Tier 1, plus proactive advisory and the systems that run your finances',
    features: ['Everything in Tax Advisory & Accounting', 'Proactive, year-round advisory', 'KPI dashboards you can trust', 'Sales tax, inventory & per-SKU processes'],
    featured: true,
  },
  {
    name: 'eCom CFO',
    who: 'Strategic financial leadership on structure, capital, and how the business is built',
    features: ['Everything in Financial Operations', 'Strategic financial leadership', 'Cash flow & inventory planning', 'Entity & operating-structure design'],
    featured: false,
  },
]

const faqs = [
  {
    q: 'What exactly is the eCom Profit & Tax Audit?',
    a: 'A flat-fee engagement where we analyze your books, tax returns, sales channels, and inventory accounting, then hand you a written report covering sales tax exposure, state income tax, inventory method, true margins, unit economics, and a dollar-quantified tax plan. You keep the report whether or not you ever work with us again.',
  },
  {
    q: 'How does the guarantee work?',
    a: 'If we do not find tax savings worth at least our fee, we refund the difference. In practice we usually surface more than 5x the fee. "Found savings" counts whether or not you implement them: retirement contributions, QBI and other qualified calculations, and deductions you were not taking all count. We have never opened a set of eCom books with no money on the table.',
  },
  {
    q: 'How much does it cost?',
    a: 'Flat fee, typically $2,000 to $5,000 depending on the size and complexity of your business, quoted on the call. A $300K single-channel store is a very different project than a $5M multi-channel brand. Either way it is a fixed number you know before we start.',
  },
  {
    q: 'My CPA already does my taxes. Why do I need this?',
    a: 'Filing is not planning. Most generalist CPAs record what happened. They do not track nexus thresholds across states, rebuild landed COGS, or model S Corp comp against your actual margins. That gap is where eCom sellers quietly overpay every year.',
  },
  {
    q: 'What platforms and tools do you work with?',
    a: 'Shopify, Amazon, TikTok Shop, Walmart, Etsy, eBay, and the stack around them: QuickBooks, A2X, Settle, Parker, and the rest. If you sell on it or book with it, we speak it.',
  },
  {
    q: 'How long does the audit take?',
    a: 'Your first deliverable lands in about a week from the moment we get access, with the full report completed inside a month. You get the findings on a live walkthrough call, plus the written report.',
  },
  {
    q: 'What happens after the audit?',
    a: 'Your call. Some clients take the report and run. Most ask us to implement it, from tax + S Corp management up to full eCom CFO. There is zero obligation, and the audit is priced to stand on its own.',
  },
]

/* ------------------------------------------------------------------ */

export default function EcomPage() {
  const deadline = nextEstimateDeadline()

  // Free "Profit Leak Scorecard" estimator state
  const [revenue, setRevenue] = useState(2_000_000)
  const [channels, setChannels] = useState(2)
  const [multiState, setMultiState] = useState(true)
  const [scored, setScored] = useState(false)

  // Rough leak estimate (illustrative, not a quote). Anthony: on a 7-figure store
  // we typically find 2–4% of revenue in overpaid tax + financial slack. Extra
  // channels add waste (nudges the high end); multi-state adds separate sales-tax
  // EXPOSURE, surfaced as a note rather than baked into the % overpayment.
  const lowPct = 0.02 + (channels - 1) * 0.0025
  const highPct = 0.04 + (channels - 1) * 0.005
  const fmt = (n: number) => {
    if (n >= 1000) return '$' + Math.round(n / 1000).toLocaleString() + 'K'
    return '$' + (Math.round(n / 100) * 100).toLocaleString()
  }
  const lowEst = fmt(revenue * lowPct)
  const highEst = fmt(revenue * highPct)

  return (
    <main className="ec min-h-screen">
      <div className="ec-grain" aria-hidden />

      {/* ── Announcement bar ─────────────────────────────────────── */}
      <div className="relative z-40 bg-[var(--ink)] text-white text-center text-[13px] sm:text-sm px-4 py-2.5">
        <span className="font-bold text-[#7ee2ab]">{deadline.label} due in {deadline.days} days.</span>
        <span className="opacity-90"> 7-figure stores either overpay by tens of thousands or leave a surprise bill for April 15. </span>
        <a href="#scorecard" className="font-bold underline underline-offset-4 decoration-[#7ee2ab] hover:text-[#7ee2ab] transition">
          Find your number →
        </a>
      </div>

      {/* ── Nav ──────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 px-4 pt-4">
        <nav className="max-w-6xl mx-auto bg-white/85 backdrop-blur-md rounded-full border border-[var(--line)] shadow-[0_2px_20px_rgba(11,15,12,0.06)] pl-5 pr-2 py-2 flex items-center justify-between">
          <Link href="/ecom" className="flex items-center gap-2.5">
            <img src="/logo.webp" alt="Priceless CPA" width={32} height={32} className="w-8 h-8 rounded-lg" />
            <span className="font-display font-bold text-[17px] tracking-tight">
              Priceless<span className="text-[var(--green)]"> CPA</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--ink-soft)]">
            <a href="#cost" className="hover:text-[var(--ink)] transition">The Problem</a>
            <a href="#audit" className="hover:text-[var(--ink)] transition">The Audit</a>
            <a href="#results" className="hover:text-[var(--ink)] transition">Results</a>
            <a href="#faq" className="hover:text-[var(--ink)] transition">FAQ</a>
          </div>
          <a
            href="#book"
            className="bg-[var(--ink)] text-white text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-[var(--green-deep)] transition-colors"
          >
            Get Your Profit Audit
          </a>
        </nav>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 pt-14 sm:pt-20 pb-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div>
          <div className="ec-rise inline-flex items-center gap-2 bg-white border border-[var(--line)] rounded-full px-4 py-1.5 text-[13px] font-semibold shadow-sm">
            The CPA firm built for 7-figure eCom brands
          </div>
          <h1 className="ec-rise ec-rise-1 mt-5 text-[38px] leading-[1.04] sm:text-[50px] lg:text-[54px] font-extrabold">
            Find the Money
            <br />
            Your Store Is <span className="ec-highlight">Losing</span>
          </h1>
          <ul className="ec-rise ec-rise-2 mt-7 space-y-3.5">
            {[
              'See your exact sales tax + state income tax exposure',
              'Know your true margins by channel and by SKU',
              'Walk away with a tax plan that pays for itself',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-[17px] text-[var(--ink-soft)]">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-[var(--mint)] text-[var(--green-deep)] grid place-items-center shrink-0 text-sm font-bold">✓</span>
                {t}
              </li>
            ))}
          </ul>
          <div className="ec-rise ec-rise-3 mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="#book"
              className="inline-flex justify-center items-center whitespace-nowrap bg-[var(--ink)] text-white font-semibold text-[16px] rounded-2xl px-7 py-4 shadow-[0_10px_30px_rgba(11,15,12,0.25)] hover:bg-[var(--green-deep)] hover:-translate-y-0.5 transition-all"
            >
              Get Your Profit Audit
            </a>
            <a
              href="#scorecard"
              className="inline-flex justify-center items-center whitespace-nowrap bg-white border border-[var(--line)] text-[var(--ink)] font-semibold text-[16px] rounded-2xl px-7 py-4 hover:border-[var(--green)] hover:-translate-y-0.5 transition-all"
            >
              Get My Estimate
            </a>
          </div>
          {/* Hero trust row: rating + client count */}
          <div className="ec-rise ec-rise-4 mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="flex items-center gap-1.5 font-semibold">
              <span className="text-[#f0b429] tracking-[0.15em] text-[15px]">★★★★★</span>
              <span className="text-[var(--ink)]">4.9/5</span>
            </span>
            <span className="text-[var(--muted)] font-medium">
              Trusted by <span className="text-[var(--ink)] font-bold">80+ eCom brands</span> doing {combinedRevenue} combined
            </span>
          </div>
          <p className="ec-rise ec-rise-4 mt-3 text-sm text-[var(--muted)] font-medium">
            <span className="text-[var(--green-deep)] font-bold">Guaranteed:</span> if we can&apos;t find savings worth more than the fee, we refund the difference.
          </p>
        </div>

        {/* Hero mock dashboard */}
        <div className="ec-rise ec-rise-2 relative">
          <div className="absolute -inset-6 bg-[radial-gradient(ellipse_at_top_right,var(--mint)_0%,transparent_60%)] rounded-[40px]" aria-hidden />
          <div className="relative bg-white border border-[var(--line)] rounded-3xl shadow-[0_24px_60px_rgba(11,15,12,0.12)] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[13px] font-semibold text-[var(--muted)]">Recovered this year</p>
                <p className="font-display text-[38px] font-extrabold text-[var(--green-deep)] leading-tight">+$38,400</p>
              </div>
              <span className="bg-[var(--mint)] text-[var(--green-ink)] text-[12px] font-bold rounded-full px-3 py-1.5">Profit Audit</span>
            </div>
            {/* bar chart */}
            <div className="mt-5 flex items-end gap-2 h-28">
              {[34, 48, 40, 62, 55, 74, 68, 92].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-md ec-bar" style={{ height: `${h}%`, background: i >= 5 ? 'var(--green)' : '#dfe5e0', animationDelay: `${0.3 + i * 0.07}s` }} />
              ))}
            </div>
            <div className="mt-1.5 flex justify-between text-[10px] font-semibold text-[var(--muted)] tracking-wide">
              <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
            </div>
            {/* channel rows */}
            <div className="mt-5 space-y-2.5">
              {[
                { c: 'Shopify', m: '61% margin', v: '+$16,200', ok: true },
                { c: 'Amazon FBA', m: '22% margin', v: '−$4,810', ok: false },
                { c: 'TikTok Shop', m: '47% margin', v: '+$9,340', ok: true },
              ].map((r) => (
                <div key={r.c} className="flex items-center justify-between bg-[var(--paper)] border border-[var(--line)] rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${r.ok ? 'bg-[var(--green)]' : 'bg-[#e0533d]'}`} />
                    <span className="text-sm font-semibold">{r.c}</span>
                  </div>
                  <span className="text-[12px] font-medium text-[var(--muted)]">{r.m}</span>
                  <span className={`text-sm font-bold ${r.ok ? 'text-[var(--green-deep)]' : 'text-[#c2452f]'}`}>{r.v}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-[var(--muted)] text-center font-medium">Illustrative report view — your numbers will differ</p>
          </div>
        </div>
      </section>

      {/* ── Logo marquee ─────────────────────────────────────────── */}
      <section className="relative z-10 py-10 border-y border-[var(--line)] bg-white/60">
        <p className="text-center text-sm font-semibold text-[var(--muted)]">
          Trusted by eCom brands doing <span className="text-[var(--ink)] font-bold">{combinedRevenue}</span> in combined revenue
        </p>
        <div className="ec-marquee mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="ec-marquee-track flex w-max items-center gap-5 pr-5">
            {[...clientBrands, ...clientBrands].map((b, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={b.src}
                alt={b.name}
                width={168}
                height={84}
                className="h-[70px] w-[140px] rounded-lg border border-[var(--line)] object-contain shadow-sm select-none pointer-events-none"
                draggable={false}
              />
            ))}
          </div>
        </div>

        {/* Third-party review badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {ratingBadges.map((r) => (
            <div
              key={r.platform}
              className="flex items-center gap-3 bg-white border border-[var(--line)] rounded-2xl px-5 py-3 shadow-sm"
            >
              <div>
                <p className="text-[13px] font-bold leading-none">{r.platform}</p>
                <p className="text-[11px] text-[var(--muted)] mt-1 leading-none">{r.count}</p>
              </div>
              <div className="text-right">
                <p className="font-display text-[18px] font-extrabold text-[var(--green-deep)] leading-none">{r.score}</p>
                <p className="text-[#f0b429] text-[11px] tracking-[0.1em] leading-none mt-1">★★★★★</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pain: the cost of DIY accounting ─────────────────────── */}
      <section id="cost" className="relative z-10 max-w-6xl mx-auto px-5 pt-20 pb-8">
        <h2 className="text-center text-[34px] sm:text-[44px] font-extrabold leading-tight">
          Where Bad Accounting <span className="ec-highlight">Costs You Money</span>
        </h2>
        <p className="mt-4 text-center text-[17px] text-[var(--muted)] max-w-xl mx-auto">
          It shows up in three places:
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {/* Card 1: surprise tax bill */}
          <div className="bg-white border border-[var(--line)] rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="bg-[var(--paper)] border border-[var(--line)] rounded-2xl p-4">
              <div className="bg-white border border-[var(--line)] rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 text-[11px] font-bold tracking-wide text-[#c2452f]">
                  <span className="w-2 h-2 rounded-full bg-[#e0533d]" /> NOTICE OF BALANCE DUE
                </div>
                <p className="mt-2 font-display text-[26px] font-extrabold">$47,218.00</p>
                <p className="text-[12px] text-[var(--muted)]">Due in 21 days · Q4 estimate missed</p>
              </div>
              <div className="mt-3 bg-white border border-[var(--line)] rounded-xl px-4 py-3 text-[12px] text-[var(--muted)] italic">
                &quot;Wait… I thought we already paid?&quot;
              </div>
            </div>
            <h3 className="mt-5 text-[20px] font-bold">Surprise Tax Bills</h3>
            <p className="mt-2 text-[15px] text-[var(--ink-soft)] leading-relaxed">
              Your CPA files what happened. Nobody plans what&apos;s coming. So April shows up with a five-figure invoice and your inventory buy for Q2 just died.
            </p>
          </div>

          {/* Card 2: phantom profit */}
          <div className="bg-white border border-[var(--line)] rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="bg-[var(--paper)] border border-[var(--line)] rounded-2xl p-4">
              <div className="bg-white border border-[var(--line)] rounded-xl p-4 shadow-sm">
                <div className="flex justify-between text-[11px] font-bold text-[var(--muted)]">
                  <span>REVENUE</span><span className="text-[var(--green-deep)]">↑ $2.4M</span>
                </div>
                <div className="mt-1 flex justify-between text-[11px] font-bold text-[var(--muted)]">
                  <span>BANK BALANCE</span><span className="text-[#c2452f]">↓ $61K</span>
                </div>
                <svg viewBox="0 0 200 60" className="mt-3 w-full">
                  <polyline points="0,40 30,32 60,35 90,22 120,26 150,12 200,6" fill="none" stroke="var(--green)" strokeWidth="2.5" />
                  <polyline points="0,20 30,26 60,24 90,34 120,38 150,46 200,54" fill="none" stroke="#e0533d" strokeWidth="2.5" strokeDasharray="4 3" />
                </svg>
                <div className="flex justify-between text-[10px] font-semibold text-[var(--muted)]">
                  <span className="text-[var(--green-deep)]">— revenue</span>
                  <span className="text-[#c2452f]">- - cash</span>
                </div>
              </div>
            </div>
            <h3 className="mt-5 text-[20px] font-bold">Profit That Isn&apos;t Real</h3>
            <p className="mt-2 text-[15px] text-[var(--ink-soft)] leading-relaxed">
              Revenue up, cash gone. When COGS, freight, and returns aren&apos;t tracked right, your P&amp;L says you&apos;re winning while your bank account says otherwise.
            </p>
          </div>

          {/* Card 3: nexus time bomb */}
          <div className="bg-white border border-[var(--line)] rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="bg-[var(--paper)] border border-[var(--line)] rounded-2xl p-4 space-y-2">
              {[
                { st: 'California', s: 'EXPOSED', bad: true },
                { st: 'Texas', s: 'EXPOSED', bad: true },
                { st: 'Florida', s: 'THRESHOLD 94%', bad: true },
                { st: 'New York', s: 'REGISTERED', bad: false },
              ].map((r) => (
                <div key={r.st} className="flex items-center justify-between bg-white border border-[var(--line)] rounded-xl px-4 py-2.5">
                  <span className="text-[13px] font-semibold">{r.st}</span>
                  <span className={`text-[10px] font-bold tracking-wide rounded-full px-2.5 py-1 ${r.bad ? 'bg-[#fdeae5] text-[#c2452f]' : 'bg-[var(--mint)] text-[var(--green-ink)]'}`}>
                    {r.s}
                  </span>
                </div>
              ))}
            </div>
            <h3 className="mt-5 text-[20px] font-bold">Unpaid Sales Tax</h3>
            <p className="mt-2 text-[15px] text-[var(--ink-soft)] leading-relaxed">
              Cross a state&apos;s threshold and keep selling uncollected? That liability compounds monthly, comes out of your pocket, and states are getting aggressive about finding you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Free Profit Leak Scorecard (lead magnet) ─────────────── */}
      <section id="scorecard" className="relative z-10 max-w-5xl mx-auto px-5 pt-16 pb-4">
        <div className="bg-white border border-[var(--line)] rounded-[32px] shadow-[0_24px_60px_rgba(11,15,12,0.10)] overflow-hidden md:grid md:grid-cols-[1fr_0.9fr]">
          {/* Left: inputs */}
          <div className="p-7 sm:p-10">
            <h2 className="text-[28px] sm:text-[34px] font-extrabold leading-tight">
              What is your store <span className="ec-highlight">overpaying?</span>
            </h2>
            <p className="mt-2 text-[15px] text-[var(--muted)]">
              Get an instant estimate of what you&apos;re likely overpaying.
            </p>

            <div className="mt-7 space-y-6">
              {/* Revenue */}
              <div>
                <label className="flex items-center justify-between text-[14px] font-semibold">
                  Annual revenue
                  <span className="text-[var(--green-deep)] font-bold">${(revenue / 1_000_000).toFixed(1)}M</span>
                </label>
                <input
                  type="range"
                  min={250_000}
                  max={20_000_000}
                  step={250_000}
                  value={revenue}
                  onChange={(e) => { setRevenue(Number(e.target.value)); setScored(false) }}
                  className="mt-2 w-full accent-[var(--green)]"
                />
              </div>
              {/* Channels */}
              <div>
                <p className="text-[14px] font-semibold">How many sales channels?</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      onClick={() => { setChannels(n); setScored(false) }}
                      className={`rounded-xl px-4 py-2 text-[14px] font-semibold border transition-colors ${
                        channels === n
                          ? 'bg-[var(--ink)] text-white border-[var(--ink)]'
                          : 'bg-white text-[var(--ink-soft)] border-[var(--line)] hover:border-[var(--green)]'
                      }`}
                    >
                      {n === 4 ? '4+' : n}
                    </button>
                  ))}
                </div>
              </div>
              {/* Multi-state */}
              <div>
                <p className="text-[14px] font-semibold">Selling into multiple states?</p>
                <div className="mt-2 flex gap-2">
                  {[{ v: true, l: 'Yes' }, { v: false, l: 'No / not sure' }].map((o) => (
                    <button
                      key={o.l}
                      onClick={() => { setMultiState(o.v); setScored(false) }}
                      className={`rounded-xl px-4 py-2 text-[14px] font-semibold border transition-colors ${
                        multiState === o.v
                          ? 'bg-[var(--ink)] text-white border-[var(--ink)]'
                          : 'bg-white text-[var(--ink-soft)] border-[var(--line)] hover:border-[var(--green)]'
                      }`}
                    >
                      {o.l}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setScored(true)}
                className="w-full bg-[var(--green-ink)] text-white font-semibold rounded-2xl px-6 py-4 hover:bg-black transition-colors"
              >
                Get My Estimate
              </button>
            </div>
          </div>

          {/* Right: result */}
          <div className="bg-[var(--ink)] text-white p-7 sm:p-10 flex flex-col justify-center">
            {!scored ? (
              <div className="text-center text-white/50">
                <div className="font-display text-[40px] font-extrabold text-white/20">$ ? ? ?</div>
                <p className="mt-3 text-[14px] max-w-xs mx-auto">
                  Set your numbers and hit the button. Your estimated annual loss appears here.
                </p>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-[12px] font-bold tracking-[0.15em] text-[#7ee2ab]">ESTIMATED ANNUAL LOSS</p>
                <p className="mt-1 text-[11px] text-white/40">overpaid tax + untracked margin</p>
                <p className="mt-3 font-display text-[40px] sm:text-[48px] font-extrabold leading-none">
                  {lowEst}<span className="text-white/40"> – </span>{highEst}
                </p>
                <p className="mt-4 text-[13px] text-white/60 leading-relaxed max-w-xs mx-auto">
                  Ballpark from revenue and channel count. The audit finds your exact number and the plan to stop it.
                  {multiState && ' Selling into multiple states adds separate sales-tax exposure we map too.'}
                </p>
                <a
                  href="#book"
                  className="mt-6 inline-flex bg-[#7ee2ab] text-[var(--green-ink)] font-bold rounded-2xl px-6 py-3.5 hover:bg-white transition-colors"
                >
                  Get Your Profit Audit
                </a>
                <p className="mt-3 text-[11px] text-white/40">Rough estimate, not tax advice.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── The Offer: eCom Profit & Tax Audit ───────────────────── */}
      <section id="audit" className="relative z-10 mt-16 bg-[var(--ink)] text-white">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-[36px] sm:text-[48px] font-extrabold leading-[1.05]">
                The eCom Profit<br />&amp; Tax Audit
              </h2>
            </div>
            <p className="max-w-md text-[16px] text-white/70 leading-relaxed">
              One engagement. Every tax, profit, and finance issue that moves money, found and turned into a plan.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {auditDeliverables.map((d, i) => (
              <div key={d.title} className="group bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-[#7ee2ab]/30 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[13px] font-bold text-white/30">0{i + 1}</span>
                  <span className="text-[10px] font-bold tracking-[0.15em] text-[#7ee2ab]/80">{d.tag}</span>
                </div>
                <h3 className="mt-3 text-[19px] font-bold">{d.title}</h3>
                <p className="mt-2 text-[14px] text-white/60 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          {/* Guarantee band */}
          <div className="mt-12 bg-[#7ee2ab] text-[var(--green-ink)] rounded-3xl px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-display text-[24px] sm:text-[28px] font-extrabold leading-tight">
                Find the fee in savings, or we refund the difference.
              </p>
              <p className="mt-1.5 text-[15px] font-medium opacity-80">
                Most audits surface more than 5x the fee.
              </p>
            </div>
            <a
              href="#book"
              className="shrink-0 bg-[var(--green-ink)] text-white font-semibold rounded-2xl px-7 py-4 hover:bg-black transition-colors"
            >
              Get Your Profit Audit
            </a>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 py-20">
        <h2 className="text-center text-[34px] sm:text-[44px] font-extrabold">
How the <span className="ec-highlight">Audit Works</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="relative bg-white border border-[var(--line)] rounded-3xl p-6 shadow-sm">
              <span className="font-display text-[36px] font-extrabold ec-step-num">{s.n}</span>
              <h3 className="mt-2 text-[18px] font-bold">{s.title}</h3>
              <p className="mt-2 text-[14px] text-[var(--ink-soft)] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Ongoing tiers ────────────────────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 pb-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-[34px] sm:text-[44px] font-extrabold">Then We Can Run It For You</h2>
          <p className="mt-3 text-[17px] text-[var(--muted)]">
            The audit stands alone. But most brands don&apos;t want a report, they want the problem gone. That&apos;s the ongoing side.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
          {ongoing.map((t) => (
            <div
              key={t.name}
              className={`rounded-3xl p-7 flex flex-col ${
                t.featured
                  ? 'bg-[var(--green-ink)] text-white shadow-[0_24px_60px_rgba(6,55,31,0.35)] md:-translate-y-3'
                  : 'bg-white border border-[var(--line)] shadow-sm'
              }`}
            >
              {t.featured && (
                <span className="self-start bg-[#7ee2ab] text-[var(--green-ink)] text-[11px] font-bold tracking-wide rounded-full px-3 py-1 mb-4">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-[22px] font-bold">{t.name}</h3>
              <p className={`mt-1 text-[14px] ${t.featured ? 'text-white/70' : 'text-[var(--muted)]'}`}>{t.who}</p>
              <ul className="mt-5 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px]">
                    <span className={`mt-0.5 text-sm font-bold ${t.featured ? 'text-[#7ee2ab]' : 'text-[var(--green)]'}`}>✓</span>
                    <span className={t.featured ? 'text-white/85' : 'text-[var(--ink-soft)]'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`mt-7 text-center font-semibold rounded-2xl px-5 py-3.5 transition-colors ${
                  t.featured
                    ? 'bg-[#7ee2ab] text-[var(--green-ink)] hover:bg-white'
                    : 'bg-[var(--paper)] border border-[var(--line)] hover:bg-[var(--mint-soft)]'
                }`}
              >
                Start with the Audit
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Comparison ───────────────────────────────────────────── */}
      <section className="relative z-10 bg-white border-y border-[var(--line)]">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <h2 className="text-center text-[34px] sm:text-[44px] font-extrabold">
            Your Current Setup vs. <span className="ec-highlight">An eCom CPA</span>
          </h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-0 text-[14px]">
              <thead>
                <tr>
                  <th className="text-left p-4" />
                  <th className="text-left p-4 font-semibold text-[var(--muted)]">Generalist CPA</th>
                  <th className="text-left p-4 font-semibold text-[var(--muted)]">Software Alone</th>
                  <th className="text-left p-4">
                    <span className="inline-block bg-[var(--green-ink)] text-white font-display font-bold rounded-xl px-4 py-2">Priceless CPA</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Sales tax nexus tracking', '“Not my area”', 'Alerts you ignore', 'Monitored + remediated for you'],
                  ['Inventory & COGS accounting', 'Whatever QBO says', 'Garbage in, garbage out', 'Rebuilt to true landed cost'],
                  ['Channel / SKU profitability', 'Never seen it', 'Dashboards, no judgment', 'Margin scoreboard + what to do'],
                  ['Tax planning', 'A call in March', 'None', 'Year-round, dollar-quantified'],
                  ['Knows your business model', 'Learns on your dime', 'N/A', 'eCom is all we do here'],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`p-4 border-t border-[var(--line)] ${
                          j === 0 ? 'font-semibold' : j === 3 ? 'font-semibold text-[var(--green-deep)] bg-[var(--mint-soft)]' : 'text-[var(--muted)]'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Why us / boutique advantages ─────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-[34px] sm:text-[44px] font-extrabold">Why Brands Pick <span className="ec-highlight">Priceless CPA</span></h2>
          <p className="mt-3 text-[17px] text-[var(--muted)]">
            A boutique built for online sellers. No lock-ins, no ticket queues, no generalist guesswork.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUs.map((w) => (
            <div key={w.title} className="bg-white border border-[var(--line)] rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[var(--mint)] text-[var(--green-deep)] grid place-items-center font-bold text-lg">✓</div>
              <h3 className="mt-4 text-[19px] font-bold">{w.title}</h3>
              <p className="mt-2 text-[15px] text-[var(--ink-soft)] leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stack strip ──────────────────────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 py-16 text-center">
        <p className="text-sm font-semibold text-[var(--muted)]">WE SPEAK YOUR STACK</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {['Shopify', 'Amazon FBA', 'TikTok Shop', 'Walmart', 'WooCommerce', 'Etsy', 'eBay', 'QuickBooks', 'Xero', 'A2X', 'Finaloop', 'SellerBoard', 'Stripe', 'Klaviyo', 'Meta Ads', 'Gusto', 'Paychex', 'Ramp', '+ yours'].map((p) => (
            <span key={p} className="bg-white border border-[var(--line)] rounded-full px-5 py-2.5 text-[14px] font-semibold shadow-sm">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section id="results" className="relative z-10 max-w-6xl mx-auto px-5 pb-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-white border border-[var(--line)] rounded-3xl p-8 text-center shadow-sm">
              <p className="font-display text-[44px] font-extrabold text-[var(--green-deep)] leading-none">{s.value}</p>
              <p className="mt-3 font-bold">{s.label}</p>
              <p className="text-[13px] text-[var(--muted)]">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 pb-20">
        <h2 className="text-center text-[34px] sm:text-[44px] font-extrabold">
          What eCom Founders Say
        </h2>
        <div className="mt-12 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <figure key={i} className="bg-white border border-[var(--line)] rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col">
              <div className="text-[#f0b429] text-[16px] tracking-[0.2em]">★★★★★</div>
              <blockquote className="mt-5 text-[19px] sm:text-[22px] text-[var(--ink)] font-medium leading-relaxed">
                &quot;{t.quote}&quot;
              </blockquote>
              {t.result && (
                <p className="mt-5 inline-flex self-start items-center gap-2 bg-[var(--mint-soft)] text-[var(--green-ink)] text-[13px] font-bold rounded-full px-4 py-2">
                  {t.result}
                </p>
              )}
              <figcaption className="mt-7 flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-[var(--mint)] grid place-items-center font-display font-bold text-[var(--green-deep)]">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-[15px] font-bold">{t.name}</p>
                  <p className="text-[13px] text-[var(--muted)]">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Founder ──────────────────────────────────────────────── */}
      <section className="relative z-10 bg-[var(--ink)] text-white">
        <div className="max-w-6xl mx-auto px-5 py-20 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_bottom_left,rgba(126,226,171,0.25)_0%,transparent_60%)] rounded-[40px]" aria-hidden />
            {/* Founder photo — self-hosted (do NOT hotlink pricelesscpa.com/wp-content/...; that 403s) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ecom/anthony.webp"
              alt="Anthony Price, CPA — Founder of Priceless CPA"
              width={340}
              height={340}
              className="relative w-full max-w-[340px] aspect-square mx-auto rounded-3xl border border-white/10 object-cover"
            />
            <div className="relative mt-4 text-center">
              <p className="font-display text-[20px] font-bold">Anthony Price, CPA</p>
              <p className="text-[13px] text-[#7ee2ab] font-semibold tracking-[0.15em]">FOUNDER · PRICELESS CPA</p>
            </div>
          </div>
          <div>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold leading-[1.1]">
              I&apos;ve seen inside the books of eCom brands doing {combinedRevenue} combined.
            </h2>
            <div className="mt-6 space-y-4 text-[16px] text-white/70 leading-relaxed">
              <p>
                The pattern is always the same. Great at product. Great at marketing. And quietly bleeding money through the finance function: uncollected sales tax, inventory methods that inflate taxable income, margins nobody has actually calculated.
              </p>
              <p>
                Generalist CPAs can&apos;t catch it because they see one eCom client a year. We see them every day. Same channels, same tax issues, same seven leaks, which is exactly why we productized the audit.
              </p>
              <p className="text-white font-semibold">
                Fifteen minutes on a call and I&apos;ll tell you which leaks you likely have. Bring your last return and we&apos;ll look at it together.
              </p>
            </div>
            <a
              href="#book"
              className="mt-8 inline-flex bg-[#7ee2ab] text-[var(--green-ink)] font-bold rounded-2xl px-7 py-4 hover:bg-white transition-colors"
            >
              Get Your Profit Audit
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" className="relative z-10 max-w-3xl mx-auto px-5 py-20">
        <h2 className="text-center text-[34px] sm:text-[44px] font-extrabold">Questions, Answered</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="bg-white border border-[var(--line)] rounded-2xl px-6 py-5 shadow-sm">
              <summary className="flex items-center justify-between gap-4 font-semibold text-[16px]">
                {f.q}
                <span className="ec-faq-plus shrink-0 w-7 h-7 rounded-full bg-[var(--mint)] text-[var(--green-deep)] grid place-items-center font-bold">+</span>
              </summary>
              <p className="mt-3 text-[15px] text-[var(--ink-soft)] leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Booking ──────────────────────────────────────────────── */}
      <section id="book" className="relative z-10 bg-[var(--mint-soft)] border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto px-5 py-20">
          <div className="text-center">
            <h2 className="text-[34px] sm:text-[44px] font-extrabold">
              Find Out What Your Store Is <span className="ec-highlight">Losing</span>
            </h2>
            <p className="mt-3 text-[17px] text-[var(--muted)] max-w-xl mx-auto">
              15 minutes. We&apos;ll look at your channels and your last return, and tell you exactly what the audit would go find. Flat-fee quote on the spot.
            </p>
          </div>
          <div className="mt-10">
            <BookingEmbed source="ecom-audit" campaign="ecom-landing" />
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="relative z-10 bg-[var(--ink)] text-white/60 text-[13px]">
        <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            <span className="font-display font-bold text-white">Priceless<span className="text-[#7ee2ab]"> CPA</span></span>
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition">Main site</Link>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#book" className="hover:text-white transition">Book a call</a>
          </div>
          <p>© {new Date().getFullYear()} Priceless CPA</p>
        </div>
      </footer>
    </main>
  )
}
