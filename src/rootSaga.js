/* eslint import/no-unresolved: 0*/
import accounts from 'accounts/modules';
import categories from 'categories/modules';


const allModules = [
  accounts,
  categories,
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
