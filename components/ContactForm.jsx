import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  // 1. REEMPLAZA "tu_id_aqui" por el código de tu formulario en Formspree
  const [state, handleSubmit] = useForm("tu_id_aqui");

  if (state.succeeded) {
    return (
      <div className="max-w-md mx-auto p-10 text-center bg-gray-50 rounded-2xl border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900">¡Diagnóstico en marcha!</h3>
        <p className="text-gray-600 mt-2">He recibido tu mensaje. Te contactaré pronto para analizar tu estrategia.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
          <input id="name" type="text" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition-all" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Corporativo</label>
          <input id="email" type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition-all" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
          <input id="company" type="text" name="company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition-all" />
        </div>

        <div>
          <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-1">Desafío Tecnológico</label>
          <textarea id="challenge" name="challenge" required rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none resize-none transition-all" placeholder="¿En qué puedo ayudarte?" />
          <ValidationError prefix="Message" field="challenge" errors={state.errors} />
        </div>

        <button 
          type="submit" 
          disabled={state.submitting}
          className="w-full bg-black text-white font-bold py-4 px-6 rounded-lg hover:bg-zinc-800 transition-all active:scale-[0.98] disabled:bg-gray-400"
        >
          {state.submitting ? "Enviando..." : "Solicitar Consulta Estratégica"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
