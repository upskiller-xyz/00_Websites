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
    <section id="team" className="section-container" style={{ backgroundColor: '#180057' }}>
      <div className="section-content">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold" style={{ color: '#f4fffa' }}>
            Our Team
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="overflow-hidden" style={{ backgroundColor: '#00d67a' }}>
          {/* Team Photo - Always visible */}
          <div className="h-[500px] relative overflow-hidden">
            <img 
              src="/images/20250315_Stockholm (5).jpg" 
              alt="Upskiller Team" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Area */}
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                {/* Title removed as requested */}
                {activeTab === 'team'
                  ? teamParagraphs.map((para, idx) => (
                      <p key={idx} className="text-lg text-dark leading-relaxed mb-4">
                        {para}
                      </p>
                    ))
                  : (() => {
                      const member = teamData[activeTab as keyof typeof teamData] as MemberTab;
                      return <>
                        <p className="text-lg text-dark leading-relaxed mb-4">{member.content}</p>
                        {member.extra && (
                          <div className="mb-2">{member.extra}</div>
                        )}
                      </>;
                    })()
                }
                <div
                  className="text-sm text-dark whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: teamData[activeTab as keyof typeof teamData].socials }}
                />
              </div>

            </div>
          </div>
        </div>

        {/* Tab Navigation - Stretching to side edges of main container */}
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 font-medium transition-all duration-200 cursor-pointer`}
              style={{
                backgroundColor: activeTab === tab.id ? '#00d67a' : '#99efca',
                color: '#000000'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;