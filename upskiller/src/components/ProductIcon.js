import { jsx as _jsx } from "react/jsx-runtime";
const ProductIcon = ({ type, src, alt, path, className = "w-full h-auto" }) => {
    if (type === 'image' && src) {
        return (_jsx("img", { src: src, alt: alt || '', className: `${className} object-contain` }));
    }
    if (type === 'svg' && path) {
        return (_jsx("div", { className: "w-full flex justify-center", children: _jsx("svg", { className: "h-80 w-auto", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: path }) }) }));
    }
    return null;
};
export default ProductIcon;
