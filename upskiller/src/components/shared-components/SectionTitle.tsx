import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  theme = 'dark', 
  className = '' 
}) => (
  <h2 className={`section-title section-title-${theme} automate-font ${className}`}>
    {children}
  </h2>
);

export default SectionTitle;