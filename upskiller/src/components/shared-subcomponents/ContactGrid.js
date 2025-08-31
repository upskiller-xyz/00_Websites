import { jsx as _jsx } from "react/jsx-runtime";
import { ContactButton } from '../../../shared/components/ContactButton';
import { EmailIcon, GitHubIcon } from '../svg';
const ContactGrid = ({ contactMethods }) => {
    const getContactIcon = (type) => {
        const iconMap = {
            Email: _jsx(EmailIcon, {}),
            GitHub: _jsx(GitHubIcon, {})
        };
        return iconMap[type] || null;
    };
    return (_jsx("div", { className: "contact-methods-grid", children: contactMethods.map((method, index) => (_jsx(ContactButton, { contact: method, icon: getContactIcon(method.type) }, index))) }));
};
export default ContactGrid;
