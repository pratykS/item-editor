import { useReducer, useCallback } from "react";

const UNDO = "UNDO";
const REDO = "REDO";
const SET = "SET";
const RESET = "RESET";

const initialState = {
  past: [],
  present: null,
  future: [],
};

const reducer = (state, action) => {
  const { past, present, future } = state;

  switch (action.type) {
    case UNDO: {
      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [present, ...future],
      };
    }

    case REDO: {
      const next = future[0];
      const newFuture = future.slice(1);

      return {
        past: [...past, present],
        present: next,
        future: newFuture,
      };
    }

    case SET: {
      const { newPresent } = action;

      if (newPresent === present) {
        return state;
      }
      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    }

    case RESET: {
      const { newPresent } = action;

      return {
        past: [],
        present: newPresent,
        future: [],
      };
    }
    default: {
      return state;
    }
  }
};

const useUndo = (initialPresent) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    present: initialPresent,
  });

  const undoCount = state.past.length;
  const redoCount = state.future.length;

  const undoState = useCallback(() => {
    if (undoCount !== 0) {
      dispatch({ type: UNDO });
    }
  }, [undoCount]);
  const redoState = useCallback(() => {
    if (redoCount !== 0) {
      dispatch({ type: REDO });
    }
  }, [redoCount]);
  const setState = useCallback(
    (newPresent) => dispatch({ type: SET, newPresent }),
    []
  );
  const resetState = useCallback(
    (newPresent) => dispatch({ type: RESET, newPresent }),
    []
  );

  return [
    state,
    { setState, resetState, undoState, redoState, undoCount, redoCount },
  ];
};

export const useHistory = useUndo;
