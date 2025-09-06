import React from 'react';
import { NewsPanelWrapper } from '../news-panel/NewsPanelWrapper';

interface NewsLoadingProps {
  className?: string;
  style?: React.CSSProperties;
}

export const NewsLoading: React.FC<NewsLoadingProps> = ({
  className,
  style
}) => (
  <NewsPanelWrapper className={className} style={style}>
    <div className="flex items-center justify-center">
      <div className="text-dark">Loading news...</div>
    </div>
  </NewsPanelWrapper>
);
