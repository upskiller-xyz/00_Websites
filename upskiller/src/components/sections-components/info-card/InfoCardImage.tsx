import React from 'react';

interface InfoCardImageProps {
  children: React.ReactNode;
}

export const InfoCardImage: React.FC<InfoCardImageProps> = ({ children }) => (
  <div className="info-card-image">
    {children}
  </div>
);