import React from 'react';
import styles from './NewsItemTitle.module.css';

interface NewsItemTitleProps {
  title: string;
  url: string;
}

export const NewsItemTitle: React.FC<NewsItemTitleProps> = ({
  title,
  url
}) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className={styles.newsItemTitle}
  >
    {title}
  </a>
);
