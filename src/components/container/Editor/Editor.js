import React from "react";
import { List } from "components";
import { useHistory } from "utils";
import { Content } from "components/container/Editor/EditorContent/EditorContent";
import { EditorHeader } from "./EditorHeader/EditorHeader";
import "./Editor.css";

const EditorComponent = (props) => {
  const { title, items, onSave } = props;

  const initState = { content: items, selectedContent: items[0] };

  const [
    state,
    { setState, resetState, undoState, redoState, undoCount, redoCount },
  ] = useHistory(initState);

  const { present: presentState } = state;

  const onMenuClickHandler = (e) => {
    setState({
      content: [...presentState.content],
      selectedContent: { ...presentState.content[e - 1] },
    });
  };

  const sidebarContent = (
    <List
      items={state.present.content}
      active={state.present.selectedContent}
      onClickHandler={onMenuClickHandler}
    ></List>
  );

  const onSaveHandler = () => {
    onSave(presentState.content);
  };
  const onResetHandler = () => {
    resetState(initState);
  };

  return (
    <div className="editor-body">
      <div id="left" className="column">
        <div className="top-left">{title}</div>
        <div className="bottom">{sidebarContent}</div>
      </div>
      <div id="right" className="column">
        <EditorHeader
          undoState={undoState}
          undoCount={undoCount}
          redoState={redoState}
          redoCount={redoCount}
          setState={onSaveHandler}
          resetState={onResetHandler}
        ></EditorHeader>
        <div className="bottom">
          <Content {...presentState} setContent={setState}></Content>
        </div>
      </div>
    </div>
  );
};

export const Editor = EditorComponent;
