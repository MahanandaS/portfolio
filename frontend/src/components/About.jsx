function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a final-year B.Tech Computer Science student at Lakshmi Narain College of Technology 
              with a strong focus on Java backend development using Spring Boot. I have solid understanding 
              of OOP, DBMS, OS, and RESTful API design.
            </p>
            <p>
              I'm passionate about building scalable backend services and have experience in integrating databases 
              and confidently explaining projects in interviews. I enjoy solving complex problems and learning new technologies.
            </p>
            <div className="about-info">
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
        </div>
      </div>
    </section>
  )
}

export default About
