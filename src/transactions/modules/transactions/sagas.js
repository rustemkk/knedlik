/* eslint import/no-unresolved: 0 */
import { normalize, arrayOf, Schema } from 'normalizr';
import { call, fork, put, takeLatest } from 'redux-saga/effects';

import firebase from 'utils/firebase';

import * as actions from './actions';
import * as actionTypes from './constants';


const transactionSchema = new Schema('transactions', { idAttribute: '_id' });

function* loadTransactionsTask() {
  try {
    const payload = yield call(firebase.firestore.getCollection, 'transactions');
    let transactions = [];
    payload.forEach(category => transactions.push({ _id: category.id, ...category.data() }));
    const normalized = normalize(transactions, arrayOf(transactionSchema));
    yield put(actions.loadTransactionsSuccess(normalized, true));
  } catch (err) {
    console.log('loadTransactionsTaskError', err);
  }
}

// function* createCategoryTask({ category }) {
//   try {
//     const payload = yield call(firebase.firestore.addDocument, `categories`, category);
//     const normalized = normalize([{ ...category, _id: payload.id }], arrayOf(categorySchema));
//     yield put(actions.loadCategoriesSuccess(normalized, false));
//   } catch (err) {
//     console.log('createCategoryTaskError', err);
//   }
// }
//
// function* updateCategoryTask({ category }) {
//   try {
//     yield call(firebase.firestore.setDocument, `categories/${category._id}`, category);
//     yield put(actions.updateCategorySuccess(category));
//   } catch (err) {
//     console.log('updateCategoryTaskError', err);
//   }
// }
//
// function* deleteCategoryTask({ categoryId }) {
//   try {
//     yield call(firebase.firestore.deleteDocument, `categories/${categoryId}`);
//     yield put(actions.deleteCategorySuccess(categoryId));
//   } catch (err) {
//     console.log('deleteCategoryTaskError', err);
//   }
// }

//=====================================
//  WATCHERS
//-------------------------------------

function* watchLoadTransactions() {
  yield takeLatest(actionTypes.LOAD_TRANSACTIONS_REQUEST, loadTransactionsTask);
}

// function* watchCreateCategory() {
//   yield takeLatest(actionTypes.CREATE_CATEGORY_REQUEST, createCategoryTask);
// }
//
// function* watchUpdateCategory() {
//   yield takeLatest(actionTypes.UPDATE_CATEGORY_REQUEST, updateCategoryTask);
// }
//
// function* watchDeleteCategory() {
//   yield takeLatest(actionTypes.DELETE_CATEGORY_REQUEST, deleteCategoryTask);
// }

//=====================================
//  ROOT
//-------------------------------------

const categoriesSagas = [
  fork(watchLoadTransactions),
  // fork(watchCreateCategory),
  // fork(watchUpdateCategory),
  // fork(watchDeleteCategory),
];

export default categoriesSagas;
