/* eslint import/no-unresolved: 0 */
import { get as g } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAccounts } from 'accounts/modules/accounts/selectors';
import { getCategories } from 'categories/modules/categories/selectors';
import { showModal } from 'core/modules/modals/actions';
// import { ACCOUNT_MODAL } from 'core/modules/modals/constants';
import SvgIcon from 'ui/components/SvgIcon';

import { loadTransactions } from '../../modules/transactions/actions';
import { getTransactions } from '../../modules/transactions/selectors';
import s from './index.scss';


const mapStateToProps = (state) => ({
  accounts: getAccounts(state),
  categories: getCategories(state),
  transactions: getTransactions(state),
});

const mapDispatchToProps = {
  loadTransactions,
  showModal
};

class Transactions extends Component {

  componentDidMount() {
    this.props.loadTransactions();
  }

  getAccount(accountId) {
    return this.props.accounts.find(a => a._id === accountId);
  }

  getCategory(categoryId) {
    return this.props.categories.find(c => c._id === categoryId);
  }

  render() {
    // const { transactions, showModal } = this.props;
    const { transactions } = this.props;

    console.log('transactions', transactions);

    return (
      <div className={s.Transactions}>
        {transactions.map(transaction =>
          <div
            className={s.Transaction}
            key={transaction._id}
            // onClick={() => showModal(ACCOUNT_MODAL, { accountId: account._id })}
          >

            <div className={s.Icon}>
              <SvgIcon className={s.IconClose} name="food" size={40}/>
            </div>
            <div className={s.CategoryTitle}>
              {g(this.getCategory(transaction.categoryId), 'title', '?')}
            </div>
            <div className={s.AccountTitle}>
              {g(this.getAccount(transaction.accountId), 'title', '?')}
            </div>
            <div className={s.Comment}>
              {transaction.comment}
            </div>
            <div className={s.Amount}>
              {/*{`${transaction.amount} ${transaction.currency}`}*/}
              {transaction.amount}
            </div>
          </div>
        )}
        {/*<div className={s.Account} onClick={() => showModal(ACCOUNT_MODAL)}>*/}
          {/*<div className={s.Icon}>*/}
            {/*<SvgIcon className={s.IconClose} name="plus" size={40}/>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

Transactions.propTypes = {
  accounts: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  loadTransactions: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  transactions: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);