import React from 'react';

interface LoadingStateProps {
  message?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading...',
  className = '',
  style = {}
}) => (
  <div 
    className={`news-card transition-all duration-300 ${className}`}
    style={{ backgroundColor: 'var(--color-secondary)', ...style }}
  >
    <div className="news-card-content flex items-center justify-center">
      <div className="text-dark">{message}</div>
    </div>
  </div>
);