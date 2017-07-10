/*
 * App constants
 */

import {
  SET_USERNAME,
  SET_THEME,
  SET_LOADING,
  SET_ERROR,
} from './constants';

export function setUsername(name) {
  return {
    type: SET_USERNAME,
    name,
  };
}

export function setTheme(name, value) {
  return {
    type: SET_THEME,
    name,
    value,
  };
}

export function setLoading(value) {
  return {
    type: SET_LOADING,
    value,
  };
}

export function setError(error) {
  return {
    type: SET_ERROR,
    error,
  };
}
