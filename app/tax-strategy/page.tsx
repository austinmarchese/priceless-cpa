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

const stats = [
  { value: 'CPA', label: 'Licensed' },
  { value: '60+', label: 'Clients Served' },
  { value: '24hr', label: 'Slack Response' },
  { value: '5+', label: 'Figure Savings' },
]

export default function TaxStrategy() {
  return (
    <main className="min-h-screen bg-bg-deep">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-bg-primary via-gold/5 to-bg-primary border-b border-gold/10 py-3 px-4">
        <div className="flex items-center justify-center gap-2 text-xs tracking-wider uppercase text-text-muted">
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse-glow" aria-hidden="true"></span>
          <span>Limited spots available — <strong className="text-gold">Book your free strategy call</strong></span>
        </div>
      </div>

      {/* Logo */}
      <div className="text-center py-6">
        <Link href="/" className="inline-block" aria-label="Back to Priceless CPA Home">
          <span className="font-display text-gold text-lg">Priceless CPA</span>
          <span className="block text-text-muted text-xs tracking-widest uppercase">Tax Strategy</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20" aria-labelledby="hero-heading">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold uppercase tracking-widest text-sm mb-4 animate-fade-up">Free Tax Strategy Session</p>
          <h1 id="hero-heading" className="font-display text-3xl md:text-5xl lg:text-6xl text-text-white leading-tight mb-6 animate-fade-up" style={{animationDelay: '0.1s'}}>
            How Business Owners Are <span className="text-gold">Legally Taking Back Thousands</span> From the IRS
          </h1>
          <p className="text-text-light text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
            Stop overpaying. Get a personalized tax strategy from a CPA who actually understands entrepreneurs.
          </p>
          <a 
            href="https://calendly.com/pricelesscpa/intro" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-light text-bg-deep px-10 py-5 rounded-lg font-bold text-lg transition transform hover:scale-105 animate-fade-up"
            style={{animationDelay: '0.3s'}}
          >
            Claim Your Free Strategy Call →
          </a>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="px-6 py-16 bg-bg-primary" aria-labelledby="benefits-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="benefits-heading" className="font-display text-2xl md:text-3xl text-center text-gold mb-10">What You&apos;ll Get</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4" role="list">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 bg-bg-card rounded-lg p-4 border border-gold/10">
                  <span className="text-gold text-xl" aria-hidden="true">✓</span>
                  <span className="text-text-light">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="bg-bg-card rounded-xl p-8 border border-gold/20">
              <h3 className="font-display text-xl text-text-white mb-4">Who This Is For:</h3>
              <ul className="space-y-3 text-text-light" role="list">
                <li className="flex items-start gap-2">
                  <span className="text-gold" aria-hidden="true">→</span>
                  Business owners making $100K+ annually
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold" aria-hidden="true">→</span>
                  Entrepreneurs tired of tax surprises
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold" aria-hidden="true">→</span>
                  Crypto investors needing specialized help
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold" aria-hidden="true">→</span>
                  Anyone who wants year-round tax guidance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Anthony */}
      <section className="px-6 py-16 bg-bg-deep" aria-labelledby="about-heading">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <div className="relative w-48 h-48 mx-auto md:mx-0 mb-6 rounded-2xl overflow-hidden border-2 border-gold/30">
                <Image 
                  src="https://pricelesscpa.com/wp-content/uploads/2025/08/Anthony-300x300.webp" 
                  alt="Anthony Price, CPA and founder of Priceless CPA" 
                  fill 
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              <h2 id="about-heading" className="font-display text-2xl text-gold">Anthony Price</h2>
              <p className="text-text-muted">CPA, Tax Strategist & Founder</p>
            </div>
            <div>
              <p className="text-text-light mb-4 leading-relaxed">
                Anthony Price is a CPA, tax strategist, and founder of Priceless CPA. He has dedicated his life to helping business owners stop overpaying taxes and finally get control of their finances.
              </p>
              <p className="text-text-light mb-4 leading-relaxed">
                He studied Accounting and Finance at the University of Nevada, Reno and worked in public accounting before launching his own firm. Since then, he&apos;s helped 60+ business owners clean up their books, save 5+ figures in taxes annually, and actually understand their numbers.
              </p>
              <blockquote className="border-l-4 border-gold pl-4 italic text-text-muted my-6">
                &ldquo;I was tired of seeing entrepreneurs get burned by accountants who only show up once a year. No strategy. No guidance. Just a tax bill and a &apos;see you next year.&apos;&rdquo;
              </blockquote>
              <p className="text-text-light leading-relaxed">
                He built this firm to be the opposite — a year-round partner who actually gives a damn.
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12" role="list" aria-label="Key statistics">
            {stats.map((stat, i) => (
              <div key={i} className="bg-bg-card rounded-lg p-6 text-center border border-gold/10" role="listitem">
                <div className="text-gold font-display text-2xl">{stat.value}</div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-bg-primary" aria-labelledby="cta-heading">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="cta-heading" className="font-display text-2xl md:text-4xl text-text-white mb-4">
            Ready to Stop Overpaying the IRS?
          </h2>
          <p className="text-text-light mb-8 text-lg">
            Book your free strategy call and discover how much you could be saving.
          </p>
          <a 
            href="https://calendly.com/pricelesscpa/intro" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-light text-bg-deep px-10 py-5 rounded-lg font-bold text-lg transition transform hover:scale-105"
          >
            Book Your Free Call Now →
          </a>
          <p className="text-text-muted text-sm mt-6">
            No obligation. No pressure. Just real tax strategy advice.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-bg-deep border-t border-gold/10 text-center" role="contentinfo">
        <Image 
          src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
          alt="Priceless CPA Logo" 
          width={40} 
          height={40}
          className="mx-auto mb-3 rounded-lg"
        />
        <p className="text-text-muted text-sm">© {new Date().getFullYear()} Priceless CPA. All rights reserved.</p>
      </footer>
    </main>
  )
}
