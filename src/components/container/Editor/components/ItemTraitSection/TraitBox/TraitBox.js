import React from "react";
import { Checkbox } from "../../../../../display";
const TraitComponent = (props) => {
  const { label, checked, changeHandler } = props;

  return (
    <Checkbox
      index={0}
      label={label}
      checked={checked}
      onChangeHandler={(o) => changeHandler(o)}
    ></Checkbox>
  );
};

export const Trait = TraitComponent;
