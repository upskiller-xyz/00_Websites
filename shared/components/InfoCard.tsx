import React from 'react';
import { SharedButton } from './SharedButton';
import { ProductContent } from '../types/product.types';
import { ButtonBase } from '../types/button.types';

interface InfoCardContent extends ProductContent {
  title: string;
  descriptionLabel?: string;
  icon?: React.ReactNode;
  items: string[];
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
    subtitle,
    problem,
    description,
    descriptionLabel,
    icon,
    items,
    itemsLabel = "Key Features:"
  } = content;

  const {
    text: buttonText,
    disabled: buttonDisabled = false,
    show: showButton = true,
    onClick: onButtonClick
  } = button || {};

  const {
    className = '',
    style = { backgroundColor: '#00d67a' },
    onClick
  } = config;
  const defaultButtonStyle = { backgroundColor: buttonDisabled ? '#33de95' : '#00ff66' };
  const finalButtonStyle = { ...defaultButtonStyle };

  return (
    <div 
      className={`transition-all duration-300 flex flex-col h-full ${className}`}
      style={style}
      onClick={onClick}
    >
      {/* Content Area with padding */}
      <div className="p-8 flex-grow flex flex-col justify-between">
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
              <h3 className="font-heading font-bold text-dark text-3xl">
                {title}
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
          <div className="space-y-3">
            <h4 className="font-medium text-dark">{itemsLabel}</h4>
            <div className="space-y-2">
              {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4e378a' }}></div>
                  <span className="text-sm text-dark">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Button Area with its own padding */}
      {showButton && buttonText && (
        <div className="p-8 pt-0">
          <div 
            style={{
              ...finalButtonStyle,
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (!buttonDisabled) {
                e.currentTarget.style.transform = 'translate(15px, -15px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!buttonDisabled) {
                e.currentTarget.style.transform = 'translate(0px, 0px)';
              }
            }}
          >
            <SharedButton
              appearance={{ variant: "contact", className: "w-full" }}
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