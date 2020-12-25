import React from "react";

const CheckboxComponent = (props) => {
  const { checked, onChangeHandler, label } = props;

  const handleOnChange = (e) => {
    onChangeHandler(!checked);
  };

  return (
    <React.Fragment>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleOnChange}
      ></input>
      <label>{label}</label>
    </React.Fragment>
  );
};

export const Checkbox = CheckboxComponent;
