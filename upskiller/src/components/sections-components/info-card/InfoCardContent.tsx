import React from 'react';

interface InfoCardContentProps {
  children: React.ReactNode;
}

export const InfoCardContent: React.FC<InfoCardContentProps> = ({
  children
}) => (
  <div className="info-card-content">
    {children}
  </div>
);