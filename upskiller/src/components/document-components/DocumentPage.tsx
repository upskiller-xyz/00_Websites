import React from 'react';
import { useMarkdown } from '../../hooks/useMarkdown';
import { DocumentType, DOCUMENT_CONFIG } from '../../types/DocumentTypes';
import PageHeader from '../shared-components/PageHeader';
import PageFooter from '../shared-components/PageFooter';
import DocumentContent from './DocumentContent';
import DocumentLoadingState from './DocumentLoadingState';
import DocumentErrorState from './DocumentErrorState';

interface DocumentPageProps {
  documentType: DocumentType;
}

const DocumentPage: React.FC<DocumentPageProps> = ({ documentType }) => {
  const config = DOCUMENT_CONFIG[documentType];
  const { content, loading, error } = useMarkdown(config.scalewayPath, config.localPath);

  const renderContent = () => {
    const contentStateMap = new Map([
      [loading, () => <DocumentLoadingState message={config.loadingMessage} />],
      [!!error, () => (
        <DocumentErrorState 
          error={error!} 
          title={config.title}
          errorPrefix={config.errorPrefix}
        />
      )],
      [true, () => <DocumentContent content={content} title={config.title} />] // default case
    ]);

    const activeState = Array.from(contentStateMap.keys()).find(state => state);
    const renderFunction = contentStateMap.get(activeState!);
    
    return renderFunction?.();
  };

  return (
    <div className="min-h-screen privacy-page-bg">
      <PageHeader />
      {renderContent()}
      <PageFooter />
    </div>
  );
};

export default DocumentPage;