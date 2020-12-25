import React from "react";

const SelectboxComponent = (props) => {
  const { options, onChangeHandler, selectedOption } = props;
  const selectedIndex =
    options.findIndex((o) => o.value === selectedOption) + 1;
  return (
    <select
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
