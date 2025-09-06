import React from 'react';
import TeamTabButton from '../../buttons/TeamTabButton';

interface Tab {
  id: string;
  label: string;
}

interface TeamTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TeamTabs: React.FC<TeamTabsProps> = ({ tabs, activeTab, onTabChange }) => (
  <div className="team-tabs">
    {tabs.map((tab) => (
      <TeamTabButton
        key={tab.id}
        label={tab.label}
        isActive={activeTab === tab.id}
        onClick={() => onTabChange(tab.id)}
      />
    ))}
  </div>
);

export default TeamTabs;