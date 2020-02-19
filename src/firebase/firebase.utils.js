import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

