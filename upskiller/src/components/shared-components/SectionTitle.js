import { jsx as _jsx } from "react/jsx-runtime";
const SectionTitle = ({ children, theme = 'dark', className = '' }) => (_jsx("h2", { className: `font-heading section-title section-title-${theme} ${className}`, children: children }));
export default SectionTitle;
