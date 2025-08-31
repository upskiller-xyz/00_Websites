export enum GridType {
  SECTION = 'section',
  HERO = 'hero', 
  CUSTOM = 'custom'
}

export const GRID_CLASS_MAP: Record<GridType, (columns?: string) => string> = {
  [GridType.SECTION]: (columns = '1col') => `section-grid-${columns}`,
  [GridType.HERO]: () => 'hero-content-grid',
  [GridType.CUSTOM]: (columns = '1col') => columns ? `grid-${columns}` : ''
};