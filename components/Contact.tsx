import React from 'react';
import { Translations } from '../types';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ContactProps {
  t: Translations['contact'];
  isRtl: boolean;
}

const Contact: React.FC<ContactProps> = ({ t, isRtl }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="contact" className="relative py-24 bg-primary text-white overflow-hidden scroll-mt-20 md:scroll-mt-28">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t.title}</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">{t.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="flex flex-col items-center group p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
              <div className="bg-white/10 p-4 rounded-full mb-4 group-hover:bg-white/20 transition-colors duration-300 transform group-hover:scale-110">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-xl mb-2">{t.address}</h4>
              <p className="text-blue-100">Casablanca, Morocco</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center group p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
              <div className="bg-white/10 p-4 rounded-full mb-4 group-hover:bg-white/20 transition-colors duration-300 transform group-hover:scale-110">
                <Phone className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-xl mb-2">{t.phone}</h4>
              <a 
                href={SOCIAL_LINKS.whatsapp} 
                className="text-blue-100 hover:text-white transition-colors"
                dir="ltr"
              >
                {SOCIAL_LINKS.phoneDisplay}
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center group p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
              <div className="bg-white/10 p-4 rounded-full mb-4 group-hover:bg-white/20 transition-colors duration-300 transform group-hover:scale-110">
                <Mail className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-xl mb-2">{t.email}</h4>
              <a href={SOCIAL_LINKS.email} className="text-blue-100 hover:text-white transition-colors">
                africpools@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 border-t border-white/10 pt-12">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all hover:scale-110 hover:-translate-y-1 group">
              <Instagram className="w-6 h-6 group-hover:text-white" />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all hover:scale-110 hover:-translate-y-1 group">
              <Facebook className="w-6 h-6 group-hover:text-white" />
            </a>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all hover:scale-110 hover:-translate-y-1 group">
              <MessageCircle className="w-6 h-6 group-hover:text-white" />
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;