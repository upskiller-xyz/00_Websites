import React from 'react';
import SectionTitle from './SectionTitle';
import SectionSubtitle from './SectionSubtitle';

interface SectionHeaderContent {
  title: string;
  subtitle?: string;
  theme?: 'light' | 'dark';
}

interface SectionHeaderProps {
  content: SectionHeaderContent;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  content, 
  className = '' 
}) => (
  <div className={`section-header section-header-spacing ${className}`}>
    <SectionTitle theme={content.theme}>
      {content.title}
    </SectionTitle>
    {content.subtitle && (
      <SectionSubtitle>
        {content.subtitle}
      </SectionSubtitle>
    )}
  </div>
);

export default SectionHeader;