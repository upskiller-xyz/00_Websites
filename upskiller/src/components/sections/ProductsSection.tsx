// src/components/sections/ProductsSection.tsx
import React from 'react';
import { InfoCard } from '../../../../shared/components/InfoCard';

const ProductsSection: React.FC = () => {
  const products = [
    {
      name: "LUZ",
      subtitle: "Daylight Factor",
      description: "Advanced daylight analysis tool that helps architects and engineers optimize natural lighting in building designs.",
      status: "available",
      features: ["Real-time calculations", "3D visualization", "Building code compliance", "Export capabilities"],
      color: "primary",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      name: "COL",
      subtitle: "LCA Assistant",
      description: "Comprehensive carbon footprint analysis platform for sustainable building lifecycle assessment.",
      status: "upcoming",
      features: ["CO2 tracking", "Material analysis", "Lifecycle assessment", "Sustainability reports"],
      color: "accent",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];


  return (
    <section id="products" className="section-container" style={{ backgroundColor: '#99efca' }}>
      <div className="section-content">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-dark">
            Our Products
          </h2>
          <p className="text-xl text-dark max-w-3xl mx-auto">
            Cutting-edge tools designed to revolutionize sustainable building design 
            and environmental optimization for architects and engineers.
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
                description={product.description}
                items={product.features}
                itemsLabel="Key Features:"
                icon={product.icon}
                buttonText={isUpcoming ? 'Coming Soon' : 'Learn More'}
                buttonDisabled={isUpcoming}
                onClick={product.name === 'LUZ' ? () => window.open('https://github.com/upskiller-xyz/DaylightFactor', '_blank') : undefined}
                onButtonClick={() => {}}
                className={`${isUpcoming ? 'opacity-90' : ''} ${product.name === 'LUZ' ? 'hover:transform hover:translate-x-2 hover:-translate-y-2 cursor-pointer' : ''}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductsSection;