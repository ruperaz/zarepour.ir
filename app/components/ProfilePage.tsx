"use client";
import React, { useState } from "react";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
  Code,
  Database,
  Server,
  Briefcase,
  GraduationCap,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const ProfilePage = () => {
  const [language, setLanguage] = useState("en");
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const content = {
    en: {
      name: "Mohammad Zare Pour",
      title: "Senior Software Engineer & Technical Manager",
      subtitle: "Full-Stack Developer | DevOps Engineer | Team Lead",
      contact: {
        phone: "0919 4500 230",
        location: "Tehran, Fatemi",
        age: "37",
        status: "Married",
        military: "Completed",
      },
      about: {
        title: "About Me",
        text: "I started programming in the final years of university and now have nearly 12 years of professional experience working on large-scale projects. I have worked with various programming languages and am most proficient in .NET and Java. In addition to programming, I am active in the DevOps field and have good experience in this area. In the last two years, I have gained experience in managing teams, conducting interviews and recruitment. I participate in various meetings with clients and lead development teams. When decisions need to be made about architecture or selecting specific technologies and tools, I make the technical decisions.",
      },
      skills: {
        title: "Technical Skills",
        backend: {
          title: "Backend Programming",
          java: "Proficient in web programming with Java and Spring (Core, REST, MVC, Security, Boot) and Hibernate",
          csharp:
            "Proficient in web programming with .NET and ASP MVC and Entity Framework",
        },
        frontend: {
          title: "Frontend Frameworks & Libraries",
          angular: "Proficient in Angular Material and TypeScript",
          react: "Proficient in JSX and Redux",
          other:
            "JQuery, Three.js, D3, Bootstrap, Primefaces, Ionic, Kendo UI, Chart.js, Highchart, Openlayers",
        },
        databases: {
          title: "Database Experience",
          sqlserver:
            "Proficient in installation and setup of ALWAYS ON and T-SQL optimization",
          postgresql:
            "Proficient in installation, setup, and Postgis spatial module",
          oracle: "Proficient in PL/SQL",
        },
        devops: {
          title: "DevOps & Infrastructure",
          linux:
            "Proficient in server installation, configuration, and Bash scripting",
          docker: "Proficient in Dockerizing applications",
          kubernetes:
            "Proficient in Kubernetes cluster installation and kubeadm",
          servers: "Apache Tomcat, IIS, Nginx, Apache HTTP",
          cicd: "Jenkins CI/CD pipeline configuration",
          monitoring: "Grafana and Prometheus monitoring tools",
        },
      },
      experience: {
        title: "Work Experience",
        jobs: [
          {
            company: "Romak Sustainable Communication",
            position: "Technical Manager - Development Team",
            duration: "4 years",
            description:
              "Romak operates in the telecom sector and develops custom software for government organizations such as the Regulatory Organization, Ministry of Communications, and Hamrah-e Avval.",
          },
          {
            company: "Rayan Hamafza",
            position: "Full Stack Developer",
            duration: "1 year",
            description:
              "Stock trading software design. Rayan Hamafza is a publicly traded company that provides stock trading services to various brokerages, with over 60% of stock market users utilizing their services.",
          },
          {
            company: "Shabakeafzar",
            position: "Senior Developer",
            duration: "2 years",
            description:
              "Design of monitoring systems and dashboards. Shabakeafzar is one of the pioneers in network infrastructure development in the country.",
          },
          {
            company: "Meyad Andishehsaz R&D",
            position: "Developer",
            duration: "4 years",
            description:
              "Design of WebGIS applications. Meyad Andishehsaz is a mapping company that produces GIS-based software.",
          },
          {
            company: "Zebrasia",
            position: "Developer",
            duration: "1 year",
            description:
              "Design of warehouse management applications. Zebrasia sells hardware and warehouse management software based on barcode and RFID.",
          },
        ],
      },
      education: {
        title: "Education",
        degrees: [
          {
            degree: "Master of Software Engineering",
            university: "University of Tehran",
            years: "2011-2014",
          },
          {
            degree: "Bachelor of Software Engineering",
            university: "Science and Culture University",
            years: "2006-2011",
          },
        ],
      },
      projects: {
        title: "Key Projects",
        list: [
          {
            name: "Ticketing System",
            year: "2023-Present",
            client: "Hamrah-e Avval",
            description:
              "A web-based workflow management system (BPMS) including form design, workflow, task management, and reporting.",
            tech: "Java, Spring Boot, React, Camunda BPMN, FormIO, Stimulsoft",
          },
          {
            name: "Digital Location Marketing System",
            year: "2022-2023",
            client: "Hamrah-e Avval",
            description:
              "A web-based workflow management system for creating and managing various organizational processes.",
            tech: "Java, Spring Boot, React, Camunda, FormIO, Stimulsoft",
          },
          {
            name: "Frequency Interference Detection System",
            year: "2020-Present",
            client: "Hamrah-e Avval",
            description:
              "A web-based system for detecting and resolving frequency interferences on Hamrah-e Avval towers.",
            tech: "Java, Spring Boot, React, Camunda, FormIO, Stimulsoft, Openlayers",
          },
          {
            name: "Mobile Number Portability System",
            year: "2019-Present",
            client: "Regulatory Organization",
            description:
              "System for transferring mobile numbers between service providers without changing the number.",
            tech: ".NET Core, React, Oracle",
          },
        ],
      },
    },
    fa: {
      name: "محمد زارع پور",
      title: "مهندس نرم‌افزار ارشد و مدیر فنی",
      subtitle: "برنامه‌نویس فول‌استک | مهندس DevOps | رهبر تیم",
      contact: {
        phone: "0919 4500 230",
        location: "تهران، فاطمی",
        age: "37",
        status: "متاهل",
        military: "انجام شده",
      },
      about: {
        title: "درباره من",
        text: "برنامه‌نویسی را از اواخر دانشگاه شروع کردم و الان نزدیک به 12 سال سابقه کار حرفه‌ای دارم و توی پروژه‌های بزرگی کار کردم. با زبان‌های مختلف برنامه‌نویسی کار کردم و باهاشون آشنا هستم و بیشتر به دات نت و جاوا مسلط هستم. علاوه بر برنامه‌نویسی توی حوزه DevOps هم فعالیت می‌کنم و تجربیات خوبی توی این حوزه دارم. این دو سال آخر در مسمت مدیریت نیروها کسب تجربه کردم. کارهای مصاحبه و استخدام با من بود. در جلسات مختلف با کارفرما شرکت می‌کردم و مدیر تیم توسعه بودم.",
      },
      skills: {
        title: "مهارت‌های فنی",
        backend: {
          title: "برنامه‌نویسی بک‌اند",
          java: "مسلط به برنامه‌نویسی وب با جاوا و Spring (Core, REST, MVC, Security, Boot) و Hibernate",
          csharp:
            "مسلط به برنامه‌نویسی وب با دات نت و ASP MVC و Entity Framework",
        },
        frontend: {
          title: "فریمورک‌ها و کتابخانه‌های فرونت‌اند",
          angular: "مسلط به Angular Material و TypeScript",
          react: "مسلط به JSX و Redux",
          other:
            "JQuery, Three.js, D3, JQuery, Bootstrap, Primefaces, Ionic, Kendo UI, Chart Js, Highchart, Openlayers",
        },
        databases: {
          title: "تجربیات کار با پایگاه داده‌ها",
          sqlserver:
            "مسلط به نصب و راه‌اندازی ALWAYS ON و همچنین مسلط به T-SQL و بهینه‌سازی کوئری‌ها",
          postgresql:
            "مسلط به نصب و راه‌اندازی و همچنین مسلط به ماژول مکانی Postgis",
          oracle: "مسلط به PL/SQL",
        },
        devops: {
          title: "DevOps و زیرساخت",
          linux:
            "مسلط به نصب و راه‌اندازی و کانفیگ سرور و همچنین نوشتن Bash Script",
          docker: "مسلط به Dockerize کردن نرم‌افزارها",
          kubernetes: "مسلط به نصب و راه‌اندازی کلاستر Kubernetes و kubeadm",
          servers: "Apache Tomcat, IIS, Nginx, Apache HTTP",
          cicd: "Jenkins CI/CD pipeline configuration",
          monitoring: "ابزارهای مانیتورینگ Grafana و Prometheus",
        },
      },
      experience: {
        title: "سوابق شغلی",
        jobs: [
          {
            company: "روماک ارتباط پایدار",
            position: "مدیر فنی تیم توسعه",
            duration: "4 سال",
            description:
              "شرکت روماک ارتباط در حوزه تلکام فعالیت دارد و نرم‌افزارهای سفارشی سازمان‌های دولتی مانند سازمان تنظیم و مقررات، وزارت ارتباطات و همراه اول را انجام می‌دهد.",
          },
          {
            company: "رایان همافزا",
            position: "برنامه‌نویس فول استک",
            duration: "1 سال",
            description:
              "طراحی نرم‌افزار خرید و فروش آنلاین سهام. شرکت رایان همافزا یکی از شرکت‌های بورسی می‌باشد که سرویس‌های خرید و فروش سهام به کارگزاری‌های مختلف ارائه می‌دهد.",
          },
          {
            company: "شبکه افزار",
            position: "برنامه‌نویس ارشد",
            duration: "2 سال",
            description:
              "طراحی سامانه‌های مانیتورینگ و داشبورد. شرکت شبکه افزار یکی از پیشگامان توسعه زیرساخت شبکه در کشور می‌باشد.",
          },
          {
            company: "تحقیق و توسعه میعاد اندیشه ساز",
            position: "برنامه‌نویس",
            duration: "4 سال",
            description:
              "طراحی اپلیکیشن‌های WebGIS. شرکت میعاد اندیشه ساز یک شرکت نقشه‌برداری می‌باشد که نرم‌افزارهای مبتنی بر نقشه یا اصطلاحاً GIS تولید می‌کند.",
          },
          {
            company: "زبراسیا",
            position: "برنامه‌نویس",
            duration: "1 سال",
            description:
              "طراحی اپلیکیشن‌های انبارداری. شرکت زبراسیا شرکت فروش سخت‌افزار و نرم‌افزارهای انبارداری مبتنی بر بارکد و RFID می‌باشد.",
          },
        ],
      },
      education: {
        title: "سوابق تحصیلی",
        degrees: [
          {
            degree: "کارشناسی ارشد مهندسی نرم‌افزار",
            university: "دانشگاه تهران",
            years: "1390-1393",
          },
          {
            degree: "کارشناسی مهندسی نرم‌افزار",
            university: "دانشگاه علم و فرهنگ",
            years: "1385-1390",
          },
        ],
      },
      projects: {
        title: "مهم‌ترین پروژه‌های انجام شده",
        list: [
          {
            name: "سامانه تیکتینگ",
            year: "1402-اکنون",
            client: "شرکت همراه اول",
            description:
              "یک نرم‌افزار تحت وب مدیریت گردش کار یا همان BPMS می‌باشد که شامل طراحی فرم و گردش کار و کارتابل و گزارشات می‌باشد.",
            tech: "Java, Spring Boot, React, Camunda BPMN, FormIO, Stimulsoft",
          },
          {
            name: "سامانه دیجیتال مارکتینگ مکانی",
            year: "1401-1401",
            client: "شرکت همراه اول",
            description:
              "یک نرم‌افزار تحت وب مدیریت گردش کار برای ایجاد و مدیریت فرایندهای مختلف سازمانی.",
            tech: "Java, Spring Boot, React, Camunda, FormIO, Stimulsoft",
          },
          {
            name: "سامانه کشف و رفع تداخلات فرکانسی",
            year: "1399-اکنون",
            client: "شرکت همراه اول",
            description:
              "یک نرم‌افزار تحت وب برای کشف و رفع تداخلات فرکانسی بر روی دکل‌های همراه اول.",
            tech: "Java, Spring Boot, React, Camunda, FormIO, Stimulsoft, Openlayers",
          },
          {
            name: "سامانه ترابردپذیری شماره‌های تلفن همراه",
            year: "1398-اکنون",
            client: "سازمان تنظیم و مقررات",
            description:
              "سیستم انتقال شماره همراه از یک سرویس‌دهنده به سرویس‌دهنده دیگر بدون تغییر شماره.",
            tech: ".NET Core, React, Oracle",
          },
        ],
      },
    },
  };

  const currentLang = content[language];
  const isRTL = language === "fa";

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 ${
        isRTL ? "rtl" : "ltr"
      }`}
    >
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {currentLang.name}
                </h1>
                <p className="text-gray-600">{currentLang.title}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-gray-600" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">English</option>
                <option value="fa">فارسی</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {currentLang.name}
                </h3>
                <p className="text-gray-600 text-sm">{currentLang.subtitle}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 text-sm">
                    {currentLang.contact.phone}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 text-sm">
                    {currentLang.contact.location}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 text-sm">
                    {currentLang.contact.age} years old
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <User className="w-6 h-6 mr-2 text-blue-600" />
                {currentLang.about.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {currentLang.about.text}
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-600" />
                {currentLang.skills.title}
              </h2>

              <div className="space-y-4">
                {/* Backend Skills */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleSection("backend")}
                    className="w-full px-4 py-3 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <div className="flex items-center">
                      <Server className="w-5 h-5 mr-2 text-green-600" />
                      <span className="font-semibold">
                        {currentLang.skills.backend.title}
                      </span>
                    </div>
                    {expandedSection === "backend" ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {expandedSection === "backend" && (
                    <div className="p-4 space-y-3">
                      <div>
                        <span className="font-semibold text-blue-600">
                          Java:
                        </span>
                        <p className="text-gray-700 text-sm mt-1">
                          {currentLang.skills.backend.java}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold text-blue-600">C#:</span>
                        <p className="text-gray-700 text-sm mt-1">
                          {currentLang.skills.backend.csharp}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Frontend Skills */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleSection("frontend")}
                    className="w-full px-4 py-3 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <div className="flex items-center">
                      <Code className="w-5 h-5 mr-2 text-purple-600" />
                      <span className="font-semibold">
                        {currentLang.skills.frontend.title}
                      </span>
                    </div>
                    {expandedSection === "frontend" ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {expandedSection === "frontend" && (
                    <div className="p-4 space-y-3">
                      <div>
                        <span className="font-semibold text-blue-600">
                          Angular:
                        </span>
                        <p className="text-gray-700 text-sm mt-1">
                          {currentLang.skills.frontend.angular}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold text-blue-600">
                          React:
                        </span>
                        <p className="text-gray-700 text-sm mt-1">
                          {currentLang.skills.frontend.react}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold text-blue-600">
                          Others:
                        </span>
                        <p className="text-gray-700 text-sm mt-1">
                          {currentLang.skills.frontend.other}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Database Skills */}
                <div className="border rounded-lg">
                  <button
                    onClick={() => toggleSection("databases")}
                    className="w-full px-4 py-3 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <div className="flex items-center">
                      <Database className="w-5 h-5 mr-2 text-orange-600" />
                      <span className="font-semibold">
                        {currentLang.skills.databases.title}
                      </span>
                    </div>
                    {expandedSection === "databases" ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {expandedSection === "databases" && (
                    <div className="p-4 space-y-3">
                      <div>
                        <span className="font-semibold text-blue-600">
                          SQL Server:
                        </span>
                        <p className="text-gray-700 text-sm mt-1">
                          {currentLang.skills.databases.sqlserver}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold text-blue-600">
                          PostgreSQL:
                        </span>
                        <p className="text-gray-700 text-sm mt-1">
                          {currentLang.skills.databases.postgresql}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold text-blue-600">
                          Oracle:
                        </span>
                        <p className="text-gray-700 text-sm mt-1">
                          {currentLang.skills.databases.oracle}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
                {currentLang.experience.title}
              </h2>
              <div className="space-y-6">
                {currentLang.experience.jobs.map((job, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-bold text-lg text-gray-800">
                      {job.company}
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      {job.position}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">{job.duration}</p>
                    <p className="text-gray-700 text-sm">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                {currentLang.education.title}
              </h2>
              <div className="space-y-4">
                {currentLang.education.degrees.map((degree, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-bold text-lg text-gray-800">
                      {degree.degree}
                    </h3>
                    <p className="text-green-600 font-semibold">
                      {degree.university}
                    </p>
                    <p className="text-gray-600 text-sm">{degree.years}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-blue-600" />
                {currentLang.projects.title}
              </h2>
              <div className="grid gap-6">
                {currentLang.projects.list.map((project, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {project.year}
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        {project.client}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="text-xs text-gray-600">
                      <span className="font-semibold">Tech Stack:</span>{" "}
                      {project.tech}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
