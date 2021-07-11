import { ADD_RESULT_TO_SCOREBOARD } from "../actions/scoreBoardActions";

const initialState = {
  scores: [],
};

export default function memory(state = initialState, action) {
  switch (action.type) {
    case ADD_RESULT_TO_SCOREBOARD:
      let newState = [];
      Object.assign(
        newState,
        state.scores.push[{ moves: action.moves, time: action.time }]
      );
      console.log(newState);
      return newState;

    default:
      return state;
  }
}
