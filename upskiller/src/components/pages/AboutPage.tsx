import React from 'react';
import DocumentPage from '../document-components/DocumentPage';
import { DocumentType } from '../../types/DocumentTypes';

const AboutPage: React.FC = () => {
  return <DocumentPage documentType={DocumentType.ABOUT} />;
};

export default AboutPage;