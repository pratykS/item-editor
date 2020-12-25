import React from "react";

const InputComponent = (props) => {
  const { value, onChangeHandler } = props;

  const handleOnChange = (e) => {
    onChangeHandler(e.target.value);
  };

  return <input type="text" value={value} onChange={handleOnChange} />;
};

export const Input = InputComponent;
