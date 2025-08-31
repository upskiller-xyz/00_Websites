import React from 'react';
import ComponentGrid from '../shared-components/ComponentGrid';
import { GridType } from '../../constants/grid-types.enums';
import { InfoCard } from '../../../../shared/components/InfoCard';
import ProductIcon from '../ProductIcon';
import ProductButton from '../buttons/ProductButton';
import { Product } from '../../../../shared/types/product.types';
import { ProductStatus } from '../../constants/enums';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => (
  <ComponentGrid gridType={GridType.SECTION} columns="2col" className="max-w-5xl mx-auto">
    {products.map((product) => {
      const isUpcoming = product.config.status === ProductStatus.UPCOMING;
      const isClickable = product.config.linkUrl && !isUpcoming;
      
      return (
        <InfoCard
          key={product.config.id}
          content={product.content}
          button={{
            text: product.config.buttonText,
            disabled: isUpcoming,
            show: true,
            onClick: isClickable ? () => window.open(product.config.linkUrl, '_blank') : undefined
          }}
          config={{
            className: `${isUpcoming ? 'opacity-90' : ''} ${isClickable ? 'cursor-pointer' : ''}`,
            onClick: isClickable ? () => window.open(product.config.linkUrl, '_blank') : undefined
          }}
        />
      );
    })}
  </ComponentGrid>
);

export default ProductGrid;