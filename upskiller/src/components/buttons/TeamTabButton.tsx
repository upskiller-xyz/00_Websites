import React from 'react';
import { SharedButton, SharedButtonProps } from '@shared/components/SharedButton';

interface TeamTabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  appearance?: SharedButtonProps['appearance'];
  behavior?: SharedButtonProps['behavior'];
}

const TeamTabButton: React.FC<TeamTabButtonProps> = ({ 
  label, 
  isActive, 
  onClick,
  appearance,
  behavior 
}) => {
  const defaultTeamTabAppearance: SharedButtonProps['appearance'] = {
    variant: 'secondary',
    className: `team-tab ${isActive ? 'team-tab-active' : 'team-tab-inactive'}`,
    size: 'md'
  };

  const defaultTeamTabBehavior: SharedButtonProps['behavior'] = {
    onClick,
    disabled: false
  };

  return (
    <SharedButton
      appearance={{ ...defaultTeamTabAppearance, ...appearance }}
      behavior={{ ...defaultTeamTabBehavior, ...behavior }}
    >
      {label}
    </SharedButton>
  );
};

export default TeamTabButton;