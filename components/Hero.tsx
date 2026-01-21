import React from 'react';
import { SectionId } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id={SectionId.HERO}
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 leading-[1.1] mb-8">
          {t.hero.headlineStart} <br className="hidden md:block" />
          <span className="text-slate-500">{t.hero.headlineHighlight}</span> {t.hero.headlineEnd}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto mb-12">
          {t.hero.subhead}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`#${SectionId.PILLARS}`}
            className="px-8 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors duration-200 text-sm tracking-wide"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;