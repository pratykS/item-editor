import React from "react";
import { Editor } from "components";
import { ConfigurableEditor } from "components/container/Editor/ConfigurableEditor";
import { ItemService } from "services/ItemService";

const EditorComponent = {
  title: "Editor",
  argTypes: {
    title: { control: "text" },
    onSave: { action: () => {} },
  },
};

export const SampleStaticEditor = (args) => <Editor {...args} />;
SampleStaticEditor.args = {
  title: "Static Editor",
  items: ItemService.getItems(),
};

export const SampleConfigurableEditor = (args) => (
  <ConfigurableEditor {...args} />
);
SampleConfigurableEditor.args = {
  title: "Configurable Editor",
  items: ItemService.getNewItems(),
};

export default EditorComponent;
