import React from 'react';
import { SharedImage } from '@shared/components';
import AssetPathManager from '../../../utils/AssetPathManager';

const TeamImageBackground: React.FC = () => (
  <SharedImage 
    src={AssetPathManager.getTeamImage()}
    alt="Upskiller Team"
    className="team-image"
  />
);

export default TeamImageBackground;