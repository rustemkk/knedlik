/* eslint import/no-unresolved:0 */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import accounts from 'accounts/modules';
import categories from 'categories/modules';
import core from 'core/modules';
import transactions from 'transactions/modules';


const allModules = [
  accounts,
  categories,
  core,
  transactions,
];

let reducers = {
  form: formReducer
};

allModules.forEach(modules => {
  modules.forEach(module => {
    if (module.reducer) {
      reducers = { ...reducers, [module.name]: module.reducer };
    }
  });
});

export default combineReducers(reducers);
