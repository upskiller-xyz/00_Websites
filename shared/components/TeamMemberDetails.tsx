import React from "react";
import MemberDetailItem from "../../upskiller/src/components/shared-subcomponents/MemberDetailItem";
import { MemberDetailType } from "../../upskiller/src/constants/member-details.enums";

interface MemberDetails {
  graduatedAs?: string;
  teachingExperience?: string;
  workExperience?: string;
  favLLM?: string;
  fact?: string;
}

interface TeamMemberDetailsProps {
  memberDetails: MemberDetails;
}

export const TeamMemberDetails: React.FC<TeamMemberDetailsProps> = ({
  memberDetails
}) => {
  const detailEntries = [
    { type: MemberDetailType.GRADUATED_AS, value: memberDetails.graduatedAs },
    { type: MemberDetailType.TEACHING_EXPERIENCE, value: memberDetails.teachingExperience },
    { type: MemberDetailType.WORK_EXPERIENCE, value: memberDetails.workExperience },
    { type: MemberDetailType.FAV_LLM, value: memberDetails.favLLM },
    { type: MemberDetailType.FACT, value: memberDetails.fact }
  ];
  
  return (
    <div className="mb-8">
      {detailEntries.map(({ type, value }) => 
        value ? (
          <MemberDetailItem 
            key={type} 
            detailType={type} 
            value={value} 
          />
        ) : null
      )}
    </div>
  );
};