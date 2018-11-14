import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCb48y6WN3UU6pfTudjjo1o9dvJ9Nj5d4Q",
  authDomain: "react-redux-firebase-app-2bf5a.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-app-2bf5a.firebaseio.com",
  projectId: "react-redux-firebase-app-2bf5a",
  storageBucket: "react-redux-firebase-app-2bf5a.appspot.com",
  messagingSenderId: "639145373532"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
