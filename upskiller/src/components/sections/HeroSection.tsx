// src/components/sections/HeroSection.tsx
import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const staticMotifRef = useRef<HTMLDivElement>(null);
  const movingMotifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollFactor = scrollY * 0.5; // Adjust speed of parallax
      
      if (movingMotifRef.current) {
        // Move up and right (45 degrees)
        movingMotifRef.current.style.transform = `translate(${scrollFactor}px, -${scrollFactor}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="section-container relative overflow-hidden" style={{ backgroundColor: '#180057' }}>
      {/* Background SVG motifs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Static motif */}
        <div
          ref={staticMotifRef}
          className="absolute"
          style={{
            top: '0', // Align with very top of webpage
            left: '0',
            width: '100%',
            height: 'calc(100% + 80px)',
            opacity: 0.33,
            filter: 'brightness(0) saturate(100%) invert(30%) sepia(27%) saturate(1752%) hue-rotate(237deg) brightness(93%) contrast(86%)'
          }}
        >
          <img 
            src="/images/motif-1.svg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Moving motif */}
        <div
          ref={movingMotifRef}
          className="absolute"
          style={{
            top: '0', // Align with very top of webpage
            left: '0',
            width: '100%',
            height: 'calc(100% + 80px)',
            opacity: 0.33,
            filter: 'brightness(0) saturate(100%) invert(30%) sepia(27%) saturate(1752%) hue-rotate(237deg) brightness(93%) contrast(86%)'
          }}
        >
          <img 
            src="/images/motif-1.svg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="section-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#f4fffa' }}>
                Tools you trust. Insights you depend on.
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: '#f4fffa' }}>
                At Upskiller, we develop open, accessible, indispensable software that simplifies complexity, turns design information into meaningful insights and empowers AEC professionals to work efficiently.
              </p>
              <p className="text-xl leading-relaxed" style={{ color: '#f4fffa' }}>
                We see a future where the community of AEC professionals seamlessly access information and knowledge, truly understands them, and use them to build a better world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;