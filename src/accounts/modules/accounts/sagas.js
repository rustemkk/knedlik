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
    yield put(actions.loadAccountsSuccess(normalized, true));
  } catch (err) {
    console.log('loadAccountsTaskError', err);
  }
}

function* createAccountTask({ account }) {
  try {
    account = { ...account, amount: account.initialAmount };
    const payload = yield call(firebase.firestore.addDocument, `accounts`, account);
    const normalized = normalize([{ ...account, _id: payload.id }], arrayOf(accountSchema));
    yield put(actions.loadAccountsSuccess(normalized, false));
  } catch (err) {
    console.log('createAccountTaskError', err);
  }
}

function* updateAccountTask({ account }) {
  try {
    yield call(firebase.firestore.setDocument, `accounts/${account._id}`, account);
    yield put(actions.updateAccountSuccess(account));
  } catch (err) {
    console.log('updateAccountTaskError', err);
  }
}

function* deleteAccountTask({ accountId }) {
  try {
    yield call(firebase.firestore.deleteDocument, `accounts/${accountId}`);
    yield put(actions.deleteAccountSuccess(accountId));
  } catch (err) {
    console.log('deleteAccountTaskError', err);
  }
}

//=====================================
//  WATCHERS
//-------------------------------------

function* watchLoadAccounts() {
  yield takeLatest(actionTypes.LOAD_ACCOUNTS_REQUEST, loadAccountsTask);
}

function* watchCreateAccount() {
  yield takeLatest(actionTypes.CREATE_ACCOUNT_REQUEST, createAccountTask);
}

function* watchUpdateAccount() {
  yield takeLatest(actionTypes.UPDATE_ACCOUNT_REQUEST, updateAccountTask);
}

function* watchDeleteAccount() {
  yield takeLatest(actionTypes.DELETE_ACCOUNT_REQUEST, deleteAccountTask);
}

//=====================================
//  ROOT
//-------------------------------------

const accountsSagas = [
  fork(watchLoadAccounts),
  fork(watchCreateAccount),
  fork(watchUpdateAccount),
  fork(watchDeleteAccount),
];

export default accountsSagas;
