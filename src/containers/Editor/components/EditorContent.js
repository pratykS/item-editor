import React from "react";
import { Checkbox, Input, Select, MCheckbox } from "../../../components";
import { Item } from "../../../model/Item";

const data = Item.getAvailableGender();
const genderList = data.map((ag, i) => {
  return {
    id: i + 1,
    label: ag,
    value: ag.toLowerCase(),
  };
});

const optionList = (obj, aICb, sICb) => {
  const availableOptions = aICb();
  const selectedOptions = sICb(obj);
  const options = availableOptions.map((aI) => {
    return {
      label: aI,
      checked: selectedOptions ? selectedOptions.includes(aI) : false,
    };
  });
  return options;
};

const EditorContentComponent = (props) => {
  const {
    name,
    gender,
    developer,
    plays,
    wanderlust,
    favoritePlace,
    setContent,
    technologies,
    musician,
  } = props;

  const nameChangeHandler = (e) => {
    setContent({ ...props, name: e });
  };

  const devTraitChangeHandler = (e) => {
    setContent({ ...props, developer: e.checked });
  };

  const musicTraitChangeHandler = (e) => {
    setContent({ ...props, musician: e.checked });
  };

  const genderSelectHandler = (e) => {
    const selectedOption = genderList.find((o) => o.id === Number(e)).value;
    setContent({ ...props, gender: selectedOption });
  };

  const wanderlustTraitHandler = (e) => {
    setContent({ ...props, wanderlust: e.checked });
  };

  const favoritePlaceHandler = (e) => {
    setContent({ ...props, favoritePlace: e });
  };

  const techChangeHandler = (data) => {
    setContent({
      ...props,
      technologies: data.length > 0 ? data.map((d) => d.label) : null,
    });
  };

  const instruChangeHandler = (data) => {
    setContent({
      ...props,
      plays: data.length > 0 ? data.map((d) => d.label) : null,
    });
  };

  return (
    <React.Fragment>
      {name && (
        <section className="edit-section">
          <Input value={name} onChangeHandler={nameChangeHandler}></Input>
        </section>
      )}

      {gender && (
        <section className="edit-section">
          <Select
            options={genderList}
            onChangeHandler={genderSelectHandler}
            selectedOption={Item.getSelectedGender(props)}
          ></Select>
        </section>
      )}

      <section className="edit-section">
        <Checkbox
          index={0}
          label={"Developer"}
          checked={Item.isDeveloper(props)}
          onChangeHandler={devTraitChangeHandler}
        ></Checkbox>
      </section>

      <section className="edit-section">
        <Checkbox
          index={0}
          label={"Musician"}
          checked={Item.isMusician(props)}
          onChangeHandler={musicTraitChangeHandler}
        ></Checkbox>
      </section>

      <section className="edit-section">
        <Checkbox
          index={0}
          label={"Wanderlust"}
          checked={Item.isWanderlust(props)}
          onChangeHandler={wanderlustTraitHandler}
        ></Checkbox>
      </section>

      {Item.isWanderlust(props) && (
        <section className="edit-section">
          <Input
            value={favoritePlace}
            onChangeHandler={favoritePlaceHandler}
          ></Input>
        </section>
      )}

      {Item.isDeveloper(props) && (
        <section className="edit-section">
          <MCheckbox
            options={optionList(
              props,
              Item.getAvailableLanguages,
              Item.getSelectedLanguage
            )}
            onChange={techChangeHandler}
          />
        </section>
      )}

      {Item.isMusician(props) && (
        <section className="edit-section">
          <MCheckbox
            options={optionList(
              props,
              Item.getAvailableIntruments,
              Item.getSelectedInstruments
            )}
            onChange={instruChangeHandler}
          />
        </section>
      )}
    </React.Fragment>
  );
};

export const Content = EditorContentComponent;
