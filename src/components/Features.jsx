import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      title: 'High Performance',
      description: 'Optimized performance to ensure smooth user experience across all platforms',
      icon: '⚡'
    },
    {
      title: 'Maximum Security',
      description: 'Applying the highest security standards to protect your data and applications',
      icon: '🛡️'
    },
    {
      title: 'Scalable Solutions',
      description: 'Flexible architecture that allows expansion according to your business needs',
      icon: '📈'
    },
    {
      title: 'Responsive Support',
      description: 'Dedicated support team ready to resolve any issues and answer your questions',
      icon: '💬'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="section-header">
          <span className="section-badge">Features</span>
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-description">
            We don't just provide technology solutions, we deliver real value 
            to help your business grow and succeed.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <h3>Ready to Start Your Project?</h3>
          <p>Contact us today for a free consultation</p>
          <button 
            className="btn-primary"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features

