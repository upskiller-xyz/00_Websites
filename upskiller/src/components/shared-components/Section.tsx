import React from 'react';

interface SectionProps {
  id: string;
  theme: 'primary' | 'secondary' | 'support';
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, theme, children }) => (
  <section id={id} className={`section-container section-${theme}`}>
    <div className="section-content">
      {children}
    </div>
  </section>
);

export default Section;