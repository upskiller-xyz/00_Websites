import React from 'react';
import DocumentPage from '../document-components/DocumentPage';
import { DocumentType } from '../../types/DocumentTypes';

const PrivacyPage: React.FC = () => {
  return <DocumentPage documentType={DocumentType.PRIVACY} />;
};

export default PrivacyPage;