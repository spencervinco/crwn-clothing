import firebase from "firebase/app"; //pulling in firebase utility library.
import "firebase/firestore"; //for database
import "firebase/auth"; //for authentication

//npm add firebase
//manually add this file and reference in app.js
//add below config from firebase dashboard
//go into set up sign in method in authentication page on firebase website

const config = {
  apiKey: "AIzaSyDDB_BCtSZsvWBZH1PNriOjucDzWG8TUNE",
  authDomain: "crwn-db-adaa7.firebaseapp.com",
  databaseURL: "https://crwn-db-adaa7.firebaseio.com",
  projectId: "crwn-db-adaa7",
  storageBucket: "crwn-db-adaa7.appspot.com",
  messagingSenderId: "1052936646740",
  appId: "1:1052936646740:web:469b3ab33d99f64b8d3dc1",
  measurementId: "G-E579RTJ0FL"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
