'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Intersection Observer hook for scroll animations
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
      }
    }, { threshold: 0.1, ...options })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isInView }
}

// Animated counter component
function AnimatedCounter({ target, duration = 2000 }: { target: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, isInView } = useInView()
  const numericTarget = parseInt(target.replace(/[^0-9]/g, '')) || 0
  const suffix = target.replace(/[0-9]/g, '')

  useEffect(() => {
    if (!isInView) return
    
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * numericTarget))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, numericTarget, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

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
    icon: '📊',
    description: 'Your finances are maintained using cutting-edge automation and oversight by our team of experts, giving you timely and accurate data to run your business.'
  },
  { 
    title: 'Strategy-Driven Taxes', 
    href: '/tax-strategy',
    icon: '📋',
    description: 'On tax day nothing should be a surprise. We bring a strategy-first approach to taxes, leveraging our experts\' knowledge to maximize the dollars in your pocket.'
  },
  { 
    title: 'Crypto Accounting', 
    href: '/crypto-accounting',
    icon: '₿',
    description: 'Expert guidance for digital asset taxation and compliance. We understand the complexities of crypto and help you stay compliant.'
  },
  { 
    title: 'Tax Preparation', 
    href: '/tax-preparation',
    icon: '✓',
    description: 'Accurate, timely filing for individuals and businesses. We handle the complexity so you can focus on what matters.'
  },
  { 
    title: 'Business Advisory', 
    href: '/tax-strategy',
    icon: '💡',
    description: 'Strategic guidance to help you make informed business decisions. We proactively plan for what\'s ahead to maximize your growth.'
  },
  { 
    title: 'Entity Structuring', 
    href: '/s-corp-vs-llc',
    icon: '🏢',
    description: 'Work with a team that understands the nuances of business structures. We help you choose the right setup to minimize taxes.'
  },
]

const features = [
  {
    title: 'Comprehensive Finances',
    subtitle: 'We handle it all!',
    description: 'Beyond bookkeeping and tax filing, we handle the day-to-day finance operations your business needs to stay compliant and focused on growth.',
    icon: '🎯',
  },
  {
    title: 'Continuous Expertise', 
    subtitle: 'The team you need',
    description: 'From day 1, you\'ll have access to applied financial knowledge, insights, and guidance you need to move your business forward.',
    icon: '👥',
  },
  {
    title: 'Efficient Systems',
    subtitle: 'Best technology & process',
    description: 'Your financial operations are only as good as your systems. We set up the workflows and software your company needs to stay agile.',
    icon: '⚙️',
  },
  {
    title: 'Scalable Services',
    subtitle: 'We grow with you',
    description: 'As your business grows, we\'re designed to grow with you. Whether you\'re starting up or scaling, we have the resources you need.',
    icon: '📈',
  },
  {
    title: 'Specialized Support',
    subtitle: 'Get up to speed, fast',
    description: 'Get a dedicated team that\'s already working with businesses in your niche. We know the strategies that work best in your industry.',
    icon: '🚀',
  },
]

const stats = [
  { number: '500+', label: 'Ambitious businesses', sublabel: 'empowered by Priceless' },
  { number: '98%', label: 'Client retention', sublabel: '(we love our clients)' },
  { number: '5+', label: 'Years', sublabel: 'Average partnership' },
]

const testimonials = [
  { name: 'Mike G.', text: 'Anthony went above and beyond to assist me in reconciling my crypto transactions. His extensive knowledge and personable approach are truly one of a kind.', image: null },
  { name: 'Owen F.', text: 'My books were an absolute mess. Anthony made it a personal mission to clean up years of books and get everything squared away. He\'s a real superstar.', image: null },
  { name: 'Madison R.', text: 'There is no software that matches having real, personal help with taxes. Anthony has made our tax seasons stress-free.', image: null },
]

// Animated Section wrapper
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useInView()
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-[#06080e] overflow-hidden">
      {/* Animated background gradient that follows mouse */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(196, 162, 78, 0.15), transparent 40%)`
        }}
      />

      {/* Floating decorative elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-[#c4a24e]/5 rounded-full blur-3xl animate-float" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-[#c4a24e]/5 rounded-full blur-3xl animate-float-delayed" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06080e]/80 backdrop-blur-xl border-b border-[#c4a24e]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
              alt="Priceless CPA" 
              width={44} 
              height={44}
              className="rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              priority
            />
            <span className="font-semibold text-[#f0ede6] hidden sm:block">Priceless CPA</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-[#c8c5bc] hover:text-[#c4a24e] transition-colors duration-300 text-sm font-medium hidden md:block relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c4a24e] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/tax-strategy" className="text-[#c8c5bc] hover:text-[#c4a24e] transition-colors duration-300 text-sm font-medium hidden md:block relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c4a24e] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/s-corp-vs-llc" className="text-[#c8c5bc] hover:text-[#c4a24e] transition-colors duration-300 text-sm font-medium hidden md:block relative group">
              Resources
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c4a24e] transition-all duration-300 group-hover:w-full" />
            </Link>
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="relative bg-[#c4a24e] text-[#06080e] px-5 py-2.5 rounded-lg font-semibold overflow-hidden group">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#06080e]">Get Started</span>
              <div className="absolute inset-0 bg-[#dfc06a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c4a24e]/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <div className="inline-block mb-6 px-4 py-2 bg-[#c4a24e]/10 rounded-full border border-[#c4a24e]/20 animate-pulse-slow">
              <span className="text-[#c4a24e] text-sm font-medium">We ❤️ our clients</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold text-[#f0ede6] leading-tight mb-6">
              Outsourced Accounting for<br />
              <span className="text-[#c4a24e] relative">
                Small Business Growth
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 2 100 2 150 6C200 10 250 2 298 6" stroke="#c4a24e" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                </svg>
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-xl text-[#c8c5bc] mb-10 max-w-2xl mx-auto leading-relaxed">
              We handle your finances so you can focus on what you do best — growing your business.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="group relative bg-[#c4a24e] text-[#06080e] px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(196,162,78,0.4)] hover:-translate-y-1">
                <span className="relative z-10">Schedule a Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#c4a24e] via-[#dfc06a] to-[#c4a24e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <Link href="/tax-strategy" className="group border-2 border-[#c4a24e]/30 text-[#c4a24e] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-[#c4a24e] hover:bg-[#c4a24e]/10 hover:-translate-y-1">
                Learn More
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#c4a24e]/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-[#c4a24e] rounded-full mt-2 animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#c4a24e] via-[#dfc06a] to-[#c4a24e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="group">
                  <div className="text-4xl md:text-5xl font-bold text-[#06080e] mb-2 transition-transform duration-300 group-hover:scale-110">
                    <AnimatedCounter target={stat.number} />
                  </div>
                  <div className="text-[#06080e] font-medium">{stat.label}</div>
                  <div className="text-[#06080e]/60 text-sm">{stat.sublabel}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Magic Formula Section */}
      <section className="py-24 px-6 bg-[#0b0e18] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c4a24e]/30 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#f0ede6] mb-6">The Priceless Magic Formula</h2>
              <p className="text-lg text-[#c8c5bc] mb-4">
                We&apos;ve cracked the code to build great financial operations:
              </p>
              <p className="text-xl font-semibold">
                <span className="text-[#c4a24e]">Great People</span>
                <span className="text-[#c8c5bc] mx-2">+</span>
                <span className="text-[#c4a24e]">Smart Processes</span>
                <span className="text-[#c8c5bc] mx-2">+</span>
                <span className="text-[#c4a24e]">Personal Service</span>
                <span className="text-[#c8c5bc] mx-2">=</span>
                <span className="text-[#f0ede6] font-bold">Priceless</span>
              </p>
            </div>
          </AnimatedSection>

          {/* Pain Points vs Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="bg-gradient-to-br from-[#1a0808] to-[#120a0a] border border-red-900/20 rounded-2xl p-8 hover:border-red-900/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]">
                <h3 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                  Business Owner Frustrations
                </h3>
                <div className="space-y-4">
                  {painPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 group cursor-default" style={{ animationDelay: `${i * 50}ms` }}>
                      <span className="text-red-400/60 mt-0.5 transition-transform duration-300 group-hover:scale-125">✕</span>
                      <span className="text-[#c8c5bc] group-hover:text-[#f0ede6] transition-colors duration-300">"{point}"</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-gradient-to-br from-[#0a1a0a] to-[#0a120a] border border-[#c4a24e]/20 rounded-2xl p-8 hover:border-[#c4a24e]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(196,162,78,0.1)]">
                <h3 className="text-xs font-bold text-[#c4a24e] uppercase tracking-widest mb-8 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#c4a24e] rounded-full animate-pulse" />
                  The Priceless Solution
                </h3>
                <div className="space-y-4">
                  {solutions.map((solution, i) => (
                    <div key={i} className="flex items-start gap-3 group cursor-default">
                      <span className="text-[#c4a24e] mt-0.5 transition-transform duration-300 group-hover:scale-125">✓</span>
                      <span className="text-[#c8c5bc] group-hover:text-[#f0ede6] transition-colors duration-300">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-[#06080e] relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#f0ede6] mb-4">End-to-end finance operations.</h2>
              <p className="text-xl text-[#c4a24e]">All in one place.</p>
            </div>
            <p className="text-center text-[#c8c5bc] max-w-2xl mx-auto mb-16">
              We deliver financial services that meet the unique needs and nuances of your business.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <Link 
                  href={service.href}
                  className="group block bg-gradient-to-br from-[#0f1222] to-[#0b0e18] border border-[#c4a24e]/10 rounded-xl p-6 hover:border-[#c4a24e]/40 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(196,162,78,0.15)] hover:-translate-y-2"
                >
                  <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-[#f0ede6] mb-3 group-hover:text-[#c4a24e] transition-colors duration-300">{service.title}</h3>
                  <p className="text-[#c8c5bc] text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="text-[#c4a24e] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Learn more 
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section className="py-24 px-6 bg-[#0b0e18] relative">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c4a24e]/30 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#f0ede6] mb-4">Real results, real growth</h2>
              <p className="text-[#c8c5bc] text-lg max-w-2xl mx-auto">
                Priceless is the only finance operations service truly built from the ground up to handle all of your finances.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="group bg-[#0f1222]/50 border border-[#c4a24e]/10 rounded-xl p-6 hover:border-[#c4a24e]/30 transition-all duration-500 hover:bg-[#0f1222]">
                  <div className="w-12 h-12 bg-[#c4a24e]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#c4a24e]/20 group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-[#c4a24e] text-sm font-semibold mb-1">{feature.title}</h3>
                  <h4 className="text-[#f0ede6] font-semibold mb-3">{feature.subtitle}</h4>
                  <p className="text-[#c8c5bc] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#06080e] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c4a24e]/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#f0ede6] mb-4">What our clients say</h2>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="group bg-gradient-to-br from-[#0f1222] to-[#0b0e18] border border-[#c4a24e]/10 rounded-xl p-6 hover:border-[#c4a24e]/30 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(196,162,78,0.1)] hover:-translate-y-1">
                  <div className="flex gap-1 mb-4 text-[#c4a24e]">
                    {'★★★★★'.split('').map((star, j) => (
                      <span key={j} className="transition-transform duration-300 hover:scale-125" style={{ animationDelay: `${j * 50}ms` }}>{star}</span>
                    ))}
                  </div>
                  <p className="text-[#c8c5bc] text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                  <p className="text-[#c4a24e] font-semibold text-sm">— {t.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0b0e18] to-[#06080e] relative">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0ede6] mb-6">Ready to simplify your finances?</h2>
            <p className="text-lg text-[#c8c5bc] mb-10">Schedule a free consultation to see how we can help your business grow.</p>
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="group relative inline-block bg-[#c4a24e] text-[#06080e] px-10 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(196,162,78,0.5)] hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                Schedule a Call 
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#dfc06a] via-[#c4a24e] to-[#dfc06a] bg-size-200 animate-gradient" />
            </a>
          </div>
        </AnimatedSection>
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
              <Link href="/tax-strategy" className="text-[#c8c5bc] hover:text-[#c4a24e] transition-colors duration-300">Services</Link>
              <Link href="/blog" className="text-[#c8c5bc] hover:text-[#c4a24e] transition-colors duration-300">Blog</Link>
              <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="text-[#c8c5bc] hover:text-[#c4a24e] transition-colors duration-300">Contact</a>
            </div>
            <p className="text-[#7a7870] text-sm">© 2026 Priceless CPA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
