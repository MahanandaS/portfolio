function Projects() {
  const projects = [
    {
      title: "Facial Recognition Attendance Management System",
      description: "A real-time facial recognition system to automate classroom attendance. Built using Python and OpenCV with face detection and recognition algorithms.",
      tech: ["Python", "OpenCV"],
      highlights: [
        "Face detection and recognition using facial encoding and similarity matching",
        "Automated attendance logging with timestamp capture",
        "Improved operational efficiency by eliminating manual roll calls"
      ]
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
      ]
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
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
