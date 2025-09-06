import React from 'react';

interface InfoCardSubtitleProps {
  subtitle: string;
}

export const InfoCardSubtitle: React.FC<InfoCardSubtitleProps> = ({
  subtitle
}) => (
  <p className="info-card-subtitle text-lg text-dark font-medium">
    {subtitle}
  </p>
);
