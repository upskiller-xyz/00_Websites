export enum FooterLinkType {
  PRIVACY_POLICY = 'privacy-policy',
  TERMS_OF_SERVICE = 'terms-of-service',
  LEGAL_INFO = 'legal-info'
}

export interface FooterLinkData {
  text: string;
  href: string;
}

export const FOOTER_LINKS_MAP: Record<FooterLinkType, FooterLinkData> = {
  [FooterLinkType.PRIVACY_POLICY]: {
    text: 'Privacy Policy',
    href: '/privacy'
  },
  [FooterLinkType.TERMS_OF_SERVICE]: {
    text: 'Terms',
    href: '/terms'
  },
  [FooterLinkType.LEGAL_INFO]: {
    text: 'Legal Info',
    href: '/about'
  }
};