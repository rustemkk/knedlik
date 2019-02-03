/* eslint import/no-unresolved: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import FormButton from 'ui/components/FormButton';
import FormInput from 'ui/components/FormInput';

import s from './index.scss';


let AccountForm = ({ handleSubmit }) => (
  <form className={s.AccountForm} onSubmit={handleSubmit}>
    <Field autoFocus component={FormInput} label="Title" name="title"/>
    <Field component={FormInput} label="Icon" name="icon"/>
    <Field component={FormInput} label="Initial amount" name="initialAmount"/>
    <Field component={FormInput} label="Currency" name="currency"/>
    <FormButton label="Save" type="submit"/>
  </form>
);

AccountForm = reduxForm({
  form: 'accountForm',
  // validate: (values) => {
  //   const errors = {};
  //   errors.title = "Fuck my arse";
  //   return errors;
  // }
})(AccountForm);

AccountForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AccountForm;