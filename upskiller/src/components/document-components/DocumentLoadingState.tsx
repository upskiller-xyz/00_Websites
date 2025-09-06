import React from 'react';
import PrivacyMainWrapper from '../privacy-components/PrivacyMainWrapper';
import PrivacyContentWrapper from '../privacy-components/PrivacyContentWrapper';

interface DocumentLoadingStateProps {
  message: string;
}

const DocumentLoadingState: React.FC<DocumentLoadingStateProps> = ({ message }) => {
  return (
    <PrivacyMainWrapper>
      <PrivacyContentWrapper>
        <div className="animate-pulse">{message}</div>
      </PrivacyContentWrapper>
    </PrivacyMainWrapper>
  );
};

export default DocumentLoadingState;