/*
 *
 * Main actions
 *
 */

import {
  UPDATE_LOGIN_NAME,
  TOGGLE_LOGIN_DIALOG,
  TOGGLE_SERVICES_DRAWER,
  REQUEST_PROFILE,
} from './constants';

export function changeUsername(evt) {
  return {
    type: UPDATE_LOGIN_NAME,
    evt,
  };
}

export function toggleLoginDialog(value) {
  return {
    type: TOGGLE_LOGIN_DIALOG,
    value,
  };
}

export function requestProfile() {
  return {
    type: REQUEST_PROFILE,
  };
}

export function toggleServicesDrawer(value) {
  return {
    type: TOGGLE_SERVICES_DRAWER,
    value,
  };
}
