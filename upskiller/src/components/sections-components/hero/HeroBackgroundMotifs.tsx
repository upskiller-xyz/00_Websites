import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import BackgroundMotif from './BackgroundMotif';

export interface HeroBackgroundMotifsRef {
  staticMotifRef: React.RefObject<HTMLDivElement>;
  movingMotifRef: React.RefObject<HTMLDivElement>;
}

const HeroBackgroundMotifs = forwardRef<HeroBackgroundMotifsRef>((props, ref) => {
  const staticMotifRef = useRef<HTMLDivElement>(null);
  const movingMotifRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    staticMotifRef,
    movingMotifRef
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <BackgroundMotif motifRef={staticMotifRef} />
      <BackgroundMotif motifRef={movingMotifRef} />
    </div>
  );
});

HeroBackgroundMotifs.displayName = 'HeroBackgroundMotifs';

export default HeroBackgroundMotifs;