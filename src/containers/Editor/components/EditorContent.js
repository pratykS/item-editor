import React from "react";
import { Checkbox, Input, Select, MCheckbox } from "../../../components";
import { Item } from "../../../model/Item";
import "./EditorContent.css";
import { selectboxOptionList, checkboxOptionList } from "../../../utils";

const genderOptions = selectboxOptionList(Item.getAvailableGender);

const EditorContentComponent = (props) => {
  const { name, gender, favoritePlace, setContent } = props;

  const nameChangeHandler = (name) => {
    setContent({ ...props, name: name });
  };

  const devTraitChangeHandler = (dev) => {
    setContent({ ...props, developer: dev.checked });
  };

  const musicTraitChangeHandler = (music) => {
    setContent({ ...props, musician: music.checked });
  };

  const genderSelectHandler = (gender) => {
    console.log(gender);
    const selectedOption = genderOptions.find((o) => o.id === Number(gender))
      .value;
    setContent({ ...props, gender: selectedOption });
  };

  const wanderlustTraitHandler = (wl) => {
    setContent({ ...props, wanderlust: wl.checked });
  };

  const favoritePlaceHandler = (fp) => {
    setContent({ ...props, favoritePlace: fp });
  };

  const techChangeHandler = (tech) => {
    setContent({
      ...props,
      technologies: tech.length > 0 ? tech.map((t) => t.label) : null,
    });
  };

  const instruChangeHandler = (instru) => {
    setContent({
      ...props,
      plays: instru.length > 0 ? instru.map((ins) => ins.label) : null,
    });
  };

  return (
    <React.Fragment>
      {name && (
        <section className="outer-section">
          <header className="section-header">Name</header>
          <section className="edit-section">
            <Input
              // label={"Name"}
              value={name}
              className="name-input"
              onChangeHandler={nameChangeHandler}
            ></Input>
          </section>
        </section>
      )}

      {gender && (
        <section className="outer-section">
          <header className="section-header">Gender</header>
          <section className="edit-section">
            <Select
              options={selectboxOptionList(Item.getAvailableGender)}
              onChangeHandler={genderSelectHandler}
              selectedOption={Item.getSelectedGender(props)}
            ></Select>
          </section>
        </section>
      )}
      <section className="outer-section">
        <header className="section-header">Traits</header>
        <section className="edit-section trait-box">
          <Checkbox
            index={0}
            label={"Developer"}
            checked={Item.isDeveloper(props)}
            onChangeHandler={devTraitChangeHandler}
          ></Checkbox>
          <Checkbox
            index={0}
            label={"Musician"}
            checked={Item.isMusician(props)}
            onChangeHandler={musicTraitChangeHandler}
          ></Checkbox>
          <Checkbox
            index={0}
            label={"Wanderlust"}
            checked={Item.isWanderlust(props)}
            onChangeHandler={wanderlustTraitHandler}
          ></Checkbox>
        </section>
      </section>

      {Item.isDeveloper(props) && (
        <section className="outer-section">
          <header className="section-header">Technologies</header>
          <section className="edit-section tech-box">
            <MCheckbox
              options={checkboxOptionList(
                props,
                Item.getAvailableLanguages,
                Item.getSelectedLanguage
              )}
              onChange={techChangeHandler}
            />
          </section>
        </section>
      )}

      {Item.isWanderlust(props) && (
        <section className="outer-section">
          <header className="section-header">Favorite Place</header>
          <section className="edit-section">
            <Input
              // label={"Favorite Place"}
              value={favoritePlace}
              onChangeHandler={favoritePlaceHandler}
            ></Input>
          </section>
        </section>
      )}

      {Item.isMusician(props) && (
        <section className="outer-section">
          <header className="section-header">Instruments</header>
          <section className="edit-section instrument-box">
            <MCheckbox
              options={checkboxOptionList(
                props,
                Item.getAvailableIntruments,
                Item.getSelectedInstruments
              )}
              onChange={instruChangeHandler}
            />
          </section>
        </section>
      )}
    </React.Fragment>
  );
};

export const Content = EditorContentComponent;
