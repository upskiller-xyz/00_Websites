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

import AssetPathManager from '../utils/AssetPathManager';

export const IMAGE_SOURCES_MAP: Record<ImageSource, ImageData> = {
  [ImageSource.HERO_MOTIF]: {
    src: AssetPathManager.getHeroMotif(),
    alt: 'Background motif'
  },
  [ImageSource.LOGO]: {
    src: AssetPathManager.getLogo(),
    alt: 'Upskiller logo'
  },
  [ImageSource.PRODUCT_ICON]: {
    src: AssetPathManager.getProductIcon(),
    alt: 'Product icon'
  },
  [ImageSource.TEAM_IMAGE]: {
    src: AssetPathManager.getTeamImage(),
    alt: 'Upskiller Team'
  },
  [ImageSource.PARTNER_LOGO]: {
    src: AssetPathManager.getAssetUrl(AssetPathManager.CATEGORIES.LOGOS, ''),
    alt: 'Partner logo'
  }
};