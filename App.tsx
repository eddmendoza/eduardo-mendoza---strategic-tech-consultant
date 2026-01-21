import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import About from './components/About';
import Writings from './components/Writings';
import AIInsight from './components/AIInsight';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  // Estado para manejar qué artículo estamos leyendo. null = Home.
  const [activePostId, setActivePostId] = useState<string | null>(null);

  // Volver al inicio al cambiar de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePostId]);

  return (
    <LanguageProvider>
      <main className="font-sans antialiased text-slate-900 bg-white min-h-screen flex flex-col">
        <Navbar onHomeClick={() => setActivePostId(null)} />
        
        {activePostId === null ? (
          // VISTA PRINCIPAL
          <>
            <Hero />
            <Pillars />
            <About />
            {/* Pasamos la función para abrir el post */}
            <Writings onPostClick={(id) => setActivePostId(id)} />
            <AIInsight />
            <Contact />
          </>
        ) : (
          // VISTA DEL ARTÍCULO (La crearemos a continuación)
          <div className="flex-grow pt-24 pb-12">
             <div className="max-w-3xl mx-auto px-6">
               <button 
                 onClick={() => setActivePostId(null)}
                 className="mb-8 text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors"
               >
                 ← Back to Home
               </button>
               {/* Aquí inyectaremos el contenido del post según el activePostId */}
               <article className="prose lg:prose-xl">
                  <h1 className="text-4xl font-bold mb-4">2025: The Year AI Exposed the Foundations</h1>
                  <img src="/postimgs/leadetship_outlook_2025.png" alt="AI Outlook" className="w-full rounded-xl mb-8" />
                  <div className="text-lg leading-relaxed text-slate-700">
                    {/* El contenido que me pasaste iría aquí */}
                    <p>In hindsight, 2025 will be remembered as the year artificial intelligence stopped being a feature and became infrastructure...</p>
                    {/* Más adelante automatizaremos que este texto venga de content.ts */}
                  </div>
               </article>
             </div>
          </div>
        )}
        
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default App;
