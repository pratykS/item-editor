import React from "react";
import "./Input.css";

const InputComponent = (props) => {
  const { value, onChangeHandler } = props;

  const handleOnChange = (e) => {
    onChangeHandler(e.target.value);
  };

  return (
    <>
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
