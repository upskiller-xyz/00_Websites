import { jsx as _jsx } from "react/jsx-runtime";
import Partner from './Partner';
const PartnersGrid = ({ partners }) => (_jsx("div", { className: "support-partners", children: _jsx("div", { className: "support-partners-grid", children: partners.map((partner) => (_jsx(Partner, { name: partner.name, logo: partner.logo, size: partner.size }, partner.id))) }) }));
export default PartnersGrid;
