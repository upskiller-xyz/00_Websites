export enum MemberDetailType {
  GRADUATED_AS = 'graduatedAs',
  TEACHING_EXPERIENCE = 'teachingExperience', 
  WORK_EXPERIENCE = 'workExperience',
  FAV_LLM = 'favLLM',
  FACT = 'fact'
}

export const MEMBER_DETAIL_LABELS: Record<MemberDetailType, string> = {
  [MemberDetailType.GRADUATED_AS]: 'GRADUATED AS:',
  [MemberDetailType.TEACHING_EXPERIENCE]: 'TEACHING EXPERIENCE:',
  [MemberDetailType.WORK_EXPERIENCE]: 'WORK EXPERIENCE:',
  [MemberDetailType.FAV_LLM]: 'FAV LLM:',
  [MemberDetailType.FACT]: 'FACT:'
};