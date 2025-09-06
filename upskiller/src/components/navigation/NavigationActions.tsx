import React from 'react';
import { MenuIcon } from '../svg';

interface NavigationActionsProps {
  scrollToSection: (sectionId: string) => void;
}

export const NavigationActions: React.FC<NavigationActionsProps> = ({ scrollToSection }) => {
  return (
    <div className="navigation-actions">
      <div className="mobile-menu-button">
        <button className="mobile-menu-button">
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};