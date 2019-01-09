/* eslint import/no-unresolved: 0 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showModal } from 'core/modules/modals/actions';
import { NEW_ACCOUNT_MODAL } from 'core/modules/modals/constants';

import { loadAccounts } from '../../modules/accounts/actions';
import { getAccounts } from '../../modules/accounts/selectors';


const mapStateToProps = (state) => ({
  accounts: getAccounts(state),
});

const mapDispatchToProps = {
  loadAccounts,
  showModal
};

class Accounts extends Component {
  componentDidMount() {
    this.props.loadAccounts();
  }

  render() {
    const { accounts, showModal } = this.props;

    return (
      <div>
        Accounts
        <br/>
        {accounts.map(account =>
          <div key={account._id}>
            {`${account._id} - ${account.title} - ${account.currency} - ${account.initialAmount}`}
          </div>
        )}
        <div onClick={() => showModal(NEW_ACCOUNT_MODAL)}>
          NEW ACCOUNT
        </div>
      </div>
    );
  }
}

Accounts.propTypes = {
  accounts: PropTypes.array,
  loadAccounts: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);