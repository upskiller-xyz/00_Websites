import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/sections/TeamSection.tsx
import { useState, useEffect } from 'react';
import Section from '../shared-components/Section';
import SectionHeader from '../shared-components/SectionHeader';
import TeamContentArea from '../sections-components/team/TeamContentArea';
import TeamTabs from '../sections-components/team/TeamTabs';
const TeamSection = () => {
    const [activeTab, setActiveTab] = useState('team');
    const [teamMembers, setTeamMembers] = useState([]);
    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await fetch('/team.json');
                const data = await response.json();
                setTeamMembers(data.teamMembers);
            }
            catch (error) {
                console.error('Error loading team data:', error);
            }
        };
        fetchTeamData();
    }, []);
    const tabs = teamMembers.map(member => ({
        id: member.id,
        label: member.name
    }));
    const currentMember = teamMembers.find(member => member.id === activeTab);
    return (_jsxs(Section, { id: "team", theme: "primary", children: [_jsx(SectionHeader, { content: {
                    title: "Our Team",
                    theme: 'light'
                } }), _jsx(TeamContentArea, { currentMember: currentMember }), _jsx(TeamTabs, { tabs: tabs, activeTab: activeTab, onTabChange: setActiveTab })] }));
};
export default TeamSection;
