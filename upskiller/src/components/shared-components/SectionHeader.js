import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SectionTitle from './SectionTitle';
import SectionSubtitle from './SectionSubtitle';
const SectionHeader = ({ content, className = '' }) => (_jsx("div", { className: `section-header ${className}`, children: _jsxs("div", { className: "section-header-spacing", children: [_jsx(SectionTitle, { theme: content.theme, children: content.title }), content.subtitle && (_jsx(SectionSubtitle, { children: content.subtitle }))] }) }));
export default SectionHeader;
