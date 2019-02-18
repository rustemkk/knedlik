/* eslint import/no-unresolved: 0 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showModal } from 'core/modules/modals/actions';
import { CATEGORY_MODAL } from 'core/modules/modals/constants';
import SvgIcon from 'ui/components/SvgIcon';

import { loadCategories } from '../../modules/categories/actions';
import { getCategories } from '../../modules/categories/selectors';
import s from './index.scss';


const mapStateToProps = (state) => ({
  categories: getCategories(state),
});

const mapDispatchToProps = {
  loadCategories,
  showModal
};

class Categories extends Component {

  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const { categories, showModal } = this.props;
    const categoriesIncome = categories.filter(c => [0, 1].includes(c.type));
    const categoriesExpenses = categories.filter(c => [-1, 0].includes(c.type));

    return (
      <div className={s.Categories}>
        <div className={s.GroupHeader}>
          Income
        </div>
        <div className={s.CategoriesGroup}>
          {categoriesIncome.map(category =>
            <div
              className={s.Category}
              key={category._id}
              onClick={() => showModal(CATEGORY_MODAL, { categoryId: category._id })}
            >
              <div className={s.Icon}>
                <SvgIcon className={s.IconPlus} name={category.icon} size={40}/>
              </div>
              <div className={s.Title}>
                {category.title}
              </div>
            </div>
          )}
          <div className={s.Category} onClick={() => showModal(CATEGORY_MODAL)}>
            <div className={s.Icon}>
              <SvgIcon className={s.IconPlus} name="plus" size={40}/>
            </div>
          </div>
        </div>
        <div className={s.GroupHeader}>
          Expenses
        </div>
        <div className={s.CategoriesGroup}>
          {categoriesExpenses.map(category =>
            <div
              className={s.Category}
              key={category._id}
              onClick={() => showModal(CATEGORY_MODAL, { categoryId: category._id })}
            >
              <div className={s.Icon}>
                <SvgIcon className={s.IconPlus} name={category.icon} size={40}/>
              </div>
              <div className={s.Title}>
                {category.title}
              </div>
            </div>
          )}
          <div className={s.Category} onClick={() => showModal(CATEGORY_MODAL)}>
            <div className={s.Icon}>
              <SvgIcon className={s.IconPlus} name="plus" size={40}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array,
  loadCategories: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);