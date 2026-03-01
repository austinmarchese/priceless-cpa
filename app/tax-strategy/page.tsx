'use client'

import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { value: 'CPA', label: 'Licensed' },
  { value: '60+', label: 'Clients Served' },
  { value: '24hr', label: 'Slack Response' },
  { value: 'Year-Round', label: 'Strategy' },
  { value: '5+', label: 'Figure Savings' },
]

export default function TaxStrategy() {
  return (
    <main className="min-h-screen bg-[#06080e]">
      {/* Minimal Header */}
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

      {/* Hero — Simple Headline */}
      <section className="px-6 py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#f0ede6] leading-tight mb-8">
            How Business Owners Are{' '}
            <span className="text-[#c4a24e]">Legally Taking Back Thousands</span>{' '}
            From the IRS
          </h1>
          <a 
            href="https://calendly.com/pricelesscpa/intro" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-10 py-4 inline-block"
          >
            Book Your Free Strategy Call
          </a>
        </div>
      </section>

      {/* Anthony's Story — The Core of the Page */}
      <section className="px-6 py-16 bg-[#0b0e18]">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Photo */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-[#c4a24e]/30">
                <Image 
                  src="https://pricelesscpa.com/wp-content/uploads/2025/08/Anthony-300x300.webp" 
                  alt="Anthony Price, CPA" 
                  fill 
                  className="object-cover"
                  sizes="192px"
                />
              </div>
            </div>
            
            {/* Bio */}
            <div className="flex-1">
              <p className="text-[#c8c5bc] mb-6 leading-relaxed text-lg">
                <strong className="text-[#f0ede6]">Anthony Price</strong> is a CPA, tax strategist, and founder of Priceless CPA. He has dedicated his life to help business owners stop overpaying taxes and finally get control of their finances.
              </p>
              <p className="text-[#c8c5bc] mb-6 leading-relaxed">
                He studied Accounting and Finance at the University of Nevada, Reno and worked in public accounting before launching his own firm. Since then, he&apos;s helped 60+ business owners clean up their books, save 5+ figures in taxes annually, and actually understand their numbers.
              </p>
              <blockquote className="border-l-4 border-[#c4a24e] pl-6 my-8">
                <p className="text-[#c8c5bc] italic text-lg leading-relaxed">
                  &ldquo;I was tired of seeing entrepreneurs get burned by accountants who only show up once a year. No strategy. No guidance. Just a tax bill and a &apos;see you next year.&apos;&rdquo;
                </p>
              </blockquote>
              <p className="text-[#c8c5bc] leading-relaxed">
                He built this firm to be the opposite — <strong className="text-[#f0ede6]">a year-round partner who actually gives a damn.</strong>
              </p>
              <p className="text-[#c8c5bc] mt-6 leading-relaxed">
                When you work with Priceless CPA, you&apos;re not handed off to a junior associate or an outsourced team. You work directly with Anthony and his team of 5 dedicated experts, with 24-hour Slack access, quarterly strategy calls, and a real plan for your money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 py-12 bg-[#06080e]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-[#c4a24e] font-display text-2xl md:text-3xl">{stat.value}</div>
                <div className="text-[#7a7870] text-sm tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-[#0b0e18]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl text-[#f0ede6] mb-6">
            Ready to Stop Overpaying?
          </h2>
          <p className="text-[#c8c5bc] mb-8">
            Book a free strategy call and see how much you could save.
          </p>
          <a 
            href="https://calendly.com/pricelesscpa/intro" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-10 py-4 inline-block"
          >
            Book Your Free Call
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
