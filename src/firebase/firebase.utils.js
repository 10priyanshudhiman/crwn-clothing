import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';






const config = {
    apiKey: "AIzaSyAkX5GtbtR8S5_47-XUfUNUYjA5JRMkjfg",
    authDomain: "crwn-db-38077.firebaseapp.com",
    projectId: "crwn-db-38077",
    storageBucket: "crwn-db-38077.appspot.com",
    messagingSenderId: "573363189225",
    appId: "1:573363189225:web:6255e24eb4d8e1c7bd4778",
    measurementId: "G-VHR7WDE8R0"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle  = () => auth.signInWithPopup(provider);

  export default firebase;


