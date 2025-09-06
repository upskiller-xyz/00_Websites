import React from 'react';
import TeamStoryContent from './TeamStoryContent';
import TeamMemberContent from './TeamMemberContent';
import { TeamMember } from '@shared/types';

interface TeamContentRendererProps {
  member: TeamMember;
}

const TeamContentRenderer: React.FC<TeamContentRendererProps> = ({ member }) => {
  if (member.type === 'story') {
    return <TeamStoryContent />;
  }
  
  if (member.type === 'member') {
    return (
      <TeamMemberContent
        memberInfo={{
          bio: member.bio || '',
          graduatedAs: member.graduatedAs || '',
          teachingExperience: member.teachingExperience || '',
          workExperience: member.workExperience || '',
          favLLM: member.favLLM || '',
          fact: member.fact || ''
        }}
      />
    );
  }
  
  return null;
};

export default TeamContentRenderer;