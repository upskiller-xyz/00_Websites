// src/components/Navigation.tsx
import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'team', 'products', 'resources'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'team', label: 'Team' },
    { id: 'products', label: 'Products' },
    { id: 'resources', label: 'Resources' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - always floating */}
          <button
            onClick={() => scrollToSection('home')}
            className="transition-opacity duration-200 hover:opacity-80"
          >
            <img
              src="/images/upskiller_logo_RGB.svg"
              alt="Upskiller"
              className="h-8 w-auto"
            />
          </button>
          
          {/* Middle navigation with white background when scrolled */}
          <div className={`hidden md:flex space-x-8 px-6 py-2 transition-all duration-300 ${
            isScrolled ? 'bg-white/20 backdrop-blur-sm' : 'bg-transparent'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'font-medium'
                    : 'hover:opacity-80'
                }`}
                style={{ color: '#EDF4F1' }}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Green CTA button - always visible */}
          <button
            onClick={() => scrollToSection('resources')}
            className="px-4 py-2 text-black font-medium transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#00FF66' }}
          >
            Contact us
          </button>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-primary-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;