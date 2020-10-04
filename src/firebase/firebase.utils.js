import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCxuS31xQor5wUbO2G5oB7Nagqc9Rd0o2g",
  authDomain: "crwn-db-928b7.firebaseapp.com",
  databaseURL: "https://crwn-db-928b7.firebaseio.com",
  projectId: "crwn-db-928b7",
  storageBucket: "crwn-db-928b7.appspot.com",
  messagingSenderId: "252835979138",
  appId: "1:252835979138:web:32745818a3e9fc8986b99b",
  measurementId: "G-BVEVS6QFT2",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
