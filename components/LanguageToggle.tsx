'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <button
        className={`lang-btn ${language === 'fa' ? 'active' : ''}`}
        onClick={() => setLanguage('fa')}
      >
        فا
      </button>
    </div>
  );
}
