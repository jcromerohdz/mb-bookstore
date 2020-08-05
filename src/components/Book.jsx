/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/book.css';

const Book = ({ book, removeBook }) => (
  <div className="row book-items" key={book.id}>
    <div className="col-lg-5 col-md-12 col-xm-12 piped">
      <h6>{book.category}</h6>
      <h3>{book.title}</h3>
      <a href="">Suzanne Collins</a>
      <br />
      <span className="NoPiped">
        <a href="#" onClick={event => event.preventDefault()}>Comments</a>
      </span>
      <span>
        <a href="#" onClick={() => removeBook(book)}>
          Remove
        </a>
      </span>
      <span>
        <a href="" onClick={event => event.preventDefault()}>Edit</a>
      </span>
    </div>
    <div className="col-lg-7 col-md-12 col-xs-12">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="progress blue">
            <span className="progress-left">
              <span className="progress-bar" />
            </span>
            <span className="progress-right">
              <span className="progress-bar" />
            </span>
            <div className="progress-value">90%</div>
          </div>
        </div>
        <div className="p-5 col-ms-3">
          <h6>Completed</h6>
        </div>
        <div className="vl" />
        <div className="chap">
          <h6>CURRENT CHAPTER</h6>
          <h5>Chapter 17</h5>
          <button type="submit" className="btn btn-primary">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>

  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
