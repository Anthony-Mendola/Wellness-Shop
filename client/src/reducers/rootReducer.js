import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import itemReducer from "./itemReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  items: itemsReducer,
  currentItem: itemReducer,
  user: userReducer
});

export default rootReducer;
