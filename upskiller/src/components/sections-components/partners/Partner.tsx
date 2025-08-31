import React from 'react';
import { SharedImage } from '@shared/components';
import { ImageSource, IMAGE_SOURCES_MAP } from '../../../constants/image-sources.enums';

interface PartnerProps {
  name: string;
  logo: string;
  size: 'large' | 'small';
}

const Partner: React.FC<PartnerProps> = ({ name, logo, size }) => {
  const baseSrc = IMAGE_SOURCES_MAP[ImageSource.PARTNER_LOGO].src;
  
  return (
    <SharedImage 
      src={`${baseSrc}${logo}`}
      alt={name}
      className={`partner-logo partner-logo-${size}`}
    />
  );
};

export default Partner;