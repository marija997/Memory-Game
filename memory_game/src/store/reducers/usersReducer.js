import { ADD_USER, SET_ACTIVE_USER } from "../actions/usersActions";
// import { persistedUsers } from "../persistedState";

const initialState = {
  activeUser: null,
  users: [
    {
      id: 1,
      username: "John",
      scores: [{ mode: "hard", time: "00:30", username: "John" }],
    },
    {
      id: 2,
      username: "Jane",
      scores: [{ mode: "hard", time: "00:40", username: "Jane" }],
    },
    {
      id: 3,
      username: "Dan",
      scores: [{ mode: "hard", time: "00:45", username: "Dan" }],
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
        scores: [],
      };
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
