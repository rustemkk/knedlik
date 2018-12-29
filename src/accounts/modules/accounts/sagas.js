/* eslint import/no-unresolved: 0 */
import { normalize, arrayOf, Schema } from 'normalizr';
import { fork, put, takeLatest } from 'redux-saga/effects';

import * as actions from './actions';
import * as actionTypes from './constants';


const accountSchema = new Schema('accounts', { idAttribute: '_id' });

function* loadAccountsTask() {
  try {
    // let payload = yield call(...);
    const payload = [
      {
        _id: '1',
        title: 'Cash',
        currency: 'RUB',
        initialAmount: '0'
      },
      {
        _id: '2',
        title: 'Card',
        currency: 'RUB',
        initialAmount: '500'
      }
    ];
    const normalized = normalize(payload, arrayOf(accountSchema));
    yield put(actions.loadAccountsSuccess(normalized, true));
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
