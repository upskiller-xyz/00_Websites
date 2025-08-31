import React from 'react';
import ComponentGrid from '../../shared-components/ComponentGrid';
import { GridType } from '../../../constants/grid-types.enums';
import HeroTextContainer from '../../shared-subcomponents/HeroTextContainer';

interface HeroContentProps {
  textContainerRef: React.RefObject<HTMLDivElement>;
  visibleElements: number[];
}

const HeroContent: React.FC<HeroContentProps> = ({ textContainerRef, visibleElements }) => (
  <div className="section-content relative z-10">
    <ComponentGrid gridType={GridType.HERO}>
      <HeroTextContainer 
        textContainerRef={textContainerRef}
        visibleElements={visibleElements}
      />
    </ComponentGrid>
  </div>
);

export default HeroContent;