import React from 'react';
import { ContactMethod } from '../types/contact.types';

interface ContactButtonProps {
  contact: ContactMethod;
  icon: React.ReactNode;
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  contact,
  icon,
  className = ''
}) => {
  const { type, value, link } = contact;
  const isExternal = type === 'GitHub';
  
  return (
    <a 
      href={link}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`contact-button ${className}`}
    >
      <div className="contact-button-icon">
        {icon}
      </div>
      <div>
        <div className="contact-button-text">{value}</div>
      </div>
    </a>
  );
};

export { ContactButton };
export default ContactButton;