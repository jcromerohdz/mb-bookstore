import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import main from './reducers';
import App from './components/App';

const defaultBooks = {
  books: [
    { id: Math.floor(Math.random() * 10).toString(), title: 'Star Wars Episode I', category: 'Sci-Fi' },
    { id: Math.floor(Math.random() * 10).toString(), title: 'The Hobbit', category: 'Action' },
    { id: Math.floor(Math.random() * 10).toString(), title: 'El Principito', category: 'Kids' },
  ],
};

const store = createStore(main, defaultBooks);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
