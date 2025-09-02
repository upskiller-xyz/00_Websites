import React from 'react';
import { SharedButton } from './SharedButton';
import { ProductContent } from '../types/product.types';
import { ButtonBase } from '../types/button.types';

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
    solution,
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
        <h3 className="info-card-title">
          {displayTitle}
        </h3>
        {/* Subtitle */}
        {subtitle && (
          <p className="info-card-subtitle">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Content - 3 InfoCard elements for products */}
      <div className="info-card-content">
        {/* Problem element */}
        {problem && (
          <div className="info-card-element">
            <p className="info-card-text">
              <strong>Problem:</strong> {problem}
            </p>
          </div>
        )}
        
        {/* Solution element */}
        {solution && (
          <div className="info-card-element">
            <p className="info-card-text">
              <strong>Solution:</strong> {solution}
            </p>
          </div>
        )}
        
        {/* Description element (if no problem/solution structure) */}
        {!problem && !solution && description && (
          <div className="info-card-element">
            <p className="info-card-text">
              {descriptionLabel && <strong>{descriptionLabel}:</strong>} {description}
            </p>
          </div>
        )}
        
        {/* Key Features element */}
        {displayItems && displayItems.length > 0 && (
          <div className="info-card-element">
            <div className="info-card-features">
              <strong className="info-card-features-title">{itemsLabel}</strong>
              <ul className="info-card-features-list">
                {displayItems.map((item, index) => (
                  <li key={index} className="info-card-feature-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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

export { InfoCard };
export default InfoCard;