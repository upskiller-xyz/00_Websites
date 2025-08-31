import React, { useState, useEffect } from 'react';
import HeroTitle from '../sections-components/hero/HeroTitle';
import HeroParagraph from '../sections-components/hero/HeroParagraph';
import { LoadingContent } from '../loading';
import { DataFetchService } from '../../services/DataFetchService';
import { DataFile } from '../../constants/data-files.enums';

interface HeroParagraphData {
  index: number;
  content: string;
}

interface HeroTextsData {
  heroTexts: {
    title: string;
    paragraphs: HeroParagraphData[];
  };
}

interface HeroTextGroupProps {
  visibleElements: number[];
}

const HeroTextGroup: React.FC<HeroTextGroupProps> = ({ visibleElements }) => {
  const [heroTexts, setHeroTexts] = useState<HeroTextsData | null>(null);

  useEffect(() => {
    const fetchHeroTexts = async () => {
      try {
        const data = await DataFetchService.fetchData<HeroTextsData>(DataFile.HERO_TEXTS);
        setHeroTexts(data);
      } catch (error) {
        console.error('Error loading hero texts:', error);
      }
    };

    fetchHeroTexts();
  }, []);

  if (!heroTexts) {
    return <LoadingContent message="Loading hero content..." />;
  }

  return (
    <div className="hero-text-group">
      <HeroTitle isVisible={visibleElements.includes(0)}>
        {heroTexts.heroTexts.title}
      </HeroTitle>
      
      {heroTexts.heroTexts.paragraphs.map((paragraph) => (
        <HeroParagraph 
          key={paragraph.index}
          isVisible={visibleElements.includes(paragraph.index)} 
          dataIndex={paragraph.index}
        >
          {paragraph.content}
        </HeroParagraph>
      ))}
    </div>
  );
};

export default HeroTextGroup;