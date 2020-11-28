import React, { useReducer, createContext, useEffect } from "react";
import PropTypes from "prop-types";

const initialState = {
  cart: [],
};

const persistedState = JSON.parse(localStorage.getItem("farmapp"));

const finalInitialState = { ...initialState, ...persistedState };

const appReducer = (state, action) => {
  switch (action.type) {
    case "ADDTOCART": {
      return { ...state, cart: [...state.cart, action.payload] };
    }
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, finalInitialState);

  useEffect(() => {
    localStorage.setItem("farmapp", JSON.stringify(state));
    console.log(state);
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element,
};
