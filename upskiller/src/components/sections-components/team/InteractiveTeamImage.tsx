import React, { useState } from 'react';
import TeamImageBackground from './TeamImageBackground';
import TeamActionOverlay from './TeamActionOverlay';
import TeamMaskOverlay from './TeamMaskOverlay';
import TeamLoadingOverlay from './TeamLoadingOverlay';
import { useTeamMasks } from '../../../hooks/useTeamMasks';
import { useImagePreloader } from '../../../hooks/useImagePreloader';

interface InteractiveTeamImageProps {
  onMemberHover?: (memberId: string | null) => void;
}

const InteractiveTeamImage: React.FC<InteractiveTeamImageProps> = ({ onMemberHover }) => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const { teamMasks, masksLoaded } = useTeamMasks();
  const { isLoading, preloadImage, getImageUrl } = useImagePreloader();

  const handleMouseEnter = (memberId: string) => {
    setHoveredMember(memberId);
    onMemberHover?.(memberId);
    preloadImage(memberId);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
    onMemberHover?.(null);
  };

  return (
    <div className="team-image-container relative">
      <TeamImageBackground />
      
      <TeamActionOverlay 
        memberId={hoveredMember}
        isLoading={hoveredMember ? isLoading[hoveredMember] : false}
        imageUrl={hoveredMember ? getImageUrl(hoveredMember) : undefined}
      />
      
      {masksLoaded && (
        <TeamMaskOverlay 
          masks={teamMasks}
          hoveredMember={hoveredMember}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
      
      <TeamLoadingOverlay 
        isLoading={!masksLoaded}
        message="Loading interactive features..."
      />
    </div>
  );
};

export default InteractiveTeamImage;