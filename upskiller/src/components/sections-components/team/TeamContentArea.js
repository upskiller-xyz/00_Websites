import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TeamImage from './TeamImage';
import TeamContent from './TeamContent';
import TeamContentRenderer from './TeamContentRenderer';
const TeamContentArea = ({ currentMember }) => (_jsxs("div", { className: "overflow-hidden team-content-area", children: [_jsx(TeamImage, {}), _jsx(TeamContent, { socials: currentMember?.socials || '', children: currentMember && _jsx(TeamContentRenderer, { member: currentMember }) })] }));
export default TeamContentArea;
