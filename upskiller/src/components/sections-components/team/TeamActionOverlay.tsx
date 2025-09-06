import React from 'react';

interface TeamActionOverlayProps {
  memberId: string | null;
  isLoading: boolean;
  imageUrl?: string;
}

const TeamActionOverlay: React.FC<TeamActionOverlayProps> = ({ memberId, isLoading, imageUrl }) => {
  // Don't show anything while loading - let the original image show through
  if (!memberId || isLoading || !imageUrl) return null;

  return (
    <div className="team-action-overlay">
      <img 
        src={imageUrl}
        alt={`${memberId} in action`}
        className="team-action-image transition-opacity duration-300"
      />
    </div>
  );
};

export default TeamActionOverlay;