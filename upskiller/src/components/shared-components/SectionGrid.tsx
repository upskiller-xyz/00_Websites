import React from 'react';

interface SectionGridProps {
  columns: '1col' | '2col' | '3col';
  className?: string;
  children: React.ReactNode;
}

const SectionGrid: React.FC<SectionGridProps> = ({ columns, className = '', children }) => (
  <div className={`section-grid-${columns} ${className}`}>
    {children}
  </div>
);

export default SectionGrid;