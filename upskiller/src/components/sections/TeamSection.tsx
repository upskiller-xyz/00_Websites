// src/components/sections/TeamSection.tsx
import React, { useState } from 'react';

const TeamSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('team');

  const teamData = {
    team: {
      title: "Our Story",
      content: "Founded by experts in architecture and engineering, our team combines decades of experience in sustainable design with cutting-edge technology. We're passionate about creating tools that make environmental optimization accessible to designers and engineers worldwide.",
      subtitle: "Working in collaboration with leading organizations including Almi, Belysning Stiftelsen, Formas, Scaleway, White, Link, and Lund University."
    },
    alejandro: {
      title: "Alejandro",
      content: "Building performance specialist with 10+ years at Swedish architectural firms and research collaborations with Swedish universities.",
      subtitle: "alejandro.pacheco@upskiller.xyz\nLinkedIn"
    },
    libny: {
      title: "Libny",
      content: "Computational design expert with teaching experience at architecture schools across Europe and China.",
      subtitle: "libny.pacheco@upskiller.xyz\nLinkedIn"
    },
    stasja: {
      title: "Stasja",
      content: "Our tech lead, and machine learning engineer at IKEM, lecturer at IAAC Barcelona.",
      subtitle: "stasja.kocovic@upskiller.xyz\nLinkedIn"
    },
    christoph: {
      title: "Christoph",
      content: "BIM specialist with 10+ years of experience working in Austria and Germany.",
      subtitle: "christoph.bachmann@upskiller.xyz\nLinkedIn"
    }
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
                <h3 className="font-heading text-3xl font-bold text-dark mb-4">
                  {teamData[activeTab as keyof typeof teamData].title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {teamData[activeTab as keyof typeof teamData].content}
                </p>
                <div className="text-sm text-gray-600 whitespace-pre-line">
                  {teamData[activeTab as keyof typeof teamData].subtitle}
                </div>
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