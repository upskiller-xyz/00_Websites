import React from 'react';

interface NewsItemDescriptionProps {
  description: string;
}

export const NewsItemDescription: React.FC<NewsItemDescriptionProps> = ({
  description
}) => (
  <p className="text-dark leading-relaxed text-sm news-item-description">
    {description}
  </p>
);
