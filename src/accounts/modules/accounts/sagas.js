/* eslint import/no-unresolved: 0 */
import { normalize, arrayOf, Schema } from 'normalizr';
import { call, fork, put, takeLatest } from 'redux-saga/effects';

import firebase from 'utils/firebase';

import * as actions from './actions';
import * as actionTypes from './constants';


const accountSchema = new Schema('accounts', { idAttribute: '_id' });

function* loadAccountsTask() {
  try {
    const payload = yield call(firebase.firestore.getCollection, 'accounts');
    let accounts = [];
    payload.forEach(account => accounts.push({ _id: account.id, ...account.data() }));
    const normalized = normalize(accounts, arrayOf(accountSchema));
    yield put(actions.loadAccountsSuccess(normalized));
  } catch (err) {
    console.log('loadAccountsTaskError', err);
  }
}

//=====================================
//  WATCHERS
//-------------------------------------

function* watchLoadAccounts() {
  yield takeLatest(actionTypes.LOAD_ACCOUNTS_REQUEST, loadAccountsTask);
}

//=====================================
//  ROOT
//-------------------------------------

const accountsSagas = [
  fork(watchLoadAccounts),
];

export default accountsSagas;
