import React from 'react';
import Book from 

const BooksList = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <Book />
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
