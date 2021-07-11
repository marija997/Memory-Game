export const ADD_RESULT_TO_SCOREBOARD = "ADD_RESULT_TO_SCOREBOARD";

export function addResultToScoreboard(payload) {
  return {
    type: ADD_RESULT_TO_SCOREBOARD,
    payload,
  };
}
