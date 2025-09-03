import React from 'react';
import { NewsItemTitle } from './NewsItemTitle';
import { NewsItemDescription } from './NewsItemDescription';
import { NewsItemDate } from './NewsItemDate';

interface NewsItemProps {
  id: number;
  title: string;
  description: string;
  date: string;
  url: string;
}

export const NewsItem: React.FC<NewsItemProps> = ({
  title,
  description,
  date,
  url
}) => (
  <div className="last:border-b-0">
    <NewsItemTitle title={title} url={url} />
    <NewsItemDescription description={description} />
    <NewsItemDate date={date} />
  </div>
);
