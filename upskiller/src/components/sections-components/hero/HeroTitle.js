import { jsx as _jsx } from "react/jsx-runtime";
const HeroTitle = ({ isVisible, children }) => (_jsx("h1", { "data-animate": true, "data-index": "0", className: `font-heading hero-title ${isVisible ? 'hero-element-visible' : 'hero-element-hidden'}`, children: children }));
export default HeroTitle;
