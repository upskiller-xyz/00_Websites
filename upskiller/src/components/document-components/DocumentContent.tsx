import React from 'react';
import DocumentMarkdown from './DocumentMarkdown';
import PrivacyMainWrapper from '../privacy-components/PrivacyMainWrapper';
import PrivacyContentWrapper from '../privacy-components/PrivacyContentWrapper';

interface DocumentContentProps {
  content: string;
  title: string;
}

const DocumentContent: React.FC<DocumentContentProps> = ({ content, title }) => {
  return (
    <PrivacyMainWrapper>
      <PrivacyContentWrapper className="privacy-content">
        <h1 className="text-3xl font-bold privacy-text mb-8">{title}</h1>
        <DocumentMarkdown content={content} />
      </PrivacyContentWrapper>
    </PrivacyMainWrapper>
  );
};

export default DocumentContent;