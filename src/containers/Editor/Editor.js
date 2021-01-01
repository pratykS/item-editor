import React from "react";
import { List, Button } from "../../components";
import "./Editor.css";
import { ItemService } from "../../services/ItemService";
import { useHistory } from "../../hooks/useHistory";
import { Content } from "./components/EditorContent";

const itemArray = ItemService.getItems();

const EditorComponent = () => {
  const initState = itemArray[0];

  const [
    state,
    { setState, resetState, undoState, redoState, undoCount, redoCount },
  ] = useHistory(initState);

  const { present: presentState } = state;

  const onMenuClickHandler = (e) => {
    setState(itemArray[e - 1]);
  };

  const sidebarContent = (
    <List items={itemArray} onClickHandler={onMenuClickHandler}></List>
  );

  return (
    <div className="editor-body">
      <div id="left" className="column">
        <div className="top-left">{state.present.name}</div>
        <div className="bottom">{sidebarContent}</div>
      </div>
      <div id="right" className="column">
        <div className="top-right">
          <Button styledClass="undo-btn" label={`Undo`} onClick={undoState}>
            <span className="step-count past">{undoCount}</span>
          </Button>
          <Button styledClass="redo-btn" label={"Redo"} onClick={redoState}>
            <span className="step-count future">{redoCount}</span>
          </Button>
          <Button
            styledClass="save-btn"
            label={"Save"}
            onClick={() => console.log("onSAVE")}
          ></Button>
          <Button
            styledClass="cancel-btn"
            label={"Cancel"}
            onClick={() => resetState(initState)}
          ></Button>
        </div>
        <div className="bottom">
          <Content {...presentState} setContent={setState}></Content>
        </div>
      </div>
    </div>
  );
};

export const Editor = EditorComponent;
