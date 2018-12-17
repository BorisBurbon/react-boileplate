/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { List, Map } from 'immutable';
import { FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './constants';

const initialState = new Map({
  users: new List(),
  error: null,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return state.set('users', action.users);
    case FETCH_USER_ERROR:
      return state.set('error', action.massage);
    default:
      return state;
  }
}

export default reducer;
