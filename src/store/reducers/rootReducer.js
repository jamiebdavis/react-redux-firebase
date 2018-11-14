import authReducer from "./authoReducer";
import projectReducers from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducers,
  firestore: firestoreReducer
});

export default rootReducer;
