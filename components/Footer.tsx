import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <footer className="bg-dark text-slate-400 py-8 text-center text-sm border-t border-slate-800 overflow-hidden">
      <div 
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <p>&copy; {new Date().getFullYear()} AFRICPOOLS. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
           <span>Construction</span>
           <span>•</span>
           <span>Renovation</span>
           <span>•</span>
           <span>Maintenance</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;