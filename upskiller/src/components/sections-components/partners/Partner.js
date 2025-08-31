import { jsx as _jsx } from "react/jsx-runtime";
const Partner = ({ name, logo, size }) => (_jsx("img", { src: `https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/${logo}`, alt: name, className: `partner-logo partner-logo-${size}` }));
export default Partner;
