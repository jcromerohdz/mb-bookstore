/* eslint-disable camelcase */
export const CREATE_BOOk = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBook = book => ({
  type: CREATE_BOOk,
  payload: book,
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book.id,
});
