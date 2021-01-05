import React from "react";
import { Item } from "../../../../model/Item";
import "./EditorContent.css";
import { ObjectUpdator } from "../../../../utils";

import {
  FavoritePlace,
  InstrumentsSection,
  ItemGenderSection,
  ItemNameSection,
  ItemTraitSection,
  TechnologiesSection,
} from "../components";

const EditorContentComponent = (props) => {
  const { content, selectedContent, setContent } = props;

  const updateObject = (uO) => {
    ObjectUpdator(selectedContent, uO, content, setContent);
  };

  return (
    <React.Fragment>
      <ItemNameSection
        title={"Name"}
        object={selectedContent}
        updateObject={updateObject}
      ></ItemNameSection>

      <ItemGenderSection
        title={"Gender"}
        object={selectedContent}
        updateObject={updateObject}
      ></ItemGenderSection>

      <ItemTraitSection
        title={"Traits"}
        object={selectedContent}
        updateObject={updateObject}
      ></ItemTraitSection>

      {Item.isDeveloper(selectedContent) && (
        <TechnologiesSection
          title={"Technologies"}
          object={selectedContent}
          updateObject={updateObject}
        ></TechnologiesSection>
      )}

      {Item.isWanderlust(selectedContent) && (
        <FavoritePlace
          title={"Favorite Place"}
          object={selectedContent}
          updateObject={updateObject}
        ></FavoritePlace>
      )}

      {Item.isMusician(selectedContent) && (
        <InstrumentsSection
          title={"Instruments"}
          object={selectedContent}
          updateObject={updateObject}
        ></InstrumentsSection>
      )}
    </React.Fragment>
  );
};

export const Content = EditorContentComponent;
