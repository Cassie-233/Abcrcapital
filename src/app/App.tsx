import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Values } from './components/Values';
import { Services } from './components/Services';
import { GlobalReach } from './components/GlobalReach';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  return (
    <div className="min-h-screen" style={{ 
      backgroundColor: '#161616',
      color: '#FEFFFA',
      fontFamily: 'Plus Jakarta Sans, Noto Sans SC, sans-serif'
    }}>
      <Navigation language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Values language={language} />
      <Services language={language} />
      <GlobalReach language={language} />
      <Contact language={language} />
      <Footer language={language} setLanguage={setLanguage} />
    </div>
  );
}
