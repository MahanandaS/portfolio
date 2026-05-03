import { useEffect, useRef, useState } from 'react'

function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Lakshmi Narain College of Technology",
      location: "Bhopal, MP",
      duration: "Nov. 2022 - May 2026",
      status: "Final Year",
      grade: "Pursuing"
    },
    {
      degree: "Science (PCM)",
      institution: "Don Bosco Academy",
      location: "Patna, Bihar",
      duration: "2021",
      grade: "Completed"
    }
  ]

  const certifications = [
    "Programming using Java - Infosys Springboard",
    "Database Management System - Infosys Springboard",
    "React Development Fundamentals",
    "Spring Boot Microservices"
  ]

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
    <section id="education" className="education" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>Education & Certifications</h2>
        <div className="education-content">
          <div className="education-section">
            <h3 className={isVisible ? 'animate-fade-in' : ''}>Education</h3>
            <div className="education-timeline">
              {education.map((edu, idx) => (
                <div key={idx} className={`education-item ${isVisible ? 'animate-timeline-in' : ''}`} style={{ animationDelay: `${idx * 0.3}s` }}>
                  <div className="timeline-dot"></div>
                  <div className="education-content-wrapper">
                    <div className="education-header">
                      <h4>{edu.degree}</h4>
                      <span className="education-grade">{edu.grade}</span>
                    </div>
                    <p className="institution">{edu.institution}</p>
                    <p className="details">{edu.location} | {edu.duration}</p>
                    {edu.status && <span className="status-badge">{edu.status}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3 className={isVisible ? 'animate-fade-in-delay' : ''}>Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, idx) => (
                <div key={idx} className={`cert-item ${isVisible ? 'animate-cert-in' : ''}`} style={{ animationDelay: `${(idx * 0.1) + 0.5}s` }}>
                  <div className="cert-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                  </div>
                  <span className="cert-text">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
