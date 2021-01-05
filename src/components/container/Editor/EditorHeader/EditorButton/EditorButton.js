import React from "react";
import { Button } from "components";

const EditorButtonComponent = (props) => {
  const { label, state, count } = props;
  return (
    <Button
      styledClass={`${label.toLowerCase()}-btn`}
      label={label}
      onClick={state}
    >
      {count >= 0 ? <span className="step-count">{count}</span> : null}
    </Button>
  );
};

export const EditorButton = EditorButtonComponent;
