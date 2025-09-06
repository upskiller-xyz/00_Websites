import React from 'react';

interface InfoCardTitleProps {
  title: string;
}

export const InfoCardTitle: React.FC<InfoCardTitleProps> = ({
  title
}) => (
  <h3 className="info-card-title font-bold text-dark text-3xl">
    {title}
  </h3>
);
