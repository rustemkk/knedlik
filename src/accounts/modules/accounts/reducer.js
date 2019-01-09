import { uniq } from 'lodash';
import { combineReducers } from 'redux';

import { LOAD_ACCOUNTS_REQUEST, LOAD_ACCOUNTS_SUCCESS } from './constants';


const accounts = (state = {}, action) => {
  switch (action.type) {
    case LOAD_ACCOUNTS_REQUEST:
      return {};
    case LOAD_ACCOUNTS_SUCCESS:
      return { ...state, ...action.accounts };
    default:
      return state;
  }
};

const accountsByIds = (state = [], action) => {
  switch (action.type) {
    case LOAD_ACCOUNTS_REQUEST:
      return [];
    case LOAD_ACCOUNTS_SUCCESS:
      return uniq([...state, ...action.accountsByIds]);
    default:
      return state;
  }
};

export default combineReducers({
  accounts,
  accountsByIds,
});