import React, { useEffect, useRef, useState } from 'react';
import { SectionId } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 } // Trigger when 15% is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      id={SectionId.ABOUT} 
      ref={sectionRef}
      className="py-24 md:py-32 bg-white"
    >
      <div className={`max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Image Column - First in DOM to appear on top for Mobile */}
        <div className="flex justify-center md:justify-end order-1 md:order-1 h-full">
          <div className="relative w-full max-w-[320px] md:max-w-md aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 shadow-sm group">
            <img
              src="/profile.png" 
              alt="Eduardo Mendoza Profile"
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
            {/* Elegant overlay/border effect */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
          </div>
        </div>

        {/* Text Column - Second in DOM, appears below image on Mobile */}
        <div className="order-2 md:order-2 text-center md:text-left flex flex-col justify-center">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            {t.about.label}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-thin text-slate-900 mb-8 leading-tight">
            {t.about.heading}
          </h3>
          <div className="prose prose-slate text-slate-600 leading-loose mx-auto md:mx-0 text-lg font-light">
            <p className="mb-6">{t.about.p1}</p>
            <p className="mb-6">{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
          
          {/* Integrated Quote */}
          <blockquote className="mt-8 border-l-2 border-slate-900 pl-6 md:ml-0 mx-6 italic text-slate-800 font-serif text-lg leading-relaxed text-left">
             "{t.about.quote}"
          </blockquote>

          {/* Ghost Button */}
          <div className="mt-12">
            <a 
              href={`#${SectionId.CONTACT}`}
              className="inline-block border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 px-8 py-3 text-xs md:text-sm tracking-[0.2em] uppercase font-medium"
            >
              {t.about.cta}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
