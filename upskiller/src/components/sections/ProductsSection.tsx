// src/components/sections/ProductsSection.tsx
import React from 'react';

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
      name: "SOL",
      subtitle: "Graphs4Co2",
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

  const getColorClasses = (color: string, status: string) => {
    const isUpcoming = status === 'upcoming';
    
    switch (color) {
      case 'primary':
        return {
          bg: isUpcoming ? 'bg-gray-400' : 'bg-primary-500',
          iconBg: isUpcoming ? 'bg-gray-100' : 'bg-primary-100',
          iconText: isUpcoming ? 'text-dark' : 'text-primary-600',
          badge: isUpcoming ? 'bg-gray-50 text-dark' : 'bg-primary-50 text-primary-700',
          button: isUpcoming ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-500 hover:bg-primary-600'
        };
      case 'accent':
        return {
          bg: isUpcoming ? 'bg-gray-400' : 'bg-accent',
          iconBg: isUpcoming ? 'bg-gray-100' : 'bg-green-100',
          iconText: isUpcoming ? 'text-dark' : 'text-accent',
          badge: isUpcoming ? 'bg-gray-50 text-dark' : 'bg-green-50 text-green-700',
          button: isUpcoming ? 'bg-gray-400 cursor-not-allowed' : 'bg-accent hover:bg-green-600'
        };
      default:
        return {
          bg: 'bg-gray-500',
          iconBg: 'bg-gray-100',
          iconText: 'text-dark',
          badge: 'bg-gray-50 text-dark',
          button: 'bg-gray-500'
        };
    }
  };

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
            const colors = getColorClasses(product.color, product.status);
            const isUpcoming = product.status === 'upcoming';
            
            return (
              <div 
                key={index}
                className={`p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 ${isUpcoming ? 'opacity-90' : ''}`}
                style={{ backgroundColor: '#00d67a' }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className={`w-16 h-16 ${colors.iconBg} rounded-xl flex items-center justify-center ${colors.iconText}`}>
                      {product.icon}
                    </div>
                  </div>
                  {/* Product Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-heading text-3xl font-bold text-dark">
                        {product.name}
                      </h3>
                      <p className="text-lg text-dark font-medium">
                        {product.subtitle}
                      </p>
                    </div>
                    <p className="text-dark leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-dark">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${isUpcoming ? 'bg-gray-400' : colors.bg}`}></div>
                          <span className="text-sm text-dark">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  {!isUpcoming && (
                    <button 
                      className={`w-full text-dark font-medium py-3 transition-colors duration-200`}
                      style={{ backgroundColor: '#00ff66', borderRadius: 0 }}
                    >
                      Learn More
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

                {/* Add custom CSS for LUZ hover effect */}
                <style>{`
                  .luz-hover-move {
                    transition: box-shadow 0.3s, transform 0.3s;
                  }
                  .luz-hover-move:hover {
                    box-shadow: 0 10px 24px 0 rgba(0,0,0,0.10), 0 1.5px 4px 0 rgba(0,0,0,0.10);
                    transform: translate(15px, -15px);
                    z-index: 2;
                  }
                `}</style>
export default ProductsSection;