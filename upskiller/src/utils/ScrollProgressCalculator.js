import { AnimationProgressThreshold } from '../constants/enums';
export class ScrollProgressCalculator {
    static visibilityConfigs = new Map([
        [0, { threshold: AnimationProgressThreshold.HEADING, elementIndex: 0, description: 'Heading' }],
        [1, { threshold: AnimationProgressThreshold.FIRST_PARAGRAPH, elementIndex: 1, description: 'First paragraph' }],
        [2, { threshold: AnimationProgressThreshold.SECOND_PARAGRAPH, elementIndex: 2, description: 'Second paragraph' }],
        [3, { threshold: AnimationProgressThreshold.THIRD_PARAGRAPH, elementIndex: 3, description: 'Third paragraph' }]
    ]);
    static calculateStickyProgress(containerRect, windowHeight) {
        if (containerRect.top > 0 || containerRect.bottom <= windowHeight) {
            return 0;
        }
        const scrollProgress = Math.abs(containerRect.top);
        const totalScrollDistance = containerRect.height - windowHeight;
        return Math.min(1, scrollProgress / totalScrollDistance);
    }
    static getVisibleElements(progress) {
        const visibleElements = [];
        this.visibilityConfigs.forEach((config) => {
            if (progress > config.threshold) {
                visibleElements.push(config.elementIndex);
            }
        });
        return visibleElements;
    }
    static isInStickyZone(containerRect, windowHeight) {
        return containerRect.top <= 0 && containerRect.bottom > windowHeight;
    }
}
