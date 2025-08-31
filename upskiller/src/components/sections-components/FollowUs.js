import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import SocialLinkGrid from './SocialLinkGrid';
const FollowUs = () => {
    const [socialLinks, setSocialLinks] = useState([]);
    useEffect(() => {
        const fetchSocialLinks = async () => {
            try {
                const response = await fetch('/social-links.json');
                const data = await response.json();
                setSocialLinks(data.socialLinks);
            }
            catch (error) {
                console.error('Error loading social links:', error);
            }
        };
        fetchSocialLinks();
    }, []);
    return (_jsxs("div", { className: "follow-us-section", children: [_jsx("h3", { className: "follow-us-title", children: "Follow Us" }), _jsx(SocialLinkGrid, { socialLinks: socialLinks })] }));
};
export default FollowUs;
