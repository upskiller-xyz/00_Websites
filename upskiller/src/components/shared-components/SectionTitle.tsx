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
  <h2 className={`font-heading section-title section-title-${theme} ${className}`}>
    {children}
  </h2>
);

export default SectionTitle;