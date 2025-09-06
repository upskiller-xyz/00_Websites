import React from 'react';
import { InfoCardPanelHeading } from './InfoCardPanelHeading';
import { InfoCardItemsList } from './InfoCardItemsList';

interface InfoCardItemsPanelProps {
  items: string[];
  label?: string;
}

export const InfoCardItemsPanel: React.FC<InfoCardItemsPanelProps> = ({
  items,
  label = "Key Features:"
}) => (
  <div className="space-y-3">
    <InfoCardPanelHeading label={label} />
    <InfoCardItemsList items={items} />
  </div>
);
