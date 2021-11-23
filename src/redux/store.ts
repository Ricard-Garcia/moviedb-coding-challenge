import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Reducers
import CombinedReducers from "./reducers";

// Add middleware to reducers
const store = createStore(
  CombinedReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
