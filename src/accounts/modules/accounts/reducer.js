import { uniq } from 'lodash';
import { combineReducers } from 'redux';

import { DELETE_ACCOUNT_SUCCESS, LOAD_ACCOUNTS_SUCCESS, UPDATE_ACCOUNT_SUCCESS } from './constants';


const accounts = (state = {}, action) => {
  switch (action.type) {
    case LOAD_ACCOUNTS_SUCCESS:
      return { ...action.isResetState ? {} : state, ...action.accounts };
    case UPDATE_ACCOUNT_SUCCESS:
      return { ...state, [action.account._id]: action.account };
    default:
      return state;
  }
};

const accountsByIds = (state = [], action) => {
  switch (action.type) {
    case LOAD_ACCOUNTS_SUCCESS:
      return action.isResetState ? action.accountsByIds : uniq([...state, ...action.accountsByIds]);
    case DELETE_ACCOUNT_SUCCESS:
      return state.filter(id => id !== action.accountId);
    default:
      return state;
  }
};

export default combineReducers({
  accounts,
  accountsByIds,
});