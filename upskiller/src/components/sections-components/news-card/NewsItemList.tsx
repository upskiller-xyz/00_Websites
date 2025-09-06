import React from 'react';
import { NewsItem } from './NewsItem';

interface NewsItemData {
  id: number;
  title: string;
  description: string;
  date: string;
  url: string;
}

interface NewsItemListProps {
  items: NewsItemData[];
  formatDate: (dateString: string) => string;
}

export const NewsItemList: React.FC<NewsItemListProps> = ({
  items,
  formatDate
}) => (
  <div className="space-y-8">
    {items.map((item) => (
      <NewsItem
        key={item.id}
        item={item}
        formatDate={formatDate}
      />
    ))}
  </div>
);