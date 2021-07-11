import { combineReducers } from "redux";
import memoryReducer from "./reducers/gameReducer";
import scoreboardReducer from "./reducers/scoreBoardReducer";

const rootReducer = combineReducers({
  memory: memoryReducer,
  scoreboard: scoreboardReducer,
});

export default rootReducer;
