import { combineReducers } from "redux";

import auth from "./userReducer";
import question from "./questionsReducer";

export default combineReducers({
  auth,
  question,
});
