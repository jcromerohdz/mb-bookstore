import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BookForm = () => (
  <div>
    <form action="">
      <input type="text" placeholder="Title" />
      <select name="category" id="cat">
        {categories.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
      </select>
      <input type="submit" value="Save" />
    </form>
  </div>
);

export default BookForm;
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