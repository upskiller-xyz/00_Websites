import React from 'react';

interface NewsItemDateProps {
  date: string;
}

export const NewsItemDate: React.FC<NewsItemDateProps> = ({
  date
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <p className="text-dark/70 news-item-date">
      {formatDate(date)}
    </p>
  );
};
