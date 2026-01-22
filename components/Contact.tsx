import React from 'react';
import { SectionId } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from './ContactForm'; // <--- Importamos el nuevo componente

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
          {t.contact.heading}
        </h2>
        <p className="text-slate-600 mb-12 max-w-xl mx-auto">
          {t.contact.description}
        </p>
        
        {/* Aquí insertamos el formulario en lugar del simple botón de mailto */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
