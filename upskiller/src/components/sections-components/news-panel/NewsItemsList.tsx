import React from 'react';
import { NewsItem } from './NewsItem';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  url: string;
}

interface NewsItemsListProps {
  items: NewsItem[];
}

export const NewsItemsList: React.FC<NewsItemsListProps> = ({
  items
}) => (
  <div className="space-y-8">
    {items.map((item) => (
      <NewsItem key={item.id} {...item} />
    ))}
  </div>
);
