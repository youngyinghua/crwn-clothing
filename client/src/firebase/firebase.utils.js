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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubcrible = auth.onAuthStateChanged((userAuth) => {
      unsubcrible();
      resolve(userAuth);
    }, reject);
  });
};

export const getCollectionData = (snapShot) => {
  let collections = {};
  snapShot.forEach((doc) => {
    collections[doc.data().title.toLowerCase()] = {
      ...doc.data(),
      routeName: encodeURI(doc.data().title.toLowerCase()),
      id: doc.id,
    };
  });
  return collections;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
