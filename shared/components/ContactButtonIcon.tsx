import React from 'react';

interface ContactButtonIconProps {
  children: React.ReactNode;
  className?: string;
}

const ContactButtonIcon: React.FC<ContactButtonIconProps> = ({
  children,
  className = ''
}) => (
  <div className={`contact-button-icon ${className}`}>
    {children}
  </div>
);

export { ContactButtonIcon };
export default ContactButtonIcon;