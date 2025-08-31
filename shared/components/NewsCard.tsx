import React, { useState, useEffect } from 'react';

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

const NewsCard: React.FC<NewsCardProps> = ({
  title = "News",
  description = "Stay updated with our latest announcements and company developments",
  className = '',
  style = { backgroundColor: '#00d67a' }
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
        setNewsItems(data.slice(0, 4)); // Limit to 4 items
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
      <div 
        className={`news-card transition-all duration-300 ${className}`}
        style={style}
      >
        <div className="news-card-content flex items-center justify-center">
          <div className="text-dark">Loading news...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div 
        className={`news-card transition-all duration-300 ${className}`}
        style={style}
      >
        <div className="news-card-content flex items-center justify-center">
          <div className="text-dark">Error loading news: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`news-card transition-all duration-300 ${className}`}
      style={style}
    >
      {/* Content Area with padding */}
      <div className="news-card-content">
        {/* Header */}
        <div className="space-y-4 mb-8">
          <h3 className="news-card-title font-bold text-dark text-3xl">
            {title}
          </h3>
          <p className="text-dark leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* News List */}
        <div className="space-y-8">
          {newsItems.map((item) => (
            <div key={item.id} className="last:border-b-0">
              <div>
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark font-bold leading-snug text-base hover:underline transition-all duration-200"
                  style={{ 
                    marginBottom: '2px', 
                    display: 'block',
                    fontFamily: 'var(--font-automate)',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  {item.title}
                </a>
                <p className="text-dark leading-relaxed text-sm" style={{ marginBottom: '2px' }}>
                  {item.description}
                </p>
                <p className="text-dark/70" style={{ fontSize: '10px', marginBottom: '0' }}>
                  {formatDate(item.date)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { NewsCard };
export default NewsCard;