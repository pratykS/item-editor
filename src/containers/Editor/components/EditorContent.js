import React from "react";
import { Checkbox, Input, Select } from "../../../components";

const data = [
  { id: 1, label: "Male", value: "male" },
  { id: 2, label: "Female", value: "female" },
];

const EditorContentComponent = (props) => {
  const {
    name,
    gender,
    developer,
    plays,
    wanderlust,
    favoritePlace,
    setContent,
  } = props;

  const nameChangeHandler = (e) => {
    setContent({ ...props, name: e });
  };

  const traitChangeHandler = (e) => {
    setContent({ ...props, developer: e });
  };

  const genderSelectHandler = (e) => {
    const selectedOption = data.find((o) => o.id === Number(e)).value;
    setContent({ ...props, gender: selectedOption });
  };

  const wanderlustTraitHandler = (e) => {
    setContent({ ...props, wanderlust: e });
  };

  const favoritePlaceHandler = (e) => {
    setContent({ ...props, favoritePlace: e });
  };

  return (
    <React.Fragment>
      {name && <Input value={name} onChangeHandler={nameChangeHandler}></Input>}

      <Checkbox
        label={"Developer"}
        checked={developer}
        onChangeHandler={traitChangeHandler}
      ></Checkbox>
      {gender && (
        <Select
          options={data}
          onChangeHandler={genderSelectHandler}
          selectedOption={gender}
        ></Select>
      )}

      <Checkbox
        label={"Wanderlust"}
        checked={wanderlust}
        onChangeHandler={wanderlustTraitHandler}
      ></Checkbox>

      {favoritePlace && (
        <Input
          value={favoritePlace}
          onChangeHandler={favoritePlaceHandler}
        ></Input>
      )}
    </React.Fragment>
  );
};

export const Content = EditorContentComponent;
