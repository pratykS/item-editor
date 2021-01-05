import React from "react";
import { Item } from "model/Item";
import { Trait } from "./TraitBox/TraitBox";
import "./ItemTraitSection.css";

const ItemTraitSectionComponent = (props) => {
  const { title, object, updateObject } = props;
  return (
    <section className="outer-section">
      <header className="section-header">{title}</header>
      <section className="edit-section trait-box">
        <Trait
          label={"Techie"}
          checked={Item.isDeveloper(object)}
          changeHandler={(d) => updateObject({ developer: d.checked })}
        ></Trait>
        <Trait
          label={"Music Lover"}
          checked={Item.isMusician(object)}
          changeHandler={(m) => updateObject({ musician: m.checked })}
        ></Trait>
        <Trait
          label={"Wanderlust"}
          checked={Item.isWanderlust(object)}
          changeHandler={(w) => updateObject({ wanderlust: w.checked })}
        ></Trait>
      </section>
    </section>
  );
};

export const ItemTraitSection = ItemTraitSectionComponent;
