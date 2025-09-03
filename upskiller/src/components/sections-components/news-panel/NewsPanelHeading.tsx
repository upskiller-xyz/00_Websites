import React from 'react';

interface NewsPanelHeadingProps {
  title: string;
  description: string;
}

export const NewsPanelHeading: React.FC<NewsPanelHeadingProps> = ({
  title,
  description
}) => (
  <>
    <h3 className="news-card-title font-bold text-dark text-3xl mb-4">
      {title}
    </h3>
    <p className="text-dark leading-relaxed mb-8">
      {description}
    </p>
  </>
);
