import React from 'react';
import { SharedImage } from '@shared/components';
import { SectionId } from '../../constants/enums';

interface NavigationLogoProps {
  scrollToSection: (sectionId: string) => void;
}

export const NavigationLogo: React.FC<NavigationLogoProps> = ({ scrollToSection }) => {
  return (
    <SharedImage
      src="https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/upskiller_logo_RGB.svg"
      alt="Upskiller"
      className="h-8 w-auto"
      onClick={() => scrollToSection(SectionId.HOME)}
    />
  );
};