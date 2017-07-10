/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_USERNAME,
  SET_THEME,
  SET_LOADING,
  SET_ERROR,
} from './constants';
import { DARK } from '../../styles/themes';

const initialState = fromJS({
  loading: false,
  error: false,
  currentUsername: false,
  currentThemeName: 'DARK',
  currentTheme: DARK,
});

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return state
        .set('currentUsername', action.name);
    case SET_THEME:
      return state
        .set('currentThemeName', action.name)
        .set('currentTheme', action.value);
    case SET_LOADING:
      return state
        .set('loading', action.value);
    case SET_ERROR:
      return state
        .set('error', action.error);
    default:
      return state;
  }
}

export default mainReducer;
