import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  currentItem: itemReducer,
  user: userReducer
});

export default rootReducer;
