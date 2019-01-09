/* eslint import/no-unresolved: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import NewAccountModal from 'accounts/containers/NewAccountModal';

import { hideModal } from '../../modules/modals/actions';
import { NEW_ACCOUNT_MODAL } from '../../modules/modals/constants';


const MODAL_COMPONENTS = {
  [NEW_ACCOUNT_MODAL]: NewAccountModal,
};

const mapStateToProps = state => ({
  modals: state.modals.modals
});

const mapDispatchToProps = {
  hideModal
};

const Modals = ({ modals, hideModal }) => {
  return !modals.length ? null : modals.map(({ modalType, modalProps }) => {
    const Modal = MODAL_COMPONENTS[modalType];
    return <Modal key={modalType} onHideModal={modalType => hideModal(modalType)} {...modalProps}/>;
  });
};

Modals.propTypes = {
  hideModal: PropTypes.func.isRequired,
  modals: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
