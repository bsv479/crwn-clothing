import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBqA33zefzQ6HFrtyUXAXpaTxSu73Vp5os",
  authDomain: "crwn-db-392f8.firebaseapp.com",
  projectId: "crwn-db-392f8",
  storageBucket: "crwn-db-392f8.appspot.com",
  messagingSenderId: "849919455310",
  appId: "1:849919455310:web:af86c9eeca1e5836a7d31f",
  measurementId: "G-71KHGN11MV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;