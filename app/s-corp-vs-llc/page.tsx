'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const benefits = [
  { text: 'S-Corp election alone could save you', highlight: '$15K–$30K+', suffix: ' in self-employment taxes annually' },
  { text: 'The wrong entity structure is silently', highlight: 'draining', suffix: ' thousands from your business every year' },
  { text: 'Most CPAs don\'t proactively recommend the', highlight: 'right structure', suffix: ' — they just file what you tell them' },
  { text: 'A free consultation where Anthony', highlight: 'personally', suffix: ' analyzes YOUR entity situation' },
]

const stats = [
  { number: '$15K–$30K', label: 'Average Annual Savings From S-Corp' },
  { number: '60+', label: 'Business Owners Restructured' },
  { number: '90 Days', label: 'To Get It Done Right' },
]

const credentials = ['CPA Licensed', 'Entity Specialist', '24hr Slack Response', 'S-Corp Expert', 'Year-Round Strategy']

export default function SCorpVsLLC() {
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
          <span>For Business Owners Making <strong>$100K+</strong></span>
        </div>
      </div>

      {/* Logo Bar */}
      <div className="logo-bar">
        <div className="container">
          <div className="logo-text">
            PRICELESS CPA
            <span>Entity Structure & S-Corp Election</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero" id="pcpa-hero">
        <div className="container">
          <h1>
            S-Corp vs LLC:<br />
            <span className="gold">Which One Saves You More?</span><br />
            (It's Probably Not What You Have)
          </h1>
          <p className="hero-sub">
            If you're making $100K+ and still operating as a sole prop or single-member LLC, you're likely <strong>overpaying by $15K–$30K per year</strong> in self-employment taxes. Let's fix that.
          </p>
          <div style={{ textAlign: 'center' }}>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="cta-primary">
              Find Out What You're Overpaying <span className="arrow">→</span>
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
          Find Out What You're Overpaying <span className="arrow">→</span>
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
            <div className="bio-eyebrow">Your Entity Structure Expert</div>
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
                <span className="bio-photo-title-tag">CPA & Entity Specialist</span>
              </div>
            </div>
            <div className="bio-body">
              <p>Anthony Price is a CPA and entity structure specialist who has helped <strong>60+ business owners</strong> restructure their businesses and save an average of <strong>$15K–$30K per year</strong> in self-employment taxes.</p>

              <p>The math is simple: If you're making $150K+ as a sole prop or single-member LLC, you're paying 15.3% self-employment tax on <strong>all</strong> of it. With an S-Corp election, you only pay SE tax on your "reasonable salary" — the rest is profit distribution.</p>

              <p className="callout">"I've seen business owners overpay by six figures over 5 years just because no one told them about the S-Corp election. It takes 90 days to set up properly. That's it."</p>

              <p>When you work with Priceless CPA, you get a full entity analysis, help with the S-Corp election (if it makes sense), payroll setup, and <strong>year-round support</strong> to make sure you're maximizing savings.</p>

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
          Find Out What You're Overpaying <span className="arrow">→</span>
        </a>
      </div>

      {/* Final CTA */}
      <section className="final-cta" id="book">
        <div className="container">
          <div className="reveal">
            <h2 className="final-cta-headline">
              Stop Paying Taxes<br />
              <span className="gold">You Don't Owe.</span>
            </h2>
            <p className="final-cta-sub">
              Every month with the wrong entity structure is money you're giving to the IRS unnecessarily. Book a free call and let Anthony show you exactly what you could be saving.
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
        <span className="sticky-cta-text">Your savings are waiting →</span>
        <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="sticky-cta-btn">
          Find Out What You're Overpaying →
        </a>
      </div>
    </div>
  )
}
