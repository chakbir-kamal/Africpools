import React from 'react';
import { Translations } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface GalleryProps {
  t: Translations['gallery'];
}

const Gallery: React.FC<GalleryProps> = ({ t }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  // Mapped Unsplash images from the provided links
  const images = [
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/WhatsApp%20Image%202026-02-08%20at%2000.16.261.jpeg", // Deux chaises longues
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/WhatsApp%20Image%202026-02-08%20at%2000.16.11.jpeg", // Maison avec piscine
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/WhatsApp%20Image%202026-02-08%20at%2000.16.02.jpeg", // Vue aérienne bâtiment
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/WhatsApp%20Image%202026-02-08%20at%2000.11.51.jpeg", // Vue aérienne cour arrière
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/WhatsApp%20Image%202026-02-08%20at%2000.11.48.jpeg", // Hôtel avec piscine palmiers
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/WhatsApp%20Image%202026-02-08%20at%2000.16.215.jpeg"  // Piscine extérieure
  ];

  const altTags = [
    "Détente bord de piscine luxe chaises longues Maroc",
    "Villa moderne avec piscine creusée Casablanca",
    "Conception architecturale piscine immeuble Maroc",
    "Réalisation piscine jardin privé Marrakech",
    "Piscine hôtel de luxe palmiers Maroc",
    "Construction piscine résidentielle haut de gamme"
  ];

  return (
    <section id="gallery" className="py-24 bg-accent/30 dark:bg-slate-800/30 transition-colors duration-300 scroll-mt-20 md:scroll-mt-28">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-16 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-xl aspect-[4/3] shadow-md cursor-pointer reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <img 
                src={src} 
                alt={altTags[idx] || `Projet Piscine Maroc ${idx + 1}`} 
                title={altTags[idx] || `Réalisation AFRICPOOLS ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
                width="400"
                height="300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-xl font-bold tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  AFRICPOOLS
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;