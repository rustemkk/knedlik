import {
  LOAD_TRANSACTIONS_REQUEST,
  LOAD_TRANSACTIONS_SUCCESS,
} from './constants';


export const loadTransactions = () => ({
  type: LOAD_TRANSACTIONS_REQUEST
});

export const loadTransactionsSuccess = ({ entities: { transactions }, result }, isResetState) => ({
  type: LOAD_TRANSACTIONS_SUCCESS,
  transactions,
  transactionsByIds: result,
  isResetState
});

// export const createCategory = (category) => ({
//   type: CREATE_CATEGORY_REQUEST,
//   category
// });
//
// export const updateCategory = (category) => ({
//   type: UPDATE_CATEGORY_REQUEST,
//   category
// });
//
// export const updateCategorySuccess = (category) => ({
//   type: UPDATE_CATEGORY_SUCCESS,
//   category
// });
//
// export const deleteCategory = (categoryId) => ({
//   type: DELETE_CATEGORY_REQUEST,
//   categoryId
// });
//
// export const deleteCategorySuccess = (categoryId) => ({
//   type: DELETE_CATEGORY_SUCCESS,
//   categoryId
// });