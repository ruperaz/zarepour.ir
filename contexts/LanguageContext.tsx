'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Header
    name: 'Mohammad Zarepour',
    title: 'Software Engineer & Technical Manager',
    email: 'Contact: 0919 4500 230',
    location: 'Tehran, Iran',
    
    // Navigation
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Welcome to My Profile',
    heroDescription: 'Senior Software Engineer with 12+ years of experience in full-stack development, team leadership, and modern web technologies. Specialized in Java, Spring, React, and DevOps practices.',
    downloadResume: 'Download Resume',
    contactMe: 'Contact Me',
    
    // About Section
    aboutTitle: 'About Me',
    aboutText: 'I started programming in the late university years and now have nearly 12 years of professional work experience and have worked on large projects. I have worked with various programming languages and am familiar with them, but I am more proficient in .NET and Java. In addition to programming, I also work in the DevOps field and have good experience in this area. In the last two years, I have gained experience in the position of human resource management. Interview and recruitment work was with me. I participated in various meetings with employers and was the development team manager.',
    
    // Experience Section
    experienceTitle: 'Professional Experience',
    
    // Current Position
    currentPosition: 'Technical Manager',
    currentCompany: 'Romak Ertebat Paydar',
    currentDuration: '2020 - Present (4 years)',
    currentDescription: 'Leading development team in telecommunications sector, working on custom software for government organizations including Regulatory Organization, Ministry of Communications, and Hamrah-e Avval.',
    
    // Previous positions
    fullstackDev: 'Full Stack Developer',
    rayanCompany: 'Rayan Hamafza',
    rayanDuration: '2019 - 2020 (1 year)',
    rayanDescription: 'Developed online stock trading software. Rayan Hamafza is a stock exchange company providing trading services to various brokerages, serving over 60% of stock market users.',
    
    seniorDev: 'Senior Developer',
    shabakeCompany: 'Shabake Afzar',
    shabakeDuration: '2017 - 2019 (2 years)',
    shabakeDescription: 'Designed monitoring systems and dashboards. Shabake Afzar is a pioneer in network infrastructure development, providing both hardware and network-based software.',
    
    webgisDev: 'WebGIS Developer',
    miadCompany: 'Miad Andisheh Saz',
    miadDuration: '2013 - 2017 (4 years)',
    miadDescription: 'Developed GIS applications. Miad Andisheh Saz is a mapping company that produces map-based or GIS software.',
    
    warehouseDev: 'Warehouse Systems Developer',
    zebraCompany: 'ZebraAsia',
    zebraDuration: '2012 - 2013 (1 year)',
    zebraDescription: 'Developed warehouse applications. ZebraAsia is a hardware and software sales company for barcode and RFID-based warehouse systems.',
    
    // Skills Section
    skillsTitle: 'Technical Skills',
    backendTitle: 'Backend Development',
    frontendTitle: 'Frontend Development',
    databaseTitle: 'Databases & DevOps',
    toolsTitle: 'Tools & Technologies',
    
    // Education Section
    educationTitle: 'Education',
    mastersDegree: 'Master of Software Engineering',
    mastersUniversity: 'University of Tehran',
    mastersDuration: '2011 - 2014',
    bachelorsDegree: 'Bachelor of Software Engineering',
    bachelorsUniversity: 'University of Science and Culture',
    bachelorsDuration: '2006 - 2011',
    
    // Projects Section
    projectsTitle: 'Key Projects',
    
    // Footer
    footerText: '© 2024 Mohammad Zarepour. All rights reserved.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    portfolio: 'Portfolio'
  },
  fa: {
    // Header
    name: 'محمد زارعپور',
    title: 'برنامه نویس و مدیر فنی',
    email: 'تماس: ۰۹۱۹ ۴۵۰۰ ۲۳۰',
    location: 'تهران، ایران',
    
    // Navigation
    about: 'درباره من',
    experience: 'سوابق شغلی',
    skills: 'مهارت‌ها',
    projects: 'پروژه‌ها',
    education: 'تحصیلات',
    contact: 'تماس',
    
    // Hero Section
    heroTitle: 'خوش آمدید به پروفایل من',
    heroDescription: 'برنامه نویس ارشد با بیش از ۱۲ سال تجربه در توسعه فول استک، مدیریت تیم و تکنولوژی‌های مدرن وب. متخصص در جاوا، اسپرینگ، ری‌اکت و DevOps.',
    downloadResume: 'دانلود رزومه',
    contactMe: 'تماس با من',
    
    // About Section
    aboutTitle: 'درباره من',
    aboutText: 'برنامه نویسی رو از اواخر دانشگاه شروع کردم و الان نزدیک به ۱۲ سال سابقه کار حرفه‌ای دارم و توی پروژه‌های بزرگی کار کردم. با زبان‌های مختلف برنامه نویسی کار کردم و باهاشون آشنا هستم ولی بیشتر به دات نت و جاوا مسلط هستم. علاوه بر برنامه نویسی توی حوزه DevOps هم فعالیت می‌کنم و تجربیات خوبی توی این حوزه دارم.',
    
    // Experience Section
    experienceTitle: 'سوابق شغلی',
    
    // Current Position
    currentPosition: 'مدیر فنی تیم توسعه',
    currentCompany: 'روماک ارتباط پایدار',
    currentDuration: '۱۳۹۹ - اکنون (۴ سال)',
    currentDescription: 'شرکت روماک ارتباط در حوزه تلکام فعالیت دارد و نرم افزارهای سفارشی سازمان‌های دولتی مانند سازمان تنظیم و مقررات، وزارت ارتباطات و همراه اول را انجام می‌دهد.',
    
    // Previous positions
    fullstackDev: 'برنامه نویس فول استک',
    rayanCompany: 'رایان هم افزا',
    rayanDuration: '۱۳۹۷ - ۱۳۹۸ (۱ سال)',
    rayanDescription: 'شرکت رایان همافزا یکی از شرکت‌های بورسی می‌باشد که سرویس‌های خرید و فروش سهام به کارگزاری‌های مختلف ارائه می‌دهد و بیش ا�� ۶۰ درصد کاربران بورسی از سرویس‌های این شرکت استفاده می‌کنند.',
    
    seniorDev: 'برنامه نویس ارشد',
    shabakeCompany: 'شبکه افزار',
    shabakeDuration: '۱۳۹۵ - ۱۳۹۷ (۲ سال)',
    shabakeDescription: 'شرکت شبکه افزار یکی از پیشگامان توسعه زیرساخت شبکه در کشور می‌باشد که علاوه بر سخت افزار، نرم افزارهای مبتنی بر شبکه ارائه می‌دهد.',
    
    webgisDev: 'برنامه نویس',
    miadCompany: 'تحقیق و توسعه میعاد اندیشه ساز',
    miadDuration: '۱۳۹۲ - ۱۳۹۶ (۴ سال)',
    miadDescription: 'شرکت میعاد اندیشه ساز یک شرکت نقشه برداری می‌باشد که نرم افزارهای مبتنی بر نقشه یا اصطلاحاً GIS تولید می‌کند.',
    
    warehouseDev: 'برنامه نویس',
    zebraCompany: 'زبراسیا',
    zebraDuration: '۱۳۹۰ - ۱۳۹۱ (۱ سال)',
    zebraDescription: 'شرکت زبراسیا شرکت فروش سخت افزار و نرمافزارهای انبارداری مبتنی بر بارکد و RFID می‌باشد.',
    
    // Skills Section
    skillsTitle: 'مهارت‌های فنی',
    backendTitle: 'توسعه بک‌اند',
    frontendTitle: 'توسعه فرونت‌اند',
    databaseTitle: 'پایگاه داده و DevOps',
    toolsTitle: 'ابزارها و تکنولوژی‌ها',
    
    // Education Section
    educationTitle: 'سوابق تحصیلی',
    mastersDegree: 'کارشناسی ارشد مهندسی نرم افزار',
    mastersUniversity: 'دانشگاه تهران',
    mastersDuration: '۱۳۹۰ - ۱۳۹۳',
    bachelorsDegree: 'کارشناسی مهندسی نرم افزار',
    bachelorsUniversity: 'دانشگاه علم و فرهنگ',
    bachelorsDuration: '۱۳۸۵ - ۱۳۹۰',
    
    // Projects Section
    projectsTitle: 'پروژه‌های کلیدی',
    
    // Footer
    footerText: '© ۱۴۰۳ محمد زارعپور. تمامی حقوق محفوظ است.',
    linkedin: 'لینکدین',
    github: 'گیت‌هاب',
    portfolio: 'نمونه کارها'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
