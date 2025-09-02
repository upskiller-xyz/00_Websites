import React from 'react';
import Partner from './Partner';

interface PartnerData {
  id: string;
  name: string;
  logo: string;
  size: 'large' | 'small';
}

interface PartnersGridProps {
  partners: PartnerData[];
}

const PartnersGrid: React.FC<PartnersGridProps> = ({ partners }) => {
  return (
    <div className="support-partners">
      <div className="support-partners-grid">
        {partners.map((partner) => (
          <Partner
            key={partner.id}
            name={partner.name}
            logo={partner.logo}
            size={partner.size}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnersGrid;