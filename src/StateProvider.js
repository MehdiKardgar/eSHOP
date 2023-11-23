// Custom hook for managing global state

import React, { createContext, useContext, useReducer } from "react";

// Creates a context for the state management
export const StateContext = createContext();

// Component that provides the state to the app and wraps the app with the data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    // Provides the state and the dispatch function to the app via context
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children} {/* Renders the app components wrapped inside StateProvider */}
    </StateContext.Provider>
  );
};

// Custom hook to access the state and dispatch function from the data layer
export const useStateValue = () => useContext(StateContext);
