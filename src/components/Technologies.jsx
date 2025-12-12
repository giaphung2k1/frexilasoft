import React from 'react'
import './Technologies.css'

const Technologies = () => {
  const technologies = [
    { 
      name: 'PHP', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      color: '#777BB4'
    },
    { 
      name: 'Laravel', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
      color: '#FF2D20'
    },
    { 
      name: 'Python', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: '#3776AB'
    },
    { 
      name: 'Node.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933'
    },
    { 
      name: 'Vue.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      color: '#4FC08D'
    },
    { 
      name: 'React', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61DAFB'
    },
    { 
      name: 'WordPress', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
      color: '#21759B'
    },
    { 
      name: 'Magento', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg',
      color: '#EE672F'
    },
    { 
      name: 'CodeIgniter', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
      color: '#EF4223'
    },
    { 
      name: 'Shopify', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg',
      color: '#96BF48'
    }
  ]

  return (
    <section id="technologies" className="technologies">
      <div className="technologies-container">
        <div className="section-header">
          <span className="section-badge">Technologies</span>
          <h2 className="section-title">Technologies We Work With</h2>
          <p className="section-description">
            We are proficient in a wide range of modern technologies and frameworks 
            to deliver the best solutions for your projects.
          </p>
        </div>

        <div className="technologies-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="technology-card">
              <div className="technology-logo-wrapper">
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="technology-logo"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'block'
                  }}
                />
                <div className="technology-logo-fallback" style={{ display: 'none' }}>
                  {tech.name}
                </div>
              </div>
              <h3 className="technology-name">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies

