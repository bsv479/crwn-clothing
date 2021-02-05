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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user.', error.message);
    }
  }

  return userRef;
};


if (firebase.app.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;