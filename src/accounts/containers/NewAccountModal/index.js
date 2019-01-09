/* eslint import/no-unresolved: 0 */
import PropTypes from 'prop-types';
import React from 'react';

import { NEW_ACCOUNT_MODAL } from 'core/modules/modals/constants';

import s from './index.scss';


const NewAccountModal = ({ onHideModal }) => (
  <div className={s.ModalBackground} onClick={() => onHideModal(NEW_ACCOUNT_MODAL)}>
    <div className={s.NewAccountModal}>
      MODAL awdawd
      (<span onClick={() => onHideModal(NEW_ACCOUNT_MODAL)}>X CLOSE</span>)
    </div>
  </div>
);

NewAccountModal.propTypes = {
  onHideModal: PropTypes.func.isRequired
};

export default NewAccountModal;
