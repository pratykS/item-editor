import React from "react";
import "./ListItem.css";
const ListItemComponent = (props) => {
  const { content, onClickHandler } = props;
  const onItemClickHandler = (e) => {
    onClickHandler(e);
  };
  return (
    <li className="list-item" onClick={() => onItemClickHandler(content.id)}>
      {content.content}
    </li>
  );
};

export const Item = ListItemComponent;
