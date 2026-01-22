import React, { useState } from 'react';
import { SparklesIcon, ArrowRightIcon } from './Icons';
import { SectionId } from '../types';
import { generateStrategicInsight } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';

const AIInsight: React.FC = () => {
  const [input, setInput] = useState('');
  const [insight, setInsight] = useState('');
  const [loading, setLoading] = useState(false);
  const { t, language } = useLanguage();

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setInsight('');
    
    // Prefix the prompt with the language so Gemini answers in the correct language
    const prompt = language === 'es' 
        ? `(Responde en Español profesional de México) ${input}` 
        : input;

    try {
      const result = await generateStrategicInsight(prompt);
      setInsight(result);
    } catch (err) {
      setInsight(t.aiInsight.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={SectionId.AI_DEMO} className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium uppercase tracking-widest text-slate-300 mb-4">
                <SparklesIcon className="w-3 h-3" /> {t.aiInsight.label}
            </span>
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            {t.aiInsight.heading}
          </h2>
          <p className="text-slate-400 font-light max-w-xl mx-auto">
            {t.aiInsight.description}
          </p>
        </div>

        <form onSubmit={handleConsult} className="relative max-w-lg mx-auto mb-12">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.aiInsight.placeholder}
            className="w-full bg-transparent border-b border-slate-600 py-4 text-lg md:text-xl text-white placeholder-slate-600 focus:outline-none focus:border-white transition-colors text-center"
          />
          <button
            type="submit"
            disabled={loading || !input}
            className="mt-8 flex items-center justify-center gap-2 mx-auto text-sm uppercase tracking-widest hover:text-slate-300 disabled:opacity-50 transition-colors"
          >
            {loading ? t.aiInsight.buttonLoading : t.aiInsight.buttonDefault} 
            {!loading && <ArrowRightIcon className="w-4 h-4" />}
          </button>
        </form>

        {insight && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-slate-800/50 p-8 rounded-sm border-l-2 border-white max-w-2xl mx-auto text-left">
              {/* Usamos ReactMarkdown para procesar las negritas y párrafos */}
              <div className="prose prose-invert prose-slate font-serif italic leading-relaxed text-slate-200">
                <ReactMarkdown>{insight}</ReactMarkdown>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIInsight;
