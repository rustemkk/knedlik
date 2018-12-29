import { LOAD_ACCOUNTS_REQUEST, LOAD_ACCOUNTS_SUCCESS} from './constants';


export const loadAccounts = () => ({
  type: LOAD_ACCOUNTS_REQUEST
});

export const loadAccountsSuccess = ({ entities: { accounts }, result }) => ({
  type: LOAD_ACCOUNTS_SUCCESS,
  accounts,
  accountsByIds: result
});