import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-badge">About Us</span>
          <h2 className="section-title">Your Trusted Technology Partner</h2>
          <p className="section-description">
            FrexilaSoft is a technology company with over 10 years of experience 
            in web development, mobile app creation, and custom crawling tools. 
            We deliver professional solutions tailored to your business needs.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <span className="placeholder-icon">🏢</span>
                <p>FrexilaSoft</p>
              </div>
            </div>
          </div>

          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              At FrexilaSoft, we are committed to delivering the best technology solutions, 
              helping your business optimize processes, increase productivity, and achieve 
              sustainable success in the digital age.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div>
                  <h4>Expert Team</h4>
                  <p>Skilled developers and technology experts with proven track records</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div>
                  <h4>Custom Solutions</h4>
                  <p>Every project is uniquely designed to meet your specific requirements</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div>
                  <h4>Flexible Support</h4>
                  <p>Responsive support team ready to assist with your needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

