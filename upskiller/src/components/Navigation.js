import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Navigation.tsx
import { useState, useEffect } from 'react';
import { SharedButton } from '@shared/components/SharedButton';
const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            // Update active section based on scroll position
            const sections = ['home', 'team', 'products', 'resources'];
            const scrollPosition = window.scrollY + 100;
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                    }
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const navItems = [
        { id: 'team', label: 'Team' },
        { id: 'products', label: 'Products' },
        { id: 'resources', label: 'Resources' },
    ];
    return (_jsx("nav", { className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300", children: _jsx("div", { className: "max-w-6xl mx-auto px-6 py-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("button", { onClick: () => scrollToSection('home'), className: "transition-opacity duration-200 hover:opacity-80 cursor-pointer", children: _jsx("img", { src: "https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/upskiller_logo_RGB.svg", alt: "Upskiller", className: "h-8 w-auto" }) }), _jsx("div", { className: `hidden md:flex space-x-8 px-6 py-2 transition-all duration-300 ${isScrolled ? 'bg-white/20 backdrop-blur-sm' : 'bg-transparent'}`, children: navItems.map((item) => (_jsx("button", { onClick: () => scrollToSection(item.id), className: `transition-colors duration-200 cursor-pointer ${activeSection === item.id
                                ? 'font-medium'
                                : 'hover:opacity-80'}`, style: { color: '#f4fffa' }, children: item.label }, item.id))) }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(SharedButton, { variant: "contact", size: "sm", onClick: () => scrollToSection('resources'), children: "Contact us" }), _jsx("div", { className: "md:hidden", children: _jsx("button", { className: "text-dark hover:text-primary-600 cursor-pointer", children: _jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) }) }) })] })] }) }) }));
};
export default Navigation;
