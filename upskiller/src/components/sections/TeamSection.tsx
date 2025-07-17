// src/components/sections/TeamSection.tsx
import React, { useState } from 'react';
import ListBoldKeyLightValue from '../../../../shared/components/ListBoldKeyLightValue';

const TeamSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('team');

  const teamParagraphs = [
    "Our journey started in autumn 2023, when three tech-enthusiastic architects and engineers found themselves sharing a common frustration: the construction industry's surprisingly low level of digitalization. A few years into our careers, we were ready for change.",
    <>
      We crossed paths at IAAC's Master in Advanced Computation for Architecture & Design (
      <a
        href="https://iaac.net/masters/master-in-advanced-computation-for-architecture-design/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-600 underline"
      >
        MaCAD
      </a>
      ), where Stasja taught and we studied. Together, we developed several promising machine learning prototypes, including a daylight predictive model that caught the attention of the academic community and was published in a <a
        href="https://www.sciencedirect.com/science/article/abs/pii/S0360132325002252"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-600 underline"
      >high-impact journal</a>.
    </>,
    <>This success sparked an idea: why not adapt this model for Swedish regulations? We applied for funding and were thrilled to receive a grant from the <a
      href="https://belysningsstiftelsen.se/projekt/alejandro-pacheco-dieguez-ml-modell-for-dagsljusanalys"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-600 underline"
    >Bertil and Britt Svensson Foundation</a>. The project has been generating <a
      href="https://www.svenskbyggtidning.se/2025/03/21/nytt-ai-projekt-satter-dagsljuset-i-fokus/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-600 underline"
    >buzz</a> in the industry, and after a couple of months working together, we've discovered something even more valuable: we make a great team. Our recent acceptance by Almi, Sweden's business development agency, supports that. </>,
    "With complementary skills and a growing network of industry connections, we're excited about what's next. If you'd like to connect, drop us a line or reach out to any of us directly."
  ];

  type TeamTab = {
    socials: string;
  };
  type MemberTab = {
    content: React.ReactNode;
    socials: string;
    extra?: React.ReactNode;
  };
  const teamData: {
    team: TeamTab;
    alejandro: MemberTab;
    libny: MemberTab;
    stasja: MemberTab;
    christoph: MemberTab;
  } = {
    team: {
      socials: "<a href=\"mailto:info@upskiller.xyz\" class=\"text-primary-600 underline\">info@upskiller.xyz</a> | <a href=\"https://www.linkedin.com/company/upskiller-xyz/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary-600 underline\">LinkedIn</a>"
    },
    alejandro: {
      content:  (
        <div className="mb-8">
          <div className="font-light">Building performance specialist with 10+ years at Swedish architectural firms and research collaborations with Swedish universities.</div>
        </div>
      ),
      extra: (
        <ListBoldKeyLightValue
          graduatedAs="Architect with master in environmental building design."
          teachingExperience="Lund?"
          workExperience="BAU, White Arkitekter."
          favLLM="GPT."
          fact="It is not Libny's brother."
        />
      ),
      socials: "<a href=\"mailto:alejandro.pacheco@upskiller.xyz\" class=\"text-primary-600 underline\">alejandro.pacheco@upskiller.xyz</a> | <a href=\"https://www.linkedin.com/in/alejandro-pacheco-diéguez-06b1b238/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary-600 underline\">LinkedIn</a>"
    },
    libny: {
      content:  (
        <div className="mb-8">
          <div className="font-light">Computational design expert with teaching experience at architecture schools across Europe and China.</div>
        </div>
      ),
      extra: (
        <ListBoldKeyLightValue
          graduatedAs="Architect with master in Advanced Computation for Architecture & Design."
          teachingExperience="Universidad de los Andes, Tsinghua University, IAAC."
          workExperience="Plasma Studio, Crossboundaries, White Arkitekter."
          favLLM="Claude."
          fact="It is not Alejandro's brother."
        />
      ),
      socials: "<a href=\"mailto:libny.pacheco@upskiller.xyz\" class=\"text-primary-600 underline\">libny.pacheco@upskiller.xyz</a> | <a href=\"https://www.linkedin.com/in/libny-pacheco-6548b95/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary-600 underline\">LinkedIn</a>"
    },
    stasja: {
      content:  (
        <div className="mb-8">
          <div className="font-light">Our tech lead, and machine learning engineer at H&M, lecturer at IAAC Barcelona.</div>
        </div>
      ),
      extra: (
        <ListBoldKeyLightValue
          graduatedAs="Architect with master in Data Science."
          teachingExperience="Umeå University, IAAC."
          workExperience="ELSE Corp, Rave Review, H&M."
          favLLM="Claude?."
          fact="Enjoys trail running."
        />
      ),
      socials: "<a href=\"mailto:stasja.fedorova@upskiller.xyz\" class=\"text-primary-600 underline\">stasja.fedorova@upskiller.xyz</a> | <a href=\"https://www.linkedin.com/in/stasja-fedorova/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary-600 underline\">LinkedIn</a>"
    },
    christoph: {
      content:  (
        <div className="mb-8">
          <div className="font-light">BIM specialist with 10+ years of experience working in Austria and Germany.</div>
        </div>
      ),
      extra: (
        <ListBoldKeyLightValue
          graduatedAs="Civil Engineer with master in Advanced Computation for Architecture & Design."
          teachingExperience="Munich University of Applied Sciences."
          workExperience="Jaeger Ausbau Gruppe, PORR."
          favLLM="Claude?."
          fact="Experienced drone pilot."
        />
      ),
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

  return (
    <section id="team" className="section-container bg-white">
      <div className="section-content">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-dark">
            Our <span className="text-primary-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate professionals behind Upskiller's innovative approach to 
            sustainable building design and environmental optimization.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl overflow-hidden">
          {/* Team Photo - Always visible */}
          <div className="h-96 bg-gradient-to-r from-orange-200 to-orange-300 relative">
            {/* Placeholder for team photo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-full h-full bg-gradient-to-r from-orange-400 to-red-400 opacity-30 absolute inset-0"></div>
                <div className="relative z-10 flex space-x-8 items-center justify-center h-full">
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">L</span>
                  </div>
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                {/* Title removed as requested */}
                {activeTab === 'team'
                  ? teamParagraphs.map((para, idx) => (
                      <p key={idx} className="text-lg text-gray-700 leading-relaxed mb-4">
                        {para}
                      </p>
                    ))
                  : (() => {
                      const member = teamData[activeTab as keyof typeof teamData] as MemberTab;
                      return <>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">{member.content}</p>
                        {member.extra && (
                          <div className="mb-2">{member.extra}</div>
                        )}
                      </>;
                    })()
                }
                <div
                  className="text-sm text-gray-600 whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: teamData[activeTab as keyof typeof teamData].socials }}
                />
              </div>

              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="font-heading text-2xl font-bold text-dark mb-4">
            Want to Join Our Mission?
          </h3>
          <p className="text-gray-600 mb-6">
            We're always looking for talented individuals who share our passion for sustainable design.
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;