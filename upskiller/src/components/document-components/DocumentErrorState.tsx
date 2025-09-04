import React from 'react';
import PrivacyMainWrapper from '../privacy-components/PrivacyMainWrapper';
import PrivacyContentWrapper from '../privacy-components/PrivacyContentWrapper';

interface DocumentErrorStateProps {
  error: string;
  title: string;
  errorPrefix: string;
}

const DocumentErrorState: React.FC<DocumentErrorStateProps> = ({ error, title, errorPrefix }) => {
  return (
    <PrivacyMainWrapper>
      <PrivacyContentWrapper>
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
        <div className="text-red-300 mb-4">{errorPrefix}: {error}</div>
        <p>Please try again later or contact us directly.</p>
      </PrivacyContentWrapper>
    </PrivacyMainWrapper>
  );
};

export default DocumentErrorState;