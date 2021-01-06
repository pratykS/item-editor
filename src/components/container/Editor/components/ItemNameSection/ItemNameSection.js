import React from "react";
import { Input } from "components";
const ItemNameSectionComponent = (props) => {
  const {
    title,
    object: { name },
    updateObject,
  } = props;

  return (
    <section className="outer-section">
      <header className="section-header">
        <label htmlFor="name">{title}</label>
      </header>
      <section className="edit-section">
        <Input
          label={"name"}
          value={name}
          className="name-input"
          onChangeHandler={(name) => updateObject({ name: name })}
        ></Input>
      </section>
    </section>
  );
};

export const ItemNameSection = ItemNameSectionComponent;
