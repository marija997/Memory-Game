import { ADD_RESULT_TO_SCOREBOARD } from "../actions/scoreBoardActions";
import { persistedScores } from "store/persistedState";

const initialState = {
  scores: persistedScores
    ? JSON.parse(persistedScores)
    : {
        hardMode: [
          { mode: "hard", time: "30", username: "John", moves: 32 },
          { mode: "hard", time: "40", username: "Jane", moves: 35 },
          { mode: "hard", time: "45", username: "Dan", moves: 40 },
        ],
        mediumMode: [
          { mode: "medium", time: "20", username: "John", moves: 28 },
          { mode: "medium", time: "30", username: "Jane", moves: 30 },
          { mode: "medium", time: "35", username: "Dan", moves: 32 },
        ],
        easyMode: [
          { mode: "easy", time: "15", username: "John", moves: 18 },
          { mode: "easy", time: "20", username: "Jane", moves: 22 },
          { mode: "easy", time: "25", username: "Dan", moves: 27 },
          { mode: "easy", time: "27", username: "Dan", moves: 26 },
        ],
      },
};

export default function memory(state = initialState, action) {
  switch (action.type) {
    case ADD_RESULT_TO_SCOREBOARD:
      let newState = {};
      let newScore = {
        mode: action.score.mode,
        moves: action.score.moves,
        time: action.score.time,
        username: action.score.username,
      };
      switch (action.score.mode) {
        case "hard":
          const newScoresHard = {
            ...state.scores,
            hardMode: [...state.scores.hardMode, newScore],
          };
          Object.assign(newState, {
            scores: newScoresHard,
          });
          localStorage.setItem("scores", JSON.stringify(newScoresHard));
          return newState;

        case "medium":
          const newScoresMedium = {
            ...state.scores,
            mediumMode: [...state.scores.mediumMode, newScore],
          };
          Object.assign(newState, {
            scores: newScoresMedium,
          });
          localStorage.setItem("scores", JSON.stringify(newScoresMedium));
          return newState;

        case "easy":
          const newScoresEasy = {
            ...state.scores,
            easyMode: [...state.scores.easyMode, newScore],
          };
          Object.assign(newState, {
            scores: newScoresEasy,
          });
          localStorage.setItem("scores", JSON.stringify(newScoresEasy));
          return newState;

        default:
          return state;
      }

    default:
      return state;
  }
}
