import { ADD_USER, SET_ACTIVE_USER } from "../actions/usersActions";
import { persistedUsers } from "../persistedState";

const initialState = {
  activeUser: null,
  users: persistedUsers
    ? JSON.parse(persistedUsers)
    : [
        {
          id: 1,
          username: "John",
        },
        {
          id: 2,
          username: "Jane",
        },
        {
          id: 3,
          username: "Dan",
        },
      ],
};

export default function memory(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      let newState = { ...state };
      let newUser = {
        id: state.users.length + 1,
        username: action.user,
      };
      let usersJson = JSON.stringify([...state.users, newUser]);
      localStorage.setItem("users", usersJson);

      Object.assign(newState, {
        activeUser: newUser,
        users: [...state.users, newUser],
      });
      return newState;

    case SET_ACTIVE_USER:
      let activeUser = { ...state };
      Object.assign(activeUser, { activeUser: action.user });
      return activeUser;

    default:
      return state;
  }
}
