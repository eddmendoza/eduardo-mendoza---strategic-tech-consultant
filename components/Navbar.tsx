import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './Icons';
import { SectionId } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.territory, href: `#${SectionId.PILLARS}` },
    { name: t.nav.about, href: `#${SectionId.ABOUT}` },
    { name: t.nav.writings, href: `#${SectionId.WRITINGS}` },
    { name: t.nav.aiDemo, href: `#${SectionId.AI_DEMO}` },
    { name: t.nav.contact, href: `#${SectionId.CONTACT}` },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-semibold tracking-tight text-slate-900 z-50">
          Eduardo Mendoza
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Toggle - Desktop */}
          <div className="flex items-center ml-4 pl-4 border-l border-slate-200">
            <button 
              onClick={toggleLanguage}
              className="text-xs font-medium tracking-wide text-slate-400 hover:text-slate-900 transition-colors"
            >
              <span className={language === 'en' ? 'text-slate-900' : ''}>EN</span>
              <span className="mx-1">|</span>
              <span className={language === 'es' ? 'text-slate-900' : ''}>ES</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50">
             {/* Language Toggle - Mobile */}
            <button 
              onClick={toggleLanguage}
              className="text-xs font-medium tracking-wide text-slate-900"
            >
              {language === 'en' ? 'EN' : 'ES'}
            </button>

            <button
            className="text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-light text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
              }}
              className="mt-8 text-sm font-medium tracking-widest text-slate-500 uppercase"
            >
                Switch to {language === 'en' ? 'Spanish' : 'English'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;