// src/App.tsx
import React from "react";
import Navigation from "./components/Navigation";
import { 
  HeroSection, 
  SupportSection, 
  TeamSection, 
  ProductsSection, 
  ResourcesSection 
} from "./components/sections";

export default function App() {
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
    </div>
  );
}
