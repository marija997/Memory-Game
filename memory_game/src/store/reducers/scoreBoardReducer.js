import { ADD_RESULT_TO_SCOREBOARD } from "../actions/scoreBoardActions";

const initialState = {
  scores: {
    hardMode: [
      { mode: "hard", time: "00:30", username: "John" },
      { mode: "hard", time: "00:40", username: "Jane" },
      { mode: "hard", time: "00:45", username: "Dan" },
    ],
    mediumMode: [
      { mode: "medium", time: "00:20", username: "John" },
      { mode: "medium", time: "00:30", username: "Jane" },
      { mode: "medium", time: "00:35", username: "Dan" },
    ],
    easyMode: [
      { mode: "easy", time: "00:15", username: "John" },
      { mode: "easy", time: "00:20", username: "Jane" },
      { mode: "easy", time: "00:25", username: "Dan" },
    ],
  },
};

export default function memory(state = initialState, action) {
  switch (action.type) {
    case ADD_RESULT_TO_SCOREBOARD:
      let newState = [];
      Object.assign(
        newState,
        state.scores.push[{ moves: action.moves, time: action.time }].sort(
          (a, b) => {
            return a.time - b.time;
          }
        )
      );
      return newState;

    default:
      return state;
  }
}
