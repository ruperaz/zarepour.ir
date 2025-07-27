'use client';

import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import ScrollAnimations from '../components/ScrollAnimations';

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
        <h2 className="section-title">{t('skillsTitle')}</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="skill-category-title">{t('backendTitle')}</h3>
            <div className="skill-tags">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">Spring MVC</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">ASP.NET MVC</span>
              <span className="skill-tag">Entity Framework</span>
              <span className="skill-tag">Hibernate</span>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">{t('frontendTitle')}</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Angular 2+</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">jQuery</span>
              <span className="skill-tag">Bootstrap</span>
              <span className="skill-tag">Three.js</span>
              <span className="skill-tag">D3.js</span>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">{t('databaseTitle')}</h3>
            <div className="skill-tags">
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MS SQL Server</span>
              <span className="skill-tag">Oracle</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Kubernetes</span>
              <span className="skill-tag">Jenkins</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">{t('toolsTitle')}</h3>
            <div className="skill-tags">
              <span className="skill-tag">Linux</span>
              <span className="skill-tag">Apache Tomcat</span>
              <span className="skill-tag">Nginx</span>
              <span className="skill-tag">Grafana</span>
              <span className="skill-tag">Prometheus</span>
              <span className="skill-tag">Elasticsearch</span>
              <span className="skill-tag">Kafka</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2 className="section-title">{t('educationTitle')}</h2>
        <div className="education-grid">
          <div className="education-card">
            <h3 className="degree-title">{t('mastersDegree')}</h3>
            <p className="university-name">{t('mastersUniversity')}</p>
            <p className="graduation-year">{t('mastersDuration')}</p>
          </div>
          <div className="education-card">
            <h3 className="degree-title">{t('bachelorsDegree')}</h3>
            <p className="university-name">{t('bachelorsUniversity')}</p>
            <p className="graduation-year">{t('bachelorsDuration')}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <p className="footer-text">{t('footerText')}</p>
        <div className="social-links">
          <a href="#" className="social-link">{t('linkedin')}</a>
          <a href="#" className="social-link">{t('github')}</a>
          <a href="#" className="social-link">{t('portfolio')}</a>
        </div>
      </footer>
    </main>
  );
}
