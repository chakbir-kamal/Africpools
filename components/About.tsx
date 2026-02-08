import React from 'react';
import { Translations } from '../types';
import { Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AboutProps {
  t: Translations['about'];
}

const About: React.FC<AboutProps> = ({ t }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 bg-accent dark:bg-slate-800 relative overflow-hidden transition-colors duration-300 scroll-mt-20 md:scroll-mt-28">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Collage - Slides in from Left */}
          <div className={`w-full lg:w-1/2 relative reveal-left-hidden ${isVisible ? 'reveal-reset' : ''}`}>
             <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop" 
                  alt="Construction piscine à débordement Maroc par AFRICPOOLS" 
                  title="Piscine à débordement de luxe"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8 hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
                <img 
                  src="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?q=80&w=800&auto=format&fit=crop" 
                  alt="Aménagement piscine villa luxe Casablanca" 
                  title="Piscine résidentielle haut de gamme"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
             </div>
             {/* Floating Badge */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-white p-6 rounded-full shadow-xl text-center z-10 w-32 h-32 flex flex-col justify-center items-center animate-pulse-slow border-4 border-white dark:border-slate-800">
                <span className="text-3xl font-bold">15+</span>
                <span className="text-xs uppercase leading-tight">Années</span>
             </div>
          </div>

          {/* Text Content - Slides in from Right */}
          <div className={`w-full lg:w-1/2 reveal-right-hidden ${isVisible ? 'reveal-reset' : ''} delay-200`}>
            <h4 className="text-primary dark:text-sky-400 font-bold uppercase tracking-wider mb-2">AFRICPOOLS MAROC</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              {t.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {t.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-white dark:bg-slate-700 p-1 rounded-full shadow-sm text-primary dark:text-sky-400">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;