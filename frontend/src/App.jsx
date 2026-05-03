import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      {/* Floating Code Elements */}
      <div className="floating-code">function()&#123;...&#125;</div>
      <div className="floating-code">const data = [...]</div>
      <div className="floating-code">class Component&#123;...&#125;</div>
      <div className="floating-code">import React from...</div>

      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <footer className="footer">
        <p>&copy; 2026 Mahananda. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
