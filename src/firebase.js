import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCISL6EJ4JUXGppDOAIth68e9u5rkRWuXM",
  authDomain: "clone-2ebb1.firebaseapp.com",
  projectId: "clone-2ebb1",
  storageBucket: "clone-2ebb1.appspot.com",
  messagingSenderId: "160580434007",
  appId: "1:160580434007:web:898709db7e68b046144b12",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
