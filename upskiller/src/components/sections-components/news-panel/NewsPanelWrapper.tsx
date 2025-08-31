import React from 'react';

interface NewsPanelWrapperProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const NewsPanelWrapper: React.FC<NewsPanelWrapperProps> = ({
  className = '',
  style = { backgroundColor: 'var(--color-secondary)' },
  children
}) => (
  <div 
    className={`news-card transition-all duration-300 ${className}`}
    style={style}
  >
    <div className="news-card-content">
      {children}
    </div>
  </div>
);
