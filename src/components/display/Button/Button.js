import React from "react";
import "./Button.css";

const ButtonComponent = (props) => {
  const { label, children, onClick, disabled, styledClass } = props;
  return (
    <button
      onClick={() => onClick(label)}
      disabled={disabled}
      className={`btn ${styledClass}`}
    >
      {label ? label : "I am a button"}
      {children ? children : null}
    </button>
  );
};

export const Button = ButtonComponent;
