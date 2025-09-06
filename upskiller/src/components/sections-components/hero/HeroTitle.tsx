import React from 'react';

interface HeroTitleProps {
  isVisible: boolean;
  children: React.ReactNode;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ isVisible, children }) => (
  <h1 
    data-animate
    data-index="0"
    className={`hero-title automate-font ${
      isVisible ? 'hero-element-visible' : 'hero-element-hidden'
    }`}
  >
    {children}
  </h1>
);

export default HeroTitle;