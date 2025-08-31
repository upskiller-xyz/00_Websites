import React from 'react';
import { SharedButton, SharedButtonProps } from '../../../../shared/components/SharedButton';
import { ButtonBase } from '../../../../shared/types/button.types';

interface ResourceButtonProps {
  button: ButtonBase;
  appearance?: SharedButtonProps['appearance'];
  behavior?: SharedButtonProps['behavior'];
}

const ResourceButton: React.FC<ResourceButtonProps> = ({ 
  button, 
  appearance,
  behavior 
}) => {
  const { text, disabled = false, show = true, onClick } = button;

  if (!show) return null;

  const defaultResourceAppearance: SharedButtonProps['appearance'] = {
    variant: 'contact',
    className: 'w-full',
    size: 'md'
  };

  const defaultResourceBehavior: SharedButtonProps['behavior'] = {
    onClick,
    disabled
  };

  return (
    <SharedButton
      appearance={{ ...defaultResourceAppearance, ...appearance }}
      behavior={{ ...defaultResourceBehavior, ...behavior }}
    >
      {text}
    </SharedButton>
  );
};

export default ResourceButton;