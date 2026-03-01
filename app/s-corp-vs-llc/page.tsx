'use client'

import Image from 'next/image'
import Link from 'next/link'

const comparisonData = [
  { metric: 'Net Profits', before: '$100,000', after: '$100,000', note: '($50,000 S-Corp Salary)' },
  { metric: 'Social Security Taxes', before: '$12,400', beforePct: '12.4%', after: '$6,200', afterPct: '12.4%' },
  { metric: 'Medicare Taxes', before: '$2,800', beforePct: '2.8%', after: '$1,400', afterPct: '2.8%' },
  { metric: 'Total SE Taxes', before: '$15,300', after: '$7,650' },
  { metric: 'Annual SE Tax Savings', before: '$0', after: '$7,650/yr', highlight: true },
]

const faqItems = [
  { 
    question: '15.3% Self Employment Taxes', 
    answer: 'S-Corps are used to mitigate your self employment taxes, which are comprised of your social security and medicare taxes.' 
  },
  { 
    question: 'How is a Sole Prop Taxed?', 
    answer: 'Out of the gate, you are taxed as a sole proprietorship, which means you\'re 100% subject to self employment taxes.' 
  },
  { 
    question: 'How is an S-Corp Taxed?', 
    answer: 'S-Corps are different because you get income in two manners: your corporation will pay you a salary, and you\'ll take distributions as the owner. The payroll is subject to the 15.3% SE tax, while the distribution is not subject to the SE taxes.' 
  },
  { 
    question: 'Maximizing the S-Corp', 
    answer: 'You\'ll need to work to maximize the tax benefits of an S-Corp, while obeying the IRS law and case law. Your business must pay you a "reasonable salary", and we help you determine that.' 
  },
]

export default function SCorpVsLLC() {
  return (
    <main className="min-h-screen bg-[#06080e]">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#0b0e18] via-[#c4a24e]/5 to-[#0b0e18] border-b border-[#c4a24e]/10 py-3 px-4">
        <div className="flex items-center justify-center gap-3 text-xs tracking-wider uppercase text-[#7a7870]">
          <span className="w-2 h-2 bg-[#c4a24e] rounded-full animate-pulse-glow"></span>
          <span>Could you be saving thousands? — <strong className="text-[#c4a24e]">Find out for free</strong></span>
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
            Sole Proprietorship vs. S-Corps for Taxes
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#f0ede6] leading-tight mb-8 animate-fade-up" style={{animationDelay: '0.1s'}}>
            Get the Most Tax Benefit{' '}
            <span className="text-[#c4a24e]">Possible from an S-Corp</span>
          </h1>
          <p className="text-[#c8c5bc] text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{animationDelay: '0.2s'}}>
            S-Corp could be the most powerful tax tool available. In most cases, an S-Corp is able to save dramatically in taxes.
          </p>
          <a 
            href="https://calendly.com/pricelesscpa/intro" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-12 py-5 animate-fade-up inline-flex items-center gap-2"
            style={{animationDelay: '0.3s'}}
          >
            Discover If S-Corp Is Right For You
            <span className="text-xl">→</span>
          </a>
        </div>
      </section>

      {/* Tax Comparison Table */}
      <section className="px-6 py-20 bg-[#0b0e18]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-center text-[#c4a24e] mb-12">Tax Savings Comparison</h2>
          
          {/* Table */}
          <div className="bg-[#0f1222] rounded-xl border border-[#c4a24e]/20 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[#141830] border-b border-[#c4a24e]/10">
              <div className="p-4 text-[#7a7870] text-sm font-medium">DATA</div>
              <div className="p-4 text-[#7a7870] text-sm font-medium text-center">BEFORE (Sole Prop)</div>
              <div className="p-4 text-[#c4a24e] text-sm font-medium text-center">AFTER (S-Corp)</div>
            </div>
            
            {/* Rows */}
            {comparisonData.map((row, i) => (
              <div 
                key={i} 
                className={`grid grid-cols-3 border-b border-[#c4a24e]/10 last:border-b-0 ${row.highlight ? 'bg-[#c4a24e]/10' : ''}`}
              >
                <div className="p-4 text-[#c8c5bc] text-sm">{row.metric}</div>
                <div className="p-4 text-center">
                  <span className={`text-sm ${row.highlight ? 'text-[#7a7870]' : 'text-[#f0ede6]'}`}>{row.before}</span>
                  {row.beforePct && <span className="text-[#7a7870] text-xs block">{row.beforePct}</span>}
                </div>
                <div className="p-4 text-center">
                  <span className={`text-sm ${row.highlight ? 'text-[#c4a24e] font-bold' : 'text-[#f0ede6]'}`}>{row.after}</span>
                  {row.afterPct && <span className="text-[#7a7870] text-xs block">{row.afterPct}</span>}
                  {row.note && <span className="text-[#7a7870] text-xs block">{row.note}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 py-20 bg-[#06080e]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-center text-[#c4a24e] mb-12">What We Do For You</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'We can determine if an S-Corp is right for you',
              'We can convert you to an S-Corp & build a perfect tax plan',
              'We will pay in your taxes through the payroll system & provide guidance on the reasonable salary',
              'We will file your 1120S tax returns at the end of the year and make sure you\'re compliant',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#0f1222] rounded-lg p-5 border border-[#c4a24e]/10 hover:border-[#c4a24e]/30 transition">
                <span className="text-[#c4a24e] text-xl font-bold">✓</span>
                <span className="text-[#c8c5bc] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-[#0b0e18]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-center text-[#c4a24e] mb-12">LLC vs. S-Corp for Small Business</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-[#0f1222] rounded-xl p-6 border border-[#c4a24e]/10">
                <h3 className="text-[#f0ede6] font-medium mb-3">{item.question}</h3>
                <p className="text-[#c8c5bc] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 bg-[#06080e]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[#f0ede6] mb-6">
            Discover If an S-Corp Is Right For You
          </h2>
          <p className="text-[#c8c5bc] mb-6 text-lg leading-relaxed">
            We help business owners determine if an S-Corp is right, and how it impacts your overall tax reduction planning.
          </p>
          <p className="text-[#7a7870] mb-10">
            We will help you set up the S-Corp, manage it and maximize its tax reduction abilities.
          </p>
          <a 
            href="https://calendly.com/pricelesscpa/intro" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-12 py-5 inline-flex items-center gap-2"
          >
            Book Your Free Analysis
            <span className="text-xl">→</span>
          </a>
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
