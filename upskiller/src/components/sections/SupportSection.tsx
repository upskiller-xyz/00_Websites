import React, { useState, useEffect } from 'react';
import Section from '../shared-components/Section';
import SectionHeader from '../shared-components/SectionHeader';
import PartnersGrid from '../sections-components/partners/PartnersGrid';
import { Partner } from '@shared/types';

const SupportSection: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch('/partners.json');
        const data = await response.json();
        setPartners(data.partners);
      } catch (error) {
        console.error('Error loading partners:', error);
      }
    };

    fetchPartners();
  }, []);
  return (
    <Section id="support" theme="support">
      <SectionHeader 
        content={{
          title: "Trusted by",
          theme: 'dark'
        }}
      />
      
      <PartnersGrid partners={partners} />
    </Section>
  );
};

export default SupportSection;