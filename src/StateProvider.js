import React, {createContext, useContext, useReducer } from 'react';

//Prepares the data layer

export const StateContext = createContext();

//wrap our app and provide the datan layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider  value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull information from the data layer
const useStateValue = ()=> useContext(StateContext);
export default useStateValue;