'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections for scroll animations
    const elementsToAnimate = document.querySelectorAll(
      '.hero-section, .about-section, .experience-section, .skills-section, .education-section, .experience-card, .skill-category, .education-card'
    );

    elementsToAnimate.forEach((el) => {
      el.classList.add('animate-on-scroll');
      observer.observe(el);
    });

    // Scroll progress indicator
    const updateScrollIndicator = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      
      const indicator = document.querySelector('.scroll-indicator') as HTMLElement;
      if (indicator) {
        indicator.style.transform = `scaleX(${scrollProgress / 100})`;
      }
    };

    window.addEventListener('scroll', updateScrollIndicator);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateScrollIndicator);
    };
  }, []);

  return (
    <div className="scroll-indicator" />
  );
}
