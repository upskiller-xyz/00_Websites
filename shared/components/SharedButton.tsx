// shared/components/SharedButton.tsx
import React from "react";

interface ButtonAppearance {
  variant?: 'primary' | 'secondary' | 'accent' | 'contact' | 'product';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

interface ButtonBehavior {
  onClick?: () => void;
  disabled?: boolean;
}

export interface SharedButtonProps {
  children: React.ReactNode;
  appearance?: ButtonAppearance;
  behavior?: ButtonBehavior;
}

export function SharedButton({ 
  children, 
  appearance = {},
  behavior = {}
}: SharedButtonProps) {
  const { variant = 'primary', size = 'md', className = '' } = appearance;
  const { onClick, disabled = false } = behavior;
  const classes = `btn-base btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : 'btn-enabled'} ${className}`;
  
  const contactStyle = variant === 'contact' ? { 
    backgroundColor: disabled ? 'var(--color-secondary)' : 'var(--color-accent)'
  } : {};
  
  return (
    <button 
      className={classes} 
      onClick={disabled ? undefined : onClick} 
      style={contactStyle}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
