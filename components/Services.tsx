import React from 'react';
import { Translations, ServiceItem } from '../types';
import { Pickaxe, RefreshCw, Droplets, Waves } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ServicesProps {
  t: Translations['services'];
}

const getIcon = (name: string) => {
  const className = "w-10 h-10 text-white";
  switch(name) {
    case 'construction': return <Pickaxe className={className} />;
    case 'renovation': return <RefreshCw className={className} />;
    case 'maintenance': return <Droplets className={className} />;
    case 'spa': return <Waves className={className} />;
    default: return <Waves className={className} />;
  }
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 scroll-mt-20 md:scroll-mt-28">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-16 max-w-2xl mx-auto reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.items.map((service, index) => (
            <div 
              key={service.id} 
              className={`group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-accent dark:bg-slate-700 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out"></div>

              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-md relative z-10 transition-transform duration-500 group-hover:rotate-6">
                {getIcon(service.iconName)}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;