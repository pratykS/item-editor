import React from "react";
import { Editor } from "../Editor/Editor";
import { ItemService } from "../../services/ItemService";

const items = ItemService.getItems();

const HomeComponent = () => {
  const onSave = (items) => {
    console.log(
      "I am just a callback function to save the updated items ",
      items
    );
  };
  return (
    <div>
      <Editor items={items} onSave={onSave} title={"Item Editor"}></Editor>
    </div>
  );
};

export const Home = HomeComponent;
