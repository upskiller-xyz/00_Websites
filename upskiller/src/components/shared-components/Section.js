import { jsx as _jsx } from "react/jsx-runtime";
const Section = ({ id, theme, children }) => (_jsx("section", { id: id, className: `section-container section-${theme}`, children: _jsx("div", { className: "section-content", children: children }) }));
export default Section;
