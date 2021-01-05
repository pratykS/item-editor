import React from "react";
import { Select } from "../../../../display";
import { selectboxOptionList } from "../../../../../utils";
import { Item } from "../../../../../model/Item";

const genderOptions = selectboxOptionList(Item.getAvailableGender);

const ItemGenderSectionComponent = (props) => {
  const { title, object, updateObject } = props;

  const genderChangeHandler = (gender) => {
    const obj = {
      gender: genderOptions.find((o) => o.id === Number(gender)).value,
    };
    updateObject(obj);
  };

  return (
    <section className="outer-section">
      <header className="section-header">{title}</header>
      <section className="edit-section">
        <Select
          options={selectboxOptionList(Item.getAvailableGender)}
          onChangeHandler={genderChangeHandler}
          selectedOption={Item.getSelectedGender(object)}
        ></Select>
      </section>
    </section>
  );
};

export const ItemGenderSection = ItemGenderSectionComponent;
