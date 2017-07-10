/*
 *
 * Main reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_LOGIN_NAME,
  TOGGLE_LOGIN_DIALOG,
  TOGGLE_SERVICES_DRAWER,
  REQUEST_PROFILE,
  REQUEST_PROFILE_SUCCESS,
  REQUEST_PROFILE_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  showLoginDialog: false,
  showServicesDrawer: true,
  username: '',
  services: false,
});

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOGIN_NAME:
      return state
        .set('username', action.evt.target.value);
    case TOGGLE_LOGIN_DIALOG:
      return state
        .set('showLoginDialog', action.value);
    case TOGGLE_SERVICES_DRAWER:
      return state
        .set('showServicesDrawer', action.value);
    case REQUEST_PROFILE:
      return state
        .set('loading', true)
        .set('services', false);
    case REQUEST_PROFILE_SUCCESS:
      return state
        .set('loading', false)
        .set('services', action.services);
    case REQUEST_PROFILE_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default mainReducer;
