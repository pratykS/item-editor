import React from "react";
import "./ListItem.css";
const ListItemComponent = (props) => {
  const { content } = props;
  return <li className="list-item">{content}</li>;
};

export const Item = ListItemComponent;
