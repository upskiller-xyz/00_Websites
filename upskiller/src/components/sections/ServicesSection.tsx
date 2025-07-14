// src/components/sections/ServicesSection.tsx
import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Master modern web technologies including React, Node.js, and cloud deployment.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: ["Frontend & Backend", "Database Design", "API Development", "Cloud Deployment"],
      color: "primary"
    },
    {
      title: "Data Science",
      description: "Learn to analyze data, build machine learning models, and drive business decisions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ["Python & R", "Machine Learning", "Data Visualization", "Statistical Analysis"],
      color: "accent"
    },
    {
      title: "Digital Marketing",
      description: "Grow your business with modern digital marketing strategies and tools.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      features: ["SEO & SEM", "Social Media", "Content Marketing", "Analytics"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-500',
          iconBg: 'bg-primary-100',
          iconText: 'text-primary-600',
          badge: 'bg-primary-50 text-primary-700'
        };
      case 'accent':
        return {
          bg: 'bg-accent',
          iconBg: 'bg-green-100',
          iconText: 'text-accent',
          badge: 'bg-green-50 text-green-700'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500',
          iconBg: 'bg-purple-100',
          iconText: 'text-purple-600',
          badge: 'bg-purple-50 text-purple-700'
        };
      default:
        return {
          bg: 'bg-gray-500',
          iconBg: 'bg-gray-100',
          iconText: 'text-gray-600',
          badge: 'bg-gray-50 text-gray-700'
        };
    }
  };

  return (
    <section id="services" className="section-container bg-gray-50">
      <div className="section-content">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-dark">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to help you master 
            the most in-demand skills in today's job market.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="space-y-6">
                  <div className={`w-16 h-16 ${colors.iconBg} rounded-xl flex items-center justify-center ${colors.iconText}`}>
                    {service.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-heading text-2xl font-bold text-dark">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-dark">What you'll learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className={`px-3 py-1 ${colors.badge} text-sm font-medium rounded-full`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className={`w-full ${colors.bg} text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity duration-200`}>
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h3 className="font-heading text-2xl font-bold text-dark mb-4">
              Not sure which path is right for you?
            </h3>
            <p className="text-gray-600 mb-6">
              Take our skills assessment to get personalized course recommendations.
            </p>
            <button className="bg-dark text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
              Take Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;