import React from "react";
import "./Input.css";

const InputComponent = (props) => {
  const { value, onChangeHandler, label } = props;

  const handleOnChange = (e) => {
    onChangeHandler(e.target.value);
  };

  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        className="name-input"
        value={value}
        onChange={handleOnChange}
      />
    </>
  );
};

export const Input = InputComponent;
