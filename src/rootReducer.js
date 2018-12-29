/* eslint import/no-unresolved:0 */
import { combineReducers } from 'redux';

import accounts from './accounts/modules';
// import categories from './categories/modules';


const allModules = [
  accounts,
  // categories
];

let reducers = {};
allModules.forEach(modules => {
  modules.forEach(module => {
    if (module.reducer) {
      reducers = { ...reducers, [module.name]: module.reducer };
    }
  });
});

export default combineReducers(reducers);
