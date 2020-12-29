import { useReducer, useCallback } from "react";

const REDO = "REDO";
const SET = "SET";

const initialState = {
  past: [],
  present: null,
  future: [],
};

const reducer = (state, action) => {
  const { past, present, future } = state;

  switch (action.type) {
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
  }
};

const useRedo = (initialPresent) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    present: initialPresent,
  });

  const canRedo = state.future.length !== 0;

  const redo = useCallback(() => {
    if (canRedo) {
      dispatch({ type: REDO });
    }
  }, [canRedo]);
  const set = useCallback(
    (newPresent) => dispatch({ type: SET, newPresent }),
    []
  );

  return [state, { set, redo, canRedo }];
};

export const useRedos = useRedo;
