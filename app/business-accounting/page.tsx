'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const benefits = [
  { text: 'Monthly bookkeeping that keeps your financials', highlight: 'clean and current', suffix: ' — no more year-end panic' },
  { text: 'Cash flow insights that help you make', highlight: 'smarter decisions', suffix: ' with your money' },
  { text: 'Entity structure optimization that could save you', highlight: 'tens of thousands', suffix: ' in taxes' },
  { text: 'A free consultation where Anthony', highlight: 'personally', suffix: ' reviews YOUR business finances' },
]

const stats = [
  { number: '60+', label: 'Business Owners With Clean Books' },
  { number: '5+ Figures', label: 'Saved Per Client Annually' },
  { number: '90 Days', label: 'From Chaos to Clarity' },
]

const credentials = ['CPA Licensed', '60+ Businesses Served', '24hr Slack Response', 'QuickBooks Expert', 'Year-Round Support']

export default function BusinessAccounting() {
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
            <span>Business Accounting Services</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero" id="pcpa-hero">
        <div className="container">
          <h1>
            How Business Owners Are<br />
            <span className="gold">Finally Getting Control</span><br />
            Of Their Finances
          </h1>
          <p className="hero-sub">
            Stop flying blind with your business finances. We'll clean up your books, set up proper systems, and give you the <strong>clarity you need to scale</strong> — without the accounting headaches.
          </p>
          <div style={{ textAlign: 'center' }}>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="cta-primary">
              Get Your Books In Order <span className="arrow">→</span>
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
          Get Your Books In Order <span className="arrow">→</span>
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
            <div className="bio-eyebrow">Your Business Accountant</div>
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
              <p>Anthony Price is a CPA, and founder of Priceless CPA. He's helped <strong>60+ business owners</strong> go from messy, stressful books to clean, organized financials they actually understand.</p>

              <p>Most business owners hate dealing with accounting — and for good reason. It's confusing, time-consuming, and most accountants only show up at tax time. Anthony built Priceless CPA to be different.</p>

              <p className="callout">"Your books shouldn't be something you dread. They should be a tool that helps you make better decisions and keep more of what you earn."</p>

              <p>When you work with Priceless CPA, you get <strong>year-round support</strong>, monthly reconciliation, <strong>24-hour Slack access</strong>, and a CPA who actually explains things in plain English.</p>

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
          Get Your Books In Order <span className="arrow">→</span>
        </a>
      </div>

      {/* Final CTA */}
      <section className="final-cta" id="book">
        <div className="container">
          <div className="reveal">
            <h2 className="final-cta-headline">
              Stop The Bookkeeping Chaos.<br />
              <span className="gold">Get Clarity Today.</span>
            </h2>
            <p className="final-cta-sub">
              Every month without clean books is another month of stress and missed opportunities. Book a free call and let Anthony show you exactly how to fix it.
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
        <span className="sticky-cta-text">Clean books are waiting →</span>
        <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="sticky-cta-btn">
          Get Your Books In Order →
        </a>
      </div>
    </div>
  )
}
