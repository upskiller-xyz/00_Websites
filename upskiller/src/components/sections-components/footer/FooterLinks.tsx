import React from 'react';
import FooterLink from '../../shared-subcomponents/FooterLink';
import { FooterLinkType, FOOTER_LINKS_MAP } from '../../../constants/footer-links.enums';

const FooterLinks: React.FC = () => {
  const linkOrder: FooterLinkType[] = [
    FooterLinkType.PRIVACY_POLICY,
    FooterLinkType.TERMS_OF_SERVICE,
    FooterLinkType.LEGAL_INFO
  ];

  return (
    <div className="footer-links">
      {linkOrder.map((linkType) => (
        <FooterLink 
          key={linkType}
          linkData={FOOTER_LINKS_MAP[linkType]} 
        />
      ))}
    </div>
  );
};

export default FooterLinks;