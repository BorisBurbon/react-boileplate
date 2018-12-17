import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from './constants';

export const fetchUsersRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USER_SUCCESS,
  users,
});

export const fetchUsersError = massage => ({
  type: FETCH_USER_ERROR,
  massage,
});
