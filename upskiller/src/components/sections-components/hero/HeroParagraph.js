import { jsx as _jsx } from "react/jsx-runtime";
const HeroParagraph = ({ isVisible, dataIndex, children }) => (_jsx("p", { "data-animate": true, "data-index": dataIndex, className: `hero-paragraph ${isVisible ? 'hero-element-visible' : 'hero-element-hidden'}`, children: children }));
export default HeroParagraph;
