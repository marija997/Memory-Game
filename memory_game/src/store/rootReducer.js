import { combineReducers } from "redux";
import memoryReducer from "./reducers/gameReducer";
import scoreboardReducer from "./reducers/scoreBoardReducer";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
  memory: memoryReducer,
  scoreboard: scoreboardReducer,
  users: usersReducer,
});

export default rootReducer;
