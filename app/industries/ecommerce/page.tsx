'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ecommerceContent } from '../../../workflow/industries-content'

export default function EcommercePage() {
  const content = ecommerceContent

  return (
    <main className="min-h-screen bg-[#06080e]">
      {/* Top Bar - Urgency Banner */}
      <div className="bg-gradient-to-r from-[#0b0e18] via-[#c4a24e]/5 to-[#0b0e18] border-b border-[#c4a24e]/10 py-3 px-4">
        <div className="flex items-center justify-center gap-3 text-xs tracking-wider uppercase text-[#7a7870]">
          <span className="w-2 h-2 bg-[#c4a24e] rounded-full animate-pulse"></span>
          <span>{content.topBarText} — <strong className="text-[#c4a24e]">{content.topBarHighlight}</strong></span>
        </div>
      </div>

      {/* Logo Bar */}
      <div className="text-center py-8 border-b border-[#c4a24e]/5">
        <Link href="/" className="inline-block">
          <div className="font-display text-[#c4a24e] text-xl tracking-wide">PRICELESS</div>
          <div className="text-[#7a7870] text-[10px] tracking-[0.3em] uppercase mt-1">Certified Public Accountant</div>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c4a24e] uppercase tracking-[0.2em] text-sm mb-6 font-medium">
            {content.categoryLabel}
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#f0ede6] leading-tight mb-8">
            {content.headline}{' '}
            <span className="text-[#c4a24e]">{content.headlineHighlight}</span>
          </h1>
          <p className="text-[#c8c5bc] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {content.description}
          </p>
          <a
            href="https://calendly.com/pricelesscpa/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-12 py-5 inline-flex items-center gap-2"
          >
            {content.heroCta}
            <span className="text-xl">→</span>
          </a>
        </div>
      </section>

      {/* What We Handle + Who It's For */}
      <section className="px-6 py-20 bg-[#0b0e18]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-center text-[#c4a24e] mb-12">What We Handle</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Benefits */}
            <div className="space-y-4">
              {content.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 bg-[#0f1222] rounded-lg p-5 border border-[#c4a24e]/10 hover:border-[#c4a24e]/30 transition">
                  <span className="text-[#c4a24e] text-xl font-bold">✓</span>
                  <span className="text-[#c8c5bc] leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Who It's For */}
            <div className="bg-[#0f1222] rounded-xl p-8 border border-[#c4a24e]/20 h-fit">
              <h3 className="font-display text-xl text-[#f0ede6] mb-6">Who This Is For:</h3>
              <ul className="space-y-4">
                {content.whoIsFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#c8c5bc]">
                    <span className="text-[#c4a24e] font-bold">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="px-6 py-20 bg-[#06080e]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-center text-[#c4a24e] mb-12">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {content.processSteps.map((step, i) => (
              <div key={i} className="bg-[#0f1222] rounded-xl p-6 border border-[#c4a24e]/10 text-center">
                <div className="text-[#c4a24e] font-display text-3xl mb-3">{step.num}</div>
                <h3 className="text-[#f0ede6] font-medium mb-2">{step.title}</h3>
                <p className="text-[#7a7870] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 bg-[#0b0e18]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {content.stats.map((stat, i) => (
              <div key={i} className="bg-[#0f1222] rounded-xl p-6 text-center border border-[#c4a24e]/10">
                <div className="text-[#c4a24e] font-display text-3xl mb-1">{stat.value}</div>
                <div className="text-[#7a7870] text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 bg-[#06080e]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[#f0ede6] mb-6">
            {content.finalHeadline}
          </h2>
          <p className="text-[#c8c5bc] mb-10 text-lg leading-relaxed">
            {content.finalDescription}
          </p>
          <a
            href="https://calendly.com/pricelesscpa/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-12 py-5 inline-flex items-center gap-2"
          >
            {content.finalCta}
            <span className="text-xl">→</span>
          </a>
        </div>
      </section>

      {/* Back Link */}
      <div className="px-6 py-8 bg-[#06080e] text-center">
        <Link href="/industries" className="text-[#7a7870] hover:text-[#c4a24e] transition text-sm">
          ← View All Industries
        </Link>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#06080e] border-t border-[#c4a24e]/10 text-center">
        <Image
          src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp"
          alt="Priceless CPA"
          width={50}
          height={50}
          className="mx-auto mb-4 rounded-lg"
        />
        <p className="text-[#7a7870] text-sm">© {new Date().getFullYear()} Priceless CPA. All rights reserved.</p>
      </footer>
    </main>
  )
}
