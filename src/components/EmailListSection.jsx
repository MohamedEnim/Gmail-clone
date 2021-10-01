import "./EmailListSection.css";
import React from "react";

function EmailListSection({ Icon, label, color, selected }) {
  return (
    <div
      className={`emailListSection ${selected && "emailListSection--selected"}`}
      style={{ borderBottom: `2px solid ${color}` }}
    >
      <Icon />
      <h3>{label}</h3>
    </div>
  );
}

export default EmailListSection;
