'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const benefits = [
  { text: 'The same strategies business owners are using to stop', highlight: 'overpaying', suffix: ' and start keeping tens of thousands more' },
  { text: 'Section 199A alone could save you $15K–$20K+, and that\'s just', highlight: 'one', suffix: ' provision most CPAs never check' },
  { text: 'Entity structure mistakes are silently', highlight: 'draining', suffix: ' thousands from your business every year' },
  { text: 'A free 30-minute call where Anthony', highlight: 'personally', suffix: ' reviews YOUR tax situation' },
]

const stats = [
  { number: '60+', label: 'Business Owners Who Stopped Giving Away Their Money' },
  { number: '5+ Figures', label: 'Saved Per Client Annually' },
  { number: '90 Days', label: 'From Chaos to Clarity' },
]

const credentials = ['CPA Licensed', '60+ Clients Served', '24hr Slack Response', 'Year-Round Strategy', '5+ Figure Savings']

export default function Home() {
  const calendlyUrl = 'https://calendly.com/pricelesscpa/intro'
  
  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' })

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    // Sticky CTA visibility
    const hero = document.getElementById('pcpa-hero')
    const stickyCta = document.getElementById('pcpa-sticky-cta')
    if (hero && stickyCta) {
      const stickyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stickyCta.classList.remove('visible')
          } else {
            stickyCta.classList.add('visible')
          }
        })
      }, { threshold: 0 })
      stickyObserver.observe(hero)
    }

    // Stagger animations
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
            <span>Tax Strategy &amp; Financial Clarity</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero" id="pcpa-hero">
        <div className="container">
          <h1>
            How Business Owners Are<br />
            <span className="gold">Legally Taking Back Thousands</span><br />
            From the IRS
          </h1>
          <p className="hero-sub">
            Business owners making $150K+ are using legal tax provisions to keep <strong>$15K–$47K more</strong> every year. I'll personally analyze your situation and show you how much you should be keeping.
          </p>
          <div style={{ textAlign: 'center' }}>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="cta-primary">
              See What the IRS Owes Me <span className="arrow">→</span>
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
          See What the IRS Owes Me <span className="arrow">→</span>
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
            <div className="bio-eyebrow">Your Tax Strategist</div>
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
                <span className="bio-photo-title-tag">CPA &amp; Founder</span>
              </div>
            </div>
            <div className="bio-body">
              <p>Anthony Price is a CPA, tax strategist, and founder of Priceless CPA. He has dedicated his life to help business owners stop overpaying taxes and finally get control of their finances.</p>

              <p>He studied Accounting and Finance at the University of Nevada, Reno and worked in public accounting before launching his own firm. Since then, he's helped <strong>60+ business owners</strong> clean up their books, save <strong>5+ figures in taxes annually</strong>, and actually understand their numbers.</p>

              <p className="callout">"I was tired of seeing entrepreneurs get burned by accountants who only show up once a year. No strategy. No guidance. Just a tax bill and a 'see you next year.'"</p>

              <p>He built this firm to be the opposite — <strong>a year-round partner who actually gives a damn.</strong></p>

              <p>When you work with Priceless CPA, you're not handed off to a junior associate or an outsourced team. You work directly with Anthony and his team of <strong>5 dedicated experts</strong>, with <strong>24-hour Slack access</strong>, quarterly strategy calls, and a real plan for your money.</p>

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
          See What the IRS Owes Me <span className="arrow">→</span>
        </a>
      </div>

      {/* Final CTA */}
      <section className="final-cta" id="book">
        <div className="container">
          <div className="reveal">
            <h2 className="final-cta-headline">
              Stop Overpaying.<br />
              <span className="gold">See What You're Owed.</span>
            </h2>
            <p className="final-cta-sub">
              Every day without a strategy is money you're giving away. Book your free call and let Anthony show you exactly what's possible.
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
        <span className="sticky-cta-text">Your money is waiting →</span>
        <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="sticky-cta-btn">
          See What the IRS Owes Me →
        </a>
      </div>
    </div>
  )
}
