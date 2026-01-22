import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
  // REEMPLAZA "tu_id_formspree" por tu ID real
  const [state, handleSubmit] = useForm("tu_id_formspree");

  if (state.succeeded) {
    return (
      <div className="max-w-md mx-auto p-10 text-center bg-white rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-medium text-slate-900">Propuesta recibida</h3>
        <p className="text-slate-500 mt-2">Analizaré tu desafío técnico y te contactaré en breve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Nombre</label>
        <input id="name" type="text" name="name" required className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-slate-900 outline-none transition-colors text-sm" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email</label>
          <input id="email" type="email" name="email" required className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-slate-900 outline-none transition-colors text-sm" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Empresa</label>
          <input id="company" type="text" name="company" className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-slate-900 outline-none transition-colors text-sm" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Desafío Tecnológico</label>
        <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-slate-900 outline-none transition-colors text-sm resize-none" placeholder="¿Cuál es el cuello de botella actual?" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button 
        type="submit" 
        disabled={state.submitting}
        className="w-full py-4 bg-slate-900 text-white font-medium text-sm tracking-widest uppercase hover:bg-slate-800 transition-all disabled:bg-slate-400"
      >
        {state.submitting ? "Enviando..." : "Iniciar Diagnóstico Estratégico"}
      </button>
    </form>
  );
};

export default ContactForm;
