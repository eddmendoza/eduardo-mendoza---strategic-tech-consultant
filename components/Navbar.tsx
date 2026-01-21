import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

// Definimos que el Navbar ahora recibe la función para volver al Home
interface NavbarProps {
  onHomeClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para manejar el clic en el Logo o en links de inicio
  const handleLogoClick = (e: React.MouseEvent) => {
    if (onHomeClick) {
      onHomeClick();
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Nombre - Al hacer clic vuelve al Home */}
        <button 
          onClick={handleLogoClick}
          className="text-xl font-bold tracking-tighter text-slate-900"
        >
          EDUARDO MENDOZA<span className="text-blue-600">.</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <button onClick={handleLogoClick} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              {t.nav.territory}
            </button>
            <a href={`#${SectionId.ABOUT}`} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              {t.nav.about}
            </a>
            <a href={`#${SectionId.WRITINGS}`} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              {t.nav.writings}
            </a>
            <a href={`#${SectionId.CONTACT}`} className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
              {t.nav.contact}
            </a>
          </div>

          <div className="h-4 w-px bg-slate-200"></div>

          {/* Selector de Idioma */}
          <button 
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
