import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import About from './components/About';
import Writings from './components/Writings';
import AIInsight from './components/AIInsight';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';

const AppContent: React.FC = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePostId]);

  return (
    <main className="font-sans antialiased text-slate-900 bg-white min-h-screen flex flex-col">
      <Navbar onHomeClick={() => setActivePostId(null)} />
      
      {activePostId === null ? (
        <>
          <Hero />
          <Pillars />
          <About />
          <Writings onPostClick={(id) => setActivePostId(id)} />
          <AIInsight />
          <Contact />
        </>
      ) : (
        <div className="flex-grow pt-32 pb-20 bg-slate-50/30">
          <div className="max-w-3xl mx-auto px-6">
            <button 
              onClick={() => setActivePostId(null)}
              className="group mb-12 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 flex items-center gap-2 transition-all"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span> Back
            </button>

            {(() => {
              // Buscamos el post dinámicamente en el content.ts
              const post = t.writings.items.find((p: any) => p.id === activePostId);
              if (!post) return <p>Post not found.</p>;

              return (
                <article>
                  <header className="mb-10">
                    <div className="flex gap-3 text-xs font-medium text-blue-600 mb-4 uppercase tracking-wider">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                      {post.title}
                    </h1>
                  </header>

                  {/* Imagen con "corte" automático a formato horizontal */}
                  {post.image && (
                    <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-2xl mb-12 shadow-lg">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="absolute inset-0 w-full h-full object-cover object-center" 
                      />
                    </div>
                  )}

                  {/* Cuerpo del artículo con formato premium */}
                  <div className="prose prose-slate lg:prose-xl max-w-none 
                    prose-p:mb-8 
                    prose-headings:mt-16 prose-headings:mb-6
                    prose-ul:list-disc prose-ul:ml-8 prose-ul:space-y-4
                    prose-li:pl-2 prose-li:text-slate-700">
                    <div className="text-slate-700 leading-relaxed font-serif text-lg md:text-xl">
                      <ReactMarkdown>{post.fullContent}</ReactMarkdown>
                    </div>
                  </div>
                  
                  <div className="mt-20 pt-10 border-t border-slate-100">
                    <button 
                      onClick={() => setActivePostId(null)}
                      className="text-blue-600 font-medium hover:underline flex items-center gap-2"
                    >
                      ← Back to all writings
                    </button>
                  </div>
                </article>
              );
            })()}
          </div>
        </div>
      )}
      
      <Footer />
    </main>
  );
};

// Envolvemos AppContent en el Provider para poder usar useLanguage() dentro
const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
