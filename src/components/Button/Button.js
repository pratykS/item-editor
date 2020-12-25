import React from "react";

const ButtonComponent = (props) => {
  const { label, children, onClick, disabled } = props;
  return (
    <button onClick={() => onClick(label)} disabled={disabled}>
      {label ? label : "I am a button"}
      {children ? children : null}
    </button>
  );
};

export const Button = ButtonComponent;
