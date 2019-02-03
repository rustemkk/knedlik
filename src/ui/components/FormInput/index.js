/* eslint import/no-unresolved:0 */
import { isFunction } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import s from './index.scss';


const FormInput = ({ autoFocus, disabled, input, label, meta: { error, initial, touched }, placeholder }) => (
  <div className={s.FormInput}>
    <span className={s.Label}>
      {label}
    </span>
    <input
      autoFocus={autoFocus}
      className={s.Input}
      defaultValue={initial}
      disabled={disabled}
      placeholder={placeholder}
      onBlur={(e) => isFunction(input.onBlur) && input.onBlur(e)}
      onChange={(e) => isFunction(input.onChange) && input.onChange(e)}
      onFocus={(e) => isFunction(input.onFocus) && input.onFocus(e)}
      onKeyDown={(e) => isFunction(input.onKeyDown) && input.onKeyDown(e)}
    />
    <span className={s.Error}>
      {touched && error}
    </span>
  </div>
);

FormInput.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;
