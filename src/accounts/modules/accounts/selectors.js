/* eslint import/no-unresolved: 0 */
import { get as g } from 'lodash';
import { createSelector } from 'reselect';


export const getAccountsEntities = (state) =>
  g(state, 'accounts.accounts', {});

export const getAccountsIds = (state) =>
  g(state, 'accounts.accountsByIds', []);

export const getAccounts = createSelector(
  getAccountsEntities,
  getAccountsIds,
  (accounts, ids) => ids.map(id => accounts[id]).sort((a, b) => a.title > b.title ? 1 : -1)
);

export const getAccountById = (accountId) => createSelector(
  getAccountsEntities,
  (accounts) => accounts[accountId]
);