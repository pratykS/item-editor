import React from "react";
import "./Select.css";

const SelectboxComponent = (props) => {
  const { options, onChangeHandler, selectedOption } = props;

  const selectedIndex =
    options.findIndex((o) => o.value === selectedOption) + 1;

  return (
    <select
      className="select-dropdown"
      value={selectedIndex}
      onChange={(e) => onChangeHandler(e.target.value)}
    >
      {options.map(({ id, label }) => (
        <option key={id} value={id}>
          {label}
        </option>
      ))}
    </select>
  );
};

export const Select = SelectboxComponent;
