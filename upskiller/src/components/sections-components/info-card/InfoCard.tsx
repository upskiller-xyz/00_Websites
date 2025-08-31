import React from 'react';
import { SharedButton } from '../../../../../shared/components/SharedButton';
import { ProductContent } from '../../../../../shared/types/product.types';
import { ButtonBase } from '../../../../../shared/types/button.types';
import { InfoCardHeading } from './InfoCardHeading';
import { InfoCardProblem } from './InfoCardProblem';
import { InfoCardDescription } from './InfoCardDescription';
import { InfoCardItemsPanel } from './InfoCardItemsPanel';

interface InfoCardContent extends Partial<ProductContent> {
  title?: string;
  name?: string;
  descriptionLabel?: string;
  icon?: React.ReactNode;
  items?: string[];
  itemsLabel?: string;
}

interface InfoCardConfig {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

interface InfoCardProps {
  content: InfoCardContent;
  button?: ButtonBase;
  config?: InfoCardConfig;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  content,
  button,
  config = {}
}) => {
  const {
    title,
    name,
    subtitle,
    problem,
    description,
    descriptionLabel,
    icon,
    items,
    itemsLabel = "Key Features:",
    features
  } = content;
  
  const displayTitle = title || name || '';
  const displayItems = items || features || [];

  const {
    text: buttonText,
    disabled: buttonDisabled = false,
    show: showButton = true,
    onClick: onButtonClick
  } = button || {};

  const {
    className = '',
    onClick
  } = config;

  return (
    <div 
      className={`info-card transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      <div className="info-card-content">
        <div className="space-y-6">
          {icon && (
            <div className="w-full">
              <div className="w-full flex items-center justify-center">
                {icon}
              </div>
            </div>
          )}
          
          <div className="space-y-3">
            <InfoCardHeading title={displayTitle} subtitle={subtitle} />
            
            {problem && <InfoCardProblem problem={problem} />}
            
            <InfoCardDescription 
              description={description??''}
              label={descriptionLabel}
            />
          </div>
          
          {displayItems && displayItems.length > 0 && (
            <InfoCardItemsPanel items={displayItems} label={itemsLabel} />
          )}
        </div>
      </div>
      
      {showButton && buttonText && (
        <div className="info-card-button-area">
          <div className={`info-card-button-wrapper ${buttonDisabled ? 'disabled' : ''}`}>
            <SharedButton
              appearance={{ variant: "product", className: "w-full", size: "md" }}
              behavior={{ onClick: onButtonClick, disabled: buttonDisabled }}
            >
              {buttonText}
            </SharedButton>
          </div>
        </div>
      )}
    </div>
  );
};
