import { jsx as _jsx } from "react/jsx-runtime";
const SocialLink = ({ name, url, icon }) => (_jsx("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "social-link", title: `Follow us on ${name}`, children: _jsx("img", { src: icon, alt: `${name} icon`, className: "social-link-icon brand-color-filter" }) }));
export default SocialLink;
