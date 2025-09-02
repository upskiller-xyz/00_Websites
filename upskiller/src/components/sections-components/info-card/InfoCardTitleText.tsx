import React from 'react';

interface InfoCardTitleTextProps {
  title: string;
  text: string;
}

export const InfoCardTitleText: React.FC<InfoCardTitleTextProps> = ({
  title,
  text
}) => (
  <p className="info-card-text">
    <strong>{title}:</strong> {text}
  </p>
);