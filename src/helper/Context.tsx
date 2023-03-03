import { createContext, useReducer, useEffect, ReducerState } from "react";
import Reducer from "./Reducer";

interface State {
  //   user: object;
  isFetching: boolean;
  error: boolean;
}

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("BlogarooUser") || "{}"),
  isFetching: false,
  error: false,
};

export const Context = createContext<any>(INITIAL_STATE);

export const ContextProvider = ({ children }: any) => {
  // For our ContextProvider function we use useReducer method
  const [state, dispatch] = useReducer<any>(Reducer, INITIAL_STATE);

  let userInfo: any = state;

  useEffect(() => {
    localStorage.setItem("BlogarooUser", JSON.stringify(userInfo.user));
  }, [userInfo.user]);

  return (
    <Context.Provider
      value={{
        user: userInfo?.user,
        isFetching: userInfo?.isFetching,
        error: userInfo?.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const AppContext = createContext<any>(null);
