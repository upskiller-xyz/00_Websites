import React from 'react';

interface ErrorStateProps {
  error: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  error,
  className = '',
  style = {}
}) => (
  <div 
    className={`news-card transition-all duration-300 ${className}`}
    style={{ backgroundColor: 'var(--color-secondary)', ...style }}
  >
    <div className="news-card-content flex items-center justify-center">
      <div className="text-dark">Error loading news: {error}</div>
    </div>
  </div>
);