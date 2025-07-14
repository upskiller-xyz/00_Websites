// src/components/sections/ResourcesSection.tsx
import React from 'react';

const ResourcesSection: React.FC = () => {
  const resources = [
    {
      title: "News",
      description: "Stay updated with the latest developments in sustainable building design and our product announcements.",
      items: [
        "Product releases and updates",
        "Industry insights and trends", 
        "Company milestones",
        "Partnership announcements"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Blog",
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
      color: "purple"
    }
  ];

  const contactMethods = [
    {
      type: "Email",
      value: "hello@upskiller.com",
      link: "mailto:hello@upskiller.com",
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
      name: "LinkedIn",
      url: "https://linkedin.com/company/upskiller",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Instagram", 
      url: "https://instagram.com/upskiller",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@upskiller",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="resources" className="section-container bg-dark text-white">
      <div className="section-content">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold">
            <span className="text-primary-400">Resources</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our knowledge base, stay updated with industry news, and connect with our team 
            for support and collaboration opportunities.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${resource.color === 'blue' ? 'bg-blue-500/20' : 'bg-purple-500/20'} rounded-lg flex items-center justify-center`}>
                    <div className={resource.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}>
                      {resource.icon}
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl font-bold">{resource.title}</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-white">What you'll find:</h4>
                  <ul className="space-y-1">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2 text-gray-300">
                        <div className={`w-2 h-2 rounded-full ${resource.color === 'blue' ? 'bg-blue-400' : 'bg-purple-400'}`}></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`w-full ${resource.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'} text-white font-medium py-3 rounded-lg transition-colors duration-200`}>
                  Explore {resource.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="font-heading text-3xl font-bold">Contact Us</h3>
              <p className="text-gray-300 leading-relaxed">
                Have questions about our products? Need technical support? Want to discuss 
                a potential collaboration? We'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a 
                    key={index}
                    href={method.link}
                    className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400">
                      {method.icon}
                    </div>
                    <div>
                      <div className="font-medium text-white">{method.type}</div>
                      <div className="text-gray-300 text-sm">{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Contact Form */}
            <div className="space-y-6">
              <h4 className="font-heading text-xl font-bold">Send us a message</h4>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                />
                <textarea 
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                ></textarea>
                <button className="w-full bg-primary-600 text-white font-medium py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Links & Follow Us */}
        <div className="text-center space-y-6">
          <h3 className="font-heading text-2xl font-bold">Follow Us</h3>
          <p className="text-gray-300">Stay connected for updates and insights</p>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2024 Upskiller. All rights reserved.
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