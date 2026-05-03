import { useEffect, useRef, useState } from 'react'

function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>About Me</h2>
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'animate-fade-in-left' : ''}`}>
            <p className="about-paragraph">
              I'm a final-year B.Tech Computer Science student at Lakshmi Narain College of Technology
              with a strong focus on Java backend development using Spring Boot. I have solid understanding
              of OOP, DBMS, OS, and RESTful API design.
            </p>
            <p className="about-paragraph">
              I'm passionate about building scalable backend services and have experience in integrating databases
              and confidently explaining projects in interviews. I enjoy solving complex problems and learning new technologies.
            </p>
          </div>
          <div className={`about-stats ${isVisible ? 'animate-fade-in-right' : ''}`}>
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Learning</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
          </div>
        </div>
        <div className={`about-info ${isVisible ? 'animate-slide-up-delay' : ''}`}>
          <div className="info-item">
            <span className="label">Email:</span>
            <span>mihirshial@gmail.com</span>
          </div>
          <div className="info-item">
            <span className="label">Phone:</span>
            <span>+91 6202104895</span>
          </div>
          <div className="info-item">
            <span className="label">Location:</span>
            <span>Bhopal, MP</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
