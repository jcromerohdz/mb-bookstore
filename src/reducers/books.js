import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const books = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.id];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== parseInt(action.id, 2));
    default:
      return state;
  }
};

export default books;
