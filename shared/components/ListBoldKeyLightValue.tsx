import React from "react";

interface MemberDetails {
  graduatedAs?: string;
  teachingExperience?: string;
  workExperience?: string;
  favLLM?: string;
  fact?: string;
}

interface ListBoldKeyLightValueProps {
  details: MemberDetails;
}

export const ListBoldKeyLightValue = ({
  details
}: ListBoldKeyLightValueProps): JSX.Element => {
  const { graduatedAs, teachingExperience, workExperience, favLLM, fact } = details;
  
  return (
  <div className="mb-8">
    {graduatedAs && (
      <div>
        <span style={{ fontWeight: 700 }}>GRADUATED AS:</span>{" "}
        <span className="font-light">{graduatedAs}</span>
      </div>
    )}
    {teachingExperience && (
      <div>
        <span style={{ fontWeight: 700 }}>TEACHING EXPERIENCE:</span>{" "}
        <span className="font-light">{teachingExperience}</span>
      </div>
    )}
    {workExperience && (
      <div>
        <span style={{ fontWeight: 700 }}>WORK EXPERIENCE:</span>{" "}
        <span className="font-light">{workExperience}</span>
      </div>
    )}
    {favLLM && (
      <div>
        <span style={{ fontWeight: 700 }}>FAV LLM:</span>{" "}
        <span className="font-light">{favLLM}</span>
      </div>
    )}
    {fact && (
      <div>
        <span style={{ fontWeight: 700 }}>FACT:</span>{" "}
        <span className="font-light">{fact}</span>
      </div>
    )}
  </div>
  );
};
