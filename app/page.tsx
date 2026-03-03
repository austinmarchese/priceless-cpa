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

const testimonials = [
  { name: 'Mike Grumble', rating: 5, text: 'I had the pleasure of working with Anthony as my CPA, and I couldn\'t be happier with his services. He went above and beyond to assist me in reconciling my crypto transactions and filing both my business and personal taxes. His extensive knowledge and down-to-earth, personable approach are truly one of a kind.' },
  { name: 'Owen Focke', rating: 5, text: 'Have had the pleasure of working with Anthony for the past two years. My books and everything were an absolute mess, and I was worried nobody would be able to help clean everything up. That\'s when I met Anthony and everything changed. He made it a personal mission to clean up years of books and get everything squared away. He\'s a real superstar.' },
  { name: 'Dianna Cochrane', rating: 5, text: 'Mr. Price is incredibly knowledgeable in his field! He is an excellent communicator and clearly explains complicated concepts. With my husband being military my taxes can be a bit tricky, and Mr. Price navigates it without a hitch. He has made tax season stress free.' },
  { name: 'Madison Radke', rating: 5, text: 'There is no software or system that matches having real, personal help with taxes. Anthony cares about what he does and who he does it for. He\'s made our tax seasons stress-free, as he is easy to communicate with, very responsive, and exceptional at his work.' },
]

const stats = [
  { number: '500+', label: 'Clients Served' },
  { number: '98%', label: 'Client Retention' },
  { number: '$2.5M+', label: 'Taxes Saved' },
  { number: '4.9', label: 'Average Rating' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Clean SaaS Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0]" role="navigation">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
              alt="Priceless CPA" 
              width={44} 
              height={44}
              className="rounded-xl"
              priority
            />
            <span className="font-display text-lg text-[#0f172a] hidden sm:block">Priceless CPA</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/blog" className="text-[#475569] hover:text-[#0d9488] transition text-sm font-medium hidden md:block">Blog</Link>
            <div className="relative group hidden md:block">
              <button className="text-[#475569] hover:text-[#0d9488] transition text-sm font-medium">Services</button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl border border-[#e2e8f0] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg">
                {services.map((service) => (
                  <Link key={service.href} href={service.href} className="block px-5 py-3 text-[#475569] hover:text-[#0d9488] hover:bg-[#f8fafb] transition text-sm first:rounded-t-xl last:rounded-b-xl">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/s-corp-vs-llc" className="text-[#475569] hover:text-[#0d9488] transition text-sm font-medium hidden md:block">Resources</Link>
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="bg-[#0d9488] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#0f766e] transition text-sm">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Bright and Friendly */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8fafb] to-white pt-20">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#0d9488]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-[#0d9488]/5 rounded-full blur-3xl"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-full px-4 py-2 mb-8 shadow-sm">
            <span className="text-[#10b981] text-sm">★★★★★</span>
            <span className="text-[#475569] text-sm">Trusted by 500+ businesses</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-[#0f172a] tracking-tight">
            Accounting that helps you<br />
            <span className="text-[#0d9488]">grow with confidence</span>
          </h1>
          <p className="text-[#475569] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From tax strategy to daily bookkeeping, we handle your finances so you can focus on building your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="bg-[#0d9488] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0f766e] transition text-lg shadow-lg shadow-[#0d9488]/20 hover:shadow-xl hover:shadow-[#0d9488]/30 hover:-translate-y-0.5">
              Start Free Consultation →
            </a>
            <a href="https://wa.me/13057078959" target="_blank" rel="noopener noreferrer" className="border border-[#e2e8f0] text-[#475569] px-8 py-4 rounded-xl font-semibold hover:border-[#0d9488] hover:text-[#0d9488] transition text-lg bg-white">
              Chat with Us
            </a>
          </div>
          <p className="text-[#94a3b8] text-sm mt-6">Free analysis • No commitment required</p>
        </div>
      </section>

      {/* Metrics Bar - Prominent Social Proof */}
      <section className="py-12 px-6 bg-white border-y border-[#e2e8f0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-3xl md:text-4xl text-[#0d9488] mb-1">{stat.number}</p>
                <p className="text-[#94a3b8] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us - Card-based layout */}
      <section className="py-20 px-6 bg-[#f8fafb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#0d9488] text-sm font-semibold mb-3">Why choose us</p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0f172a] tracking-tight">Built for modern businesses</h2>
          </div>
          <p className="text-[#475569] text-center max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
            We combine deep expertise with modern tools to deliver accounting services that actually help you make better decisions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {valueProps.map((prop, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#e2e8f0] p-6 text-center hover:border-[#0d9488] hover:shadow-lg transition-all group">
                <div className="w-14 h-14 mx-auto mb-4">
                  <Image src={prop.icon} alt={prop.title} width={56} height={56} className="transition group-hover:scale-110" />
                </div>
                <p className="text-[#0f172a] text-sm font-medium leading-relaxed">{prop.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Modular cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#0d9488] text-sm font-semibold mb-3">Our services</p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0f172a] tracking-tight">Everything you need</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <Link 
                key={i} 
                href={service.href} 
                className="bg-[#f8fafb] rounded-2xl p-6 flex gap-6 items-start border border-transparent hover:border-[#0d9488] hover:bg-white transition-all group"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-[#0f172a] mb-2 group-hover:text-[#0d9488] transition">{service.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed mb-3">{service.description}</p>
                  <span className="text-[#0d9488] text-sm font-medium">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Friendly layout */}
      <section className="py-20 px-6 bg-[#f8fafb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#0d9488] text-sm font-semibold mb-3">Meet the team</p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0f172a] tracking-tight">People who care about your success</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {team.map((member, i) => (
              <div key={i} className={`text-center group ${member.featured ? 'order-first lg:order-none' : ''}`}>
                <div className={`relative mx-auto mb-4 rounded-2xl overflow-hidden border-2 transition-all hover:-translate-y-1 ${member.featured ? 'w-36 h-36 border-[#0d9488] shadow-lg' : 'w-28 h-28 border-[#e2e8f0] group-hover:border-[#0d9488]'}`}>
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="144px" />
                </div>
                <h3 className="text-[#0f172a] font-semibold text-sm">{member.name}</h3>
                <p className="text-[#0d9488] text-xs">{member.role}</p>
              </div>
            ))}
          </div>
          
          {/* CTA Card */}
          <div className="mt-16 bg-gradient-to-r from-[#0d9488] to-[#14b8a6] rounded-3xl p-10 md:p-12 text-center max-w-2xl mx-auto shadow-xl">
            <h3 className="font-display text-2xl md:text-3xl text-white mb-3">
              Ready to simplify<br />your finances?
            </h3>
            <p className="text-white/80 mb-8">Get a free analysis and see how much you could save</p>
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0d9488] px-8 py-4 rounded-xl font-semibold hover:bg-[#f8fafb] transition text-lg inline-block">
              Schedule Free Call
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials - Clean cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#0d9488] text-sm font-semibold mb-3">Client success stories</p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0f172a] tracking-tight">Loved by growing businesses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-[#f8fafb] border border-[#e2e8f0] rounded-2xl p-8 hover:shadow-lg transition">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#10b981] text-lg">{'★'.repeat(testimonial.rating)}</span>
                </div>
                <p className="text-[#475569] mb-6 leading-relaxed">{testimonial.text}</p>
                <p className="text-[#0f172a] font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Clean and minimal */}
      <footer className="py-16 px-6 bg-[#f8fafb] border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto text-center">
          <Image 
            src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
            alt="Priceless CPA" 
            width={48} 
            height={48}
            className="mx-auto mb-6 rounded-xl"
          />
          <p className="text-[#94a3b8] text-sm mb-6">© {new Date().getFullYear()} Priceless CPA. All rights reserved.</p>
          <nav className="flex justify-center gap-8">
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#0d9488] transition text-sm">
              Get Started
            </a>
            <a href="https://wa.me/13057078959" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#0d9488] transition text-sm">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
