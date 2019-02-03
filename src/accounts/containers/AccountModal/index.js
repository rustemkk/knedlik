/* eslint import/no-unresolved: 0 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ACCOUNT_MODAL } from 'core/modules/modals/constants';
import IconButton from 'ui/components/IconButton';

import AccountForm from '../../forms/AccountForm';
import { createAccount, deleteAccount, updateAccount } from '../../modules/accounts/actions';
import { getAccountById } from '../../modules/accounts/selectors';
import s from './index.scss';


const emptyAccount = {
  amount: 0,
  currency: 'RUB',
  icon: 'wallet',
  initialAmount: 0,
  title: '',
};

const mapStateToProps = (state, ownProps) => ({
  account: ownProps.accountId ? getAccountById(ownProps.accountId)(state) : emptyAccount,
});

const mapDispatchToProps = {
  createAccount,
  deleteAccount,
  updateAccount,
};

class AccountModal extends Component {

  onDeleteAccount = () => {
    const { accountId, deleteAccount, onHideModal } = this.props;
    deleteAccount(accountId);
    onHideModal(ACCOUNT_MODAL);
  };

  onUpdateAccount = (account) => {
    const { createAccount, onHideModal, updateAccount } = this.props;
    account._id ? updateAccount(account) : createAccount(account);
    onHideModal(ACCOUNT_MODAL);
  };

  render() {
    const { account, accountId, onHideModal } = this.props;
    return (
      <div
        className={s.ModalBackground}
        onClick={(e) => e.target === this.ref && onHideModal(ACCOUNT_MODAL)}
        ref={ref => this.ref = ref}
      >
        <div className={s.AccountModal}>
          <span className={s.ModalTitle}>
            {accountId ? `Edit "${account.title}"` : 'New account'}
          </span>
          <IconButton className={s.Close} name="close" onClick={() => onHideModal(ACCOUNT_MODAL)}/>
          <AccountForm
            initialValues={account}
            onDeleteAccount={this.onDeleteAccount}
            onSubmit={this.onUpdateAccount}
          />
        </div>
      </div>
    );
  }
}

AccountModal.propTypes = {
  account: PropTypes.object.isRequired,
  accountId: PropTypes.string,
  createAccount: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  onHideModal: PropTypes.func.isRequired,
  updateAccount: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountModal);
