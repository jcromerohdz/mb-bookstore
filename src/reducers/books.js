import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      console.log([...state.books, action.book]);
      console.log(action.book);
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== parseInt(action.id, 2));
    default:
      return state;
  }
};

export default bookReducer;
