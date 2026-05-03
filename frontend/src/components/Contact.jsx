function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">Feel free to reach out to me via email or connect on social platforms.</p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:mihirshial@gmail.com">mihirshial@gmail.com</a>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <a href="tel:+916202104895">+91 6202104895</a>
            </div>
            <div className="contact-item">
              <h3>Social Links</h3>
              <div className="social-links">
                <a href="https://github.com/MahanandaS" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
