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
    href: '#'
  },
  [FooterLinkType.TERMS_OF_SERVICE]: {
    text: 'Terms of Service',
    href: '#'
  },
  [FooterLinkType.LEGAL_INFO]: {
    text: 'Legal Info',
    href: '#'
  }
};