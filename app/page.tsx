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
    <main className="min-h-screen bg-white">
      {/* Navigation - Light corporate style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#002F6C]/10" role="navigation">
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
            <span className="font-display text-xl text-[#002F6C] hidden sm:block">Priceless CPA</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/blog" className="text-[#4a4a5a] hover:text-[#002F6C] transition text-sm font-medium hidden md:block">BLOG</Link>
            <div className="relative group hidden md:block">
              <button className="text-[#4a4a5a] hover:text-[#002F6C] transition text-sm font-medium">SERVICES</button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg border border-[#002F6C]/15 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl">
                {services.map((service) => (
                  <Link key={service.href} href={service.href} className="block px-5 py-3 text-[#4a4a5a] hover:text-[#002F6C] hover:bg-[#f7f8fa] transition text-sm first:rounded-t-lg last:rounded-b-lg">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/s-corp-vs-llc" className="text-[#4a4a5a] hover:text-[#002F6C] transition text-sm font-medium hidden md:block">S-CORP VS. LLC</Link>
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="bg-[#002F6C] text-white px-6 py-2.5 rounded font-semibold hover:bg-[#1a4a8a] transition text-sm">
              Schedule Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Corporate Light with Subtle Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f7f8fa] to-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23002F6C\" fill-opacity=\"0.15\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#002F6C] text-sm font-semibold uppercase tracking-wider mb-6">Trusted Financial Partners</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-[#1a1a2e]">
            Expert Financial Guidance<br />
            <span className="text-[#002F6C]">For Growing Businesses</span>
          </h1>
          <p className="text-[#4a4a5a] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            We provide comprehensive accounting, tax strategy, and business advisory services to help you scale with confidence and clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="bg-[#002F6C] text-white px-10 py-4 rounded font-semibold hover:bg-[#1a4a8a] transition text-lg shadow-lg hover:shadow-xl">
              Schedule a Consultation
            </a>
            <a href="https://wa.me/13057078959" target="_blank" rel="noopener noreferrer" className="border-2 border-[#002F6C] text-[#002F6C] px-10 py-4 rounded font-semibold hover:bg-[#002F6C] hover:text-white transition text-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us - Clean corporate cards */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#002F6C] text-sm font-semibold uppercase tracking-wider mb-4">Our Commitment</p>
            <h2 className="font-display text-3xl md:text-4xl text-[#1a1a2e]">Why Clients Trust Us</h2>
          </div>
          <p className="text-[#4a4a5a] text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            We provide successful entrepreneurs value-driven accounting solutions to minimize lifetime taxes, optimize business decisions with data, while saving time and money on their accounting and operational costs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {valueProps.map((prop, i) => (
              <div key={i} className="text-center group p-6 rounded-lg hover:bg-[#f7f8fa] transition">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image src={prop.icon} alt={prop.title} width={64} height={64} className="transition group-hover:scale-110" />
                </div>
                <div className="h-px bg-[#002F6C]/15 mb-4"></div>
                <p className="text-[#1a1a2e] text-sm font-medium leading-relaxed">{prop.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Professional headshots with navy overlay */}
      <section className="py-24 px-6 bg-[#f7f8fa]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#002F6C] text-sm font-semibold uppercase tracking-wider mb-4">Our Team</p>
            <h2 className="font-display text-3xl md:text-4xl text-[#1a1a2e]">Meet Our Professionals</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {team.map((member, i) => (
              <div key={i} className={`text-center group ${member.featured ? 'order-first lg:order-none' : ''}`}>
                <div className={`relative mx-auto mb-4 rounded-lg overflow-hidden border-2 transition shadow-lg ${member.featured ? 'w-40 h-40 border-[#002F6C]' : 'w-32 h-32 border-[#002F6C]/20 group-hover:border-[#002F6C]'}`}>
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="160px" />
                </div>
                <h3 className="text-[#1a1a2e] font-semibold">{member.name}</h3>
                <p className="text-[#002F6C] text-sm">{member.role}</p>
              </div>
            ))}
          </div>
          
          {/* CTA Box - Navy background */}
          <div className="mt-20 bg-[#002F6C] rounded-lg p-10 md:p-14 text-center max-w-2xl mx-auto shadow-xl">
            <Image 
              src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo2.webp" 
              alt="Priceless CPA Logo" 
              width={80} 
              height={80}
              className="mx-auto mb-8 rounded-xl bg-white p-2"
            />
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
              Schedule Your Complimentary<br />Tax Analysis
            </h3>
            <p className="text-white/80 mb-8">Let our experts develop a comprehensive strategy tailored to your business needs</p>
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="bg-white text-[#002F6C] px-10 py-4 rounded font-semibold hover:bg-[#f7f8fa] transition text-lg inline-block">
              Request Consultation
            </a>
          </div>
        </div>
      </section>

      {/* CPA Standard Statement */}
      <section className="py-12 px-6 bg-white border-y border-[#002F6C]/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#4a4a5a] text-lg italic leading-relaxed">
            &ldquo;Priceless has a commitment to always provide the highest CPA standard, of empowering the client with accurate information and circumstantial advice.&rdquo;
          </p>
        </div>
      </section>

      {/* Services Section - Clean cards with subtle shadows */}
      <section className="py-24 px-6 bg-[#f7f8fa]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#002F6C] text-sm font-semibold uppercase tracking-wider mb-4">What We Offer</p>
            <h2 className="font-display text-3xl md:text-4xl text-[#1a1a2e]">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <Link 
                key={i} 
                href={service.href} 
                className="relative rounded-lg h-64 flex items-end p-8 group overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="absolute inset-0">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002F6C]/90 to-[#002F6C]/30 group-hover:from-[#002F6C]/80 group-hover:to-[#002F6C]/20 transition-all"></div>
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-2xl text-white">{service.title}</h3>
                  <p className="text-white/80 mt-2 group-hover:text-white transition">Learn more →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Light cards with navy accents */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#002F6C] text-sm font-semibold uppercase tracking-wider mb-4">Client Success</p>
            <h2 className="font-display text-3xl md:text-4xl text-[#1a1a2e]">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-[#f7f8fa] border border-[#002F6C]/10 rounded-lg p-8 relative hover:shadow-lg transition">
                <div className="absolute top-4 left-6 text-6xl text-[#002F6C]/10 font-display">&ldquo;</div>
                <div className="text-[#002F6C] text-lg mb-4 tracking-wider">{'★'.repeat(testimonial.rating)}</div>
                <p className="text-[#4a4a5a] mb-6 leading-relaxed relative z-10">{testimonial.text}</p>
                <p className="text-[#002F6C] font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Clean professional */}
      <footer className="py-16 px-6 bg-[#002F6C]">
        <div className="max-w-6xl mx-auto text-center">
          <Image 
            src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
            alt="Priceless CPA" 
            width={60} 
            height={60}
            className="mx-auto mb-6 rounded-lg bg-white p-1"
          />
          <p className="text-white/60 text-sm mb-6">© {new Date().getFullYear()} Priceless CPA. All rights reserved.</p>
          <nav className="flex justify-center gap-8">
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition text-sm">
              Schedule Consultation
            </a>
            <a href="https://wa.me/13057078959" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition text-sm">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
