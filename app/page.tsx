'use client'

import Image from 'next/image'
import Link from 'next/link'

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
    image: 'https://pricelesscpa.com/wp-content/uploads/2025/07/Crypto-accounting-advising.webp'
  },
  { 
    title: 'Tax Strategy & Mitigation Planning', 
    href: '/tax-strategy',
    image: 'https://pricelesscpa.com/wp-content/uploads/2025/07/Tax-Strategy-Mitigation-Planning.webp'
  },
  { 
    title: 'Business Accounting Services', 
    href: '/business-accounting',
    image: 'https://pricelesscpa.com/wp-content/uploads/2025/07/Business-accounting-services.webp'
  },
  { 
    title: 'Tax Preparation', 
    href: '/tax-preparation',
    image: 'https://pricelesscpa.com/wp-content/uploads/2025/07/Tax-Preparation.webp'
  },
]

const testimonials = [
  { name: 'Mike Grumble', rating: 5, text: 'I had the pleasure of working with Anthony as my CPA, and I couldn\'t be happier with his services. He went above and beyond to assist me in reconciling my crypto transactions and filing both my business and personal taxes. His extensive knowledge and down-to-earth, personable approach are truly one of a kind.' },
  { name: 'Owen Focke', rating: 5, text: 'Have had the pleasure of working with Anthony for the past two years. My books and everything were an absolute mess, and I was worried nobody would be able to help clean everything up. That\'s when I met Anthony and everything changed. He made it a personal mission to clean up years of books and get everything squared away. He\'s a real superstar.' },
  { name: 'Dianna Cochrane', rating: 5, text: 'Mr. Price is incredibly knowledgeable in his field! He is an excellent communicator and clearly explains complicated concepts. With my husband being military my taxes can be a bit tricky, and Mr. Price navigates it without a hitch. He has made tax season stress free.' },
  { name: 'Madison Radke', rating: 5, text: 'There is no software or system that matches having real, personal help with taxes. Anthony cares about what he does and who he does it for. He\'s made our tax seasons stress-free, as he is easy to communicate with, very responsive, and exceptional at his work.' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Bold Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b-2 border-[#ff6b35]/20" role="navigation">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
              alt="Priceless CPA" 
              width={50} 
              height={50}
              className="rounded-xl"
              priority
            />
            <span className="font-display text-xl text-[#ff6b35] uppercase tracking-tight hidden sm:block">Priceless</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/blog" className="text-[#b0b0b0] hover:text-[#ff6b35] transition text-sm font-bold uppercase hidden md:block">Blog</Link>
            <div className="relative group hidden md:block">
              <button className="text-[#b0b0b0] hover:text-[#ff6b35] transition text-sm font-bold uppercase">Services</button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-[#1a1a1a] rounded-xl border-2 border-[#ff6b35]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-2xl">
                {services.map((service) => (
                  <Link key={service.href} href={service.href} className="block px-5 py-4 text-[#b0b0b0] hover:text-[#ff6b35] hover:bg-[#222222] transition text-sm font-medium first:rounded-t-xl last:rounded-b-xl">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/s-corp-vs-llc" className="text-[#b0b0b0] hover:text-[#ff6b35] transition text-sm font-bold uppercase hidden md:block">S-Corp</Link>
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="bg-[#ff6b35] text-[#0a0a0a] px-6 py-3 rounded-full font-bold hover:bg-[#ff8c5a] transition text-sm uppercase">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Bold and Direct */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          <p className="text-[#ff6b35] text-sm font-bold uppercase tracking-widest mb-8">Stop Leaving Money on the Table</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-[0.95] tracking-tight text-white uppercase">
            Your Taxes Are<br />
            <span className="text-[#ff6b35]">Costing You</span><br />
            Too Much
          </h1>
          <p className="text-[#b0b0b0] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            We help entrepreneurs and business owners <strong className="text-white">keep more of what they earn</strong>. No BS, no complicated jargon. Just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="bg-[#ff6b35] text-[#0a0a0a] px-12 py-5 rounded-full font-bold hover:bg-[#ff8c5a] transition text-lg uppercase shadow-lg hover:shadow-[0_0_40px_rgba(255,107,53,0.4)] hover:-translate-y-1">
              Get Your Free Analysis →
            </a>
            <a href="https://wa.me/13057078959" target="_blank" rel="noopener noreferrer" className="border-2 border-[#ff6b35] text-[#ff6b35] px-12 py-5 rounded-full font-bold hover:bg-[#ff6b35] hover:text-[#0a0a0a] transition text-lg uppercase">
              Message Us
            </a>
          </div>
          <p className="text-[#666666] text-sm mt-6">No commitment. No pressure. Just a conversation.</p>
        </div>
      </section>

      {/* Why Work With Us - Bold cards */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#ff6b35] text-sm font-bold uppercase tracking-widest mb-4">What You Get</p>
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight">Why We&apos;re Different</h2>
          </div>
          <p className="text-[#b0b0b0] text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            Most CPAs just file your taxes. We <strong className="text-white">optimize your entire financial game</strong> — helping you minimize lifetime taxes, make smarter business decisions, and actually understand where your money goes.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {valueProps.map((prop, i) => (
              <div key={i} className="text-center group p-6 rounded-2xl border-2 border-white/5 hover:border-[#ff6b35]/30 transition-all hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image src={prop.icon} alt={prop.title} width={64} height={64} className="transition group-hover:scale-110" />
                </div>
                <p className="text-white text-sm font-semibold leading-relaxed">{prop.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Modern grid */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#ff6b35] text-sm font-bold uppercase tracking-widest mb-4">The Squad</p>
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight">Real People. Real Results.</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {team.map((member, i) => (
              <div key={i} className={`text-center group ${member.featured ? 'order-first lg:order-none' : ''}`}>
                <div className={`relative mx-auto mb-4 rounded-2xl overflow-hidden border-2 transition-all hover:-translate-y-2 ${member.featured ? 'w-44 h-44 border-[#ff6b35] shadow-[0_0_30px_rgba(255,107,53,0.3)]' : 'w-36 h-36 border-white/10 group-hover:border-[#ff6b35]'}`}>
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="176px" />
                </div>
                <h3 className="text-white font-bold">{member.name}</h3>
                <p className="text-[#ff6b35] text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
          
          {/* CTA Box - Bold orange */}
          <div className="mt-20 bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] rounded-3xl p-10 md:p-14 text-center max-w-2xl mx-auto shadow-[0_0_60px_rgba(255,107,53,0.3)]">
            <h3 className="font-display text-3xl md:text-4xl text-[#0a0a0a] mb-4 uppercase">
              Ready to Keep<br />More of Your Money?
            </h3>
            <p className="text-[#0a0a0a]/70 mb-8 text-lg">Free tax analysis. No strings attached. Let&apos;s see what we can do for you.</p>
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="bg-[#0a0a0a] text-white px-10 py-4 rounded-full font-bold hover:bg-[#1a1a1a] transition text-lg inline-block uppercase">
              Book Your Call →
            </a>
          </div>
        </div>
      </section>

      {/* Statement - Bold quote */}
      <section className="py-16 px-6 bg-[#111111] border-y-2 border-[#ff6b35]/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white text-2xl md:text-3xl font-display uppercase tracking-tight leading-tight">
            &ldquo;We don&apos;t just file taxes. We <span className="text-[#ff6b35]">save you money</span> and help you <span className="text-[#ff6b35]">make smarter moves</span>.&rdquo;
          </p>
        </div>
      </section>

      {/* Services Section - Bold hover cards */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#ff6b35] text-sm font-bold uppercase tracking-widest mb-4">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <Link 
                key={i} 
                href={service.href} 
                className="relative rounded-2xl h-72 flex items-end p-8 group overflow-hidden border-2 border-white/5 hover:border-[#ff6b35]/50 transition-all"
              >
                <div className="absolute inset-0">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent group-hover:from-[#ff6b35]/90 group-hover:via-[#0a0a0a]/40 transition-all duration-500"></div>
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-2xl text-white uppercase group-hover:text-[#0a0a0a] transition">{service.title}</h3>
                  <p className="text-[#b0b0b0] mt-2 group-hover:text-[#0a0a0a]/80 transition font-semibold">See how we can help →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Dark cards with orange accents */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#ff6b35] text-sm font-bold uppercase tracking-widest mb-4">Don&apos;t Take Our Word For It</p>
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight">Real Client Results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-[#1a1a1a] border-2 border-white/5 hover:border-[#ff6b35]/30 rounded-2xl p-8 relative transition-all hover:-translate-y-1">
                <div className="absolute top-4 left-6 text-6xl text-[#ff6b35]/20 font-display">&ldquo;</div>
                <div className="text-[#ff6b35] text-xl mb-4 tracking-wider">{'★'.repeat(testimonial.rating)}</div>
                <p className="text-[#b0b0b0] mb-6 leading-relaxed relative z-10">{testimonial.text}</p>
                <p className="text-white font-bold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Dark with orange accent */}
      <footer className="py-16 px-6 bg-[#0a0a0a] border-t-2 border-[#ff6b35]/20">
        <div className="max-w-6xl mx-auto text-center">
          <Image 
            src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
            alt="Priceless CPA" 
            width={60} 
            height={60}
            className="mx-auto mb-6 rounded-xl"
          />
          <p className="text-[#666666] text-sm mb-6">© {new Date().getFullYear()} Priceless CPA. All rights reserved.</p>
          <nav className="flex justify-center gap-8">
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="text-[#ff6b35] hover:text-[#ff8c5a] transition text-sm font-bold uppercase">
              Book a Call
            </a>
            <a href="https://wa.me/13057078959" target="_blank" rel="noopener noreferrer" className="text-[#ff6b35] hover:text-[#ff8c5a] transition text-sm font-bold uppercase">
              WhatsApp
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
