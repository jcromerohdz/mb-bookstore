/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

import '../styles/bookList.css';

const BookList = ({ books, filter, removeBook, changeFilter }) => {
  const filteredBooks =
    filter !== 'All' ? books.filter((book) => book.category === filter) : books;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" id="brand-logo">
          Bookstore CMS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                BOOKS
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disable" href="#">
                <CategoryFilter changeFilter={changeFilter} />
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <i
              className="fa fa-user-circle fa-3x"
              aria-hidden="true"
              id="user"
            />
          </form>
        </div>
      </nav>

      <div className="container">
        {filteredBooks.map(book => (
          <Book book={book} key={book.id} removeBook={removeBook} />
        ))}
      </div>
    </div>
  );
};

BookList.defaultProps = {
  filter: "All",
};

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  changeFilter: category => {
    dispatch(changeFilter(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
