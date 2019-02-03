/* eslint import/no-unresolved:0 */
import { isFunction } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import s from './index.scss';


const FormButton = ({ label, onClick, type }) => (
  <button className={s.FormButton} onClick={(e) => isFunction(onClick) && onClick(e)} type={type}>
    {label}
  </button>
);

FormButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};

export default FormButton;
