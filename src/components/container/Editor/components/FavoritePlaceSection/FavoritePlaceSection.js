import React from "react";
import { Input } from "components";
const FavoritePlaceComponent = (props) => {
  const {
    title,
    object: { favoritePlace },
    updateObject,
  } = props;

  return (
    <section className="outer-section">
      <header className="section-header">
        <label htmlFor="place">{title}</label>
      </header>
      <section className="edit-section">
        <Input
          label={"place"}
          value={favoritePlace}
          onChangeHandler={(fp) => updateObject({ favoritePlace: fp })}
        ></Input>
      </section>
    </section>
  );
};

export const FavoritePlace = FavoritePlaceComponent;
