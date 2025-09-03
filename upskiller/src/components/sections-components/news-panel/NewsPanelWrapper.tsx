import React from 'react';

interface NewsPanelWrapperProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const NewsPanelWrapper: React.FC<NewsPanelWrapperProps> = ({
  className = '',
  style = {},
  children
}) => {
  const finalStyle = { backgroundColor: 'var(--color-secondary)', ...style };
  
  return (
    <div 
      className={`news-card transition-all duration-300 ${className}`}
      style={finalStyle}
    >
      <div className="news-card-content">
        {children}
      </div>
    </div>
  );
};
