// src/components/sections/ResourcesSection.tsx
import React, { useState, useEffect } from 'react';
import { InfoCard } from '../sections-components/info-card/InfoCard';
import { NewsCard } from '../sections-components/news-card/NewsCard'
import Section from '../shared-components/Section';
import ContactUs from '../sections-components/ContactUs';
import FollowUs from '../sections-components/FollowUs';
import Footer from '../sections-components/footer/Footer';
import { Product } from '@shared/types';

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
    // if (resourceName === 'Articles') {
    //   return <ArticlesIcon />;
    // }
    return null;
  };

  return (
    <Section id="resources" theme="primary">
      <div className="section-content">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold resources-title">
            Resources
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <NewsCard className="transition-all duration-300" />
        {resources.map((resource) => {
          const displayConfig = {
            descriptionLabel: "",
            itemsLabel: "What you'll find:",
            // icon: getResourceIcon(resource.content.name)
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
        </div>

        <ContactUs />
        <FollowUs />
        <Footer />
      </div>
    </Section>
  );
};

export default ResourcesSection;