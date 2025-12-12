import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🚀 Technology Solutions Company</span>
          </div>
          <h1 className="hero-title">
            Custom Tech Solutions
            <span className="gradient-text"> for Your Business</span>
            <br />
            Websites, Apps & Tools
          </h1>
          <p className="hero-description">
            FrexilaSoft is a technology company specializing in website development, 
            mobile applications, and web crawling tools. We deliver high-quality, 
            custom solutions tailored to your specific business needs.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToContact}>
              Get Started
            </button>
            <button className="btn-secondary" onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Learn More
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">💻</div>
            <div className="card-text">Web Development</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">📱</div>
            <div className="card-text">Mobile App</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🕷️</div>
            <div className="card-text">Crawling Tools</div>
          </div>
          <div className="hero-gradient"></div>
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="var(--bg-light)"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero

