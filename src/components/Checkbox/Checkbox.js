import React from "react";
import "./Checkbox.css";

const CheckboxComponent = (props) => {
  const { checked, onChangeHandler, label, index } = props;

  // console.log(label);
  const handleOnChange = (e) => {
    e.stopPropagation();
    onChangeHandler({ label: label, checked: !checked, index: index });
  };

  return (
    <React.Fragment>
      <label className="toggle">
        <input
          className="toggle-checkbox"
          type="checkbox"
          checked={checked}
          onChange={(e) => handleOnChange(e)}
        />
        <div className="toggle-switch"></div>
        <span className="toggle-label">{label}</span>
      </label>
      {/* <input
        className="styled-checkbox"
        type="checkbox"
        checked={checked}
        onChange={(e) => handleOnChange(e)}
      ></input>
      <label>{label}</label> */}
    </React.Fragment>
  );
};

export const Checkbox = CheckboxComponent;
