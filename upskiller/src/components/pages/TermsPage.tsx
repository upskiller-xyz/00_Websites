import React from 'react';
import DocumentPage from '../document-components/DocumentPage';
import { DocumentType } from '../../types/DocumentTypes';

const TermsPage: React.FC = () => {
  return <DocumentPage documentType={DocumentType.TERMS} />;
};

export default TermsPage;