export interface ButtonBase {
  text?: string;
  disabled?: boolean;
  show?: boolean;
  onClick?: () => void;
}

export interface ButtonAppearance {
  variant?: 'primary' | 'secondary' | 'accent' | 'contact';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface ButtonConfig {
  style?: React.CSSProperties;
}