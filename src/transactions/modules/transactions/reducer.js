import { uniq } from 'lodash';
import { combineReducers } from 'redux';

import { LOAD_TRANSACTIONS_SUCCESS } from './constants';


const transactions = (state = {}, action) => {
  switch (action.type) {
    case LOAD_TRANSACTIONS_SUCCESS:
      return { ...action.isResetState ? {} : state, ...action.transactions };
    // case UPDATE_CATEGORY_SUCCESS:
    //   return { ...state, [action.category._id]: action.category };
    default:
      return state;
  }
};

const transactionsByIds = (state = [], action) => {
  switch (action.type) {
    case LOAD_TRANSACTIONS_SUCCESS:
      return action.isResetState ? action.transactionsByIds : uniq([...state, ...action.transactionsByIds]);
    // case DELETE_CATEGORY_SUCCESS:
    //   return state.filter(id => id !== action.transcationId);
    default:
      return state;
  }
};

export default combineReducers({
  transactions,
  transactionsByIds,
});