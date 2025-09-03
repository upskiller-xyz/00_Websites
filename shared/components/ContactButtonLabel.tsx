import React from 'react';

interface ContactButtonLabelProps {
  children: React.ReactNode;
  className?: string;
}

const ContactButtonLabel: React.FC<ContactButtonLabelProps> = ({
  children,
  className = ''
}) => (
  <div className={className}>
    <div className="contact-button-text">{children}</div>
  </div>
);

export { ContactButtonLabel };
export default ContactButtonLabel;