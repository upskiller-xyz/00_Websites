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
                Tools you trust. Insights you depend on.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We develop open, accessible, indispensable software that simplifies complexity, turns design information into meaningful insights and empowers AEC professionals to work efficiently.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                We see a future where the community of AEC professionals seamlessly access information and knowledge, truly understands them, and use them to build a better world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;