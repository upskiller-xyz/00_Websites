import React from 'react';
import { SharedImage } from '@shared/components';
import { SectionId } from '../../constants/enums';
import AssetPathManager from '../../utils/AssetPathManager';

interface NavigationLogoProps {
  scrollToSection: (sectionId: string) => void;
}

export const NavigationLogo: React.FC<NavigationLogoProps> = ({ scrollToSection }) => {
  return (
    <SharedImage
      src={AssetPathManager.getNavigationLogo()}
      alt="Upskiller"
      className="h-8 w-auto"
      onClick={() => scrollToSection(SectionId.HOME)}
    />
  );
};