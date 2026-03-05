'use client'

import Image from 'next/image'
import Link from 'next/link'
import { industriesLanding } from '../../workflow/industries-content'

const industries = [
  {
    title: 'Law Firms & Attorneys',
    description: 'IOLTA compliance, trust accounting, and tax strategies for legal practices.',
    href: '/industries/lawyers',
    icon: '⚖️',
  },
  {
    title: 'AI & Tech Startups',
    description: 'R&D tax credits, SaaS revenue recognition, and investor-ready financials.',
    href: '/industries/ai-businesses',
    icon: '🤖',
  },
  {
    title: 'E-Commerce Brands',
    description: 'Multi-channel accounting, inventory management, and sales tax compliance.',
    href: '/industries/ecommerce',
    icon: '🛒',
  },
  {
    title: 'Real Estate',
    description: '1031 exchanges, cost segregation, and rental property optimization.',
    href: '/industries/real-estate',
    icon: '🏠',
  },
  {
    title: 'Content Creators',
    description: 'Multi-platform revenue tracking and creator-specific tax strategies.',
    href: '/industries/creators',
    icon: '🎬',
  },
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#06080e]">
      {/* Header */}
      <header className="py-8 px-6 text-center border-b border-[#c4a24e]/10">
        <Link href="/" className="inline-block">
          <Image
            src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp"
            alt="Priceless CPA"
            width={50}
            height={50}
            className="mx-auto rounded-lg"
          />
        </Link>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#f0ede6] leading-tight mb-6">
            {industriesLanding.headline}
          </h1>
          <p className="text-[#c8c5bc] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {industriesLanding.subheadline}
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="px-6 py-16 bg-[#0b0e18]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <Link
                key={i}
                href={industry.href}
                className="group bg-[#0f1222] rounded-xl p-8 border border-[#c4a24e]/10 hover:border-[#c4a24e]/40 transition-all hover:shadow-lg hover:shadow-[#c4a24e]/5"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-[#f0ede6] mb-3 group-hover:text-[#c4a24e] transition">
                  {industry.title}
                </h3>
                <p className="text-[#c8c5bc] text-sm leading-relaxed mb-4">
                  {industry.description}
                </p>
                <span className="text-[#c4a24e] text-sm font-medium group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-[#06080e]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl text-[#f0ede6] mb-6">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-[#c8c5bc] mb-8">
            We work with businesses across many industries. Book a call and let&apos;s discuss your specific needs.
          </p>
          <a
            href="https://calendly.com/pricelesscpa/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-10 py-4 inline-block"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#06080e] border-t border-[#c4a24e]/10 text-center">
        <Image
          src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp"
          alt="Priceless CPA"
          width={40}
          height={40}
          className="mx-auto mb-3 rounded-lg"
        />
        <p className="text-[#7a7870] text-sm">© {new Date().getFullYear()} Priceless CPA. All rights reserved.</p>
      </footer>
    </main>
  )
}
