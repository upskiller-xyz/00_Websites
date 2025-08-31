import React from 'react';

interface LoadingContentProps {
  message?: string;
}

const LoadingContent: React.FC<LoadingContentProps> = ({ message = 'Loading...' }) => {
  return <div className="loading-placeholder">{message}</div>;
};

export default LoadingContent;