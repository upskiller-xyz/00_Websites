import React from 'react';

interface ProductIconProps {
  type: 'image' | 'svg';
  src?: string;
  alt?: string;
  path?: string;
  className?: string;
}

const ProductIcon: React.FC<ProductIconProps> = ({ type, src, alt, path, className = "w-full h-auto" }) => {
  if (type === 'image' && src) {
    return (
      <img 
        src={src}
        alt={alt || ''}
        className={`${className} object-contain`}
      />
    );
  }

  if (type === 'svg' && path) {
    return (
      <div className="w-full flex justify-center">
        <svg 
          className="h-80 w-auto" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={path} 
          />
        </svg>
      </div>
    );
  }

  return null;
};

export default ProductIcon;