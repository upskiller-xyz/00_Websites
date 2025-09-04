import React from 'react';

interface PrivacyMainWrapperProps {
  children: React.ReactNode;
}

const PrivacyMainWrapper: React.FC<PrivacyMainWrapperProps> = ({ children }) => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {children}
    </main>
  );
};

export default PrivacyMainWrapper;