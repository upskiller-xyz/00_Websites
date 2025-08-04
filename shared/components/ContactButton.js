import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ContactButton = ({ type, value, link, icon, className = '' }) => {
    const isExternal = type === 'GitHub';
    return (_jsxs("a", { href: link, target: isExternal ? '_blank' : undefined, rel: isExternal ? 'noopener noreferrer' : undefined, className: `flex items-center space-x-4 p-4 hover:opacity-80 transition-all duration-200 cursor-pointer ${className}`, style: { backgroundColor: '#00ff66' }, children: [_jsx("div", { className: "w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400", children: icon }), _jsxs("div", { children: [_jsx("div", { className: "font-medium text-dark", children: type }), _jsx("div", { className: "text-dark text-sm", children: value })] })] }));
};
export { ContactButton };
export default ContactButton;
