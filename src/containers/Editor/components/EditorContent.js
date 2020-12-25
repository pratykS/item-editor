import React from "react";
import { Checkbox, Input, Select } from "../../../components";

const data = [
  { id: 1, label: "Male", value: "male" },
  { id: 2, label: "Female", value: "female" },
];

const EditorContentComponent = (props) => {
  const { name, gender, developer, setContent } = props;
  console.log(props);

  const nameChangeHandler = (e) => {
    setContent({ ...props, name: e });
  };

  const traitChangeHandler = (e) => {
    setContent({ ...props, developer: e });
  };

  const genderSelectHandler = (e) => {
    const selectedOption = data.find((o) => o.id == e).value;
    setContent({ ...props, gender: selectedOption });
  };

  return (
    <React.Fragment>
      <Input value={name} onChangeHandler={nameChangeHandler}></Input>
      <Checkbox
        label={"Developer"}
        checked={developer}
        onChangeHandler={traitChangeHandler}
      ></Checkbox>
      <Select
        options={data}
        onChangeHandler={genderSelectHandler}
        selectedOption={gender}
      ></Select>
    </React.Fragment>
  );
};

export const Content = EditorContentComponent;
