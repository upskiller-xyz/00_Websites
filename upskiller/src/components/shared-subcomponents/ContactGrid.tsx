import React from 'react';
import ComponentGrid from '../shared-components/ComponentGrid';
import { GridType } from '../../constants/grid-types.enums';
import { ContactButton } from '@shared/components';
import { ContactMethod } from '@shared/types';
import { EmailIcon, GitHubIcon } from '../svg';

interface ContactGridProps {
  contactMethods: ContactMethod[];
}

const ContactGrid: React.FC<ContactGridProps> = ({ contactMethods }) => {
  const getContactIcon = (type: string) => {
    const iconMap = {
      Email: <EmailIcon />,
      GitHub: <GitHubIcon />
    };
    const icon = iconMap[type as keyof typeof iconMap] || null;
    console.log('ContactGrid getContactIcon:', { type, icon, hasIcon: !!icon });
    return icon;
  };

  return (
    <ComponentGrid gridType={GridType.CUSTOM} className="contact-methods-grid">
      {contactMethods.map((method, index) => (
        <ContactButton
          key={index}
          contact={method}
          icon={getContactIcon(method.type)}
        />
      ))}
    </ComponentGrid>
  );
};

export default ContactGrid;