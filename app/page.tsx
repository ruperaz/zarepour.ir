export default function HomePage() {
  return (
    <main className="profile-container">
      {/* Header Section */}
      <header className="header-section">
        <div className="header-content">
          <h1 className="profile-name">Mohammad Zarepour</h1>
          <p className="profile-title">Software Engineer & Developer</p>
          <div className="contact-info">
            <span className="contact-item">📧 mohammad.zarepour@email.com</span>
            <span className="contact-item">📱 +1 (555) 123-4567</span>
            <span className="contact-item">📍 San Francisco, CA</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Welcome to My Profile</h2>
          <p className="hero-description">
            Passionate software engineer with expertise in full-stack development,
            modern web technologies, and creating innovative solutions that drive business growth.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Download Resume</button>
            <button className="btn-secondary">Contact Me</button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <h3 className="job-title">Senior Software Engineer</h3>
            <p className="company-name">Tech Innovations Inc.</p>
            <p className="job-duration">2022 - Present</p>
            <ul className="job-responsibilities">
              <li>Led development of scalable web applications using React and Node.js</li>
              <li>Implemented microservices architecture improving system performance by 40%</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>
          <div className="experience-card">
            <h3 className="job-title">Full Stack Developer</h3>
            <p className="company-name">Digital Solutions Corp.</p>
            <p className="job-duration">2020 - 2022</p>
            <ul className="job-responsibilities">
              <li>Developed responsive web applications with modern frameworks</li>
              <li>Collaborated with cross-functional teams to deliver projects on time</li>
              <li>Optimized database queries reducing load times by 50%</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="skill-category-title">Frontend</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Tailwind</span>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Backend</h3>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">API Design</span>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Tools & DevOps</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">CI/CD</span>
              <span className="skill-tag">Kubernetes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <h3 className="degree-title">Bachelor of Science in Computer Science</h3>
          <p className="university-name">University of California, Berkeley</p>
          <p className="graduation-year">2018 - 2022</p>
          <p className="education-details">Graduated Magna Cum Laude • GPA: 3.8/4.0</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <p className="footer-text">© 2024 Mohammad Zarepour. All rights reserved.</p>
        <div className="social-links">
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">Portfolio</a>
        </div>
      </footer>
    </main>
  );
}
