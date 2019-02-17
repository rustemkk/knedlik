/* eslint import/no-unresolved: 0 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CATEGORY_MODAL } from 'core/modules/modals/constants';
import IconButton from 'ui/components/IconButton';

import CategoryForm from '../../forms/CategoryForm';
import { createCategory, deleteCategory, updateCategory } from '../../modules/categories/actions';
import { getCategoryById } from '../../modules/categories/selectors';
import s from './index.scss';


const emptyCategory = {
  icon: 'fastFood',
  title: '',
  type: '-1',
};

const mapStateToProps = (state, ownProps) => ({
  category: ownProps.categoryId ? getCategoryById(ownProps.categoryId)(state) : emptyCategory,
});

const mapDispatchToProps = {
  createCategory,
  deleteCategory,
  updateCategory,
};

class CategoryModal extends Component {

  onDeleteCategory = () => {
    const { categoryId, deleteCategory, onHideModal } = this.props;
    deleteCategory(categoryId);
    onHideModal(CATEGORY_MODAL);
  };

  onUpdateCategory = (category) => {
    const { createCategory, onHideModal, updateCategory } = this.props;
    category._id ? updateCategory(category) : createCategory(category);
    onHideModal(CATEGORY_MODAL);
  };

  render() {
    const { category, categoryId, onHideModal } = this.props;

    //TODO separate ModalWindow component
    return (
      <div
        className={s.ModalBackground}
        onClick={(e) => e.target === this.ref && onHideModal(CATEGORY_MODAL)}
        ref={ref => this.ref = ref}
      >
        <div className={s.CategoryModal}>
          <span className={s.ModalTitle}>
            {categoryId ? `Edit "${category.title}"` : 'New category'}
          </span>
          <IconButton className={s.Close} name="close" onClick={() => onHideModal(CATEGORY_MODAL)}/>
          <CategoryForm
            initialValues={category}
            onDeleteCategory={this.onDeleteCategory}
            onSubmit={this.onUpdateCategory}
          />
        </div>
      </div>
    );
  }
}

CategoryModal.propTypes = {
  category: PropTypes.object.isRequired,
  categoryId: PropTypes.string,
  createCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  onHideModal: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);
