import React from "react";
import "./List.css";
import { Item } from "../ListItem/ListItem";

const ListComponent = (props) => {
  const { items, onClickHandler, active } = props;
  let content;

  if (items) {
    content = items.map((item, index) => {
      return (
        <Item
          active={item.id === active.id ? true : false}
          key={`item-${item.id}`}
          content={item}
          label={item.name}
          onClickHandler={onClickHandler}
        />
      );
    });
  } else {
    content = <Item key={1} label={1} />;
  }

  return <ul className="list">{content}</ul>;
};
export const List = ListComponent;
