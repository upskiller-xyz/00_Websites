import React from 'react';

interface InfoCardProblemProps {
  problem: string;
}

export const InfoCardProblem: React.FC<InfoCardProblemProps> = ({
  problem
}) => (
  <p className="text-dark leading-relaxed">
    <strong>Problem:</strong> {problem}
  </p>
);
