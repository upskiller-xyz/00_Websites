// src/components/sections/HeroSection.tsx
import React from 'react';
import { SharedButton } from '../../../../shared/components/SharedButton';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="section-container bg-gradient-to-br from-primary-50 to-white">
      <div className="section-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-dark leading-tight">
                Unlock Your 
                <span className="text-primary-600"> Potential</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your skills and accelerate your career with our innovative learning platform. 
                Join thousands of professionals who have already upskilled with us.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <SharedButton>Get Started Today</SharedButton>
              <button className="px-6 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200">
                Learn More
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-dark">10K+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-dark">50+</div>
                <div className="text-gray-600">Courses</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-dark">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-primary-500 to-accent rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="font-heading text-2xl font-bold mb-4">Ready to Start Learning?</h3>
              <p className="text-primary-100 mb-6">
                Join our community and get access to exclusive content, mentorship, and career opportunities.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-primary-100">Join 10,000+ learners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;