import React from 'react';
import ComponentGrid from '../../shared-components/ComponentGrid';
import { GridType } from '../../../constants/grid-types.enums';
import HeroTextGroup from '../../shared-subcomponents/HeroTextGroup';

interface HeroContentProps {
  textContainerRef: React.RefObject<HTMLDivElement>;
  visibleElements: number[];
}

const HeroContent: React.FC<HeroContentProps> = ({ textContainerRef, visibleElements }) => (
  <div className="section-content relative z-10">
    <ComponentGrid gridType={GridType.HERO}>
      <div ref={textContainerRef} className="hero-text-container">
        <HeroTextGroup visibleElements={visibleElements} />
      </div>
    </ComponentGrid>
  </div>
);

export default HeroContent;