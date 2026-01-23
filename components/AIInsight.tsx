import React, { useState } from 'react';
import { generateStrategicInsight } from '../services/geminiService';

const AIInsights: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [insight, setInsight] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!topic.trim()) return;
    
    setIsLoading(true);
    setInsight(''); // Limpiamos el insight anterior
    
    try {
      const result = await generateStrategicInsight(topic);
      setInsight(result);
    } catch (error) {
      setInsight("El Oráculo está recalibrando sus sistemas. Por favor, intenta de nuevo en un momento.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-transparent border border-gray-800 rounded-lg shadow-sm">
      <h2 className="text-xl font-light mb-4 text-white tracking-widest uppercase">El Oráculo</h2>
      <p className="text-gray-400 mb-6 text-sm italic">
        Plantea un desafío tecnológico o estratégico para recibir una perspectiva de Eduardo Mendoza.
      </p>
      
      <div className="space-y-4">
        <textarea
          className="w-full p-4 bg-black/20 border border-gray-700 rounded-md text-gray-200 focus:border-white focus:ring-0 transition-colors min-h-[100px] outline-none"
          placeholder="Ej: El impacto de la IA generativa en la ciberseguridad industrial..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        
        <button
          onClick={handleAnalyze}
          disabled={isLoading || !topic.trim()}
          className="w-full py-3 px-6 bg-white text-black font-medium hover:bg-gray-200 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all uppercase tracking-tighter"
        >
          {isLoading ? 'Analizando...' : 'Consultar Oráculo'}
        </button>
      </div>

      {insight && (
        <div className="mt-8 p-4 border-l-2 border-white animate-in fade-in slide-in-from-bottom-2 duration-700">
          <p className="text-gray-300 leading-relaxed font-light italic">
            {insight}
          </p>
        </div>
      )}
    </div>
  );
};

export default AIInsights;
