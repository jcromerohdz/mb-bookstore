import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/books';
import App from './components/App';

const defaultBooks = {
  books: [
    { id: Math.floor(Math.random() * 10), title: 'Star Wars Episode I', category: 'Sci-Fi' },
    { id: Math.floor(Math.random() * 10), title: 'The Hobbit', category: 'Action' },
    { id: Math.floor(Math.random() * 10), title: 'El Principito', category: 'Kids' },
  ],
};

const store = createStore(rootReducer, defaultBooks);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
