import React from 'react';
import { ProductIconData } from '@shared/types';

interface ProductIconProps {
  iconData: ProductIconData;
  className?: string;
}

const ProductIcon: React.FC<ProductIconProps> = ({ iconData, className = "" }) => {
  if (iconData.type === 'image' && iconData.src) {
    return (
      <img 
        src={iconData.src} 
        alt={iconData.alt || 'Product icon'} 
        className={`max-w-full max-h-32 object-contain ${className}`}
      />
    );
  }
  
  if (iconData.type === 'svg' && iconData.path) {
    return (
      <svg 
        className={`w-16 h-16 stroke-current text-primary ${className}`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d={iconData.path} 
        />
      </svg>
    );
  }
  
  return null;
};

export default ProductIcon;