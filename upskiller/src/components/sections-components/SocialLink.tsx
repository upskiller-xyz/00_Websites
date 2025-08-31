import React from 'react';
import SharedLink from '../../../../shared/components/SharedLink';
import SharedImage from '../../../../shared/components/SharedImage';

interface SocialLinkProps {
  name: string;
  url: string;
  icon: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ name, url, icon }) => (
  <SharedLink 
    href={url}
    target="_blank"
    className="social-link"
    title={`Follow us on ${name}`}
  >
    <SharedImage 
      src={icon} 
      alt={`${name} icon`}
      className="social-link-icon brand-color-filter"
    />
  </SharedLink>
);

export default SocialLink;