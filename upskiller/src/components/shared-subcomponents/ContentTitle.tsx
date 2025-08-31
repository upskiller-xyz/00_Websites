import React from 'react';

interface ContentTitleProps {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  theme?: 'light' | 'dark' | 'contact';
}

const ContentTitle: React.FC<ContentTitleProps> = ({ 
  title, 
  level = 3, 
  className = '',
  theme = 'dark'
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseClasses = 'font-bold';
  
  const themeClasses = {
    light: 'text-light',
    dark: 'text-dark',
    contact: 'contact-us-title'
  };
  
  const sizeClasses = {
    1: 'text-4xl',
    2: 'text-3xl', 
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base'
  };

  const finalClasses = `${baseClasses} ${themeClasses[theme]} ${sizeClasses[level]} ${className}`;

  return <Tag className={finalClasses} style={{ fontFamily: 'var(--font-automate)' }}>{title}</Tag>;
};

export default ContentTitle;