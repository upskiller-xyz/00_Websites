import React from 'react';
import TeamTextArea from './TeamTextArea';
import TeamMemberDetails from '../../../../../shared/components/TeamMemberDetails';

interface TeamMemberInfo {
  bio: string;
  graduatedAs?: string;
  teachingExperience?: string;
  workExperience?: string;
  favLLM?: string;
  fact?: string;
}

interface TeamDetailsProps {
  memberInfo: TeamMemberInfo;
}

const TeamDetails: React.FC<TeamDetailsProps> = ({ memberInfo }) => {
  const { bio, ...memberDetails } = memberInfo;
  
  return (
    <>
      <TeamTextArea bio={bio} />
      <TeamMemberDetails memberDetails={memberDetails} />
    </>
  );
};

export default TeamDetails;