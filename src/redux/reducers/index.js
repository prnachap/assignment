import { combineReducers } from "redux";
import stories from "./stories";

const rootReducer = combineReducers({
  stories: stories,
});

export default rootReducer;
