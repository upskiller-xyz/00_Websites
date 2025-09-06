import React from 'react';
import HeroTextGroup from './HeroTextGroup';

interface HeroTextContainerProps {
  textContainerRef: React.RefObject<HTMLDivElement>;
  visibleElements: number[];
}

const HeroTextContainer: React.FC<HeroTextContainerProps> = ({ textContainerRef, visibleElements }) => {
  return (
    <div ref={textContainerRef} className="hero-text-container">
      <HeroTextGroup visibleElements={visibleElements} />
    </div>
  );
};

export default HeroTextContainer;