export const SET_GAME_DIFFICULTY = "SET_GAME_DIFFICULTY";
export const RESTART_GAME = "RESTART_GAME";
export const FLIP_CARD = "FLIP_CARD";
export const CHECK_PAIR = "CHECK_PAIR";
export const FLIP_DOWN_PAIR = "FLIP_DOWN_PAIR";
export const END_GAME = "END_GAME";

export function setGameDifficulty(payload) {
  return {
    type: SET_GAME_DIFFICULTY,
    payload,
  };
}

export function flipCard(payload) {
  return {
    type: FLIP_CARD,
    payload,
  };
}

export function checkPair() {
  return {
    type: CHECK_PAIR,
  };
}

export function flipDownPair() {
  return {
    type: FLIP_DOWN_PAIR,
  };
}

export function restart() {
  return { type: RESTART_GAME };
}

export function endGame() {
  return { type: END_GAME };
}
