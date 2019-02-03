/* eslint import/no-unresolved: 0 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ACCOUNT_MODAL } from 'core/modules/modals/constants';
import IconButton from 'ui/components/IconButton';

import AccountForm from '../../forms/AccountForm';
import { getAccountById } from '../../modules/accounts/selectors';
import s from './index.scss';


const emptyAccount = {};

const mapStateToProps = (state, ownProps) => ({
  account: ownProps.accountId ? getAccountById(ownProps.accountId)(state) : emptyAccount,
});

class AccountModal extends Component {

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
          <AccountForm initialValues={account} onSubmit={(v) => console.log('onSubmit', v)}/>
        </div>
      </div>
    );
  }
}

AccountModal.propTypes = {
  account: PropTypes.object.isRequired,
  accountId: PropTypes.string,
  onHideModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(AccountModal);
