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
    <div className="navigation-actions">
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
      
      <div className="mobile-menu-button">
        <button className="mobile-menu-button">
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};