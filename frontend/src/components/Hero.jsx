import { useEffect, useState } from 'react'
import Particles from './Particles'

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="hero">
      <Particles />
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      <div className="hero-content">
        <div className={`hero-text ${isLoaded ? 'animate-in' : ''}`}>
          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name">Mahananda</span>
          </h1>
          <p className="hero-subtitle">
            <span className="subtitle-text">Full Stack Developer</span>
            <span className="subtitle-divider">|</span>
            <span className="subtitle-text">Java Backend Specialist</span>
            <span className="subtitle-divider">|</span>
            <span className="subtitle-text">React Enthusiast</span>
          </p>
          <p className="hero-description">
            Final-year B.Tech Computer Science student specializing in Java backend development with Spring Boot.
            Passionate about building scalable backend services and responsive frontends.
          </p>
        </div>
        <div className={`hero-buttons ${isLoaded ? 'animate-in-delay' : ''}`}>
          <a href="#contact" className="btn btn-primary">
            <span>Get In Touch</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="https://github.com/MahanandaS" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <span>GitHub</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
