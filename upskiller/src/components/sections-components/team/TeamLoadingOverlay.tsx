import React from 'react';

interface TeamLoadingOverlayProps {
  isLoading: boolean;
  message?: string;
}

const TeamLoadingOverlay: React.FC<TeamLoadingOverlayProps> = ({ 
  isLoading, 
  message = "Loading..." 
}) => {
  if (!isLoading) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 pointer-events-none">
      <div className="text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
        {message}
      </div>
    </div>
  );
};

export default TeamLoadingOverlay;