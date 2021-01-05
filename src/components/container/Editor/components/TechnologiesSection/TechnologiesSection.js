import React from "react";
import { MCheckbox } from "components";
import { checkboxOptionList } from "utils";
import { Item } from "model/Item";
import "./TechnologiesSection.css";

const TechnolgiesSectionComponent = (props) => {
  const { title, object, updateObject } = props;
  return (
    <section className="outer-section">
      <header className="section-header">{title}</header>
      <section className="edit-section tech-box">
        <MCheckbox
          options={checkboxOptionList(
            object,
            Item.getAvailableLanguages,
            Item.getSelectedLanguage
          )}
          onChangeHandler={(tech) =>
            updateObject({
              technologies: tech.length > 0 ? tech.map((t) => t.label) : null,
            })
          }
        />
      </section>
    </section>
  );
};

export const TechnologiesSection = TechnolgiesSectionComponent;
