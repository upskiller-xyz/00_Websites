import React from 'react';
import TeamImage from './TeamImage';
import TeamContent from './TeamContent';
import TeamContentRenderer from './TeamContentRenderer';
import { TeamMember } from '@shared/types';

interface TeamContentAreaProps {
  currentMember?: TeamMember;
}

const TeamContentArea: React.FC<TeamContentAreaProps> = ({ currentMember }) => (
  <div className="overflow-hidden team-content-area">
    <TeamImage />
    <TeamContent socials={currentMember?.socials || {}}>
      {currentMember && <TeamContentRenderer member={currentMember} />}
    </TeamContent>
  </div>
);

export default TeamContentArea;