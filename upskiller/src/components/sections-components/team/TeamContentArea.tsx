import React from 'react';
import InteractiveTeamImage from './InteractiveTeamImage';
import TeamContent from './TeamContent';
import TeamContentRenderer from './TeamContentRenderer';
import { TeamMember } from '@shared/types';

interface TeamContentAreaProps {
  currentMember?: TeamMember;
  onMemberHover?: (memberId: string | null) => void;
}

const TeamContentArea: React.FC<TeamContentAreaProps> = ({ currentMember, onMemberHover }) => (
  <div className="overflow-hidden team-content-area">
    <InteractiveTeamImage onMemberHover={onMemberHover} />
    <TeamContent socials={currentMember?.socials || {}}>
      {currentMember && <TeamContentRenderer member={currentMember} />}
    </TeamContent>
  </div>
);

export default TeamContentArea;