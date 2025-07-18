import React from 'react';

interface ContactButtonProps {
  type: string;
  value: string;
  link: string;
  icon: React.ReactNode;
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  type,
  value,
  link,
  icon,
  className = ''
}) => {
  const isExternal = type === 'GitHub';
  
  return (
    <a 
      href={link}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`flex items-center space-x-4 p-4 hover:opacity-80 transition-all duration-200 cursor-pointer ${className}`}
      style={{ backgroundColor: '#00ff66' }}
    >
      <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400">
        {icon}
      </div>
      <div>
        <div className="font-medium text-dark">{type}</div>
        <div className="text-dark text-sm">{value}</div>
      </div>
    </a>
  );
};

export { ContactButton };
export default ContactButton;