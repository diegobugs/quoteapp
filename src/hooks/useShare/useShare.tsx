import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

type ShareOptionsType = {
  file?: string;
  text?: string;
};

const DEFAULT_OPTIONS: ShareOptionsType = {
  file: undefined,
  text: undefined,
};

type ShareStateType = {
  isVisible: boolean;
  options: ShareOptionsType;
};

type ShowAction = {
  type: "show";
  payload: ShareOptionsType;
};

type HideAction = {
  type: "hide";
};

const initialState: ShareStateType = {
  isVisible: false,
  options: DEFAULT_OPTIONS,
};

type ShareActionType = ShowAction | HideAction;

const reducer = (state: ShareStateType, action: ShareActionType) => {
  switch (action.type) {
    case "hide":
      return { ...state, isVisible: false, options: DEFAULT_OPTIONS };
    case "show":
      return { ...state, isVisible: true, options: action.payload };
    default:
      return state;
  }
};

type ShareContextType = {
  state: ShareStateType;
  dispatch: Partial<React.Dispatch<ShareActionType>>;
};

export const ShareContext = createContext<ShareContextType>({
  state: initialState,
  dispatch: {},
});

export const ShareProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShareContext.Provider value={{ state, dispatch }}>
      {children}
    </ShareContext.Provider>
  );
};

const useShare = () => {
  const { dispatch } = useContext(ShareContext);

  const showShare = (options: ShareOptionsType) => {
    if (typeof dispatch === "function") {
      dispatch({ type: "show", payload: options });
    }
  };
  const hideShare = () => {
    if (typeof dispatch === "function") {
      dispatch({ type: "hide" });
    }
  };

  return {
    showShare,
    hideShare,
  };
};

export default useShare;
