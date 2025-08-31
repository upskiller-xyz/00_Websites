import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TeamContent = ({ children, socials }) => (_jsx("div", { className: "team-content", children: _jsx("div", { className: "team-content-inner", children: _jsxs("div", { className: "team-text-area", children: [_jsx("div", { className: "flex-grow", children: children }), _jsx("div", { className: "team-socials", dangerouslySetInnerHTML: { __html: socials } })] }) }) }));
export default TeamContent;
