'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const benefits = [
  { text: 'Comprehensive tax prep that catches', highlight: 'every deduction', suffix: ' most CPAs miss' },
  { text: 'Year-round support so you\'re never scrambling at the', highlight: 'last minute', suffix: '' },
  { text: 'Business + personal returns handled together for', highlight: 'maximum savings', suffix: '' },
  { text: 'A free consultation where Anthony', highlight: 'personally', suffix: ' reviews YOUR tax situation' },
]

const stats = [
  { number: '60+', label: 'Business Owners Who File With Confidence' },
  { number: '5+ Figures', label: 'Saved Per Client Annually' },
  { number: '100%', label: 'On-Time Filing Record' },
]

const credentials = ['CPA Licensed', '60+ Clients Served', '24hr Slack Response', 'Business & Personal', 'Year-Round Support']

export default function TaxPreparation() {
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
          <span>For Business Owners Making <strong>$150K+</strong></span>
        </div>
      </div>

      {/* Logo Bar */}
      <div className="logo-bar">
        <div className="container">
          <div className="logo-text">
            PRICELESS CPA
            <span>Tax Preparation Services</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero" id="pcpa-hero">
        <div className="container">
          <h1>
            Tax Preparation That<br />
            <span className="gold">Actually Saves You Money</span><br />
            Not Just Files Your Return
          </h1>
          <p className="hero-sub">
            Most tax preparers just fill out forms. We look for every legal way to <strong>minimize your tax bill</strong> — then file it right. Business and personal, handled together for maximum savings.
          </p>
          <div style={{ textAlign: 'center' }}>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="cta-primary">
              Get Your Taxes Done Right <span className="arrow">→</span>
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
          Get Your Taxes Done Right <span className="arrow">→</span>
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
            <div className="bio-eyebrow">Your Tax Professional</div>
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
                <span className="bio-photo-title-tag">CPA & Founder</span>
              </div>
            </div>
            <div className="bio-body">
              <p>Anthony Price is a CPA and founder of Priceless CPA. He's prepared hundreds of tax returns for business owners, helping them save <strong>5+ figures annually</strong> through proper planning and preparation.</p>

              <p>The difference between a tax preparer and a tax strategist? A preparer fills out forms. A strategist looks at your entire financial picture and finds legal ways to minimize what you owe — <strong>before</strong> filing.</p>

              <p className="callout">"Tax season shouldn't be stressful. When you work with me year-round, we're never scrambling. Everything is planned, prepared, and optimized well before the deadline."</p>

              <p>When you work with Priceless CPA, you get <strong>year-round support</strong>, proactive tax planning, <strong>24-hour Slack access</strong>, and a CPA who treats your money like it matters — because it does.</p>

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
          Get Your Taxes Done Right <span className="arrow">→</span>
        </a>
      </div>

      {/* Final CTA */}
      <section className="final-cta" id="book">
        <div className="container">
          <div className="reveal">
            <h2 className="final-cta-headline">
              Stop Leaving Money<br />
              <span className="gold">On The Table.</span>
            </h2>
            <p className="final-cta-sub">
              Every deduction you miss is money you're giving away. Book a free call and let Anthony show you exactly what you could be saving.
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
        <span className="sticky-cta-text">File smarter, not harder →</span>
        <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="sticky-cta-btn">
          Get Your Taxes Done Right →
        </a>
      </div>
    </div>
  )
}
