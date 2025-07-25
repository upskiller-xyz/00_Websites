import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/sections/HeroSection.tsx
import { useEffect, useRef } from 'react';
const HeroSection = () => {
    const staticMotifRef = useRef(null);
    const movingMotifRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollFactor = scrollY * 0.5; // Adjust speed of parallax
            if (movingMotifRef.current) {
                // Move up and right (45 degrees)
                movingMotifRef.current.style.transform = `translate(${scrollFactor}px, -${scrollFactor}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (_jsxs("section", { id: "home", className: "section-container relative overflow-hidden", style: { backgroundColor: '#180057' }, children: [_jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [_jsx("div", { ref: staticMotifRef, className: "absolute", style: {
                            top: '0', // Align with very top of webpage
                            left: '0',
                            width: '100%',
                            height: 'calc(100% + 80px)',
                            opacity: 0.33,
                            filter: 'brightness(0) saturate(100%) invert(30%) sepia(27%) saturate(1752%) hue-rotate(237deg) brightness(93%) contrast(86%)'
                        }, children: _jsx("img", { src: "https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/motif-1.svg", alt: "", className: "w-full h-full object-cover" }) }), _jsx("div", { ref: movingMotifRef, className: "absolute", style: {
                            top: '0', // Align with very top of webpage
                            left: '0',
                            width: '100%',
                            height: 'calc(100% + 80px)',
                            opacity: 0.33,
                            filter: 'brightness(0) saturate(100%) invert(30%) sepia(27%) saturate(1752%) hue-rotate(237deg) brightness(93%) contrast(86%)'
                        }, children: _jsx("img", { src: "https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/motif-1.svg", alt: "", className: "w-full h-full object-cover" }) })] }), _jsx("div", { className: "section-content relative z-10", children: _jsx("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: _jsx("div", { className: "space-y-8", children: _jsxs("div", { className: "space-y-4", children: [_jsx("h1", { className: "font-heading text-5xl lg:text-6xl font-bold leading-tight", style: { color: '#f4fffa' }, children: "Tools you trust. Insights you depend on." }), _jsx("p", { className: "text-xl leading-relaxed", style: { color: '#f4fffa' }, children: "At Upskiller, we develop open, accessible, indispensable software that simplifies complexity, turns design information into meaningful insights and empowers AEC professionals to work efficiently." }), _jsx("p", { className: "text-xl leading-relaxed", style: { color: '#f4fffa' }, children: "We see a future where the community of AEC professionals seamlessly access information and knowledge, truly understands them, and use them to build a better world." })] }) }) }) })] }));
};
export default HeroSection;
