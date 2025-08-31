import React from 'react';
import FooterCopyright from '../sections-components/footer/FooterCopyright';
import FooterLinks from '../sections-components/footer/FooterLinks';

const FooterContent: React.FC = () => {
  return (
    <div className="footer-content">
      <FooterCopyright />
      <FooterLinks />
    </div>
  );
};

export default FooterContent;