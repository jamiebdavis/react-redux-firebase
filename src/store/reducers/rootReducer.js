import authReducer from "./authoReducer";
import projectReducers from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducers,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
