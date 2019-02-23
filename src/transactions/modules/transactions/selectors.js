/* eslint import/no-unresolved: 0 */
import { get as g } from 'lodash';
import { createSelector } from 'reselect';


export const getTransactionsEntities = (state) =>
  g(state, 'transactions.transactions', {});

export const getTransactionsIds = (state) =>
  g(state, 'transactions.transactionsByIds', []);

export const getTransactions = createSelector(
  getTransactionsEntities,
  getTransactionsIds,
  (transactions, ids) => ids.map(id => transactions[id])
);

export const getTransactionById = (transactionId) => createSelector(
  getTransactionsEntities,
  (transactions) => transactions[transactionId]
);