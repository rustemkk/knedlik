/* eslint import/no-unresolved: 0*/
import accounts from 'accounts/modules';
import categories from 'categories/modules';
import transactions from 'transactions/modules';


const allModules = [
  accounts,
  categories,
  transactions,
];

let sagas = [];
allModules.forEach(modules => {
  modules.forEach(module => {
    if (module.sagas) {
      sagas = [...sagas, ...module.sagas];
    }
  });
});

export default function* rootSaga() {
  yield sagas;
}
