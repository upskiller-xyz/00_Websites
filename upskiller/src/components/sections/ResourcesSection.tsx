// src/components/sections/ResourcesSection.tsx
import React from 'react';
import { InfoCard } from '../../../../shared/components/InfoCard';
import { ContactButton } from '../../../../shared/components/ContactButton';
import { NewsCard } from '../../../../shared/components/NewsCard';

const ResourcesSection: React.FC = () => {
  const articles = [
    {
      title: "Articles",
      description: "Deep dives into technical topics, best practices, and thought leadership in environmental optimization.",
      items: [
        "Technical tutorials and guides",
        "Case studies and examples",
        "Research findings",
        "Expert opinions and analysis"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      color: "purple",
      hasButton: true
    }
  ];

  const contactMethods = [
    {
      type: "Email",
      value: "info@upskiller.xyz",
      link: "mailto:info@upskiller.xyz",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      type: "GitHub",
      value: "github.com/upskiller-xyz",
      link: "https://github.com/upskiller-xyz",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  const socialLinks = [
    {
      name: "Substack", 
      url: "http://upskiller.substack.com/",
      icon: "https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/substack.png"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/upskiller-xyz/",
      icon: "https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/linkedin-dark.svg"
    },
    {
      name: "Instagram", 
      url: "https://www.instagram.com/upskiller.xyz",
      icon: "https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/instagram-dark.svg"
    }
  ];

  return (
    <section id="resources" className="section-container" style={{ backgroundColor: '#180057' }}>
      <div className="section-content">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold" style={{ color: '#f4fffa' }}>
            Resources
          </h2>
        </div>

        {/* Resources Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <NewsCard className="transition-all duration-300" />
          {articles.map((article, index) => (
            <InfoCard
              key={index}
              title={article.title}
              description={article.description}
              items={article.items}
              itemsLabel="What you'll find:"
              buttonText={article.hasButton ? 'Visit our Substack' : undefined}
              showButton={article.hasButton}
              onButtonClick={() => window.open('https://upskillerxyz.substack.com', '_blank')}
              className="transition-all duration-300"
            />
          ))}
        </div>

        {/* Contact Section */}
        <div className="p-8 mb-16" style={{ backgroundColor: '#00d67a' }}>
          <div className="space-y-6">
            <h3 className="font-heading text-3xl font-bold text-dark">Contact Us</h3>           
            <div className="grid grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <ContactButton
                  key={index}
                  type={method.type}
                  value={method.value}
                  link={method.link}
                  icon={method.icon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Social Links & Follow Us */}
        <div className="text-center space-y-6">
          <h3 className="font-heading text-2xl font-bold font-light" style={{ color: '#4e378a' }}>Follow Us</h3>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center transition-opacity duration-200 hover:opacity-80 hover:scale-110 transform transition-transform"
                title={`Follow us on ${social.name}`}
              >
                <img 
                  src={social.icon} 
                  alt={`${social.name} icon`}
                  className="w-10 h-10 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(30%) sepia(27%) saturate(1752%) hue-rotate(237deg) brightness(93%) contrast(86%)' }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 BIMTech Innovations AB. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Legal Info</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;