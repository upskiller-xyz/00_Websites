import React from 'react';

interface NewsPanelDescriptionProps {
  description: string;
}

export const NewsPanelDescription: React.FC<NewsPanelDescriptionProps> = ({
  description
}) => (
  <p className="text-dark leading-relaxed">
    {description}
  </p>
);
