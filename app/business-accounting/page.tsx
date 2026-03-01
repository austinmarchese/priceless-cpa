'use client'

import Image from 'next/image'
import Link from 'next/link'

const benefits = [
  'Accurate and timely bookkeeping and financial reporting',
  'Efficient and compliant payroll processing',
  'Strategic tax planning and preparation to minimize liabilities',
  'Monthly financial statements and cash flow analysis',
  'Dedicated account manager for your business',
]

const whoIsFor = [
  'Growing businesses needing reliable bookkeeping',
  'Companies with payroll and employee management',
  'Entrepreneurs wanting real-time financial visibility',
  'Business owners focused on scaling, not spreadsheets',
]

const stats = [
  { value: 'CPA', label: 'Licensed' },
  { value: '60+', label: 'Businesses Served' },
  { value: '24hr', label: 'Slack Response' },
  { value: '99%', label: 'Accuracy Rate' },
]

export default function BusinessAccounting() {
  return (
    <main className="min-h-screen bg-[#06080e]">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#0b0e18] via-[#c4a24e]/5 to-[#0b0e18] border-b border-[#c4a24e]/10 py-3 px-4">
        <div className="flex items-center justify-center gap-3 text-xs tracking-wider uppercase text-[#7a7870]">
          <span className="w-2 h-2 bg-[#c4a24e] rounded-full animate-pulse-glow"></span>
          <span>Payroll + Bookkeeping + Taxes — <strong className="text-[#c4a24e]">All in one place</strong></span>
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
            Business Accounting Services
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#f0ede6] leading-tight mb-8 animate-fade-up" style={{animationDelay: '0.1s'}}>
            Comprehensive Accounting{' '}
            <span className="text-[#c4a24e]">To Drive Your Growth</span>
          </h1>
          <p className="text-[#c8c5bc] text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{animationDelay: '0.2s'}}>
            We offer comprehensive business accounting services, ensuring accuracy, compliance, and strategic insights to drive your business&apos;s financial health and growth.
          </p>
          <a 
            href="https://calendly.com/pricelesscpa/intro" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-12 py-5 animate-fade-up inline-flex items-center gap-2"
            style={{animationDelay: '0.3s'}}
          >
            Start With a Free Consultation
            <span className="text-xl">→</span>
          </a>
        </div>
      </section>

      {/* Benefits + Who It's For */}
      <section className="px-6 py-20 bg-[#0b0e18]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-center text-[#c4a24e] mb-12">What&apos;s Included</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 bg-[#0f1222] rounded-lg p-5 border border-[#c4a24e]/10 hover:border-[#c4a24e]/30 transition">
                  <span className="text-[#c4a24e] text-xl font-bold">✓</span>
                  <span className="text-[#c8c5bc] leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
            
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

      {/* How We Work */}
      <section className="px-6 py-20 bg-[#06080e]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-center text-[#c4a24e] mb-4">How We Work</h2>
          <p className="text-center text-[#7a7870] mb-12">Our process is designed to be friendly, nimble, and transparent</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Onboarding Process', desc: 'We understand your business needs' },
              { num: '02', title: 'Efficient Payroll', desc: 'Processing and management' },
              { num: '03', title: 'Regular Bookkeeping', desc: 'Financial reporting monthly' },
              { num: '04', title: 'Strategic Tax Planning', desc: 'Preparation sessions quarterly' },
            ].map((step, i) => (
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
      <section className="px-6 py-24 bg-[#06080e]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[#f0ede6] mb-6">
            Ready to Streamline Your Finances?
          </h2>
          <p className="text-[#c8c5bc] mb-10 text-lg leading-relaxed">
            Let us handle the books so you can focus on growing your business.
          </p>
          <a 
            href="https://calendly.com/pricelesscpa/intro" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-12 py-5 inline-flex items-center gap-2"
          >
            Book Your Free Consultation
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
