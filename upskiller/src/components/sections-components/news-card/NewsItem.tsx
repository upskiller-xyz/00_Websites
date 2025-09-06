import React from 'react';

interface NewsItemData {
  id: number;
  title: string;
  description: string;
  date: string;
  url: string;
}

interface NewsItemProps {
  item: NewsItemData;
  formatDate: (dateString: string) => string;
}

export const NewsItem: React.FC<NewsItemProps> = ({
  item,
  formatDate
}) => (
  <div className="last:border-b-0">
    <div>
      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-dark font-bold leading-snug text-base hover:underline transition-all duration-200 news-card-link"
      >
        {item.title}
      </a>
      <p className="text-dark leading-relaxed text-sm news-item-description">
        {item.description}
      </p>
      <p className="text-dark/70 news-item-date">
        {formatDate(item.date)}
      </p>
    </div>
  </div>
);