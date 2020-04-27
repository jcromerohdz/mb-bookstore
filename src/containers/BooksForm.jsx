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
