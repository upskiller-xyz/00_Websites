import AssetPathManager from '../utils/AssetPathManager';

export enum DocumentType {
  PRIVACY = 'privacy',
  TERMS = 'terms',
  ABOUT = 'about'
}

export interface DocumentConfig {
  scalewayPath: string;
  localPath: string;
  title: string;
  loadingMessage: string;
  errorPrefix: string;
}

export const DOCUMENT_CONFIG: Record<DocumentType, DocumentConfig> = {
  [DocumentType.PRIVACY]: {
    scalewayPath: AssetPathManager.getLegalDocument('privacy.md'),
    localPath: '/legal/privacy.md',
    title: 'Privacy Policy',
    loadingMessage: 'Loading privacy policy...',
    errorPrefix: 'Error loading privacy policy'
  },
  [DocumentType.TERMS]: {
    scalewayPath: AssetPathManager.getLegalDocument('tc.md'),
    localPath: '/legal/tc.md',
    title: 'Terms and Conditions',
    loadingMessage: 'Loading terms and conditions...',
    errorPrefix: 'Error loading terms and conditions'
  },
  [DocumentType.ABOUT]: {
    scalewayPath: AssetPathManager.getLegalDocument('about.md'),
    localPath: '/legal/about.md',
    title: 'About Us',
    loadingMessage: 'Loading about information...',
    errorPrefix: 'Error loading about information'
  }
};