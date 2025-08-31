import { jsx as _jsx } from "react/jsx-runtime";
import { InfoCard } from '../../../../shared/components/InfoCard';
import ProductIcon from '../ProductIcon';
import { ProductStatus } from '../../constants/enums';
const ProductGrid = ({ products }) => (_jsx("div", { className: "section-grid-2col max-w-5xl mx-auto", children: products.map((product) => {
        const isUpcoming = product.config.status === ProductStatus.UPCOMING;
        const isClickable = product.config.linkUrl && !isUpcoming;
        return (_jsx(InfoCard, { content: {
                title: product.content.name,
                subtitle: product.content.subtitle,
                problem: product.content.problem,
                description: product.content.description,
                descriptionLabel: "Solution",
                icon: (_jsx(ProductIcon, { type: product.icon.type, src: product.icon.src, alt: product.icon.alt, path: product.icon.path })),
                items: product.content.features,
                itemsLabel: "Key Features:"
            }, button: {
                text: product.config.buttonText,
                disabled: isUpcoming,
                show: true,
                onClick: isClickable ? () => window.open(product.config.linkUrl, '_blank') : undefined
            }, config: {
                className: `${isUpcoming ? 'opacity-90' : ''} ${isClickable ? 'cursor-pointer' : ''}`,
                onClick: isClickable ? () => window.open(product.config.linkUrl, '_blank') : undefined
            } }, product.config.id));
    }) }));
export default ProductGrid;
