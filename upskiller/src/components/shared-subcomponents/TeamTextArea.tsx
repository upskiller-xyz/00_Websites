import React from 'react';

interface TeamTextAreaProps {
  bio: string;
}

const TeamTextArea: React.FC<TeamTextAreaProps> = ({ bio }) => {
  return (
    <div className="team-member-description">
      <div className="team-member-bio">{bio}</div>
    </div>
  );
};

export default TeamTextArea;