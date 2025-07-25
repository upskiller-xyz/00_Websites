import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InfoCard } from '../../../../shared/components/InfoCard';
import { ContactButton } from '../../../../shared/components/ContactButton';
const ResourcesSection = () => {
    const resources = [
        {
            title: "News",
            description: "Stay updated with the latest developments in sustainable building design and our product announcements.",
            items: [
                "Product releases and updates",
                "Industry insights and trends",
                "Company milestones",
                "Partnership announcements"
            ],
            icon: (_jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" }) })),
            color: "blue",
            hasButton: false
        },
        {
            title: "Blog",
            description: "Deep dives into technical topics, best practices, and thought leadership in environmental optimization.",
            items: [
                "Technical tutorials and guides",
                "Case studies and examples",
                "Research findings",
                "Expert opinions and analysis"
            ],
            icon: (_jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" }) })),
            color: "purple",
            hasButton: true
        }
    ];
    const contactMethods = [
        {
            type: "Email",
            value: "info@upskiller.xyz",
            link: "mailto:info@upskiller.xyz",
            icon: (_jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }))
        },
        {
            type: "GitHub",
            value: "github.com/upskiller-xyz",
            link: "https://github.com/upskiller-xyz",
            icon: (_jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) }))
        }
    ];
    const socialLinks = [
        {
            name: "Substack",
            url: "http://upskiller.substack.com/",
            icon: "https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/substack.png"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/company/upskiller-xyz/",
            icon: "https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/linkedin-dark.svg"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/upskiller.xyz",
            icon: "https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/instagram-dark.svg"
        }
    ];
    return (_jsx("section", { id: "resources", className: "section-container", style: { backgroundColor: '#180057' }, children: _jsxs("div", { className: "section-content", children: [_jsxs("div", { className: "text-center space-y-4 mb-16", children: [_jsx("h2", { className: "font-heading text-4xl lg:text-5xl font-bold", style: { color: '#f4fffa' }, children: "Resources" }), _jsxs("p", { className: "text-xl max-w-3xl mx-auto", style: { color: '#f4fffa' }, children: ["Our knowledge base is not fully here yet, but we are working on making it open and accessible to everyone! Have to prioritize ", _jsx("a", { href: "https://github.com/upskiller-xyz/Lux", target: "_blank", rel: "noopener noreferrer", className: "text-primary-600 underline", children: "Lux" }), " and ", _jsx("a", { href: "https://github.com/upskiller-xyz/Col", target: "_blank", rel: "noopener noreferrer", className: "text-primary-600 underline", children: "Col" }), " first:)"] })] }), _jsx("div", { className: "grid lg:grid-cols-2 gap-8 mb-16", children: resources.map((resource, index) => (_jsx(InfoCard, { title: resource.title, description: resource.description, items: resource.items, itemsLabel: "What you'll find:", buttonText: resource.hasButton ? `Explore ${resource.title}` : undefined, showButton: resource.hasButton, onButtonClick: resource.title === 'Blog' ? () => window.open('https://upskillerxyz.substack.com', '_blank') : () => { }, className: "hover:opacity-90 transition-all duration-300" }, index))) }), _jsx("div", { className: "p-8 mb-16", style: { backgroundColor: '#00d67a' }, children: _jsxs("div", { className: "space-y-6", children: [_jsx("h3", { className: "font-heading text-3xl font-bold text-dark", children: "Contact Us" }), _jsx("div", { className: "grid grid-cols-2 gap-4", children: contactMethods.map((method, index) => (_jsx(ContactButton, { type: method.type, value: method.value, link: method.link, icon: method.icon }, index))) })] }) }), _jsxs("div", { className: "text-center space-y-6", children: [_jsx("h3", { className: "font-heading text-2xl font-bold font-light", style: { color: '#4e378a' }, children: "Follow Us" }), _jsx("div", { className: "flex justify-center space-x-6", children: socialLinks.map((social, index) => (_jsx("a", { href: social.url, target: "_blank", rel: "noopener noreferrer", className: "w-12 h-12 flex items-center justify-center transition-opacity duration-200 hover:opacity-80", children: _jsx("div", { className: "w-12 h-12", style: { backgroundColor: '#4e378a', mask: `url(${social.icon}) no-repeat center`, maskSize: 'contain', WebkitMask: `url(${social.icon}) no-repeat center`, WebkitMaskSize: 'contain' } }) }, index))) })] }), _jsx("div", { className: "mt-16 pt-8 border-t border-gray-700 text-center", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0", children: [_jsx("p", { className: "text-gray-400", children: "\u00A9 2025 BIMTech Innovations AB. All rights reserved." }), _jsxs("div", { className: "flex space-x-6 text-sm", children: [_jsx("a", { href: "#", className: "text-gray-400 hover:text-white transition-colors", children: "Privacy Policy" }), _jsx("a", { href: "#", className: "text-gray-400 hover:text-white transition-colors", children: "Terms of Service" }), _jsx("a", { href: "#", className: "text-gray-400 hover:text-white transition-colors", children: "Legal Info" })] })] }) })] }) }));
};
export default ResourcesSection;
