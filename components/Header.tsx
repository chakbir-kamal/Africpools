import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Moon, Sun, ChevronDown } from 'lucide-react';
import { Language, Translations } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations['nav'];
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, t, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية', flag: '🇲🇦' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: t.home, href: '#hero' },
    { name: t.about, href: '#about' },
    { name: t.videos, href: '#videos' },
    { name: t.services, href: '#services' },
    { name: t.gallery, href: '#gallery' },
    { name: t.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      // Update URL hash without jumping
      window.history.pushState(null, '', href);
    } else if (href === '#hero') {
      // Fallback for hero/home if ID lookup fails
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary dark:bg-slate-900 shadow-lg py-1' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a 
            href="#hero" 
            className="flex items-center justify-center group"
            onClick={(e) => handleNavClick(e, '#hero')}
            aria-label="AFRICPOOLS Home"
          >
             <img 
               src="https://raw.githubusercontent.com/nhach-design/images/refs/heads/main/imagefinal.png" 
               alt="AFRICPOOLS - Construction et Rénovation Piscine Maroc"
               title="AFRICPOOLS Maroc Logo"
               className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
               width="150"
               height="56"
             />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-medium text-sm lg:text-base hover:text-gray-200 transition-colors text-white cursor-pointer`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 border-s border-white/20 ps-4">
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="text-white hover:text-gray-200 transition-transform hover:scale-110"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`flex items-center gap-1 font-medium text-white`}
                aria-label="Select Language"
              >
                <Globe size={18} />
                <span className="uppercase">{lang}</span>
              </button>
              
              {langMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white dark:bg-slate-800 rounded-lg shadow-xl py-2 w-32 border border-gray-100 dark:border-slate-700 overflow-hidden text-gray-800 dark:text-gray-200 animate-slide-down origin-top-right">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-700 flex items-center justify-between text-sm ${lang === l.code ? 'text-primary font-bold' : ''}`}
                    >
                      <span>{l.label}</span>
                      <span>{l.flag}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <button
              onClick={toggleTheme}
              className="text-white"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

           {/* Mobile Lang Dropdown */}
           <div className="relative">
             <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setLangMenuOpen(!langMenuOpen);
                }}
                className={`uppercase font-bold text-sm border rounded px-2 py-1 border-white/50 text-white flex items-center gap-1 backdrop-blur-sm bg-white/10`}
                aria-label="Change Language"
              >
                {lang} <ChevronDown size={14} />
              </button>
              
              {langMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white dark:bg-slate-800 rounded-lg shadow-xl py-2 w-32 border border-gray-100 dark:border-slate-700 overflow-hidden text-gray-800 dark:text-gray-200 animate-slide-down z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-700 flex items-center justify-between text-sm ${lang === l.code ? 'text-primary font-bold' : ''}`}
                    >
                      <span>{l.label}</span>
                      <span>{l.flag}</span>
                    </button>
                  ))}
                </div>
              )}
           </div>

          <button onClick={toggleMenu} className="text-white" aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-t border-gray-100 dark:border-slate-800 animate-slide-down">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-800 dark:text-gray-100 font-medium text-lg border-b border-gray-100 dark:border-slate-800 pb-2 cursor-pointer hover:text-primary dark:hover:text-primary hover:pl-2 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;