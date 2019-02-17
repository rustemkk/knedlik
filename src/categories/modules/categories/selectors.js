/* eslint import/no-unresolved: 0 */
import { get as g } from 'lodash';
import { createSelector } from 'reselect';


export const getCategoriesEntities = (state) =>
  g(state, 'categories.categories', {});

export const getCategoriesIds = (state) =>
  g(state, 'categories.categoriesByIds', []);

export const getCategories = createSelector(
  getCategoriesEntities,
  getCategoriesIds,
  (categories, ids) => ids.map(id => categories[id])
);

export const getCategoryById = (categoryId) => createSelector(
  getCategoriesEntities,
  (categories) => categories[categoryId]
);