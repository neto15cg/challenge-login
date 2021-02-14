import axios from 'axios';
import { all, put, takeLatest } from 'redux-saga/effects';
import { actionTypes, failure, loadDataSuccess } from './actions';

function* login(action) {
  try {
    const res = yield axios.post('https://60283795dd4afd001754b197.mockapi.io/login', action.payload);
    const data = yield res.data;
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.LOGIN_START, login)]);
}

export default rootSaga;
