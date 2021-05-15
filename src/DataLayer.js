import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>  // DataLayer in index.js
);

export const useDataLayerValue = () => useContext(DataLayerContext);

//using StateProvider..

//DataLayerContext = SateContext
//DataLayer = StateProvider
//DataLayerContext.Provider = StateContext.Provider
//useDataLayerValue = useStateValue
