// src/components/sections/ProductsSection.tsx
import React from 'react';
import { InfoCard } from '../../../../shared/components/InfoCard';

const ProductsSection: React.FC = () => {
  const products = [
    {
      name: "DAYLIGHT FACTOR",
      problem: "Daylight simulation is slow and incures costs when done late in the design process.",
      description: "Fast daylight analysis tool that helps architects and engineers optimize natural lighting in building designs.",
      status: "available",
      features: ["Real-time calculations", "3D visualization", "Building code compliance", "Export capabilities"],
      color: "primary",
      icon: (
        <img 
          src="/images/daylight.gif" 
          alt="Daylight analysis animation" 
          className="w-full h-auto object-contain"
        />
      )
    },
    {
      name: "LCA ASSISTANT",
      problem: "Carbon footprint analysis is complex and requires specifc knowledge. It will become mandatory in the future, but the accessibility barrier is high.",
      description: "Accessible carbon footprint analysis tool that helps assess building performance.",
      status: "upcoming",
      features: ["CO2 tracking", "Material analysis", "Lifecycle assessment", "Sustainability reports"],
      color: "accent",
      icon: (
        <div className="w-full flex justify-center">
          <svg className="h-80 w-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      )
    }
  ];


  return (
    <section id="products" className="section-container" style={{ backgroundColor: '#99efca' }}>
      <div className="section-content">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-dark">
            We're working on
          </h2>
          <p className="text-xl text-dark max-w-3xl mx-auto">
            These are some of the tools developed as a solution to the problems we're studying.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.map((product, index) => {
            const isUpcoming = product.status === 'upcoming';
            
            return (
              <InfoCard
                key={index}
                title={product.name}
                subtitle={product.subtitle}
                problem={product.problem}
                description={product.description}
                items={product.features}
                itemsLabel="Key Features:"
                descriptionLabel="Solution"
                icon={product.icon}
                buttonText={isUpcoming ? 'Coming Soon' : 'Try Now'}
                buttonDisabled={isUpcoming}
                onClick={product.name === 'DAYLIGHT FACTOR' ? () => window.open('https://github.com/upskiller-xyz/Lux', '_blank') : undefined}
                onButtonClick={product.name === 'DAYLIGHT FACTOR' ? () => window.open('https://github.com/upskiller-xyz/Lux', '_blank') : () => {}}
                className={`${isUpcoming ? 'opacity-90' : ''} ${product.name === 'DAYLIGHT FACTOR' ? 'cursor-pointer' : ''}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductsSection;