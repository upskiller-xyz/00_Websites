import React, { forwardRef } from 'react';

interface HeroSectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const HeroSectionContainer = forwardRef<HTMLElement, HeroSectionContainerProps>(
  ({ id, className = '', children }, ref) => (
    <div className="hero-container">
      <section 
        ref={ref} 
        id={id} 
        className={`hero-sticky-section section-container hero-section ${className}`}
      >
        {children}
      </section>
    </div>
  )
);

HeroSectionContainer.displayName = 'HeroSectionContainer';

export default HeroSectionContainer;