import React from 'react';
import FooterCopyright from './FooterCopyright';
import FooterLinks from './FooterLinks';

const Footer: React.FC = () => (
  <div className="footer-container">
    <div className="footer-content">
      <FooterCopyright />
      <FooterLinks />
    </div>
  </div>
);

export default Footer;