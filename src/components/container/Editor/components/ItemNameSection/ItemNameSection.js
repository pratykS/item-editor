import React from "react";
import { Input } from "../../../../display";
const ItemNameSectionComponent = (props) => {
  const {
    title,
    object: { name },
    updateObject,
  } = props;

  return (
    <section className="outer-section">
      <header className="section-header">{title}</header>
      <section className="edit-section">
        <Input
          value={name}
          className="name-input"
          onChangeHandler={(name) => updateObject({ name: name })}
        ></Input>
      </section>
    </section>
  );
};

export const ItemNameSection = ItemNameSectionComponent;
