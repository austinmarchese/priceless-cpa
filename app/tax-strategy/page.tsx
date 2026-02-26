'use client'

import Image from 'next/image'
import Link from 'next/link'

const benefits = [
  'Legal entity optimization (S-Corp vs LLC analysis)',
  'Quarterly tax planning to eliminate surprises',
  'Deduction maximization strategies',
  'Retirement account optimization',
  'Year-round proactive tax guidance',
]

const whoIsFor = [
  'Business owners making $100K+ annually',
  'Entrepreneurs tired of tax surprises',
  'Crypto investors needing specialized help',
  'Anyone who wants year-round tax guidance',
]

const stats = [
  { value: 'CPA', label: 'Licensed' },
  { value: '60+', label: 'Clients Served' },
  { value: '24hr', label: 'Slack Response' },
  { value: '5+', label: 'Figure Savings' },
]

export default function TaxStrategy() {
  return (
    <main className="min-h-screen bg-[#06080e]">
      {/* Top Bar - Urgency Banner */}
      <div className="bg-gradient-to-r from-[#0b0e18] via-[#c4a24e]/5 to-[#0b0e18] border-b border-[#c4a24e]/10 py-3 px-4">
        <div className="flex items-center justify-center gap-3 text-xs tracking-wider uppercase text-[#7a7870]">
          <span className="w-2 h-2 bg-[#c4a24e] rounded-full animate-pulse-glow"></span>
          <span>Limited spots available — <strong className="text-[#c4a24e]">Book your free strategy call</strong></span>
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
          <p className="text-[#c4a24e] uppercase tracking-[0.2em] text-sm mb-6 animate-fade-up font-medium">
            Free Tax Strategy Session
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#f0ede6] leading-tight mb-8 animate-fade-up" style={{animationDelay: '0.1s'}}>
            How Business Owners Are{' '}
            <span className="text-[#c4a24e]">Legally Taking Back Thousands</span>{' '}
            From the IRS
          </h1>
          <p className="text-[#c8c5bc] text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{animationDelay: '0.2s'}}>
            Stop overpaying. Get a personalized tax strategy from a CPA who actually understands entrepreneurs.
          </p>
          <a 
            href="https://calendly.com/pricelesscpa/intro" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-12 py-5 animate-fade-up inline-flex items-center gap-2"
            style={{animationDelay: '0.3s'}}
          >
            Claim Your Free Strategy Call
            <span className="text-xl">→</span>
          </a>
        </div>
      </section>

      {/* What You'll Get + Who It's For */}
      <section className="px-6 py-20 bg-[#0b0e18]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-center text-[#c4a24e] mb-12">What You&apos;ll Get</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
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
                {whoIsFor.map((item, i) => (
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

      {/* About Anthony */}
      <section className="px-6 py-20 bg-[#06080e]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Photo Column */}
            <div className="md:col-span-2 text-center">
              <div className="relative w-56 h-56 mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-[#c4a24e]/30 shadow-2xl">
                <Image 
                  src="https://pricelesscpa.com/wp-content/uploads/2025/08/Anthony-300x300.webp" 
                  alt="Anthony Price, CPA" 
                  fill 
                  className="object-cover"
                  sizes="224px"
                />
              </div>
              <h3 className="font-display text-2xl text-[#c4a24e]">Anthony Price</h3>
              <p className="text-[#7a7870] text-sm tracking-wide">CPA, Tax Strategist & Founder</p>
            </div>
            
            {/* Bio Column */}
            <div className="md:col-span-3">
              <p className="text-[#c8c5bc] mb-5 leading-relaxed text-lg">
                Anthony Price is a CPA, tax strategist, and founder of Priceless CPA. He has dedicated his life to helping business owners stop overpaying taxes and finally get control of their finances.
              </p>
              <p className="text-[#c8c5bc] mb-5 leading-relaxed">
                He studied Accounting and Finance at the University of Nevada, Reno and worked in public accounting before launching his own firm. Since then, he&apos;s helped 60+ business owners clean up their books, save 5+ figures in taxes annually, and actually understand their numbers.
              </p>
              <blockquote className="border-l-4 border-[#c4a24e] pl-6 my-8 py-2">
                <p className="text-[#7a7870] italic text-lg leading-relaxed">
                  &ldquo;I was tired of seeing entrepreneurs get burned by accountants who only show up once a year. No strategy. No guidance. Just a tax bill and a &apos;see you next year.&apos;&rdquo;
                </p>
              </blockquote>
              <p className="text-[#c8c5bc] leading-relaxed">
                He built this firm to be the opposite — <strong className="text-[#f0ede6]">a year-round partner who actually gives a damn.</strong>
              </p>
              <p className="text-[#c8c5bc] mt-5 leading-relaxed">
                When you work with Priceless CPA, you&apos;re not handed off to a junior associate or an outsourced team. You work directly with Anthony and his team of 5 dedicated experts, with <strong className="text-[#c4a24e]">24-hour Slack access</strong>, quarterly strategy calls, and a real plan for your money.
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#0f1222] rounded-xl p-6 text-center border border-[#c4a24e]/10">
                <div className="text-[#c4a24e] font-display text-3xl mb-1">{stat.value}</div>
                <div className="text-[#7a7870] text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 bg-[#0b0e18]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[#f0ede6] mb-6">
            Ready to Stop Overpaying the IRS?
          </h2>
          <p className="text-[#c8c5bc] mb-10 text-lg leading-relaxed">
            Book your free strategy call and discover how much you could be saving.
          </p>
          <a 
            href="https://calendly.com/pricelesscpa/intro" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-12 py-5 inline-flex items-center gap-2"
          >
            Book Your Free Call Now
            <span className="text-xl">→</span>
          </a>
          <p className="text-[#7a7870] text-sm mt-8">
            No obligation. No pressure. Just real tax strategy advice.
          </p>
        </div>
      </section>

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
