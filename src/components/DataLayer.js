import React, { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

export const DataLayer = ({ children, initialState, reducer }) => (
  <DataContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataContext.Provider>
);

export const useDataContext = () => useContext(DataContext);
