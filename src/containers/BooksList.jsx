import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.length > 0 && books.map(book => <Book key={book.id} book={book} />)}
      </tbody>
    </table>
  </div>
);

BooksList.propTypes = { books: PropTypes.instanceOf(Array).isRequired };

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);
