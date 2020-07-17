import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      console.log(action.category);
      return action.category;
    default:
      return state;
  }
};

export default filterReducer;
