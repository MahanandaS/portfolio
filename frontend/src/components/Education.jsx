function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Lakshmi Narain College of Technology",
      location: "Bhopal, MP",
      duration: "Nov. 2022 - May 2026",
      status: "Final Year"
    },
    {
      degree: "Science (PCM)",
      institution: "Don Bosco Academy",
      location: "Patna, Bihar",
      duration: "2021"
    }
  ]

  const certifications = [
    "Programming using Java - Infosys Springboard",
    "Database Management System - Infosys Springboard"
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education & Certifications</h2>
        <div className="education-content">
          <div className="education-section">
            <h3>Education</h3>
            <div className="education-list">
              {education.map((edu, idx) => (
                <div key={idx} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <p className="details">{edu.location} | {edu.duration}</p>
                  {edu.status && <p className="status">{edu.status}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3>Certifications</h3>
            <div className="certifications-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-item">
                  <span className="cert-check">✓</span>
                  <span>{cert}</span>
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
