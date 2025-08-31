import { jsx as _jsx } from "react/jsx-runtime";
import TeamStoryContent from './TeamStoryContent';
import TeamMemberContent from './TeamMemberContent';
const TeamContentRenderer = ({ member }) => {
    if (member.type === 'story') {
        return _jsx(TeamStoryContent, {});
    }
    if (member.type === 'member') {
        return (_jsx(TeamMemberContent, { memberInfo: {
                bio: member.bio || '',
                graduatedAs: member.graduatedAs || '',
                teachingExperience: member.teachingExperience || '',
                workExperience: member.workExperience || '',
                favLLM: member.favLLM || '',
                fact: member.fact || ''
            } }));
    }
    return null;
};
export default TeamContentRenderer;
