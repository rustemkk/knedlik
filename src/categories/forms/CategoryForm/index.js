/* eslint import/no-unresolved: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import FormButton from 'ui/components/FormButton';
import FormDropdown from 'ui/components/FormDropdown';
import FormInput from 'ui/components/FormInput';
import SvgIcon, { CATEGORIES_ICONS } from 'ui/components/SvgIcon';

import s from './index.scss';


let CategoryForm = ({ handleSubmit, initialValues, onDeleteCategory }) => (
  <form onSubmit={handleSubmit}>
    <Field autoFocus component={FormInput} label="Title" name="title"/>
    <Field
      component={FormDropdown}
      label="Icon"
      name="icon"
      options={CATEGORIES_ICONS.map(icon => ({
        label: <span className={s.AccountIcon}><SvgIcon className={s.Icon} name={icon} size={20}/>{icon}.svg</span>,
        value: icon
      }))}
    />
    <Field
      component={FormDropdown}
      label="Type"
      name="type"
      options={[
        { label: 'Expense', value: -1 },
        { label: 'Expense & Income', value: 0 },
        { label: 'Income', value: 1 }
      ]}
    />
    <div className={s.FormButtons}>
      <FormButton label="Save" type="submit"/>
      {initialValues._id &&
        <FormButton label="Delete" onClick={onDeleteCategory} type="button"/>
      }
    </div>
  </form>
);

CategoryForm = reduxForm({
  form: 'categoryForm',
  validate: (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "This field is required.";
    }
    return errors;
  }
})(CategoryForm);

CategoryForm.propTypes = {
  handleSubmit: PropTypes.func,
  initialValues: PropTypes.object.isRequired,
  onDeleteCategory: PropTypes.func.isRequired,
};

export default CategoryForm;