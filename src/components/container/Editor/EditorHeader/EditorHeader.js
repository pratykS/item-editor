import React from "react";
import { EditorButton } from "./EditorButton/EditorButton";

const EditorHeaderComponent = (props) => {
  const {
    undoState,
    undoCount,
    redoState,
    redoCount,
    resetState,
    setState,
  } = props;
  return (
    <div className="top-right">
      <EditorButton
        label={"Undo"}
        state={undoState}
        count={undoCount}
      ></EditorButton>
      <EditorButton
        label={"Redo"}
        state={redoState}
        count={redoCount}
      ></EditorButton>
      <EditorButton label={"Save"} state={setState}></EditorButton>
      <EditorButton label={"Cancel"} state={resetState}></EditorButton>
      {/* <Button styledClass="undo-btn" label={`Undo`} onClick={undoState}>
          <span className="step-count past">{undoCount}</span>
        </Button>
        <Button styledClass="redo-btn" label={"Redo"} onClick={redoState}>
          <span className="step-count future">{redoCount}</span>
        </Button>
        <Button
          styledClass="save-btn"
          label={"Save"}
          onClick={() => onSaveHandler(presentState)}
        ></Button>
        <Button
          styledClass="cancel-btn"
          label={"Cancel"}
          onClick={() => resetState(initState)}
        ></Button> */}
    </div>
  );
};

export const EditorHeader = EditorHeaderComponent;
