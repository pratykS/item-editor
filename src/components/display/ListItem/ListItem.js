import React from "react";
import "./ListItem.css";
const ListItemComponent = (props) => {
  const { content, label, onClickHandler, active } = props;
  const onItemClickHandler = (e) => {
    onClickHandler(e);
  };

  return (
    <li
      className={active ? "list-item active" : "list-item"}
      onClick={() => onItemClickHandler(content.id)}
    >
      {label}
    </li>
  );
};

export const Item = ListItemComponent;
