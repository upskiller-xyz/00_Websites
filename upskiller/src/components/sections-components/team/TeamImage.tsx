import React from 'react';
import SharedImage from '../../../../../shared/components/SharedImage';
import { ImageSource, IMAGE_SOURCES_MAP } from '../../../constants/image-sources.enums';

const TeamImage: React.FC = () => {
  const teamImageData = IMAGE_SOURCES_MAP[ImageSource.TEAM_IMAGE];
  
  return (
    <div className="team-image-container">
      <SharedImage 
        src={teamImageData.src}
        alt={teamImageData.alt}
        className="team-image"
      />
    </div>
  );
};

export default TeamImage;