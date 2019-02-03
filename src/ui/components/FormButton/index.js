/* eslint import/no-unresolved:0 */
import PropTypes from 'prop-types';
import React from 'react';

import s from './index.scss';


const FormButton = ({ label, type }) => (
  <button className={s.FormButton} type={type}>{label}</button>
);

FormButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormButton;
