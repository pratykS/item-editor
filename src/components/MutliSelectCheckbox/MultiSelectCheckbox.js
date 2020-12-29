import React from "react";

const MultiselectCheckbox = ({ options, onChange }) => {
  const toggle = (index) => {
    const newData = [...options];
    newData.splice(index, 1, {
      label: options[index].label,
      checked: !options[index].checked,
    });

    onChange(newData.filter((x) => x.checked));
  };

  return (
    <>
      {options.map((item, index) => (
        <label key={item.label}>
          <input
            readOnly
            type="checkbox"
            checked={item.checked || false}
            onClick={() => toggle(index)}
          />
          {item.label}
        </label>
      ))}
    </>
  );
};

export const MCheckbox = MultiselectCheckbox;
