import React from 'react';
import { InfoCardItem } from './InfoCardItem';

interface InfoCardItemsListProps {
  items: string[];
}

export const InfoCardItemsList: React.FC<InfoCardItemsListProps> = ({
  items
}) => (
  <div className="space-y-2">
    {items.map((item, index) => (
      <InfoCardItem key={index} item={item} />
    ))}
  </div>
);
