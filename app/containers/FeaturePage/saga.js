import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { List } from 'immutable';

import { FETCH_USER_REQUEST } from './constants';
import { fetchUsersSuccess, fetchUsersError } from './actions';

export function* fetchUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  try {
    const response = yield call(request, url);
    const users = new List(response);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    const massage = 'Fail to fetch users, please try again';
    yield put(fetchUsersError(massage));
  }
}

export default function* usersSaga() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUsers);
}
