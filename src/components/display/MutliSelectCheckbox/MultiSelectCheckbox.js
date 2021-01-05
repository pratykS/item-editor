import React from "react";
import "./MultiSelectCheckbox.css";

const MultiselectCheckbox = (props) => {
  const { options, onChangeHandler } = props;
  const toggle = (index) => {
    const newData = [...options];
    newData.splice(index, 1, {
      label: options[index].label,
      checked: !options[index].checked,
    });

    onChangeHandler(newData.filter((x) => x.checked));
  };

  return (
    <>
      {options.map((item, index) => (
        <div className="form-group" key={index}>
          <input
            readOnly
            type="checkbox"
            id={item.label}
            checked={item.checked || false}
            onClick={() => toggle(index)}
          />
          <label htmlFor={item.label}>{item.label}</label>
        </div>
      ))}
    </>
  );
};

export const MCheckbox = MultiselectCheckbox;
