import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/sections/ProductsSection.tsx
import { useState, useEffect } from 'react';
import Section from '../shared-components/Section';
import SectionHeader from '../shared-components/SectionHeader';
import ProductGrid from '../sections-components/ProductGrid';
const ProductsSection = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/products.json');
                const data = await response.json();
                setProducts(data.products);
            }
            catch (error) {
                console.error('Error loading products:', error);
            }
        };
        fetchProducts();
    }, []);
    return (_jsxs(Section, { id: "products", theme: "secondary", children: [_jsx(SectionHeader, { content: {
                    title: "We're working on",
                    subtitle: "These are some of the tools developed as a solution to the problems we're studying.",
                    theme: 'dark'
                } }), _jsx(ProductGrid, { products: products })] }));
};
export default ProductsSection;
