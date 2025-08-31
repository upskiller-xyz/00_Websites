import React from 'react';
import { SharedButton } from './SharedButton';
import { ProductContent } from '../types/product.types';
import { ButtonBase } from '../types/button.types';

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

const InfoCard: React.FC<InfoCardProps> = ({
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
  
  // Use title if provided, otherwise fall back to name from ProductContent
  const displayTitle = title || name || '';
  
  // Use items if provided, otherwise fall back to features from ProductContent
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
      {/* Content Area with padding */}
      <div className="info-card-content">
        {/* Top Content */}
        <div className="space-y-6">
          {/* Header with Icon */}
          {icon && (
            <div className="w-full">
              <div className="w-full flex items-center justify-center">
                {icon}
              </div>
            </div>
          )}
          
          {/* Title and Description */}
          <div className="space-y-3">
            <div>
              <h3 className="info-card-title font-bold text-dark text-3xl">
                {displayTitle}
              </h3>
              {subtitle && (
                <p className="text-lg text-dark font-medium">
                  {subtitle}
                </p>
              )}
            </div>
            {problem && (
              <p className="text-dark leading-relaxed">
                <strong>Problem:</strong> {problem}
              </p>
            )}
            <p className="text-dark leading-relaxed">
              {descriptionLabel && <strong>{descriptionLabel}:</strong>} {description}
            </p>
          </div>
          
          {/* Items List */}
          {displayItems && displayItems.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-medium text-dark">{itemsLabel}</h4>
              <div className="space-y-2">
                {displayItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="info-card-bullet"></div>
                    <span className="text-sm text-dark">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Button Area with its own padding */}
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

export { InfoCard };
export default InfoCard;