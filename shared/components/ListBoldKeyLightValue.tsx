import React from "react";

interface ListBoldKeyLightValueProps {
  graduatedAs?: string;
  teachingExperience?: string;
  workExperience?: string;
  favLLM?: string;
  fact?: string;
}

const ListBoldKeyLightValue = ({
  graduatedAs,
  teachingExperience,
  workExperience,
  favLLM,
  fact,
}: ListBoldKeyLightValueProps): JSX.Element => (
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

export default ListBoldKeyLightValue;
