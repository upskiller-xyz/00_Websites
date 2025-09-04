import React, { useState, useEffect } from 'react';
import Section from '../shared-components/Section';
import SectionHeader from '../shared-components/SectionHeader';
import PartnersGrid from '../sections-components/partners/PartnersGrid';
import { Partner } from '@shared/types';
import { fetchJsonWithFallback } from '../../utils/fetchWithFallback';

const SupportSection: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const data = await fetchJsonWithFallback(
          'https://upskiller-website.s3.fr-par.scw.cloud/upskiller/dynamic/partners.json',
          '/dynamic/partners.json'
        );
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