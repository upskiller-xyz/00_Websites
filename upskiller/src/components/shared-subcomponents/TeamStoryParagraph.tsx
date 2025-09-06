import React from 'react';

interface TeamStoryParagraphProps {
  children: React.ReactNode;
  index?: number;
}

const TeamStoryParagraph: React.FC<TeamStoryParagraphProps> = ({ children, index }) => {
  return (
    <p className="team-paragraph">
      {children}
    </p>
  );
};

export default TeamStoryParagraph;