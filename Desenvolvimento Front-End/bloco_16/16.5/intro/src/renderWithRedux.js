import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';

// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

export const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

