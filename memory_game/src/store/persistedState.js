export const localStorageKey = "users";
export const persistedUsers = localStorage.getItem(localStorageKey);

// inside this function we define all the date we want to persistingDataFunction, even if customer leaves app
export const persistingDataFunction = (store) => {
  console.log(store.getState().users.users);
  const users = persistedUsers ? persistedUsers : store.getState().users.users;
  localStorage.setItem("users", users);
};
