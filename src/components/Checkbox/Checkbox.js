import React from "react";

const CheckboxComponent = (props) => {
  const { checked, onChangeHandler, label, index } = props;

  // console.log(label);
  const handleOnChange = (e) => {
    e.stopPropagation();
    onChangeHandler({ label: label, checked: !checked, index: index });
  };

  return (
    <React.Fragment>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleOnChange(e)}
      ></input>
      <label>{label}</label>
    </React.Fragment>
  );
};

export const Checkbox = CheckboxComponent;
