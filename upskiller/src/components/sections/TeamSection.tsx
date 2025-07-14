// src/components/sections/TeamSection.tsx
import React from 'react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Stasja",
      role: "Co-Founder & CEO",
      bio: "Visionary leader with expertise in sustainable architecture and daylight optimization.",
      image: "/images/team/stasja.jpg", // Placeholder - replace with actual images
      skills: ["Architecture", "Leadership", "Sustainability", "Product Strategy"]
    },
    {
      name: "Ale", 
      role: "Co-Founder & CTO",
      bio: "Technical architect specializing in building performance simulation and software development.",
      image: "/images/team/ale.jpg",
      skills: ["Software Development", "Building Physics", "Algorithm Design", "Technical Leadership"]
    },
    {
      name: "Chris",
      role: "Senior Developer",
      bio: "Full-stack developer focused on creating intuitive tools for environmental analysis.",
      image: "/images/team/chris.jpg", 
      skills: ["Full-Stack Development", "Data Visualization", "UI/UX Design", "API Development"]
    },
    {
      name: "Libny",
      role: "Research Engineer", 
      bio: "Environmental engineer bringing scientific rigor to our product development process.",
      image: "/images/team/libny.jpg",
      skills: ["Environmental Engineering", "Research", "Data Analysis", "Scientific Computing"]
    }
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

        {/* Team Story */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="font-heading text-3xl font-bold text-dark">Our Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded by experts in architecture and engineering, our team combines decades of experience 
              in sustainable design with cutting-edge technology. We're passionate about creating tools 
              that make environmental optimization accessible to designers and engineers worldwide.
            </p>
            <div className="text-sm text-gray-600">
              Working in collaboration with leading organizations including Almi, Belysning Stiftelsen, 
              Formas, Scaleway, White, Link, and Lund University.
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center space-y-4">
                {/* Profile Image Placeholder */}
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600">
                    {member.name.charAt(0)}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-bold text-dark">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-dark">Expertise</h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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