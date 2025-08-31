import React from 'react';
import SharedImage from '../../../../../shared/components/SharedImage';
import { ImageSource, IMAGE_SOURCES_MAP } from '../../../constants/image-sources.enums';

interface BackgroundMotifProps {
  motifRef: React.RefObject<HTMLDivElement>;
}

const BackgroundMotif: React.FC<BackgroundMotifProps> = ({ motifRef }) => {
  const motifData = IMAGE_SOURCES_MAP[ImageSource.HERO_MOTIF];
  
  return (
    <div
      ref={motifRef}
      className="hero-background-motif brand-color-filter"
    >
      <SharedImage 
        src={motifData.src}
        alt={motifData.alt}
        className="hero-motif-image"
      />
    </div>
  );
};

export default BackgroundMotif;