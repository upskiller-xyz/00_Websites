import React from 'react';

interface InfoCardItemProps {
  item: string;
}

export const InfoCardItem: React.FC<InfoCardItemProps> = ({
  item
}) => (
  <div className="info-card-item flex items-center space-x-2">
    <div className="info-card-bullet"></div>
    <span className="text-sm text-dark">
      {item}
    </span>
  </div>
);
