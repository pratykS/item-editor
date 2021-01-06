import React, { useState } from "react";
import { Editor } from "components";
import { ItemService } from "services/ItemService";
import { ConfigurableEditor } from "../Editor/ConfigurableEditor";
import { Button } from "components/display";

const items = ItemService.getItems();
const newItems = ItemService.getNewItems();

const HomeComponent = () => {
  const [editor, showEditor] = useState(false);
  const [configurableEditor, showConfigurableEditor] = useState(false);
  const onSave = (items) => {
    console.log(
      "I am just a callback function to save the updated items ",
      items
    );
  };
  return (
    <div>
      <div>
        <Button
          styledClass={`redo-btn`}
          label={"Editor 1"}
          onClick={() => {
            showEditor(!editor);
            showConfigurableEditor(false);
          }}
        ></Button>
        <Button
          styledClass={`undo-btn`}
          label={"Editor 2"}
          onClick={() => {
            showConfigurableEditor(!configurableEditor);
            showEditor(false);
          }}
        ></Button>
      </div>
      <div>
        {editor ? (
          <Editor items={items} onSave={onSave} title={"Item Editor"}></Editor>
        ) : null}

        {configurableEditor ? (
          <ConfigurableEditor
            items={newItems}
            onSave={onSave}
            title={"Item Editor"}
          ></ConfigurableEditor>
        ) : null}
      </div>
    </div>
  );
};

export const Home = HomeComponent;
