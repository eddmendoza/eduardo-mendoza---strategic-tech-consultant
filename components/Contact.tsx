import React from 'react';
import { SectionId } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
          {t.contact.heading}
        </h2>
        <p className="text-slate-600 mb-10 max-w-xl mx-auto">
          {t.contact.description}
        </p>
        <a
          href="mailto:contact@eduardomendoza.com"
          className="inline-block px-10 py-4 bg-slate-900 text-white font-medium text-sm tracking-widest uppercase hover:bg-slate-800 transition-colors"
        >
          {t.contact.button}
        </a>
      </div>
    </section>
  );
};

export default Contact;