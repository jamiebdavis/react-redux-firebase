import authReducer from "./authoReducer";
import projectReducers from "./projectReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducers
});

export default rootReducer;
