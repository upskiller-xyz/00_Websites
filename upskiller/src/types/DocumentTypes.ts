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
    scalewayPath: 'https://upskiller-website.s3.fr-par.scw.cloud/upskiller/legal/privacy.md',
    localPath: '/legal/privacy.md',
    title: 'Privacy Policy',
    loadingMessage: 'Loading privacy policy...',
    errorPrefix: 'Error loading privacy policy'
  },
  [DocumentType.TERMS]: {
    scalewayPath: 'https://upskiller-website.s3.fr-par.scw.cloud/upskiller/legal/tc.md',
    localPath: '/legal/tc.md',
    title: 'Terms and Conditions',
    loadingMessage: 'Loading terms and conditions...',
    errorPrefix: 'Error loading terms and conditions'
  },
  [DocumentType.ABOUT]: {
    scalewayPath: 'https://upskiller-website.s3.fr-par.scw.cloud/upskiller/legal/about.md',
    localPath: '/legal/about.md',
    title: 'About Us',
    loadingMessage: 'Loading about information...',
    errorPrefix: 'Error loading about information'
  }
};