import React, { useState } from 'react';
import { Translations } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface GalleryProps {
  t: Translations['gallery'];
}

const Gallery: React.FC<GalleryProps> = ({ t }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [showAll, setShowAll] = useState(false);

  // Mapped images: Original 6 + 6 New additions
  const images = [
    // Original 6
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/1-1.jpeg",
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/WhatsApp%20Image%202026-02-08%20at%2000.16.11.jpeg",
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/WhatsApp%20Image%202026-02-08%20at%2000.16.02.jpeg",
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/WhatsApp%20Image%202026-02-08%20at%2000.11.51.jpeg",
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/WhatsApp%20Image%202026-02-08%20at%2000.11.48.jpeg",
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/WhatsApp%20Image%202026-02-08%20at%2000.16.215.jpeg",
    // New 6 (Placeholder luxury pool images from Unsplash to match style)
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/WhatsApp%20Image%202026-02-08%20at%2000.16.261.jpeg",
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/1-4.jpeg",
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/1-5.jpg",
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/1-6.jpg",
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/1-7.jpg",
    "https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/1-3.jpeg"
  ];

  const altTags = [
    "Détente bord de piscine luxe chaises longues Maroc",
    "Villa moderne avec piscine creusée Casablanca",
    "Conception architecturale piscine immeuble Maroc",
    "Réalisation piscine jardin privé Marrakech",
    "Piscine hôtel de luxe palmiers Maroc",
    "Construction piscine résidentielle haut de gamme",
    // Alt tags for new images
    "Piscine à débordement avec vue sur la nature",
    "Piscine de luxe éclairée la nuit",
    "Aménagement extérieur avec piscine moderne",
    "Piscine lagon avec végétation tropicale",
    "Spa et espace détente piscine",
    "Design contemporain piscine villa"
  ];

  const displayedImages = showAll ? images : images.slice(0, 6);

  return (
    <section id="gallery" className="py-24 bg-accent/30 dark:bg-slate-800/30 transition-colors duration-300 scroll-mt-20 md:scroll-mt-28">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-16 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((src, idx) => (
            <div 
              key={`${src}-${idx}`} 
              className={`group relative overflow-hidden rounded-xl aspect-[4/3] shadow-md cursor-pointer animate-fade-in-up`}
              style={{ animationDelay: `${(idx % 6) * 100}ms` }}
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

        {/* Show More / Show Less Button */}
        <div className={`mt-12 text-center reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            {showAll ? (
              <>
                {t.seeLess} <ChevronUp size={20} />
              </>
            ) : (
              <>
                {t.seeMore} <ChevronDown size={20} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;