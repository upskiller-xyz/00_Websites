export interface TeamMember {
  id: string;
  name: string;
  type: 'story' | 'member';
  bio?: string;
  graduatedAs?: string;
  teachingExperience?: string;
  workExperience?: string;
  favLLM?: string;
  fact?: string;
  socials: string;
}

export interface TeamTab {
  id: string;
  label: string;
}