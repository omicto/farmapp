import React, { useReducer, createContext, useEffect } from "react";
import PropTypes from "prop-types";

const initialState = {
  cart: [],
};

const persistedState = JSON.parse(localStorage.getItem("farmapp"));

const finalInitialState = { ...initialState, ...persistedState };

const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return { ...state, cart: [...state.cart, action.payload] };
    }
    case "REMOVE_FROM_CART": {
      return {...state, cart: state.cart.filter(i => i.id !== action.payload.item.id)}
    }
    case "EMPTY_CART" : {
      return {...state, cart: []}
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
