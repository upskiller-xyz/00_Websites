import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Navigation.tsx
import { useState, useEffect } from 'react';
const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            // Update active section based on scroll position
            const sections = ['home', 'about', 'services', 'contact'];
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
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'contact', label: 'Contact' },
    ];
    return (_jsx("nav", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`, children: _jsx("div", { className: "max-w-6xl mx-auto px-6 py-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "font-heading font-bold text-xl text-dark", children: "Upskiller" }), _jsx("div", { className: "hidden md:flex space-x-8", children: navItems.map((item) => (_jsx("button", { onClick: () => scrollToSection(item.id), className: `transition-colors duration-200 ${activeSection === item.id
                                ? 'text-primary-600 font-medium'
                                : 'text-gray-600 hover:text-primary-600'}`, children: item.label }, item.id))) }), _jsx("div", { className: "md:hidden", children: _jsx("button", { className: "text-gray-600 hover:text-primary-600", children: _jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) }) }) })] }) }) }));
};
export default Navigation;
