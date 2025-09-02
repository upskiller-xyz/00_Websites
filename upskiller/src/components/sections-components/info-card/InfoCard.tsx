import React from 'react';
import { SharedButton } from '../../../../../shared/components/SharedButton';
import { ProductContent } from '../../../../../shared/types/product.types';
import { ButtonBase } from '../../../../../shared/types/button.types';
import { InfoCardHeading } from './InfoCardHeading';
import { InfoCardTitleText } from './InfoCardTitleText';
import { InfoCardDescription } from './InfoCardDescription';
import { InfoCardItemsPanel } from './InfoCardItemsPanel';

interface InfoCardContent extends Partial<ProductContent> {
  title?: string;
  name?: string;
  solution?: string;
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
    solution,
    description,
    descriptionLabel,
    icon,
    items,
    itemsLabel = "Key Features:",
    features
  } = content;
  
  // Debug logging
  console.log('InfoCard content:', { title, name, problem, solution, description });
  
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
      className={`info-card ${className}`}
      onClick={onClick}
    >
      {/* Image (optional) */}
      {icon && (
        <div className="info-card-image">
          {icon}
        </div>
      )}
      
      {/* Title */}
      <div className="info-card-header">
        <InfoCardHeading title={displayTitle} subtitle={subtitle} />
      </div>
      
      {/* Content - 3 InfoCard elements for products */}
      <div className="info-card-content">
        {/* Problem element */}
        {problem && (
          <div className="info-card-element">
            <InfoCardTitleText title="Problem" text={problem} />
          </div>
        )}
        
        {/* Solution element */}
        {solution && (
          <div className="info-card-element">
            <InfoCardTitleText title="Solution" text={solution} />
          </div>
        )}
        
        {/* Description element (if no problem/solution structure) */}
        {!problem && !solution && description && (
          <div className="info-card-element">
            <InfoCardDescription 
              description={description}
              label={descriptionLabel}
            />
          </div>
        )}
        
        {/* Key Features element */}
        {displayItems && displayItems.length > 0 && (
          <div className="info-card-element">
            <InfoCardItemsPanel items={displayItems} label={itemsLabel} />
          </div>
        )}
      </div>
      
      {/* Button (optional) */}
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
