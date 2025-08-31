import React from 'react';
import { MemberDetailType, MEMBER_DETAIL_LABELS } from '../../constants/member-details.enums';

interface MemberDetailItemProps {
  detailType: MemberDetailType;
  value: string;
}

const MemberDetailItem: React.FC<MemberDetailItemProps> = ({ detailType, value }) => {
  const label = MEMBER_DETAIL_LABELS[detailType];

  return (
    <div>
      <span style={{ fontWeight: 700 }}>{label}</span>{" "}
      <span className="font-light">{value}</span>
    </div>
  );
};

export default MemberDetailItem;