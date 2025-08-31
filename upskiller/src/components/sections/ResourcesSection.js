import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/sections/ResourcesSection.tsx
import { useState, useEffect } from 'react';
import { InfoCard } from '../../../../shared/components/InfoCard';
import { NewsCard } from '../../../../shared/components/NewsCard';
import Section from '../shared-components/Section';
import SectionGrid from '../shared-components/SectionGrid';
import SectionHeader from '../shared-components/SectionHeader';
import ContactUs from '../sections-components/ContactUs';
import FollowUs from '../sections-components/FollowUs';
import Footer from '../sections-components/footer/Footer';
import { ArticlesIcon } from '../svg';
const ResourcesSection = () => {
    const [resources, setResources] = useState([]);
    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await fetch('/resources.json');
                const data = await response.json();
                setResources(data.resources);
            }
            catch (error) {
                console.error('Error loading resources:', error);
            }
        };
        fetchResources();
    }, []);
    const getResourceIcon = (resourceName) => {
        if (resourceName === 'Articles') {
            return _jsx(ArticlesIcon, {});
        }
        return null;
    };
    return (_jsxs(Section, { id: "resources", theme: "primary", children: [_jsx(SectionHeader, { content: {
                    title: "Resources",
                    theme: 'light'
                } }), _jsxs(SectionGrid, { columns: "2col", className: "mb-16", children: [_jsx(NewsCard, { className: "transition-all duration-300" }), resources.map((resource) => {
                        const displayConfig = {
                            descriptionLabel: "What you'll find:",
                            itemsLabel: "What you'll find:",
                            icon: getResourceIcon(resource.content.name)
                        };
                        const buttonConfig = {
                            text: resource.config.buttonText,
                            show: true,
                            onClick: () => window.open(resource.config.linkUrl, '_blank')
                        };
                        const cardConfig = {
                            className: "transition-all duration-300"
                        };
                        return (_jsx(InfoCard, { content: {
                                ...resource.content,
                                title: resource.content.name,
                                items: resource.content.features,
                                ...displayConfig
                            }, button: buttonConfig, config: cardConfig }, resource.config.id));
                    })] }), _jsx(ContactUs, {}), _jsx(FollowUs, {}), _jsx(Footer, {})] }));
};
export default ResourcesSection;
