import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/index';
import App from './components/App';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'El Pricipito',
      category: 'Adventure',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'El Quijote',
      category: 'Adventure',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Star Wars, Master and Apprentice',
      category: 'Sci-Fi',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
