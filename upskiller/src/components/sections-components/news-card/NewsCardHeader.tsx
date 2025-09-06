import React from 'react';

interface NewsCardHeaderProps {
  title: string;
  description: string;
}

export const NewsCardHeader: React.FC<NewsCardHeaderProps> = ({
  title,
  description
}) => (
  <div className="space-y-4 mb-8">
    <h3 className="news-card-title font-bold text-dark text-3xl">
      {title}
    </h3>
    <p className="text-dark leading-relaxed">
      {description}
    </p>
  </div>
);