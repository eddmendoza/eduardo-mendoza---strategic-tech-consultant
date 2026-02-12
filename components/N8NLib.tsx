import React from 'react';

const N8N_TEMPLATES = [
  {
    title: "Lead Scoring Inteligente",
    desc: "Clasifica leads de formularios usando IA y los distribuye en HubSpot.",
    tools: ["n8n", "OpenAI", "HubSpot"]
  },
  {
    title: "Sincronizador de Inventario",
    desc: "Automatización bidireccional entre Shopify y Google Sheets con alertas en Slack.",
    tools: ["n8n", "Shopify", "Slack"]
  },
  {
    title: "Agente de Soporte Autónomo",
    desc: "Análisis de sentimiento en emails y generación de borradores automáticos.",
    tools: ["n8n", "Gmail", "Claude 3.5"]
  }
];

const N8NLib: React.FC = () => {
  return (
    <section id="n8n-lib" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
            Automation Blueprints
          </h2>
          <h3 className="text-4xl font-bold text-slate-900 leading-tight">
            Soluciones listas para <br />escalar tu operación.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {N8N_TEMPLATES.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="flex-grow">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  {item.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-50">
                {item.tools.map(tool => (
                  <span key={tool} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default N8NLib;
