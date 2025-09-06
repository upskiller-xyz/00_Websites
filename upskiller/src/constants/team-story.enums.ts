export enum TeamStoryType {
  TEXT = 'text',
  MIXED = 'mixed'
}

export interface TeamStoryLink {
  text: string;
  href: string;
}

export interface TeamStoryParagraph {
  type: TeamStoryType;
  content: string;
  links?: TeamStoryLink[];
  continuation?: string;
  moreLinks?: TeamStoryLink[];
  continuation2?: string;
  finalLinks?: TeamStoryLink[];
  end?: string;
}

export interface TeamStoryData {
  story: TeamStoryParagraph[];
}