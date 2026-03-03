'use client'

import Image from 'next/image'
import Link from 'next/link'

// Using actual icons from pricelesscpa.com
const valueProps = [
  { icon: 'https://pricelesscpa.com/wp-content/uploads/2025/07/Priceless_CPA_Icon1.webp', title: 'Comprehensive accounting services' },
  { icon: 'https://pricelesscpa.com/wp-content/uploads/2025/07/Priceless_CPA_Icon2.webp', title: 'Tailored tax advice' },
  { icon: 'https://pricelesscpa.com/wp-content/uploads/2025/07/Priceless_CPA_Icon3.webp', title: 'Long term relationships' },
  { icon: 'https://pricelesscpa.com/wp-content/uploads/2025/07/Priceless_CPA_Icon4.webp', title: 'Responsive communication' },
  { icon: 'https://pricelesscpa.com/wp-content/uploads/2025/07/Priceless_CPA_Icon5.webp', title: 'Ethical and confidential' },
]

const team = [
  { name: 'Jeffrey Carpenter', role: 'Senior Accountant', image: 'https://pricelesscpa.com/wp-content/uploads/2025/08/Jeff-300x300.webp' },
  { name: 'Billy Henriquez', role: 'CPA & Senior Accountant', image: 'https://pricelesscpa.com/wp-content/uploads/2025/08/IMG_8824-2-300x295.png' },
  { name: 'Anthony Price', role: 'CEO & Founder, CPA', image: 'https://pricelesscpa.com/wp-content/uploads/2025/08/Anthony-300x300.webp', featured: true },
  { name: 'Matthew Deepe', role: 'Tax Director, Licensed CPA', image: 'https://pricelesscpa.com/wp-content/uploads/2025/08/Matt-300x300.webp' },
  { name: 'Natalia Shanko', role: 'Accounting Manager', image: 'https://pricelesscpa.com/wp-content/uploads/2025/08/Natalie-300x300.webp' },
]

const services = [
  { 
    title: 'Crypto Accounting & Advising', 
    href: '/crypto-accounting',
    image: 'https://pricelesscpa.com/wp-content/uploads/2025/07/Crypto-accounting-advising.webp',
    description: 'Expert guidance for digital asset taxation and compliance'
  },
  { 
    title: 'Tax Strategy & Mitigation Planning', 
    href: '/tax-strategy',
    image: 'https://pricelesscpa.com/wp-content/uploads/2025/07/Tax-Strategy-Mitigation-Planning.webp',
    description: 'Proactive strategies to minimize your tax burden'
  },
  { 
    title: 'Business Accounting Services', 
    href: '/business-accounting',
    image: 'https://pricelesscpa.com/wp-content/uploads/2025/07/Business-accounting-services.webp',
    description: 'Full-service bookkeeping and financial management'
  },
  { 
    title: 'Tax Preparation', 
    href: '/tax-preparation',
    image: 'https://pricelesscpa.com/wp-content/uploads/2025/07/Tax-Preparation.webp',
    description: 'Accurate, timely filing for individuals and businesses'
  },
]

const painPoints = [
  "Where'd all my money go?",
  "Another tax season surprise!",
  "Spreadsheets everywhere...",
  "I need a CFO but can't afford one",
  "Am I paying too much in taxes?",
  "No time to figure this out",
]

const solutions = [
  "Real-time financial clarity",
  "Year-round tax strategy",
  "Streamlined, organized systems",
  "Expert guidance at a fraction of the cost",
  "Proactive tax minimization",
  "We handle it so you don't have to",
]

const stats = [
  { number: '500+', label: 'Clients Served' },
  { number: '98%', label: 'Client Retention' },
  { number: '$2.5M+', label: 'Taxes Saved' },
  { number: '5+', label: 'Years Avg Partnership' },
]

const testimonials = [
  { name: 'Mike Grumble', rating: 5, text: 'I had the pleasure of working with Anthony as my CPA, and I couldn\'t be happier with his services. He went above and beyond to assist me in reconciling my crypto transactions and filing both my business and personal taxes. His extensive knowledge and down-to-earth, personable approach are truly one of a kind.' },
  { name: 'Owen Focke', rating: 5, text: 'Have had the pleasure of working with Anthony for the past two years. My books and everything were an absolute mess, and I was worried nobody would be able to help clean everything up. That\'s when I met Anthony and everything changed. He made it a personal mission to clean up years of books and get everything squared away. He\'s a real superstar.' },
  { name: 'Dianna Cochrane', rating: 5, text: 'Mr. Price is incredibly knowledgeable in his field! He is an excellent communicator and clearly explains complicated concepts. With my husband being military my taxes can be a bit tricky, and Mr. Price navigates it without a hitch. He has made tax season stress free.' },
  { name: 'Madison Radke', rating: 5, text: 'There is no software or system that matches having real, personal help with taxes. Anthony cares about what he does and who he does it for. He\'s made our tax seasons stress-free, as he is easy to communicate with, very responsive, and exceptional at his work.' },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06080e]/95 backdrop-blur-md border-b border-[#c4a24e]/10" role="navigation">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
              alt="Priceless CPA" 
              width={50} 
              height={50}
              className="rounded-lg"
              priority
            />
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/blog" className="text-[#c8c5bc] hover:text-[#c4a24e] transition text-sm font-medium hidden md:block">BLOG</Link>
            <div className="relative group hidden md:block">
              <button className="text-[#c8c5bc] hover:text-[#c4a24e] transition text-sm font-medium">SERVICES</button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-[#0f1222] rounded-lg border border-[#c4a24e]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-2xl">
                {services.map((service) => (
                  <Link key={service.href} href={service.href} className="block px-5 py-3 text-[#c8c5bc] hover:text-[#c4a24e] hover:bg-[#141830] transition text-sm first:rounded-t-lg last:rounded-b-lg">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/s-corp-vs-llc" className="text-[#c8c5bc] hover:text-[#c4a24e] transition text-sm font-medium hidden md:block">RESOURCES</Link>
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-2.5 text-sm">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-[#06080e] via-[#0b0e18] to-[#06080e]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c4a24e] text-sm font-semibold tracking-widest mb-6">PRICELESS CPA</p>
          <h1 className="font-display text-4xl md:text-6xl text-[#f0ede6] leading-tight mb-6">
            Save Thousands on Taxes<br />
            <span className="text-[#c4a24e]">Legally & Organically</span>
          </h1>
          <p className="text-[#c8c5bc] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            We handle your finances so you can focus on what you do best — growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4">
              Book a Call
            </a>
            <a href="https://wa.me/13057078959" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-10 py-4">
              Chat with me
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 bg-[#c4a24e]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#06080e] mb-1">{stat.number}</div>
                <div className="text-[#06080e]/70 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Priceless Formula - Pain Points vs Solutions */}
      <section className="py-24 px-6 bg-[#0b0e18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-[#c4a24e] mb-4">The Priceless Formula</h2>
            <p className="text-[#c8c5bc] text-lg">
              <span className="text-[#c4a24e] font-semibold">Expert Team</span> + 
              <span className="text-[#c4a24e] font-semibold"> Smart Systems</span> + 
              <span className="text-[#c4a24e] font-semibold"> Personal Service</span> = 
              <span className="text-[#f0ede6] font-bold"> Peace of Mind</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pain Points */}
            <div className="bg-[#1a0a0a] border border-red-900/30 rounded-2xl p-8">
              <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wide mb-6">Business Owner Frustrations</h3>
              <div className="space-y-4">
                {painPoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#c8c5bc]">
                    <span className="text-red-400">✗</span>
                    <span>"{point}"</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="bg-[#0a1a10] border border-[#c4a24e]/30 rounded-2xl p-8">
              <h3 className="text-sm font-semibold text-[#c4a24e] uppercase tracking-wide mb-6">The Priceless Solution</h3>
              <div className="space-y-4">
                {solutions.map((solution, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#c8c5bc]">
                    <span className="text-[#c4a24e]">✓</span>
                    <span>{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 px-6 bg-[#06080e]">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider">
            <h2 className="font-display text-3xl md:text-4xl text-[#c4a24e] whitespace-nowrap">Why work with us?</h2>
          </div>
          <p className="text-[#c8c5bc] text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            We provide successful entrepreneurs value-driven accounting solutions to minimize lifetime taxes, optimize business decisions with data, while saving time and money on their accounting and operational costs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {valueProps.map((prop, i) => (
              <div key={i} className="text-center group">
                <div className="icon-container mb-4">
                  <Image src={prop.icon} alt={prop.title} width={80} height={80} className="transition group-hover:scale-110" />
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#c4a24e]/40 to-transparent mb-4"></div>
                <p className="text-[#f0ede6] text-sm font-medium leading-relaxed">{prop.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-[#0b0e18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-[#c4a24e] mb-4">End-to-End Financial Services</h2>
            <p className="text-[#c8c5bc] text-lg">All in one place. Tailored to your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <Link 
                key={i} 
                href={service.href} 
                className="bg-[#0f1222] border border-[#c4a24e]/10 rounded-xl p-6 hover:border-[#c4a24e]/40 transition group"
              >
                <div className="flex gap-5">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={service.image} alt={service.title} width={80} height={80} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#f0ede6] group-hover:text-[#c4a24e] transition mb-2">{service.title}</h3>
                    <p className="text-[#c8c5bc] text-sm leading-relaxed">{service.description}</p>
                    <p className="text-[#c4a24e] text-sm mt-3 group-hover:translate-x-1 transition-transform">Learn more →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-[#06080e]">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider">
            <h2 className="font-display text-3xl md:text-4xl text-[#c4a24e] whitespace-nowrap">Who WE ARE?</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {team.map((member, i) => (
              <div key={i} className={`text-center group ${member.featured ? 'order-first lg:order-none' : ''}`}>
                <div className={`relative mx-auto mb-4 rounded-full overflow-hidden border-2 transition ${member.featured ? 'w-40 h-40 border-[#c4a24e]' : 'w-32 h-32 border-[#c4a24e]/20 group-hover:border-[#c4a24e]'}`}>
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="160px" />
                </div>
                <h3 className="text-[#f0ede6] font-semibold">{member.name}</h3>
                <p className="text-[#c4a24e] text-sm">{member.role}</p>
              </div>
            ))}
          </div>
          
          {/* CTA Box */}
          <div className="mt-20 bg-[#0f1222] rounded-2xl p-10 md:p-14 border border-[#c4a24e]/20 text-center max-w-2xl mx-auto">
            <Image 
              src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo2.webp" 
              alt="Priceless CPA Logo" 
              width={100} 
              height={100}
              className="mx-auto mb-8 rounded-xl"
            />
            <h3 className="font-display text-2xl md:text-3xl text-[#f0ede6] mb-4">
              Schedule your tax<br />Analysis for free
            </h3>
            <p className="text-[#c8c5bc] mb-8">Let&apos;s build an accurate strategy to optimize your money income</p>
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4">
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#0b0e18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-[#c4a24e] mb-4">What Clients Say</h2>
            <p className="text-[#c8c5bc]">Real results from real business owners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div className="star-rating text-lg mb-4">{'★'.repeat(testimonial.rating)}</div>
                <p className="text-[#c8c5bc] mb-6 leading-relaxed relative z-10">{testimonial.text}</p>
                <p className="text-[#c4a24e] font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#06080e]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[#f0ede6] mb-4">Ready to simplify your finances?</h2>
          <p className="text-[#c8c5bc] text-lg mb-10">Schedule a free consultation to see how we can help your business grow.</p>
          <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4">
            Schedule a Call →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#06080e] border-t border-[#c4a24e]/10">
        <div className="max-w-6xl mx-auto text-center">
          <Image 
            src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
            alt="Priceless CPA" 
            width={60} 
            height={60}
            className="mx-auto mb-6 rounded-lg"
          />
          <p className="text-[#7a7870] text-sm mb-6">© {new Date().getFullYear()} Priceless CPA. All rights reserved.</p>
          <nav className="flex justify-center gap-8">
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="text-[#c4a24e] hover:text-[#dfc06a] transition text-sm">
              Book a Call
            </a>
            <a href="https://wa.me/13057078959" target="_blank" rel="noopener noreferrer" className="text-[#c4a24e] hover:text-[#dfc06a] transition text-sm">
              WhatsApp
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
