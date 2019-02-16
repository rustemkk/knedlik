import {
  CREATE_ACCOUNT_REQUEST,
  DELETE_ACCOUNT_REQUEST,
  DELETE_ACCOUNT_SUCCESS,
  LOAD_ACCOUNTS_REQUEST,
  LOAD_ACCOUNTS_SUCCESS,
  UPDATE_ACCOUNT_REQUEST,
  UPDATE_ACCOUNT_SUCCESS
} from './constants';


export const loadAccounts = () => ({
  type: LOAD_ACCOUNTS_REQUEST
});

export const loadAccountsSuccess = ({ entities: { accounts }, result }, isResetState) => ({
  type: LOAD_ACCOUNTS_SUCCESS,
  accounts,
  accountsByIds: result,
  isResetState
});

export const createAccount = (account) => ({
  type: CREATE_ACCOUNT_REQUEST,
  account
});

export const updateAccount = (account) => ({
  type: UPDATE_ACCOUNT_REQUEST,
  account
});

export const updateAccountSuccess = (account) => ({
  type: UPDATE_ACCOUNT_SUCCESS,
  account
});

export const deleteAccount = (accountId) => ({
  type: DELETE_ACCOUNT_REQUEST,
  accountId
});

export const deleteAccountSuccess = (accountId) => ({
  type: DELETE_ACCOUNT_SUCCESS,
  accountId
});