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
    <>
      <style>
        {`
          .contact-button-text {
            display: inline;
          }
          @media (max-width: 640px) {
            .contact-button-text {
              display: none !important;
            }
          }
        `}
      </style>
      <a 
        href={link}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={`flex items-center space-x-4 p-4 cursor-pointer ${className}`}
        style={{ 
          backgroundColor: '#00ff66',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translate(15px, -15px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translate(0px, 0px)';
        }}
      >
        <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400">
          {icon}
        </div>
        <div>
          <div className="text-dark font-medium">
            <span className="contact-button-text">{value}</span>
          </div>
        </div>
      </a>
    </>
  );
};

export { ContactButton };
export default ContactButton;