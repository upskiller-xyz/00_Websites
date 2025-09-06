import React from 'react';

interface InfoCardDescriptionProps {
  description: string;
  label?: string;
}

export const InfoCardDescription: React.FC<InfoCardDescriptionProps> = ({
  description,
  label
}) => (
  <p className="text-dark leading-relaxed">
    {label && <strong>{label}:</strong>} {description}
  </p>
);
