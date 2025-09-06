import React from 'react';

interface PrivacyContentWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PrivacyContentWrapper: React.FC<PrivacyContentWrapperProps> = ({ 
  children, 
  className = "text-center privacy-text" 
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default PrivacyContentWrapper;