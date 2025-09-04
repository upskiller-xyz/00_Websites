// src/components/sections/TeamSection.tsx
import React, { useState, useEffect } from 'react';
import Section from '../shared-components/Section';
import SectionHeader from '../shared-components/SectionHeader';
import TeamContentArea from '../sections-components/team/TeamContentArea';
import TeamTabs from '../sections-components/team/TeamTabs';
import { TeamMember, TeamTab } from '@shared/types';
import { fetchJsonWithFallback } from '../../utils/fetchWithFallback';

const TeamSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('team');
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data = await fetchJsonWithFallback(
          'https://upskiller-website.s3.fr-par.scw.cloud/upskiller/dynamic/team.json',
          '/dynamic/team.json'
        );
        setTeamMembers(data.teamMembers);
      } catch (error) {
        console.error('Error loading team data:', error);
      }
    };

    fetchTeamData();
  }, []);

  const tabs: TeamTab[] = teamMembers.map(member => ({
    id: member.id,
    label: member.name
  }));

  const currentMember = teamMembers.find(member => member.id === activeTab);

  return (
    <Section id="team" theme="primary">
      <SectionHeader 
        content={{
          title: "Our Team",
          theme: 'light'
        }}
      />

      <TeamContentArea currentMember={currentMember} />

      <TeamTabs 
        tabs={tabs} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </Section>
  );
};

export default TeamSection;