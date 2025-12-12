import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Professional website design and development using the latest technologies. From simple landing pages to complex web applications.'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'High-quality iOS and Android applications with optimized user experience. Native and cross-platform solutions available.'
    },
    {
      icon: '🕷️',
      title: 'Crawling Tools',
      description: 'Custom web scraping and data extraction tools. Automated solutions for collecting and processing web data efficiently.'
    },
    {
      icon: '⚡',
      title: 'API Development',
      description: 'RESTful APIs and backend services to power your applications. Scalable and secure solutions for your business needs.'
    },
    {
      icon: '🔧',
      title: 'Custom Tools',
      description: 'Tailored automation tools and scripts to streamline your workflows and improve productivity.'
    },
    {
      icon: '🔄',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support to keep your projects running smoothly.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <span className="section-badge">Services</span>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-description">
            We specialize in website development, mobile applications, and custom crawling tools. 
            Our services are designed to meet your specific business requirements.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

