import React from "react";
import "./List.css";
import { Item } from "../ListItem/ListItem";

const ListComponent = (props) => {
  const { items } = props;
  let content;

  if (items) {
    content = items.map((item) => (
      <Item key={`item-${item.id}`} content={item.content} />
    ));
  } else {
    content = <Item key={1} content={1} />;
  }

  return <ul>{content}</ul>;
};
export const List = ListComponent;
