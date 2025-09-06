import React from 'react';
import { NewsPanelWrapper } from '../news-panel/NewsPanelWrapper';

interface NewsErrorProps {
  error: string;
  className?: string;
  style?: React.CSSProperties;
}

export const NewsError: React.FC<NewsErrorProps> = ({
  error,
  className,
  style
}) => (
  <NewsPanelWrapper className={className} style={style}>
    <div className="flex items-center justify-center">
      <div className="text-dark">Error loading news: {error}</div>
    </div>
  </NewsPanelWrapper>
);
