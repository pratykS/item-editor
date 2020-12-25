import React from "react";
import "./Sidebar.css";

const SidebarComponent = (props) => {
  const { children } = props;
  return <aside className="sidebar">{children ? children : null}</aside>;
};

export const Sidebar = SidebarComponent;
