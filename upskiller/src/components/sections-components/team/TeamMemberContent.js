import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import ListBoldKeyLightValue from '../../../../../shared/components/ListBoldKeyLightValue';
const TeamMemberContent = ({ memberInfo }) => {
    const { bio, graduatedAs, teachingExperience, workExperience, favLLM, fact } = memberInfo;
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "team-member-description", children: _jsx("div", { className: "team-member-bio", children: bio }) }), _jsx("div", { className: "mb-2", children: _jsx(ListBoldKeyLightValue, { details: {
                        graduatedAs,
                        teachingExperience,
                        workExperience,
                        favLLM,
                        fact
                    } }) })] }));
};
export default TeamMemberContent;
