import api from 'api';

const OPEN_GLOBAL_MODAL = 'OPEN_GLOBAL_MODAL';
const CLOSE_GLOBAL_MODAL = 'CLOSE_GLOBAL_MODAL';
const SHOW_LOADING_MODAL = 'SHOW_LOADING_MODAL';
const HIDE_LOADING_MODAL = 'HIDE_LOADING_MODAL';

const openGlobalModal = (data) => ({ type: OPEN_GLOBAL_MODAL, data });
const closeGlobalModal = (id) => ({ type: CLOSE_GLOBAL_MODAL, id });
const showLoadingModal = (data) => ({ type: SHOW_LOADING_MODAL, data });
const hideLoadingModal = (data) => ({ type: HIDE_LOADING_MODAL, data });

export {
  OPEN_GLOBAL_MODAL,
  CLOSE_GLOBAL_MODAL,
  SHOW_LOADING_MODAL,
  HIDE_LOADING_MODAL,
  openGlobalModal,
  closeGlobalModal,
  showLoadingModal,
  hideLoadingModal
};
