'use client'

import Image from 'next/image'
import Link from 'next/link'

const services = [
  { icon: '📊', title: 'Comprehensive accounting services', description: 'Full-service bookkeeping and financial reporting' },
  { icon: '💡', title: 'Tailored tax advice', description: 'Strategic tax planning customized for your business' },
  { icon: '🤝', title: 'Long term relationships', description: 'Year-round partnership, not just tax season' },
  { icon: '💬', title: 'Responsive communication', description: '24-hour Slack access and quick turnaround' },
  { icon: '🔒', title: 'Ethical and confidential', description: 'Your data and privacy protected always' },
]

const team = [
  { name: 'Anthony Price', role: 'CEO & Founder, CPA', image: 'https://pricelesscpa.com/wp-content/uploads/2025/08/Anthony-300x300.webp' },
  { name: 'Matthew Deepe', role: 'Tax Director, Licensed CPA', image: 'https://pricelesscpa.com/wp-content/uploads/2025/08/Matt-300x300.webp' },
  { name: 'Billy Henriquez', role: 'CPA & Senior Accountant', image: 'https://pricelesscpa.com/wp-content/uploads/2025/08/IMG_8824-2-300x295.png' },
  { name: 'Jeffrey Carpenter', role: 'Senior Accountant', image: 'https://pricelesscpa.com/wp-content/uploads/2025/08/Jeff-300x300.webp' },
  { name: 'Natalia Shanko', role: 'Accounting Manager', image: 'https://pricelesscpa.com/wp-content/uploads/2025/08/Natalie-300x300.webp' },
]

const testimonials = [
  { name: 'Mike Grumble', text: 'Anthony went above and beyond to assist me in reconciling my crypto transactions and filing both my business and personal taxes. His extensive knowledge and down-to-earth, personable approach are truly one of a kind.' },
  { name: 'Owen Focke', text: 'My books and everything were an absolute mess. Anthony made it a personal mission to clean up years of books and get everything squared away. He\'s a real superstar.' },
  { name: 'Dianna Cochrane', text: 'Mr. Price is incredibly knowledgeable in his field! With my husband being military my taxes can be tricky, and Mr. Price navigates it without a hitch. He has made tax season stress free.' },
  { name: 'Madison Radke', text: 'There is no software or system that matches having real, personal help with taxes. Anthony cares about what he does and who he does it for. He\'s made our tax seasons stress-free.' },
]

const servicePages = [
  { title: 'Crypto Accounting & Advising', href: '/crypto-accounting', description: 'Expert guidance for digital asset taxation and compliance' },
  { title: 'Tax Strategy & Mitigation Planning', href: '/tax-strategy', description: 'Proactive planning to minimize your tax burden legally' },
  { title: 'Business Accounting Services', href: '/business-accounting', description: 'Full-service bookkeeping and financial reporting' },
  { title: 'Tax Preparation', href: '/tax-preparation', description: 'Accurate and timely tax filing for individuals and businesses' },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-deep/90 backdrop-blur-md border-b border-gold/10" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Priceless CPA Home">
            <Image 
              src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
              alt="Priceless CPA Logo" 
              width={40} 
              height={40}
              className="rounded-lg"
              priority
            />
            <span className="font-display text-gold text-xl hidden sm:block">Priceless CPA</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-text-light hover:text-gold transition text-sm hidden md:block">BLOG</Link>
            <div className="relative group hidden md:block">
              <button className="text-text-light hover:text-gold transition text-sm" aria-haspopup="true" aria-expanded="false">SERVICES</button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-bg-card rounded-lg border border-gold/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl" role="menu">
                {servicePages.map((service) => (
                  <Link key={service.href} href={service.href} className="block px-4 py-3 text-text-light hover:text-gold hover:bg-bg-card-hover transition text-sm first:rounded-t-lg last:rounded-b-lg" role="menuitem">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <a 
              href="https://calendly.com/pricelesscpa/intro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-bg-deep px-5 py-2 rounded-lg font-semibold text-sm transition"
            >
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" aria-label="Hero">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1.webp"
          aria-hidden="true"
        >
          <source src="https://pricelesscpa.com/wp-content/uploads/2024/05/7247822-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-bg-deep/70" aria-hidden="true"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            <span className="text-gold">Financial solutions</span>
            <br />
            To scale your business
            <br />
            Legally & organically
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a 
              href="https://calendly.com/pricelesscpa/intro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-bg-deep px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105"
            >
              Book a Call
            </a>
            <a 
              href="https://wa.me/13057078959" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-bg-deep px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Chat with me
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-6 bg-bg-primary" aria-labelledby="why-work-heading">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 justify-center mb-6">
            <div className="h-px bg-gold/30 flex-1 max-w-32" aria-hidden="true"></div>
            <h2 id="why-work-heading" className="font-display text-3xl md:text-4xl text-center text-gold">Why work with us?</h2>
            <div className="h-px bg-gold/30 flex-1 max-w-32" aria-hidden="true"></div>
          </div>
          <p className="text-text-light text-center max-w-3xl mx-auto mb-12 text-lg">
            We provide successful entrepreneurs value-driven accounting solutions to minimize lifetime taxes, optimize business decisions with data, while saving time and money on their accounting and operational costs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, i) => (
              <article key={i} className="bg-bg-card rounded-xl p-6 text-center border border-gold/10 hover:border-gold/30 transition group">
                <div className="text-4xl mb-4" aria-hidden="true">{service.icon}</div>
                <div className="h-px bg-gold/20 mb-4" aria-hidden="true"></div>
                <h3 className="text-text-white font-semibold mb-2">{service.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-bg-deep" aria-labelledby="team-heading">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 justify-center mb-12">
            <div className="h-px bg-gold/30 flex-1 max-w-32" aria-hidden="true"></div>
            <h2 id="team-heading" className="font-display text-3xl md:text-4xl text-center text-gold">Who WE ARE?</h2>
            <div className="h-px bg-gold/30 flex-1 max-w-32" aria-hidden="true"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, i) => (
              <article key={i} className="text-center group">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold/20 group-hover:border-gold transition">
                  <Image src={member.image} alt={`${member.name} - ${member.role}`} fill className="object-cover" sizes="128px" />
                </div>
                <h3 className="text-text-white font-semibold">{member.name}</h3>
                <p className="text-gold text-sm">{member.role}</p>
              </article>
            ))}
          </div>
          
          {/* CTA Box */}
          <div className="mt-16 bg-bg-card rounded-2xl p-8 md:p-12 border border-gold/20 text-center max-w-2xl mx-auto">
            <Image 
              src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo2.webp" 
              alt="Priceless CPA Logo" 
              width={80} 
              height={80}
              className="mx-auto mb-6 rounded-xl"
            />
            <h3 className="font-display text-2xl md:text-3xl text-text-white mb-4">
              Schedule your tax<br />Analysis for free
            </h3>
            <p className="text-text-light mb-6">Let&apos;s build an accurate strategy to optimize your money income</p>
            <a 
              href="https://calendly.com/pricelesscpa/intro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gold hover:bg-gold-light text-bg-deep px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-bg-primary" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <p className="text-text-light text-center max-w-3xl mx-auto mb-6 text-lg">
            Priceless has a commitment to always provide the highest CPA standard, of empowering the client with accurate information and circumstantial advice
          </p>
          <div className="flex items-center gap-4 justify-center mb-12">
            <div className="h-px bg-gold/30 flex-1 max-w-32" aria-hidden="true"></div>
            <h2 id="services-heading" className="font-display text-3xl md:text-4xl text-center text-gold">Our Services</h2>
            <div className="h-px bg-gold/30 flex-1 max-w-32" aria-hidden="true"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicePages.map((service, i) => (
              <Link key={i} href={service.href} className="bg-bg-card rounded-xl p-8 border border-gold/10 hover:border-gold/30 hover:bg-bg-card-hover transition group">
                <h3 className="font-display text-xl text-gold group-hover:text-gold-light transition">{service.title}</h3>
                <p className="text-text-muted mt-2">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-bg-deep" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 justify-center mb-12">
            <div className="h-px bg-gold/30 flex-1 max-w-32" aria-hidden="true"></div>
            <h2 id="testimonials-heading" className="font-display text-3xl md:text-4xl text-center text-gold">What Clients Say</h2>
            <div className="h-px bg-gold/30 flex-1 max-w-32" aria-hidden="true"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <blockquote key={i} className="bg-bg-card rounded-xl p-6 border border-gold/10">
                <p className="text-text-light mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <footer className="text-gold font-semibold">— {testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-bg-primary border-t border-gold/10" role="contentinfo">
        <div className="max-w-6xl mx-auto text-center">
          <Image 
            src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
            alt="Priceless CPA Logo" 
            width={50} 
            height={50}
            className="mx-auto mb-4 rounded-lg"
          />
          <p className="text-text-muted text-sm">© {new Date().getFullYear()} Priceless CPA. All rights reserved.</p>
          <nav className="flex justify-center gap-6 mt-4" aria-label="Footer navigation">
            <a 
              href="https://calendly.com/pricelesscpa/intro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition text-sm"
            >
              Book a Call
            </a>
            <a 
              href="https://wa.me/13057078959" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition text-sm"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
