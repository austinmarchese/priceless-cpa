'use client'

import Image from 'next/image'
import Link from 'next/link'

const painPoints = [
  "Where'd our cash go?",
  "We need a CFO to figure it all out!",
  "Another surprise expense?!",
  "Spreadsheets everywhere.",
  "I'm not a numbers person.",
  "Another tax season surprise?",
  "I have to figure it out alone?",
  "Chaotic financial data!",
]

const solutions = [
  "Real-time financial clarity",
  "Expert guidance, without the cost",
  "Proactive expense management",
  "Streamlined, automated systems",
  "User-friendly financial tools",
  "Year-round tax strategy",
  "Your dedicated finance team",
  "Centralized financial ecosystem",
]

const services = [
  { 
    title: 'Modern Bookkeeping', 
    href: '/business-accounting',
    description: 'Your finances are maintained using cutting-edge automation and oversight by our team of experts, giving you timely and accurate data to run your business.'
  },
  { 
    title: 'Strategy-Driven Taxes', 
    href: '/tax-strategy',
    description: 'On tax day nothing should be a surprise. We bring a strategy-first approach to taxes, leveraging our experts\' industry knowledge to maximize the dollars in your pocket.'
  },
  { 
    title: 'Crypto Accounting', 
    href: '/crypto-accounting',
    description: 'Expert guidance for digital asset taxation and compliance. Navigate the complex world of crypto taxes with confidence and accuracy.'
  },
  { 
    title: 'Tax Preparation', 
    href: '/tax-preparation',
    description: 'Accurate, timely filing for individuals and businesses. We handle the complexity so you can focus on what matters most.'
  },
  { 
    title: 'Business Advisory', 
    href: '/tax-strategy',
    description: 'Strategic guidance to help you make informed business decisions. We proactively plan for what\'s ahead to maximize your growth.'
  },
  { 
    title: 'Entity Structuring', 
    href: '/s-corp-vs-llc',
    description: 'Work with a team that understands the nuances of business structures. We help you choose the right setup to minimize taxes and protect assets.'
  },
]

const features = [
  {
    title: 'Comprehensive Finances',
    subtitle: 'We handle it all!',
    description: 'Beyond bookkeeping and tax filing, we handle the day-to-day finance operations your business needs to stay compliant and focused on growth.',
  },
  {
    title: 'Continuous Expertise', 
    subtitle: 'The team you need',
    description: 'From day 1, you\'ll have access to applied financial knowledge, insights, and guidance you need to move your business forward.',
  },
  {
    title: 'Efficient Systems',
    subtitle: 'Best technology & process',
    description: 'Your financial operations are only as good as your systems. We set up the workflows and software your company needs to stay agile.',
  },
  {
    title: 'Scalable Services',
    subtitle: 'We grow with you',
    description: 'As your business grows, we\'re designed to grow with you. Whether you\'re starting up or scaling, we have the resources you need.',
  },
  {
    title: 'Specialized Support',
    subtitle: 'Get up to speed, fast',
    description: 'Get a dedicated team that\'s already working with businesses in your niche. We know the strategies that work best in your industry.',
  },
]

const stats = [
  { number: '500+', label: 'Ambitious businesses', sublabel: 'empowered by Priceless' },
  { number: '98%', label: 'Client retention', sublabel: '(we love our clients)' },
  { number: '5+ years', label: 'Average partnership:', sublabel: 'We grow with you' },
]

const testimonials = [
  { name: 'Mike G.', text: 'Anthony went above and beyond to assist me in reconciling my crypto transactions. His extensive knowledge and personable approach are truly one of a kind.' },
  { name: 'Owen F.', text: 'My books were an absolute mess. Anthony made it a personal mission to clean up years of books and get everything squared away. He\'s a real superstar.' },
  { name: 'Madison R.', text: 'There is no software that matches having real, personal help with taxes. Anthony has made our tax seasons stress-free.' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06080e]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06080e]/95 backdrop-blur-md border-b border-[#c4a24e]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
              alt="Priceless CPA" 
              width={44} 
              height={44}
              className="rounded-lg transition-transform group-hover:scale-105"
              priority
            />
            <span className="font-semibold text-[#f0ede6] hidden sm:block">Priceless CPA</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-[#c8c5bc] hover:text-[#c4a24e] transition text-sm font-medium hidden md:block">Blog</Link>
            <Link href="/tax-strategy" className="text-[#c8c5bc] hover:text-[#c4a24e] transition text-sm font-medium hidden md:block">Services</Link>
            <Link href="/s-corp-vs-llc" className="text-[#c8c5bc] hover:text-[#c4a24e] transition text-sm font-medium hidden md:block">Resources</Link>
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="bg-[#c4a24e] text-[#06080e] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#dfc06a] transition-all hover:scale-105 text-sm">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#c4a24e]/10 rounded-full border border-[#c4a24e]/20">
            <span className="text-[#c4a24e] text-sm font-medium">We ❤️ our clients</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#f0ede6] leading-tight mb-6 animate-fade-up">
            Outsourced Accounting for<br />
            <span className="text-[#c4a24e]">Small Business Growth</span>
          </h1>
          <p className="text-xl text-[#c8c5bc] mb-10 max-w-2xl mx-auto leading-relaxed">
            We handle your finances so you can focus on what you do best — growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="bg-[#c4a24e] text-[#06080e] px-8 py-4 rounded-lg font-semibold hover:bg-[#dfc06a] transition-all hover:scale-105 text-lg">
              Schedule a Call
            </a>
            <Link href="/tax-strategy" className="border-2 border-[#c4a24e]/30 text-[#c4a24e] px-8 py-4 rounded-lg font-semibold hover:border-[#c4a24e] hover:bg-[#c4a24e]/10 transition-all text-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Magic Formula Section */}
      <section className="py-24 px-6 bg-[#0b0e18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0ede6] mb-6">The Priceless Magic Formula</h2>
            <p className="text-lg text-[#c8c5bc] mb-4">
              We&apos;ve cracked the code to build great financial operations:
            </p>
            <p className="text-xl text-[#c4a24e] font-semibold">
              Great People + Smart Processes + Personal Service = <span className="text-[#f0ede6]">Priceless</span>
            </p>
            <p className="text-[#7a7870] mt-4">
              Unlike traditional firms or generic software, we tailor our approach to your unique needs.
            </p>
          </div>

          {/* Pain Points vs Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Founder's Frustrations */}
            <div className="bg-[#120a0a] border border-red-900/20 rounded-2xl p-8">
              <h3 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-8">Business Owner Frustrations</h3>
              <div className="space-y-4">
                {painPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <span className="text-red-400/60 mt-0.5">✕</span>
                    <span className="text-[#c8c5bc] group-hover:text-[#f0ede6] transition">"{point}"</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Priceless Solution */}
            <div className="bg-[#0a120a] border border-[#c4a24e]/20 rounded-2xl p-8">
              <h3 className="text-xs font-bold text-[#c4a24e] uppercase tracking-widest mb-8">The Priceless Solution</h3>
              <div className="space-y-4">
                {solutions.map((solution, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <span className="text-[#c4a24e] mt-0.5">✓</span>
                    <span className="text-[#c8c5bc] group-hover:text-[#f0ede6] transition">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 6 cards grid */}
      <section className="py-24 px-6 bg-[#06080e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0ede6] mb-4">End-to-end finance operations.</h2>
            <p className="text-xl text-[#c4a24e]">All in one place.</p>
          </div>
          <p className="text-center text-[#c8c5bc] max-w-2xl mx-auto mb-16">
            We deliver financial services that meet the unique needs and nuances of your business. Together, we&apos;ll create a financial solution as exceptional as your vision.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link 
                key={i} 
                href={service.href}
                className="group bg-[#0f1222] border border-[#c4a24e]/10 rounded-xl p-6 hover:border-[#c4a24e]/40 hover:bg-[#141830] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#f0ede6] mb-3 group-hover:text-[#c4a24e] transition">{service.title}</h3>
                <p className="text-[#c8c5bc] text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="text-[#c4a24e] text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-24 px-6 bg-[#0b0e18]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0ede6] mb-6">Custom solutions for your industry&apos;s needs</h2>
          <p className="text-lg text-[#c8c5bc] leading-relaxed">
            Every industry has its own unique challenges and opportunities. Our team and systems are built to match the perfect financial experts and technology to your specific business and vertical.
          </p>
        </div>
      </section>

      {/* Real Results Section - Feature Grid */}
      <section className="py-24 px-6 bg-[#06080e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0ede6] mb-4">Real results, real growth</h2>
            <p className="text-[#c8c5bc] text-lg max-w-2xl mx-auto">
              Priceless is the only finance operations service truly built from the ground up to handle all of your finances. That&apos;s why respected SMBs and entrepreneurs everywhere trust us to manage their most important asset: their finances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-[#0f1222] border border-[#c4a24e]/10 rounded-xl p-6 hover:border-[#c4a24e]/30 transition-all group">
                <div className="w-10 h-10 bg-[#c4a24e]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#c4a24e]/20 transition">
                  <span className="text-[#c4a24e]">✦</span>
                </div>
                <h3 className="text-[#c4a24e] text-sm font-semibold mb-1">{feature.title}</h3>
                <h4 className="text-[#f0ede6] font-semibold mb-3">{feature.subtitle}</h4>
                <p className="text-[#c8c5bc] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-[#c4a24e]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-[#06080e] mb-2">{stat.number}</div>
                <div className="text-[#06080e] font-medium">{stat.label}</div>
                <div className="text-[#06080e]/60 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#0b0e18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0ede6] mb-4">What our clients say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#0f1222] border border-[#c4a24e]/10 rounded-xl p-6">
                <div className="flex gap-1 mb-4 text-[#c4a24e]">
                  {'★★★★★'.split('').map((star, j) => <span key={j}>{star}</span>)}
                </div>
                <p className="text-[#c8c5bc] text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-[#c4a24e] font-semibold text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#06080e]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0ede6] mb-6">Ready to simplify your finances?</h2>
          <p className="text-lg text-[#c8c5bc] mb-10">Schedule a free consultation to see how we can help your business grow.</p>
          <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#c4a24e] text-[#06080e] px-10 py-4 rounded-lg font-semibold hover:bg-[#dfc06a] transition-all hover:scale-105 text-lg">
            Schedule a Call →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#06080e] border-t border-[#c4a24e]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Image 
                src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
                alt="Priceless CPA" 
                width={36} 
                height={36}
                className="rounded-lg"
              />
              <span className="text-[#f0ede6] font-medium">Priceless CPA</span>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="/tax-strategy" className="text-[#c8c5bc] hover:text-[#c4a24e] transition">Services</Link>
              <Link href="/blog" className="text-[#c8c5bc] hover:text-[#c4a24e] transition">Blog</Link>
              <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="text-[#c8c5bc] hover:text-[#c4a24e] transition">Contact</a>
            </div>
            <p className="text-[#7a7870] text-sm">© 2026 Priceless CPA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
