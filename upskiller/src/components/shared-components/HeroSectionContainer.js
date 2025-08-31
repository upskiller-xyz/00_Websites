import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
const HeroSectionContainer = forwardRef(({ id, className = '', children }, ref) => (_jsx("div", { className: "hero-container", children: _jsx("section", { ref: ref, id: id, className: `hero-sticky-section section-container hero-section ${className}`, children: children }) })));
HeroSectionContainer.displayName = 'HeroSectionContainer';
export default HeroSectionContainer;
