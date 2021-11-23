import { combineReducers } from "redux";
import globalReducer from "./global/reducer";

const reducers = combineReducers({
  global: globalReducer,
});

export default reducers;
