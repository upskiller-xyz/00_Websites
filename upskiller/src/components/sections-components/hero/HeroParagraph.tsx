import React from 'react';

interface HeroParagraphProps {
  isVisible: boolean;
  dataIndex: number;
  children: React.ReactNode;
}

const HeroParagraph: React.FC<HeroParagraphProps> = ({ isVisible, dataIndex, children }) => (
  <p 
    data-animate
    data-index={dataIndex}
    className={`hero-paragraph ${
      isVisible ? 'hero-element-visible' : 'hero-element-hidden'
    }`}
  >
    {children}
  </p>
);

export default HeroParagraph;