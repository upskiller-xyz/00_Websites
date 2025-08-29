// src/components/sections/HeroSection.tsx
import React, { useEffect, useRef, useState } from 'react';

const HeroSection: React.FC = () => {
  const staticMotifRef = useRef<HTMLDivElement>(null);
  const movingMotifRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleElements, setVisibleElements] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollFactor = scrollY * 0.5;
      
      if (movingMotifRef.current) {
        movingMotifRef.current.style.transform = `translate(${scrollFactor}px, -${scrollFactor}px)`;
      }

      // Scroll-driven animation for sticky section
      if (sectionRef.current) {
        const container = sectionRef.current.parentElement;
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calculate progress through the sticky container
          // When container top reaches viewport top, start animation
          // When container bottom reaches viewport top, end animation
          if (containerRect.top <= 0 && containerRect.bottom > windowHeight) {
            // We're in the sticky zone - calculate animation progress
            const scrollProgress = Math.abs(containerRect.top);
            const totalScrollDistance = containerRect.height - windowHeight;
            const progress = Math.min(1, scrollProgress / totalScrollDistance);
            
            const newVisibleElements: number[] = [];
            
            // Sequential appearance based on scroll progress through the container
            if (progress > 0.15) newVisibleElements.push(0); // Heading at 15%
            if (progress > 0.35) newVisibleElements.push(1); // First paragraph at 35%
            if (progress > 0.55) newVisibleElements.push(2); // Second paragraph at 55%
            if (progress > 0.75) newVisibleElements.push(3); // Third paragraph at 75%
            
            setVisibleElements(newVisibleElements);
          } else {
            // Reset when not in sticky zone
            setVisibleElements([]);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative" style={{ height: '300vh' }}> {/* Extra height for scroll-driven animation */}
      <section 
        ref={sectionRef} 
        id="home" 
        className="sticky top-0 section-container relative overflow-hidden" 
        style={{ backgroundColor: '#180057' }}
      >
      {/* Background SVG motifs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Static motif */}
        <div
          ref={staticMotifRef}
          className="absolute"
          style={{
            top: '0',
            left: '0',
            width: '100vw',
            height: '150vh',
            opacity: 0.33,
            filter: 'brightness(0) saturate(100%) invert(30%) sepia(27%) saturate(1752%) hue-rotate(237deg) brightness(93%) contrast(86%)'
          }}
        >
          <img 
            src="https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/motif-1.svg" 
            alt="" 
            className="w-full h-full object-contain"
            style={{
              objectPosition: 'center top'
            }}
          />
        </div>
        
        {/* Moving motif */}
        <div
          ref={movingMotifRef}
          className="absolute"
          style={{
            top: '0',
            left: '0',
            width: '100vw',
            height: '150vh',
            opacity: 0.33,
            filter: 'brightness(0) saturate(100%) invert(30%) sepia(27%) saturate(1752%) hue-rotate(237deg) brightness(93%) contrast(86%)'
          }}
        >
          <img 
            src="https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/motif-1.svg" 
            alt="" 
            className="w-full h-full object-contain"
            style={{
              objectPosition: 'center top'
            }}
          />
        </div>
      </div>

      <div className="section-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={textContainerRef} className="space-y-8">
            <div className="space-y-4">
              <h1 
                data-animate
                data-index="0"
                className={`font-heading text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 ease-out ${
                  visibleElements.includes(0) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-12'
                }`}
                style={{ color: '#f4fffa' }}
              >
                Tools you trust. Insights you depend on.
              </h1>
              <p 
                data-animate
                data-index="1"
                className={`text-xl leading-relaxed transition-all duration-700 ease-out ${
                  visibleElements.includes(1) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-12'
                }`}
                style={{ color: '#f4fffa' }}
              >
                Artificially intelligent, open and accessible software that transforms complex design data into actionable insights.
              </p>
              <p 
                data-animate
                data-index="3"
                className={`text-xl leading-relaxed transition-all duration-700 ease-out ${
                  visibleElements.includes(3) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-12'
                }`}
                style={{ color: '#f4fffa' }}
              >
                Starting with performance analysis (daylight and CO2 powered by machine learning), we help the AEC industry to work smarter, not harder.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default HeroSection;