import {
  DELETE_USER,
  FETCH_ALL_USERS,
  FETCH_ALL_USERS_ERROR,
} from "./actionTypes/actionTypes";

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const users = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((res) => res.json());

    dispatch({ type: FETCH_ALL_USERS, payload: users });
  } catch (err) {
    console.log(err);
    dispatch({ type: FETCH_ALL_USERS_ERROR });
  }
};

export const deleteUser = (id) => (dispatch) => {
  dispatch({ type: DELETE_USER, payload: id });
};
