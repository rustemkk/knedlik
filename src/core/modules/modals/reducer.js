import { combineReducers } from 'redux';

import { SHOW_MODAL, HIDE_MODAL } from './constants';


const modals = (state = [], action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return [
        ...state.filter(m => m.modalType !== action.modalType),
        { modalType: action.modalType, modalProps: action.modalProps }
      ];
    case HIDE_MODAL:
      return state.filter(m => m.modalType !== action.modalType);
    default:
      return state;
  }
};

export default combineReducers({
  modals
});