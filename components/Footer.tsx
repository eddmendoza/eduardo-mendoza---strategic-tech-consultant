import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-900 font-semibold tracking-tight">
          Eduardo Mendoza
        </div>
        <div className="text-xs text-slate-400">
          © {new Date().getFullYear()} Eduardo Mendoza. {t.footer.copyright}
        </div>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/eddmendoza/" className="text-slate-400 hover:text-slate-900 transition-colors text-sm">LinkedIn</a>
          <a href="https://x.com/eddmendoza" className="text-slate-400 hover:text-slate-900 transition-colors text-sm">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
