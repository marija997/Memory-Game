export const NEW_GAME = "NEW_GAME";
export const END_GAME = "END_GAME";
export const SET_GAME_DIFFICULTY = "SET_GAME_DIFFICULTY";
export const FLIP_CARD = "FLIP_CARD";
export const CHECK_PAIR = "CHECK_PAIR";
export const FLIP_DOWN_PAIR = "FLIP_DOWN_PAIR";
export const SET_END_TIME = "SET_END_TIME";

export function newGame(payload) {
  return { type: NEW_GAME, payload };
}

export function endGame() {
  return { type: END_GAME };
}

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

export function setEndTime(payload) {
  return { type: SET_END_TIME, payload };
}
