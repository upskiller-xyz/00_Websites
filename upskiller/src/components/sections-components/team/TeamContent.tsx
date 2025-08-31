import React from 'react';

interface TeamContentProps {
  children: React.ReactNode;
  socials: string;
}

const TeamContent: React.FC<TeamContentProps> = ({ children, socials }) => (
  <div className="team-content">
    <div className="team-content-inner">
      <div className="team-text-area">
        <div className="flex-grow">
          {children}
        </div>
        <div
          className="team-socials"
          dangerouslySetInnerHTML={{ __html: socials }}
        />
      </div>
    </div>
  </div>
);

export default TeamContent;