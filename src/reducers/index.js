import { combineReducers } from 'redux';
import books from './books';

const main = combineReducers({
  books,
});

export default main;
