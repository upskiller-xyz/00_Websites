import React from 'react';

interface SharedImageProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

const SharedImage: React.FC<SharedImageProps> = ({ src, alt, className = '', children }) => {
  return (
    <div className="shared-image-container">
      <img src={src} alt={alt} className={className} />
      {children}
    </div>
  );
};

export default SharedImage;