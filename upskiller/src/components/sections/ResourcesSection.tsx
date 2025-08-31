// src/components/sections/ResourcesSection.tsx
import React, { useState, useEffect } from 'react';
import { InfoCard } from '../../../../shared/components/InfoCard';
import { NewsCard } from '../../../../shared/components/NewsCard';
import Section from '../shared-components/Section';
import SectionGrid from '../shared-components/SectionGrid';
import SectionHeader from '../shared-components/SectionHeader';
import ContactUs from '../sections-components/ContactUs';
import FollowUs from '../sections-components/FollowUs';
import Footer from '../sections-components/footer/Footer';
import { ArticlesIcon } from '../svg';
import { Product } from '../../../../shared/types/product.types';

const ResourcesSection: React.FC = () => {
  const [resources, setResources] = useState<Product[]>([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('/resources.json');
        const data = await response.json();
        setResources(data.resources);
      } catch (error) {
        console.error('Error loading resources:', error);
      }
    };

    fetchResources();
  }, []);

  const getResourceIcon = (resourceName: string) => {
    if (resourceName === 'Articles') {
      return <ArticlesIcon />;
    }
    return null;
  };

  return (
    <Section id="resources" theme="primary">
      <SectionHeader 
        content={{
          title: "Resources",
          theme: 'light'
        }}
      />

      <SectionGrid columns="2col" className="mb-16">
        <NewsCard className="transition-all duration-300" />
        {resources.map((resource) => {
          const displayConfig = {
            descriptionLabel: "What you'll find:",
            itemsLabel: "What you'll find:",
            icon: getResourceIcon(resource.content.name)
          };
          
          const buttonConfig = {
            text: resource.config.buttonText,
            show: true,
            onClick: () => window.open(resource.config.linkUrl, '_blank')
          };
          
          const cardConfig = {
            className: "transition-all duration-300"
          };

          return (
            <InfoCard
              key={resource.config.id}
              content={{
                ...resource.content,
                title: resource.content.name,
                items: resource.content.features,
                ...displayConfig
              }}
              button={buttonConfig}
              config={cardConfig}
            />
          );
        })}
      </SectionGrid>

      <ContactUs />
      <FollowUs />
      <Footer />
    </Section>
  );
};

export default ResourcesSection;