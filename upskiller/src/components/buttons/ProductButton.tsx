import React from 'react';
import { SharedButton, SharedButtonProps } from '@shared/components/SharedButton';

interface ProductButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  appearance?: SharedButtonProps['appearance'];
  behavior?: SharedButtonProps['behavior'];
}

const ProductButton: React.FC<ProductButtonProps> = ({ 
  text,
  onClick,
  disabled = false,
  appearance,
  behavior 
}) => {
  const defaultProductAppearance: SharedButtonProps['appearance'] = {
    variant: 'primary',
    size: 'md',
    className: 'product-button'
  };

  const defaultProductBehavior: SharedButtonProps['behavior'] = {
    onClick,
    disabled
  };

  return (
    <SharedButton
      appearance={{ ...defaultProductAppearance, ...appearance }}
      behavior={{ ...defaultProductBehavior, ...behavior }}
    >
      {text}
    </SharedButton>
  );
};

export default ProductButton;