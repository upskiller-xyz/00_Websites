import React, { useState, useEffect } from 'react';
import { LoadingState } from '../../loading/LoadingState';
import { ErrorState } from '../../loading/ErrorState';
import { NewsCardContent } from './NewsCardContent';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  url: string;
}

interface NewsCardProps {
  title?: string;
  description?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  title = "News",
  description = "Stay updated with our latest announcements and company developments",
  className = '',
  style = {}
}) => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/news.json');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data: NewsItem[] = await response.json();
        setNewsItems(data.slice(0, 4));
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <LoadingState
        message="Loading news..."
        className={className}
        style={style}
      />
    );
  }

  if (error) {
    return (
      <ErrorState
        error={error}
        className={className}
        style={style}
      />
    );
  }

  return (
    <div 
      className={`news-card transition-all duration-300 ${className}`}
      style={style}
    >
      <NewsCardContent
        title={title}
        description={description}
        newsItems={newsItems}
        formatDate={formatDate}
      />
    </div>
  );
};
