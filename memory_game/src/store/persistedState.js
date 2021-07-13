export const persistedUsers = localStorage.getItem("users");
export const persistedScores = localStorage.getItem("scores");

// inside this function we define all the date we want to persistingDataFunction, even if customer leaves app
export const persistingDataFunction = (store) => {
  let users = persistedUsers
    ? persistedUsers
    : JSON.stringify(store.getState().users.users);

  let scores = persistedScores
    ? persistedScores
    : JSON.stringify(store.getState().scoreboard.scores);

  //setting data into the local storage
  localStorage.setItem("users", users);
  localStorage.setItem("scores", scores);
};
