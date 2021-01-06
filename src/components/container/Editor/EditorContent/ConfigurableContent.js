import React from "react";
import { NewItem } from "model/newItem";
import "./EditorContent.css";
import { Input, Checkbox, Select } from "components";
import { newObjectUpdator } from "utils/helpers/ObjectUpdator";

const ConfigurableContentComponent = (props) => {
  const { content, selectedContent, setContent } = props;

  const updater = (val, fieldId, itemId) => {
    console.log(val);
    const uO = { val: val, fieldId: fieldId, itemId: itemId };
    newObjectUpdator(selectedContent, uO, content, setContent);
  };

  return (
    <React.Fragment>
      {NewItem.getAvailableFields(selectedContent).map((nI, i) => {
        if (nI.fieldType === "text") {
          return (
            <section className="outer-section" key={`field-${i}`}>
              <header className="section-header">
                <label htmlFor="name">{nI.fieldName}</label>
              </header>
              <section className="edit-section">
                <Input
                  value={nI.fieldValue}
                  label={nI.fieldName}
                  onChangeHandler={(val) =>
                    updater(val, nI.id, NewItem.getItemId(selectedContent))
                  }
                ></Input>
              </section>
            </section>
          );
        }
        if (nI.fieldType === "toggle") {
          return (
            <section className="outer-section" key={`field-${i}`}>
              <header className="section-header">
                <label htmlFor="name">{nI.fieldName}</label>
              </header>
              <section className="edit-section">
                <Checkbox
                  label={nI.fieldName}
                  checked={nI.fieldValue}
                  onChangeHandler={(o) =>
                    updater(
                      o.checked,
                      nI.id,
                      NewItem.getItemId(selectedContent)
                    )
                  }
                ></Checkbox>
              </section>
            </section>
          );
        }
        if (nI.fieldType === "option") {
          return (
            <section className="outer-section" key={`field-${i}`}>
              <header className="section-header">
                <label htmlFor="name">{nI.fieldName}</label>
              </header>
              <section className="edit-section">
                <Select
                  label={nI.fieldName}
                  options={nI.fieldOptions.map((fO, i) => {
                    return { label: fO.optionName, id: i + 1 };
                  })}
                  onChangeHandler={(val) =>
                    updater(val, nI.id, NewItem.getItemId(selectedContent))
                  }
                  selectedOption={nI.fieldValue}
                ></Select>
              </section>
            </section>
          );
        }
        return <span>No Content</span>;
      })}
    </React.Fragment>
  );
};

export const ConfigurableContent = ConfigurableContentComponent;
