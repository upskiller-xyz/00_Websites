import React from 'react';
import { GridType, GRID_CLASS_MAP } from '../../constants/grid-types.enums';

interface ComponentGridProps {
  gridType?: GridType;
  columns?: '1col' | '2col' | '3col';
  className?: string;
  children: React.ReactNode;
}

const ComponentGrid: React.FC<ComponentGridProps> = ({ 
  gridType = GridType.CUSTOM, 
  columns = '1col', 
  className = '', 
  children 
}) => {
  const gridClass = GRID_CLASS_MAP[gridType](columns);

  return (
    <div className={`${gridClass} ${className}`}>
      {children}
    </div>
  );
};

export default ComponentGrid;