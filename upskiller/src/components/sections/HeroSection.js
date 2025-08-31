import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/sections/HeroSection.tsx
import { useEffect, useRef, useState } from 'react';
import { EventType } from '../../constants/enums';
import { ScrollProgressCalculator } from '../../utils/ScrollProgressCalculator';
import HeroSectionContainer from '../shared-components/HeroSectionContainer';
import HeroBackgroundMotifs from '../sections-components/hero/HeroBackgroundMotifs';
import HeroContent from '../sections-components/hero/HeroContent';
const HeroSection = () => {
    const backgroundMotifsRef = useRef(null);
    const textContainerRef = useRef(null);
    const sectionRef = useRef(null);
    const [visibleElements, setVisibleElements] = useState([]);
    useEffect(() => {
        const handleScroll = () => {
            const scrollFactor = window.scrollY * 0.5;
            if (backgroundMotifsRef.current?.movingMotifRef.current) {
                backgroundMotifsRef.current.movingMotifRef.current.style.transform = `translate(${scrollFactor}px, -${scrollFactor}px)`;
            }
            // Scroll-driven animation for sticky section
            if (sectionRef.current) {
                const container = sectionRef.current.parentElement;
                if (container) {
                    const containerRect = container.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    if (ScrollProgressCalculator.isInStickyZone(containerRect, windowHeight)) {
                        const progress = ScrollProgressCalculator.calculateStickyProgress(containerRect, windowHeight);
                        const newVisibleElements = ScrollProgressCalculator.getVisibleElements(progress);
                        setVisibleElements(newVisibleElements);
                    }
                    else {
                        setVisibleElements([]);
                    }
                }
            }
        };
        window.addEventListener(EventType.SCROLL, handleScroll);
        handleScroll(); // Call once on mount
        return () => {
            window.removeEventListener(EventType.SCROLL, handleScroll);
        };
    }, []);
    return (_jsxs(HeroSectionContainer, { ref: sectionRef, id: "home", children: [_jsx(HeroBackgroundMotifs, { ref: backgroundMotifsRef }), _jsx(HeroContent, { textContainerRef: textContainerRef, visibleElements: visibleElements })] }));
};
export default HeroSection;
