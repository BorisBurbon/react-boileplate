import { createSelector } from 'reselect';

const selectUsers = state => state.get('users');

const makeSelectUsers = () =>
  createSelector(selectUsers, usersState => usersState.get('users'));

const makeSelectError = () =>
  createSelector(selectUsers, usersState => usersState.get('error'));

export { selectUsers, makeSelectUsers, makeSelectError };
