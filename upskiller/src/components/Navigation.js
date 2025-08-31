import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Navigation.tsx
import { useState, useEffect } from 'react';
import { SharedButton } from '@shared/components/SharedButton';
import { EventType, ScrollBehavior, SectionId } from '../constants/enums';
import { MenuIcon } from './svg';
const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            // Update active section based on scroll position using Map pattern
            const sectionsMap = new Map([
                [SectionId.HOME, 'home'],
                [SectionId.TEAM, 'team'],
                [SectionId.PRODUCTS, 'products'],
                [SectionId.RESOURCES, 'resources']
            ]);
            const scrollPosition = window.scrollY + 100;
            sectionsMap.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(sectionId);
                    }
                }
            });
        };
        window.addEventListener(EventType.SCROLL, handleScroll);
        return () => window.removeEventListener(EventType.SCROLL, handleScroll);
    }, []);
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: ScrollBehavior.SMOOTH });
        }
    };
    const navItems = new Map([
        [SectionId.TEAM, 'Team'],
        [SectionId.PRODUCTS, 'Products'],
        [SectionId.RESOURCES, 'Resources']
    ]);
    return (_jsx("nav", { className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300", children: _jsx("div", { className: "max-w-6xl mx-auto px-6 py-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("button", { onClick: () => scrollToSection(SectionId.HOME), className: "transition-opacity duration-200 hover:opacity-80 cursor-pointer", children: _jsx("img", { src: "https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/upskiller_logo_RGB.svg", alt: "Upskiller", className: "h-8 w-auto" }) }), _jsx("div", { className: `hidden md:flex space-x-8 px-6 py-2 transition-all duration-300 ${isScrolled ? 'bg-white/20 backdrop-blur-sm' : 'bg-transparent'}`, children: Array.from(navItems.entries()).map(([sectionId, label]) => (_jsx("button", { onClick: () => scrollToSection(sectionId), className: `transition-colors duration-200 cursor-pointer ${activeSection === sectionId
                                ? 'font-medium'
                                : 'hover:opacity-80'}`, style: { color: '#f4fffa' }, children: label }, sectionId))) }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(SharedButton, { appearance: { variant: "contact", size: "sm" }, behavior: { onClick: () => scrollToSection(SectionId.RESOURCES) }, children: "Contact us" }), _jsx("div", { className: "md:hidden", children: _jsx("button", { className: "text-dark hover:text-primary-600 cursor-pointer", children: _jsx(MenuIcon, {}) }) })] })] }) }) }));
};
export default Navigation;
