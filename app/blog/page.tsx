'use client'

import Image from 'next/image'
import Link from 'next/link'

// Placeholder blog posts - these can be updated with real content later
const blogPosts = [
  {
    title: 'S-Corp Tax Savings: A Complete Guide for Business Owners',
    excerpt: 'Learn how converting to an S-Corp can save you thousands in self-employment taxes while staying compliant with IRS regulations.',
    date: 'Coming Soon',
    category: 'Tax Strategy',
    slug: '#',
  },
  {
    title: 'Crypto Tax 101: What Every Investor Needs to Know',
    excerpt: 'Navigate the complex world of cryptocurrency taxation with our comprehensive guide covering trades, staking, and NFTs.',
    date: 'Coming Soon',
    category: 'Crypto',
    slug: '#',
  },
  {
    title: 'Quarterly Tax Planning: Why Waiting Until April Costs You Money',
    excerpt: 'Discover the benefits of proactive quarterly tax planning and how it can prevent surprises and maximize deductions.',
    date: 'Coming Soon',
    category: 'Planning',
    slug: '#',
  },
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#06080e]">
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
          <p className="text-[#c4a24e] uppercase tracking-[0.2em] text-sm mb-6 font-medium">
            Insights & Resources
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#f0ede6] leading-tight mb-8">
            The Priceless CPA{' '}
            <span className="text-[#c4a24e]">Blog</span>
          </h1>
          <p className="text-[#c8c5bc] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Expert insights on tax strategy, crypto accounting, and business finance from the Priceless CPA team.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 py-20 bg-[#0b0e18]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <article 
                key={i} 
                className="bg-[#0f1222] rounded-xl border border-[#c4a24e]/10 hover:border-[#c4a24e]/30 transition overflow-hidden group"
              >
                {/* Category Badge */}
                <div className="p-6 pb-0">
                  <span className="text-[#c4a24e] text-xs uppercase tracking-wider font-medium">
                    {post.category}
                  </span>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h2 className="font-display text-xl text-[#f0ede6] mb-3 group-hover:text-[#c4a24e] transition">
                    {post.title}
                  </h2>
                  <p className="text-[#7a7870] text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#7a7870] text-xs">{post.date}</span>
                    {post.slug !== '#' ? (
                      <Link href={post.slug} className="text-[#c4a24e] text-sm hover:underline">
                        Read More →
                      </Link>
                    ) : (
                      <span className="text-[#7a7870] text-sm italic">Coming Soon</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 py-24 bg-[#06080e]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[#f0ede6] mb-6">
            Stay Updated
          </h2>
          <p className="text-[#c8c5bc] mb-10 text-lg leading-relaxed">
            New articles and tax strategy insights coming soon. In the meantime, book a free consultation to discuss your specific situation.
          </p>
          <a 
            href="https://calendly.com/pricelesscpa/intro" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-12 py-5 inline-flex items-center gap-2"
          >
            Book a Free Consultation
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
