import { jsx as _jsx } from "react/jsx-runtime";
const SectionGrid = ({ columns, className = '', children }) => (_jsx("div", { className: `section-grid-${columns} ${className}`, children: children }));
export default SectionGrid;
