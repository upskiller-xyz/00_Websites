import React from 'react';

interface EmailIconProps {
  className?: string;
}

const EmailIcon: React.FC<EmailIconProps> = ({ className }) => (
  <svg 
    className={`icon-24 ${className || ''}`} 
    width="24" 
    height="24" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default EmailIcon;