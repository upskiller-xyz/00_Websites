import { AnimationProgressThreshold, type VisibilityConfig } from '../constants/enums';

export class ScrollProgressCalculator {
  private static readonly visibilityConfigs = new Map<number, VisibilityConfig>([
    [0, { threshold: AnimationProgressThreshold.HEADING, elementIndex: 0, description: 'Heading' }],
    [1, { threshold: AnimationProgressThreshold.FIRST_PARAGRAPH, elementIndex: 1, description: 'First paragraph' }],
    [2, { threshold: AnimationProgressThreshold.SECOND_PARAGRAPH, elementIndex: 2, description: 'Second paragraph' }],
    [3, { threshold: AnimationProgressThreshold.THIRD_PARAGRAPH, elementIndex: 3, description: 'Third paragraph' }]
  ]);

  static calculateStickyProgress(
    containerRect: DOMRect, 
    windowHeight: number
  ): number {
    if (containerRect.top > 0 || containerRect.bottom <= windowHeight) {
      return 0;
    }
    
    const scrollProgress = Math.abs(containerRect.top);
    const totalScrollDistance = containerRect.height - windowHeight;
    return Math.min(1, scrollProgress / totalScrollDistance);
  }

  static getVisibleElements(progress: number): number[] {
    const visibleElements: number[] = [];
    
    this.visibilityConfigs.forEach((config) => {
      if (progress > config.threshold) {
        visibleElements.push(config.elementIndex);
      }
    });
    
    return visibleElements;
  }

  static isInStickyZone(containerRect: DOMRect, windowHeight: number): boolean {
    return containerRect.top <= 0 && containerRect.bottom > windowHeight;
  }
}