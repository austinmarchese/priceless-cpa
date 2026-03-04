'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const painPoints = [
  '"Where\'d all my money go?"',
  '"I need help with crypto taxes!"',
  '"Another surprise tax bill?!"',
  '"Spreadsheets everywhere."',
  '"I\'m not a numbers person."',
  '"Tax season stress again?"',
  '"Doing this alone is exhausting."',
  '"My books are a mess!"',
]

const solutions = [
  'Clear financial visibility',
  'Expert crypto & DeFi accounting',
  'Proactive tax planning',
  'Streamlined, organized systems',
  'Simple, jargon-free guidance',
  'Year-round tax strategy',
  'Your dedicated finance team',
  'Clean, accurate bookkeeping',
]

const services = [
  { 
    title: 'Crypto Accounting & Advising', 
    description: 'Navigate the complex world of crypto taxes with experts who understand DeFi, NFTs, and digital assets inside and out.',
    href: '/crypto-accounting',
  },
  { 
    title: 'Tax Strategy & Planning', 
    description: 'Proactive tax planning that minimizes your lifetime tax burden. No surprises on tax day—just smart strategies.',
    href: '/tax-strategy',
  },
  { 
    title: 'Business Accounting', 
    description: 'Daily bookkeeping, monthly reporting, and financial clarity so you can make data-driven decisions.',
    href: '/business-accounting',
  },
  { 
    title: 'Tax Preparation', 
    description: 'Accurate, timely tax filing for individuals and businesses. We handle the complexity so you don\'t have to.',
    href: '/tax-preparation',
  },
]

const stats = [
  { value: '500+', label: 'Clients served', sublabel: 'and counting' },
  { value: '98%', label: 'Client retention', sublabel: 'they stay with us' },
  { value: '5+ years', label: 'Average partnership', sublabel: 'we grow together' },
]

const testimonials = [
  { name: 'Mike Grumble', text: 'Anthony went above and beyond to assist me in reconciling my crypto transactions. His extensive knowledge and down-to-earth approach are truly one of a kind.' },
  { name: 'Owen Focke', text: 'My books were an absolute mess. Anthony made it a personal mission to clean up years of chaos. He\'s a real superstar.' },
  { name: 'Dianna Cochrane', text: 'Mr. Price is incredibly knowledgeable and clearly explains complicated concepts. He has made tax season stress free.' },
  { name: 'Madison Radke', text: 'There is no software that matches having real, personal help. Anthony is responsive, exceptional at his work, and genuinely cares.' },
]

const team = [
  { name: 'Anthony Price', role: 'CEO & Founder, CPA', image: 'https://pricelesscpa.com/wp-content/uploads/2025/08/Anthony-300x300.webp' },
  { name: 'Matthew Deepe', role: 'Tax Director, CPA', image: 'https://pricelesscpa.com/wp-content/uploads/2025/08/Matt-300x300.webp' },
  { name: 'Billy Henriquez', role: 'Senior Accountant, CPA', image: 'https://pricelesscpa.com/wp-content/uploads/2025/08/IMG_8824-2-300x295.png' },
  { name: 'Jeffrey Carpenter', role: 'Senior Accountant', image: 'https://pricelesscpa.com/wp-content/uploads/2025/08/Jeff-300x300.webp' },
  { name: 'Natalia Shanko', role: 'Accounting Manager', image: 'https://pricelesscpa.com/wp-content/uploads/2025/08/Natalie-300x300.webp' },
]

export default function Home() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)
  
  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setActiveCard(current => (current + 1) % 3)
          return 0
        }
        return prev + 2 // 2% every 100ms = 5 seconds total
      })
    }, 100)
    
    return () => clearInterval(progressInterval)
  }, [])
  
  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setProgress(0)
  }
  
  return (
    <main className="min-h-screen">
      {/* Navigation - Floating pill style */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <nav className="max-w-6xl mx-auto bg-[#0f1222]/90 backdrop-blur-md rounded-full border border-[#c4a24e]/10 px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
              alt="Priceless CPA" 
              width={40} 
              height={40}
              className="rounded-lg"
              priority
            />
            <span className="text-white font-semibold text-lg hidden sm:block">Priceless</span>
          </Link>
          <div className="flex items-center gap-1 md:gap-6">
            <div className="relative group hidden md:block">
              <button className="text-[#c8c5bc] hover:text-[#c4a24e] transition text-sm px-3 py-2">Our Services</button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#0f1222] rounded-2xl border border-[#c4a24e]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl p-2">
                {services.map((service) => (
                  <Link key={service.href} href={service.href} className="block px-4 py-3 text-[#c8c5bc] hover:text-[#c4a24e] hover:bg-[#141830] rounded-xl transition text-sm">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/s-corp-vs-llc" className="text-[#c8c5bc] hover:text-[#c4a24e] transition text-sm px-3 py-2 hidden md:block">S-Corp vs LLC</Link>
            <Link href="/blog" className="text-[#c8c5bc] hover:text-[#c4a24e] transition text-sm px-3 py-2 hidden md:block">Resources</Link>
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="bg-[#c4a24e] text-[#06080e] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#dfc06a] transition flex items-center gap-2">
              Get Started <span>→</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Hero Section - Dark style with Priceless branding */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/hero-bg.png" 
            alt="" 
            fill 
            className="object-cover object-bottom"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.2] mb-8">
            <span className="font-serif italic bg-gradient-to-r from-[#9b824e] to-[#c4a24e] bg-clip-text text-transparent">Financial </span>
            <span className="font-sans font-semibold text-white">Solutions to Scale </span>
            <span className="font-serif italic bg-gradient-to-r from-[#9b824e] to-[#c4a24e] bg-clip-text text-transparent">your </span>
            <span className="font-sans font-semibold text-white">Business Legally & </span>
            <span className="font-serif italic bg-gradient-to-r from-[#9b824e] to-[#c4a24e] bg-clip-text text-transparent">Organically</span>
          </h1>
          <p className="text-[#c8c5bc] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Expert accounting for entrepreneurs, crypto investors, and growing businesses. We transform your messy finances into clean books and confident decisions.
          </p>
          <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#c4a24e] text-[#06080e] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#dfc06a] transition shadow-lg shadow-[#c4a24e]/20">
            Talk to an expert <span>→</span>
          </a>
        </div>
      </section>

      {/* We Love Our Clients + Logo Marquee */}
      <section className="py-16 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          {/* We love our clients */}
          <div className="text-center mb-12">
            <p className="text-[#9b824e] text-sm tracking-widest">
              We <span className="inline-block">♥</span> our clients
            </p>
          </div>
          
          {/* Logo Marquee - placeholder logos */}
          <div className="overflow-hidden relative">
            <div className="flex items-center gap-16 animate-marquee">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-16 min-w-max">
                  <span className="text-[#1a1a1a]/30 font-semibold text-xl">CRYPTO TRADERS</span>
                  <span className="text-[#1a1a1a]/30 font-semibold text-xl">STARTUPS</span>
                  <span className="text-[#1a1a1a]/30 font-semibold text-xl">E-COMMERCE</span>
                  <span className="text-[#1a1a1a]/30 font-semibold text-xl">AGENCIES</span>
                  <span className="text-[#1a1a1a]/30 font-semibold text-xl">CONSULTANTS</span>
                  <span className="text-[#1a1a1a]/30 font-semibold text-xl">CREATORS</span>
                  <span className="text-[#1a1a1a]/30 font-semibold text-xl">REAL ESTATE</span>
                  <span className="text-[#1a1a1a]/30 font-semibold text-xl">SAAS</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Magic Formula Section - Two Column Layout */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left - Big Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#1a1a1a] leading-[1.1]">
                The Priceless<br />Magic Formula
              </h2>
            </div>
            
            {/* Right - Description */}
            <div>
              <p className="text-[#4a4a4a] text-lg mb-4">
                We&apos;ve cracked the code to build great financial operations:
              </p>
              <p className="text-[#1a1a1a] text-lg font-semibold mb-6">
                Great People + Smart Processes + Cutting-Edge Technology = Priceless
              </p>
              <p className="text-[#4a4a4a] mb-8">
                Unlike traditional firms or generic software, we tailor our approach to your unique needs.
              </p>
              <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0f1222] text-white px-6 py-4 rounded-full font-medium hover:bg-[#1a1a2e] transition">
                See the Priceless Difference <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* People, Process, Tech - Auto-Rotating Cards */}
      <section className="py-20 px-6 bg-[#0f1222]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 h-[400px]">
            {/* People Card */}
            <div 
              onClick={() => handleCardClick(0)}
              className={`bg-white rounded-2xl p-8 relative overflow-hidden transition-all duration-700 cursor-pointer flex flex-col ${activeCard === 0 ? 'flex-[2.5]' : 'flex-1'}`}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#0f1222] mb-6">People</h3>
              
              <div className={`flex-1 flex ${activeCard === 0 ? 'flex-row items-center' : 'flex-col justify-center'} gap-6`}>
                {/* Left: Details (shows when active) */}
                <div className={`flex-1 transition-all duration-500 ${activeCard === 0 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                  <p className="text-[#2d5a47] text-sm font-medium tracking-wide uppercase mb-3">Long-Term Relationships</p>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">
                    We&apos;re not just accountants — we&apos;re your dedicated financial partners. Responsive communication and relationships built to last through every stage of your business.
                  </p>
                </div>
                
                {/* Right: Illustration */}
                <div className={`flex justify-center ${activeCard === 0 ? 'flex-1' : ''}`}>
                  <Image src="/illustrations/people.png" alt="People" width={240} height={300} className="w-60 h-72 object-contain" />
                </div>
              </div>
              
              {/* Bottom progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#e8e4dc]">
                <div 
                  className="h-full bg-[#0f1222] transition-all duration-100"
                  style={{ width: activeCard === 0 ? `${progress}%` : '0%' }}
                />
              </div>
            </div>

            {/* Process Card */}
            <div 
              onClick={() => handleCardClick(1)}
              className={`bg-white rounded-2xl p-8 relative overflow-hidden transition-all duration-700 cursor-pointer flex flex-col ${activeCard === 1 ? 'flex-[2.5]' : 'flex-1'}`}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#0f1222] mb-6">Process</h3>
              
              <div className={`flex-1 flex ${activeCard === 1 ? 'flex-row items-center' : 'flex-col justify-center'} gap-6`}>
                {/* Left: Details (shows when active) */}
                <div className={`flex-1 transition-all duration-500 ${activeCard === 1 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                  <p className="text-[#2d5a47] text-sm font-medium tracking-wide uppercase mb-3">Comprehensive & Tailored</p>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">
                    Full-service accounting paired with tailored tax advice. From bookkeeping to strategic planning, we customize our approach to fit your unique business needs.
                  </p>
                </div>
                
                {/* Right: Illustration */}
                <div className={`flex justify-center ${activeCard === 1 ? 'flex-1' : ''}`}>
                  <Image src="/illustrations/process.png" alt="Process" width={280} height={260} className="w-60 h-56 object-contain" />
                </div>
              </div>
              
              {/* Bottom progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#e8e4dc]">
                <div 
                  className="h-full bg-[#0f1222] transition-all duration-100"
                  style={{ width: activeCard === 1 ? `${progress}%` : '0%' }}
                />
              </div>
            </div>

            {/* Tech Card */}
            <div 
              onClick={() => handleCardClick(2)}
              className={`bg-white rounded-2xl p-8 relative overflow-hidden transition-all duration-700 cursor-pointer flex flex-col ${activeCard === 2 ? 'flex-[2.5]' : 'flex-1'}`}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#0f1222] mb-6">Tech</h3>
              
              <div className={`flex-1 flex ${activeCard === 2 ? 'flex-row items-center' : 'flex-col justify-center'} gap-6`}>
                {/* Left: Details (shows when active) */}
                <div className={`flex-1 transition-all duration-500 ${activeCard === 2 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                  <p className="text-[#2d5a47] text-sm font-medium tracking-wide uppercase mb-3">Ethical & Confidential</p>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">
                    Modern tools backed by bank-level security. Your financial data stays protected with encrypted systems and strict confidentiality standards.
                  </p>
                </div>
                
                {/* Right: Illustration */}
                <div className={`flex justify-center ${activeCard === 2 ? 'flex-1' : ''}`}>
                  <Image src="/illustrations/tech.png" alt="Tech" width={220} height={240} className="w-56 h-60 object-contain" />
                </div>
              </div>
              
              {/* Bottom progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#e8e4dc]">
                <div 
                  className="h-full bg-[#0f1222] transition-all duration-100"
                  style={{ width: activeCard === 2 ? `${progress}%` : '0%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points vs Solutions */}
      <section className="py-20 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Pain Points */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#7a7a7a] mb-8 font-medium">Founder&apos;s frustrations</h3>
              <div className="space-y-4">
                {painPoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-500 text-sm">✕</span>
                    </div>
                    <p className="text-[#4a4a4a] group-hover:text-[#1a1a1a] transition">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Solutions */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#7a7a7a] mb-8 font-medium">The Priceless Solution</h3>
              <div className="space-y-4">
                {solutions.map((solution, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-[#9b824e]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#9b824e] text-sm">✓</span>
                    </div>
                    <p className="text-[#1a1a1a] group-hover:text-[#9b824e] transition">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-xs uppercase tracking-widest text-[#7a7a7a] mb-4 font-medium">End-to-end financial operations</h3>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a]">All in one place.</h2>
            <p className="text-[#4a4a4a] mt-4 max-w-2xl mx-auto">
              We deliver financial services that meet the unique needs of your business. Together, we&apos;ll create a solution as exceptional as your vision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <Link 
                key={i} 
                href={service.href} 
                className="group bg-[#faf8f5] rounded-2xl p-8 border border-[#e8e4dc] hover:border-[#9b824e]/40 transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 group-hover:text-[#9b824e] transition">{service.title}</h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="text-[#9b824e] text-sm font-medium group-hover:underline">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-xs uppercase tracking-widest text-[#7a7a7a] mb-4 font-medium">The team behind Priceless</h3>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a]">Real people, real expertise.</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-[#e8e4dc] group-hover:ring-[#9b824e] transition">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="112px" />
                </div>
                <h3 className="text-[#1a1a1a] font-medium text-sm">{member.name}</h3>
                <p className="text-[#9b824e] text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-xs uppercase tracking-widest text-[#7a7a7a] mb-4 font-medium">Real results, real growth</h3>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a]">What our clients say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#faf8f5] rounded-2xl p-8 border border-[#e8e4dc]">
                <div className="text-[#9b824e] text-lg mb-4">★★★★★</div>
                <p className="text-[#4a4a4a] leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <p className="text-[#1a1a1a] font-medium text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-[#e8e4dc] bg-[#faf8f5]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#9b824e] mb-2">{stat.value}</div>
                <div className="text-[#4a4a4a] text-sm">{stat.label}</div>
                <div className="text-[#7a7a7a] text-xs mt-1">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#9b824e]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Ready to get started?</h2>
          <p className="text-white/80 mb-8">
            Schedule a free consultation and let&apos;s build a financial strategy that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="bg-[#9b824e] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8a7345] transition">
              Book a Call
            </a>
            <a href="https://wa.me/13057078959" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#e8e4dc] bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image 
              src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
              alt="Priceless CPA" 
              width={36} 
              height={36}
              className="rounded-lg"
            />
            <span className="text-[#7a7a7a] text-sm">© {new Date().getFullYear()} Priceless CPA</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/blog" className="text-[#4a4a4a] hover:text-[#9b824e] transition">Blog</Link>
            <Link href="/s-corp-vs-llc" className="text-[#4a4a4a] hover:text-[#9b824e] transition">S-Corp vs LLC</Link>
            <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="text-[#4a4a4a] hover:text-[#9b824e] transition">Book a Call</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
