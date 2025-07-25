import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/sections/TeamSection.tsx
import { useState } from 'react';
import ListBoldKeyLightValue from '../../../../shared/components/ListBoldKeyLightValue';
const TeamSection = () => {
    const [activeTab, setActiveTab] = useState('team');
    const teamParagraphs = [
        "Our journey started in autumn 2023, when three tech-enthusiastic architects and engineers found themselves sharing a common frustration: the construction industry's surprisingly low level of digitalization. A few years into our careers, we were ready for change.",
        _jsxs(_Fragment, { children: ["We crossed paths at IAAC's Master in Advanced Computation for Architecture & Design (", _jsx("a", { href: "https://iaac.net/masters/master-in-advanced-computation-for-architecture-design/", target: "_blank", rel: "noopener noreferrer", className: "text-primary-600 underline", children: "MaCAD" }), "), where Stasja taught a course in ML algorithms that we studied. Together, we developed several promising machine learning prototypes, including a daylight predictive model that caught the attention of the academic community and was published in a ", _jsx("a", { href: "https://www.sciencedirect.com/science/article/abs/pii/S0360132325002252", target: "_blank", rel: "noopener noreferrer", className: "text-primary-600 underline", children: "high-impact journal" }), "."] }),
        _jsxs(_Fragment, { children: ["This success sparked an idea: why not adapt this model for Swedish regulations? We applied for funding and received a grant from the ", _jsx("a", { href: "https://belysningsstiftelsen.se/projekt/alejandro-pacheco-dieguez-ml-modell-for-dagsljusanalys", target: "_blank", rel: "noopener noreferrer", className: "text-primary-600 underline", children: "Bertil and Britt Svensson Foundation" }), ". The project has been generating ", _jsx("a", { href: "https://www.svenskbyggtidning.se/2025/03/21/nytt-ai-projekt-satter-dagsljuset-i-fokus/", target: "_blank", rel: "noopener noreferrer", className: "text-primary-600 underline", children: "buzz" }), " in the industry, and after a couple of months working together, we've discovered something even more valuable: we make a great team. ", _jsx("a", { href: "https://www.almi.se/", target: "_blank", rel: "noopener noreferrer", className: "text-primary-600 underline", children: "Almi" }), ", Sweden's business development agency, thinks so too. "] }),
        _jsxs(_Fragment, { children: ["No-bs and no-buzzwords, effectiveness and transparency are values that we found in common, no matter the project we are working on. We want to understand the problem and provide a solution that works, not just a fancy tool that looks good on paper. Does it resonate?", _jsx("a", { href: "mailto:info@upskiller.xyz", target: "_blank", rel: "noopener noreferrer", className: "text-primary-600 underline", children: " Reach out" }), " to us, we love virtual coffee chats.\""] }),
    ];
    const teamData = {
        team: {
            socials: "<a href=\"mailto:info@upskiller.xyz\" class=\"text-primary-600 underline\">info@upskiller.xyz</a> | <a href=\"https://www.linkedin.com/company/upskiller-xyz/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary-600 underline\">LinkedIn</a>"
        },
        alejandro: {
            content: (_jsx("div", { className: "mb-8", children: _jsx("div", { className: "font-light", children: "Building performance specialist with 10+ years at Swedish architectural firms and research collaborations with Swedish universities." }) })),
            extra: (_jsx(ListBoldKeyLightValue, { graduatedAs: "Architect with master in environmental building design.", teachingExperience: "Lund Technical University", workExperience: "BAU, White Arkitekter.", favLLM: "GPT.", fact: "He is not Libny's brother." })),
            socials: "<a href=\"mailto:alejandro.pacheco@upskiller.xyz\" class=\"text-primary-600 underline\">alejandro.pacheco@upskiller.xyz</a> | <a href=\"https://www.linkedin.com/in/alejandro-pacheco-diéguez-06b1b238/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary-600 underline\">LinkedIn</a>"
        },
        libny: {
            content: (_jsx("div", { className: "mb-8", children: _jsx("div", { className: "font-light", children: "Computational design expert with teaching experience at architecture schools across Europe and China." }) })),
            extra: (_jsx(ListBoldKeyLightValue, { graduatedAs: "Architect with master in Advanced Computation for Architecture & Design.", teachingExperience: "Universidad de los Andes, Tsinghua University, IAAC.", workExperience: "Plasma Studio, Crossboundaries, White Arkitekter.", favLLM: "Claude.", fact: "He is not Alejandro's brother." })),
            socials: "<a href=\"mailto:libny.pacheco@upskiller.xyz\" class=\"text-primary-600 underline\">libny.pacheco@upskiller.xyz</a> | <a href=\"https://www.linkedin.com/in/libny-pacheco-6548b95/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary-600 underline\">LinkedIn</a>"
        },
        stasja: {
            content: (_jsx("div", { className: "mb-8", children: _jsx("div", { className: "font-light", children: "Our tech lead, and machine learning engineer at H&M, lecturer at IAAC Barcelona." }) })),
            extra: (_jsx(ListBoldKeyLightValue, { graduatedAs: "Doesn't matter, studies continuously", teachingExperience: "Iaac, Ume\u00E5 University, PoliMi.", workExperience: "H&M, AECinCode, ELSE-Corp", favLLM: "Claude / Gemini", fact: "Studies medieval Swedish, energy sector and food science" })),
            socials: "<a href=\"mailto:stasja.fedorova@upskiller.xyz\" class=\"text-primary-600 underline\">stasja.fedorova@upskiller.xyz</a> | <a href=\"https://www.linkedin.com/in/stasja-fedorova/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary-600 underline\">LinkedIn</a> | <a href=\"http://aecincode.substack.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary-600 underline\">AECinCode</a>"
        },
        christoph: {
            content: (_jsx("div", { className: "mb-8", children: _jsx("div", { className: "font-light", children: "BIM specialist with 10+ years of experience working in Austria and Germany." }) })),
            extra: (_jsx(ListBoldKeyLightValue, { graduatedAs: "Civil Engineer with master in Advanced Computation for Architecture & Design.", teachingExperience: "Munich University of Applied Sciences.", workExperience: "Jaeger Ausbau Gruppe, PORR.", favLLM: "Claude", fact: "Experienced drone pilot." })),
            socials: "<a href=\"mailto:christoph.berkmiller@upskiller.xyz\" class=\"text-primary-600 underline\">christoph.berkmiller@upskiller.xyz</a> | <a href=\"https://www.linkedin.com/in/christoph-berkmiller-08822020a/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary-600 underline\">LinkedIn</a>"
        },
    };
    const tabs = [
        { id: 'team', label: 'Our Story' },
        { id: 'alejandro', label: 'Alejandro' },
        { id: 'libny', label: 'Libny' },
        { id: 'stasja', label: 'Stasja' },
        { id: 'christoph', label: 'Christoph' }
    ];
    return (_jsx("section", { id: "team", className: "section-container", style: { backgroundColor: '#180057' }, children: _jsxs("div", { className: "section-content", children: [_jsx("div", { className: "text-center space-y-4 mb-16", children: _jsx("h2", { className: "font-heading text-4xl lg:text-5xl font-bold", style: { color: '#f4fffa' }, children: "Our Team" }) }), _jsxs("div", { className: "overflow-hidden", style: { backgroundColor: '#00d67a' }, children: [_jsx("div", { className: "h-[500px] relative overflow-hidden", children: _jsx("img", { src: "https://upskiller-website.s3.fr-par.scw.cloud/upskiller/images/upskiller_team_cyan.png", alt: "Upskiller Team", className: "w-full h-full object-cover" }) }), _jsx("div", { className: "p-8", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "mb-8", children: [activeTab === 'team'
                                            ? teamParagraphs.map((para, idx) => (_jsx("p", { className: "text-lg text-dark leading-relaxed mb-4", children: para }, idx)))
                                            : (() => {
                                                const member = teamData[activeTab];
                                                return _jsxs(_Fragment, { children: [_jsx("p", { className: "text-lg text-dark leading-relaxed mb-4", children: member.content }), member.extra && (_jsx("div", { className: "mb-2", children: member.extra }))] });
                                            })(), _jsx("div", { className: "text-sm text-dark whitespace-pre-line", dangerouslySetInnerHTML: { __html: teamData[activeTab].socials } })] }) }) })] }), _jsx("div", { className: "flex gap-1", children: tabs.map((tab) => (_jsx("button", { onClick: () => setActiveTab(tab.id), className: `flex-1 py-3 font-medium transition-all duration-200 cursor-pointer`, style: {
                            backgroundColor: activeTab === tab.id ? '#00d67a' : '#99efca',
                            color: '#000000'
                        }, children: tab.label }, tab.id))) })] }) }));
};
export default TeamSection;
