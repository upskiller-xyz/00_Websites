import React from 'react';
import { SharedButton } from '@shared/components';
import { SectionId } from '../../constants/enums';
import { MenuIcon } from '../svg';
import styles from './NavigationActions.module.css';

interface NavigationActionsProps {
  scrollToSection: (sectionId: string) => void;
}

export const NavigationActions: React.FC<NavigationActionsProps> = ({ scrollToSection }) => {
  return (
    <div className="flex items-center space-x-4">
      <SharedButton
        appearance={{ 
          variant: "contact", 
          size: "sm",
          className: styles.navigationContactButton
        }}
        behavior={{ onClick: () => scrollToSection(SectionId.RESOURCES) }}
      >
        Contact us
      </SharedButton>
      
      <div className="md:hidden">
        <button className="text-dark hover:text-primary-600 cursor-pointer">
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};