// src/components/Hero.jsx
import { useState, useEffect } from 'react'
import heroImage from '../assets/hero-photo.png'

function Hero({ contact, navLinks }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    if ('vibrate' in navigator) {
      navigator.vibrate(10)
    }
  }

  return (
    <header className="hero" id="top">
      <nav className="hero__nav">
        <span className="hero__logo">
          {contact.name}
          {contact.website && (
            <>
              <span className="hero__logo-divider">·</span>
              <a href={contact.website} target="_blank" rel="noreferrer">
                {new URL(contact.website).hostname}
              </a>
            </>
          )}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="hero__nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Theme Toggle Button */}
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode" 
            title="Toggle theme"
          >
            {/* Sun Icon (Shows in dark mode, indicates light mode available) */}
            <svg 
              className="theme-toggle__icon theme-toggle__icon--sun" 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            
            {/* Moon Icon (Shows in light mode, indicates dark mode available) */}
            <svg 
              className="theme-toggle__icon theme-toggle__icon--moon" 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
        </div>
      </nav>
      
      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__eyebrow">Software Engineer · MERN + Spring Boot</p>
          <h1>Shipping resilient retail-tech and booking platforms that stay reliable at scale.</h1>
          <p className="hero__summary">
            2.5 years of experience building scalable microservices, Kafka event flows, and cloud deployments on AWS.
            I specialize in modernizing legacy stacks into high-performing MERN + Spring Boot systems backed by robust
            DevOps practices.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={`mailto:${contact.email}`}>
             Email me
            </a>
            <a className="btn btn--ghost" href={`tel:${contact.phone.replace(/\s+/g, '')}`}>
              Call {contact.phone}
            </a>
            {/* <a className="btn btn--ghost" href={contact.website} target="_blank" rel="noreferrer">
              View portfolio ↗
            </a> */}
          </div>
          <div className="hero__meta">
            <div>
              <span className="hero__meta-label">Experience</span>
              <p>2.5 years</p>
            </div>
            <div>
              <span className="hero__meta-label">Focus</span>
              <p>MERN + Spring Boot</p>
            </div>
            <div>
              <span className="hero__meta-label">Location</span>
              <p>{contact.location}</p>
            </div>
          </div>
        </div>
        <div className="hero__image-wrapper">
          <img src={heroImage} alt="Portrait of Nagesh Patil" loading="lazy" />
        </div>
      </div>
    </header>
  )
}

export default Hero