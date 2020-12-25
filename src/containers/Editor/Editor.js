import React, { useState } from "react";
import {
  Sidebar,
  Header,
  List,
  Button,
  Checkbox,
  Input,
  Select,
} from "../../components";
import "./Editor.css";

import useUndo from "../../utils/useHistory";
import { Content } from "./components/EditorContent";

const items = [
  { id: 1, content: "Menu1", active: false },
  { id: 2, content: "Menu2", active: false },
  { id: 3, content: "Menu3", active: false },
  { id: 4, content: "Menu4", active: false },
  { id: 5, content: "Menu5", active: false },
];

let actionsMenu = [
  { id: 1, content: "Undo", disabled: false },
  { id: 2, content: "Redo", disabled: false },
  { id: 3, content: "Save", disabled: false },
  { id: 4, content: "Cancel", disabled: false },
];

const itemArray = [
  {
    id: 1,
    name: "Pratik",
    gender: "male",
    developer: true,
  },
  {
    id: 1,
    name: "Samuel",
    gender: "male",
    developer: true,
  },
  {
    id: 1,
    name: "Clara",
    gender: "female",
    developer: true,
  },
  {
    id: 1,
    name: "Dani",
    gender: "female",
    developer: false,
  },
];

const EditorComponent = (props) => {
  // const { items, onSave, title } = props;

  let defaultItem = itemArray[0];
  const [item, setItem] = useState(defaultItem);

  const onMenuClickHandler = (e) => {
    defaultItem = itemArray[e - 1];
    setItem(defaultItem);
  };

  console.log(item);

  const sidebarContent = (
    <List items={items} onClickHandler={onMenuClickHandler}></List>
  );

  const [
    state,
    {
      set: setState,
      reset: resetState,
      undo: undoState,
      redo: redoState,
      canUndo,
      canRedo,
    },
  ] = useUndo(item);

  const { present: presentState } = state;

  // actionsMenu = actionsMenu.map((am) => {
  //   if (canUndo && am.content === "Undo") {
  //     return { id: am.id, content: am.content, disabled: false };
  //   } else if (canRedo && am.content === "Redo") {
  //     return { id: am.id, content: am.content, disabled: false };
  //   } else {
  //     return am;
  //   }
  // });

  const onClickHandler = (label) => {
    if (label === "Undo") {
      undoState();
    }
    if (label === "Redo") {
      redoState();
    }
    if (label === "Save") {
      // onSave(state);
      console.log(label);
    }
    if (label === "Cancel") {
      resetState(item);
    }
  };

  // const headerContent = actionsMenu.map((a) => (
  //   <Button
  //     key={a.id}
  //     label={a.content}
  //     onClick={onClickHandler}
  //     disabled={a.disabled}
  //   ></Button>
  // ));

  return (
    <>
      {/* <Header children={headerContent}></Header> */}
      <div className="headerContent">
        <Button label={"Undo"} disabled={!canUndo} onClick={undoState}></Button>
        <Button label={"Redo"} disabled={!canRedo} onClick={redoState}></Button>
        <Button
          label={"Save"}
          disabled={!canUndo}
          onClick={() => console.log("save")}
        ></Button>
        <Button
          label={"Cancel"}
          disabled={!canUndo && !canRedo}
          onClick={() => resetState(item)}
        ></Button>
      </div>
      <div className="editor">
        <Sidebar class="editor-sidebar" children={sidebarContent}></Sidebar>
        <div className="editor-content">
          <Content {...presentState} setContent={setState}></Content>
        </div>
      </div>
    </>
  );
};

export const Editor = EditorComponent;
