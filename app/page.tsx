'use client';

import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

export default function HomePage() {
  const { language, t } = useLanguage();
  const isRTL = language === 'fa';

  return (
    <main className={`profile-container ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header Section */}
      <header className="header-section">
        <div className="language-toggle-container">
          <LanguageToggle />
        </div>
        <div className="header-content">
          <h1 className="profile-name">{t('name')}</h1>
          <p className="profile-title">{t('title')}</p>
          <div className="contact-info">
            <span className="contact-item">📱 {t('email')}</span>
            <span className="contact-item">📍 {t('location')}</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">{t('heroTitle')}</h2>
          <p className="hero-description">
            {t('heroDescription')}
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">{t('downloadResume')}</button>
            <button className="btn-secondary">{t('contactMe')}</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2 className="section-title">{t('aboutTitle')}</h2>
        <div className="about-content">
          <p className="about-text">
            {t('aboutText')}
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2 className="section-title">{t('experienceTitle')}</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <h3 className="job-title">{t('currentPosition')}</h3>
            <p className="company-name">{t('currentCompany')}</p>
            <p className="job-duration">{t('currentDuration')}</p>
            <p className="job-description">{t('currentDescription')}</p>
          </div>
          <div className="experience-card">
            <h3 className="job-title">{t('fullstackDev')}</h3>
            <p className="company-name">{t('rayanCompany')}</p>
            <p className="job-duration">{t('rayanDuration')}</p>
            <p className="job-description">{t('rayanDescription')}</p>
          </div>
          <div className="experience-card">
            <h3 className="job-title">{t('seniorDev')}</h3>
            <p className="company-name">{t('shabakeCompany')}</p>
            <p className="job-duration">{t('shabakeDuration')}</p>
            <p className="job-description">{t('shabakeDescription')}</p>
          </div>
          <div className="experience-card">
            <h3 className="job-title">{t('webgisDev')}</h3>
            <p className="company-name">{t('miadCompany')}</p>
            <p className="job-duration">{t('miadDuration')}</p>
            <p className="job-description">{t('miadDescription')}</p>
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
