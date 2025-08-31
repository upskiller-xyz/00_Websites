import { jsx as _jsx } from "react/jsx-runtime";
const ContentTitle = ({ title, level = 3, className = '', theme = 'dark' }) => {
    const Tag = `h${level}`;
    const baseClasses = 'font-heading font-bold';
    const themeClasses = {
        light: 'text-light',
        dark: 'text-dark',
        contact: 'contact-us-title'
    };
    const sizeClasses = {
        1: 'text-4xl',
        2: 'text-3xl',
        3: 'text-2xl',
        4: 'text-xl',
        5: 'text-lg',
        6: 'text-base'
    };
    const finalClasses = `${baseClasses} ${themeClasses[theme]} ${sizeClasses[level]} ${className}`;
    return _jsx(Tag, { className: finalClasses, children: title });
};
export default ContentTitle;
