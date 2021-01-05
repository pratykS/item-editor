import React from "react";
import { MCheckbox } from "components";
import { checkboxOptionList } from "utils";
import { Item } from "model/Item";
import "./InstrumentSection.css";

const InstrumentsSectionComponent = (props) => {
  const { title, object, updateObject } = props;
  return (
    <section className="outer-section">
      <header className="section-header">{title}</header>
      <section className="edit-section instrument-box">
        <MCheckbox
          options={checkboxOptionList(
            object,
            Item.getAvailableIntruments,
            Item.getSelectedInstruments
          )}
          onChangeHandler={(instru) =>
            updateObject({
              plays: instru.length > 0 ? instru.map((ins) => ins.label) : null,
            })
          }
        />
      </section>
    </section>
  );
};

export const InstrumentsSection = InstrumentsSectionComponent;
