import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case 'adicionar':
      return [...state, action.payload];
    default:
      return state;
  }
};

const store = createStore(itemReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
