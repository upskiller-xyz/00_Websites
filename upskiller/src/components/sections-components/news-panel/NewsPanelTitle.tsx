import React from 'react';

interface NewsPanelTitleProps {
  title: string;
}

export const NewsPanelTitle: React.FC<NewsPanelTitleProps> = ({
  title
}) => (
  <h3 className="news-card-title font-bold text-dark text-3xl">
    {title}
  </h3>
);
