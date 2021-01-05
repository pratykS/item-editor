import React from "react";
import "./Header.css";

const HeaderComponent = (props) => {
  const { children } = props;
  return <div className="header">{children}</div>;
};

export const Header = HeaderComponent;
