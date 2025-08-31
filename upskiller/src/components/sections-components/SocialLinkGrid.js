import { jsx as _jsx } from "react/jsx-runtime";
import SocialLink from './SocialLink';
const SocialLinkGrid = ({ socialLinks }) => (_jsx("div", { className: "social-link-grid", children: socialLinks.map((social, index) => (_jsx(SocialLink, { name: social.name, url: social.url, icon: social.icon }, index))) }));
export default SocialLinkGrid;
