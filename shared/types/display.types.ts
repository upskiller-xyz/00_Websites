export interface DisplayConfig {
  title?: string;
  descriptionLabel?: string;
  itemsLabel?: string;
  icon?: React.ReactNode;
}

export interface InfoCardDisplay {
  content: any; // Will be ProductContent
  display: DisplayConfig;
  button?: any; // Will be ButtonBase
  config?: any; // Will be InfoCardConfig
}