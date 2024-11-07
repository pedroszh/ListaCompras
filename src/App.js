// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FormularioItem from './Components/AppItem';
import Crud from './Components/Crud';
import './App.css';

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case 'adicionar':
      return [...state, action.payload];
    case 'remover':
      return state.filter(item => item.id !== action.payload);
    case 'editar':
      return state.map(item => 
        item.id === action.payload.id ? action.payload : item
      );
    default:
      return state;
  }
};

// Store
const store = createStore(itemReducer);

function App() {
    return (
        <Provider store={store}>
            <div className='container'>
                <h1>Produtos</h1>
                <Crud />
                <FormularioItem />
            </div>
        </Provider>
    );
}

export default App;