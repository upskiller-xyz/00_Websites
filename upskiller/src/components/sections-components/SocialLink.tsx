import React from 'react';
import { SharedLink, SharedImage } from '@shared/components';

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