import React from 'react';
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
  return (
    <LanguageProvider>
      <main className="font-sans antialiased text-slate-900 bg-white min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <Pillars />
        <About />
        <Writings />
        <AIInsight />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default App;