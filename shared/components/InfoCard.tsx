import React from 'react';
import { SharedButton } from './SharedButton';

interface InfoCardProps {
  title: string;
  subtitle?: string;
  problem?: string;
  description: string;
  items: string[];
  itemsLabel?: string;
  icon?: React.ReactNode;
  buttonText?: string;
  buttonDisabled?: boolean;
  buttonStyle?: React.CSSProperties;
  onClick?: () => void;
  onButtonClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  showButton?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  subtitle,
  problem,
  description,
  items,
  itemsLabel = "Key Features:",
  icon,
  buttonText,
  buttonDisabled = false,
  buttonStyle,
  onClick,
  onButtonClick,
  className = '',
  style = { backgroundColor: '#00d67a' },
  showButton = true
}) => {
  const defaultButtonStyle = { backgroundColor: buttonDisabled ? '#33de95' : '#00ff66' };
  const finalButtonStyle = { ...defaultButtonStyle, ...buttonStyle };

  return (
    <div 
      className={`p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
      style={style}
      onClick={onClick}
    >
      <div className="space-y-6">
        {/* Header with Icon */}
        {icon && (
          <div className="flex items-start justify-between">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
              {icon}
            </div>
          </div>
        )}
        
        {/* Title and Description */}
        <div className="space-y-3">
          <div>
            <h3 className={`font-heading font-bold text-dark ${subtitle ? 'text-3xl' : 'text-2xl'}`}>
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
            <strong>Solution:</strong> {description}
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
        
        {/* Action Button */}
        {showButton && buttonText && (
          <div style={finalButtonStyle}>
            <SharedButton
              variant="contact"
              className="w-full"
              onClick={onButtonClick}
              disabled={buttonDisabled}
            >
              {buttonText}
            </SharedButton>
          </div>
        )}
      </div>
    </div>
  );
};

export { InfoCard };
export default InfoCard;