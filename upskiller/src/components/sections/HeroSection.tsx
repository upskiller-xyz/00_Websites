// src/components/sections/HeroSection.tsx
import React, { useEffect, useRef, useState } from 'react';
import { EventType } from '../../constants/enums';
import { ScrollProgressCalculator } from '../../utils/ScrollProgressCalculator';
import HeroSectionContainer from '../sections-components/hero/HeroSectionContainer';
import HeroBackgroundMotifs, { type HeroBackgroundMotifsRef } from '../sections-components/hero/HeroBackgroundMotifs';
import HeroContent from '../sections-components/hero/HeroContent';

const HeroSection: React.FC = () => {
  const backgroundMotifsRef = useRef<HeroBackgroundMotifsRef>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleElements, setVisibleElements] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      
      const scrollFactor = window.scrollY * 0.5;
      
      if (backgroundMotifsRef.current?.movingMotifRef.current) {
        backgroundMotifsRef.current.movingMotifRef.current.style.transform = `translate(${scrollFactor}px, -${scrollFactor}px)`;
      }

      // Scroll-driven animation for sticky section
      if (sectionRef.current) {
        const container = sectionRef.current.parentElement;
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          if (ScrollProgressCalculator.isInStickyZone(containerRect, windowHeight)) {
            const progress = ScrollProgressCalculator.calculateStickyProgress(containerRect, windowHeight);
            const newVisibleElements = ScrollProgressCalculator.getVisibleElements(progress);
            setVisibleElements(newVisibleElements);
          } else {
            setVisibleElements([]);
          }
        }
      }
    };

    window.addEventListener(EventType.SCROLL, handleScroll);
    handleScroll(); // Call once on mount
    
    return () => {
      window.removeEventListener(EventType.SCROLL, handleScroll);
    };
  }, []);

  return (
    <HeroSectionContainer ref={sectionRef} id="home">
      <HeroBackgroundMotifs ref={backgroundMotifsRef} />

      <HeroContent 
        textContainerRef={textContainerRef}
        visibleElements={visibleElements}
      />
    </HeroSectionContainer>
  );
};

export default HeroSection;