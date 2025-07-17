import React from "react";

const SupportSection: React.FC = () => {
  return (
    <section className="bg-[#99efca] pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-dark mb-8">
            Collaborating with:
          </h2>
        </div>
      </div>
      
      <div className="bg-[#00d67a] py-8 transition-transform duration-300 hover:translate-x-[30px] hover:-translate-y-[30px]">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <img 
            src="/images/almi-dark.svg" 
            alt="Almi"
            className="h-16 md:h-20 opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="/images/belysningsstiftelsen-dark.svg" 
            alt="Belysningsstiftelsen"
            className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="/images/formas-dark.svg" 
            alt="Formas"
            className="h-16 md:h-20 opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="/images/scaleway-dark.svg" 
            alt="Scaleway"
            className="h-16 md:h-20 opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="/images/speckle-dark.svg" 
            alt="Speckle"
            className="h-16 md:h-20 opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="/images/link-dark.svg" 
            alt="Link"
            className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="/images/white-dark.svg" 
            alt="White"
            className="h-16 md:h-20 opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;