import { useEffect, useRef, useState } from 'react'

function Projects() {
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  const projects = [
    {
      title: "Facial Recognition Attendance Management System",
      description: "A real-time facial recognition system to automate classroom attendance. Built using Python and OpenCV with face detection and recognition algorithms.",
      tech: ["Python", "OpenCV"],
      highlights: [
        "Face detection and recognition using facial encoding and similarity matching",
        "Automated attendance logging with timestamp capture",
        "Improved operational efficiency by eliminating manual roll calls"
      ],
      github: "https://github.com/MahanandaS/facial-recognition-attendance",
      demo: "#"
    },
    {
      title: "Smart Job Application Tracker",
      description: "A comprehensive REST API-based job application tracking system with full CRUD operations and role-based access control.",
      tech: ["Spring Boot", "React", "MySQL", "JWT"],
      highlights: [
        "Designed and exposed scalable REST APIs using Spring Boot",
        "Implemented authentication and authorization using JWT tokens",
        "Modeled relational entities with JPA/Hibernate for optimized query performance",
        "Secured endpoints using Spring Security with role-based access control",
        "Built responsive React frontend with integrated backend services"
      ],
      github: "https://github.com/MahanandaS/job-tracker",
      demo: "#"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index])
            }, index * 200)
          }
        })
      },
      { threshold: 0.2 }
    )

    const cards = document.querySelectorAll('.project-card')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`project-card ${visibleCards.includes(idx) ? 'animate-card-in' : ''}`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15,3 21,3 21,9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge animate-tech-in" style={{ animationDelay: `${(idx * 0.2) + (i * 0.1)}s` }}>
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="highlight-item animate-highlight-in" style={{ animationDelay: `${(idx * 0.2) + (i * 0.05)}s` }}>
                    <span className="highlight-bullet">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
