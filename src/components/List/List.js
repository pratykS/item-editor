import React from "react";
import "./List.css";
import { Item } from "../ListItem/ListItem";

const ListComponent = (props) => {
  const { items, onClickHandler } = props;
  let content;

  if (items) {
    content = items.map((item) => (
      <Item
        key={`item-${item.id}`}
        content={item}
        onClickHandler={onClickHandler}
      />
    ));
  } else {
    content = <Item key={1} content={1} />;
  }

  return <ul>{content}</ul>;
};
export const List = ListComponent;
