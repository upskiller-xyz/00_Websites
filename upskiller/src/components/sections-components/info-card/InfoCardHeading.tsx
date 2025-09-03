import React from 'react';
import { InfoCardTitle } from './InfoCardTitle';
import { InfoCardSubtitle } from './InfoCardSubtitle';

interface InfoCardHeadingProps {
  title: string;
  subtitle?: string;
}

export const InfoCardHeading: React.FC<InfoCardHeadingProps> = ({
  title,
  subtitle
}) => (
  <>
    <InfoCardTitle title={title} />
    {subtitle && <InfoCardSubtitle subtitle={subtitle} />}
  </>
);
