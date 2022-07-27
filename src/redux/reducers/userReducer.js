import {
  DELETE_USER,
  FETCH_ALL_USERS,
  FETCH_ALL_USERS_ERROR,
} from "../actions/actionTypes/actionTypes";

const initialState = {
  users: [],
  permission: [],
};

export function userReducer(state = initialState, action) {
  // we are mapping the state according to the given action type
  const { payload, type } = action;

  switch (type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        users: payload,
      };
    case FETCH_ALL_USERS_ERROR:
      return {
        ...state,
        users: [],
      };
    case DELETE_USER:
      const usr = state.users.filter((e) => e.id !== payload);
      return {
        ...state,
        users: usr,
      };
    default:
      return { ...state };
  }
}
