import { createStore } from "redux";
import rootReducer from "./rootReducer";
// import { persistingDataFunction } from "./persistedState";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

// persistingDataFunction(store);

export default store;
