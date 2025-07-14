// src/App.tsx
import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/sections/HeroSection";
import TeamSection from "./components/sections/TeamSection";
import ProductsSection from "./components/sections/ProductsSection";
import ResourcesSection from "./components/sections/ResourcesSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TeamSection />
        <ProductsSection />
        <ResourcesSection />
      </main>
    </div>
  );
}
