import {
  CREATE_CATEGORY_REQUEST,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  LOAD_CATEGORIES_REQUEST,
  LOAD_CATEGORIES_SUCCESS,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS
} from './constants';


export const loadCategories = () => ({
  type: LOAD_CATEGORIES_REQUEST
});

export const loadCategoriesSuccess = ({ entities: { categories }, result }, isResetState) => ({
  type: LOAD_CATEGORIES_SUCCESS,
  categories,
  categoriesByIds: result,
  isResetState
});

export const createCategory = (category) => ({
  type: CREATE_CATEGORY_REQUEST,
  category
});

export const updateCategory = (category) => ({
  type: UPDATE_CATEGORY_REQUEST,
  category
});

export const updateCategorySuccess = (category) => ({
  type: UPDATE_CATEGORY_SUCCESS,
  category
});

export const deleteCategory = (categoryId) => ({
  type: DELETE_CATEGORY_REQUEST,
  categoryId
});

export const deleteCategorySuccess = (categoryId) => ({
  type: DELETE_CATEGORY_SUCCESS,
  categoryId
});