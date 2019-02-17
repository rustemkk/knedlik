/* eslint import/no-unresolved: 0 */
import { normalize, arrayOf, Schema } from 'normalizr';
import { call, fork, put, takeLatest } from 'redux-saga/effects';

import firebase from 'utils/firebase';

import * as actions from './actions';
import * as actionTypes from './constants';


const categorySchema = new Schema('categories', { idAttribute: '_id' });

function* loadCategoriesTask() {
  try {
    const payload = yield call(firebase.firestore.getCollection, 'categories');
    let categories = [];
    payload.forEach(category => categories.push({ _id: category.id, ...category.data() }));
    const normalized = normalize(categories, arrayOf(categorySchema));
    yield put(actions.loadCategoriesSuccess(normalized, true));
  } catch (err) {
    console.log('loadCategoriesTaskError', err);
  }
}

function* createCategoryTask({ category }) {
  try {
    const payload = yield call(firebase.firestore.addDocument, `categories`, category);
    const normalized = normalize([{ ...category, _id: payload.id }], arrayOf(categorySchema));
    yield put(actions.loadCategoriesSuccess(normalized, false));
  } catch (err) {
    console.log('createCategoryTaskError', err);
  }
}

function* updateCategoryTask({ category }) {
  try {
    yield call(firebase.firestore.setDocument, `categories/${category._id}`, category);
    yield put(actions.updateCategorySuccess(category));
  } catch (err) {
    console.log('updateCategoryTaskError', err);
  }
}

function* deleteCategoryTask({ categoryId }) {
  try {
    yield call(firebase.firestore.deleteDocument, `categories/${categoryId}`);
    yield put(actions.deleteCategorySuccess(categoryId));
  } catch (err) {
    console.log('deleteCategoryTaskError', err);
  }
}

//=====================================
//  WATCHERS
//-------------------------------------

function* watchLoadCategories() {
  yield takeLatest(actionTypes.LOAD_CATEGORIES_REQUEST, loadCategoriesTask);
}

function* watchCreateCategory() {
  yield takeLatest(actionTypes.CREATE_CATEGORY_REQUEST, createCategoryTask);
}

function* watchUpdateCategory() {
  yield takeLatest(actionTypes.UPDATE_CATEGORY_REQUEST, updateCategoryTask);
}

function* watchDeleteCategory() {
  yield takeLatest(actionTypes.DELETE_CATEGORY_REQUEST, deleteCategoryTask);
}

//=====================================
//  ROOT
//-------------------------------------

const categoriesSagas = [
  fork(watchLoadCategories),
  fork(watchCreateCategory),
  fork(watchUpdateCategory),
  fork(watchDeleteCategory),
];

export default categoriesSagas;
