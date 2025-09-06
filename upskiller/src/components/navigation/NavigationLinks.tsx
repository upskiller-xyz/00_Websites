import React from 'react';
import { SectionId } from '../../constants/enums';

interface NavigationLinksProps {
  isScrolled: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export const NavigationLinks: React.FC<NavigationLinksProps> = ({
  isScrolled,
  activeSection,
  scrollToSection
}) => {
  const navItems = new Map([
    [SectionId.TEAM, 'Team'],
    [SectionId.PRODUCTS, 'Products'],
    [SectionId.RESOURCES, 'Resources']
  ]);

  return (
    <div className={`navigation-links ${
       'bg-transparent'
    }`}>
      {Array.from(navItems.entries()).map(([sectionId, label]) => (
        <button
          key={sectionId}
          onClick={() => scrollToSection(sectionId)}
          className={`transition-colors duration-200 cursor-pointer navigation-link-text ${
            activeSection === sectionId
              ? 'font-medium'
              : 'hover:opacity-80'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};