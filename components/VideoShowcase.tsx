import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Translations } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronLeft, ChevronRight, VolumeX } from 'lucide-react';

const VIDEOS = [
  "https://raw.githubusercontent.com/nhach-design/videos/80a35f904154c142c98613d61a050afb7524f0ad/1770562360302.publer.com.mp4",
  "https://raw.githubusercontent.com/nhach-design/videos/main/v.mp4",
  "https://raw.githubusercontent.com/nhach-design/videos/80a35f904154c142c98613d61a050afb7524f0ad/1770562288335.publer.com.mp4",
  "https://raw.githubusercontent.com/nhach-design/videos/80a35f904154c142c98613d61a050afb7524f0ad/1770562463062.publer.com.mp4",
  "https://raw.githubusercontent.com/nhach-design/videos/80a35f904154c142c98613d61a050afb7524f0ad/1770562512994.publer.com.mp4",
  "https://raw.githubusercontent.com/nhach-design/videos/main/2v.mp4"
];

interface VideoShowcaseProps {
  t: Translations['videoShowcase'];
}

const VideoShowcase: React.FC<VideoShowcaseProps> = ({ t }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  // Touch state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Handle resize to adjust items per view
  useEffect(() => {
    const handleResize = () => {
       if (window.innerWidth >= 1280) {
           setItemsPerView(4); // 4 items for a balanced, slightly larger look on desktop
       } else if (window.innerWidth >= 1024) {
           setItemsPerView(3); // 3 items on laptops
       } else if (window.innerWidth >= 640) {
           setItemsPerView(3); // 3 items on tablets
       } else {
           setItemsPerView(2); // 2 items on mobile
       }
    };
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Duplicate items for infinite loop
  const displayVideos = [...VIDEOS, ...VIDEOS.slice(0, itemsPerView)];

  const stopAllVideos = useCallback(() => {
    if (playingIndex !== null) {
        const prevVideo = videoRefs.current[playingIndex];
        if (prevVideo) {
             prevVideo.muted = true;
             prevVideo.loop = true;
             prevVideo.play().catch(() => {});
        }
    }
    setPlayingIndex(null);
  }, [playingIndex]);

  const nextSlide = useCallback(() => {
    stopAllVideos();
    setCurrentIndex(prev => prev + 1);
    setIsTransitioning(true);
  }, [stopAllVideos]);

  const prevSlide = useCallback(() => {
    stopAllVideos();
    if (currentIndex === 0) {
        setIsTransitioning(false);
        setCurrentIndex(VIDEOS.length);
        requestAnimationFrame(() => {
             requestAnimationFrame(() => {
                 setIsTransitioning(true);
                 setCurrentIndex(VIDEOS.length - 1);
             });
        });
    } else {
        setCurrentIndex(prev => prev - 1);
        setIsTransitioning(true);
    }
  }, [currentIndex, stopAllVideos]);

  // Autoplay slider
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (playingIndex === null && isVisible) {
        interval = setInterval(() => {
            setCurrentIndex(prev => prev + 1);
            setIsTransitioning(true);
        }, 4000); 
    }

    return () => clearInterval(interval);
  }, [playingIndex, isVisible]);

  // Handle Loop Reset using Transition End
  const handleTransitionEnd = () => {
    if (currentIndex >= VIDEOS.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - VIDEOS.length);
    }
  };

  const handleVideoClick = (index: number) => {
      const video = videoRefs.current[index];
      if (!video) return;

      if (playingIndex === index) {
          if (video.paused) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
      } else {
          stopAllVideos();
          setPlayingIndex(index);
          video.play().catch(e => console.error("Video play failed:", e));
      }
  };

  const handleVideoEnded = () => {
      nextSlide();
  };

  // Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
      touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
      touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
      if (!touchStartX.current || !touchEndX.current) return;
      const distance = touchStartX.current - touchEndX.current;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isLeftSwipe) {
          nextSlide();
      } else if (isRightSwipe) {
          prevSlide();
      }
      touchStartX.current = null;
      touchEndX.current = null;
  };

  return (
    <section id="videos" className="py-16 bg-gray-50 dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300 scroll-mt-20 md:scroll-mt-28">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-10 max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-3">
            {t.title}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            {t.subtitle}
          </p>
        </div>

        {/* Slider Container */}
        <div 
            className={`relative group/slider max-w-7xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Arrows */}
            <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 text-primary p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/slider:opacity-100 md:opacity-100 hover:scale-110 -ml-4 md:-ml-10"
                aria-label="Previous slide"
            >
                <ChevronLeft size={20} />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 text-primary p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/slider:opacity-100 md:opacity-100 hover:scale-110 -mr-4 md:-mr-10"
                aria-label="Next slide"
            >
                <ChevronRight size={20} />
            </button>

            {/* Viewport */}
            <div className="overflow-hidden px-1 py-6 -mx-1">
                <div 
                    className="flex" 
                    style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                    transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {displayVideos.map((src, idx) => {
                        const isPlaying = playingIndex === idx;
                        return (
                            <div 
                                key={idx} 
                                style={{ width: `${100/itemsPerView}%` }} 
                                className="flex-shrink-0 px-2 md:px-3 box-border"
                            >
                                <div 
                                    className={`relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-md bg-black cursor-pointer transition-all duration-300 border border-gray-100 dark:border-slate-800 ${isPlaying ? 'scale-[1.02] ring-2 ring-primary z-10 shadow-xl' : 'hover:scale-[1.02] hover:shadow-lg'}`}
                                    onClick={() => handleVideoClick(idx)}
                                >
                                    <video 
                                        ref={el => { videoRefs.current[idx] = el }}
                                        src={src} 
                                        autoPlay
                                        loop={!isPlaying} 
                                        muted={!isPlaying} 
                                        playsInline 
                                        controls={isPlaying} 
                                        className="w-full h-full object-cover"
                                        onEnded={handleVideoEnded}
                                        onPause={() => {
                                            if (playingIndex === idx) {
                                                setPlayingIndex(null);
                                            }
                                        }}
                                    />
                                    
                                    {/* Mute/Status Indicator - Minimal */}
                                    {!isPlaying && (
                                        <div className="absolute bottom-2 right-2 bg-black/40 backdrop-blur-sm text-white/90 p-1 rounded-full transition-all duration-300">
                                            <VolumeX size={14} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;