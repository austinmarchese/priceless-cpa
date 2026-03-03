'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const benefits = [
  { text: 'Expert crypto transaction reconciliation across', highlight: 'all exchanges', suffix: ' — we handle the complexity' },
  { text: 'NFT, DeFi, and staking income properly categorized so you', highlight: 'don\'t overpay', suffix: '' },
  { text: 'Cost-basis optimization strategies that can save you', highlight: 'thousands', suffix: ' in taxes legally' },
  { text: 'A free consultation where Anthony', highlight: 'personally', suffix: ' reviews YOUR crypto situation' },
]

const stats = [
  { number: '60+', label: 'Crypto Clients Who Stopped Overpaying' },
  { number: '5+ Figures', label: 'Saved Per Client Annually' },
  { number: '100%', label: 'IRS Compliant Filing' },
]

const credentials = ['CPA Licensed', 'Crypto Specialist', '24hr Slack Response', 'Multi-Exchange Expert', 'DeFi & NFT Ready']

export default function CryptoAccounting() {
  const calendlyUrl = 'https://calendly.com/pricelesscpa/intro'
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' })

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    const hero = document.getElementById('pcpa-hero')
    const stickyCta = document.getElementById('pcpa-sticky-cta')
    if (hero && stickyCta) {
      const stickyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) stickyCta.classList.remove('visible')
          else stickyCta.classList.add('visible')
        })
      }, { threshold: 0 })
      stickyObserver.observe(hero)
    }

    document.querySelectorAll('.bullet-item').forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 0.1}s`
    })
    document.querySelectorAll('.stat-card').forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 0.12}s`
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pcpa-wrap">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <span className="top-bar-dot"></span>
          <span>For Crypto Investors & Traders Making <strong>$100K+</strong></span>
        </div>
      </div>

      {/* Logo Bar */}
      <div className="logo-bar">
        <div className="container">
          <div className="logo-text">
            PRICELESS CPA
            <span>Crypto Accounting & Tax Strategy</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero" id="pcpa-hero">
        <div className="container">
          <h1>
            How Crypto Investors Are<br />
            <span className="gold">Legally Minimizing Their Tax Bill</span><br />
            By Thousands
          </h1>
          <p className="hero-sub">
            Most CPAs don't understand crypto. We do. From DeFi to NFTs to multi-exchange portfolios — we'll <strong>optimize your cost basis</strong> and ensure you're not leaving money on the table.
          </p>
          <div style={{ textAlign: 'center' }}>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="cta-primary">
              Get Expert Crypto Help <span className="arrow">→</span>
            </a>
            <p className="cta-sub"><strong>Free.</strong> 20-minute call. No obligation.</p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Bullets */}
      <section className="bullets-section">
        <div className="container">
          <ul className="bullets-list">
            {benefits.map((benefit, i) => (
              <li key={i} className="bullet-item reveal">
                <div className="bullet-check">
                  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div className="bullet-text">
                  {benefit.text} <span className="highlight">{benefit.highlight}</span>{benefit.suffix}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Break */}
      <div className="cta-break">
        <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="cta-primary" style={{ animation: 'none' }}>
          Get Expert Crypto Help <span className="arrow">→</span>
        </a>
      </div>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card reveal">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="bio-section">
        <div className="container">
          <div className="bio-header reveal">
            <div className="bio-eyebrow">Your Crypto Tax Expert</div>
            <h2 className="bio-title">Meet <em>Anthony Price</em></h2>
          </div>
          <div className="bio-card reveal">
            <div className="bio-photo">
              <Image 
                src="https://assets.cdn.filesafe.space/w9nlFqFeNgvMxlmA50dr/media/699f741e9a0c1877dc9f3858.jpeg"
                alt="Anthony Price, CPA"
                fill
                style={{ objectFit: 'cover' }}
                sizes="340px"
                priority
              />
              <div className="bio-photo-overlay">
                <span className="bio-photo-name">Anthony Price</span>
                <span className="bio-photo-title-tag">CPA & Crypto Specialist</span>
              </div>
            </div>
            <div className="bio-body">
              <p>Anthony Price is a CPA and crypto tax specialist who has helped dozens of investors navigate the complex world of cryptocurrency taxation — from simple Bitcoin holdings to complex DeFi strategies.</p>

              <p>While most CPAs run from crypto, Anthony embraced it. He's helped <strong>60+ crypto investors</strong> properly categorize transactions, optimize cost basis, and save <strong>5+ figures in taxes annually</strong>.</p>

              <p className="callout">"I've seen too many crypto investors get destroyed by bad tax advice — or no advice at all. The IRS is watching, and the rules are complex. Let me help you do it right."</p>

              <p>When you work with Priceless CPA on your crypto taxes, you get <strong>24-hour Slack access</strong>, multi-exchange reconciliation, and a CPA who actually understands the difference between a swap and a taxable event.</p>

              <div className="bio-credentials">
                {credentials.map((cred, i) => (
                  <span key={i} className="bio-cred-tag">{cred}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Break */}
      <div className="cta-break">
        <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="cta-primary" style={{ animation: 'none' }}>
          Get Expert Crypto Help <span className="arrow">→</span>
        </a>
      </div>

      {/* Final CTA */}
      <section className="final-cta" id="book">
        <div className="container">
          <div className="reveal">
            <h2 className="final-cta-headline">
              Don't Let Crypto Taxes<br />
              <span className="gold">Catch You Off Guard.</span>
            </h2>
            <p className="final-cta-sub">
              The IRS is cracking down on crypto. Book a free call and let Anthony show you exactly how to stay compliant while keeping more of your gains.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-logo">
            <Image 
              src="https://assets.cdn.filesafe.space/w9nlFqFeNgvMxlmA50dr/media/6966851ce2d75b4e0f1bd866.png"
              alt="Priceless CPA"
              width={80}
              height={80}
              style={{ borderRadius: '12px' }}
            />
          </div>
          <p className="footer-links">
            <Link href="/privacy">Privacy Policy</Link> &nbsp;|&nbsp; <Link href="/terms">Terms of Service</Link>
          </p>
          <p className="footer-copy">
            Copyright © {new Date().getFullYear()}. Priceless CPA. All Rights Reserved.<br />
            6 W Flagler St #900-7468, Miami, FL 33130
          </p>
        </div>
      </footer>

      {/* Sticky CTA */}
      <div className="pcpa-sticky-cta" id="pcpa-sticky-cta">
        <span className="sticky-cta-text">Your crypto taxes handled →</span>
        <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="sticky-cta-btn">
          Get Expert Crypto Help →
        </a>
      </div>
    </div>
  )
}
