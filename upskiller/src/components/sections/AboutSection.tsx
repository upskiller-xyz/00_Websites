// src/components/sections/AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container bg-white">
      <div className="section-content">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-dark">
                About <span className="text-primary-600">Upskiller</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that continuous learning is the key to success in today's rapidly evolving world. 
                Our platform connects ambitious professionals with industry experts to provide world-class education.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-dark">Fast Learning</h3>
                <p className="text-gray-600">Accelerated courses designed for busy professionals</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-dark">Certified</h3>
                <p className="text-gray-600">Industry-recognized certifications upon completion</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-dark">Expert Mentors</h3>
                <p className="text-gray-600">Learn from industry leaders and practitioners</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-dark">Affordable</h3>
                <p className="text-gray-600">Premium education at accessible prices</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="font-heading text-4xl font-bold text-dark">2018</div>
                  <div className="text-gray-600">Founded with a mission</div>
                </div>
                
                <div className="h-px bg-gray-200"></div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Students Trained</span>
                    <span className="font-heading font-bold text-dark">10,000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Countries Reached</span>
                    <span className="font-heading font-bold text-dark">25+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Success Stories</span>
                    <span className="font-heading font-bold text-dark">1,500+</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;