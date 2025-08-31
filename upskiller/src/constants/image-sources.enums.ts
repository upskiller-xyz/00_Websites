export enum ImageSource {
  HERO_MOTIF = 'hero-motif',
  LOGO = 'logo',
  PRODUCT_ICON = 'product-icon',
  TEAM_IMAGE = 'team-image',
  PARTNER_LOGO = 'partner-logo'
}

export interface ImageData {
  src: string;
  alt: string;
}

export const IMAGE_SOURCES_MAP: Record<ImageSource, ImageData> = {
  [ImageSource.HERO_MOTIF]: {
    src: 'https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/motif-1.svg',
    alt: 'Background motif'
  },
  [ImageSource.LOGO]: {
    src: 'https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/logo.svg',
    alt: 'Upskiller logo'
  },
  [ImageSource.PRODUCT_ICON]: {
    src: 'https://upskiller-website.s3.fr-par.scw.cloud/upskiller/icons/product.svg',
    alt: 'Product icon'
  },
  [ImageSource.TEAM_IMAGE]: {
    src: 'https://upskiller-website.s3.fr-par.scw.cloud/upskiller/images/upskiller_team_cyan.png',
    alt: 'Upskiller Team'
  },
  [ImageSource.PARTNER_LOGO]: {
    src: 'https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/',
    alt: 'Partner logo'
  }
};