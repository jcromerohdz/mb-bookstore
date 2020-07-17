import React from 'react';
import PropTypes from 'prop-types';
import categories from '../data/categories';

const CategoryFilter = ({ changeFilter }) => {
  const selectCategory = React.useRef(null);
  return (
    <div>
      <select ref={selectCategory} name="category" onChange={() => changeFilter(selectCategory.current.value)}>
        {categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
