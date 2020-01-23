import React, { createContext, useContext, useReducer } from 'react';

import auth from './auth';
import todos from './todos';

export const StateContext = createContext();

const initialState = {
  auth: auth.initialState,
  todos: todos.initialState
};

const mainReducer = (state, action) => ({
  auth: auth.reducer(state.auth, action),
  todos: todos.reducer(state.todos, action)
});

export const actions = {
  ...auth.actions,
  ...todos.actions
};

export const StateProvider = ({ children }) => <StateContext.Provider value={useReducer(mainReducer, initialState)}>{children}</StateContext.Provider>;

export const useStateValue = () => useContext(StateContext);
