import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import VideoShowcase from './components/VideoShowcase';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  // Default to French as requested
  const [lang, setLang] = useState<Language>('fr');
  const [showButton, setShowButton] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Initialize Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  // Apply Theme class to HTML element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // Handle RTL for Arabic
    const isRtl = lang === 'ar';
    document.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update Meta Title/Desc dynamically
    document.title = TRANSLATIONS[lang].metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', TRANSLATIONS[lang].metaDesc);
    }
  }, [lang]);

  // Delay showing the WhatsApp button for a nice entrance effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  return (
    <div className={`font-sans text-gray-800 dark:text-gray-100 ${isRtl ? 'font-arabic' : ''} bg-gray-50 dark:bg-slate-900 transition-colors duration-300`}>
      <Header 
        lang={lang} 
        setLang={setLang} 
        t={t.nav} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main>
        <Hero t={t.hero} isRtl={isRtl} />
        <Stats t={t.stats} />
        <About t={t.about} />
        <VideoShowcase t={t.videoShowcase} />
        <Services t={t.services} />
        <Gallery t={t.gallery} />
        <Contact t={t.contact} isRtl={isRtl} />
      </main>

      <Footer />
      
      {/* Sticky WhatsApp Button */}
      {showButton && (
        <a 
           href="https://wa.me/212600574866"
           target="_blank"
           rel="noopener noreferrer"
           className="fixed bottom-4 right-4 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-pop-in"
           aria-label="Contact on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      )}
    </div>
  );
};

export default App;