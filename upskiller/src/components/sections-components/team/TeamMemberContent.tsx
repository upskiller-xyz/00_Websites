import React from 'react';
import TeamDetails from '../../shared-subcomponents/TeamDetails';

interface TeamMemberInfo {
  bio: string;
  graduatedAs: string;
  teachingExperience: string;
  workExperience: string;
  favLLM: string;
  fact: string;
}

interface TeamMemberContentProps {
  memberInfo: TeamMemberInfo;
}

const TeamMemberContent: React.FC<TeamMemberContentProps> = ({
  memberInfo
}) => {
  return (
    <TeamDetails memberInfo={memberInfo} />
  );
};

export default TeamMemberContent;