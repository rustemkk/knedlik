import { uniq } from 'lodash';
import { combineReducers } from 'redux';

import { DELETE_CATEGORY_SUCCESS, LOAD_CATEGORIES_SUCCESS, UPDATE_CATEGORY_SUCCESS } from './constants';


const categories = (state = {}, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_SUCCESS:
      return { ...action.isResetState ? {} : state, ...action.categories };
    case UPDATE_CATEGORY_SUCCESS:
      return { ...state, [action.category._id]: action.category };
    default:
      return state;
  }
};

const categoriesByIds = (state = [], action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_SUCCESS:
      return action.isResetState ? action.categoriesByIds : uniq([...state, ...action.categoriesByIds]);
    case DELETE_CATEGORY_SUCCESS:
      return state.filter(id => id !== action.categoryId);
    default:
      return state;
  }
};

export default combineReducers({
  categories,
  categoriesByIds,
});