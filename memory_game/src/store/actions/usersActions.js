export const ADD_USER = "ADD_USER";
export const SET_ACTIVE_USER = "SET_ACTIVE_USER";

export function addUser(payload) {
  return {
    type: ADD_USER,
    payload,
  };
}

export function setActiveUser(payload) {
  return {
    type: SET_ACTIVE_USER,
    payload,
  };
}
