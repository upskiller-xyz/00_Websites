import React from 'react';

interface SectionSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({ 
  children, 
  className = '' 
}) => (
  <p className={`section-subtitle ${className}`}>
    {children}
  </p>
);

export default SectionSubtitle;