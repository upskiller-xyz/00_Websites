import React from 'react';
import { FooterLinkData } from '../../constants/footer-links.enums';

interface FooterLinkProps {
  linkData: FooterLinkData;
}

const FooterLink: React.FC<FooterLinkProps> = ({ linkData }) => {
  return (
    <a href={linkData.href} className="footer-link">
      {linkData.text}
    </a>
  );
};

export default FooterLink;