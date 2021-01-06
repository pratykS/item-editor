import React from "react";
import "./Input.css";

const InputComponent = (props) => {
  const { value, onChangeHandler, label } = props;

  const handleOnChange = (e) => {
    onChangeHandler(e.target.value);
  };

  return (
    <>
      <input
        id={label}
        type="text"
        className="name-input"
        value={value}
        onChange={handleOnChange}
      />
    </>
  );
};

export const Input = InputComponent;
