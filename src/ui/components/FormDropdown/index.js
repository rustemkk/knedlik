/* eslint import/no-unresolved:0 */
import { isFunction } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Dropdown from '../Dropdown';
import s from './index.scss';


//TODO make HOC for label & error wrapper
const FormDropdown = ({ disabled, input, label, meta: { error, touched }, options }) => (
  <div className={s.FormInput}>
    <span className={s.Label}>
      {label}
    </span>
    <Dropdown
      disabled={disabled}
      onSelect={(value) => isFunction(input.onChange) && input.onChange(value)}
      options={options}
      selectedValue={input.value}
    />
    <span className={s.Error}>
      {touched && error}
    </span>
  </div>
);

FormDropdown.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
};

export default FormDropdown;
