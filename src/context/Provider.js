import React, { createContext, useReducer } from "react";

// Import initial states
import authInitialState from "./initialStates/authInitialState";
import contactsInitialState from "./initialStates/contactsInitialState";
import themeInitialState from "./initialStates/themeInitialState";

// Import reducers
import authReducer from "./reducers/authReducer";
import contactsReducer from "./reducers/contactsReducer ";
import themeReducer from "./reducers/themeReducer";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contactsReducer,
    contactsInitialState
  );
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    themeInitialState
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        contactsState,
        themeState,
        authDispatch,
        contactsDispatch,
        themeDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
