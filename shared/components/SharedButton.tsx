// shared/components/SharedButton.tsx
import React from "react";

interface ButtonAppearance {
  variant?: 'primary' | 'secondary' | 'accent' | 'contact';
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
  const baseClasses = `font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${disabled ? 'cursor-default' : 'cursor-pointer'}`;
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500',
    accent: 'bg-accent text-white hover:bg-green-600 focus:ring-accent',
    contact: 'text-dark hover:opacity-90'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const contactStyle = variant === 'contact' ? { backgroundColor: disabled ? '#33de95' : '#00FF66' } : {};
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
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
