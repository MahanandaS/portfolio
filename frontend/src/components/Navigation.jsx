import { useState, useEffect } from 'react'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand" onClick={() => scrollToSection('home')}>
          Mahananda
        </div>
        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? '✕' : '☰'}
        </button>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('education')}>Education</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
