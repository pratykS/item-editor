import React from "react";
import { Sidebar, List, Button } from "../../components";
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

const EditorComponent = () => {
  const initState = itemArray[0];

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
  ] = useUndo(initState);

  const { present: presentState } = state;

  const onMenuClickHandler = (e) => {
    setState(itemArray[e - 1]);
  };

  const sidebarContent = (
    <List items={items} onClickHandler={onMenuClickHandler}></List>
  );

  return (
    <>
      <div className="headerContent">
        <Button label={"Undo"} onClick={undoState}></Button>
        <Button label={"Redo"} onClick={redoState}></Button>
        <Button
          label={"Save"}
          disabled={!canUndo}
          onClick={() => console.log("save")}
        ></Button>
        <Button
          label={"Cancel"}
          disabled={!canUndo && !canRedo}
          onClick={() => resetState(initState)}
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
