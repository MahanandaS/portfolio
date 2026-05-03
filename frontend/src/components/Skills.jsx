function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "HTML/CSS", "MySQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "React", "Vite"]
    },
    {
      title: "Developer Tools",
      skills: ["Git", "VS Code", "IntelliJ", "GitHub"]
    },
    {
      title: "Core Concepts",
      skills: ["OOP", "DSA", "DBMS", "Operating System", "RESTful API Design"]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
