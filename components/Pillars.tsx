import React from 'react';
import { BrainIcon, WorkflowIcon, ChessIcon } from './Icons';
import { SectionId } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Pillars: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id={SectionId.PILLARS} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
            {t.pillars.label}
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-slate-900">
            {t.pillars.heading}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-200 pt-12">
          {t.pillars.items.map((pillar) => (
            <div key={pillar.id} className="group">
              <div className="mb-6 text-slate-400 group-hover:text-slate-900 transition-colors duration-300">
                {pillar.icon === 'brain' && <BrainIcon className="w-8 h-8" />}
                {pillar.icon === 'workflow' && <WorkflowIcon className="w-8 h-8" />}
                {pillar.icon === 'chess' && <ChessIcon className="w-8 h-8" />}
              </div>
              <h4 className="text-xl font-medium text-slate-900 mb-4">
                {pillar.title}
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;