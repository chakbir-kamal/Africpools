import React, { useState, useEffect } from 'react';
import { Translations } from '../types';
import { Award, Users, MapPin, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface StatsProps {
  t: Translations['stats'];
}

// Custom hook for counting up
const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      
      if (progress < duration) {
        setCount(Math.min(Math.floor((progress / duration) * end), end));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
};

interface StatItemProps {
  icon: React.ReactNode;
  numberString: string;
  label: string;
  isVisible: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ icon, numberString, label, isVisible }) => {
  // Extract number and suffix (e.g., "250+" -> 250 and "+")
  const numValue = parseInt(numberString.replace(/\D/g, ''));
  const suffix = numberString.replace(/[0-9]/g, '');
  
  const count = useCounter(numValue, 2000, isVisible);

  return (
    <div className="flex flex-col items-center text-center p-4 hover:shadow-md rounded-xl transition-all duration-300 bg-white dark:bg-slate-800 dark:hover:bg-slate-700">
      <div className="mb-4 bg-accent dark:bg-slate-700 p-4 rounded-full transition-transform duration-300 hover:scale-110 hover:rotate-3">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-1">
        {count}{suffix}
      </h3>
      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">{label}</p>
    </div>
  );
};

const Stats: React.FC<StatsProps> = ({ t }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 });

  const stats = [
    { icon: <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-primary dark:text-sky-400" />, number: "250+", label: t.pools },
    { icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-primary dark:text-sky-400" />, number: "15", label: t.years },
    { icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-primary dark:text-sky-400" />, number: "20+", label: t.experts },
    { icon: <MapPin className="w-8 h-8 md:w-10 md:h-10 text-primary dark:text-sky-400" />, number: "10+", label: t.locations },
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-900 relative transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              icon={stat.icon} 
              numberString={stat.number} 
              label={stat.label} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;