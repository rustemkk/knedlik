/* eslint import/no-unresolved: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import AccountModal from 'accounts/containers/AccountModal';
import CategoryModal from 'categories/containers/CategoryModal';

import { hideModal } from '../../modules/modals/actions';
import { ACCOUNT_MODAL, CATEGORY_MODAL } from '../../modules/modals/constants';


const MODAL_COMPONENTS = {
  [ACCOUNT_MODAL]: AccountModal,
  [CATEGORY_MODAL]: CategoryModal,
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
