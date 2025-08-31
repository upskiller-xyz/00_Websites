import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Section from '../shared-components/Section';
import SectionHeader from '../shared-components/SectionHeader';
import PartnersGrid from '../sections-components/partners/PartnersGrid';
const SupportSection = () => {
    const [partners, setPartners] = useState([]);
    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const response = await fetch('/partners.json');
                const data = await response.json();
                setPartners(data.partners);
            }
            catch (error) {
                console.error('Error loading partners:', error);
            }
        };
        fetchPartners();
    }, []);
    return (_jsxs(Section, { id: "support", theme: "primary", children: [_jsx(SectionHeader, { content: {
                    title: "Collaborating with",
                    theme: 'dark'
                } }), _jsx(PartnersGrid, { partners: partners })] }));
};
export default SupportSection;
