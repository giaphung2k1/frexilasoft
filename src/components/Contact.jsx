import React, { useState } from 'react'
import './Contact.css'
import { contactInfo } from '../data/contactInfo'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    alert('Thank you for contacting us! We will get back to you as soon as possible.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-badge">Contact</span>
          <h2 className="section-title">Let Us Help You</h2>
          <p className="section-description">
            Have questions or want to learn more about our services? 
            Don't hesitate to reach out to us!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>{contactInfo.title}</h3>
            {contactInfo.items.map((item, index) => (
              <div key={index} className="info-item">
                <div className="info-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 234 567 890"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Enter your message..."
              ></textarea>
            </div>
            <button type="submit" className="btn-primary btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

