// src/components/pages/HomePage.tsx
import React from "react";
import Navigation from "../Navigation";
import { 
  HeroSection, 
  SupportSection, 
  TeamSection, 
  ProductsSection, 
  ResourcesSection 
} from "../sections";
import Footer from "../sections-components/footer/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SupportSection />
        <TeamSection />
        <ProductsSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;