import React from 'react';
import SharedLink from '../../../../../shared/components/SharedLink';

interface TeamStoryLinkProps {
  href: string;
  children: React.ReactNode;
}

const TeamStoryLink: React.FC<TeamStoryLinkProps> = ({ href, children }) => {
  return (
    <SharedLink
      href={href}
      target="_blank"
      className="primary-link"
    >
      {children}
    </SharedLink>
  );
};

export default TeamStoryLink;