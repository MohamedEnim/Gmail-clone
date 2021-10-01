import React from "react";
import "./OptionSection.css";
function OptionSection({ Icon, label, number, selected }) {
  return (
    <div className={`optionSection ${selected && "selected--option"}`}>
      <Icon />
      <h3>{label}</h3>
      <p>{number}</p>
    </div>
  );
}

export default OptionSection;
