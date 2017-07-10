import { takeLatest, put } from 'redux-saga/effects';
import {
  UPDATE_LOGIN_NAME,
  TOGGLE_LOGIN_DIALOG,
} from './constants';
import {
  SET_USERNAME,
} from '../App/constants';

// close login dialog with value so far
function* handleLoginKeys(action) {
  if (action.evt.key === 'Enter') {
    yield put({ type: SET_USERNAME, name: action.evt.target.value });
    yield put({ type: TOGGLE_LOGIN_DIALOG, value: false });
  }
}

function* watchLoginKeys() {
  yield takeLatest(UPDATE_LOGIN_NAME, handleLoginKeys);
}

// All sagas to be loaded
export default [
  watchLoginKeys,
];
