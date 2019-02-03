/* eslint import/no-unresolved: 0 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showModal } from 'core/modules/modals/actions';
import { ACCOUNT_MODAL } from 'core/modules/modals/constants';
import SvgIcon from 'ui/components/SvgIcon';

import { loadAccounts } from '../../modules/accounts/actions';
import { getAccounts } from '../../modules/accounts/selectors';
import s from './index.scss';


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
      <div className={s.Accounts}>
        {accounts.map(account =>
          <div
            className={s.Account}
            key={account._id}
            onClick={() => showModal(ACCOUNT_MODAL, { accountId: account._id })}
          >
            <div className={s.Icon}>
              <SvgIcon className={s.IconClose} name={account.icon} size={40}/>
            </div>
            <div className={s.Title}>
              {account.title}
            </div>
            <div className={s.Amount}>
              {`${account.amount} ${account.currency}`}
            </div>
          </div>
        )}
        <div className={s.Account} onClick={() => showModal(ACCOUNT_MODAL)}>
          <div className={s.Icon}>
            <SvgIcon className={s.IconClose} name="plus" size={40}/>
          </div>
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