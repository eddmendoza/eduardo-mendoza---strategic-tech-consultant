import React from 'react';
import { SectionId } from '../types';
import { ArrowRightIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const Writings: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id={SectionId.WRITINGS} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16 border-b border-slate-100 pb-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
              {t.writings.label}
            </h2>
            <h3 className="text-3xl md:text-4xl font-light text-slate-900">
              {t.writings.heading}
            </h3>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors">
            {t.writings.viewLinkedIn} <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.writings.items.map((post) => (
            <article key={post.id} className="flex flex-col h-full hover:bg-slate-50 p-6 -mx-6 md:mx-0 rounded-lg transition-colors duration-200">
              <div className="text-xs text-slate-400 mb-3 flex gap-2">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h4 className="text-xl font-medium text-slate-900 mb-3 leading-snug">
                {post.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>
              <a href={post.link} className="text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition-all">
                {t.writings.readArticle}
              </a>
            </article>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                {t.writings.viewLinkedIn} <ArrowRightIcon className="w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Writings;