import useIntersectionObserver from '../hooks/useIntersectionObserver'

function Skills() {
  const [ref, isVisible] = useIntersectionObserver()

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
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <h2 className={isVisible ? 'reveal active' : 'reveal'}>Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`skill-category ${isVisible ? 'reveal active' : 'reveal'}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="skill-tag"
                    style={{ animationDelay: `${(idx * 0.1) + (i * 0.05)}s` }}
                  >
                    {skill}
                  </span>
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
