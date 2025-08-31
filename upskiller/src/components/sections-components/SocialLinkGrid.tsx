import React from 'react';
import ComponentGrid from '../shared-components/ComponentGrid';
import { GridType } from '../../constants/grid-types.enums';
import SocialLink from './SocialLink';

interface SocialLinkData {
  name: string;
  url: string;
  icon: string;
}

interface SocialLinkGridProps {
  socialLinks: SocialLinkData[];
}

const SocialLinkGrid: React.FC<SocialLinkGridProps> = ({ socialLinks }) => (
  <ComponentGrid gridType={GridType.CUSTOM} className="social-link-grid">
    {socialLinks.map((social, index) => (
      <SocialLink
        key={index}
        name={social.name}
        url={social.url}
        icon={social.icon}
      />
    ))}
  </ComponentGrid>
);

export default SocialLinkGrid;