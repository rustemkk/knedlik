/* eslint import/no-unresolved: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import FormButton from 'ui/components/FormButton';
import FormInput from 'ui/components/FormInput';

import s from './index.scss';


let AccountForm = ({ handleSubmit, initialValues, onDeleteAccount }) => (
  <form className={s.AccountForm} onSubmit={handleSubmit}>
    <Field autoFocus component={FormInput} label="Title" name="title"/>
    <Field component={FormInput} label="Icon" name="icon"/>
    <Field component={FormInput} label="Initial amount" name="initialAmount"/>
    <Field component={FormInput} label="Currency" name="currency"/>
    <FormButton label="Save" type="submit"/>
    {initialValues._id && <FormButton label="Delete" onClick={onDeleteAccount} type="button"/>}
  </form>
);

AccountForm = reduxForm({
  form: 'accountForm',
  validate: (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "This field is required.";
    }
    if (!values.currency) {
      errors.currency = "This field is required.";
    }
    return errors;
  }
})(AccountForm);

AccountForm.propTypes = {
  handleSubmit: PropTypes.func,
  initialValues: PropTypes.object.isRequired,
  onDeleteAccount: PropTypes.func.isRequired,
};

export default AccountForm;